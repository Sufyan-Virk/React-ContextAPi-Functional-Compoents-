import React,{useContext}from 'react';
import ContextApiFile from './ContextApi/ContextApiFile';
function Cart () {
    const context = useContext(ContextApiFile);
       
    const refreshing = (key) => {
        context.removeFromCart(key);
        
    }
    
    
    
        return (
               context.cartItems == false ?
                        (<div>
                            <h1>No Values in cart</h1>
                        </div>)
                        :
                        (<div>
                            <h1>Cart Tag</h1>
                            {context.cartItems.map((data,key) => {
                                return <div key={key} style={{display:'block'}}>
                                    <div style={{ display: 'inline-flex' }} >
                                    <p>{data}</p>
                                    <button onClick={()=>refreshing(key)} style={{margin:'10px'}}>Remove from cart</button>
                                </div>
                                </div>
                            })}
                        </div>)
                
        );
    }


export default Cart;