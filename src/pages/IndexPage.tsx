import React from "react";
import styled, { keyframes } from "styled-components";
import logo from "../../static/react-logo.svg";

const Container = styled.section`
  text-align: center;
`;

const Header = styled.header`
  background-color: #222;
  height: 150px;
  padding: 20px;
  color: white;
`;

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const Logo = styled.img`
  animation: ${rotate} infinite 20s linear;
  height: 80px;
`;

const IndexPage = () => (
  <Container>
    <Header>
      <Logo src={logo} alt="logo" />
      <h2>Yeah, React!</h2>
    </Header>
  </Container>
);

export default IndexPage;
