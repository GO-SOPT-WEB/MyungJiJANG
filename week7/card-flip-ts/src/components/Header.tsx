import styled from "styled-components";
import { COLOR } from "../styles/color";

function Header() {
  return (
    <div>
      <StTitle>💸이거 맞추면 나 사주는 거다 ?💸</StTitle>
    </div>
  );
}

export default Header;

const StTitle = styled.h1`
  display: inline-block;
  padding: 0.5rem 3rem;
  font-size: 5rem;
  font-weight: 700;
  border-radius: 3rem;
  background-color: ${COLOR.whiteYellow};
  color: ${COLOR.textRed};
`;
