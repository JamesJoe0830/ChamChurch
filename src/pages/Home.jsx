import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import BannerSlider from "../components/BannerSlider";
import AppBar from "../components/Appbar";
import HomeTitleDiv from "../styled_components/HomeTitleDiv";
import WrapBox from "../styled_components/WrapBox";
import TimeTable from "../components/Table";
import Footer from "../components/FooterDiv";
import AlbumSlider from "../components/AlbumSlider";

function Home() {

  const navigate = useNavigate();

  return (
    <>
      {<AppBar />}
      <WrapBox>
        <BannerDiv>
          <BannerSlider />
        </BannerDiv>
        <ContentsBoxDiv>
          <HomeTitleDiv>
            <h1>참조은 앨범</h1>
          </HomeTitleDiv>
          <AlbumSlider />
        </ContentsBoxDiv>
        <ContentsBoxDiv>
          <HomeTitleDiv>
            <h1>예배시간</h1>
          </HomeTitleDiv>
          <TimeTable />
        </ContentsBoxDiv>
      </WrapBox>
      <Footer />
    </>
  );
}

const ContentsBoxDiv = styled.div`
  margin-bottom: 5%;
  margin: 3%;
`;
const BannerDiv = styled.div`
  margin-top: 5%;
  width: 100%;
`;
const BannerImg = styled.img`
  width: 100%;
`;

// const FooterDiv = styled.div`
//   display: flex;
//   justify-content: center;
//   background: #3c4554;
//   color: white;
// `;

export default Home;
