/**
 * Sierra Obi
 * 2022-03-13
 * 
 * Patient row is a component that contains information
 * regarding a single exam that was performed on a patient 
 * (exam ID, image, key findings, and brixia score)
 */

 import React from "react";
 import { TableCell, TableRow, } from "@material-ui/core";

 function PatientRow(props)
 {
    // <TableRow key={props.row.id}>
    //   <TableCell> {props.row.id}</TableCell>
    //   <TableCell>{props.row.examId}</TableCell>
    //   <TableCell><img src ={`https://ohif-hack-diversity-covid.s3.amazonaws.com/covid-png/${props.row.pngFilename}`} width="50" height="50"/></TableCell>
    //   <TableCell>{props.row.keyFindings}</TableCell>
    // </TableRow>
 }
 export default PatientRow;