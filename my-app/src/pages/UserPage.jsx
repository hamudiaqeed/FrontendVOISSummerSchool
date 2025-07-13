import React from "react";
import { useState, useEffect } from "react";
import UserList from "../components/UserList";

function UserPage() {
  const [users, setUsers] = useState([]);
  const [searchField, setSearchField] = useState("");
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  // isLoading la inceput e true, pana cand request-ul e completed

  const getUsers = async () => {
    // Folosind async await + try catch, 
    // trimitem o cerere GET la api-ul jsonplaceholder
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );
      const data = await response.json();
      // Asteptam raspunsul si il convertim in json
      setUsers(data);
      setFilteredUsers(data);
    } catch (error) {
      console.error("Error fetching users:", error);
    } finally {
      setIsLoading(false);
      // indiferent daca request-ul a fost successful sau null,
      // vom seta isLoading pe false dupa ce codul din try sau catch
      // a rulat
    }
  };

  // folosim useEffect pentru a apela 
  // funcția getUsers doar la montarea componentelor
  useEffect(() => {
    getUsers();
  }, []); // de aceea avem array de dependinte gol

  useEffect(() => {
    setFilteredUsers(
      users.filter((user) =>
        user.name.toLowerCase().includes(searchField.toLowerCase())
      )
    );
    // afisam users pe baza inputului utilizatorului
  }, [searchField, users]);
  // codul din acest useEffect va rula de fiecare data cand 
  // searchField sau users este modificat
  // (ex: atunci cand userul tasteaza)

  // functia care gestioneaza schimbarile in campul de search
  const onSearchChange = (event) => {
    setSearchField(event.target.value);
    // cu event.target.value ne luam textul din search field
  };

  return (
    <>
      <input
        type="text"
        placeholder="Search users..."
        value={searchField}
        onChange={onSearchChange}
        // cand se schimba valoarea, onSearchChange este apelata
      />
      {isLoading ? <p>Loading...</p> : <UserList users={filteredUsers} />}
    </>
  );
}

export default UserPage;
