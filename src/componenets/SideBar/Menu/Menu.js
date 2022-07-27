import styled from "styled-components";
import MenuItem from "./MenuItem";

const Container = styled.div`
  margin-top: 2rem;
  width: 100%;
`;
const Menu = () => {
  return (
    <Container>
      {/* ask tireni to add icons */}
      <MenuItem title="Budget" icon="" />
      <MenuItem title="Set Balance" icon="" active />
    </Container>
  );
};

export default Menu;
