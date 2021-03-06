import React, { Component } from "react";
import { Formik } from "formik";
import withStyles from "@material-ui/core/styles/withStyles";
import { Form } from "./form";
import Paper from "@material-ui/core/Paper";
import * as Yup from "yup";

const styles = theme => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: `${theme.spacing(5)}px ${theme.spacing(5)}px ${theme.spacing(5)}px`
  },
  container: {
    maxWidth: "80%"
  }
});

const validationSchema = Yup.object({
  name: Yup.string("Enter a name").required("Name is required"),
  email: Yup.string("Enter your email")
    .email("Enter a valid email")
    .required("Email is required"),
  password: Yup.string("")
    .min(8, "at least 8 chars")
    .matches(/[a-z]/, "at least one lowercase char")
    .matches(/[A-Z]/, "at least one uppercase char")
    .matches(
      /[a-zA-Z]+[^a-zA-Z\s]+/,
      "at least 1 number or special char (@,!,#, etc)."
    ),
  confirmPassword: Yup.string("Enter your password")
    .required("Confirm your password")
    .oneOf([Yup.ref("password")], "Password does not match")
});

class InputForm extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const classes = this.props;
    const values = { name: "", email: "", confirmPassword: "", password: "" };

    return (
      <React.Fragment>
        <div className={classes.container}>
          <Paper elevation={1} className={classes.paper}>
            <Formik
              render={props => <Form {...props} />}
              initialValues={values}
              validationSchema={validationSchema}
            />
          </Paper>
        </div>
      </React.Fragment>
    );
  }
}

export default withStyles(styles)(InputForm);
