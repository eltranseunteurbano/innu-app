import { ThemeProvider } from "@material-ui/core";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import customTheme from "../styles/theme";
import GlobalCss from "../styles/GlobalCss";
import Header from "../components/Header/Header";
import Login from "../containers/Auth/Login";
import AppRoute from "./AppRoute";
import Error404 from "../containers/Error404/Error404";
import { LOGIN, APP, ERROR } from "./Routes";

function App() {
  return (
    <ThemeProvider theme={customTheme}>
      <GlobalCss />
      <Router>
        {/* <Header /> */}
        <Switch>
          <Route path={LOGIN} exact component={Login} />
          <Route path={ERROR} exact component={Error404} />
        </Switch>
        <Switch>
          <Route path={APP} exact component={AppRoute} />
        </Switch>
      </Router>
    </ThemeProvider>
  );
}

export default App;
