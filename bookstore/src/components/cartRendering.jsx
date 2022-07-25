import React from 'react'
import { useEffect,useState } from 'react';
import Mycart from '../pages/mycart';
import { getCartItem } from '../services/dataServices';



function CartRendering() {
    const [cartItems, setCartItems]=useState([])

    // useEffect(()=>{

    //     // let bookObj = {_id:[id]}

    //     getCartItem()
    //     .then((response) => {
    //         console.log(response.data.result);
    //         // localStorage.setItem('token', response.data.result._id);
    //          setCartItems(response.data.result)
    //     })
    //     .catch((err) => console.log(err))
    // },[])

  return (
      <div>
          
      </div>
    // <div style={{width:'50vw',height:'50vh', border:'1px solid red'}}>
    //     {
    //         cartItems.map((card)=>(<Mycart cards={card}/> ))
    //     }
    // </div>
  )
}

export default CartRendering