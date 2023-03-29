import React from "react";
import Slider from "react-slick";
import styled from "styled-components";
import { useState, useEffect } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const bannerList = [
  {
    id: 1,
    imagePath:
      "https://user-images.githubusercontent.com/73478057/228507881-bae1d9d7-76e1-4f16-b842-d520eb4ec210.png",
  },
  {
    id: 2,
    imagePath:
      "https://user-images.githubusercontent.com/73478057/228507767-08991c13-82dd-4cb1-a429-00a4aba779a7.png",
  },
];

export default function BannerSlider() {
  const [banner, setBanner] = useState([]);
  const getBanner = async () =>{
    // TODO: getBanners api needed
    
    setBanner([...bannerList])
  }
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
