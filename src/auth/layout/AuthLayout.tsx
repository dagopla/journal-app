import { Grid, Typography } from '@mui/material'
import React from 'react'
import { ReactElement } from 'react';
interface Props{
    children:ReactElement;
    title:string
}
export const AuthLayout = ({children,  title=''}:Props) => {
  return (
    <Grid
            container
            spacing={0}
            direction='column'
            alignItems='center'
            justifyContent='center'
            sx={{ minHeight: '100vh', backgroundColor:'primary.main', padding: 4 }}
        >
            <Grid
                item
                className="box-shadow"
                xs={3}
                sx={{ width:{sm:450}, background: 'white', padding: 3, borderRadius: 2 }}

            >
                <Typography variant="h5" sx={{ mb: 1 }}>{title}</Typography>
                {children}
            </Grid>
    </Grid>
  )
}
