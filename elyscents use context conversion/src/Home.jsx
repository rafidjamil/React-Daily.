import React from 'react'
import Container from 'react-bootstrap/Container';

import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";

import ProductCard from './components/perfumecard';


import pro1main from './assets/images/pro1main.jpg';
import pro1hover from './assets/images/pro1hover.jpg';
import pro2main from './assets/images/pro2main.jpg';
import pro2hover from './assets/images/pro2hover.jpg';
import pro3main from './assets/images/pro3main.jpg';
import pro3hover from './assets/images/pro3hover.jpg';
import pro4main from './assets/images/pro4main.jpg';
import pro4hover from './assets/images/pro4hover.jpg';
import royaloudmain from './assets/images/royal-oud-img.jpg'
import royaloudhover from './assets/images/royal-oud.jpg'
import { ProductCards } from './Fetchapitesting/fetchapi';


const Home = () => {
    return (
        <>




            <div className='hero-img'>
                <img src='https://elyscents.pk/cdn/shop/files/facebook_cover_3.jpg?v=1766830584&width=1920' alt="hero" />
            </div>
            <div className="newyear-banner">
                <Container>
                    <p>🎉 NEW YEAR SPECIAL: BUY 1 GET 2ND AT HALF PRICE 🎉</p>
                    <p className='p1'>
                        Limited time — <strong>Dec 27 to 3rd Jan.</strong> Don’t miss the New
                        Year Deal! 💥
                    </p>
                </Container>
            </div>

            <div className='main-container'>
                <p className='title'>Top Selling Perfumes</p>
                <div className='productcards'>
                    {/* <ProductCard Mainimg={royaloudmain} Hoverimg={royaloudhover} beforePrice={"2000"} price={2000 - 200} />
                    <ProductCard Mainimg={pro2main} Hoverimg={pro2hover} beforePrice={"1500"} price={1500 - 200} />
                    <ProductCard  Mainimg={pro3main} Hoverimg={pro3hover} beforePrice={"1800"} price={1800 - 200} />
                    <ProductCard Mainimg={pro4main} Hoverimg={pro4hover} beforePrice={"2000"} price={2000 - 200} /> */}
                     <ProductCards/>
                   
                </div>
            </div>
            <div className='viewbutton'>
                <button>View All</button>
            </div>
            
        </>
    )
}

export default Home