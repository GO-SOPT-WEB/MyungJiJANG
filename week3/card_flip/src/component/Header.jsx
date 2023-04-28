import styled from "styled-components";

function Header() {
  return (
    <div>
      <StTitle>💸이거 맞추면 나 사주는 거다 ?💸</StTitle>
      <button>reset</button>
    </div>
  );
}

export default Header;

const StTitle = styled.h1`
  font-size: 4rem;
`;
