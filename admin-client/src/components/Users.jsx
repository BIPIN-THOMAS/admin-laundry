import { useEffect } from "react";
import { allUsers } from "../actions/action";
import Sidebar from "./Sidebar";
import Usertable from "./Usertable";

function Users() {

 

  return (

    <div className="container">
      <Sidebar />

      <div className="right_body">
        <h2>Users List</h2>
        

        <Usertable />
      </div>
    </div>
  );
}

export default Users;
