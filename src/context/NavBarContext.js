import React, { useState } from "react";
import AppNavBar from "../components/NavBar/AppNavBar";

export const NavBarContext = React.createContext({title: '', onHandleChangeTite: (title) => {}});

export const NavBarProvider = ({ children }) => {
  const [title, setTitle] = useState('Dashboard');

  const onHandleChangeTite = (newTitle) => {
    setTitle(newTitle)
  }

  return(
    <NavBarContext.Provider value={{title, onHandleChangeTite}}>
      <AppNavBar />
      {children}
    </NavBarContext.Provider>
  )
}