
import { createTheme, ThemeProvider } from '@mui/material/styles';

import { blue } from '@mui/material/colors';

export const primaryMain = blue[500]

const theme = createTheme({
  palette: {
    primary: {
      main: primaryMain,
    },
  },
});
export default theme