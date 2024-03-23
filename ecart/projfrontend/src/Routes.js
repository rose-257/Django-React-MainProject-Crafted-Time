import React from "react"
import { BrowserRouter, Routes, Route ,Navigate} from "react-router-dom"
import Home from "./core/Home"
import AllProducts from "./core/AllProducts"
import Aboutus from "./core/Aboutus"
import Contact from "./core/Contact"
import Signup from "./user/Signup"
import Signin from "./user/Signin"
import PrivateRoutes from "./auth/helper/PrivateRoutes"
import UserDashboard from "./user/UserDashboard"
import { isAuthenticated } from "./auth/helper"
import Cart from "./core/Cart"
import ProductDetail from "./core/ProductDetail"
import EditProfile from "./user/EditProfile"
import Order from "./core/Order"

const Rout = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/all" element={<AllProducts/>} />
                <Route path="/about" element={<Aboutus />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/signin" element={<Signin />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/edit" element={<EditProfile />} />
                <Route path="/order" element={<Order />} />
                <Route path="/productdetail/:productId" element={<ProductDetail  />} />
                {/* <PrivateRoutes element={UserDashboard} /> */}
                <Route path="/user/dashboard" element={isAuthenticated() ? <UserDashboard /> : <Navigate to="/signin"/>}/>
                <Route path="/cart" element={isAuthenticated() ? <Cart /> : <Navigate to="/signin"/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default Rout;
