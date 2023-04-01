import { useState, useEffect } from "react";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

import styled from "styled-components";

const worShipTable = [
  {
    type: "주일예배",
    time: "오전 11:00",
    location: "3층 참좋은교회 강당",
    manager: "임철민 목사님",
  },
  {
    type: "새벽큐티 (화~금)",
    time: "오전 05:30",
    location: "3층 참좋은교회 강당",
    manager: "임철민 목사님",
  },
  {
    type: "수요성경공부",
    time: "오후 03:00",
    location: "3층 참좋은교회 강당",
    manager: "임철민 목사님",
  },
  {
    type: "금요기도회",
    time: "오후 07:00",
    location: "3층 참좋은교회 강당",
    manager: "임철민 목사님",
  },
  {
    type: "참조은패밀리센터",
    time: "예약후 상담",
    location: "3층 참좋은교회 강당",
    manager: "임철민 목사님",
  },
];

function TimeTable() {
  const [timeTable, setTimeTable] = useState([]);

  const getTimeTable = (async) => {
    //TODO: getworShipTable api needed
    setTimeTable([...worShipTable]);
  };

  useEffect(() => {
    getTimeTable();
  }, []);

  return (
    <TableListDiv>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="center">
                  <TableTitleText>
                    {'구분'}
                  </TableTitleText>
                </TableCell>
              <TableCell align="center">
                  <TableTitleText>
                    {'시간'}
                  </TableTitleText>
                </TableCell>
              <TableCell align="center">
                  <TableTitleText>
                    {'장소'}
                  </TableTitleText>
                </TableCell>
              <TableCell align="center">
                  <TableTitleText>
                    {'담당자'}
                  </TableTitleText>
                </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {timeTable.map((row) => (
              <TableRow
                key={row.type}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell align="center">
                    <TableText>
                    {row.type}
                    </TableText>
                  </TableCell>
                <TableCell align="center">
                    <TableText>
                    {row.time}
                    </TableText></TableCell>
                <TableCell align="center">
                    <TableText>
                    {row.location}
                    </TableText></TableCell>
                <TableCell align="center">
                    <TableText>
                    {row.manager}
                    </TableText></TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </TableListDiv>
  );
}

const TableListDiv = styled.div`
  margin: 5%;
`;
const TableTitleText = styled.div`
  font-size: 20px;
  font-weight: 700;
`;
const TableText = styled.div`
  font-size: 18px;
  font-weight: 500;
`;

export default TimeTable;
