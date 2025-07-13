import React from "react";
import styles from "./User.module.css";

function User({ user }) {
  return (
    <div className={styles.userCard}>
      <h1>{user.name}</h1>
      <p>{user.email}</p>
      <p>{user.phone}</p>
    </div>
  );
}

export default User;
