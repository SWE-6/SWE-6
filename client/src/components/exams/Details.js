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
* @desc renders the examDetails
*/
function Details(props)
{
 

  return (

      <p>{props.row.age}</p>


  );
}



export default Details;
