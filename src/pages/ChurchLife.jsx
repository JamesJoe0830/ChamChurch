import styled from "styled-components";
import AppBar from '../components/Appbar';
import WrapBox from "../styled_components/wrapBox";
import Footer from "../styled_components/FooterDiv";
import TitleDiv from "../styled_components/TitleDiv";
const ChurchLife = () => {
  return (
    <>
    <AppBar />
      <WrapBox>
        <TitleDiv>
        <h1>Ⅳ 교회 생활</h1>
        </TitleDiv>
      </WrapBox>
      <Footer/>

    </>
  );
};

const LifeDiv = styled.div`

`;
 
export default ChurchLife;