import styled from "styled-components";
import AppBar from "../components/Appbar";
import WrapBox from "../styled_components/wrapBox";
import Footer from "../styled_components/FooterDiv";
import TitleDiv from "../styled_components/TitleDiv";
import LineDiv from "../styled_components/LineDiv";
import { useState, useEffect } from "react";

// 0. 페이지 네이션 구현
// 1. 데이터 받아와서 useState 동적으로 데이터 받아오기
// 2. useState, useEffect
const dumyData = [
  {
    id: 38,
    title: ".",
    thumbnail:
      "https://postfiles.pstatic.net/MjAyMzAzMTRfMjcg/MDAxNjc4NzU5MjE2MDk0.EmuCN1qs4mzyKll97rRLZF5rESRj0i92_r1jIPYqlccg.TUM1tUCG9eWgcyMvTtFGHv_y17uJVTBrMTl_fqgdFdcg.JPEG.coramdeobok/%EA%B5%90%ED%9A%8C%EC%A7%80%EB%B6%95(%EC%98%81%EB%AC%B8).jpeg?type=w773",
    link: "https://blog.naver.com/PostList.naver?blogId=goodchurch9006&from=postList&categoryNo=11 ",
    church_name: "charmjoeun",
  },
  {
    id: 37,
    title: ".",
    thumbnail:
      "https://postfiles.pstatic.net/MjAyMzAzMTRfNjAg/MDAxNjc4NzU5MDE3NTI0.85Tc5uMFXLCw3tbBrJR78IFuU-Mx3YOuIf3dQMoUe6kg.VrZgKeqOMWWyO6slnVf5S_wFRPJ_NH3-1QoZmn2ObY0g.JPEG.coramdeobok/%EC%B0%B8%EC%A1%B0%EC%9D%80%EA%B5%90%ED%9A%8C_%EB%82%98%EB%AC%B4%EC%98%81%EB%AC%B8.jpeg?type=w773",
    link: "https://blog.naver.com/PostList.naver?blogId=goodchurch9006&from=postList&categoryNo=10 ",
    church_name: "charmjoeun",
  },
  {
    id: 36,
    title: ".",
    thumbnail:
      "https://postfiles.pstatic.net/MjAyMzAzMTRfMjQg/MDAxNjc4NzU3NjA0MDgw._0rRRAsU73-FmBE8n1qYvKa2hFC8hPEyN6tBIpeOltUg.Vh6u_TfXJ_3KoUAppM9cubVJ-TmcMvOjo50e5-apUr0g.JPEG.coramdeobok/%EC%B0%B8%EC%A1%B0%EC%9D%80%EA%B5%90%ED%9A%8C_%EB%82%98%EB%AC%B4.jpeg?type=w773",
    link: "https://blog.naver.com/PostList.naver?blogId=goodchurch9006&from=postList&categoryNo=9 ",
    church_name: "charmjoeun",
  },
  {
    id: 35,
    title: ".",
    thumbnail:
      "https://postfiles.pstatic.net/MjAyMzAzMTRfNSAg/MDAxNjc4NzYxNjI3MjQy.Elsh10p1D_xVeZ0Jdow1oKhzMdwNdLxXCofmtvQ2uPUg.4B_NNjrWtZYjCsc4RfMRdRBeoTzDfZLwNHpAVAJRps8g.JPEG.coramdeobok/%EA%B5%90%ED%9A%8C%EC%A7%80%EB%B6%95(%EC%98%81%EB%AC%B8).jpeg?type=w773",
    link: "https://blog.naver.com/PostList.naver?blogId=goodchurch9006&from=postList&categoryNo=13 ",
    church_name: "charmjoeun",
  },
  {
    id: 33,
    title: ".",
    thumbnail:
      "https://postfiles.pstatic.net/MjAyMzAzMTRfMTQw/MDAxNjc4NzU2ODkwMjE1.VaF5ITJBBNgbOF6MYeh-KEJ0EhxM9yehegr8GgnQcGYg.p80ol6rjcjuQ9rwJ_Tw7VxbaW47-8_S7gYswAqPOtr0g.JPEG.coramdeobok/%EB%AA%A9%EC%82%AC%EB%8B%98_%EC%82%AC%EC%A7%84.jpg?type=w773",
    link: "https://blog.naver.com/PostList.naver?blogId=goodchurch9006&from=postList&categoryNo=7 ",
    church_name: "charmjoeun",
  },
];

const Page = () => {
  const [list,setList] = useState([])
}

const ChurchLife = () => {
  return (
    <>
      <AppBar />
      <WrapBox>
        <TitleDiv>
          <h1>교회 생활</h1>
        </TitleDiv>
        <LineDiv />
        <ContentBox>
          <BlogDiv>
            <BlogImg src={"Banner.png"} />
          </BlogDiv>
        </ContentBox>
      </WrapBox>
      <Footer />
    </>
  );
};

const ContentBox = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 3%;
`;
const BlogDiv = styled.div`
  background-color: grey;
  opacity: 0.8;
  width: 50%;
  height: 20vw;
  margin: 1%;
`;
const BlogImg = styled.img`
  width: 100%;
  height: 100%;
`;

export default ChurchLife;
