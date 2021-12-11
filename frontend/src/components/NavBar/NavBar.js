import React,{useContext, useState} from "react";
import { Link } from "react-router-dom";
import { StickyNote2, AccountCircle, Logout, SportsEsports,Menu } from "@mui/icons-material";
import Dropdown from "./DropdownMenu";
import MenuMobile from "./MenuMobile";
import styles from "./NavBar.module.css";
import { AuthContext } from "../../context/auth-context";
const NavBar = () => {
  const ctx=useContext(AuthContext);
  const [dropdown,setDropdown]=useState(false);
  const [menuMode,setMenuMode]=useState(false);


  const navigateAway=()=>{
    setMenuMode(false);
  }

  const logoutHandler=()=>{
     ctx.logout();
  }

  const onMouseEnter = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(true);
    }
  };

  const onMouseLeave = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(false);
    }
  };

  return ( <React.Fragment>
    <div className={`${styles.navbar}`} >
      <div className={`${styles.body}`} />
      <div className={styles.left}>
        <Link onClick={navigateAway} className={styles.homeLink} to="/"><img src="logo-big.png" alt="logo" className={styles.logo}/></Link>
        <Link to="/covid-tracker">Covid Tracker</Link>
        <Link to="/news">News</Link>
        <div  className={styles.tools} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
        <Link to='#'>Tools</Link>
        {dropdown && <Dropdown />}

        </div>
        {/* <Link to="/paraphrasing">Paraphraser</Link>
        <Link to="/converter">Converter</Link> */}
        {/* <a>Map</a> */}
      </div>
      <div className={styles.right}>
      <div onClick={menuMode? ()=>{setMenuMode(false)} : ()=>{setMenuMode(true)}} className={!menuMode? `${styles.burger}`: `${styles.burgerActive}`}><Menu /></div>
        <span>
          <AccountCircle className={styles.profile}/> 
            <p className={styles.name}>{ctx.name}</p>
        </span>
        <Link to="/notes">
          <span title="Keep Notes">
            <StickyNote2 />
          </span>
          </Link>
          <Link to="/sudoku">
          <span title="Play Sudoku">
            <SportsEsports />
          </span>
        </Link>
          <span title="Logout" className={styles.logout}>
            <Logout onClick={logoutHandler} />
          </span>
      </div>
      
    </div>
    {menuMode && <MenuMobile navigateAway={navigateAway}/>}
    </React.Fragment>
  );
};

export default NavBar;
