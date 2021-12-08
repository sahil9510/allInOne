import React, { useState } from "react";


import NavBar from "./components/NavBar/NavBar";
import NewsPage from "./components/NewsPage/NewsPage";
import HomePage from "./components/HomePage/HomePage";
import LoginPage from './components/LoginPage/LoginPage';
// import NewsPage from "./components/NewsPage/NewsPage";
// import KeepNotes from './components/keepNotes/KeepNotes';
// import CovidTracker from './components/covidTracker/CovidTracker';
import QuotePage from "./components/QuotePage/QuotePage";
function App() {


  return (
    <React.Fragment>
    {/* <NavBar /> */}
    <QuotePage />
    </React.Fragment>
  );
}

export default App;
