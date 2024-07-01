import React, { useEffect, useState } from "react";
import { allUsers } from "../actions/action";

function Usertable() {
  const [data,setData]= useState([])


  const fetchUsers = async () => {
    const response = await allUsers();


    console.log(response.data);
    setData(response.data)

  };

  useEffect(() => {
    fetchUsers();
  }, []);
  return (
    <div className="table-container">
      <table border="1px">
        <thead>
          <tr>
            <th>ID</th>
            <th>User Name</th>
            <th>Email</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item,index) => (
            <tr key={index}>
              <td>{index+1}</td>
              <td>{item.username}</td>
              <td>{item.emlorphnno}</td>
              <td>{item.active? 'active':'inactive'}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Usertable;
