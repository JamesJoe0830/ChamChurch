import styledEngine from "@mui/styled-engine";
import styled from "styled-components";
import AppBar from "../components/Appbar";
import Kakao from "../components/Map";
import WrapBox from "../styled_components/wrapBox";
import Footer from "../styled_components/FooterDiv";

const Directions = () => {
  return (
    <>
      <AppBar />

      <WrapBox>
        <DiriectionDiv>
          <h1>Ⅲ 찾아오시는 길</h1>
        </DiriectionDiv>
        {/* <MapContainer> */}
        <MapDiv>
        <Kakao/>
        </MapDiv>
        {/* </MapContainer> */}
        <Footer/>
      </WrapBox>
    </>
  );
};
const DiriectionDiv = styled.div`
 display: flex;
  padding: 00 00 00 50px;
  margin-top: 2%;
  font-size:21px;
  font-weight:300;
  color: #3c4554;
  bottom: 0;
`;


const MapDiv =styled.div`
  display: flex;
  width: 100%;
  justify-content:center;
`;

export default Directions;
