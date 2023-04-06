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
import axios from "axios";

const directionInfo = {
  id: 1,
  imgUrl:
    "https://aiderbucket.s3.ap-northeast-2.amazonaws.com/BusStationInfo.png",
};

const Directions = () => {
  // const [directionInfo, setDirectionInfo] = useState();
  // const getDirectionInfo = async () => {
    //TODO : getDirectionInfo img API needed
    //   const APIURL_BusInfo = "http://3.35.22.166:3100/charmjoeun/businfo"
    //   axios
    //   .get(APIURL_BusInfo)
    //   .then(function (response) {
    //     const BusInfoImgURL = response.data?.logo_img;
    //     setDirectionInfo(BusInfoImgURL);

    //   })
    //   .catch(function (error) {
    //     console.log(error);
    //   });
    // };
  // };
  // useEffect(() => {
  //   getDirectionInfo();
  // }, []);

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
          {/*TODO : getKAKAO API host 3050 */}
        </MapDiv>
        <BusInfoDiv>
          <BusStationImg src={directionInfo.imgUrl} alt="BusStationInfo" />
          {/* <BusStationImg src={directionInfo} alt="BusStationInfo"/> */}
          {/*TODO : getKAKAO API host 3050 */}
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
  width: 100%;
  height: 100%;
`;

export default Directions;
