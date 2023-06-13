import styled from "styled-components";

interface ScoreProps {
  score: number;
  scoreGoal: number;
}

function Score({ score, scoreGoal }: ScoreProps) {
  return <StScore> {score}개나 사줄꼬얌? 대박 ~</StScore>;
}

export default Score;
const StScore = styled.p`
  font-size: 3rem;
`;
