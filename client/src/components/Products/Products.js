import React ,{useState} from 'react'
import '../../css/Products/Products.css'
import ProductModel from '../ProductModel/ProductModel';


 function Products(props) {
     const [product,setProduct]=useState("");
     const openModal=(product)=>{
        setProduct(product)
     }
     const closeModal=()=>{
         setProduct(false)
     }
  
    return (
        
             <div className="productsEl">{props.products.map(product=>(
                <div className='products-item'  key={product.id}>
               
                  
                           <a href="#" onClick={()=>openModal(product)}> <img  src={product.imageUrl} alt={product.title}/></a>
                            <div className='product-desc'>
                                <p>{product.title}</p>
                                <span>${product.price}</span>
                                
                            </div>
                            <button onClick={()=>props.addToCart(product)}>Add To Cart</button>

             
                </div>
           
        ))}
            

            <ProductModel product={product}  closeModal={closeModal}/>
        </div>
        
       

    )
}
export default Products;
