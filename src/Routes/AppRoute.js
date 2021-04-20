import React from "react";
import { useTheme } from "@material-ui/core";
import { Switch, Route, useRouteMatch } from "react-router-dom";
import AppNavBar from "../components/NavBar/AppNavBar";
import CollaboratorDashboard from "../containers/Dashboard/CollaboratorDashboard";
import DashboardDetails from "../containers/Dashboard/DashboardDetails";
import QuizContainer from '../containers/Quiz/Quiz';
import { APP, APP_DETAILS, QUIZ } from "../Routes/Routes";

const AppRoute = () => {
  const { path } = useRouteMatch();
  const theme = useTheme();
  return (
    <>
      <AppNavBar />
      <main style={{ backgroundColor: theme.palette.clearGrey.main }}>
        <Switch>
          <Route path={`${path}${QUIZ}`} exact component={QuizContainer} />
          <Route path={APP} exact component={CollaboratorDashboard} />
          <Route
            path={`${APP}${APP_DETAILS}`}
            exact
            component={DashboardDetails}
          />
        </Switch>
      </main>
    </>
  );
};

export default AppRoute;
