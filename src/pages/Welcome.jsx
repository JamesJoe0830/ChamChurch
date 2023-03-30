import styled from "styled-components";
import { useState, useEffect } from "react";
import AppBar from "../components/Appbar";
import WrapBox from "../styled_components/wrapBox";
import Footer from "../styled_components/FooterDiv";
import TitleDiv from "../styled_components/TitleDiv";
import LineDiv from "../styled_components/LineDiv";
// const WelcomeBanner = {
//   id:1,
//   imagePath:
//   "https://user-images.githubusercontent.com/73478057/228507881-bae1d9d7-76e1-4f16-b842-d520eb4ec210.png",
// };

const IntroduceList = [
  {
    id:1,
    title : null,
    imagePath:
    "https://user-images.githubusercontent.com/73478057/228507881-bae1d9d7-76e1-4f16-b842-d520eb4ec210.png",
  },
  {
    id: 2,
    title: "담임목사님 소개",
    imagePath:
    "https://user-images.githubusercontent.com/73478057/228507881-bae1d9d7-76e1-4f16-b842-d520eb4ec210.png",
  },
  {
    id: 3,
    title: "참조은교회의 사명",
    imagePath:
      "https://user-images.githubusercontent.com/73478057/228507767-08991c13-82dd-4cb1-a429-00a4aba779a7.png",
  },
  {
    id: 4,
    title: "슬로건",
    imagePath:
      "https://user-images.githubusercontent.com/73478057/228507767-08991c13-82dd-4cb1-a429-00a4aba779a7.png",
  },
];
const Welcome = () => {
  // const [welcomeBanner,setWelcomeBanner] = useState('');
  const [introduce,setIntroduce] = useState([]);


  // const getWelcomeBanner = async () => {
  //   //TODO: getWelcomeBanner api needed
  //   setWelcomeBanner(WelcomeBanner);
  // }
  const getIntroduce = async () =>{
    //TODO: getIntroduce api needed
    setIntroduce([...IntroduceList]);
  }

  useEffect(()=>{
    // getWelcomeBanner();
    getIntroduce();
  },[])

  return (
    <>
      {<AppBar />}
      <WrapBox>
        <TitleDiv>
          <h1>환영합니다</h1>
        </TitleDiv>
        <LineDiv />

        {/* <SubListDiv>
          <Introduce1Img src={welcomeBanner.imagePath} alt="WelcomeBanner" />
        </SubListDiv> */}
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
            {/* {IntroduceList.map((props) => {
            return(
             
            );
          })} */}
          </>

          {/* <SubTitleDiv>{SubTitle.second}</SubTitleDiv>
          <SubListDiv>
            <Introduce3Img src={"../Introduce3.png"} alt="Introduce3" />
          </SubListDiv>

          <SubTitleDiv>{SubTitle.third}</SubTitleDiv>
          <SubListDiv>
            <Introduce4Img src={"../Introduce4.png"} alt="Introduce4" />
          </SubListDiv> */}
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
  justify-content: center;
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
const ContentsBoxDiv = styled.div``;
export default Welcome;
