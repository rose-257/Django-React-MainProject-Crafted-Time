import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import { useParams } from 'react-router-dom';
import { API } from '../backend';
import { useNavigate } from 'react-router-dom';
import { addItemToCart } from '../core/helper/cartHelper'
import { isAuthenticated } from '../auth/helper'
import { fetchProduct } from './helper/coreapicalls';

function ProductDetail(addtoCart = true) {
    const navigate =useNavigate();
    const { productId } = useParams();
    const [product, setProduct] = useState(null);


    const fetchSingleProduct =  () => {
      fetchProduct(productId)
      .then((response)=>{
        if(response.error){
          console.log("error loading product")
        }else{
          setProduct(response);
        }
      })
      .catch(e=>console.log(e))
    }

    useEffect(() => {
      fetchSingleProduct();
    }, [productId]);


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

    if (!product) {
        return <div>Loading...</div>; 
    }

    return (
        <>
        <Navbar/>
        <div className="container-fluid">
      <div className="row mt-5">
        <div className="col-lg-6 d-flex flex-column justify-content-center">
          <p className="heading">{product.name}</p>
          <p className="text-muted"> <i>{product.description}</i></p>
          <p id="price">
            <b className='text-muted'>Rs.{product.price}.00</b>
          </p>
          <div className="d-flex align-items-center">
          {showAddToCart(addToCart)}
          </div>
        </div>
        <div className="col-lg-6">
          <div className="text-center big-img">
            <img
              src={product.image}
              height="50%"
              width="50%"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
    
    
        </>
    );
}

export default ProductDetail;
