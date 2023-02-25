import React from 'react'
import { Box } from '@mui/system';
import { Divider, Drawer, Grid, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Toolbar, Typography } from '@mui/material';
import { TurnedInNot } from '@mui/icons-material';
interface Props{
    drawerWidth:number;
}
export const SideBar = ({drawerWidth}:Props) => {
  return (
    <Box component='nav'
    sx={{width:{sm:drawerWidth},flexShrink:{sm:0}}}
    >
        <Drawer
        variant='permanent'
        open
        sx={{display:{xs:'block'},'& .MuiDrawer-paper':{boxSizing:'border-box',width:drawerWidth}}}
        >
            <Toolbar>
                <Typography variant='h6' noWrap component='div' >David gopnzalez plata</Typography>
            </Toolbar>
            <Divider/>
            <List>
                {
                    ['enero','febrero', 'marzo', 'Abril'].map(text=>(
                        <ListItem>
                            <ListItemButton>
                                <ListItemIcon>
                                    <TurnedInNot/>
                                </ListItemIcon>
                                <Grid container>
                                    <ListItemText primary={text} />
                                    
                                    <ListItemText secondary={'mpedit neque fugit. Culpa nihil officiis, fugiat reiciendis repellendus quis assumenda.'} />
                                </Grid>
                            </ListItemButton>
                        </ListItem>
                    ))
                }
            </List>
        </Drawer>

    </Box>
  )
}
