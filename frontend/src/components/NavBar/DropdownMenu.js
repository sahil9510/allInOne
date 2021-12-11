import React,{useState} from "react";


import {Link} from 'react-router-dom';
import styles from "./DropdownMenu.module.css"

const Dropdown=()=> {
    const [click, setClick] = useState(false);
  
    const handleClick = () => setClick(!click);
  
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
          <Link to="/paraphrasing">Paraphraser</Link>
          <Link to="/converter">PDF Converter</Link>
        </ul>
      </>
    );
  }
  
  export default Dropdown;