/**Pedro Gutierrez Rincon
* 03-03-2022
*
* React components to build the rows for the Admin Table
*/

import React, { useEffect, useState } from "react";
import apis from "../../api";

import MaUTable from "@material-ui/core/Table";
import { TableCell, TableRow, } from "@material-ui/core";
import DeleteButton from "../buttons/DeleteButton"

import styled from "styled-components";

/**@param props porperties passed for the react element
* @desc renders the row for the AdminTable
*/
function AdminRow(props)
{
  const onDelete = (id) =>
  {
    const lambResolve = (res) => {
      for (let i = 0; i < res.data.length; ++i)
      {
        apis.deleteExam(res.data[i]._id);
      }
      apis.deletePatient(id);
    }
    const lambHandleError = (e) => console.error(e);
    apis.getExamsOfPatient(id).then(lambResolve).catch(lambHandleError);
    props.reRender();
  }

  return (
    <TableRow key={props.row.id}>
      <TableCell component="th" scope="row">{props.row.id}</TableCell>
      <TableCell>{props.row.examId}</TableCell>
      <TableCell>{props.row.keyFindings}</TableCell>
      <TableCell>{props.row.age}</TableCell>
      <TableCell>{props.row.sex}</TableCell>
      <TableCell>{props.row.bmi}</TableCell>
      <TableCell>{props.row.zip}</TableCell>
      <TableCell>Update Button here</TableCell>
      <TableCell><DeleteButton id={props.row.id} onDelete={onDelete}/></TableCell>
    </TableRow>
  );
}



export default AdminRow;
