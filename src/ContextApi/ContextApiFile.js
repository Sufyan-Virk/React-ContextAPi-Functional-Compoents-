import React from 'react';

const cartContext= React.createContext({
        addToCart:()=>{},
        removeFromCart:()=>{},
        addNewItem:()=>{},
        cartItems:false,
        items:null,      
});

export default cartContext;