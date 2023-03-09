import "./App.css";
import styled from "styled-components";

function App() {
  const AppBar = {
    Info: "환영합니다",
    Time: "예배시간",
    Path: "찾아오시는길",
    label: "교회 생활",
  };

  const albumList = [
    {
      imagePath: 'https://images.christiantoday.co.kr/data/images/full/346460/image.jpg',
      title: '교회 여름수련회 후기',
      description: '교회에서 젬민이들이랑 여름수련회 냠냠냠 오늘은 좋은 날이네여. 감사하게 연탄봉사를 다녀왔습니다. 남균이가 불참해서 마음이 어려웠지만 윤이가 대신 와준다고 해서 기분이 좋았어요',
    },
    {
      imagePath: 'https://lovecoal.org/wp-content/uploads/2019/10/2019-%EA%B8%80%EC%82%AC%EC%A7%84-%EA%B3%B5%EB%AA%A8%EC%A0%84-%EA%B3%B5%EA%B3%A0%EA%B8%80-%EB%A9%94%EC%9D%B8%EC%82%AC%EC%A7%84%ED%81%AC%EA%B8%B0%EC%A1%B0%EC%A0%95%EC%99%84%EB%A3%8C.jpg',
      title: '참조은 교회 연탄봉사 후기',
      description: '오늘은 좋은 날이네여. 감사하게 연탄봉사를 다녀왔습니다. 남균이가 불참해서 마음이 어려웠지만 윤이가 대신 와준다고 해서 기분이 좋았어요',
    },
    {
      imagePath: 'http://0091.org/files/attach/images/115/000/145/4d4841dd2c855b61739a0237f1f7234c.JPG',
      title: '교회 겨울수련회 후기',
      description: '교회에서 어덜트들이랑 겨울수련회 냠냠냠 오늘은 좋은 날이네여. 감사하게 연탄봉사를 다녀왔습니다. 남균이가 불참해서 마음이 어려웠지만 윤이가 대신 와준다고 해서 기분이 좋았어요',
    },
    {
      imagePath: 'https://images.christiantoday.co.kr/data/images/full/346460/image.jpg',
      title: '교회 여름수련회 후기',
      description: '교회에서 젬민이들이랑 여름수련회 냠냠냠 오늘은 좋은 날이네여. 감사하게 연탄봉사를 다녀왔습니다. 남균이가 불참해서 마음이 어려웠지만 윤이가 대신 와준다고 해서 기분이 좋았어요',
    },
    {
      imagePath: 'https://lovecoal.org/wp-content/uploads/2019/10/2019-%EA%B8%80%EC%82%AC%EC%A7%84-%EA%B3%B5%EB%AA%A8%EC%A0%84-%EA%B3%B5%EA%B3%A0%EA%B8%80-%EB%A9%94%EC%9D%B8%EC%82%AC%EC%A7%84%ED%81%AC%EA%B8%B0%EC%A1%B0%EC%A0%95%EC%99%84%EB%A3%8C.jpg',
      title: '참조은 교회 연탄봉사 후기',
      description: '오늘은 좋은 날이네여. 감사하게 연탄봉사를 다녀왔습니다. 남균이가 불참해서 마음이 어려웠지만 윤이가 대신 와준다고 해서 기분이 좋았어요',
    },
    {
      imagePath: 'http://0091.org/files/attach/images/115/000/145/4d4841dd2c855b61739a0237f1f7234c.JPG',
      title: '교회 겨울수련회 후기',
      description: '교회에서 어덜트들이랑 겨울수련회 냠냠냠 오늘은 좋은 날이네여. 감사하게 연탄봉사를 다녀왔습니다. 남균이가 불참해서 마음이 어려웠지만 윤이가 대신 와준다고 해서 기분이 좋았어요',
    },
    {
      imagePath: 'https://images.christiantoday.co.kr/data/images/full/346460/image.jpg',
      title: '교회 여름수련회 후기',
      description: '교회에서 젬민이들이랑 여름수련회 냠냠냠 오늘은 좋은 날이네여. 감사하게 연탄봉사를 다녀왔습니다. 남균이가 불참해서 마음이 어려웠지만 윤이가 대신 와준다고 해서 기분이 좋았어요',
    },
    {
      imagePath: 'https://lovecoal.org/wp-content/uploads/2019/10/2019-%EA%B8%80%EC%82%AC%EC%A7%84-%EA%B3%B5%EB%AA%A8%EC%A0%84-%EA%B3%B5%EA%B3%A0%EA%B8%80-%EB%A9%94%EC%9D%B8%EC%82%AC%EC%A7%84%ED%81%AC%EA%B8%B0%EC%A1%B0%EC%A0%95%EC%99%84%EB%A3%8C.jpg',
      title: '참조은 교회 연탄봉사 후기',
      description: '오늘은 좋은 날이네여. 감사하게 연탄봉사를 다녀왔습니다. 남균이가 불참해서 마음이 어려웠지만 윤이가 대신 와준다고 해서 기분이 좋았어요',
    },
    {
      imagePath: 'http://0091.org/files/attach/images/115/000/145/4d4841dd2c855b61739a0237f1f7234c.JPG',
      title: '교회 겨울수련회 후기',
      description: '교회에서 어덜트들이랑 겨울수련회 냠냠냠 오늘은 좋은 날이네여. 감사하게 연탄봉사를 다녀왔습니다. 남균이가 불참해서 마음이 어려웠지만 윤이가 대신 와준다고 해서 기분이 좋았어요',
    },
  ]

  return (
    <>
    <StyledAppBar>
      <LogoImg>
        <img src={"../mainlogo.png"} alt="mainLogo" />
      </LogoImg>
      <MenuList>
        <MenuTab> {AppBar.Info} </MenuTab>
        <MenuTab>{AppBar.Time} </MenuTab>
        <MenuTab> {AppBar.Path} </MenuTab>
        <MenuTab> {AppBar.label} </MenuTab>
      </MenuList>
    </StyledAppBar>
    <WrapBox>
      <h1>준비중</h1>
    </WrapBox>
    </>
  );
}

const WrapBox = styled.div`
  width: 100%;
// `
const StyledAppBar = styled.div`
  min-height: 100px;
  display: flex;
  justify-content: space-between;
  font-size: calc(10px + 2vmin);
  color: black;
  // background-color: green;
  position:flex 
`;
const LogoImg = styled.div`
  display: flex;
  width: 20%;
  height: 100px;
  justify-content: flex;
  padding: 15px;
`;
const MenuList = styled.div`
  display: flex;
  justify-content: flex-end;
  margin: 30px;
  margin-top: 40px;
`;
const MenuTab = styled.div`
  display:flex;
  font-size: 20px;
  padding: 10px;
  font-size:15px
  float: left;
  font-weight: bold;
`;

export default App;
