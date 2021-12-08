import React, { useState } from 'react';

import Form from './Form';
import styles from './LoginPage.module.css';

const LoginPage=()=>{
    const [loginMode,setLoginMode] = useState(true);

    const onSubmitHandler= async(user)=>{
        if(loginMode){
            try{
            const result = await fetch("http://localhost:5000/api/users/login",{
                method: 'POST',
                body: JSON.stringify(user),
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            if(!result.ok){
                console.log(result);
            }
            const data = await result.json();
            console.log(data);
          }catch(err){
              console.log(err);
          }
        }else{
            try{
                const result = await fetch("http://localhost:5000/api/users/register",{
                    method: 'POST',
                    body: JSON.stringify(user),
                    headers: {
                        'Content-Type': 'application/json'
                    }
                });
                if(!result.ok){
                    console.log(result);
                }
                const data = await result.json();
                console.log(data);
              }catch(err){
                  console.log(err);
              }
        }
    }
    
    const switchHandler=()=>{
        setLoginMode((prevMode)=> !prevMode);
    }
    return <div className={`${styles.formBox}`}>
        <h1 className={styles.heading}>{loginMode? "Sign In" : "Sign Up"}</h1>
        <Form submitHandler={onSubmitHandler} loginMode={loginMode}/>
        <button onClick={switchHandler} className={`${styles.switch}`}>Switch</button>
    </div>
}

export default LoginPage;