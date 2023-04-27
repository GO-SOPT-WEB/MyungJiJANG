import { CARD_LIST } from "../../constants/CARD_LIST";
import GiftBox from "../../assets/GiftBox.png";
import { useState, useEffect } from "react";
import styled from "styled-components";

function EasyMode() {
  const [cards, setCards] = useState([]);
  const [turns, setTurns] = useState(0);

  useEffect(() => {
    shuffleCards();
  }, []);

  const shuffleCards = () => {
    const easyMode = [...CARD_LIST.slice(0, 5), ...CARD_LIST.slice(0, 5)]
      .sort(() => Math.random() - 0.5)
      .map((easy) => ({ ...easy, id: Math.random() }));
    setCards(easyMode);
    setTurns(0);
  };
  console.log(cards, turns);

  return (
    <StCardContainer>
      <button>카드버튼</button>
      <div>
        {cards.map((easy) => (
          <div key={easy.id}>
            <StCard>
              <StFrontImage className="front" src={easy.image} alt={easy.alt} />
              <StBackImage className="back" src={GiftBox} alt="" />
            </StCard>
          </div>
        ))}
      </div>
    </StCardContainer>
  );
}

export default EasyMode;

const StCard = styled.div``;

const StBackImage = styled.img`
  width: 40rem;
  height: 25rem;
  border: 0.3rem solid black;
`;

const StFrontImage = styled.img`
  width: 40rem;
  height: 25rem;
  border: 0.3rem solid black;
`;

const StCardContainer = styled.section``;
