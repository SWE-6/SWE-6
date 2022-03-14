/**Pedro Gutierrez Rincon
* 03-03-2022
*
* React components to build the rows for the Admin Table
*/

import React, { useEffect, useState } from "react";
import apis from "../../api";

import MaUTable from "@material-ui/core/Table";
import { TableCell, TableRow, } from "@material-ui/core";
import {DeleteButton, UpdateButton} from "../buttons";
import { Link } from 'react-router-dom';
//import {UpdateButton} from "../buttons/UpdateButton";

/**@param props porperties passed for the react element
* @desc renders the row for the AdminTable
*/
function ExamsRow(props)
{
 

  return (
    <TableRow key={props.row.id}>
      <TableCell component="th" scope="row"><Link to={`/patients/${props.row.id}`}>{props.row.id}</Link></TableCell>
      <TableCell><Link to={`/patient/${props.row.id}`}>{props.row.examId}</Link></TableCell>
      <TableCell><img src ={`https://ohif-hack-diversity-covid.s3.amazonaws.com/covid-png/${props.row.pngFilename}`} width="50" height="50"/></TableCell>
      <TableCell>{props.row.keyFindings}</TableCell>
      <TableCell>{props.row.age}</TableCell>
      <TableCell>{props.row.sex}</TableCell>
      <TableCell>{props.row.bmi}</TableCell>
      <TableCell>{props.row.zip}</TableCell>
    </TableRow>
  );
}



export default ExamsRow;