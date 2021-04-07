import React from "react";
import { Switch, Route } from "react-router-dom";
import AppNavBar from "../components/NavBar/AppNavBar";
import Quiz from "../containers/Quiz/Quiz";
import { APP, QUIZ } from "./Routes";
const AppRoute = () => {
  return (
    <>
      <AppNavBar />
      <Switch>
        <Route path={`${APP}/${QUIZ}`} exact component={Quiz} />
      </Switch>
    </>
  );
};

export default AppRoute;
