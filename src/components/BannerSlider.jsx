import React from "react";
import Slider from "react-slick";
import styled from "styled-components";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function BannerSlider() {

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
      {/* <TotalBox> */}
        <BoxDiv>
          <BannerImg src={"../Banner.png"} alt="Banner1" />
        </BoxDiv>
        <BoxDiv>
          <BannerImg src={"../Banner.png"} alt="Banner1" />
        </BoxDiv>
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

