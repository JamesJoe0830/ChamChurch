import styled from "styled-components";
import AppBar from '../components/Appbar';

const Directions = () => {
  return (
    <>
    <AppBar />
      <WrapBox>
        <h1>찾아오시는 길</h1>
        <p>리액트 라우터를 사용해 보는 프로젝트입니다.</p>
      </WrapBox>
    </>
  );
};

const WrapBox = styled.div`
  width: 100%;
`;

export default Directions;