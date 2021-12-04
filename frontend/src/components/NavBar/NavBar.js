import React,{useState} from "react";
import { NavLink } from "react-router-dom";
import { StickyNote2, AccountCircle, Logout } from "@mui/icons-material";
import styles from "./NavBar.module.css";
const NavBar = () => {

  const [isScrolled,setIsScrolled]=useState(false);

//   window.onscroll=()=>{
//     console.log("Scrolled");
//     setIsScrolled(window.pageYOffset===0 ? false: true);
//     return ()=> window.onscroll=null;
// }


  return (
    <div className={`${styles.navbar} ${isScrolled ? `${styles.scrolled}` : ""}`} >
      <div className={`${styles.body} ${isScrolled ? `${styles.scrolled}` : ""}`} />
      <div className={styles.left}>
        <h1>Logo</h1>
        <a>Covid Tracker</a>
        <a>News</a>
        <a>Map</a>
      </div>
      <div className={styles.right}>
        <span>
          <AccountCircle className={styles.profile}/> 
            <p>Sahil Srivastava</p>
        </span>
        <a>
          <span>
            <StickyNote2 />
          </span>
        </a>
        <a>
          <span className={styles.logout}>
            <Logout />
          </span>
        </a>
      </div>
      
    </div>
  );
};

export default NavBar;
