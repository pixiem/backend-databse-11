import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { useForm } from "react-hook-form";
import axios from 'axios';
import "./Placeorder.css"
import Navbar from '../navbar/Navbar';



const Placeorder = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);

    const {serviceId} =  useParams();
    const [user, setUser] = useState({});
    


    useEffect(()=>{
        fetch(`https://shielded-ocean-47597.herokuapp.com/products/${serviceId}`, {
            headers : { 
              'Content-Type': 'application/json',
              'Accept': 'application/json'
             }
      
          })
        .then(res => res.json())
        .then(data => setUser(data))
    })
   const submit = e =>{
      axios.post('https://shielded-ocean-47597.herokuapp.com/myorder', user)
      .then(res=> console.log(res))
       e.preventDefault();
       alert('Added To Order List')
    }
     

  
    return (
        <div>
            <Navbar></Navbar>
            <img width="200px" height="200px" src={user.img}/>
            <h1>Place Your Order Here{user.name}</h1>
            <h5>price{user.price}</h5>
            <div>
                <form>
          
            <button type="submit" onClick={submit} className="hi" >PLACE ORDER</button>
           </form>
            
            </div>
        </div>
    );
};

export default Placeorder;