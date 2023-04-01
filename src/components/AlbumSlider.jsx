import React from "react";
import Slider from "react-slick";
import styled from "styled-components";
import { useState, useEffect } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const homeAlbumData = [
  {
    id: 38,
    title: "예수님의 사랑을 나누는 공간",
    thumbnail:
      "https://images.unsplash.com/photo-1511311219972-4df5faba0fd5?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=1000&ixid=MnwxfDB8MXxyYW5kb218MHx8Y2h1cmNofHx8fHx8MTY4MDE5MjcyNA&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1000",
    link: "https://blog.naver.com/PostList.naver?blogId=goodchurch9006&from=postList&categoryNo=11 ",
    church_name: "charmjoeun",
  },
  {
    id: 37,
    title: "성경과 일상의 만남",
    thumbnail:
      "https://images.unsplash.com/photo-1476214211866-f4af317fc977?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=1000&ixid=MnwxfDB8MXxyYW5kb218MHx8Y2h1cmNofHx8fHx8MTY4MDE5Mjc3Mg&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1000",
    link: "https://blog.naver.com/PostList.naver?blogId=goodchurch9006&from=postList&categoryNo=10 ",
    church_name: "charmjoeun",
  },
  {
    id: 34,
    title: "믿음으로 함께하는 생활",
    thumbnail:
      "https://images.unsplash.com/photo-1475938083343-9bb3bf8a4adb?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=1000&ixid=MnwxfDB8MXxyYW5kb218MHx8Y2h1cmNofHx8fHx8MTY4MDE5MjgxMg&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1000",
    link: "https://blog.naver.com/PostList.naver?blogId=goodchurch9006&from=postList&categoryNo=9 ",
    church_name: "charmjoeun",
  },
  {
    id: 32,
    title: "주일마다 함께하는 예배",
    thumbnail:
      "https://images.unsplash.com/photo-1476214211866-f4af317fc977?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=1000&ixid=MnwxfDB8MXxyYW5kb218MHx8Y2h1cmNofHx8fHx8MTY4MDE5Mjc3Mg&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1000",
    link: "https://blog.naver.com/PostList.naver?blogId=goodchurch9006&from=postList&categoryNo=10 ",
    church_name: "charmjoeun",
  },
  {
    id: 31,
    title: "교회 소식과 함께하는 나눔의 공간",
    thumbnail:
      "https://images.unsplash.com/photo-1475938083343-9bb3bf8a4adb?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=1000&ixid=MnwxfDB8MXxyYW5kb218MHx8Y2h1cmNofHx8fHx8MTY4MDE5MjgxMg&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1000",
    link: "https://blog.naver.com/PostList.naver?blogId=goodchurch9006&from=postList&categoryNo=9 ",
    church_name: "charmjoeun",
  },
];

export default function AlbumSlider() {
  const [albums, setAlbum] = useState([]); //왜 [] 초기값을 넣으면 안되는지 분석할 것
  const [page, setPage] = useState(1);

  const getAlbum = async () => {
    // TODO: getBanners api needed
    setAlbum([...homeAlbumData]);
  };
  const changePage = (e) => {
    console.log("페이지 바뀌는중");
    setPage(e.target.value);
  };
  useEffect(() => {
    getAlbum();
  }, [page]);

  const albumSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: <StyledPrevArrow></StyledPrevArrow>,
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
      {albums !== undefined && albums !== null && albums.length > 0 && (
        <StyledSlider {...albumSettings}>
          {albums.map((item) => {
            return (
              <BoxDiv>
                <AlbumImg src={item.thumbnail} alt="sampleImg" />
                <AlbumTitle>{item.title}</AlbumTitle>
              </BoxDiv>
            );
          })}
        </StyledSlider>
      )}
    </div>
  );
}

const BoxDiv = styled.div`
  text-align: center;
  border: solid 1px #ebebeb;
  border-radius: 10px;
`;
const AlbumImg = styled.img`
  width: 100%;
`;
const AlbumTitle = styled.div`
  margin-top: 20px;
  margin-bottom: 20px;
  font-size: 20px;
  color: #666666;
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
