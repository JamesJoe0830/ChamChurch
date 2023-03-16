import styled from "styled-components";
import AppBar from '../components/Appbar';
import WrapBox from "../styled_components/wrapBox";

const ChurchLife = () => {
  return (
    <>
    <AppBar />
      <WrapBox>
        <LifeDiv>
        <h1>Ⅳ 교회 생활</h1>
        </LifeDiv>
      </WrapBox>
    </>
  );
};

const LifeDiv = styled.div`
  display: flex;
  padding: 00 00 00 50px;
  margin-top: 2%;
  font-size:21px;
  font-weight:300;
  color: #3c4554;
`;
 
export default ChurchLife;