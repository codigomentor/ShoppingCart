import React, { useContext } from "react";
import { UserContext } from "../contexts/UserProvider";

export const Navbar = () => {
  const [nombre, setNombre] = useContext(UserContext);

  return (
    <nav>
      <h2>Logo</h2>
      <ul className="nav-list">
        <li>Hola {nombre}</li>
      </ul>
    </nav>
  );
};
