import { CARD_LIST } from "../constants/CARD_LIST";
import EasyMode from "./CardBody/EasyMode";
import { useState, useEffect } from "react";
import styled from "styled-components";

function CardBody() {
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
      <StCard>
        {cards.map((easy) => (
          <EasyMode key={easy.id} easy={easy} />
        ))}
      </StCard>
    </StCardContainer>
  );
}

export default CardBody;

const StCard = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
`;

const StCardContainer = styled.div`
  display: flex;
  flex-flow: column wrap;
`;
