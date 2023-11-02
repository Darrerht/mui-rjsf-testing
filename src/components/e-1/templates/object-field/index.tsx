import { Grid } from "@mui/material";
import {
  ObjectFieldTemplateProps,
  canExpand,
  descriptionId,
  getTemplate,
  getUiOptions,
  titleId,
} from "@rjsf/utils";
import React from "react";

const ObjectFieldTemplate = (props: ObjectFieldTemplateProps) => {
  const {
    description,
    disabled,
    formData,
    idSchema,
    properties,
    onAddClick,
    readonly,
    registry,
    required,
    schema,
    title,
    uiSchema,
  } = props;
  const uiOptions = getUiOptions(uiSchema);
  const { columnSpacing } = uiOptions;
  const TitleFieldTemplate = getTemplate(
    "TitleFieldTemplate",
    registry,
    uiOptions
  );
  const DescriptionFieldTempalte = getTemplate(
    "DescriptionFieldTemplate",
    registry,
    uiOptions
  );
  const {
    ButtonTemplates: { AddButton },
  } = registry.templates;

  return (
    <>
      {title && (
        <TitleFieldTemplate
          id={titleId(idSchema)}
          title={title}
          required={required}
          schema={schema}
          uiSchema={uiSchema}
          registry={registry}
        />
      )}
      {description && (
        <DescriptionFieldTempalte
          description={description}
          id={descriptionId(idSchema)}
          registry={registry}
          schema={schema}
          uiSchema={uiSchema}
        />
      )}
      <Grid container columnSpacing={(columnSpacing as number | string) ?? 4}>
        {properties.map((prop, index) => (
          <React.Fragment key={`${prop.name}_${index}`}>
            {prop.content}
          </React.Fragment>
        ))}
      </Grid>
      {canExpand(schema, uiSchema, formData) && (
        <Grid item xs={12}>
          <Grid container justifyContent='flex-end' direction='row'>
            <Grid item xs={12}>
              <AddButton
                className='object-property-expand'
                onClick={onAddClick(schema)}
                disabled={disabled || readonly}
                uiSchema={uiSchema}
                registry={registry}
              />
            </Grid>
          </Grid>
        </Grid>
      )}
    </>
  );
};

export default ObjectFieldTemplate;
