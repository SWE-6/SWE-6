/**Pedro Gutierrez Rincon
* 03-03-2022
*
* React components to build the table of patients for the admin page.
*/

/**Pedro Gutierrez Rincon
* 03-03-2022
*
* React components to build the table of patients for the admin page.
*/

import React, { useEffect, useState } from "react";
import apis from "../../api";
import ExamsRow from "./ExamsRow"

import MaUTable from "@material-ui/core/Table";
import { Table, TableBody, TableCell, TableHead, Paper, TableContainer } from "@material-ui/core";

import styled from "styled-components";

function ExamsTable()
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
          <TableHead>
            <TableCell>Patient ID</TableCell>
            <TableCell>Exam ID</TableCell>
            <TableCell>Image</TableCell>
            <TableCell>Key Findings</TableCell>
            <TableCell>Age</TableCell>
            <TableCell>Sex</TableCell>
            <TableCell>BMI</TableCell>
            <TableCell>Zip Code</TableCell>
            <TableCell></TableCell>
            <TableCell></TableCell>
          </TableHead>
          <TableBody>
            {  rowsData && rowsData.map( (row) => (<ExamsRow row={row} reRender={reRender}/>) )  }
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}

export default ExamsTable;
