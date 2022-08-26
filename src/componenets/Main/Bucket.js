// import { useState } from "react";
import styled from "styled-components";
const Container = styled.div`
  cursor: pointer;
  display: flex;
  color: #1a2b88;
  border-radius: 25px;

  height: 7rem;
  align-items: center;
  margin-bottom: 1rem;
  transition: 0.2s all ease-in-out;
  background-color: white;
  &:hover {
    background-color: rgba(0, 0, 0, 0.1);
  }
`;
// const Icon = styled.span`
//   color: ${(props) => (props.active ? "#253275" : "grey")};
//   font-size: 1rem;
//   margin-right: 1rem;
// `;
const Title = styled.h1`
  color: "#253275";
  font-size: 28;
  font-weight: 500;
  margin-right: 35rem;
  float: left;
  padding-left: 4rem;
`;

const Amount = styled.h1`
  color: "#253275";
  font-size: 28;
  font-weight: 500;
  text-align: right;
  float: right;
  padding-right: 4rem;
  /* text align won't work so adding a very bg margin to title */
`;

const Bucket = ({ buckets }) => {
  //   const [edit, setEdit] = useState({
  //     id: null,
  //     values: "",
  //   });
  return buckets.map((bucket, index) => (
    <Container key={index}>
      <Title>{bucket.title}</Title>
      <Amount>${bucket.amount}</Amount>
    </Container>
  ));
};

export default Bucket;
