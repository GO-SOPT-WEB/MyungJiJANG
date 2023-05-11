/* eslint-disable react/prop-types */
import styled from "styled-components";
// import { useState } from "react";

//자 검색 페이지
//1. 전송 시킬때 페이지 전환-> day/:area 또는 week/:area
//2. 주간 혹은 오늘 선택시 -> 페이지 쿼리? 무튼 링크 부분이 바뀔 준비 해야함 -> 선택한 걸 확인할 수 있어야함
//3. 검색 텍스트 url로 넘겨서 해당 데이터가 뜨도록 해야함.

function SearchForm() {
  return (
    <StWrapper>
      <form action="#">
        <select name="date">
          <option value="">오늘</option>
          <option value="학생">주간</option>
        </select>
        <input
          type="text"
          name="area"
          value=""
          placeholder="Please Write in English. ➡️ suwon"
        />
        <input type="submit" value="Submit" />
      </form>
    </StWrapper>
  );
}

export default SearchForm;

const StWrapper = styled.div`
  margin-top: 3rem;
`;
