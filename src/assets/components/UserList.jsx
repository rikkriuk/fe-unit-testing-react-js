import React, { useEffect, useState } from "react";

export default function UserList() {
   const [users, setUsers] = useState([]);

   useEffect(() => {
      fetch("https://jsonplaceholder.typicode.com/users")
         .then((response) => response.json())
         .then((data) => setUsers(data))
         .catch((error) => console.error(error));
   }, []);

   return (
      <ul>
         {users.map((user) => (
            <li key={user.id}>{user.name}</li>
         ))}
      </ul>
   )
}