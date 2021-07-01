/** @format */

import {
  createMuiTheme,
  CssBaseline,
  makeStyles,
  ThemeProvider,
} from "@material-ui/core";
import Header from "../components/Header";
import SideMenu from "../components/SideMenu";
import Employees from "../Pages/Employees/Employees";
import "./App.css";

function App() {
  const classes = useStyles();
  return (
    <ThemeProvider theme={theme}>
      <SideMenu />
      <div className={classes.appMain}>
        <Header />
        <Employees />
      </div>
      <CssBaseline />
    </ThemeProvider>
  );
}

export default App;

const theme = createMuiTheme({
  palette: {
    primary: {
      light: "#757ce8",
      main: "#3f50b5",
      dark: "#002884",
      contrastText: "#fff",
    },
    secondary: {
      light: "#ff7961",
      main: "#f44336",
      dark: "#ba000d",
      contrastText: "#000",
    },
    background: {
      default: "#f4f5fd",
    },
  },
  shape: {
    borderRadius: "8px",
  },
});

const useStyles = makeStyles({
  appMain: {
    paddingLeft: "240px",
    width: "100%",
  },
});
