import React from "react";
import { useTheme } from "@material-ui/core";
import { Switch, Route, useRouteMatch, Redirect } from "react-router-dom";
import CollaboratorDashboard from "../containers/Dashboard/CollaboratorDashboard";
import DashboardDetails from "../containers/Dashboard/DashboardDetails";
import QuizContainer from '../containers/Quiz/Quiz';
import { APP, APP_DETAILS, QUIZ, HOME } from "../Routes/Routes";
import { NavBarProvider } from "../context/NavBarContext";
import { Backdrop, CircularProgress } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import useAuth from "../hooks/useAuth";

const AppRoute = () => {
  const { path } = useRouteMatch();
  const theme = useTheme();
  const classes = useStyles();

  const { loadingAuthState, authenticated } = useAuth();

  if(loadingAuthState) return <Backdrop className={classes.backdrop}  open={loadingAuthState}>
  <CircularProgress color="inherit" />
</Backdrop>;

  // no auth
  if(!authenticated) {
    return <Redirect to={HOME} />;
  }

  return (
    <NavBarProvider>
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
    </NavBarProvider>
  );
};

const useStyles = makeStyles((theme) => ({
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: '#fff',
  },
}));

export default AppRoute;
