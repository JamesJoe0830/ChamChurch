// import styledEngine from "@mui/styled-engine";
import React from "react";
import { useState, useEffect } from "react";

import styled from "styled-components";
import AppBar from "../components/Appbar";
import Kakao from "../components/Map";
import WrapBox from "../styled_components/wrapBox";
import Footer from "../components/FooterDiv";
import TitleDiv from "../styled_components/TitleDiv";
import LineDiv from "../styled_components/LineDiv";

const directionInfo = {
  id: 1,
  imgUrl:
    "https://aiderbucket.s3.ap-northeast-2.amazonaws.com/BusStationInfo.png",
};


const Directions = () => {
  
//   const [directionInfo, setDirectionInfo] = useState(0);
//   const getDirectionInfo = async () => {
//     //TODO : getDirectionInfo img API needed
//     setDirectionInfo(directionInfo);
//   };

//   useEffect (()=> {
//     getDirectionInfo();
//   }, []);



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
        <BusStationImg src={directionInfo.imgUrl} alt="BusStationInfo"/>
        </BusInfoDiv>
       
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
