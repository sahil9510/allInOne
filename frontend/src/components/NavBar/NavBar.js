import React,{useContext} from "react";
import { Link } from "react-router-dom";
import { StickyNote2, AccountCircle, Logout } from "@mui/icons-material";
import styles from "./NavBar.module.css";
import { AuthContext } from "../../context/auth-context";
const NavBar = () => {
  const ctx=useContext(AuthContext);
  const logoutHandler=()=>{
     ctx.logout();
  }

  return (
    <div className={`${styles.navbar}`} >
      <div className={`${styles.body}`} />
      <div className={styles.left}>
        <Link className={styles.homeLink} to="/"><img src="logo-big.png" alt="logo" className={styles.logo}/></Link>
        <Link to="/covid-tracker" className={styles.navHead}>Covid Tracker</Link>
        <Link to="/news" className={styles.navHead}>News</Link>
        {/* <a>Map</a> */}
      </div>
      <div className={styles.right}>
        <span>
          <AccountCircle className={styles.profile}/> 
            <p className={styles.name}>{ctx.name}</p>
        </span>
        <Link to="/notes">
          <span>
            <StickyNote2 />
          </span>
          </Link>
          <Link to="/sudoku">
          <span className={styles.sudoku}>
            Sudoku
          </span>
        </Link>
          <span className={styles.logout}>
            <Logout onClick={logoutHandler} />
          </span>
      </div>
      
    </div>
  );
};

export default NavBar;
