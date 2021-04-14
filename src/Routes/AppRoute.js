import React from "react";
import AppNavBar from "../components/NavBar/AppNavBar";
import CollaboratorDashboard from "../containers/Dashboard/CollaboratorDashboard";

const AppRoute = () => {
  return (
    <>
      <AppNavBar />
      <CollaboratorDashboard />
    </>
  );
};

export default AppRoute;
