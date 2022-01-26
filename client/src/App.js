import React ,{useEffect, useState} from 'react'
import Cart from './components/Cart/Cart';
import Filter from './components/Filter/Filter';

import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Products from './components/Products/Products';
import data from './data.json'



function App() {
  const [products,setProducts]=useState(data)
  const [sort,setSort]=useState("");
  const [size,setSize]=useState("");
  const [cartItems,setcartItems]=useState(JSON.parse(localStorage.getItem('cartItems'))||[])

  const handleFilterBySize=(e)=>{
    setSize(e.target.value)
    if(e.target.value === "ALL"){
        setProducts(data)
    }else{
      let productsClone=[...products];
      let newProducts= productsClone.filter(p=>p.sizes.indexOf(e.target.value) != -1)
      setProducts(newProducts)
    }
   
  }

  const handelFilterByOrder=(e)=>{
    let order=e.target.value
    setSort(order)
    let productsClone=[...products];
    let newProducts=productsClone.sort(function(a,b){
      if(order == "lowest"){
        return a.price - b.price
      }else if(order == "highest"){
        return b.price - a.price
      }else{
        return a.id < b.id ?1 :-1
      }
    })
    setProducts(newProducts)
   
  }
  const addToCart=(product)=>{
    const cartItemsClone=[...cartItems];
    let isProductExist=false;
    cartItemsClone.forEach(p=>{
      if(p.id === product.id){
        p.qty +=1;
        isProductExist =true
       
      }
    })
    if(!isProductExist){
      cartItemsClone.push({...product,qty:1})
      
    }
    setcartItems(cartItemsClone)
  }
  const removeFromCart=(product)=>{
    const cartItemsClone=[...cartItems];
    setcartItems(cartItemsClone.filter(p => p.id !== product.id))
  }

  useEffect(()=>{
    localStorage.setItem('cartItems',JSON.stringify(cartItems))
  },[cartItems])



  return (
    <div className="layout">
        <Header />
           
            <main>
              <div className="wrapper">
                <Products products={products} addToCart={addToCart}/>
                <Filter handleFilterBySize={handleFilterBySize} size={size}
                handelFilterByOrder={handelFilterByOrder} sort={sort}
                productsNo={products.length}
               />
              </div>
              <Cart  cartItems={cartItems} removeFromCart={removeFromCart}/>
              <Footer  />
            </main>
           {/* <Footer /> */}

   
       
    </div>
  );
}

export default App;
