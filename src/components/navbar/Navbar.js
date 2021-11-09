import React from 'react';
import "./Navbar.css"
import useAuth from '../Hooks/useAuth';
import { Link } from 'react-router-dom';
const Navbar = () => {
    const {user,logout} = useAuth();
    return (
        <div>
            <div className="navb" >
          <div className="row">
            <div className="col col-one">
              <div className="p-3">
                <img width="100px" src="/kisspng-2019-tour-de-france-business-giro-d-italia-linkedi-tour-de-france-2018-stages-5b4b4a5158e360.4577634015316608813641.png" alt="" />
              </div>
            </div>
            <div className="col">
              <div className="p-3">
                <ul>
                  <li > <a href="/home">HOME</a> </li>
                  <li>PACKEGE</li>
                  <li>PAGES</li>
                  <li>CONTACT</li>
                </ul>
              </div>
            </div>
            <div className="col">
              
                {
                    user && <div className="userInfo" >

                    <h6>{user.displayName}</h6>
                    <span>{user.email}</span>
                    </div>
                }
              
            </div>
            <div className="col third">
              <div className="p-3">
                {
                  user?
                <a  className="bn39">
                <span onClick={logout} className="bn39span"
                >LOGOUT</span>
            </a>
                :
                <a className="bn39"  href="/login">
                  <span className="bn39span" >LOGIN</span>
                </a>
                
                }
              </div>
            </div>
            <div className="col order">
              {
                user && <Link className="order-button" to="/myorder"> ORDERS</Link>
              }
            </div>
          </div>


        </div>
        </div>
    );
};

export default Navbar;