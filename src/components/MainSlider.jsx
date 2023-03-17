import React from "react";
import Slider from "react-slick";
import styled from "styled-components";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// function NextArrow({ className, style, onClick }: NextArrowProps)
//  {
//   return <div className={className} style={{ ...style, display: 'block', background: 'red' }} onClick={onClick} />;
// }

export default function MainSlider() {
  const Albumsettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerPadding: '20px',
    // nextArrow: <NextArrow />
  };
  return (
    <div>
      <Slider {...Albumsettings}>
        <BoxDiv>
          <AlbumImg src={"../eg.png"} alt="eg" />
        </BoxDiv>
        <BoxDiv>
        <AlbumImg src={"../eg.png"} alt="eg" />
        </BoxDiv>
        <BoxDiv>
        <AlbumImg src={"../eg.png"} alt="eg" />
        </BoxDiv>
        <BoxDiv>
        <AlbumImg src={"../eg.png"} alt="eg" />
        </BoxDiv>
        <BoxDiv>
        <AlbumImg src={"../eg.png"} alt="eg" />
        </BoxDiv>
        <BoxDiv>
        <AlbumImg src={"../eg.png"} alt="eg" />
        </BoxDiv>
      </Slider>
    </div>
  );
}

const BoxDiv = styled.div`
display:flex;
height:200px;
width:80%;
  /* margin: 10px; */
  justify-content:space-between;
  flex-direction: row; 
`;

const AlbumImg =styled.img`
width:95%;
height:100%;
`;

// const rSlider = styled(Slider)`
//   display:flex;
//   margin:10px;
// `;
