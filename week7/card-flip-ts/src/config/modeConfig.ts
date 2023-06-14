export interface ModeConfig {
  cardCount: number;
  scoreGoal: number;
  modalMessage: string;
  modalButtonText: string;
  cardGap: string;
}

export const MODE_CONFIG: { [key: string]: ModeConfig } = {
  easy: {
    cardCount: 5,
    scoreGoal: 5,
    modalMessage: "꼬마어 ~ 잘쓸겡 ~",
    modalButtonText: "묜디\n더\n사주러가기",
    cardGap: "1rem",
  },
  normal: {
    cardCount: 7,
    scoreGoal: 7,
    modalMessage: "대바기다 지짜! ~ 잘쓸겡 ~",
    modalButtonText: "묜디\n더\n사주러가기",
    cardGap: "0.9rem",
  },
  hard: {
    cardCount: 9,
    scoreGoal: 9,
    modalMessage: "님 신고 ㅎㅋ ~",
    modalButtonText: "묜디\n더\n사주러가기",
    cardGap: "0.5rem",
  },
};
