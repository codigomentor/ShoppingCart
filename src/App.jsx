import React, { useState } from "react";
import { MainContainer } from "./components/MainContainer";
import { Navbar } from "./components/NavBar";
import { UserProvider } from "./contexts/UserProvider";

export const App = () => {
  return (
    <UserProvider>
      <Navbar />
      <MainContainer />
    </UserProvider>
  );
};
