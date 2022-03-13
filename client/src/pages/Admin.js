/**Pedro Gutierrez Rincon
* 03-04-2022
*
* React components to build the table of patients for the admin page.
*/

import React, { Component } from "react";
import AdminTable from "../components/admin/AdminTable.js";
import CreateButton from "../components/buttons/CreateButton";

class Admin extends Component
{
  render()
  {
    return (
      <>
        <CreateButton id="CreateButton"/>
        <AdminTable/>
      </>
    );
  }
}

export default Admin;
