import React, { useEffect, useState } from 'react';

import Navbar from '../navbar/Navbar';
import "./Myorder.css"

const Myorder = () => {
    const [orders, setOrders] = useState([]);

    const [isDeleted, setIsDeleted] = useState(null);
    useEffect(()=>{
        fetch('https://shielded-ocean-47597.herokuapp.com/myorder')
        .then(res=>res.json())
        .then(data=>setOrders(data));
    },[isDeleted]);
    const handleDelete = id =>{
        const url = `https://shielded-ocean-47597.herokuapp.com/deleteOrder/${id}`;
        fetch(url,{
            method:"DELETE",
            headers:{"content-type": "application/json"}
        })
        .then(res => res.json())
        .then(data =>{
            if(data.deletedCount){
                alert("Deleted")
                const remaining = orders.filter(order => order._id !== id);
                setOrders(remaining);
            }
            
        })
    }
    return (
        <div className="all">
            <Navbar></Navbar>
            {orders.map(order=> 
            <div><div className="row all-order">
            <div className="col"> <img width="150px" height="100px" src={order.img} alt="" /> </div>
            <div className="col "> 
            <div className="placename">PLACENAME</div>
            <div className="price"><h4>{order.name}</h4></div>    
            </div>
            <div className="col "> 
            <div className="placename">PRICE</div>
            <div className="price"><h4>{order.price}</h4></div>    
            </div>
            <div className="col"> 
            <div><button className="cancel-button" onClick={()=>{handleDelete(order._id)}}>REMOVE </button></div>
                
            </div>
          
            
        </div> </div>
                 )}
            
        </div>
    );
};

export default Myorder;