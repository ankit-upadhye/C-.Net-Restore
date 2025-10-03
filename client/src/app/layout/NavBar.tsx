import { DarkMode, LightMode } from "@mui/icons-material";
import { AppBar, IconButton, Toolbar, Typography } from "@mui/material";
type Props={

toogleDarkMode:()=>void;
darkMode:boolean;
}

export default function NavBar({toogleDarkMode, darkMode}:Props) {
  return (
    <AppBar position="fixed">
        <Toolbar>
            <Typography variant="h6">RE-STORE</Typography>
            <IconButton onClick={toogleDarkMode}>
                {darkMode? <DarkMode/>: <LightMode sx={{color:'yellow'}}/>}
            </IconButton>
        </Toolbar>
    </AppBar>
  )
}