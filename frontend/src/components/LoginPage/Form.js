import React from "react";

import useForm from "../../hooks/form-hook";
import styles from "./Form.module.css";

const emailValidator = (email) => {
  return email.includes("@");
};

const passwordValidator = (password) => {
  return password.trim().length >= 5;
};

const nameValidator = (name) => {
  return name.trim().length > 0;
};


const Form = ({ loginMode ,submitHandler}) => {
  const {
    value: enteredEmail,
    hasError: emailError,
    valueChangeHandler: emailChangeHandler,
    blurHandler: emailBlurHandler,
    valueisValid: emailIsValid,
  } = useForm(emailValidator);

  const {
    value: enteredPassword,
    hasError: passwordError,
    valueChangeHandler: passwordChangeHandler,
    blurHandler: passwordBlurHandler,
    valueisValid: passwordIsValid,
  } = useForm(passwordValidator);

  const {
    value: enteredName,
    hasError: nameError,
    valueChangeHandler: nameChangeHandler,
    blurHandler: nameBlurHandler,
    valueisValid: nameIsValid,
  } = useForm(nameValidator);

  let FormIsValid;
  if(loginMode){
      FormIsValid=emailIsValid && passwordIsValid;
  }else{
      FormIsValid=emailIsValid && passwordIsValid && nameIsValid;
  }

  const onSubmitHandler=(event)=>{
      event.preventDefault();
      
      if(loginMode){
         submitHandler({email:enteredEmail,password: enteredPassword});
      }else{
          submitHandler({email:enteredEmail,password:enteredPassword,name:enteredName});
      }
  }

  return (
    <form onSubmit={onSubmitHandler}>
      <div className={styles.form}>
        {!loginMode && (
          <input
            value={enteredName}
            type="text"
            name="name"
            label="Password"
            className={`${styles.input} ${nameError && styles.invalid}`}
            placeholder="Name"
            onChange={nameChangeHandler}
            onBlur={nameBlurHandler}
          />
        )}
        {!loginMode && <label htmlFor="name">Invalid Name (Cant be blank)</label>}

        <input
          value={enteredEmail}
          name="email"
          type="text"
          placeholder="E-Mail"
          className={`${styles.input} ${emailError && styles.invalid}`}
          onChange={emailChangeHandler}
          onBlur={emailBlurHandler}
        />
        <label htmlFor="email">Invalid Email</label>
        <input
          value={enteredPassword}
          name="password"
          type="password"
          label="Password"
          placeholder="Password"
          className={`${styles.input} ${passwordError && styles.invalid}`}
          onChange={passwordChangeHandler}
          onBlur={passwordBlurHandler}
        />
        <label htmlFor="password">Invalid Password(Min length 5)</label>
          <button type="submit" className={styles.button} disabled={!FormIsValid}>
            {loginMode ? "Login" : "Register"}
          </button>
      </div>
    </form>
  );
};

export default Form;
