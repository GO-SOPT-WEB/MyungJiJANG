import { atom } from "recoil";

export const cardState = atom({
  key: "cardState",
  default: [],
});

export const firstChoiceState = atom({
  key: "firstChoiceState",
  default: null,
});

export const secondCoiceState = atom({
  key: "secondChoiceState",
  default: null,
});

export const disabledState = atom({
  key: "disabledState",
  default: false,
});

export const scoreState = atom({
  key: "scoreState",
  default: 0,
});

export const isGameOverState = atom({
  key: "isGameOverState",
  default: false,
});

export const animationTriggerState = atom({
  key: "animationTriggerState",
  default: false,
});
