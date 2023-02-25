import * as React from 'react';
import { red } from "@mui/material/colors";
import {createTheme} from "@mui/material/styles";
export enum ThemeProp{
    PR="#262254",
    SC='#543884'
}
export const purpleTheme=createTheme({
    palette:{
        primary:{
            main:ThemeProp.PR
        },
        secondary:{
            main:ThemeProp.SC
        },
        error:{
            main:red.A400
        }
    }
});
