import React from "react";
import { Grid } from "@mui/material";
import { UiOptions } from "../../../../types/ui-options";
import { HelpPosition } from "../../../../enums/render-position";

export const renderOffsetGrid = (
  offset: number,
  rawHelp: UiOptions,
  help?: JSX.Element,
  helpPosition?: UiOptions
) => {
  const validPosition = helpPosition === HelpPosition.right;
  const gridStyle: React.CSSProperties = {
    height: validPosition && offset > 0 ? "3rem" : 0,
  };
  if (offset === 12) return <></>;
  return (
    <Grid item style={gridStyle} xs={offset}>
      {rawHelp && validPosition && (
        <Grid
          container
          style={{ height: "100%" }}
          justifyContent='start'
          alignItems='center'
          pl='0.25rem'
        >
          {help}
        </Grid>
      )}
    </Grid>
  );
};
