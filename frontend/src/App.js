import React, { useState } from "react";
import  {Route,Switch,Redirect} from 'react-router-dom';

import NavBar from "./components/NavBar/NavBar";
import NewsPage from "./components/NewsPage/NewsPage";
import HomePage from "./components/HomePage/HomePage";
import LoginPage from './components/LoginPage/LoginPage';
import KeepNotes from './components/keepNotes/KeepNotes';
import CovidTracker from './components/covidTracker/CovidTracker';
import QuotePage from "./components/QuotePage/QuotePage";
import {AuthContext} from './context/auth-context';
function App() {

    const [isLoggedIn,setIsLoggedIn]=useState(false);

    const logoutHandler=()=>{
        setIsLoggedIn(false);
    }

    const loginHandler=()=>{
        setIsLoggedIn(true);
    }

  let routes;
  if(isLoggedIn){
    routes=(
      <React.Fragment>
        <NavBar />
      <Switch>
        <Route path="/" exact>
          <HomePage />
        </Route>
        <Route path="/covid-tracker">
          <CovidTracker />
        </Route>
        <Route path="/news">
          <NewsPage />
        </Route>
        <Route path="/notes">
          <KeepNotes />
        </Route>
        <Route path="*">
          <Redirect to="/" />
        </Route>
      </Switch>
      </React.Fragment>
    )
  }else{
      routes = (<>
      <Switch>
        <Route path="/" exact>
          <QuotePage />
        </Route>
        <Route path="/auth">
          <LoginPage />
        </Route>
        <Route path="*">
          <Redirect to="/" />
        </Route>
      </Switch>
      </>)
  }
  console.log(routes);
  console.log(isLoggedIn);
  return (
    <AuthContext.Provider value={{isLoggedIn: isLoggedIn,login:loginHandler,logout:logoutHandler }}>
      {routes}
    </AuthContext.Provider>
  );
}

export default App;
