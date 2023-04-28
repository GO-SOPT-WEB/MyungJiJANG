import React from "react";
import GiftBox from "../../assets/GiftBox.png";
import styled from "styled-components";

function EasyMode({ easy }) {
  return (
    <StCardFlex>
      <StFrontImage className="front" src={easy.image} alt={easy.alt} />
      <StBackImage className="back" src={GiftBox} alt="" />
    </StCardFlex>
  );
}

export default EasyMode;

const StCardFlex = styled.div`
  display: flex;
  flex-direction: column;
`;

const StBackImage = styled.img`
  width: 20rem;
  height: 20rem;
  border: 0.3rem solid black;
`;

const StFrontImage = styled.img`
  width: 20rem;
  height: 20rem;
  border: 0.3rem solid black;
`;
