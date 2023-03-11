import styled from "styled-components";
import AppBar from '../components/Appbar'

const Time = () => {
    return (
      <>
      <AppBar/>
        <WrapBox>
          <h1>Time</h1>
          <p>리액트 라우터를 사용해 보는 프로젝트입니다.</p>
        </WrapBox>
      </>
    );
  };

  const WrapBox = styled.div`
  width: 100%;
`;
  
  export default Time;