import { Grid } from "@mui/material";
import { FieldTemplateProps, getTemplate, getUiOptions } from "@rjsf/utils";
import { parseColumnWidth } from "../../../../utils/parse-column-width";
import { renderOffsetGrid } from "./offset-grid";
import { ErrorPosition, HelpPosition } from "../../../../enums/render-position";

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
  const { columnWidth, fullWidthColumn, columnOffset } = uiOptions;

  const { cWidth, cOffset } = parseColumnWidth(
    columnWidth,
    columnOffset,
    fullWidthColumn
  );
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
    <>
      <Grid item xs={12} md={cWidth} style={style} className={classNames}>
        <Wrapper {...props} />
        {rawHelp && (
          <Grid item xs={12}>
            {help}
          </Grid>
        )}
      </Grid>
      {cOffset > 0 && <Grid item xs={cOffset} style={{ height: 0 }} />}
    </>
  );
};

export const ItemContainer = (props: FieldTemplateProps) => {
  const { classNames, errors, help, rawErrors, rawHelp, style, uiSchema } =
    props;

  const uiOptions = getUiOptions(uiSchema);
  const {
    columnWidth,
    fullWidthColumn,
    columnOffset,
    helpPosition,
    errorPosition,
  } = uiOptions;
  const { cWidth, cOffset } = parseColumnWidth(
    columnWidth,
    columnOffset,
    fullWidthColumn
  );

  return (
    <>
      <Grid
        item
        xs={12}
        md={cWidth}
        style={style}
        className={classNames}
        pb={
          (rawHelp && helpPosition !== HelpPosition.right) || rawErrors?.length
            ? 2
            : 4
        }
        position={errorPosition === ErrorPosition.abs ? "relative" : "static"}
      >
        <Wrapper {...props} />
        {rawHelp && helpPosition !== HelpPosition.right && (
          <Grid item xs={12}>
            {help}
          </Grid>
        )}
        {rawErrors && errors}
      </Grid>
      {renderOffsetGrid(cOffset, rawHelp, help, helpPosition)}
    </>
  );
};

export const NullContainer = (props: FieldTemplateProps) => {
  const { description, help, rawDescription, rawHelp, uiSchema } = props;
  const { separator, separatorColor, separatorHeight } = getUiOptions(uiSchema);
  if (separator)
    return (
      <Grid item xs={12} mb={4}>
        <Grid
          style={{
            backgroundColor:
              (separatorColor as string | undefined) ?? "#e1e1e6",
            height: (separatorHeight as string | undefined) ?? "1px",
          }}
        ></Grid>
      </Grid>
    );
  return (
    <>
      {rawDescription && (
        <Grid item xs={12} mb={!help ? 4 : 0}>
          {description}
        </Grid>
      )}
      {rawHelp && (
        <Grid item xs={12} mb={4}>
          {help}
        </Grid>
      )}
    </>
  );
};

// export const ItemContainer = (props: FieldTemplateProps) => {
//   const { classNames, errors, help, rawErrors, rawHelp, style, uiSchema } =
//     props;

//   const uiOptions = getUiOptions(uiSchema);
//   const { columnWidth, fullWidthColumn } = uiOptions;

//   const { column, columnOffset } = parseColumnWidth(columnWidth);

//   return (
//     <>
//       <Grid
//         item
//         xs={12}
//         md={column}
//         style={style}
//         className={classNames}
//         pb={rawHelp || rawErrors?.length ? 2 : 4}
//       >
//         <Grid item xs={12} md={12}>
//           <Wrapper {...props} />
//         </Grid>
//         {rawHelp && rawHelp?.length && (
//           <Grid item xs={12}>
//             {help}
//           </Grid>
//         )}
//         {rawErrors && (
//           <Grid item xs={12}>
//             {errors}
//           </Grid>
//         )}
//       </Grid>
//       {fullWidthColumn && columnOffset > 0 && (
//         <Grid item style={{ height: 0 }} xs={columnOffset} />
//       )}
//     </>
//   );
// };
