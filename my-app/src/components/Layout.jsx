import React from "react";
import { Link } from "react-router-dom";
import syles from "./Layout.module.css";

function Layout({ children }) {
  return (
    <div>
      <header className={syles.header}>
        <Link to="/">Home</Link>
        <Link to="/counter">Counter</Link>
        <Link to="/users">Users</Link>
        <Link to="/cards">Cards</Link>
      </header>
      {/* Conținutul specific al paginii este injectat aici prin props.children */}
      {/* Vezi App.jsx */}
      <main className={syles.main}>{children}</main>
      <footer className={syles.footer}>
        <p>&copy; 2025 My Application</p>
      </footer>
    </div>
  );
}

export default Layout;
