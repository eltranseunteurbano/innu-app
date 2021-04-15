import { ThemeProvider } from "@material-ui/core";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import customTheme from "../styles/theme";
import GlobalCss from "../styles/GlobalCss";
import "moment/locale/es";
import Validator from "validatorjs";
import Header from "../components/Header/Header";
import Login from "../containers/Auth/Login";
import AppRoute from "./AppRoute";
import Error404 from "../containers/Error404/Error404";
import { LOGIN, APP, ERROR, HOME } from "./Routes";

function App() {
  Validator.useLang("es");

  return (
    <ThemeProvider theme={customTheme}>
      <GlobalCss />
      <Router>
        <Switch>
          <Route path={LOGIN} exact component={Login} />
          <Route path={ERROR} exact component={Error404} />
          <Route path={HOME} exact>
            <>
              <Header />
              <p>Landing page</p>
            </>
          </Route>
        </Switch>
        <Switch>
          <Route path={APP} component={AppRoute} />
        </Switch>
      </Router>
    </ThemeProvider>
  );
}

export default App;
