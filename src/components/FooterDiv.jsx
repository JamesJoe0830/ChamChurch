import styled from "styled-components";

const footer = {
  id: 1,
  imgPath: "https://aiderbucket.s3.ap-northeast-2.amazonaws.com/Footerlogo.png",
};

function Footer() {
  return (
    <>
      <FooterDiv>
        <FooterContainer>
          <FooterLogoDiv>
            <FooterImg src={footer.imgPath} alt="FooterLogo" />
          </FooterLogoDiv>
          <FooterContent>
            <Address>
              (16497) 경기도 수원시 팔달구 중부대로223번길 20-7 (우만동)
              참조은교회
            </Address>
            {/* <Info> */}
            <Tel>Tel. 070-5033-9006</Tel>
            <Provided>Provide by Aider</Provided>
            {/* </Info> */}
          </FooterContent>
        </FooterContainer>
      </FooterDiv>
    </>
  );
}

const FooterDiv = styled.div`
  display: flex;
  justify-content: center;
  background: #3c4554;
  font-weight: bolder;
  padding-top: 20px;
  padding-bottom: 20px;
  text-align: center;
  font-family: SpoqaHanSans;
  font-size: 18px;
  font-weight: 600;
  letter-spacing: 0px;
  line-height: 1.6;
  color: #ffffff;
  text-align: left;
  padding: 0px;
  margin: 0px;
  margin-top: 10px;
  position: absolute;
  width: 100%;
  @media screen and (max-width: 480px) { // 모바일 장치에 대한 스타일 조정
    font-size: 12px;
    padding-top: 10px;
  }
`;

const FooterImg = styled.img`
  display: flex;
  width: 105%;
  @media screen and (max-width: 480px) { // 모바일 장치에 대한 스타일 조정
    width: 100px;
  }
`;
const FooterLogoDiv = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;
  width: 15%;
  padding-left: 42%;
`;

const FooterContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  overflow: hidden;
  margin: 2%;
`;

const FooterContent = styled.div`
  text-align: center;
  place-self:center;
  width: 100%;
`;
const Address = styled.div`
  width: 100%;
  padding-top: 20px;
  @media screen and (max-width: 480px) { // 모바일 장치에 대한 스타일 조정
    font-size: 11.5px;

  }
`;
const Tel = styled.div`
  width: 100%;
`;
const Provided = styled.div`
  padding-top: 10px;
  width: 100%;
`;
export default Footer;
