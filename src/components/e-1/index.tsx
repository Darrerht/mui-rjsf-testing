import { Grid, ThemeProvider, createTheme } from "@mui/material";
import validator from "@rjsf/validator-ajv8";
import theme from "../theme";
import { Form } from "@rjsf/mui";
import { e1Schema, e1UiSchema } from "./schemas";
import {
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
    <Grid container justifyContent='space-between' p={4}>
      <Grid
        container
        item
        xs={7}
        style={{
          background: "rgba(255,255,255,0.2",
          border: "1px #fff solid",
          borderRadius: "1rem",
        }}
      >
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
          paddingTop: "2rem",
          paddingLeft: "2rem",
          background: "rgba(255,255,20,0.1",
          border: "1px #fff solid",
          borderRadius: "1rem",
        }}
      >
        <pre>{JSON.stringify(formData, null, 4)}</pre>
      </Grid>
    </Grid>
  );
};

export default E1;
