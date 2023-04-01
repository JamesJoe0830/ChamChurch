import styled from "styled-components";
import { useState, useEffect } from "react";
import AppBar from "../components/Appbar";
import WrapBox from "../styled_components/wrapBox";
import Footer from "../components/FooterDiv";
import TitleDiv from "../styled_components/TitleDiv";
import LineDiv from "../styled_components/LineDiv";

const IntroduceList = [
  {
    id: 1,
    title: null,
    imagePath:
      "https://aiderbucket.s3.ap-northeast-2.amazonaws.com/WelcomeBanner.png",
  },
  {
    id: 2,
    title: "담임목사님 소개",
    imagePath:
      "https://aiderbucket.s3.ap-northeast-2.amazonaws.com/Introduce2.png",
  },
  {
    id: 3,
    title: "참조은교회의 사명",
    imagePath:
      "https://aiderbucket.s3.ap-northeast-2.amazonaws.com/Introduce3.png",
  },
  {
    id: 4,
    title: "슬로건",
    imagePath:
      "https://aiderbucket.s3.ap-northeast-2.amazonaws.com/Introduce4.png",
  },
];
const Welcome = () => {
  // const [welcomeBanner,setWelcomeBanner] = useState('');
  const [introduce, setIntroduce] = useState([]);

  // const getWelcomeBanner = async () => {
  //   //TODO: getWelcomeBanner api needed
  //   setWelcomeBanner(WelcomeBanner);
  // }
  const getIntroduce = async () => {
    //TODO: getIntroduce api needed
    setIntroduce([...IntroduceList]);
  };

  useEffect(() => {
    // getWelcomeBanner();
    getIntroduce();
  }, []);

  return (
    <>
      {<AppBar />}
      <WrapBox>
        <TitleDiv>
          <h1>환영합니다</h1>
        </TitleDiv>
        <LineDiv />
        <ContentsBoxDiv>
          <>
            {introduce.map((props) => {
              return (
                <>
                  <SubTitleDiv>{props.title}</SubTitleDiv>
                  <SubListDiv>
                    <Introduce2Img src={props.imagePath} alt="Introduce2" />
                  </SubListDiv>
                </>
              );
            })}
        
          </>
        </ContentsBoxDiv>
      </WrapBox>
      <Footer />
    </>
  );
};

const SubListDiv = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
  margin-top: 10px;
  margin-bottom: 5%;
`;
const SubTitleDiv = styled.div`
  display: flex;
  justify-content: center;
  font-size: calc(14px + 2vmin);
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
  width: 80%;
  margin-bottom: 5%;
`;
const ContentsBoxDiv = styled.div``;
export default Welcome;
