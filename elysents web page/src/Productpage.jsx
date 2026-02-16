import React from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import proimg1 from './assets/images/pro1main.jpg'
import proimg2 from './assets/images/pro1hover.jpg'


import { useNavigate } from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';


import OpenCartModal from "./helpers/OpenCartModal";

export const Productpageaddtocart = (props) => {
    return (
        <>
         
            <button onClick={props.addToCartNow} className="btn btn-outline-dark rounded-0 py-3 fw-bold">ADD TO CART</button>
        </>
    )
}

const Productpage = () => {
     const navigate = useNavigate();

      const addToCartNow = OpenCartModal();
 return (
    <div className="container mt-5">
      <div className="row">

        <div className="col-md-7 d-flex">
          <div className="thumbnails d-flex flex-column me-3">
            {/* <img className="img-thumbnail mb-2" alt="thumb" /> */}
            <img src={proimg2} className="img-thumbnail mb-2" alt="thumb" />
            {/* <img src="thumb3.jpg" className="img-thumbnail mb-2" alt="thumb" />
            <img src="thumb4.jpg" className="img-thumbnail mb-2" alt="thumb" /> */}
          </div>
          <div className="main-product-image text-center w-100">
            <img  src={proimg1} className="img-fluid" alt="Zarak" />
         
          </div>
        </div>

       
        <div className="col-md-5">
          <h1 className="h3 fw-bold">ZARAK INSPIRED BY AZZARO WANTED</h1>
          
          <div className="mb-2">
            <span className="text-dark">★★★★★</span>
            <small className="ms-2 text-muted">8 reviews</small>
          </div>

          <div className="price-area mb-3">
            <span className="text-decoration-line-through text-muted me-2">Rs.2,000.00</span>
            <span className="fw-bold h5">Rs.1,899.00</span>
            <span className="ms-2 text-danger small">Save Rs.101.00</span>
          </div>

          <div className="promo-banner p-3 mb-4">
            <p className="mb-0 small">
              🚚 <strong>Buy Any 2 Perfumes</strong> & Get <strong>FREE Delivery</strong> — Automatically Applied at Checkout.
            </p>
          </div>

          <div className="mb-4">
            <label className="d-block small fw-bold mb-2">SIZE</label>
            <button className="btn btn-outline-dark rounded-0 px-4">50 ML</button>
          </div>

          <div className="perks-list small mb-4">
            <div className="mb-2">🎁 FREE gift packing with every order</div>
            <div className="mb-2">🌐 14 Days easy return</div>
            <div className="text-success">● In stock, ready to ship</div>
          </div>

          <div className="d-grid gap-2 mb-4">
            <Productpageaddtocart addToCartNow={addToCartNow}/>
             {/* <button onClick={props.addToCartNow} className="btn btn-outline-dark rounded-0 py-3 fw-bold">ADD TO CART</button> */}
            <button className="btn btn-danger rounded-0 py-3 fw-bold"  onClick={() => navigate("/checkout")}>BUY IT NOW</button>
          </div>

          <div className="border-top">
            <div className="d-flex justify-content-between py-3 border-bottom small tracking-tight pointer">
              SHIPPING INFORMATION <span>⌵</span>
            </div>
            <div className="d-flex justify-content-between py-3 border-bottom small tracking-tight pointer">
              ASK A QUESTION <span>⌵</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};


export default Productpage