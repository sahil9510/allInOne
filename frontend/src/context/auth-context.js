import React, { useState } from 'react';

export const AuthContext = React.createContext({
    isLoggedIn: false,
    login: ()=>{},
    logout: ()=>{}
});


const AuthContextProvider = ({children})=>{
    const [isLoggedIn,setIsLoggedIn]=useState(false);

    const logoutHandler=()=>{
        setIsLoggedIn(false);
    }

    const loginHandler=()=>{
        setIsLoggedIn(true);
    }

    return (
        <AuthContext.Provider value={{isLoggedIn: isLoggedIn,login:loginHandler,logout:logoutHandler }}>
            {children}
        </AuthContext.Provider>
    )
}


export default AuthContextProvider;