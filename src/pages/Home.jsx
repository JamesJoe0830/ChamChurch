import styled from "styled-components";
import { useNavigate } from "react-router-dom";

import AppBar from '../components/Appbar'

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

function Home() {
    const navigate = useNavigate()

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

  const tableContents = [
    {
      type: "oo예배",
      time: "오전 00:00",
      location: "2층 참좋은교회 강당",
      pastor: "oo목사님",
    },
    {
      type: "oo예배",
      time: "오전 00:00",
      location: "2층 참좋은교회 강당",
      pastor: "oo목사님",
    },
    {
      type: "oo예배",
      time: "오전 00:00",
      location: "2층 참좋은교회 강당",
      pastor: "oo목사님",
    },
    {
      type: "oo예배",
      time: "오전 00:00",
      location: "2층 참좋은교회 강당",
      pastor: "oo목사님",
    },
  ];

  return (
    <>
    {
        <AppBar />
    }
      <WrapBox>
        <BannerDiv>
          <BannerImg src={"../Banner.jpg"} alt="Banner" />
        </BannerDiv>
        <ContentsBoxDiv>
          <h1>참조은 Story</h1>
          <AlbumListDiv>
            <AlbumDiv>{}</AlbumDiv>
            <AlbumDiv></AlbumDiv>
            <AlbumDiv></AlbumDiv>
            <AlbumDiv></AlbumDiv>
          </AlbumListDiv>
        </ContentsBoxDiv>
        <ContentsBoxDiv>
          <h1>예배시간</h1>
          <TableListDiv>
            <TableContainer component={Paper}>
              <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell align="center">구분</TableCell>
                    <TableCell align="center">예배시간</TableCell>
                    <TableCell align="center">예배장소</TableCell>
                    <TableCell align="center">목사님</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {tableContents.map((row) => (
                    <TableRow
                      key={row.name}
                      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                    >
                      <TableCell align="center">{row.type}</TableCell>
                      <TableCell align="center">{row.time}</TableCell>
                      <TableCell align="center">{row.location}</TableCell>
                      <TableCell align="center">{row.pastor}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </TableListDiv>
        </ContentsBoxDiv>
      </WrapBox>
      <FooterDiv>
        <h1>footer 영역 입니다.</h1>
      </FooterDiv>
    </>
  );
}

const WrapBox = styled.div`
  width: 100%;
  margin-top:auto;
  //
`;

const ContentsBoxDiv = styled.div`
  padding: 20px;
  margin-bottom: 5%;
`;
const BannerDiv = styled.div`
  width: 100%;
`;
const BannerImg = styled.img`
  width: 100%;
`;
const AlbumListDiv = styled.div`
  display: flex;
  border: solid;
  margin: 10px;
  padding: 10px;
  height: 300px;
`;
const AlbumDiv = styled.div``;
const TableListDiv = styled.div``;

const FooterDiv = styled.div`
  display: flex;
  justify-content: center;
  background: gainsboro;
`;

export default Home;
