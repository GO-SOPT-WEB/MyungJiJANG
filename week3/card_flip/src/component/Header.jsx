import { CARD_LIST } from "../constants/CARD_LIST";

function Header() {
  return (
    <div>
      <h1>💸이거 맞추면 나 사주는 거다 ?💸</h1>
      <img src={CARD_LIST[8].image} alt="페라리" />
      <button>reset</button>
    </div>
  );
}

export default Header;
