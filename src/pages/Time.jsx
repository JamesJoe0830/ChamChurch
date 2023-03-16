import styled from "styled-components";
import AppBar from '../components/Appbar'
import WrapBox from "../styled_components/wrapBox";

const Time = () => {
    return (
      <>
      <AppBar/>
        <WrapBox>
          <TimeDiv>
          <h1>Ⅱ 예배시간</h1>
          <p>리액트 라우터를 사용해 보는 프로젝트입니다.</p>
          </TimeDiv>
        </WrapBox>
      </>
    );
  };
  const TimeDiv = styled.div`
  display: flex;
  padding: 00 00 00 50px;
  margin-top: 2%;
  font-size:21px;
  font-weight:300;
  color: #3c4554;
`;


  
  export default Time;