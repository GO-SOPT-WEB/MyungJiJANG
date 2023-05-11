/* eslint-disable react/prop-types */
//주간 날씨 확인List
import styled from "styled-components";

function WeekWeatherCard({ result, imgUrl }) {
  console.log(result);
  const dateOptions = { month: "numeric", day: "numeric" };

  const dateList = Array.from({ length: 5 }, (_, index) => {
    const date = new Date();
    date.setDate(date.getDate() + index);
    return (
      <div key={index}>{date.toLocaleDateString("ko-KR", dateOptions)}</div>
    );
  });
  return (
    <StWeatherList>
      {result.list.slice(0, 5).map((weekResult, index) => (
        <StCardList key={index}>
          <StText className="date">{dateList[index]}</StText>
          {weekResult.weather && weekResult.weather[0] && (
            <StImage src={imgUrl} alt={weekResult.weather[0].description} />
          )}
          <StText>TEMP🌡️: {weekResult.main.temp}</StText>
          <StText>FEELS_LIKE🥶: {weekResult.main.feels_like}</StText>
          <StText>
            MIN👎/MAX_TEMP👍: {weekResult.main.temp_min}/
            {weekResult.main.temp_max}
          </StText>
          <StText>CLOUDS☁️: {weekResult.clouds.all}</StText>
        </StCardList>
      ))}
    </StWeatherList>
  );
}

export default WeekWeatherCard;

const StText = styled.p`
  font-size: 1rem;
  margin-top: 0.5rem;
`;

const StImage = styled.img`
  width: 8rem;
  height: 8rem;
  border-radius: 3rem;
`;

const StWeatherList = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 2rem;
`;

const StCardList = styled.div`
  margin-left: 1rem;
  padding: 1.2rem;
  border: 0.3rem solid #252525;
  border-radius: 2rem;

  &:hover {
    background-color: #c1715f;
  }
  .date {
    font-size: 1.7rem;
    margin-bottom: 0.7rem;
  }
`;
