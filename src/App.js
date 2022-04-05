import React, { useState } from "react";
import AddUser from "./components/Users/AddUser";
import UsersList from "./components/Users/UsersList";

function App() {
  const [users, setUsers] = useState([]);
  const onAddUser = (user) => {
    setUsers((prevUsers) => [...prevUsers, user]);
  };

  return (
    <div>
      <AddUser onAddUser={onAddUser}></AddUser>
      <UsersList users={users}></UsersList>
    </div>
  );
}

export default App;
