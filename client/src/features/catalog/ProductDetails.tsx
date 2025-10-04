import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import type { Product } from "../../app/models/product";
import { Button, Divider, Grid, Table, TableBody, TableCell, TableContainer, TableRow, TextField, Typography } from "@mui/material";


export default function ProductDetails() {
    const {id}=useParams();
    const [product, setProduct]=useState<Product| null>(null);
    useEffect(()=>{
        fetch(`http://localhost:5001/api/products/${id}`)
        .then(response=>response.json())
        .then(data=>setProduct(data))
        .catch(err=>console.log(err));
    },[id])
    if(!product) return <div>Loading...</div>

    const productDetails=[
        {label: 'Name', value:product.name},
        {label: 'Description', value:product.description},
        {label: 'Type', value:product.type},
        {label: 'Brand', value:product.brand},
        {label: 'Quantity in stock', value:product.quantityInStock}
    ]
  return (
    <Grid container spacing={6} maxWidth='lg' sx={{mx:'auto'}}>
        <Grid size={6}>
            <img src={product?.pictureUrl} alt={product.name} style={{width:'100%'}} />
        </Grid>
        <Grid size={6}>
            <Typography variant="h3">{product.name}</Typography>
            <Divider sx={{mb:2}}/>
            <Typography variant="h4" color="secondary">₹{product.price}</Typography>
            <TableContainer>
                <Table sx={{
                    '& td': {fontSize:'1rem'}
                }}>
                    <TableBody>
                        {productDetails.map((details,index)=>{
                            return <TableRow key={index}>
                                <TableCell sx={{fontWeight:'bold'}}>{details.label}</TableCell>
                                <TableCell>{details.value}</TableCell>
                            </TableRow>
                            })}
                        
                    </TableBody>
                </Table>
            </TableContainer>
            <Grid container spacing={2} marginTop={3}>
                <Grid size={6}>
                    <TextField variant="outlined" type="number" label="Quantity in basket" fullWidth defaultValue={1}/>
                </Grid>
                <Grid size={6}>
                    <Button sx={{height:'55px'}} color="primary" size='large' variant="contained" fullWidth>ADD TO BASKET</Button>
                </Grid>
            </Grid>
        </Grid>
    </Grid>
)
}