import styled from "styled-components";
import AppBar from '../components/Appbar';
import WrapBox from "../styled_components/wrapBox";
import Footer from "../styled_components/FooterDiv";
import TitleDiv from "../styled_components/TitleDiv";
import LineDiv from "../styled_components/LineDiv";

const ChurchLife = () => {
  return (
    <>
    <AppBar />
      <WrapBox>
        <TitleDiv>
        <h1>교회 생활</h1>
        </TitleDiv>
        <LineDiv/>
      </WrapBox>
      <Footer/>

    </>
  );
};

const LifeDiv = styled.div`

`;
 
export default ChurchLife;