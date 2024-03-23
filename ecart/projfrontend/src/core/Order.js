import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import { getOrder } from './helper/orderHelper';
import { isAuthenticated } from '../auth/helper';
import '../assets/styles/Order.css';

function Order() {
    const UserId = isAuthenticated && isAuthenticated().user.id;

    const [error, setError] = useState(false);
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        const loadOrder = async () => {
            try {
                const data = await getOrder();
                if (data.error) {
                    setError(data.error);
                    console.log(data.error);
                } else {
                    const userOrders = data.filter(order => {
                        // Extract user ID from the order URL
                        const userIdFromUrl = order.user.match(/\/api\/user\/(\d+)\/$/);
                        if (userIdFromUrl) {
                            // Compare extracted user ID with the authenticated user's ID
                            return userIdFromUrl[1] === UserId.toString();
                        }
                        return false; // Return false if user ID couldn't be extracted from the URL
                    });
                    setOrders(userOrders);
                }
            } catch (error) {
                setError(error.message);
                console.error('Error loading orders:', error);
            }
        };

        loadOrder();
    }, [UserId]); 

    return (
        <>
            <Navbar />
            <div className='O-container'> 
                <h1 className=''>My Orders</h1>
                {orders.map((order, orderIndex) => (
                    <div key={orderIndex} className='order-container'> 
                        <p>Order {orderIndex + 1}</p>
                        <div className='order-details'> 
                            <ul>
                                {order.product_names.split(',').map((productName, productIndex) => (
                                    <li key={productIndex}>{productName.trim()}</li>
                                ))}
                            </ul>
                            <p>Total Products: {order.total_products}</p>
                            <p>Total Amount: {order.total_amount}</p>
                            <p>Order Placed on: {order.created_at}</p>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
}

export default Order;
