import { useState } from "react";
import styled from "styled-components";

const BucketInput = styled.input`
  padding: 14px 32px 14px 16px;
  border-radius: 4px 0 0 4px;
  border: 2px solid #253275;
  outline: none;
  width: 370px;
  background: transparent;
  color: #253275;
`;

const BucketForm = styled.form`
  margin-bottom: 32px;
  float: right;
`;

const AddBucketButton = styled.button`
  padding: 16px;
  border: none;
  border-radius: 0 4px 4px 0;
  cursor: pointer;
  outline: none;
  background: #253275;
  color: #fff;
  text-transform: capitalize;
`;
const BucketInfoForm = (props) => {
  const [input, setInput] = useState("");
  const handleChange = (e) => {
    setInput(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    props.onSubmit({
      id: Math.floor(Math.random() * 10000),
      text: input,
      title: input.split(",")[0],
      amount: input.split(",")[1],
    });

    setInput("");
  };
  return (
    <BucketForm onSubmit={handleSubmit}>
      <BucketInput
        type="text"
        placeholder="Add a bucket name and amount eg Music,500"
        value={input}
        name="BucketInfo"
        onChange={handleChange}
      />
      <AddBucketButton>ADD BUCKET</AddBucketButton>
    </BucketForm>
  );
};

export default BucketInfoForm;
