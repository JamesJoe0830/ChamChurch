import styled from "styled-components";
import AppBar from "../components/Appbar";
import WrapBox from "../styled_components/wrapBox";
const Welcome = () => {
  return (
    <>
      <AppBar />
      <WrapBox>
        <WelcomeDiv>
          <h1>환영합니다 민아짱입니다!</h1>
        </WelcomeDiv>
        <ContentsBoxDiv>
          <PastorImg>목사님 사진 영역입니다</PastorImg>
          <WelcomeTitle>
            <h1>하나님이 보시기에 참 좋은 교회가 되자</h1>
          </WelcomeTitle>
          <ChurchContents>
            담임목사님 소개 ‘참조은교회’담임 임철민 목사님은대한예수교장로회
            창훈대교회(합동)에서 십여 년간 사역하며 총신대학교
            신학대학원(목회연구)과 백석대학교 상담대학원(가정사역 가족 상담학)을
            마치고 미국 FULLER Theological Seminary에서 목회학 박사학위를
            받았습니다. 현재 우만 2동 소재 ‘참조은교회’를 섬기며‘칼빈대학교’에서
            겸임교수로 가정사역, 가족치료, 선교적 교회를 가르치고 있습니다.
          </ChurchContents>
        </ContentsBoxDiv>
      </WrapBox>
    </>
  );
};

const WelcomeDiv = styled.div`
  display: flex;
  padding: 00 00 00 50px;
  margin-top: 2%;
`;

const ContentsBoxDiv = styled.div`
  display: flex;
  border: solid;
  padding: 20px;
  margin: 30px;
  height: 700px;
  margin-bottom: 5%;
`;
const PastorImg = styled.div`
  margin-top: 2%;
  width: 100%;
  height: 10px;
  color: green;
`;
const WelcomeTitle = styled.div`
  display: flex;

  margin-top: 2%;
  color: #358f00;
  display: flex;
  width: 100%;
  height: 50px;
  justify-content: center;
  line-height: 1.6;
  font-family: NotoSansKrRegular;
`;
const ChurchContents = styled.div`
  display: flex;
  width: 100%;
`;
export default Welcome;
