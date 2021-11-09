import React from 'react';
import { useHistory, useLocation } from 'react-router';
import useAuth from '../Hooks/useAuth';
import Navbar from '../navbar/Navbar';
import "./Login.css"
const Login = () => {
    const {signInUsingGoogle,setUser} = useAuth();
    const location = useLocation();
    const redirect = location.state?.from;
    const history = useHistory();
    console.log(history);

    const userLogin =()=>{
        signInUsingGoogle()
        .then(result =>{
            // setUser(result.user);
            history.push(redirect);
        })

    }
    return (
        
        <div className="home">
            
            <Navbar></Navbar>
            <button className="button" onClick={userLogin} >GOOGLE SIGN IN</button>
        </div>
    );
};
export default Login;