import React from "react";
import { useTheme } from "@material-ui/core";
import { Switch, Route, useRouteMatch } from "react-router-dom";
import CollaboratorDashboard from "../containers/Dashboard/CollaboratorDashboard";
import DashboardDetails from "../containers/Dashboard/DashboardDetails";
import QuizContainer from '../containers/Quiz/Quiz';
import { APP, APP_DETAILS, APP_TEAMS, QUIZ, APP_TEAMS_COMPARAR, MEASURES } from "../Routes/Routes";
import { NavBarProvider } from "../context/NavBarContext";
// import { Backdrop, CircularProgress } from '@material-ui/core';
// import { makeStyles } from '@material-ui/core/styles';
import useAuth from "../hooks/useAuth";
import DashboardTeam from "../containers/Dashboard/DashboardTeam";
import CompararTeams from "../containers/Dashboard/CompararTeams";
import Measures from "../containers/Measures/Measures";

const AppRoute = () => {
  const { path } = useRouteMatch();
  const theme = useTheme();
  // const classes = useStyles();

  const { loadingAuthState, authenticated } = useAuth();
  console.log({loadingAuthState, authenticated})
  // if(loadingAuthState) return <Backdrop className={classes.backdrop}  open={loadingAuthState}>
  //   <CircularProgress color="inherit" />
  // </Backdrop>;

  // no auth
  // if(!authenticated && !loadingAuthState) {
  //   return <Redirect to={LOGIN} />;
  // }

  return (
    <NavBarProvider>
      <main style={{ backgroundColor: theme.palette.clearGrey.main }}>
        <Switch>
          <Route path={APP} exact component={CollaboratorDashboard} />
          <Route
            path={`${APP}${APP_DETAILS}`}
            exact
            component={DashboardDetails}
          />
          <Route path={`${path}${APP_TEAMS}`} exact component={DashboardTeam} />
          <Route path={`${path}${APP_TEAMS_COMPARAR}`} exact component={CompararTeams} />
          <Route path={`${path}${QUIZ}`} exact component={QuizContainer} />
          <Route path={`${path}${MEASURES}`} exact component={Measures} />
        </Switch>
      </main>
    </NavBarProvider>
  );
};

// const useStyles = makeStyles((theme) => ({
//   backdrop: {
//     zIndex: theme.zIndex.drawer + 1,
//     color: '#fff',
//   },
// }));

export default AppRoute;
