import React from "react";
import User from "./User";
import styles from "./UserList.module.css";

function UserList({ users }) {
  return (
    <ul className={styles.userList}>
      {/* Iterează prin lista de utilizatori 
      și afișează un item pentru fiecare */}
      {users.map((user) => (
        <li key={user.id}>
          {/* Cheia este setată pe id-ul utilizatorului pentru a ajuta React să identifice elementele unice */}
          <User user={user} />
        </li>
      ))}
    </ul>
  );
}

export default UserList;
