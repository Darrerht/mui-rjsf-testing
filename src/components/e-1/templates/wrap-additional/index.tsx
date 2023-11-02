import { Grid, TextField } from "@mui/material";
import {
  ADDITIONAL_PROPERTY_FLAG,
  TranslatableString,
  WrapIfAdditionalTemplateProps,
} from "@rjsf/utils";
import React from "react";

const WrapIfAdditionalTemplate = (props: WrapIfAdditionalTemplateProps) => {
  const {
    children,
    classNames,
    style,
    disabled,
    id,
    label,
    onDropPropertyClick,
    onKeyChange,
    readonly,
    required,
    schema,
    uiSchema,
    registry,
  } = props;
  const { templates, translateString } = registry;
  // Button templates are not overridden in the uiSchema
  const { RemoveButton } = templates.ButtonTemplates;
  const keyLabel = translateString(TranslatableString.KeyLabel, [label]);
  const additional = ADDITIONAL_PROPERTY_FLAG in schema;
  const btnStyle: React.CSSProperties = {
    flex: 1,
    paddingLeft: 6,
    paddingRight: 6,
    fontWeight: "bold",
  };

  if (!additional) return <>{children}</>;
  const handleBlur = ({ target }: React.FocusEvent<HTMLInputElement>) =>
    onKeyChange(target.value);

  return (
    <Grid
      container
      key={`${id}-key`}
      alignItems='center'
      spacing={2}
      className={classNames}
      style={style}
    >
      <Grid item xs>
        <TextField
          fullWidth={true}
          required={required}
          label={keyLabel}
          defaultValue={label}
          disabled={disabled || readonly}
          id={`${id}-key`}
          name={`${id}-key`}
          onBlur={!readonly ? handleBlur : undefined}
          type='text'
        />
      </Grid>
      <Grid item={true} xs>
        {children}
      </Grid>
      <Grid item={true}>
        <RemoveButton
          iconType='default'
          style={btnStyle}
          disabled={disabled || readonly}
          onClick={onDropPropertyClick(label)}
          uiSchema={uiSchema}
          registry={registry}
        />
      </Grid>
    </Grid>
  );
};

export default WrapIfAdditionalTemplate;
