import React from "react";
import { makeStyles } from "@material-ui/core";

const footerStyle = {
  block: {
    color: "inherit",
    padding: "15px",
    textTransform: "uppercase",
    borderRadius: "3px",
    textDecoration: "none",
    position: "relative",
    display: "block",
    fontWeight: "500",
    fontSize: "12px"
  },
  flex: {
    display: "flex",
    justifyContent: "center"
  },
  left: {
    float: "left!important",
    display: "block"
  },
  right: {
    padding: "15px 0",
    margin: "0",
    fontSize: "14px",
    float: "right!important"
  },
  footer: {
    bottom: "0",
    borderTop: "1px solid ",
    padding: "15px 0"
  },
  a: {
    textDecoration: "none",
    backgroundColor: "transparent"
  },
  list: {
    marginBottom: "0",
    padding: "0",
    marginTop: "0"
  },
  inlineBlock: {
    display: "inline-block",
    padding: "0px",
    width: "auto"
  }
};

const useStyles = makeStyles(footerStyle);

const Footer = () => {
  const classes = useStyles();
  return (
    <div className={classes.footer}>
      <div className={classes.flex}>Copyright: Joanna</div>
    </div>
  );
};

export default Footer;
