import React, { useEffect, useState } from "react";
import apis from "../../api";
import AdminRow from "./AdminRow.js"

import MaUTable from "@material-ui/core/Table";
import { Table, TableBody, TableCell, TableHead, Paper, TableContainer } from "@material-ui/core";

import styled from "styled-components";

function AdminTable()
{
  //constructing state skeleton
  const [rowsData, setRowsData] = useState([]);
  const [reload, setReload] = useState(false);

  /**@desc prepares state and data to render
  */
  useEffect(() =>
  {
    fetchAllPatients();
    setReload(false);
  });

  const reRender = () =>
  {
    setReload(!reload);
  }

  /**@desc calls and resolves api request to get general patients info
  */
  const fetchAllPatients = () =>
  {
    const lambResolve = (res) => {
      setRowsData(res.data);
      return res.data;
    };
    const lambErrorHandler = (e) => console.error(e);
    apis.getGeneralInfo().then(lambResolve).catch(lambErrorHandler);
  }

  return (
    <>
      <TableContainer component={Paper}>
        <Table>
          <TableHead style={{fontWeight: "bold"}}>
            <TableCell style={{fontWeight: "bold"}}>Patient ID</TableCell>
            <TableCell style={{fontWeight: "bold"}}>Exam ID</TableCell>
            <TableCell style={{fontWeight: "bold"}}>Key Findings</TableCell>
            <TableCell style={{fontWeight: "bold"}}>Age</TableCell>
            <TableCell style={{fontWeight: "bold"}}>Sex</TableCell>
            <TableCell style={{fontWeight: "bold"}}>BMI</TableCell>
            <TableCell style={{fontWeight: "bold"}}>Zip Code</TableCell>
            <TableCell></TableCell>
            <TableCell></TableCell>
          </TableHead>
          <TableBody>
            {  rowsData && rowsData.map( (row) => (<AdminRow row={row} reRender={reRender}/>) )  }
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}

export default AdminTable;