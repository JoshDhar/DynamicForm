import React, { useContext } from "react";
import { FormContext } from "../../context/FormContext";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";

const Select = ({ field_id, field_label, field_value, field_options }) => {
  const { handleChange } = useContext(FormContext);

  return (
    <div>
      <TextField
        id={field_id}
        select
        label={field_label}
        value={field_value}
        onChange={(event) => {
          handleChange(field_id, event);
        }}
        // helperText="Please select your currency"
      >
        {field_options.length > 0 &&
          field_options.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
      </TextField>
    </div>
  );
};

export default Select;
