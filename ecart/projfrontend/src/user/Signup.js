import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import "../assets/styles/Signup.css"
import { Link } from 'react-router-dom'
import { signup } from '../auth/helper'


function Signup() {
    
    const[values,setValues]=useState({name:"",email:"",password:"",error:"",success:false,});
    const {name,email,password,error,success}=values;

    const handleChange=(name)=>(event)=>{
        setValues({...values,error:false,[name]:event.target.value});
    }

    const onSubmit=(event)=>{
        event.preventDefault();
        setValues({...values,error:false})
        
        if (!/^[a-zA-Z]+$/.test(name) || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || password.length < 3) {
            setValues({
                ...values,
                error: true,
                success: false
            });
        }else{
            signup({name,email,password})
        .then((data)=>{
            console.log("DATA",data); 
            if(data.email === email ){
                setValues({
                    ...values, name:"",email:"",password:"",error:"",success:true
                })
            }else{
                setValues({
                    ...values,error:true,success:false
                })
            }
        })
        .catch(e =>console.log(e))
        }
    }

    const successMessage =()=>{
        return(
            <div className='row'>
                <div className='col-md-6 offset-sm-3 text-left'>
                    <div className='alert alert-success' style={{display:success?"":"none"}}>
                        New account created successfully. Please login now.
                    </div>
                </div>
            </div>
        )
    }

    const errorMessage =()=>{
        return(
            <div className='row'>
                <div className='col-md-6 offset-sm-3 text-left'>
                    <div className='alert alert-danger' style={{display:error?"":"none"}}>
                        Check all fields again
                    </div>
                </div>
            </div>
        )
    }

   

   
  return (
    <>
        <Navbar/>
         {successMessage()}
         {errorMessage()}
         <div className='row mx-5' style={{marginTop:"100px"}}>
            <div className='col-6'>
            <img src="https://img.freepik.com/free-photo/man-is-looking-watch-his-wrist_8353-11434.jpg"/>
            </div>
            <div className='col-6 d-flex flex-column justify-content-center'>
                <div >
                    <form>
                        <h3>SIGN UP</h3>
                        <div className='form-group'>
                            <label className=''>Name</label>
                            <input className='form-control' value={name} onChange={handleChange("name")} type='text' />
                        </div>
                        <div className='form-group'>
                            <label className=''>Email</label>
                            <input className='form-control' value={email} onChange={handleChange("email")} type='text' />
                        </div>
                        <div className='form-group'>
                            <label className=''>Password</label>
                            <input className='form-control' value={password} onChange={handleChange("password")} type='password' />
                        </div>
                        <div className='text-center  mt-4'>
                        <button onClick={onSubmit} className='btn btn-dark '>Submit</button>
                        </div>
                    </form>
                </div>
            </div>
         </div>
    </>
  )
}

export default Signup