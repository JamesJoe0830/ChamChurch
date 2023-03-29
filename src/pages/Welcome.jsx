import styled from "styled-components";
import AppBar from "../components/Appbar";
import WrapBox from "../styled_components/wrapBox";
import Footer from "../styled_components/FooterDiv";
import TitleDiv from "../styled_components/TitleDiv";
import LineDiv from "../styled_components/LineDiv";

const SubTitle = {
  first: "담임목사님 소개",
  second: "참조은교회의 사명",
  third: "슬로건",
};
const Welcome = () => {
  // const [introduce,setIntroduce] = useState([]);


  return (
    <>
      {<AppBar />}
      <WrapBox>
        <TitleDiv>
          <h1>환영합니다</h1>
        </TitleDiv>
        <LineDiv/>
        <SubListDiv>
          <Introduce1Img src={"../Introduce1.png"} alt="Introduce1" />
        </SubListDiv>
        <ContentsBoxDiv>
          <SubTitleDiv>{SubTitle.first}</SubTitleDiv>
          <SubListDiv>
            <Introduce2Img src={"../Introduce2.png"} alt="Introduce2" />
          </SubListDiv>

          <SubTitleDiv>{SubTitle.second}</SubTitleDiv>
          <SubListDiv>
            <Introduce3Img src={"../Introduce3.png"} alt="Introduce3" />
          </SubListDiv>

          <SubTitleDiv>{SubTitle.third}</SubTitleDiv>
          <SubListDiv>
            <Introduce4Img src={"../Introduce4.png"} alt="Introduce4" />
          </SubListDiv>
        </ContentsBoxDiv>
      </WrapBox>
      <Footer />
    </>
  );
};


const SubListDiv = styled.div`
  display: flex;
  /* justify-content: flex-end; */
  width: 100%;
  margin-top: 10px;
`;
const SubTitleDiv = styled.div`
  display: flex;
  justify-content:center;
  font-size: calc(8px + 2vmin);
  font-weight: bolder;
  color: #3c4554;
  margin-right: 2.5%;
  margin-bottom: 5%;
  margin: 3%;
`;

const Introduce1Img = styled.img`
  display: flex;
  width: 100%;
  margin-bottom: 5%;
`;
const Introduce2Img = styled.img`
  display: flex;
  width: 100%;
  margin-bottom: 5%;
`;
const Introduce3Img = styled.img`
  display: flex;
  width: 100%;
  margin-bottom: 5%;
`;
const Introduce4Img = styled.img`
  display: flex;
  width: 100%;
  margin-bottom: 5%;
`;
const ContentsBoxDiv = styled.div`

`;
export default Welcome;
