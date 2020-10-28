import React, { useContext,useState } from 'react';
import ContextApiFile from './ContextApi/ContextApiFile';
function Items () {
     const context = useContext(ContextApiFile);
    const [NewItem, setNewItem] = useState('');
  
    const updatingState = (e) => {
       setNewItem(e.target.value) ;
      }
      const reload =()=> {
        setNewItem('');
    }
   
    const addingItem =()=>{
        if(NewItem !== '')
        {
            
            context.addNewItem(NewItem);
            reload();
        
        }
        
        
    }
   


    
        return (
               context.items =='' ?
                        (<div>
                            <h1>No Values in Items</h1>
                            <input type="text" name="Adding Items" value={NewItem} onChange={(e) => updatingState(e)} />
                            <button onClick={() => addingItem()} >Add New Item</button>
                        </div>)
                        :
                        (<div  style={{display: 'block', }}>
                            <h1>Items Tag</h1>
                            {context.items.map(( data, key) => {
                                return <div style={{ display:'block'}} key={key} >
                                    <div style={{ display: 'inline-flex' }}>
                                    <p>{data}</p>
                                    <button onClick={()=>context.addToCart(data)} style={{margin:'10px'}}>Add-To-Cart</button>
                                </div>
                                </div>
                            })}

                            <input type="text" name="Adding Items" value={NewItem} onChange={e => updatingState(e)} />
                            <button onClick={() => addingItem()} >Add New Item</button>
                        </div>)
                
            
        );
    };


export default Items;