import React from 'react';
import '../../css/CheckOutForm/CheckOutForm.css'
import Input from '../input/Input';
function CheckOutForm(props) {
  return <>
         {props.showForm &&  <div className='checkoutform'>
                        <span className='close-icon' onClick={()=>props.setShowForm(false)}>&times;</span>
                        <form onSubmit={props.submitOrder}>
                        <Input type='text' 
                                label="Name"
                                name="name" 
                                onChange={props.handleChange}
                            />    
                           <Input type='email' 
                                label="Email"
                                name="email"
                                onChange={props.handleChange}
                            />   
                            <div>
                                <button type='submit'>CheckOut</button>
                            </div>                            
                        </form>
                    </div> }
  </>;
}

export default CheckOutForm;
