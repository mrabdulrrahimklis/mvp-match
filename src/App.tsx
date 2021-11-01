import { Box, ThemeProvider } from "@mui/material";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { ROUTES } from "./core/const/routes";
import { theme } from "./core/const/theme";
import { HeaderComponent } from "./core/shared/Header.component";
import { SidebarComponent } from "./core/shared/Sidebar.component";
import { HomePage } from "./modules/home/pages/Home.page";

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Router>
          <HeaderComponent />
          <Box display="flex">
            <SidebarComponent />
            <Switch>
              <Route exact path={ROUTES.HOME} component={HomePage} />
            </Switch>
          </Box>
        </Router>
      </ThemeProvider>
    </div>
  );
}

export default App;
``;
