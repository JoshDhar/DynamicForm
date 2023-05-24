import React, { useContext } from "react";
import { FormControlLabel, Checkbox } from "@mui/material";
import { FormContext } from "../../context/FormContext";

const CheckBox = ({ field_id, field_label, field_value }) => {
  const { handleChange } = useContext(FormContext);

  return (
    <div>
      <FormControlLabel
        control={
          <Checkbox
            checked={field_value}
            onChange={(event) => {
              handleChange(field_id, event);
            }}
            inputProps={{ "aria-label": "controlled" }}
          />
        }
        label={field_label}
      />
    </div>
  );
};

export default CheckBox;
