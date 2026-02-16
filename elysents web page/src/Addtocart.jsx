import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { Stack } from 'react-bootstrap';
import './App.css'
import pro1main from "./assets/images/pro1main.jpg"
import pro2main from "./assets/images/pro2main.jpg"
import { Link, useNavigate } from 'react-router-dom'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { HiOutlineShoppingBag } from "react-icons/hi2";
import Carticon from './components/carticon';
import { useLocation } from 'react-router-dom';


function CartModal() {
  const [show, setShow] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const { hash } = location;

  const handleClose = () => {
    setShow(false); 
    navigate(location.pathname + location.search, { replace: true });
  };
  const handleShow = () => setShow(true);
  useEffect(() => {
    const parsedHash = hash.replace('#', '')

    if(parsedHash == "addToCart") {      
      handleShow()
    }

  }, [hash])
  const cartItems = [
    {
      id: 1,
      name: "Zarak Inspired By Azzaro Wanted",
      size: "50 ML",
      price: 1899,
      img: pro1main
    },
    {
      id: 2,
      name: "Salsa Spirit - Inspired By Creed Aventus",
      size: "50 ML",
      price: 1899,
      img: pro2main
    }
  ];
  return (
    <>

      {/* <Button
        variant="dark"
        className="w-100 rounded-0 py-2 text-uppercase"
        style={{ backgroundColor: 'black', border: 'none', fontWeight: '500', letterSpacing: '1px' }}
        onClick={handleShow}
      >
        Add to cart
      </Button> */}
      <Offcanvas
        show={show}
        onHide={handleClose}
        placement="end"
        style={{ width: '400px' }}
      >
        <Offcanvas.Header closeButton className="border-bottom py-4 px-4">
          <Offcanvas.Title className="fw-bold" style={{ letterSpacing: '2px', fontSize: '1.2rem' }}>
            CART
          </Offcanvas.Title>
        </Offcanvas.Header>

        <Offcanvas.Body className="px-4 pt-4">

          {cartItems.map((item) => (
            <div key={cartItems.id} className="d-flex align-items-start">
              <div className="flex-shrink-0 border p-1">
                <img src={item.img} alt={item.name} width="75" height="95" style={{ objectFit: 'cover' }} />
                <div className="flex-grow-1 ms-3">
                  <h6 className="mb-1 fw-bold" style={{ fontSize: '0.85rem', lineHeight: '1.4' }}>{item.name}</h6>
                  <p className="text-muted mb-2" style={{ fontSize: '0.75rem' }}>
                    <strong>Size:</strong> {item.size}
                  </p>
                  <div className="d-flex justify-content-between align-items-center mt-2">
                    <div className="d-flex align-items-center border" style={{ height: '32px' }}>
                      <button className="btn btn-sm border-0 px-2 shadow-none">-</button>
                      <span className="px-2 small">1</span>
                      <button className="btn btn-sm border-0 px-2 shadow-none">+</button>
                    </div>
                    <span className="fw-bold" style={{ fontSize: '0.9rem' }}>Rs.{item.price.toLocaleString()}.00</span>
                  </div>
                </div>
              </div>

            </div>
          ))}

        </Offcanvas.Body>

        <div className="p-4 border-top">
          <div className="d-flex justify-content-between mb-2">
            <span className="text-uppercase fw-bold" style={{ letterSpacing: '1.5px', fontSize: '0.8rem' }}>Subtotal</span>
            <span className="fw-bold">Rs.5,597.00</span>
          </div>
          <p className="text-center text-muted mb-4 px-3" style={{ fontSize: '0.72rem', lineHeight: '1.5' }}>
            Shipping, taxes, and discount codes calculated at checkout.
          </p>
          <Link to="/checkout">
          <Button
          onClick={handleClose}
            variant="dark"
            className="w-100 rounded-0 py-3 fw-bold text-uppercase"
            style={{ backgroundColor: 'black', border: 'none', letterSpacing: '2px', fontSize: '0.9rem' }}
          >
            Check Out
          </Button>
          </Link>
        </div>
      </Offcanvas>
    </>
  );
};





// export default Carticon;
export default CartModal;