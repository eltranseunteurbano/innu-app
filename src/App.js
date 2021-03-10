import { ThemeProvider } from "@material-ui/core";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import customTheme from "./styles/theme";
import GlobalCss from "./styles/GlobalCss";
import Prueba from "./containers/Prueba/Prueba";
import Error404 from "./containers/Error404/Error404";

function App() {
  return (
    <ThemeProvider theme={customTheme}>
      <GlobalCss />
      <Router>
        <Switch>
          <Route path="/" exact component={Prueba} />
          <Route component={Error404} />
        </Switch>
      </Router>
    </ThemeProvider>
  );
}

export default App;
