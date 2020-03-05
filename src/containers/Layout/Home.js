import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  root: {
    "& > *": {
      margin: theme.spacing(1)
    }
  },
  home: {
    // height: 600
  }
}));

const Home = () => {
  const classes = useStyles();

  return <div className={classes.home}></div>;
};

export default Home;
