import React from 'react';

import './sign-in-and-sign-up.styles.scss';

import { SignIn, SignUp } from "../../components/index.components";

const SignInAndSignUpPage = () => (
  <div className='sign-in-and-sign-up'>
    <SignIn /> 
    <SignUp />
  </div>
); 

export default SignInAndSignUpPage; 
