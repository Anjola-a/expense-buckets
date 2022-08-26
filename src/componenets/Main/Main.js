import React from "react";
import styled from "styled-components";
import SpendingTotalHeader from "./SpendingTotalHeader";
import BucketItems from "./BucketItem";
const Container = styled.div`
  width: 75rem;
  margin-left: 16rem;
  height: 100%;
  position: relative;
  padding: 2rem 4rem;
  color: pink;
  background-color: #f0f2f5;
  position: fixed;
  /* left: 0; */
  top: 0;
  bottom: 0;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Main = () => {
  return (
    <Container>
      <SpendingTotalHeader total={600} />
      <BucketItems />
    </Container>
  );
};

export default Main;
