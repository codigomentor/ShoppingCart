import React, { useContext } from "react";
import { UserContext } from "../contexts/UserProvider";

export const MainContainer = () => {
  const [nombre, setNombre] = useContext(UserContext);

  const handleClick = () => {
    setNombre("Henry");
  };

  return (
    <div className="container">
      <div> {nombre}</div>
      <button onClick={handleClick}>Cambiar nombre</button>
    </div>
  );
};
