import React from "react";
import { Field, Form } from "formik";
import { TextField, Button } from "@material-ui/core";

const RenderSignUpForm = props => {
  const { values, submitCount, handleSubmit } = props;

  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <Field
          component={TextField}
          id="email"
          type="email"
          label="Email"
          variant="outlined"
          submitCount={submitCount}
          value={values.email}
          hasFeedback
        />
        <Field
          component={TextField}
          id="psw"
          type="password"
          label="Password"
          variant="outlined"
          submitCount={submitCount}
          value={values.password}
          hasFeedback
        />
        <Field
          component={TextField}
          id="confirmpassword"
          type="password"
          label="Confirm Password"
          variant="outlined"
          submitCount={submitCount}
          value={values.confirmPassword}
          hasFeedback
        />
        <Button variant="outlined" color="primary">
          Sign Up
        </Button>
      </Form>
    </div>
  );
};

export default RenderSignUpForm;
