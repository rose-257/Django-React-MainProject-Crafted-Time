import React,{useState,useEffect} from 'react';
import {getProducts} from "./helper/coreapicalls";
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Card from '../components/Card';

export default function AllProducts() {

  const [products ,setProducts]=useState([]);
  const [error,setError]=useState(false);

  const loadAllProducts=()=>{
    getProducts()
    .then((data)=>{
      if(data.error){
        setError(data.error);
        console.log(error);
      } else{
        setProducts(data);
      }
    });
  };

  useEffect(()=>{
    loadAllProducts();
  },[]);
  return (
    <div>
        <Navbar/>
        <h2 className='px-5 fw-bold'>All Products</h2>
        <div className='row ms-4 '>
                {products.map((product,index)=>{
                  return(
                    <div key={index} className='col-2 me-5 mb-4'>
                        <Card product={product}/>
                    </div>
                  )
                })}
        </div>
        <Footer/>         
    </div>
  );
}
