import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import Button from "@material-ui/core/Button";
import MenuIcon from "@material-ui/icons/Menu";

import MainMenu from "../MainMenu/MainMenu";

const useStyles = makeStyles(theme => ({
  sideMenu: {
    "& > a > button": {
      margin: theme.spacing(1),
      marginLeft: "10%",
      width: "80%"
    },
    "& > a": {
      textDecoration: "none"
    },
    width: 200,
    display: "flex",
    flexDirection: "column"
  },
  list: {
    width: 250,
    "& > *": { display: "flex", flexDirection: "column" }
  },
  fullList: {
    width: "auto"
  }
}));

const SideDrawer = () => {
  const classes = useStyles();
  const [left, setLeft] = React.useState(false);

  const toggleDrawer = open => event => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setLeft(open);
  };

  const sideList = side => (
    <div
      className={classes.list}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <MainMenu className={classes.sideMenu} />
    </div>
  );

  return (
    <div>
      <Button onClick={toggleDrawer(true)}>
        <MenuIcon />
      </Button>

      <SwipeableDrawer
        open={left}
        onClose={toggleDrawer(false)}
        onOpen={toggleDrawer(true)}
      >
        {sideList("left")}
      </SwipeableDrawer>
    </div>
  );
};

export default SideDrawer;
