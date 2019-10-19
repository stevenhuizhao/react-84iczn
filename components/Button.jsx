import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  background-color: #00ff9b;
  padding: 1rem;
  border-radius: 2rem;
  outline: 0;
  border: none;
  color: #fff;
  font-size: 1.1rem;
  cursor: pointer;
  margin-top: 1.5rem;
  box-shadow: 0 0 2rem rgba(0,0,255,.1);
  min-width: 200px;
`;

const Button = ({
  children,
}) => (
  <StyledButton>{children}</StyledButton>
);

export default Button;