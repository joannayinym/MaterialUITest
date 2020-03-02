import React from "react";

import { Form, TextField } from "@material-ui/core";

const FormItem = Form.Item;

const CreateField = Component => ({
  id,
  type,
  label,
  variant,
  submitCount,
  value,
  form,
  hasFeedback,
  renderRight,
  ...props
}) => {
  const touched = form.touched[id];
  const submitted = submitCount > 0;
  const hasError = form.errors[id];
  const submittedError = hasError && submitted;
  const touchedError = hasError && touched;
  const onInputChange = ({ target: { value } }) =>
    form.setFieldValue(id, value);
  const onChange = value => form.setFieldValue(id, value);
  const onBlur = () => form.setFieldTouched(id, true);
  return (
    <div className="field-container">
      <FormItem
        label={label}
        colon={false}
        hasFeedback={
          (hasFeedback && submitted) || (hasFeedback && touched) ? true : false
        }
        help={submittedError || touchedError ? hasError : false}
        validateStatus={submittedError || touchedError ? "error" : "success"}
      >
        <Component
          {...field}
          {...props}
          type={type}
          onBlur={onBlur}
          onChange={type ? onInputChange : onChange}
        ></Component>
      </FormItem>
    </div>
  );
};

export const UiTextField = CreateField(TextField);
