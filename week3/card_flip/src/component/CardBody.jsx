import { CARD_LIST } from "../constants/CARD_LIST";
import EasyMode from "./CardBody/EasyMode";
import { useState, useEffect } from "react";
import styled from "styled-components";

function CardBody() {
  const [cards, setCards] = useState([]);
  const [turns, setTurns] = useState(0);
  const [firstChoice, setFirstChoice] = useState(null);
  const [secondChoice, setSecondChoice] = useState(null); // 아직 선택 받지 못한 상황이기에 null로!

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

  const handleCardChoice = (easy) => {
    if (firstChoice === null) {
      setFirstChoice(easy);
    } else if (secondChoice === null) {
      setSecondChoice(easy);
    }
  };

  // handleCardChoice 카드 일치하지 않음 오류 ! 해결하기 위한 콘솔 확인 코드
  useEffect(() => {
    console.log("firstChoice:", firstChoice);
    console.log("secondChoice:", secondChoice);
  }, [firstChoice, secondChoice]);

  //카드 값 2개 비교하기 useEffect 사용
  useEffect(() => {
    if (firstChoice && secondChoice) {
      if (firstChoice.image === secondChoice.image) {
        console.log("카드 일치함");
        resetTurn();
      } else {
        console.log("카드가 일치하지 않음");
        resetTurn();
      }
    }
  }, [firstChoice, secondChoice]);

  //카드 선택을 초기화하고 순서를 증가시킨다.
  const resetTurn = () => {
    setFirstChoice(null);
    setSecondChoice(null);
    setTurns((prevTurns) => prevTurns + 1);
  };

  return (
    <StCardContainer>
      <StCard>
        {cards.map((easy) => (
          <EasyMode
            key={easy.id}
            easy={easy}
            handleCardChoice={handleCardChoice}
          />
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
