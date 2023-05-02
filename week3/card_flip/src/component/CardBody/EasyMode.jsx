/* eslint-disable react/prop-types */
import GiftBox from "../../assets/GiftBox.png";
import styled from "styled-components";

function EasyMode({ easy, handleCardChoice, flipped }) {
  const handleCardClick = () => {
    handleCardChoice(easy);
  };
  return (
    <StWrapper className="card">
      <StCardFlex>
        <StFrontImage
          className="front"
          src={easy.image}
          alt={easy.alt}
          style={{ transform: flipped ? "rotateY(0deg)" : "rotateY(90deg)" }} // props로 flipped를 받아서 그 상태에 따라 로테이트 값을 바꿔준다!
        />
        <StBackImage
          className="back"
          src={GiftBox}
          alt="카드 뒷면"
          onClick={handleCardClick}
        />
      </StCardFlex>
    </StWrapper>
  );
}

export default EasyMode;

const StWrapper = styled.div`
  position: relative;
`;

const StCardFlex = styled.div`
  display: flex;
  flex-direction: column;
`;

const StBackImage = styled.img`
  width: 20rem;
  height: 20rem;
  border: 0.3rem solid black; //theme 적용시키기
`;

const StFrontImage = styled.img`
  position: absolute;
  width: 20rem;
  height: 20rem;
  border: 0.3rem solid black; //theme 적용시키기
  background-color: white; //theme 적용시키기
`;
