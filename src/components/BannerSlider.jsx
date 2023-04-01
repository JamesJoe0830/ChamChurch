import React from "react";
import { useState, useEffect } from "react";
import Slider from "react-slick";
import styled from "styled-components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const bannerList = [
  {
    id: 1,
    imagePath:
      "https://aiderbucket.s3.ap-northeast-2.amazonaws.com/Banner1.png",
  },
  {
    id: 2,
    imagePath:
      "https://aiderbucket.s3.ap-northeast-2.amazonaws.com/Banner2.png",
  },
];

export default function BannerSlider() {
  const [banner, setBanner] = useState([]);
  const getBanner = async () => {
    // TODO: getBanners api needed

    setBanner([...bannerList]);
  };
  useEffect(() => {
    getBanner();
  }, []);

  const bannerSettings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerPadding: "20px",
  };
  return (
    <div>
      <Slider {...bannerSettings}>
        {banner.map((banner) => {
          return (
            <BoxDiv>
              <BannerImg src={banner.imagePath} alt="Banner" />
            </BoxDiv>
          );
        })}
      </Slider>
    </div>
  );
}

const BoxDiv = styled.div`
  /* display: flex;
    height: 20vw;
    width: 80%;
    justify-content: space-between;
    flex-direction: row; */
`;
const BannerImg = styled.img`
  width: 100%;
`;
