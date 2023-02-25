import {Link as RouterLink} from 'react-router-dom'
import { Google } from '@mui/icons-material';
import { Button, Grid, Link, TextField, Typography } from '@mui/material';
import { AuthLayout } from '../../auth/layout/AuthLayout';
import { useForm } from '../../hooks/useForm';
import { FormEvent } from 'react';
import { useDispatch } from 'react-redux';
import { checkingAuthentication, checkingGoogleAuthentication } from '../../store/auth/thunks';
import { useAppDispatch } from '../../hooks/useAppDispatch';


export const LoginPage = () => {
    const dispatch=useAppDispatch()

    const {email, password, onInputChange}=useForm({
        email:'dagopla@gmail.com',
        password:'123dasfdr'
    });
    const onSubmit=(e:FormEvent<HTMLFormElement>)=>{
        e.preventDefault();
        console.log({email,password});
        dispatch(checkingAuthentication(email,password));
    }
    const onGoogleSignIn=()=>{
        console.log('onGoogleSignIn');
        dispatch(checkingGoogleAuthentication());
    }
    return (
        <AuthLayout title={'Login'}>
            <form onSubmit={onSubmit}>
                    <Grid container>
                        <Grid item xs={12} sx={{mt:2}}>
                            <TextField label="Correo" name='email' type="email" value={email} onChange={onInputChange} placeholder="correo@gmaol.com" fullWidth />
                        </Grid>
                        <Grid item xs={12} sx={{mt:2}}>
                            <TextField label="Contrasena" name='password' value={password} onChange={onInputChange} type="password" placeholder="correo@gmaol.com" fullWidth />
                        </Grid>
                        <Grid container
                        spacing={2}
                        sx={{mb:2}}>
                            <Grid item xs={12}>
                                <Button variant='contained' type='submit' fullWidth>
                                    Login
                                </Button>
                            </Grid>
                            <Grid item xs={12}>
                                <Button variant='contained' 
                                onClick={onGoogleSignIn}
                                type='submit'
                                fullWidth>
                                    <Google></Google>
                                    <Typography sx={{ml:1}}>Google</Typography>
                                </Button>
                            </Grid>
                            <Grid container
                            direction='row'
                            justifyContent='end'>
                                <Link component={RouterLink} color='inherit' to="/auth/register">Crear cuenta</Link>
                            </Grid>
                        </Grid>
                    </Grid>
                </form>
        </AuthLayout>
                
    )
}
