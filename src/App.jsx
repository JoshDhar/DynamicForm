import { useEffect, useState } from "react";
import FormData from "./data/formData.json";
import Box from "@mui/material/Box";
import FormInput from "./components/FormInput";
import { FormContext } from "./context/FormContext";
import { Button } from "@mui/material";
import { ValidatorForm } from "react-material-ui-form-validator";

function App() {
  const [formFields, setFormFields] = useState(null);

  const getFormData = () => {
    setFormFields(FormData);
  };

  useEffect(() => {
    getFormData();
  }, []);

  const { fields, pageTitle } = formFields ?? {};

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formFields);
  };

  const handleChange = (id, event) => {
    const newFormFields = { ...formFields };

    newFormFields.fields.forEach((field) => {
      const { field_type, field_id } = field;

      if (id === field_id) {
        switch (field_type) {
          case "checkbox":
            field["field_value"] = event.target.checked;
            break;

          default:
            field["field_value"] = event.target.value;
            break;
        }
      }
      setFormFields(newFormFields);
    });
  };

  return (
    <FormContext.Provider value={{ handleChange }}>
      <Box
        sx={{
          "& .MuiTextField-root": { m: 1, width: "25ch" },
        }}
        component="center"
      >
        <ValidatorForm onSubmit={(e) => handleSubmit(e)}>
          {fields
            ? fields.map((field, i) => <FormInput key={i} field={field} />)
            : null}
          <Button
            variant="contained"
            // onClick={(e) => handleSubmit(e)}
            sx={{ marginTop: 4 }}
            type="submit"
          >
            Submit
          </Button>
        </ValidatorForm>
      </Box>
    </FormContext.Provider>
  );
}

export default App;
