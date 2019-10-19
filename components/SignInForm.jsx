import React from 'react';
import styled from 'styled-components';
import Input from './Input';
import Button from './Button';

const StyledSignInForm = styled.div`
  background: white;
  padding: 2rem 3rem;
  border-radius: 1rem;
  height: 600px;
  text-align: center;
`;

const Heading = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 2rem;
  color: #0c1066;
  letter-spacing: .2rem;
  font-weight: 700;
`;

const SignInForm = () => (
  <StyledSignInForm>
    <Heading>Login</Heading>
    <div>
      <Input placeholder="Email" />
    </div>
    <div>
      <Input placeholder="Password" type="password" />
    </div>
    <div>
      <Button>Login</Button>
    </div>
    <p>
      Do not have account? <a href="">SIGN UP</a>
    </p>
  </StyledSignInForm>
);

export default SignInForm;
