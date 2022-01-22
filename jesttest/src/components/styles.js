import React from "react";
import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme) => ({
  boxlg: {
    color: "blue",
    border: "solid",
    borderColor: "black",
    borderWidth: 1,
    borderRadius: 10,
    height: "200px",
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    "&:hover": {
      transform: "scale(1.01)",
    },
  },

  container: {
    padding: 0,

    /* maxWidth: "90%", */
    [theme.breakpoints.down("sm")]: {
      width: "100%",
      margin: 0,
    },
    [theme.breakpoints.up("md")]: {
      width: "90%",
      margin: 0,
    },
    [theme.breakpoints.only("xs")]: {},
  },

  navbutton: {
    "&:hover": {
      transform: "scale(1.05)",
    },
  },

  tabactive: {
    color: "cyan",
  },
  tabinactive: {
    color: theme.palette.background.paper,
  },

  drawer: {
    position: "relative",
    top: "100px",
  },
}));
