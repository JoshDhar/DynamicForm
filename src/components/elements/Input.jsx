import React, { useContext } from "react";
import { TextField } from "@mui/material";
import { FormContext } from "../../context/FormContext";
import { TextValidator } from "react-material-ui-form-validator";

const Input = ({
  field_id,
  field_label,
  field_value,
  field_validation,
  field_error_Message,
}) => {
  const { handleChange } = useContext(FormContext);

  return (
    <div>
      <TextValidator
        // error
        id={field_id}
        label={field_label}
        value={field_value}
        onChange={(event) => {
          handleChange(field_id, event);
        }}
        validators={field_validation ?? []}
        errorMessages={field_error_Message ?? []}
      />
    </div>
  );
};

export default Input;
