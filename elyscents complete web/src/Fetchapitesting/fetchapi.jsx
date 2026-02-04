import React, { useEffect, useState } from 'react'
import { useNavigate } from "react-router-dom";
import OpenCartModal from "../helpers/OpenCartModal";
import { Card, Button, Badge } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import '../App.css'


export const ProductCards = () => {
  const addToCartNow = OpenCartModal();
  const navigate = useNavigate();

  const API_URL = "https://dummyjson.com/products";
  const [products, setProducts] = useState([]);

  const getAllProduct = async () => {
    try {
      const res = await fetch(API_URL);
      const json = await res.json();
      setProducts(json.products); 
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllProduct();
  }, []);

  return (
        <div  style={{display:'flex',flexWrap:'wrap', justifyContent:'center',gap:'50px' }}>
    <>
      {products.map((t, i) => (  
        <Card
          key={t.id}
          style={{ width: '18rem', border: 'none'  }}
          className="text-center product-card-container"
        >
          <div className="position-relative overflow-hidden">
            <Badge
              bg="dark"
              className="position-absolute end-0 m-2 rounded-0 px-3 py-2"
              style={{ zIndex: 10 }}
            >
              Sale
            </Badge>

            <div
              className="image-wrapper"
              style={{ position: 'relative', height: '350px' }}
              onClick={() => navigate(`/product/${t.id}`)}
            >
              <img
                src={t.thumbnail}    
                alt={t.title}
                className="img-fluid p-3 main-img"
                style={{
                //  objectFit:'cover',
                  width: '100%',
                  height: '100%',
                  objectFit: 'contain'
                }}
              />
            </div>
          </div>

          <Card.Body className="d-flex flex-column align-items-center">
            <Card.Title>{t.title}</Card.Title>

            <div className="mb-3">
              <span className="fw-normal">
                Rs. {t.price}
              </span>
            </div>

            <Button
              variant="dark"
              className="w-100"
              onClick={() => addToCartNow()}
            >
              Add to cart
            </Button>
          </Card.Body>
        </Card>
      ))}
    </>
      </div>
  );
};

