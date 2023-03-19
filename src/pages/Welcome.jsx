import styled from "styled-components";
import AppBar from "../components/Appbar";
import WrapBox from "../styled_components/wrapBox";
import SubList from "../components/SubList";
import Footer from "../styled_components/FooterDiv";

const Welcome = () => {
  return (
    <>
      {<AppBar />}
      <WrapBox>
        <WelcomeDiv>
          <h1>Ⅰ 환영합니다</h1>
        </WelcomeDiv>
        <ContentsBoxDiv>
          {/* <CurchInfo> */}
          <CurchImgDiv>
            <CurchImg src={"../eg.png"} alt="eg" />
          </CurchImgDiv>
          <CurchInfoContents>
            <h1>참조은 교회는 웃음지음을 목적하는 선교적 교회입니다.</h1>,
            <h2>“하나님 보시기에 참좋은 교회가 되자!(창세기 1:31)” </h2>{" "}
            참조은교회는 , 수원제일교회나 창훈대교회와 같은
            대한예수교장로회(합동) 소속이며 수원노회에 가입되어 있습니다
          </CurchInfoContents>
          {/* </CurchInfo> */}
        </ContentsBoxDiv>
        {<SubList />}
        <ContentsBoxDiv>
          <PastorDiv>
            <PastorContents>
              ‘참조은교회’ 담임 임철민 목사님은 대한예수교장로회
              창훈대교회(합동)에서 십여년간 사역하며
              총신대학교신학대학원(목회연구)과 백석대학교 상담대학원(가정사역
              가족상담학)을 마치고 미국 FULLER Theological Seminary에서 목회학
              박사학위를 받았습니다. 현재 우만 2동 소재 ‘참조은교회’를 섬기며
              ‘칼빈대학교’에서 겸임교수로 가정사역, 가족 치료, 선교적교회를
              가르치고 있습니다
            </PastorContents>
            <PastorImgDiv>
              <PastorImg src={"../Pastor.png"} alt="Pastor" />
            </PastorImgDiv>
          </PastorDiv>
        </ContentsBoxDiv>
        {<SubList />}
        <ContentsBoxDiv>
        <CurchMissionDiv>
          <CurchContents>
            “참조은교회의 사명은 주님의 지상명령을 수행하며 깊은 곳에 가서
            그물을 내려 복음을 전하며 가르쳐 지키게 함에 있습니다 (마태복음
            28:19~20). “ ✝️ 참조은교회는 주님이 웃음지음을 목적하는 선교적
            교회이며 성도들이 하나님 말씀을 배우며, 삶으로 응답하는 삶을
            추구합니다.
          </CurchContents>
        </CurchMissionDiv>
        </ContentsBoxDiv>
        {<SubList />}
        <ContentsBoxDiv>
        <SloganDiv>
          <h1>“S.M.I.L.E”</h1>
          <SloganContents>
            <p>웃음이 있는 교회</p>
            <p>웃음이 넘치는 사역</p>
          </SloganContents>
          <SloganBoxDiv>
          <SloganItemDiv><b>"Serve"</b><p>봉사하다</p></SloganItemDiv>
          <SloganItemDiv><b>"Missionize"</b><p>사역하다</p></SloganItemDiv>
          <SloganItemDiv><b>"Identify"</b><p>확인하다</p></SloganItemDiv>
          <SloganItemDiv><b>"Learn"</b><p>배우다</p></SloganItemDiv>
          <SloganItemDiv><b>"Educate"</b><p>가르치다</p></SloganItemDiv>
          </SloganBoxDiv>
        </SloganDiv>
        </ContentsBoxDiv>
      </WrapBox>
      <Footer />
    </>
  );
};

const WelcomeDiv = styled.div`
  display: flex;
  width: 100%;
  padding: 00 00 00 50px;
  margin-top: 2%;
  font-size: 21px;
  font-weight: 300;
  color: #3c4554;
`;

const ContentsBoxDiv = styled.div`
  display: flex;
  height:100%;
  justify-content: space-between;
  margin: 2.5%;
`;
const IntroBox = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: space-between;
`;
// const CurchInfo = styled.div`
//   display: flex;
//   justify-content: space-between;
//   width: 100%;
//   height: 40vh;
//   margin-bottom: 5%;
//   text-align: left;
// `;
const CurchImgDiv = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
`;
const CurchImg = styled.img`
  display: flex;
  width: 100%;
`;
const CurchInfoContents = styled.div`
  background-color: #d3d3d3;
  padding:5%;
  margin-left: 100px;
`;

const PastorDiv = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 100%;
  margin-bottom: 5%;
  background-color: #d3d3d3;
`;
const PastorContents = styled.div`
  width: 100%;
  height: 100%;
  padding: 7%;
  white-space: pre-wrap;
`;
const PastorImgDiv = styled.div`
  display: flex;
  justify-content: center;
  padding: 60px;
`;

const PastorImg = styled.img`
  display: flex;
  width: 100%;
  border-radius: 10%;
  justify-content: center;
`;
const CurchMissionDiv = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
  height: 40vh;
  margin-bottom: 5%;
  text-align: right;
  background-color: #d3d3d3;
`;

const CurchContents = styled.div`
display:flex;
align-content: center;
  width: 100%;
  height: 100%;
  padding: 5%;
  text-align: center;
  overflow-wrap: break-word;
  display: flex;
  justify-content: center;
`;
const SloganDiv = styled.div`
  width: 100%;
  height: 60vh;
  /* margin-bottom: 5%; */
  text-align: center;
  background-color: #d3d3d3;
`;
const SloganContents = styled.div`
  width: 100%;
  justify-content: center;
  padding-bottom:20px;  
`;
const SloganBoxDiv = styled.div`
  display:flex;
  justify-content: space-around;
 
`;
const SloganItemDiv =styled.div`
  display: grid;
  align-items:center;
  color: Black;
  width: 15%;
  height: 30vh;
  background-color:white;

`
export default Welcome;
