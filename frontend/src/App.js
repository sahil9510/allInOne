import React, { useEffect,useCallback, useContext, useState } from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import NavBar from "./components/NavBar/NavBar";
import NewsPage from "./components/NewsPage/NewsPage";
import HomePage from "./components/HomePage/HomePage";
import LoginPage from "./components/LoginPage/LoginPage";
import KeepNotes from "./components/keepNotes/KeepNotes";
import CovidTracker from "./components/covidTracker/CovidTracker";
import QuotePage from "./components/QuotePage/QuotePage";
import { AuthContext } from "./context/auth-context";

let logoutTimer;
function App() {
  const ctx = useContext(AuthContext);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [tokenExpirationDate,setTokenExpirationDate]=useState();
  const name = ctx.name;
  const token = ctx.token;
  const userId = ctx.userId;


  const logoutHandler = () => {
    ctx.name="";
    ctx.token="";
    ctx.userId="";
    setTokenExpirationDate(null);
    localStorage.removeItem("userData");
    setIsLoggedIn(false);
  };

  const loginHandler = useCallback((userInfo,expirationDate) => {
    ctx.name = userInfo.name;
    ctx.token = userInfo.token;
    ctx.userId = userInfo.userId;
    const tokenExpirationDate = expirationDate || new Date(new Date().getTime() + 1000*60*60);
    setTokenExpirationDate(tokenExpirationDate);
  localStorage.setItem(
    "userData",
    JSON.stringify({
      userId: userInfo.userId,
      name: userInfo.name,
      token: userInfo.token,
      expiration: tokenExpirationDate.toISOString(),
    }));
    setIsLoggedIn(true);
  },[]);


  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem("userData"));
    console.log(storedData);
    if (storedData && storedData.token && new Date(storedData.expiration) > new Date()) {
      loginHandler({userId:storedData.userId,name: storedData.name, token: storedData.token}, new Date(storedData.expiration));
    }
  },[loginHandler]);


  useEffect(()=>{
    if(token && tokenExpirationDate){
      const remainingTime = tokenExpirationDate.getTime() - new Date().getTime();
      logoutTimer= setTimeout(logoutHandler,remainingTime);
    }
    else{
      clearTimeout(logoutTimer);
    }
  },[token,logoutHandler,tokenExpirationDate])


  let routes;
  if (isLoggedIn) {
    routes = (
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
    );
  } else {
    routes = (
      <>
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
      </>
    );
  }
  console.log(routes);
  console.log(isLoggedIn);
  return (
    <AuthContext.Provider
      value={{
        token: token,
        name: name,
        isLoggedIn: isLoggedIn,
        login: loginHandler,
        logout: logoutHandler,
      }}
    >
      {routes}
    </AuthContext.Provider>
  );
}

export default App;
