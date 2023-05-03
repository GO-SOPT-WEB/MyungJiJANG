/* eslint-disable react/prop-types */

import ResetButton from "./Reset";
import LevelBtn from "./CardBody/LevelBtn";

function CardBody() {
  const handleOnResetClick = () => {};
  return (
    <div>
      <LevelBtn />
      <ResetButton onClick={handleOnResetClick} />
    </div>
  );
}

export default CardBody;
