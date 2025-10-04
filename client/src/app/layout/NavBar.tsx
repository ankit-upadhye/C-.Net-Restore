import { DarkMode, LightMode, ShoppingCart } from "@mui/icons-material";
import { AppBar, Badge, Box, IconButton, List, ListItem, Toolbar, Typography } from "@mui/material";
import { NavLink } from "react-router-dom";
type Props={

toogleDarkMode:()=>void;
darkMode:boolean;
}
const medLinks=[
  {path:'/catalog',title:'Catalog'},
  {path:'/about',title:'About'},
  {path:'/contact',title:'Contact'}
];
const rightLinks=[
  {path:'/login',title:'Login'},
  {path:'/register',title:'Register'}
];
const navStyles={
                  color:'inherit', 
                  typography:'h6',
                textDecoration:'none',
              '&:hover':{
                color:'grey.500'
              },
              '&.active':{
                color:'#baecf9'
              }
            };

export default function NavBar({toogleDarkMode, darkMode}:Props) {
  return (
    <AppBar position="fixed">
        <Toolbar sx={{display:'flex' ,justifyContent:'space-between', alignItems:'center'}}>
          <Box sx={{display:'flex', alignItems:'center'}}>
            <Typography component={NavLink} to={''} variant="h6">RE-STORE</Typography>
            <IconButton onClick={toogleDarkMode}>
                {darkMode? <DarkMode/>: <LightMode sx={{color:'yellow'}}/>}
            </IconButton>
          </Box>
          <List sx={{display:'flex'}}>
              {medLinks.map(({path,title})=>{
                return <ListItem component={NavLink} to={path} key={path} sx={navStyles}>{title}</ListItem>;
              })}
          </List>
          <Box sx={{display:'flex', alignItems:'center'}}>
            <IconButton size="large" sx={{color:'inherit'}}>
              <Badge badgeContent='4' color="secondary">
                <ShoppingCart/>
              </Badge>
            </IconButton>

            <List sx={{display:'flex'}}>
              {rightLinks.map(({path,title})=>{
                return <ListItem component={NavLink} to={path} key={path} sx={navStyles}>{title}</ListItem>;
              })}
            </List>
          </Box>
        </Toolbar>
    </AppBar>
  )
}