
   
import React, { useEffect, useState } from "react";
import apis from "../../api";
import Details from "./Details";

import MaUTable from "@material-ui/core/Table";
import { Table, TableBody, TableCell, TableHead, Paper, TableContainer } from "@material-ui/core";

import styled from "styled-components";

function ExamDetail()
{
  //constructing state skeleton
  const [patients, setRowsData] = useState([]);
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
  const fetchAllPatients =  (id) =>
  {
    const lambResolve = (res) => {
      setRowsData(res.data);
      return res.data;
    };
    const lambErrorHandler = (e) => console.error(e);
    apis.getExamByID(patients).then(lambResolve).catch(lambErrorHandler);
  }

  return (
    <>
             {  patients && patients.map( (row) => (<Details row={row} reRender={reRender}/>) )  }
          
    </>
  );
}

export default ExamDetail;
