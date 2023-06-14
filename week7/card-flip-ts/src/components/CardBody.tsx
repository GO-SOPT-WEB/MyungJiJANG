import { useState } from "react";
import GameMode from "../components/Cardbody/GameMode";
import ResetButton from "../components/Cardbody/ResetButton";
import styled from "styled-components";
import { COLOR } from "../styles/color";

export default function CardBody() {
  const [resetCounter, setResetCounter] = useState(0);
  const [gameMode, setGameMode] = useState("easy"); // 상태를 추가합니다.

  const handleResetClick = () => {
    setResetCounter(resetCounter + 1);
  };

  const handleModeChange = (newMode: "easy" | "normal" | "hard") => {
    setGameMode(newMode);
  };

  return (
    <>
      <ResetButton onClick={handleResetClick} />
      <StButtonContainer>
        <StEasyMode onClick={() => handleModeChange("easy")}>
          오다주웠다MODE
        </StEasyMode>
        <StNormalMode onClick={() => handleModeChange("normal")}>
          이쯤이야MODE
        </StNormalMode>
        <StHardMode onClick={() => handleModeChange("hard")}>
          플-렉스MODE
        </StHardMode>
      </StButtonContainer>
      <GameMode mode={gameMode} resetCounter={resetCounter} />
    </>
  );
}

const StHardMode = styled.button`
  border: 0.5rem double ${COLOR.darkYellow};
  background-color: ${COLOR.whiteYellow};
  color: ${COLOR.textYellow};

  :hover {
    color: ${COLOR.whiteYellow};
    background-color: ${COLOR.mainYellow};
  }
`;

const StNormalMode = styled.button`
  border: 0.5rem double ${COLOR.darkGreen};
  background-color: ${COLOR.whiteGreen};
  color: ${COLOR.textGreen};

  :hover {
    color: ${COLOR.whiteGreen};
    background-color: ${COLOR.midGreen};
  }
`;

const StEasyMode = styled.button`
  border: 0.5rem double ${COLOR.darkOrange};
  background-color: ${COLOR.whiteOrange};
  color: ${COLOR.textOrange};

  :hover {
    color: ${COLOR.whiteOrange};
    background-color: ${COLOR.mainOrange};
  }
`;

const StButtonContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
`;
