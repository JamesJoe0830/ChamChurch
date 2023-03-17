import styled from "styled-components";


const SubTitle = {
    first: '담임목사님 소개',
    second: '참조은교회의 사명',
    third: '슬로건'
  };

const SubList = () => {
  return (
    <>
      <SubListDiv>
        <SubMenu>{SubTitle.first}</SubMenu>
        <SubMenu>{SubTitle.second}</SubMenu>
        <SubMenu>{SubTitle.third}</SubMenu>
      </SubListDiv>
    </>
  );
};

  const SubListDiv =styled.div`
  display:flex;
  justify-content:flex-end;
  width:100%;
  height:100%;
`;
const SubMenu =styled.div`
  font-size: cal(100%-10px);
  font-weight:bolder;
  /* margin:10px; */
  color: #3c4554;
margin-right: 20px;
  
`;


  export default SubList;