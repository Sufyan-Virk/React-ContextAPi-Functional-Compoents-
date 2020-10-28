import React, {useState } from 'react';
import Items from './Items';
import Cart from './Cart';
import ContextApiFile from './ContextApi/ContextApiFile';
function Home () {

    const [itemsArray, setItemsArray] = useState([]);
        const [cartArray , setCartArray] = useState([]);
       const [view , setView] =useState(false);
    
   const changeItemView = () => {

        setView(true);

    };
    const changeCartView = () => {

        setView(false);

    };
    const removeFromCart = (key) => {
        let cart = [...cartArray];
        cart.splice(key,1);

        setCartArray(cart);
    };
    const addNewItem = (data) => {
        
        setItemsArray(itemsArray.concat(data));
        
    };
    const addToCart = (data) => {
        
        setCartArray(cartArray.concat(data))
    };

    

        return (
            <ContextApiFile.Provider value={{ addNewItem:(data)=> addNewItem(data), addToCart:(data)=> addToCart(data), removeFromCart: (data)=> removeFromCart(data), cartItems: cartArray, items: itemsArray }}>
                <div>
                    <button onClick={()=>changeItemView()}>Cart</button>
                    <button onClick={()=>changeCartView()}>Items</button>
                    {view ? <Cart /> : <Items />
                    }                   {/* {dataView}*/}
                </div>
            </ContextApiFile.Provider>
        );
    }


export default Home;