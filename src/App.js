import { ThemeProvider, useMediaQuery } from "@mui/material";
import { useSelector } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import MiniDrawer from "./sidebar/Drawer";
import LabelBottomNavigation from "./sidebar/BottomNavigation";
import Header from "./header/Header";
import lightModeTheme from "./theme/lightModeTheme";
import darkModeTheme from "./theme/darkModeTheme";
import Routes from "./router/Routes";

const drawerWidth = 240;

function App() {
  const mode = useSelector((state) => state.theme.mode);

  const open = useSelector((state) => state.drawer.open);

  const updatedTheme = mode === "light" ? lightModeTheme : darkModeTheme;

  const isSmallScreen = useMediaQuery(updatedTheme.breakpoints.down("sm"));

  return (
    <ThemeProvider theme={updatedTheme}>
      <BrowserRouter>
        <div style={{ display: "flex" }}>
          <Header />
          {!isSmallScreen && <MiniDrawer />}
        </div>
        <div style={{ marginLeft: open ? drawerWidth : 67 }}>
          <Routes />
        </div>
        {isSmallScreen && (
          <div style={{ position: "fixed", bottom: 0, left: 0, right: 0 }}>
            <LabelBottomNavigation />
          </div>
        )}
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
