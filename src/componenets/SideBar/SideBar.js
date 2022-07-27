import React from "react";
import styled from "styled-components";
import Brand from "./Brand";
import Menu from "./Menu/Menu";
const Container = styled.div`
  background-color: #e8f1f5;
  position: fixed;
  left: 0;
  top: 0;
  bottom: 0;
  width: 16rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const SideBar = () => {
  return (
    <Container>
      <Brand />
      <Menu />
    </Container>
  );
};

export default SideBar;
