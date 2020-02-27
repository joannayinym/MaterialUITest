import React from "react";
import { Link } from "react-router-dom";
import { makeStyles, Button } from "@material-ui/core";

// const useStyles = makeStyles(theme => ({
//   root: {
//     "& > *": {
//       margin: theme.spacing(1)
//     }
//   }
// }));

const MainMenu = props => {
  // const classes = useStyles();
  const { className } = props;

  return (
    <div className={className}>
      <Link to="/">
        <Button variant="outlined" color="primary">
          Home
        </Button>
      </Link>
      <Link to="/signin">
        <Button variant="outlined" color="primary">
          Sign In
        </Button>
      </Link>
      <Link to="/signup">
        <Button variant="outlined" color="primary">
          Sign Up
        </Button>
      </Link>
      <Link to="/signup">
        <Button variant="outlined" color="primary">
          Log Out
        </Button>
      </Link>
    </div>
  );
};

export default MainMenu;
