import { useRecoilValue, useSetRecoilState } from "recoil";
import styled from "styled-components";
import Score from "../Cardbody/Score";
import Modal from "../Modal";
import Animation from "../Cardbody/Animation";

import {
  cardState,
  firstChoiceState,
  secondChoiceState,
  disabledState,
  scoreState,
  isGameOverState,
  animationTriggerState,
} from "../../recoil/cardList/atoms";
import { MODE_CONFIG, ModeConfig } from "../../config/modeConfig";
import { useEffect, useState } from "react";
import { CARD_LIST } from "../../constants/CARD_LIST";
import SingleCard from "./SingleCard";
import { COLOR } from "../../styles/color";

export interface Card {
  id: number;
  image: string;
  matched?: boolean;
  alt?: string;
}

interface GameModeProps {
  mode: string;
  resetCounter: number;
}

export default function GameMode({ mode, resetCounter }: GameModeProps) {
  const cards = useRecoilValue(cardState);
  const firstChoice = useRecoilValue(firstChoiceState);
  const secondChoice = useRecoilValue(secondChoiceState);
  const disabled = useRecoilValue(disabledState);
  const score = useRecoilValue(scoreState);
  const isGameOver = useRecoilValue(isGameOverState);
  const animationTrigger = useRecoilValue(animationTriggerState);

  const setCards = useSetRecoilState(cardState);
  const setFirstChoice = useSetRecoilState(firstChoiceState);
  const setSecondChoice = useSetRecoilState(secondChoiceState);
  const setDisabled = useSetRecoilState(disabledState);
  const setScore = useSetRecoilState(scoreState);
  const setIsGameOver = useSetRecoilState(isGameOverState);
  const setAnimationTrigger = useSetRecoilState(animationTriggerState);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const config: ModeConfig = MODE_CONFIG[mode];

  const shuffleCards = () => {
    const selectedModeCards = [
      ...CARD_LIST.slice(0, config.cardCount),
      ...CARD_LIST.slice(0, config.cardCount),
    ]
      .sort(() => Math.random() - 0.5)
      .map((item) => ({ ...item, id: Math.random() }));
    setCards(selectedModeCards);
    setScore(0);
  };

  useEffect(() => {
    shuffleCards();
  }, [resetCounter, config.cardCount, setScore]);

  useEffect(() => {
    resetTurn();
  }, [resetCounter]);

  const handleCardChoice = (item: Card) => {
    if (firstChoice === null) {
      setFirstChoice(item);
    } else if (secondChoice === null) {
      setSecondChoice(item);
    }
  };
  function resetTurn() {
    setFirstChoice(null);
    setSecondChoice(null);
    setDisabled(false);
  }

  useEffect(() => {
    if (firstChoice && secondChoice) {
      if (firstChoice.image === secondChoice.image) {
        // 일치하는 경우
        setTimeout(() => {
          setCards((prevCards: Card[]) => {
            return prevCards.map((card: Card) => {
              if (card.image === firstChoice.image) {
                return { ...card, matched: true };
              } else {
                return card;
              }
            });
          });
          setScore((prevScore) => prevScore + 1);
          resetTurn();
        }, 1000);
      } else {
        // 일치하지 않는 경우
        setTimeout(() => {
          resetTurn();
        }, 1000);
      }
    }
  }, [firstChoice, secondChoice]);

  useEffect(() => {
    console.log("모달 왜 안열리냐아아아아아아아아아아아아아ㅏ앙아아");
    if (isGameOver && score === config.scoreGoal) {
      setIsModalOpen(true);
    }
  }, [isGameOver, score, config.scoreGoal]);

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <Score score={score} scoreGoal={config.scoreGoal} />
      <StCardContainer>
        <StCard>
          {cards.map((card: Card) => (
            <SingleCard
              key={card.id}
              item={card}
              handleCardChoice={handleCardChoice}
              flipped={
                firstChoice === card || secondChoice === card || card.matched
              }
              disabled={disabled}
            />
          ))}
        </StCard>
      </StCardContainer>
      <>
        {/* Modal 컴포넌트 */}
        {isGameOver && (
          <Modal isOpen={isModalOpen} onClose={closeModal}>
            {/* 모달 내용 */}
            <h2>Modal Title</h2>
            <p>Modal content goes here.</p>
          </Modal>
        )}
      </>
      {animationTrigger && <Animation />}
    </div>
  );
}

const StModalButton = styled.div`
  padding: 1.5rem 1rem;
  border: 0.8rem double ${COLOR.coinYellowLine};
  border-radius: 5rem;
  background-color: ${COLOR.coinYellow};
  color: ${COLOR.textYellow};
  white-space: pre-wrap;
`;

const StCardContainer = styled.div`
  display: flex;
  flex-flow: column wrap;
`;

const StCard = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: center;
  margin-top: 3rem;
  gap: 1rem;
`;
