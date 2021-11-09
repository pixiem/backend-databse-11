import React from 'react';
import{
    Route,
  
    Redirect,
   
} from "react-router-dom";
import useAuth from '../components/Hooks/useAuth';

const PrivateRoute = ({children,...rest}) => {
    const {user,isLoading}= useAuth();
    if(isLoading){
        return <div class="spinner-border" role="status">
        <span class="visually-hidden">Loading...</span>
      </div>
    }
    return <Route 
    {...rest}
    render={({location})=> user? (children):(<Redirect
         to={{
             pathname:"/login",
             state: {from : location}
         }}
         
         />)
    }/>;
    
};

export default PrivateRoute;