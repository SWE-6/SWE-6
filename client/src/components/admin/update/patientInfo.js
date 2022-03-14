/**
* Pedro Gutierrez Rincon
* 2022-03-13
*
* React element to update patient's info
*/

import React, { useEffect, useState } from "react";
import apis from "../../../api";

import styled from "styled-components";

function PatientInfo(props)
{
  const data = useState(props.data);

  const getData = () =>
  {
    console.log(data);
  }

  return (<button onClick={getData}>patient's info</button>);
}

export default PatientInfo;
