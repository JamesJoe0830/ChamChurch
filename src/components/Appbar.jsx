import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

const appBarContent = {
  Info: "환영합니다",
  Time: "예배시간",
  Path: "찾아오시는길",
  label: "교회 생활",
};
const MoveToTop = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
}; // 상단으로 이동 (beahvior : auto, smooth)

const AppBar = () => {
  const navigate = useNavigate();

  const [mainLogoURL, setMainLogoURL] = useState();
  const getMainLogo = async () => {
    const APIURL = "http://3.35.22.166:3100/charmjoeun/logo";
    axios
      .get(APIURL)
      .then(function (response) {
        const logoURL = response.data?.logo_img;
        setMainLogoURL(logoURL);
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  useEffect(() => {
    getMainLogo();
  }, []);

  return (
    <AppBarDiv>
      {mainLogoURL !== undefined && mainLogoURL !== null && (
        <>
          <LogoImgDiv
            onClick={() => {
              navigate("/");
              MoveToTop();
            }}
          >
            <LogoImg src={mainLogoURL} alt="mainLogo" />
          </LogoImgDiv>
          <MenuListDiv>
            <MenuTab
              onClick={() => {
                navigate("/welcome");
                MoveToTop();
              }}
            >
              {" "}
              {appBarContent.Info}{" "}
            </MenuTab>
            <MenuTab
              onClick={() => {
                navigate("/time");
                MoveToTop();
              }}
            >
              {appBarContent.Time}{" "}
            </MenuTab>
            <MenuTab
              onClick={() => {
                navigate("/directions");
                MoveToTop();
              }}
            >
              {" "}
              {appBarContent.Path}{" "}
            </MenuTab>
            <MenuTab
              onClick={() => {
                navigate("/churchLife");
                MoveToTop();
              }}
            >
              {" "}
              {appBarContent.label}{" "}
            </MenuTab>
          </MenuListDiv>
        </>
      )}
    </AppBarDiv>
  );
};

const AppBarDiv = styled.div`
  display: flex;
  position: fixed;
  top: 0;
  z-index: 10;
  width: calc(100% - 30px);
  padding-right: 15px;
  padding-left: 15px;
  max-height: 95px;
  justify-content: space-between;
  font-size: calc(10px + 2vmin);
  color: black;
  border-bottom: 1.5mm ridge rgba(211, 220, 50, 0.6);
  background-color: white;
  @media screen and (max-width: 480px) {
   height: 80px;
  }
`;

const LogoImgDiv = styled.div`
  display: flex;
  align-items: center;
  padding: 10px;
  @media screen and (max-width: 480px) {
    padding: 0px;
  }
  
`;
const LogoImg = styled.img`
  width: 150px;
  height: 60px;
  @media screen and (max-width: 480px) {
    width: 100px;
    height: 40px;
  }
`;

const MenuListDiv = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin: 30px;
  margin-top: 40px;
  font-size: 20px;

  @media screen and (max-width: 480px) {
    font-size: 10px;
  }

  /* 가로로 배치 */
  flex-direction: row;
`;

const MenuTab = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  font-weight: bold;
  cursor: pointer;
  text-align: center; // 추가된 부분
  @media screen and (max-width: 480px) {
    width: 52px;
    padding: 0px;
  }

`;

export default AppBar;
