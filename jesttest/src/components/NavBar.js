import React from "react";
import { useRef } from "react";
import { useStyles } from "./styles";
import {
  AppBar,
  Box,
  Button,
  IconButton,
  Toolbar,
  Tooltip,
  Typography,
} from "@mui/material";
import { Menu } from "@mui/icons-material/";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import { TabContainer } from "./TabContainer";
import { DrawerMenu } from "./DrawerMenu";
import PersonAddAlt1Icon from "@mui/icons-material/PersonAddAlt1";
import LoginIcon from "@mui/icons-material/Login";

export const NavBar = () => {
  const theme = useTheme();
  const classes = useStyles();
  const menuitems = ["Eka", "Toka", "Kolmas"];

  const smallscreen = useMediaQuery(theme.breakpoints.down("sm"));
  const bigscreen = useMediaQuery(theme.breakpoints.up("sm"));

  console.log("pieni näyttö:", smallscreen);
  console.log("iso näyttö:", bigscreen);
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          {smallscreen ? (
            <>
              <DrawerMenu menuitems={menuitems} />{" "}
            </>
          ) : (
            <>
              <TabContainer menuitems={menuitems} />{" "}
            </>
          )}

          {bigscreen ? (
            <React.Fragment>
              {" "}
              <Button sx={{ marginLeft: "auto" }} color="inherit">
                {" "}
                <Typography variant="inherit">Sign up</Typography>
              </Button>
              <Button sx={{ margiLeftn: "5px" }} color="inherit">
                <Typography variant="inherit">Login</Typography>
              </Button>
            </React.Fragment>
          ) : (
            <React.Fragment>
              <Tooltip title="Sign up">
                <IconButton color="inherit" sx={{ marginLeft: "auto" }}>
                  <PersonAddAlt1Icon />
                </IconButton>
              </Tooltip>
              <Tooltip title="Login">
                <IconButton
                  color="inherit"
                  sx={{ marginLeft: "5px" }}
                  aria-label="login"
                >
                  <LoginIcon />
                </IconButton>
              </Tooltip>
            </React.Fragment>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
};
