import React from 'react';

export const AuthContext = React.createContext({
    token: "",
    name: "",
    userId: "",
    isLoggedIn: false,
    login: ()=>{},
    logout: ()=>{},
});


