import React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  root: {
    "& > *": {
      margin: theme.spacing(2),
      width: "60%",
      marginLeft: "20%",
      [theme.breakpoints.down("sm")]: {
        width: "80%",
        marginLeft: "10%"
      },
      [theme.breakpoints.up("lg")]: {
        width: "50%",
        marginLeft: "25%"
      },
      marginTop: "40"
    },
    display: "flex",
    flexDirection: "column",
    [theme.breakpoints.down("sm")]: {
      marginBottom: 34
    }
  }
}));

export const Form = props => {
  const classes = useStyles();

  const {
    values: { name, email, password, confirmPassword },
    errors,
    touched,
    handleChange,
    isValid,
    setFieldTouched
  } = props;

  const change = (name, e) => {
    e.persist();
    handleChange(e);
    setFieldTouched(name, true, false);
  };
  return (
    <form
      className={classes.root}
      onSubmit={() => {
        alert("submitted");
      }}
    >
      <TextField
        id="name"
        name="name"
        helperText={touched.name ? errors.name : ""}
        error={touched.name && Boolean(errors.name)}
        label="Name"
        value={name}
        onChange={change.bind(null, "name")}
        variant="outlined"
      />
      <TextField
        id="email"
        name="email"
        helperText={touched.email ? errors.email : ""}
        error={touched.email && Boolean(errors.email)}
        label="Email"
        variant="outlined"
        value={email}
        onChange={change.bind(null, "email")}
      />
      <TextField
        id="password"
        name="password"
        helperText={touched.password ? errors.password : ""}
        error={touched.password && Boolean(errors.password)}
        label="Password"
        variant="outlined"
        type="password"
        value={password}
        onChange={change.bind(null, "password")}
      />
      <TextField
        id="confirmPassword"
        name="confirmPassword"
        helperText={touched.confirmPassword ? errors.confirmPassword : ""}
        error={touched.confirmPassword && Boolean(errors.confirmPassword)}
        label="Confirm Password"
        variant="outlined"
        type="password"
        value={confirmPassword}
        onChange={change.bind(null, "confirmPassword")}
      />
      <Button
        type="submit"
        variant="contained"
        color="primary"
        size="large"
        disabled={!isValid}
      >
        Sign UP
      </Button>
    </form>
  );
};
