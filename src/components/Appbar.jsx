import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const AppBarContent = {
  Info: "환영합니다",
  Time: "예배시간",
  Path: "찾아오시는길",
  label: "교회 생활",
};

const AppBar = () => {
  const navigate = useNavigate();
  return (
    <AppBarDiv>
      <LogoImg
        onClick={() => {
          navigate("/");
        }}
      >
        <img src={"../mainlogo.png"} alt="mainLogo" />
      </LogoImg>
      <MenuListDiv>
        <MenuTab
          onClick={() => {
            navigate("/welcome");
          }}
        >
          {" "}
          {AppBarContent.Info}{" "}
        </MenuTab>
        <MenuTab
          onClick={() => {
            navigate("/time");
          }}
        >
          {AppBarContent.Time}{" "}
        </MenuTab>
        <MenuTab
          onClick={() => {
            navigate("/directions");
          }}
        >
          {" "}
          {AppBarContent.Path}{" "}
        </MenuTab>
        <MenuTab
          onClick={() => {
            navigate("/churchLife");
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
  position: fixed;
  width: 100%;
  min-height: 100px;
  display: flex;
  -webkit-box-pack: justify;
  justify-content: space-between;
  font-size: calc(10px + 2vmin);
  color: black;
  border-bottom: 4mm ridge rgba(211, 220, 50, 0.6);
  background-color: white;
`;
const LogoImg = styled.div`
  display: flex;
  width: 20%;
  height: 100px;
  justify-content: flex;
  padding: 15px;
  cursor: pointer;
`;
const MenuListDiv = styled.div`
  display: flex;
  justify-content: flex-end;
  margin: 30px;
  margin-top: 40px;
`;
const MenuTab = styled.div`
  display: flex;
  font-size: 20px;
  padding: 10px;
  font-size: 18px;
  float: left;
  font-weight: bold;
  cursor: pointer;
`;

export default AppBar;
