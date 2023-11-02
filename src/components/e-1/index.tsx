import { Grid, ThemeProvider, createTheme } from "@mui/material";
import validator from "@rjsf/validator-ajv8";
import theme from "../theme";
import { Form } from "@rjsf/mui";
import { e1Schema, e1UiSchema } from "./schemas";
import {
  FieldErrorTemplate,
  FieldTemplate,
  ObjectFieldTemplate,
  WrapIfAdditionalTemplate,
} from "./templates";
import { useState } from "react";
import { IChangeEvent } from "@rjsf/core";

const buildedTheme = createTheme({ ...theme, palette: { mode: "dark" } });
const E1 = () => {
  const [formData, setFormData] = useState(null);
  const handleOnChange = (e: IChangeEvent) => {
    setFormData(e.formData);
  };
  return (
    <Grid
      container
      justifyContent='space-around'
      alignItems='start'
      style={{
        backgroundColor: "#121212",
      }}
    >
      <Grid container item xs={7}>
        <ThemeProvider theme={buildedTheme}>
          <Form
            schema={e1Schema}
            uiSchema={e1UiSchema}
            formData={formData}
            validator={validator}
            templates={{
              FieldTemplate,
              ObjectFieldTemplate,
              WrapIfAdditionalTemplate,
              FieldErrorTemplate,
            }}
            onChange={handleOnChange}
            noHtml5Validate={true}
          />
        </ThemeProvider>
      </Grid>
      <Grid
        item
        xs={4}
        style={{
          padding: "2rem 0 2rem 2rem",
          background: "rgba(255,255,20,0.1",
          border: "1px #fff solid",
          borderRadius: "1rem",
          marginTop: "4rem",
        }}
      >
        <pre>{JSON.stringify(formData, null, 4)}</pre>
      </Grid>
    </Grid>
  );
};

export default E1;
