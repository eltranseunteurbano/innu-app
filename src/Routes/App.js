import { ThemeProvider } from "@material-ui/core";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import customTheme from "../styles/theme";
import GlobalCss from "../styles/GlobalCss";
import "moment/locale/es";
import Validator from "validatorjs";
import Login from "../containers/Auth/Login";
import Home from "../containers/Home/Home";
import AppRoute from "./AppRoute";
import Error404 from "../containers/Error404/Error404";
import { LOGIN, APP, ERROR, HOME } from "./Routes";
import { AuthProvider } from "../context/AuthContext";

function App() {
  Validator.useLang("es");

  return (
    <AuthProvider>
      <ThemeProvider theme={customTheme}>
        <GlobalCss />
        <BrowserRouter>
          <Switch>
            <Route path={LOGIN} exact component={Login} />
            <Route path={ERROR} exact component={Error404} />
            <Route path={HOME} exact component={Home} />
            <Route path={APP} component={AppRoute} />
            <Redirect to={APP} />
          </Switch>
        </BrowserRouter>
      </ThemeProvider>
    </AuthProvider>
  );
}

export default App;
