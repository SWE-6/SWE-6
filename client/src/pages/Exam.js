import React, { Component } from "react";
import ExamsTable from "../components/exams/ExamsTable.js";
import { Exams } from "./index.js";

class Exam extends Component
{
  render()
  {
    return (
      <>
        <ExamsTable/>
      </>
    );
  }
}

export default Exam;
