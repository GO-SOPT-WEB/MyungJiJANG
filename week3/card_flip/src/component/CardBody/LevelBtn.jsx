/* eslint-disable react/prop-types */
import { useState } from "react";
import EasyMode from "./EasyMode";
import NormalMode from "./NormalMode";
import HardMode from "./HardMode";

function LevelBtn({ resetCounter }) {
  const [mode, setMode] = useState("easy");

  const handleLevelChange = (selectedMode) => {
    setMode(selectedMode);
  };

  let selectedLevel;
  switch (mode) {
    case "easy":
      selectedLevel = <EasyMode resetCounter={resetCounter} />;
      break;
    case "normal":
      selectedLevel = <NormalMode resetCounter={resetCounter} />;
      break;
    case "hard":
      selectedLevel = <HardMode resetCounter={resetCounter} />;
      break;
    default:
      selectedLevel = <EasyMode resetCounter={resetCounter} />;
  }
  return (
    <div>
      <button onClick={() => handleLevelChange("easy")}>오다주웠다MODE</button>
      <button onClick={() => handleLevelChange("normal")}>이쯤이야MODE</button>
      <button onClick={() => handleLevelChange("hard")}>플-렉스MODE</button>
      {selectedLevel}
    </div>
  );
}

export default LevelBtn;
