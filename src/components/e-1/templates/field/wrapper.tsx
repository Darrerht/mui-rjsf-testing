import { Grid } from "@mui/material";
import { FieldTemplateProps, getTemplate, getUiOptions } from "@rjsf/utils";
import { parseColumnWidth } from "../../../../utils/parse-column-width";

export const Wrapper = ({
  children,
  classNames,
  disabled,
  id,
  label,
  onDropPropertyClick,
  onKeyChange,
  readonly,
  registry,
  required,
  schema,
  style,
  uiSchema,
}: FieldTemplateProps) => {
  const uiOptions = getUiOptions(uiSchema);

  const WrapIfAdditionalTemplate = getTemplate(
    "WrapIfAdditionalTemplate",
    registry,
    uiOptions
  );

  return (
    <WrapIfAdditionalTemplate
      classNames={classNames}
      style={style}
      disabled={disabled}
      id={id}
      label={label}
      onDropPropertyClick={onDropPropertyClick}
      onKeyChange={onKeyChange}
      readonly={readonly}
      required={required}
      schema={schema}
      uiSchema={uiSchema}
      registry={registry}
    >
      {children}
    </WrapIfAdditionalTemplate>
  );
};

export const ObjectContainer = (props: FieldTemplateProps) => {
  const { classNames, help, id, rawHelp, style, uiSchema } = props;

  const uiOptions = getUiOptions(uiSchema);
  const { columnWidth, fullWidthColumn } = uiOptions;

  if (id === "root")
    return (
      <Grid container style={style} className={classNames}>
        <Wrapper {...props} />
        {rawHelp && rawHelp?.length && (
          <Grid item xs={12}>
            {help}
          </Grid>
        )}
      </Grid>
    );
  return (
    <Grid
      item
      xs={12}
      md={fullWidthColumn ? 12 : parseColumnWidth(columnWidth)}
      style={style}
      className={classNames}
    >
      <Grid
        item
        xs={12}
        md={!fullWidthColumn ? 12 : parseColumnWidth(columnWidth)}
      >
        <Wrapper {...props} />
      </Grid>
      {rawHelp && (
        <Grid item xs={12}>
          {help}
        </Grid>
      )}
    </Grid>
  );
};
export const ItemContainer = (props: FieldTemplateProps) => {
  const { classNames, errors, help, rawErrors, rawHelp, style, uiSchema } =
    props;

  const uiOptions = getUiOptions(uiSchema);
  const { columnWidth, fullWidthColumn } = uiOptions;

  return (
    <Grid
      item
      xs={12}
      md={fullWidthColumn ? 12 : parseColumnWidth(columnWidth)}
      my={2}
      style={style}
      className={classNames}
    >
      <Grid
        item
        xs={12}
        md={fullWidthColumn ? parseColumnWidth(columnWidth) : 12}
      >
        <Wrapper {...props} />
      </Grid>
      {rawHelp && rawHelp?.length && (
        <Grid item xs={12}>
          {help}
        </Grid>
      )}
      {rawErrors && (
        <Grid item xs={12}>
          {errors}
        </Grid>
      )}
    </Grid>
  );
};
