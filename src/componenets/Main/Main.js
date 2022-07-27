import React from "react";
import styled from "styled-components";
import NewBucketButton from "./NewBucketBtn";
const Container = styled.div`
  width: auto;
  margin-left: 16rem;
  position: relative;
  padding: 0 4rem;
`;

const Main = () => {
  return (
    <Container>
      <NewBucketButton></NewBucketButton>
    </Container>
  );
};

export default Main;
