import { FieldErrorProps, errorId, getUiOptions } from "@rjsf/utils";
import { ErrorPosition } from "../../../../enums/render-position";
import { Grid, Typography } from "@mui/material";

const FieldErrorTemplate = (props: FieldErrorProps) => {
  const { errors = [], idSchema, uiSchema } = props;

  if (errors.length === 0) return null;

  const id = errorId(idSchema);
  const { errorPosition } = getUiOptions(uiSchema);

  return (
    <Grid
      xs={errorPosition === ErrorPosition.abs ? "auto" : 12}
      position={errorPosition === ErrorPosition.abs ? "absolute" : "static"}
    >
      {errors.map((error, i: number) => {
        return (
          <Typography
            variant='body1'
            key={i}
            id={id}
            sx={({ palette }) => ({
              color: palette.error.main,
              fontSize: "0.75rem",
            })}
          >
            {error}
          </Typography>
        );
      })}
    </Grid>
  );
};

export default FieldErrorTemplate;
