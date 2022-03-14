import React, { Component } from "react";
import ExamsTable from "../components/exams/ExamsTable.js";
import { Exams } from "./index.js";

class Exam extends Component
{
  render()
  {
    return (
      <>
        <h1>Create Button Here</h1>
        <ExamsTable/>
      </>
    );
  }
}

export default Exam;