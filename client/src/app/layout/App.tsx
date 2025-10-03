import { useEffect, useState } from "react"
import type { Product } from "../models/product";


function App() {
  const [products, setProducts]= useState<Product[]>([]);

  useEffect(()=>{
    fetch('http://localhost:5001/api/products')
    .then(response=>response.json())
    .then(data=>setProducts(data))
  },[]);

const addProduct=()=>{
  setProducts(prevState=>[...prevState,
    {
      id: prevState.length+1,
      name: "product" + (prevState.length + 1),
      price: (100.00 * (prevState.length + 1)),
      quantityInStock:100,
      description:'test',
      pictureUrl:'https://picsum.photo/200',
      type:'test',
      brand:'test'
  }]);
  }
  return (
    <div>
     <h1 style={{color:"red"}}>ReStore</h1>
     <ul>
      {products.map((item, index)=>{
        return <li key={index}>{item.name} - {item.price}</li>
      })}
     </ul>
     <button onClick={addProduct}>Add Product</button>
    </div>
  )
}

export default App
