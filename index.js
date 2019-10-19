import React, { Component } from 'react';
import styled from 'styled-components';
import { render } from 'react-dom';
import Container from './components/Container';
import SignInForm from './components/SignInForm';
import './style.css';

const Layout = styled.div`
  height: 100vh;
  background-image: linear-gradient(to top,#5ee7df 0,#66a6ff 100%);
  padding: 100px 0;
`;

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Layout>
       <Container>
        <SignInForm />
       </Container>
      </Layout>
    );
  }
}

render(<App />, document.getElementById('root'));
