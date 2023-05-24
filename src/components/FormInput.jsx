import React from "react";
import Input from "./elements/Input";
import Select from "./elements/Select";
import CheckBox from "./elements/Checkbox";

const FormInput = ({
  field: {
    field_type,
    field_id,
    field_label,
    field_value,
    field_options,
    field_validation,
    field_error_Message,
  },
}) => {
  switch (field_type) {
    case "text":
      return (
        <Input
          field_id={field_id}
          field_label={field_label}
          field_value={field_value}
          field_validation={field_validation}
          field_error_Message={field_error_Message}
        />
      );
    case "select":
      return (
        <Select
          field_id={field_id}
          field_label={field_label}
          field_value={field_value}
          field_options={field_options}
        />
      );
    case "checkbox":
      return (
        <CheckBox
          field_id={field_id}
          field_label={field_label}
          field_value={field_value}
        />
      );

    default:
      break;
  }
};

export default FormInput;
