/* eslint-disable react/prop-types */

import styled from "styled-components";

function Reset({ onClick }) {
  return (
    <>
      <StResetButtom onClick={onClick}>다시 고를랭~</StResetButtom>
    </>
  );
}

export default Reset;

const StResetButtom = styled.button`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;
`;
