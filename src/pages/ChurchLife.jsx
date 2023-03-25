import styled from "styled-components";
import AppBar from "../components/Appbar";
import WrapBox from "../styled_components/wrapBox";
import Footer from "../styled_components/FooterDiv";
import TitleDiv from "../styled_components/TitleDiv";
import LineDiv from "../styled_components/LineDiv";


// const Box = () => {
//   return (
//     <>
//       {[1,2,3].map(function () {
//         return (
//           <ContentBox>
//             <BlogDiv><BlogImg src={'Banner.png'}/></BlogDiv>
//             <BlogDiv></BlogDiv>
//             <BlogDiv></BlogDiv>
//           </ContentBox>
//         );
//       })}
//     </>
//   );
// };

const ChurchLife = () => {
  return (
    <>
      <AppBar />
      <WrapBox>
        <TitleDiv>
          <h1>교회 생활</h1>
        </TitleDiv>
        <LineDiv />
        {/* <Box /> */}
        <ContentBox>
          <BlogDiv>
            <BlogImg src={"Banner.png"} />
          </BlogDiv>
          <BlogDiv></BlogDiv>
          <BlogDiv></BlogDiv>
        </ContentBox>
        <ContentBox>
          <BlogDiv></BlogDiv>
          <BlogDiv></BlogDiv>
          <BlogDiv></BlogDiv>
        </ContentBox>
        <ContentBox>
          <BlogDiv></BlogDiv>
          <BlogDiv></BlogDiv>
          <BlogDiv></BlogDiv>
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
