import { SaveOutlined } from '@mui/icons-material';
import { Button, Grid, Typography, TextField } from '@mui/material';
import React from 'react'
import { ImageGallery } from '../components';

export const NoteView = () => {
  return (
    <Grid container direction='row' justifyContent='space-between' alignItems='center' sx={{mb:1}}>
        <Grid item>
            <Typography fontSize={39} fontWeight='light'> 28 aagosto 2033</Typography>
        </Grid>
        <Grid>
            <Button color='primary' sx={{padding:2}} >
                <SaveOutlined sx={{fontSize:30, mr:1}}/>
                Guardar
            </Button>
        </Grid>
        <Grid container>
            <TextField
            type="text"
            variant='filled'
            fullWidth
            placeholder='Ingrese un tutulo'
            label='Titulo'
            sx={{border:'none', mb:1}}
            >

            </TextField>
            <TextField
            type="text"
            variant='filled'
            fullWidth
            placeholder='Que sucedio en el dia de hoy'
            
            sx={{border:'none', mb:1}}
            minRows={5}
            >

            </TextField>
        </Grid>
        <ImageGallery/>
    </Grid>
    )
}
