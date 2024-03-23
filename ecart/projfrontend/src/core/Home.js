import React,{useState,useEffect} from 'react';
import {getProducts} from "./helper/coreapicalls";
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Card from '../components/Card';
import "../assets/styles/Home.css";
import homeimg from "../assets/images/HomeImage.jpg";
import { Link } from 'react-router-dom';


export default function Home() {

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
        <div className="home-intro">
            <img src={homeimg} width={"1550px"}></img>
            <div className='home-description'>
              <p className='home-title'>Elevate Your Every <br/> Hour With Crafted Time</p>
              <p className=''>Crafted for moments that matters. elevate your style with Crafted Time. </p>
              <Link to="all/"><button className='btn btn-light'>Show Now</button></Link>
            </div>
        </div>
        <h2 className='px-5 fw-bold'>Products</h2>  

        <h4 className='px-5 fw-bold' style={{color:"brown"}}>Best Sellers</h4>
        <div className='row ms-4 '>
                {products.slice(0,10).map((product,index)=>{
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
