import React,{useState,useContext} from "react";


import {Link} from 'react-router-dom';
import styles from "./MenuMobile.module.css"
import { AuthContext } from "../../context/auth-context";

const MenuMobile=({navigateAway})=> {
    const [click, setClick] = useState(false);
    const ctx= useContext(AuthContext);
    const handleClick = () => setClick(!click);
    const logOutHandler=()=>{
      navigateAway();
      ctx.logout();
    }
    return (
      <>
        <ul
          onClick={handleClick}
          className={click ? `${styles[`dropdown-menu clicked`]}` : `${styles[`dropdown-menu`]}`}
        >
          {/* {MenuItems.map((item, index) => {
            return (
              <li key={index}>
                <Link
                  className={item.cName}
                  to={item.path}
                  onClick={() => setClick(false)}
                >
                  {item.title}
                </Link>
              </li>
            );
          })} */}
          <li><Link onClick={navigateAway} to="/covid-tracker">Covid Tracker</Link></li>
          <li><Link onClick={navigateAway} to="/news">News</Link></li>
          <li><Link onClick={navigateAway} to="/paraphrasing">Paraphraser</Link></li>
          <li><Link onClick={navigateAway} to="/converter">PDF Converter</Link></li>
          <hr/>
          <li><Link onClick={navigateAway} to="/notes">Your Notes</Link></li>
          <li className={styles.logout}><button onClick={logOutHandler}>Logout</button></li>
        </ul>
      </>
    );
  }
  
  export default MenuMobile;