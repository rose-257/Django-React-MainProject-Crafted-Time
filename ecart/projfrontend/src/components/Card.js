import React, { useState } from 'react'
import "../assets/styles/Card.css"
import ImageHelper from '../core/helper/ImageHelper'
import { useNavigate } from 'react-router-dom'
import { addItemToCart , removeItemFromCart} from '../core/helper/cartHelper'
import { isAuthenticated } from '../auth/helper'
import { Link } from 'react-router-dom'

const Card=({product, addtoCart = true, removeFromCart=false, reload=undefined,setReload=(f)=>f})=> {
  const navigate =useNavigate();

  const cartTitle = product?product.name:"Title"
  const cartDescription = product?product.description:"Description"
  const cartPrice = product?product.price:"0.00"

  const addToCart =()=>{
    if (isAuthenticated()){
      addItemToCart(product, ()=>{navigate("/cart");})
      console.log("Added to cart");
    }else{
      navigate("/signin")
      console.log("Login please!")
    }
  }

  const showAddToCart = (addToCart) =>{
    return(
      addtoCart && (
        <button onClick={addToCart} className="btn btn-dark w-100" style={{background:"brown"}}>Add to cart</button>
      )
    )
  }

  const showRemoveFromCart = (removeFromCart)=>{
    return(
      removeFromCart && (
        <button onClick={()=>{
          removeItemFromCart(product.id);
          setReload(!reload);
          console.log("Product removed from cart");
        }} 
        className="btn btn-dark w-100">Remove From Cart</button>
      )
    )
  }

  return (
    <>
    <div className="card mb-3">
    <div className="card-body" style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
    <div style={{ flex: "1", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
        <Link to={`/productdetail/${product.id}`}><ImageHelper product={product}/></Link>
        <h5 className="card-title" style={{ margin: "10px 0", textAlign: "center", overflow: "hidden", textOverflow: "ellipsis", display: "-webkit-box", WebkitLineClamp: "1", WebkitBoxOrient: "vertical" ,lineHeight:"15px"  }}>{cartTitle}</h5>
        <p className="card-text" style={{ margin: "10px 0", textAlign: "center", overflow: "hidden", textOverflow: "ellipsis", display: "-webkit-box", WebkitLineClamp: "3", WebkitBoxOrient: "vertical" ,lineHeight:"15px" }}>{cartDescription}</p>
        <p className="text-muted" style={{ margin: "10px 0", textAlign: "center" }}>RS.{cartPrice}</p>
    </div>
    <div className="row" style={{ width: "100%", justifyContent: "center" }}>
        <div className="" style={{ display: "flex", justifyContent: "center" }}>
            {showAddToCart(addToCart)}
        </div>
        <div className="" style={{ display: "flex", justifyContent: "center" }}>
            {showRemoveFromCart(removeFromCart)}
        </div>
    </div>
</div>


    </div>
    </>
  )
}

export default Card