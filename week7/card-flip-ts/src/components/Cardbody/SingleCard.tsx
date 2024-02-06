import GiftBox from "../../assets/GiftBox.png";
import styled from "styled-components";
import { COLOR } from "../../styles/color";
import { Card } from "./GameMode";

interface SingleCardProps {
  item: Card;
  handleCardChoice: (item: Card) => void;
  flipped?: boolean;
  disabled: boolean;
}

function SingleCard({
  item,
  handleCardChoice,
  disabled,
  flipped,
}: SingleCardProps) {
  const handleCardClick = () => {
    if (!disabled) {
      handleCardChoice(item);
    }
  };

  return (
    <StWrapper onClick={handleCardClick}>
      <StCardFlex>
        <StFrontImage
          className="front"
          src={item.image}
          alt={item.alt}
          style={{ transform: flipped ? "rotateY(0deg)" : "rotateY(90deg)" }}
        />
        <StBackImage
          className="back"
          src={GiftBox}
          alt="카드 뒷면"
          style={{ transform: flipped ? "rotateY(90deg)" : "rotateY(0deg)" }}
        />
      </StCardFlex>
    </StWrapper>
  );
}

export default SingleCard;

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
  transition: all ease-in 0.2s;
  transition-delay: 0s;
`;

const StFrontImage = styled.img`
  position: absolute;
  width: 20rem;
  height: 20rem;
  background-color: ${COLOR.coinWhite};
  transition: all ease-in 0.2s;
  transition-delay: 0.2s;
`;
