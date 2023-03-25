import React from "react";
import Slider from "react-slick";
import styled from "styled-components";
import { Component } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { render } from "@testing-library/react";


export default class AlbumSlider extends Component {
  render() {
  const albumSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    // prevArrow :  (<PrevTo>

    // </PrevTo>),  

    // nextArrow : (<NextTo>

    // </NextTo>)
   
    responsive: [ // 반응형 웹 구현 옵션
		{  
			breakpoint: 1024, //화면 사이즈 960px일 때
			settings: {
				//위에 옵션이 디폴트 , 여기에 추가하면 그걸로 변경
				slidesToShow:3
			} 
		},
		{ 
			breakpoint: 800, //화면 사이즈 768px일 때
			settings: {	
				//위에 옵션이 디폴트 , 여기에 추가하면 그걸로 변경
				slidesToShow:2
      }
    },
    { 
			breakpoint: 480, //화면 사이즈 768px일 때
			settings: {	
				//위에 옵션이 디폴트 , 여기에 추가하면 그걸로 변경
				slidesToShow:1
      }
    }
    ]
}
  return (

    <div>

      <StyledSlider {...albumSettings}>
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
      </StyledSlider>
      {/* </TotalBox> */}
    </div>
  );
}
}
const NextTo = styled.div`
  position: absolute;
  margin-right:30px;
  z-index: 3;

`;

const PrevTo = styled.div`
  position: absolute;
  margin-left:30px;
  z-index: 3;
`;
const Nextimg = styled.img`
  width:100%;
`;

const Previmg = styled.img`
  width:100%;
`;

const BoxDiv = styled.div`
    /* display: flex;
    height: 20vw;
    width: 80%;
    /* justify-content: space-between;
    flex-direction: row; */
    margin:2px;
    padding: 2px;
`;

const AlbumImg = styled.img`
  width: 98%;
  height: 100%;
`;


const StyledSlider = styled(Slider)`
  display:flex;
  justify-content: space-around ;
  flex-direction:row; 
  position: relative;
`;
