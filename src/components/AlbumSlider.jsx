import React from "react";
import Slider from "react-slick";
import styled from "styled-components";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "grey" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "grey" }}
      onClick={onClick}
    />
  );
}

export default function AlbumSlider() {

  const albumSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow : <SamplePrevArrow />,  
    nextArrow : <SampleNextArrow/>
//     responsive: [ // 반응형 웹 구현 옵션
// 		{  
// 			breakpoint: 960, //화면 사이즈 960px일 때
// 			settings: {
// 				//위에 옵션이 디폴트 , 여기에 추가하면 그걸로 변경
// 				slidesToShow:3 
// 			} 
// 		},
// 		{ 
// 			breakpoint: 768, //화면 사이즈 768px일 때
// 			settings: {	
// 				//위에 옵션이 디폴트 , 여기에 추가하면 그걸로 변경
// 				slidesToShow:2 
//   }
// }
//     ]
}
  return (

    <div>
      {/* <TotalBox> */}
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
const TotalBox =styled.div`

  margin:5%;

`;

const BoxDiv = styled.div`
    /* display: flex;
    height: 20vw;
    width: 80%;
    /* justify-content: space-between;
    flex-direction: row; */
    margin:2px;
    padding: 2px; */
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