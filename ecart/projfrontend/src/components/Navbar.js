import React,{Fragment,useState} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { isAuthenticated, signout } from '../auth/helper';
import { getProducts } from '../core/helper/coreapicalls';
import "../assets/styles/Nav.css"


const linkStyle = {
    textDecoration: "none"
  };
  
const  Navbar=()=> {
  const navigate=useNavigate();

  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const handleInputChange = (event) => {
    setSearchQuery(event.target.value);
    searchProducts(event.target.value);
  };

  const searchProducts = (query) => {
   getProducts().then((data) => {
    const matchingProducts = data.filter((product) =>  product.name.toLowerCase().includes(query.toLowerCase())  )
    setSearchResults(matchingProducts);
  })};

  const onsub =()=>{
    setSearchQuery("");
  }
  return (
    <>
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Crafted Time</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link to={"/"} style={linkStyle}><span className="nav-link active" >Home</span></Link>
        </li>
        <li className="nav-item">
          <Link to={"/contact"} style={linkStyle}><span className="nav-link" >Contact</span></Link>
        </li>
        <li className="nav-item">
          <Link to={"/about"} style={linkStyle}><span className="nav-link">About us</span></Link>
        </li>
        <li className="nav-item">
          <Link to={"/all"} style={linkStyle}><span className="nav-link">All Products</span></Link>
        </li>
        {isAuthenticated() && (
          <Fragment>
            <li className="nav-item">
              <Link to={"/user/dashboard"} style={linkStyle}><span className="nav-link " >UserDashboard</span></Link>
            </li>
            <li className="nav-item">
              <Link to={"/cart"} style={linkStyle}><span className="nav-link " >Cart</span></Link>
            </li>
            <li className="nav-item">
              <Link to={"/order"} style={linkStyle}><span className="nav-link " >My Orders</span></Link>
            </li>
            <li className="nav-item">
              <span className="nav-link " onClick={()=>{signout(()=>{navigate("/")})}}>Signout</span>  
            </li>
          </Fragment>
        )}
        {!isAuthenticated() && (
          <Fragment>
            <li className="nav-item">
          <Link to={"/signin"} style={linkStyle}><span className="nav-link active" >Login</span></Link>
        </li>
        <li className="nav-item">
          <Link to={"/signup"} style={linkStyle}><span className="nav-link active">Signup</span></Link>
        </li>
          </Fragment>
        )}
      </ul>
      <form className="d-flex">
      <div className="search-box" >
        <input
          type="text"
          placeholder="Search products..."
          value={searchQuery}
          onChange={handleInputChange}
        />
        {searchQuery && (
          <ul className="search-results">
            {searchResults.map((product) => (
              <li className='list' key={product.id}>
                <Link className='link' to={`/productdetail/${product.id}`} onClick={onsub} >{product.name}</Link>
              </li>
            ))}
          </ul>
        )}
      </div>
      </form>
    </div>
  </div>
</nav>
    </>
  )
}

export default Navbar