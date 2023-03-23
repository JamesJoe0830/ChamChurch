import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import BannerSlider from "../components/BannerSlider"
import AppBar from "../components/Appbar";
import HomeTitleDiv from "../styled_components/HomeTitleDiv";
import WrapBox from "../styled_components/wrapBox";
import TimeTable from "../components/Table";
import Footer from "../styled_components/FooterDiv";
import AlbumSlider from "../components/AlbumSlider";

function Home() {
  const navigate = useNavigate();

  // const albumList = [
  //   {
  //     imagePath: 'https://images.christiantoday.co.kr/data/images/full/346460/image.jpg',
  //     title: '교회 여름수련회 후기',
  //     description: '교회에서 젬민이들이랑 여름수련회 냠냠냠 오늘은 좋은 날이네여. 감사하게 연탄봉사를 다녀왔습니다. 남균이가 불참해서 마음이 어려웠지만 윤이가 대신 와준다고 해서 기분이 좋았어요',
  //   },
  //   {
  //     imagePath: 'https://lovecoal.org/wp-content/uploads/2019/10/2019-%EA%B8%80%EC%82%AC%EC%A7%84-%EA%B3%B5%EB%AA%A8%EC%A0%84-%EA%B3%B5%EA%B3%A0%EA%B8%80-%EB%A9%94%EC%9D%B8%EC%82%AC%EC%A7%84%ED%81%AC%EA%B8%B0%EC%A1%B0%EC%A0%95%EC%99%84%EB%A3%8C.jpg',
  //     title: '참조은 교회 연탄봉사 후기',
  //     description: '오늘은 좋은 날이네여. 감사하게 연탄봉사를 다녀왔습니다. 남균이가 불참해서 마음이 어려웠지만 윤이가 대신 와준다고 해서 기분이 좋았어요',
  //   },
  //   {
  //     imagePath: 'http://0091.org/files/attach/images/115/000/145/4d4841dd2c855b61739a0237f1f7234c.JPG',
  //     title: '교회 겨울수련회 후기',
  //     description: '교회에서 어덜트들이랑 겨울수련회 냠냠냠 오늘은 좋은 날이네여. 감사하게 연탄봉사를 다녀왔습니다. 남균이가 불참해서 마음이 어려웠지만 윤이가 대신 와준다고 해서 기분이 좋았어요',
  //   },
  //   {
  //     imagePath: 'https://images.christiantoday.co.kr/data/images/full/346460/image.jpg',
  //     title: '교회 여름수련회 후기',
  //     description: '교회에서 젬민이들이랑 여름수련회 냠냠냠 오늘은 좋은 날이네여. 감사하게 연탄봉사를 다녀왔습니다. 남균이가 불참해서 마음이 어려웠지만 윤이가 대신 와준다고 해서 기분이 좋았어요',
  //   },
  //   {
  //     imagePath: 'https://lovecoal.org/wp-content/uploads/2019/10/2019-%EA%B8%80%EC%82%AC%EC%A7%84-%EA%B3%B5%EB%AA%A8%EC%A0%84-%EA%B3%B5%EA%B3%A0%EA%B8%80-%EB%A9%94%EC%9D%B8%EC%82%AC%EC%A7%84%ED%81%AC%EA%B8%B0%EC%A1%B0%EC%A0%95%EC%99%84%EB%A3%8C.jpg',
  //     title: '참조은 교회 연탄봉사 후기',
  //     description: '오늘은 좋은 날이네여. 감사하게 연탄봉사를 다녀왔습니다. 남균이가 불참해서 마음이 어려웠지만 윤이가 대신 와준다고 해서 기분이 좋았어요',
  //   },
  //   {
  //     imagePath: 'http://0091.org/files/attach/images/115/000/145/4d4841dd2c855b61739a0237f1f7234c.JPG',
  //     title: '교회 겨울수련회 후기',
  //     description: '교회에서 어덜트들이랑 겨울수련회 냠냠냠 오늘은 좋은 날이네여. 감사하게 연탄봉사를 다녀왔습니다. 남균이가 불참해서 마음이 어려웠지만 윤이가 대신 와준다고 해서 기분이 좋았어요',
  //   },
  //   {
  //     imagePath: 'https://images.christiantoday.co.kr/data/images/full/346460/image.jpg',
  //     title: '교회 여름수련회 후기',
  //     description: '교회에서 젬민이들이랑 여름수련회 냠냠냠 오늘은 좋은 날이네여. 감사하게 연탄봉사를 다녀왔습니다. 남균이가 불참해서 마음이 어려웠지만 윤이가 대신 와준다고 해서 기분이 좋았어요',
  //   },
  //   {
  //     imagePath: 'https://lovecoal.org/wp-content/uploads/2019/10/2019-%EA%B8%80%EC%82%AC%EC%A7%84-%EA%B3%B5%EB%AA%A8%EC%A0%84-%EA%B3%B5%EA%B3%A0%EA%B8%80-%EB%A9%94%EC%9D%B8%EC%82%AC%EC%A7%84%ED%81%AC%EA%B8%B0%EC%A1%B0%EC%A0%95%EC%99%84%EB%A3%8C.jpg',
  //     title: '참조은 교회 연탄봉사 후기',
  //     description: '오늘은 좋은 날이네여. 감사하게 연탄봉사를 다녀왔습니다. 남균이가 불참해서 마음이 어려웠지만 윤이가 대신 와준다고 해서 기분이 좋았어요',
  //   },
  //   {
  //     imagePath: 'http://0091.org/files/attach/images/115/000/145/4d4841dd2c855b61739a0237f1f7234c.JPG',
  //     title: '교회 겨울수련회 후기',
  //     description: '교회에서 어덜트들이랑 겨울수련회 냠냠냠 오늘은 좋은 날이네여. 감사하게 연탄봉사를 다녀왔습니다. 남균이가 불참해서 마음이 어려웠지만 윤이가 대신 와준다고 해서 기분이 좋았어요',
  //   },
  // ]

  return (
    <>
      {<AppBar />}
      <WrapBox>
        <BannerDiv>
        <BannerSlider/>
        </BannerDiv>
        <ContentsBoxDiv>
        <HomeTitleDiv>
        <h1>참조은 Story</h1>
        </HomeTitleDiv>
         <AlbumSlider/>
        </ContentsBoxDiv>
        <ContentsBoxDiv>
          <HomeTitleDiv>
            <h1>예배시간</h1>
          </HomeTitleDiv>
          <TimeTable/>
        </ContentsBoxDiv>
      </WrapBox>
      <Footer/>
    </>
  );
}

const ContentsBoxDiv = styled.div`
  margin-bottom: 5%;
  margin:3%;
`;
const BannerDiv = styled.div`
  margin-top: 5%;
  width: 100%;
`;
const BannerImg = styled.img`
  width: 100%;
`;


// const FooterDiv = styled.div`
//   display: flex;
//   justify-content: center;
//   background: #3c4554;
//   color: white;
// `;

export default Home;
