// import styledEngine from "@mui/styled-engine";
import React from "react";
import { useState, useEffect } from "react";

import styled from "styled-components";
import AppBar from "../components/Appbar";
import Kakao from "../components/Map";
import WrapBox from "../styled_components/WrapBox";
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
          {/* <Kakao /> */}
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

export default Directions;
