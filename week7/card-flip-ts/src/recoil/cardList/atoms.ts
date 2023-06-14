import { atom } from "recoil";

interface Card {
  id: number;
  image: string;
  matched?: boolean;
}

export const cardState = atom<Card[]>({
  key: "cardState",
  default: [],
});

export const firstChoiceState = atom<Card | null>({
  key: "firstChoiceState",
  default: null,
});

export const secondChoiceState = atom<Card | null>({
  key: "secondChoiceState",
  default: null,
});

export const disabledState = atom<boolean>({
  key: "disabledState",
  default: false,
});

export const scoreState = atom<number>({
  key: "scoreState",
  default: 0,
});

export const isGameOverState = atom<boolean>({
  key: "isGameOverState",
  default: false,
});

export const animationTriggerState = atom<boolean>({
  key: "animationTriggerState",
  default: false,
});
