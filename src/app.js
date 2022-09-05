import React from "react";
import { useState } from "react";
import AddProduct from "./components/addproduct/AddProduct";
import ProductList from "./components/productList/ProductList";
 const App=()=>{
    const [products , setProducts] = useState([
        {id:1 , title :'شیر پرچرب'},
        {id:2 , title :'ماکارونی 200گرمی'},
        {id: 3 , title: 'رب گوجه فرنگی دلپذیز'}
    ]);
    const deleteProduct =(id)=>{
        setProducts(products.filter((item)=>item.id !==id))
    }
    const addProduct=(title)=>{
const id =Math.floor(Math.random ()*10000)
const newProduct={id , ...title}
setProducts([...products , newProduct])
    }
    return(
        <div className="container">
            <AddProduct onAdd={addProduct}/>
            <ProductList products={products} onDelete={deleteProduct}/>
        </div>
    )
 }
export default App;