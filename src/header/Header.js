import React, { useMemo } from "react";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { AppBar, Box, IconButton } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { useTheme } from "@emotion/react";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import ModeNightIcon from "@mui/icons-material/ModeNight";
import { setMode } from "../state/reducers/themeReducer";

const Header = () => {
  const theme = useTheme();
  const dispatch = useDispatch();
  const open = useSelector((state) => state.drawer.open);

  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        dispatch(
          setMode((prevMode) => (prevMode === "light" ? "dark" : "light"))
        );
      },
    }),
    []
  );

  return (
    <AppBar open={open}>
      <Toolbar style={{ display: "flex", justifyContent: "space-between" }}>
        <Typography fontFamily="" variant="h6" noWrap component="div">
          Demo Project
        </Typography>
        <Box>
          <IconButton
            style={{ marginLeft: 1, zIndex: 100 }}
            onClick={colorMode.toggleColorMode}
            color="inherit"
          >
            {theme.palette.mode === "dark" ? (
              <ModeNightIcon />
            ) : (
              <Brightness4Icon />
            )}
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
