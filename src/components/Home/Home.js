import React, { useEffect, useState } from 'react'
import Card from '../card/Card';
import Footer from '../Footer/Footer';
import Navbar from '../navbar/Navbar';
import "./Home.css"

const Home = () => {
    const [places, setPlace] = useState([]);
    useEffect(()=>{
        fetch('https://shielded-ocean-47597.herokuapp.com/products')
        .then(res=>res.json())
        .then(data=>setPlace(data));
    },[]);
    return (<>
      
      <section className="section-One" >
        <Navbar></Navbar>
        <div className="section-one-bottom">
          <span>PLAN A TRIP TO SANTORINI VILLAGE</span>
          <h1 className="special-font">World Tour Club</h1>
        </div>
      </section>
      <div className="section-two">
            <div className="card-header" >
                <h1>Our Famous Tour</h1>

            </div>
            <div className="card-operation ">
            {
                places.map(place => <Card
                  place={place}>

                </Card> )
            }
            </div>
            </div>
            <section className="section-three">
                <div>
                    <img src="./xabout.png.pagespeed.ic.ZsrvwBYE3S.webp" alt="" />
                </div>
                <div className="section-three-right">
                    <h1>Get ready for real time adventure</h1>
                    <h3>Let’s start your journey with us, your dream will come true. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam quis nostrud exercitation.</h3>
                    <button>BOOK YOUR DESTINATION</button>
                </div>
            </section>
            <section className="section-four">
            <div className="section-three-right">
                    <h1>Get Ready for Real time Adventure</h1>
                    <h3>Let’s start your journey with us, your dream will come true. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam quis nostrud exercitation.</h3>
                    <button>BOOK TRIP</button>
                </div>
                <div>
                    <img width="300px" src="./xcta-img.png.pagespeed.ic.sl-GdnkD-r.webp" alt="" />
                </div>
        </section>
        </>
    );};  
   

export default Home;