import React from "react";
import { Link } from "react-router-dom";
import { makeStyles, Button } from "@material-ui/core";

import MainMenu from "../MainMenu/MainMenu";
import ProfileMenu from "../ProfileMenu/ProfileMenu";

const useStyles = makeStyles(theme => ({
  root: {
    "& > a > button": {
      margin: theme.spacing(1)
    },

    display: "flex",
    justifyContent: "flex-end"
  },
  mainMenu: {
    "& > *": {
      margin: theme.spacing(1)
    },
    "& > a": {
      textDecoration: "none"
    },
    display: "flex",
    flexDirection: "row"
  }
}));

const NavBar = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <MainMenu className={classes.mainMenu} />
      <ProfileMenu />
    </div>
  );
};

export default NavBar;
