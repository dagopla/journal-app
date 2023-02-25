

import {  CssBaseline, ThemeProvider } from "@mui/material"
import { ReactElement } from "react";
import { purpleTheme } from './';

export const AppTheme = ({children}:{children:ReactElement}) => {
  
  return (
    <ThemeProvider theme={purpleTheme}>
        <CssBaseline/>
        {children}
    </ThemeProvider>
  )
}
