import React,{useState,useEffect} from "react";
import Navbar from '../components/Navbar'
import { isAuthenticated } from '../auth/helper';
import { getUser } from "./helper.js/userapicalls";
import { Link } from "react-router-dom";

const UserDashboard=()=> {
  const userId = isAuthenticated && isAuthenticated().user.id;
  const [user ,setUser]=useState([]);
  const [error,setError]=useState(false);

  const loadUser=()=>{
    getUser(userId)
    .then((data)=>{
      if(data.error){
        setError(data.error);
        console.log(error);
      } else{
        setUser(data);
      }
    });
  };

  useEffect(()=>{
    loadUser();
  },[]);
  return (
    <>
    <Navbar />
    <div className="row mx-5 mt-5">
        <div className="col-6 " style={{paddingLeft:"180px"}}>
          <h2 className=" mb-4">User Dashboard</h2>
          <div className="card mb-4">
            <div className="card-body">
              <h5 className="card-title">Welcome, {user.name}</h5>
              <Link to="/edit"><i className="fa fa-edit">Edit</i></Link>
            </div>
          </div>
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Account Information</h5>
              <ul className="list-group list-group-flush">
                <li className="list-group-item">
                  <strong>Name:</strong> {user.name}
                </li>
                <li className="list-group-item">
                  <strong>Email:</strong> {user.email}
                </li>
                <li className="list-group-item">
                  <strong>Phone:</strong> {user.phone}
                </li>
                <li className="list-group-item">
                  <strong>Gender:</strong> {user.gender}
                </li>
                <li className="list-group-item">
                  <strong>Address:</strong> {user.address}
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col-6">
            <img src="https://images.unsplash.com/photo-1508057198894-247b23fe5ade?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8d2F0Y2hlc3xlbnwwfHwwfHx8MA%3D%3D" style={{width:"100%"}}/>
        </div>
    </div>
  </>
  )
}

export default UserDashboard