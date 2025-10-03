import { useEffect, useState } from "react"
import type { Product } from "../models/product";
import Catalog from "../../features/catalog/Catalog";
import { Box, Container, createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import NavBar from "./NavBar";

//const darkMode=true;



function App() {
  const [products, setProducts]= useState<Product[]>([]);
  const [darkMode, setDarkMode]=useState<boolean>(false);

const palleteType=darkMode? 'dark':'light';
const darkTheme = createTheme({
  palette: {
    mode: palleteType,
    background: {
      default: (palleteType==='light') ? "radial-gradient(circle,#1e3aBa,#111B27)": 'radial-gradient(circle,#baecf9,f0f9ff)'
    }
  },
});

  useEffect(()=>{
    fetch('http://localhost:5001/api/products')
    .then(response=>response.json())
    .then(data=>setProducts(data))
  },[]);
  const toogleDarkMode = ()=>{
    setDarkMode(!darkMode);
  }

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
    <NavBar toogleDarkMode={toogleDarkMode} darkMode={darkMode}></NavBar>
    <Box sx={{height:'100vh',
      background: darkMode ? 'radial-gradient(circle,#1e3aBa,#111B27)': 'radial-gradient(circle,#baecf9,f0f9ff)',
      py:6
    }}>
      <Container maxWidth='xl' sx={{mt:8}}>
     <Catalog products={products}/>
    </Container>
    </Box>
    
    </ThemeProvider>
  )
}

export default App
