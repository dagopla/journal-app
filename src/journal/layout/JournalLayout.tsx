import { Box } from "@mui/system"
import { ReactElement } from 'react';
import { Navbar } from "../components";
import { SideBar } from '../components/SideBar';
interface Props{
    children:ReactElement |ReactElement[]
}
const drawerWidth=240;
export const JournalLayout = ({children}:Props) => {
  return (
    <Box sx={{display:'flex'}} >
        <Navbar drawerWidth={drawerWidth}/>
        <SideBar drawerWidth={drawerWidth}/>
        <Box component={'main'}
        sx={{flexGrow:1,p:3, py:8}} >
            {children}
        </Box>
    </Box>
  )
}
