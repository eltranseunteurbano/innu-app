import React from "react";
import { Switch, Route, useRouteMatch } from "react-router-dom";
import AppNavBar from "../components/NavBar/AppNavBar";
import CollaboratorDashboard from "../containers/Dashboard/CollaboratorDashboard";
import { APP, QUIZ } from "../Routes/Routes";

const AppRoute = () => {
  const { path } = useRouteMatch();

  return (
    <>
      <AppNavBar />
      <Switch>
        {/* <Route exact path={`${path}/${QUIZ}`}> */}
        <Route exact path={`${path}${QUIZ}`}>
          <p>quiz</p>
        </Route>
        <Route path={APP} exact component={CollaboratorDashboard} />
      </Switch>
    </>
  );
};

export default AppRoute;
