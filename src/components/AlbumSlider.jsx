import React from "react";
import Slider from "react-slick";
import styled from "styled-components";
import { useState, useEffect } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const homeAlbumData = [
  {
    id: 1,
    imgUrl:
      "https://minio.nculture.org/amsweb-opt/multimedia_assets/98/29780/14526/c/%EC%95%88%EB%8F%99_%EC%95%88%EB%8F%99%EA%B5%90%ED%9A%8C%EC%98%88%EB%B0%B0%EB%8B%B92%EC%B8%B5_20191104_171920_01-medium-size.jpg",
    linkUrl: "https://blog.naver.com/goodchurch9006/223043920058",
  },
  {
    id: 2,
    imgUrl:
      "http://www.christianreview.com.au/imgdata/christianreview_com_au/202111/2021112946195938.jpg",
    linkUrl: "http://www.christianreview.com.au/7617",
  },
  {
    id: 3,
    imgUrl:
      "https://www.light-of-truth.org/wp-content/uploads/2019/03/who-is-Jesus.jpg",
    linkUrl: "https://blog.naver.com/goodchurch9006/223041710330",
  },
  {
    id: 4,
    imgUrl: "/4",
    linkUrl: "https://blog.naver.com/goodchurch9006/223041694325",
  },
  {
    id: 5,
    imgUrl:
      "https://www.logoyogo.com/web/wp-content/uploads/edd/2021/04/logoyogo-1-119.jpg",
    linkUrl: "https://blog.naver.com/goodchurch9006/223041688731",
  },
];
export default function AlbumSlider() {
  const [albums, setAlbum] = useState([]);
  const [page, setPage] = useState(1);



  const getAlbum = async () => {
    // TODO: getBanners api needed
    setAlbum([...homeAlbumData]);
  };
  const changePage = (e) => {
    console.log("페이지 바뀌는중")
    setPage(e.target.value)
    
  }
  useEffect(() => {
    if (page !== undefined && page !== null && page >= 1) {
    getAlbum();
    console.log("앨범 렌더링");
    }
  }, [page]);

  const albumSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: <StyledPrevArrow value={page} onClick = {changePage}></StyledPrevArrow>,
    nextArrow: <StyledNextArrow />,

    responsive: [
      // 반응형 웹 구현 옵션
      {
        breakpoint: 1024, //화면 사이즈 960px일 때
        settings: {
          //위에 옵션이 디폴트 , 여기에 추가하면 그걸로 변경
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 800, //화면 사이즈 768px일 때
        settings: {
          //위에 옵션이 디폴트 , 여기에 추가하면 그걸로 변경
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480, //화면 사이즈 768px일 때
        settings: {
          //위에 옵션이 디폴트 , 여기에 추가하면 그걸로 변경
          slidesToShow: 1,
        },
      },
    ],
  };
  return (
    <div>
      <StyledSlider {...albumSettings}>
        {homeAlbumData.map((item) => {
          return (
            <BoxDiv key={item.id}>
              <AlbumImg src={item.imgUrl} alt="sampleImg" />
            </BoxDiv>
          );
        })}
      </StyledSlider>
    </div>
  );
}

const BoxDiv = styled.div`
  /* display: flex;
    height: 20vw;
    width: 80%;
    /* justify-content: space-between;
    flex-direction: row; */
  margin: 2px;
  padding: 2px;
`;

const AlbumImg = styled.img`
  width: 95%;
  height: 20vw;
`;

const StyledSlider = styled(Slider)`
  display: flex;
  justify-content: space-around;
  flex-direction: row;
  position: relative;
  margin: 1.5%;
`;

const StyledPrevArrow = styled.div`
  position: absolute;
  margin-left: 11px;
  z-index: 3;

  &::before {
    content: "";
    display: inline-block;
    border-top: 5px solid #000;
    border-left: 5px solid #000;
    width: 10px;
    height: 10px;
    transform: rotate(315deg);
    margin-right: 10px;
  }
`;

const StyledNextArrow = styled.div`
  position: absolute;
  margin-right: 22px;
  z-index: 3;

  &::before {
    content: "";
    display: inline-block;
    border-top: 5px solid #000;
    border-right: 5px solid #000;
    width: 10px;
    height: 10px;
    transform: rotate(45deg);
    margin-left: 10px;
  }
`;
