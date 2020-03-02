import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import SideDrawer from "../../components/SideDrawer/SideDrawer";
import NavBar from "../../components/NavBar/NavBar";

const useStyles = makeStyles(theme => ({
  root: {
    "& > *": {
      margin: theme.spacing(1)
    }
  },
  headerStyle: {
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
    height: 60,
    backgroundColor: "pink",
    [theme.breakpoints.down("sm")]: {
      display: "flex",
      justifyContent: "flex-start"
    },
    [theme.breakpoints.up("sm")]: {
      display: "flex",
      justifyContent: "flex-end"
    }
  }
}));

const Header = () => {
  const classes = useStyles();
  return (
    <div className={classes.headerStyle}>
      <SideDrawer />
      <NavBar />
    </div>
  );
};

export default Header;
