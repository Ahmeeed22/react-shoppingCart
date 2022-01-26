import React from 'react';
import '../../css/Cart/Cart.css'
function Cart(props) {
    console.log(props.cartItems);
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
  </div>;
}

export default Cart;
