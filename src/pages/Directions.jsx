// import styledEngine from "@mui/styled-engine";
import React from "react";
import styled from "styled-components";
import AppBar from "../components/Appbar";
import Kakao from "../components/Map";
import WrapBox from "../styled_components/wrapBox";
import Footer from "../styled_components/FooterDiv";
import TitleDiv from "../styled_components/TitleDiv";
import LineDiv from "../styled_components/LineDiv";

const Directions = () => {
  // const BusList = [
  //   {
  //     type: "일반버스",
  //     list: "3번, 10번, 10-2번, 10-5번, 11-1번, 13-4번, 15-1번, 20번, 20-1번, 27번,32번",
  //   },
  // ];
  return (
    <>
      {<AppBar />}
      <WrapBox>
        <TitleDiv>
          <h1>찾아오시는 길</h1>
        </TitleDiv>
        <LineDiv />

        <MapDiv>
          <Kakao />
        </MapDiv>
        <BusInfoDiv>
          <BusStationImg src={"../BusStationInfo.png"} alt="BusStationInfo"/>
        </BusInfoDiv>
        {/* <SubTitleDiv>- 주소와 연락처</SubTitleDiv>

        <ContentsBox>
          <ImgBoxDiv>
            <LocationImg src={"../location.png"} alt="location" />
          </ImgBoxDiv>
          <LocationInfo>경기도 수원시 팔달구 중부대로223번길 20-7</LocationInfo>
          <ImgBoxDiv>
            <TelImg src={"../Tel.png"} alt="Tel" />
          </ImgBoxDiv>
          <TelInfo>Tel. 070-5033-9006</TelInfo>
        </ContentsBox>
        <SubTitleDiv>- 버스 정보</SubTitleDiv>
        <ContentsBox>
          <BusDiv>
            <ImgBoxDiv>
              <BusImg src={"../Bus.png"} alt="Bus" />
            </ImgBoxDiv>
            <BusListDiv>
              {BusList.map((props) => (
                <>
                  <BusType>{props.type}</BusType>
                  <BusArr>{props.list}</BusArr>
                </>
              ))}
            </BusListDiv>
          </BusDiv>
        </ContentsBox> */}
      </WrapBox>
      <Footer />
    </>
  );
};

const MapDiv = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  margin-bottom: 2%;
`;

const BusInfoDiv = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  margin: 5%;
`;
const BusStationImg = styled.img`
  width:100%;
  height:100%;
`;
// const SubTitleDiv = styled.div`
//   position: relative;
//   margin-top: 3rem;
//   margin-bottom: 12px;
//   padding-left: 20px;
//   color: #3c4554;
//   font-size: 1.1rem;
//   font-family: "Nanum Gothic", sans-serif;
//   font-weight: 750;
// `;
// const ContentsBox = styled.div`
//   display: flex;
//   width: 100%;
//   padding-left: 5%;
//   padding-right: 5%;
// `;
// const ImgBoxDiv = styled.div`
//   display: flex;
//   width: 120px;
// `;
// const LocationImg = styled.img`
//   width: 100%;
//   height: 100%;
// `;
// const LocationInfo = styled.div`
//   display: flex;
//   text-align: center;
//   width: 100%;
//   height: 100%;
//   padding-top: 30px;
//   margin-left: 20px;
//   font-size: 3.2vmin;
//   font-weight: bolder;
//   color: #3c4554;
// `;
// const TelImg = styled.img`
//   width: 100%;
//   height: 100%;
// `;
// const TelInfo = styled.div`
//   display: flex;
//   text-align: center;
//   align-items: center;
//   width: 100%;
//   height: 100%;
//   padding-top: 30px;
//   margin-left: 20px;
//   font-size: 3.2vmin;
//   font-weight: bolder;
//   color: #3c4554;
// `;

// const BusDiv = styled.div`
//   display: flex;
// `;
// const BusListDiv = styled.div`
//   margin-left: 30px;
//   font-size: 1rem;
// `;
// const BusImg = styled.img`
//   width: 100%;
//   height: 100%;
// `;
// const BusType = styled.div`
//   color: Green;
//   font-size: 1rem;
//   font-weight: 700;
// `;
// const BusArr = styled.div`
//   color: #5a5a5a;
// `;

export default Directions;