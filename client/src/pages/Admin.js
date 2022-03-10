/**Pedro Gutierrez Rincon
* 03-04-2022
*
* React components to build the table of patients for the admin page.
*/

import React, { Component } from "react";
import AdminTable from "../components/admin/AdminTable.js";

class Admin extends Component
{
  render()
  {
    return (
      <AdminTable/>
    );
  }
}

export default Admin;
