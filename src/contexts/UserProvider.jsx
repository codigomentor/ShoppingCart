import React, { createContext, useState } from "react";

export const UserContext = createContext(null);

export const UserProvider = ({ children }) => {
  const [nombre, setNombre] = useState("Mario");

  return (
    <UserContext.Provider value={[nombre, setNombre]}>
      {children}
    </UserContext.Provider>
  );
};
