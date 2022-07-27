import React from "react";
import styled from "styled-components";

const Container = styled.div`
  margin-top: 5rem;
`;
//use NSC logo
const BrandName = styled.h1`
  font-size: 1rem;
  font-weight: 300;
  color: #253275;
`;
const Brand = () => {
  return (
    <Container>
      <BrandName>LOGO</BrandName>
    </Container>
  );
};

export default Brand;
