import styled from "styled-components";
import AppBar from "../components/Appbar";
import WrapBox from "../styled_components/wrapBox";
const Welcome = () => {
  return (
    <>
      {<AppBar />}
      <WrapBox>
        <WelcomeDiv>
          <h1>Ⅰ 환영합니다</h1>
        </WelcomeDiv>
        <ContentsBoxDiv>
          <CurchExplainDiv>
            <PastorImg src={"../Pastor.png"} alt="Pastor" />
            <WelcomeTitle>
              <h1>하나님이 보시기에 참 좋은 교회가 되자</h1>
            </WelcomeTitle>
            <ChurchContents>
              <h3> - 참조은 교회(Very Good Church)의 사명</h3>
              <p>
                - 참조은 교회의 사명은 주님의 지상명령을 수행하며 깊은 곳에 가서
                그물을 내려 복음을 전하며 가르쳐 지키게 함에 있습니다(마태복음
                28:19~20).
              </p>{" "}
              <p>
                - 참조은 교회는 주님이 웃음 지음을 목적하는 선교적 교회이며
                성도들이 하나님 말씀을 배우며, 삶으로 응답하는 삶을 추구합니다.
              </p>{" "}
              <p>
                - 참 좋은 교회는 하나님이 웃음 지음을 목적하는 선교적
                교회입니다.
              </p>{" "}
              <p>
                - 참 좋은 교회는 수원 제일 교회나 창훈대교회와 같은 대한
                예수교장로회(합동) 소속이며 수원노회에 가입되어 있습니다
              </p>
            </ChurchContents>
            <SloganDiv>SMILE</SloganDiv>
          </CurchExplainDiv>
        </ContentsBoxDiv>
      </WrapBox>
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

  border: solid;
  height: 1200px;
  margin-bottom: 5%;
  margin: auto;
  width: 80%;
`;

const CurchExplainDiv = styled.div`
  width: 100%;
`;
// const PastorDiv = styled.div`
//   width: 10%;
//   float:left;
//   padding: 20px;
// `;
const PastorImg = styled.img`
  width: 15%;
  float: left;
  padding: 25px;
`;
const WelcomeTitle = styled.div`
  display: flex;
  text-decoration: underline;
  /* margin-top: 2%; */
  color: #228b22;
  height: 50px;
  justify-content: center;
  font-family: NotoSansKrRegular;
  font-size: 25px;
  letter-spacing: -2px;
`;
const ChurchContents = styled.div`
  padding: 5px;
  margin: 50px;
  align-content: center;
  width: 80%;
  font-size: 18px;
`;

const SloganDiv = styled.div`
  padding: 5px;
  margin: 20px;
  align-content: center;
  width: 80%;
  font-size: 18px;
`;
export default Welcome;
