import React, { useState } from 'react';

export const AuthContext = React.createContext({
    token: "",
    name: "",
    userId: "",
    isLoggedIn: false,
    login: ()=>{},
    logout: ()=>{}
});


const AuthContextProvider = ({children})=>{
    const [isLoggedIn,setIsLoggedIn]=useState(false);
    let name;
    const logoutHandler=()=>{
        setIsLoggedIn(false);
    }

    const loginHandler=(userInfo)=>{
        name=userInfo.name;
        setIsLoggedIn(true);
    }

    return (
        <AuthContext.Provider value={{name: name,isLoggedIn: isLoggedIn,login:loginHandler,logout:logoutHandler }}>
            {children}
        </AuthContext.Provider>
    )
}


export default AuthContextProvider;