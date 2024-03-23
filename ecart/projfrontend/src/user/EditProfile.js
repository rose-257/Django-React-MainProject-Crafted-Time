import React, { useState, useEffect } from 'react';
import { updateUser } from './helper.js/userapicalls';
import { isAuthenticated } from '../auth/helper';
import { useNavigate } from 'react-router-dom';
import { getUser } from './helper.js/userapicalls';
import "../assets/styles/EditProfile.css"

function EditProfile() {
    const navigate = useNavigate();
    const userId = isAuthenticated && isAuthenticated().user.id;
    const [user ,setUser]=useState([]);
    const [error,setError]=useState(false);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone,setPhone]=useState("")
    const [address, setAddress] = useState("");
    const [gender, setGender] = useState("");
    
    const loadUser=()=>{
        getUser(userId)
        .then((data)=>{
        if(data.error){
            setError(data.error);
            console.log(error);
        } else{
            setUser(data);
            setName(data.name);
            setEmail(data.email)
            setGender(data.gender)
            setAddress(data.address)
            setPhone(data.phone)
        }
        });
    };

    useEffect(()=>{
        loadUser();
    },[]);
    
    const handleUpdate = () => {
        const updatedUserData = { name,email,address,gender,phone}; 
        updateUser(userId, updatedUserData)
            .then((updatedUser) => {
                console.log("User updated successfully:", updatedUser);
                navigate('/user/dashboard')
            })
            .catch((error) => {
                console.error("Failed to update user:", error);
            });  
    };

  return (
    <div className='edit-body'>
        <div className='edit-profile-container'>
      <label className='edit-profile-label'>Name:</label>
      <input type="text" value={name} onChange={(e) => setName(e.target.value)} className='edit-profile-input' />
      <label className='edit-profile-label'>Email:</label>
      <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} className='edit-profile-input' />
      <label className='edit-profile-label'>Phone:</label>
      <input type="text" value={phone} onChange={(e) => setPhone(e.target.value)} className='edit-profile-input' />
      <label className='edit-profile-label'>Address:</label>
      <input type="text" value={address} onChange={(e) => setAddress(e.target.value)} className='edit-profile-input' />
      <label className='edit-profile-label'>Gender</label>
      <input type="text" value={gender} onChange={(e) => setGender(e.target.value)} className='edit-profile-input' />
      <button onClick={handleUpdate} className='edit-profile-button'>Update</button>
    </div>
    </div>
  );
}

export default EditProfile;
