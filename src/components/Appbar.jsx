import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const AppBarContent = {
  Info: "환영합니다",
  Time: "예배시간",
  Path: "찾아오시는길",
  label: "교회 생활",
};
const MoveToTop = () => {
  window.scrollTo({top:0, behavior:'smooth'});
}; // 상단으로 이동 (beahvior : auto, smooth)


const AppBar = () => {
  const navigate = useNavigate();
  return (
    <AppBarDiv>
      <LogoImgDiv
        onClick={() => {
          navigate("/");
          MoveToTop();
        }}
      >
        <LogoImg src={"../mainlogo.png"} alt="mainLogo" />
      </LogoImgDiv>
      <MenuListDiv>
        <MenuTab
          onClick={() => {
            navigate("/welcome");
            MoveToTop();
          }}
        >
          {" "}
          {AppBarContent.Info}{" "}
        </MenuTab>
        <MenuTab
          onClick={() => {
            navigate("/time");
            MoveToTop();
          }}
        >
          {AppBarContent.Time}{" "}
        </MenuTab>
        <MenuTab
          onClick={() => {
            navigate("/directions");
            MoveToTop();
          }}
        >
          {" "}
          {AppBarContent.Path}{" "}
        </MenuTab>
        <MenuTab
          onClick={() => {
            navigate("/churchLife");
            MoveToTop();
          }}
        >
          {" "}
          {AppBarContent.label}{" "}
        </MenuTab>
      </MenuListDiv>
    </AppBarDiv>
  );
};

const AppBarDiv = styled.div`
  display: flex;
  position: fixed;
  top: 0;
  z-index: 10;
  width: 100%;
  max-height:95px;
  -webkit-box-pack: justify;
  justify-content: space-between;
  font-size: calc(10px + 2vmin);
  color: black;
  border-bottom: 4mm ridge rgba(211, 220, 50, 0.6);
  background-color: white;
`;

const LogoImgDiv = styled.div`
  display: flex;
  min-width: 40%;
  height: inherit;
  justify-content: flex;
`;
const LogoImg = styled.img`
  width: fit-content;
  height: inherit;
  float: left;
  cursor: pointer;
  padding: 10px;
`;

const MenuListDiv = styled.div`
  display: flex;
  justify-content: flex-end;
  width:100%;
  height:100%;
  margin: 30px;
  margin-top: 40px;
`;
const MenuTab = styled.div`
  display: flex;
  padding: 10px;
  font-size: 1.5vw;
  /* float: left; */
  font-weight: bold;
  cursor: pointer;
`;

export default AppBar;
