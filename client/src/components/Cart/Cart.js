import React, { useState } from 'react';
import '../../css/Cart/Cart.css'
import CheckOutForm from '../CheckOutForm/CheckOutForm';
function Cart(props) {
    const [showForm,setShowForm]=useState(false);
    const [value,setValue]=useState("");
    const submitOrder=(e)=>{
        e.preventDefault();
        console.log(value);


    }
    const handleChange=(e)=>{
        setValue((prevState)=>({
            ...prevState,[e.target.name]:e.target.value,
            [e.target.name]:e.target.value
        }))
    }
  return <div className='cart-wrapper'>

                <div className='cart-title'>{props.cartItems.length === 0 ? 'Empty Cart' : <p>
                    There is {props.cartItems.length} Product in cart</p>}</div>
                <div className='cart-items'>
                  {props.cartItems.map(item => (
                      
                        <div className='cart-item' key={item.id}>
                            <img src={item.imageUrl} alt={item.title}/>
                            <div className='cart-info'>
                                <div>
                                    <p>Title: {item.title}</p>
                                    <p>QTY : {item.qty}</p>
                                    <p>Price : ${item.price}</p>
                                </div>
                                <button onClick={()=>props.removeFromCart(item)}>Remove</button>
                            </div>
                    </div>
                  ))}
                </div>
                {
                    props.cartItems.length !==0 &&
                        <div className='cart-footer'>
                            <div className='total'>Total Price : $ {props.cartItems.reduce((acc,p)=>{
                                return acc + p.price
                            },0)}</div>
                            <button onClick={()=>setShowForm(true)}>Select Products</button>
                        </div>
                }
                  <CheckOutForm submitOrder={submitOrder} showForm={showForm}
                        handleChange={handleChange} setShowForm={setShowForm} />
  </div>;
}

export default Cart;
