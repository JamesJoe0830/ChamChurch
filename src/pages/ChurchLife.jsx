import styled from "styled-components";
import AppBar from "../components/Appbar";
import WrapBox from "../styled_components/WrapBox";
import Footer from "../components/FooterDiv";
import TitleDiv from "../styled_components/TitleDiv";
import LineDiv from "../styled_components/LineDiv";
import AlbumSlider from "../components/AlbumSlider";

import { useState, useEffect } from "react";
import axios from "axios";

const tempBlogs = [
  {
    id: 1,
    title: ".",
    thumbnail:
    "https://media.istockphoto.com/id/881959374/ko/%EC%82%AC%EC%A7%84/%EC%9D%B8%EA%B0%84%EC%9D%98-%EC%86%90%EC%97%90-%ED%8C%9C-%EC%98%88%EB%B0%B0%EB%A5%BC-%EC%97%BD%EB%8B%88%EB%8B%A4-%EC%84%B1-%EC%B0%AC-%EC%B9%98%EB%A3%8C-%EB%8F%95%EB%8A%94-%EA%B0%80%ED%86%A8%EB%A6%AD-%EB%B6%80%ED%99%9C%EC%A0%88-%ED%9A%8C%EA%B0%9C-%ED%95%98%EB%82%98%EB%8B%98-%EC%B6%95%EB%B3%B5-%EA%B8%B0%EB%8F%84-%EB%A7%88%EC%9D%8C%EC%9D%84-%EB%B9%8C%EB%A0%A4-%EC%A4%AC-%EA%B8%B0%EB%8F%85%EA%B5%90-%EC%A2%85%EA%B5%90-%EA%B0%9C%EB%85%90-%EB%B0%B0%EA%B2%BD%EC%9E%85%EB%8B%88%EB%8B%A4-%EC%8B%B8%EC%9B%80%EA%B3%BC-%ED%95%98%EB%82%98%EB%8B%98%EC%97%90-%EB%8C%80-%ED%95%9C-%EC%8A%B9%EB%A6%AC.jpg?s=612x612&w=0&k=20&c=aH6EOLpTeU4O8qMSrOBFEL0v4andPF-PCdRxOuG0zl8=",
    link: "https://blog.naver.com/PostList.naver?blogId=goodchurch9006&from=postList&categoryNo=11 ",
    church_name: "charmjoeun",
  },
  {
    id: 2,
    title: ".",
    thumbnail:
    "https://media.istockphoto.com/id/879917312/ko/%EC%82%AC%EC%A7%84/%EA%B8%B0%EB%8F%85%EA%B5%90-%EC%8B%AD%EC%9E%90%EA%B0%80-%ED%95%98%EB%8A%98%EC%97%90-%EB%B0%9D%EC%9D%80-%EB%82%98%ED%83%80%EB%82%A9%EB%8B%88%EB%8B%A4.jpg?s=612x612&w=0&k=20&c=P0GPqYfhLqeX89X2mr4jpCT4gD-UDpgATsIXVB2IegI=",
    link: "https://blog.naver.com/PostList.naver?blogId=goodchurch9006&from=postList&categoryNo=10 ",
    church_name: "charmjoeun",
  },
  {
    id: 3,
    title: ".",
    thumbnail:
    "https://media.istockphoto.com/id/881959374/ko/%EC%82%AC%EC%A7%84/%EC%9D%B8%EA%B0%84%EC%9D%98-%EC%86%90%EC%97%90-%ED%8C%9C-%EC%98%88%EB%B0%B0%EB%A5%BC-%EC%97%BD%EB%8B%88%EB%8B%A4-%EC%84%B1-%EC%B0%AC-%EC%B9%98%EB%A3%8C-%EB%8F%95%EB%8A%94-%EA%B0%80%ED%86%A8%EB%A6%AD-%EB%B6%80%ED%99%9C%EC%A0%88-%ED%9A%8C%EA%B0%9C-%ED%95%98%EB%82%98%EB%8B%98-%EC%B6%95%EB%B3%B5-%EA%B8%B0%EB%8F%84-%EB%A7%88%EC%9D%8C%EC%9D%84-%EB%B9%8C%EB%A0%A4-%EC%A4%AC-%EA%B8%B0%EB%8F%85%EA%B5%90-%EC%A2%85%EA%B5%90-%EA%B0%9C%EB%85%90-%EB%B0%B0%EA%B2%BD%EC%9E%85%EB%8B%88%EB%8B%A4-%EC%8B%B8%EC%9B%80%EA%B3%BC-%ED%95%98%EB%82%98%EB%8B%98%EC%97%90-%EB%8C%80-%ED%95%9C-%EC%8A%B9%EB%A6%AC.jpg?s=612x612&w=0&k=20&c=aH6EOLpTeU4O8qMSrOBFEL0v4andPF-PCdRxOuG0zl8=",

    link: "https://blog.naver.com/PostList.naver?blogId=goodchurch9006&from=postList&categoryNo=9 ",
    church_name: "charmjoeun",
  },
  {
    id: 4,
    title: ".",
    thumbnail:
    "https://media.istockphoto.com/id/879917312/ko/%EC%82%AC%EC%A7%84/%EA%B8%B0%EB%8F%85%EA%B5%90-%EC%8B%AD%EC%9E%90%EA%B0%80-%ED%95%98%EB%8A%98%EC%97%90-%EB%B0%9D%EC%9D%80-%EB%82%98%ED%83%80%EB%82%A9%EB%8B%88%EB%8B%A4.jpg?s=612x612&w=0&k=20&c=P0GPqYfhLqeX89X2mr4jpCT4gD-UDpgATsIXVB2IegI=",

    link: "https://blog.naver.com/PostList.naver?blogId=goodchurch9006&from=postList&categoryNo=13 ",
    church_name: "charmjoeun",
  },
  {
    id: 5,
    title: ".",
    thumbnail:
    "https://postfiles.pstatic.net/MjAyMzAzMTRfMTQw/MDAxNjc4NzU2ODkwMjE1.VaF5ITJBBNgbOF6MYeh-KEJ0EhxM9yehegr8GgnQcGYg.p80ol6rjcjuQ9rwJ_Tw7VxbaW47-8_S7gYswAqPOtr0g.JPEG.coramdeobok/%EB%AA%A9%EC%82%AC%EB%8B%98_%EC%82%AC%EC%A7%84.jpg?type=w773",
    link: "https://blog.naver.com/PostList.naver?blogId=goodchurch9006&from=postList&categoryNo=7 ",
    church_name: "charmjoeun",
  },
  {
    id: 6,
    title: ".",
    thumbnail:
    "https://media.istockphoto.com/id/881959374/ko/%EC%82%AC%EC%A7%84/%EC%9D%B8%EA%B0%84%EC%9D%98-%EC%86%90%EC%97%90-%ED%8C%9C-%EC%98%88%EB%B0%B0%EB%A5%BC-%EC%97%BD%EB%8B%88%EB%8B%A4-%EC%84%B1-%EC%B0%AC-%EC%B9%98%EB%A3%8C-%EB%8F%95%EB%8A%94-%EA%B0%80%ED%86%A8%EB%A6%AD-%EB%B6%80%ED%99%9C%EC%A0%88-%ED%9A%8C%EA%B0%9C-%ED%95%98%EB%82%98%EB%8B%98-%EC%B6%95%EB%B3%B5-%EA%B8%B0%EB%8F%84-%EB%A7%88%EC%9D%8C%EC%9D%84-%EB%B9%8C%EB%A0%A4-%EC%A4%AC-%EA%B8%B0%EB%8F%85%EA%B5%90-%EC%A2%85%EA%B5%90-%EA%B0%9C%EB%85%90-%EB%B0%B0%EA%B2%BD%EC%9E%85%EB%8B%88%EB%8B%A4-%EC%8B%B8%EC%9B%80%EA%B3%BC-%ED%95%98%EB%82%98%EB%8B%98%EC%97%90-%EB%8C%80-%ED%95%9C-%EC%8A%B9%EB%A6%AC.jpg?s=612x612&w=0&k=20&c=aH6EOLpTeU4O8qMSrOBFEL0v4andPF-PCdRxOuG0zl8=",
    link: "https://blog.naver.com/PostList.naver?blogId=goodchurch9006&from=postList&categoryNo=11 ",
    church_name: "charmjoeun",
  },
  {
    id: 7,
    title: ".",
    thumbnail:
    "https://media.istockphoto.com/id/879917312/ko/%EC%82%AC%EC%A7%84/%EA%B8%B0%EB%8F%85%EA%B5%90-%EC%8B%AD%EC%9E%90%EA%B0%80-%ED%95%98%EB%8A%98%EC%97%90-%EB%B0%9D%EC%9D%80-%EB%82%98%ED%83%80%EB%82%A9%EB%8B%88%EB%8B%A4.jpg?s=612x612&w=0&k=20&c=P0GPqYfhLqeX89X2mr4jpCT4gD-UDpgATsIXVB2IegI=",
    link: "https://blog.naver.com/PostList.naver?blogId=goodchurch9006&from=postList&categoryNo=10 ",
    church_name: "charmjoeun",
  },
  {
    id: 8,
    title: ".",
    thumbnail:
    "https://media.istockphoto.com/id/881959374/ko/%EC%82%AC%EC%A7%84/%EC%9D%B8%EA%B0%84%EC%9D%98-%EC%86%90%EC%97%90-%ED%8C%9C-%EC%98%88%EB%B0%B0%EB%A5%BC-%EC%97%BD%EB%8B%88%EB%8B%A4-%EC%84%B1-%EC%B0%AC-%EC%B9%98%EB%A3%8C-%EB%8F%95%EB%8A%94-%EA%B0%80%ED%86%A8%EB%A6%AD-%EB%B6%80%ED%99%9C%EC%A0%88-%ED%9A%8C%EA%B0%9C-%ED%95%98%EB%82%98%EB%8B%98-%EC%B6%95%EB%B3%B5-%EA%B8%B0%EB%8F%84-%EB%A7%88%EC%9D%8C%EC%9D%84-%EB%B9%8C%EB%A0%A4-%EC%A4%AC-%EA%B8%B0%EB%8F%85%EA%B5%90-%EC%A2%85%EA%B5%90-%EA%B0%9C%EB%85%90-%EB%B0%B0%EA%B2%BD%EC%9E%85%EB%8B%88%EB%8B%A4-%EC%8B%B8%EC%9B%80%EA%B3%BC-%ED%95%98%EB%82%98%EB%8B%98%EC%97%90-%EB%8C%80-%ED%95%9C-%EC%8A%B9%EB%A6%AC.jpg?s=612x612&w=0&k=20&c=aH6EOLpTeU4O8qMSrOBFEL0v4andPF-PCdRxOuG0zl8=",

    link: "https://blog.naver.com/PostList.naver?blogId=goodchurch9006&from=postList&categoryNo=9 ",
    church_name: "charmjoeun",
  },
  {
    id: 9,
    title: ".",
    thumbnail:
    "https://media.istockphoto.com/id/879917312/ko/%EC%82%AC%EC%A7%84/%EA%B8%B0%EB%8F%85%EA%B5%90-%EC%8B%AD%EC%9E%90%EA%B0%80-%ED%95%98%EB%8A%98%EC%97%90-%EB%B0%9D%EC%9D%80-%EB%82%98%ED%83%80%EB%82%A9%EB%8B%88%EB%8B%A4.jpg?s=612x612&w=0&k=20&c=P0GPqYfhLqeX89X2mr4jpCT4gD-UDpgATsIXVB2IegI=",

    link: "https://blog.naver.com/PostList.naver?blogId=goodchurch9006&from=postList&categoryNo=13 ",
    church_name: "charmjoeun",
  },
];


function ChurchLife() {
  const [blogs, setBlogs] = useState([]);
  const [page, setPage] = useState(1);
  const [maxNumPage, setMaxNumPage] = useState();

  const getMaxPage = async () => {
    // TODO: getMaxPage api needed
    // const APIURL_MaxPage = "http://3.35.22.166:3100/charmjoeun/life/maxpage"
    // axios
    //   //   .get(APIURL_MaxPage)
    //   //   .then(function (response) {
    //   //     const MaxPageURL = response.data?.;
    //   //     setMaxNumPage(MaxPageURL);
  
    //   //   })
    //   //   .catch(function (error) {
    //   //     console.log(error);
    //   //   });
    //   // };
    const tempMax = 10;
    setMaxNumPage(tempMax);
  };

  const getBlogs = async (page) => {
    // TODO: getBlogs api needed
    // const APIURL_Page = "http://3.35.22.166:3100/charmjoeun/life/{page}" //이 page에 데이터가 들어감 
    // axios
    // .get(APIURL_Page)
    // .then(function (response) {
    //         const BlogAPIURL = response.data?.;
    //         setDirectionInfo(BlogAPIURL);
    //             })
    //   .catch(function (error) {
    //     console.log(error);
    //   });
    // };

    setBlogs([...tempBlogs]);
    // setBlogs([...APIURL_Page]);
  };

  useEffect(() => {
    if (page !== undefined && page !== null && page >= 1) {
      getBlogs(page);
    }
  }, [page]);

  useEffect(() => {
    getMaxPage();
  }, []);

  return (
    <>
      <WrapBox>
        <AppBar />
        <TitleDiv>
          <h1>교회 생활</h1>
        </TitleDiv>
        <LineDiv />
        <BlogListDiv>
          {blogs !== undefined && blogs !== null && blogs.length > 0 && (
            <CardListBoxDiv>
              {blogs.map((blog) => {
                return (
                  <CardDiv onClick={() => (window.location.href = blog.link)}>
                    <Title>{blog.title}</Title>
                    <ThumbImg src={blog.thumbnail} alt="thumbnail" />
                    <BorderLine></BorderLine>
                  </CardDiv>
                );
              })}
            </CardListBoxDiv>
          )}
        </BlogListDiv>

        <Nav>
          {Array.from({ length: maxNumPage }, (v, i) => (
            <Button
              onClick={() => {
                setPage(i + 1);

              }}
            >
              {i + 1}
            </Button>
          ))}
        </Nav>
      </WrapBox>
      <Footer />
    </>
  );
}

const CardDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 30%;
  height: 30%;
  margin-bottom: 20px;
  background-color: #dddddd;
  cursor: pointer;
`;

const Title = styled.label`
  position: absolute;
  color: white;
  z-index: 1000;
  font-weight: bold;
  font-size: 100%;
`;

const BlogListDiv = styled.div`
`;

const BorderLine = styled.div`
  width: 80%;
  height: 80%;
  position: absolute;
  border: 3px solid white;
`;
const CardListBoxDiv = styled.div`
  height: 100vh;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-around;
  align-items: baseline;
  align-content: space-between;
  margin-bottom: 5%;
  padding: 3%;
`;
const ThumbImg = styled.img`
  display: flex;
  width: 100%;
  height: 100%;

`;

const Nav = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4px;
  margin: 16px;
`;

const Button = styled.button`
  margin: 0 0.5rem;
  font-size: 1rem;
  font-weight: bold;
  background-color: ${(props) => (props.active ? "blue" : "transparent")};
  color: ${(props) => (props.active ? "white" : "black")};
  border: 1px solid black;
  border-radius: 4px;
  padding: 0.5rem 1rem;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background-color: green;
    color: white;
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

export default ChurchLife;
