import { createTheme } from "@mui/material";

export const theme = createTheme({
  typography: {
    button: {
      textTransform: 'none'
    }
  },
  components: {
    MuiTextField: {
      styleOverrides: {
        root: {
          '& .MuiOutlinedInput-root': {
            '& fieldset': {
              border: 'none',
            },
          }
        }
      },
    },
    MuiFormControl: {
      styleOverrides: {
        root: {
          '& .MuiOutlinedInput-root': {
            '& fieldset': {
              border: 'none',
            },
          }
        }
      }
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundColor: '#1BC5BD',
        }
      }
    },
  },
});
