import styled from "styled-components";
import AppBar from '../components/Appbar'
import WrapBox from "../styled_components/wrapBox";
import Footer from "../styled_components/FooterDiv";
import TimeTable from "../components/Table";

const Time = () => {
    return (
      <>
      <AppBar/>
        <WrapBox>
          <TimeDiv>
          <h1>Ⅱ 예배시간</h1>
          </TimeDiv>
          <TimeTable/>
        </WrapBox>
        <Footer/>
      </>
    );
  };
  const TimeDiv = styled.div`
  display: flex;
  padding: 00 00 00 50px;
  margin-top: 2%;
  font-size:1.8vw;
  font-weight:300;
  color: #3c4554;
`;


  
  export default Time;