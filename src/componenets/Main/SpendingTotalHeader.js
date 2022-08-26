import styled from "styled-components";
const Container = styled.div`
  width: 100%;
  display: flex;
  height: 7rem;
  align-items: center;
  margin-bottom: 1rem;
`;

const Text = styled.h1`
  color: black;
  font-size: 48;
  font-weight: 400;
  /* font-family: "Nunito"; */
`;

const SpendingTotalHeader = (props) => {
  //   const [total, updateTotal] = useState("");

  return (
    <Container>
      <Text>
        Hey NewSpring Church, you have ${props.total} in your spending account
      </Text>
      {/* i want to update total when the tatal get updated */}
    </Container>
  );
};

export default SpendingTotalHeader;
