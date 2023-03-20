import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

import styled from "styled-components";

function TimeTable() {
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
  );
}

const TableListDiv = styled.div`
  margin: 5%;
`;
export default TimeTable;
