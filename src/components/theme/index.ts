import { ThemeOptions } from "@mui/material";

const theme: ThemeOptions = {
  components: {
    MuiInput: {
      defaultProps: {
        size: "small",
        fullWidth: true,
      },
      styleOverrides: {
        root: {
          "& .Mui-disabled": {
            border: "none",
          },
        },
      },
    },
    MuiTextField: {
      defaultProps: {
        variant: "filled",
        size: "small",
        fullWidth: true,
      },
      styleOverrides: {
        root: {
          "& .MuiFilledInput-root": {
            borderRadius: 0,
          },
          "& .Mui-disabled": {
            "::before": {
              borderBottom: 0,
            },
          },
        },
      },
    },
  },
};

export default theme;
