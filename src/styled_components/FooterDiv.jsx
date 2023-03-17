import styled from "styled-components";

function Footer() {
  return (
    <>
      <FooterDiv>
        <FooterContainer>
          <FooterLogoDiv>
            <FooterImg src={"../Footerlogo.png"} alt="FooterLogo" />
          </FooterLogoDiv>
          <FooterContent>
            <Address>경기도 수원시 팔달구 중부대로223번길 20-7</Address>
            <Tel>Tel. 070-5033-9006</Tel>
            <Fax>ddd</Fax>
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
  font-size: 16px;
  font-weight: 600;
  letter-spacing: 0px;
  line-height: 1.6;
  color: #ffffff;
  text-align: left;
  padding: 0px;
  margin: 0px;
  margin-top: 50px;

position: absolute;
width:100%
`;

const FooterImg = styled.img`
  display: flex;
  width: 100%;
`;
const FooterLogoDiv = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;
  width: 15%;
  padding-left:42%;
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
  width: 100%;
`;
const Address = styled.div`
  width: 100%;
`;
const Tel = styled.div`
  width: 100%;
`;
const Fax = styled.div`
  width: 100%;
`;
export default Footer;
