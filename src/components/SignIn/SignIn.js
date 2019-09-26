import React, { useState } from 'react';

import './SignIn.scss';

import FormInput from '../../components/FormInput/FormInput';
import CustomButton from '../../components/CustomButton/CustomButton';

const SignIn = () => {
  const [state, setState] = useState({
    email: '',
    password: ''
  });

  const submitHandle = e => {
    setState({
      email: '',
      password: ''
    })
  }

  const changeHandle = e => {
    const { value, name } = e.target;

    setState(prevState => ({
      ...prevState,
      [name]: value
    }));
  }

  return (
    <div className="sign-in">
      <h2 className="sign-in__title">
        I already have an account
      </h2>
      <span className="sign-in__subtitle">
        Sign in with your email and password
      </span>

      <form onSubmit={submitHandle}>
        <FormInput 
          type="email" 
          name="email"
          value={state.email}
          changeHandle={changeHandle}
          label="email"
          required
        />
        <FormInput 
          type="password" 
          name="password"
          value={state.password}
          changeHandle={changeHandle}
          label="password"
          required
        />
        <CustomButton type="submit">
          Sign In
        </CustomButton>
      </form>
    </div>
  );
};

export default SignIn;
