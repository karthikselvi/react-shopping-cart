import { useState } from 'react'
//import './App.css'
import Navubar from './Navubar'
import Amazon from './Amazon';
import Cart from './Cart';

function App() {
  const [show,setshow]=useState(true);
  const [cart,setcart]=useState([]);
  const handleClick=(item)=>{
    
   let isPresnt=false;
  
    cart.forEach((product)=>{

      if(item.id===product.id){
      isPresnt=true;
        
     }
    })
    if(isPresnt)
     return ;
      setcart([...cart,item])
    
  }

  return (
<div>
  <Navubar size={cart.length}/>
  <Amazon handleClick={handleClick}/>
  <Cart cart={cart} setcart={setcart}/>
</div>  )
}

export default App
