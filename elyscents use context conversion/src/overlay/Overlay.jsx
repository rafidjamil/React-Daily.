import React, { useEffect, useState } from 'react';
import { Container, Form, Card } from 'react-bootstrap';
import { CiSearch } from "react-icons/ci";
import { IoCloseOutline } from "react-icons/io5";
import { useLocation, useNavigate, Link } from 'react-router-dom'; 


import { useProducts } from '../Productcontext'; 

function SearchModal() {
  const [show, setShow] = useState(false);
  const [searchTerm, setSearchTerm] = useState(''); 
  const [results, setResults] = useState([]); 


  const [debouncingTerm , setDebouncingTerm] = useState(searchTerm);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncingTerm(searchTerm);
    }, 1500); 
    return () => clearTimeout(timer);
  }, [searchTerm]);


  const { allProducts } = useProducts(); 

  useEffect(() => {
    if (debouncingTerm.trim() !== '') {
      
      const filtered = allProducts.filter(item => 
        item.title.toLowerCase().includes(debouncingTerm.toLowerCase())
      );
      setResults(filtered);
    } else {
      setResults([]); 
    }
  }, [debouncingTerm, allProducts]); 

  const location = useLocation();
  const navigate = useNavigate();
  const { hash } = location;

  const handleClose = () => {
    setShow(false);
    navigate(location.pathname + location.search, { replace: true });
  };

  useEffect(() => {
    if (hash === "#search") {
      setShow(true);
    } else {
      setShow(false);
    }
  }, [hash]);

  if (!show) return null;

  return (
    <div className="search-overlay position-fixed top-0 start-0 w-100 h-100 d-flex flex-column align-items-center"
      style={{ backgroundColor: 'rgba(0,0,0,0.9)', zIndex: 9999, paddingTop: '100px' }}
      onClick={handleClose}
    >
      <div className="w-100 px-3 d-flex justify-content-center align-items-center mb-5" style={{ maxWidth: '800px' }} onClick={e => e.stopPropagation()}>
        <div className="bg-white d-flex align-items-center px-3 py-2 w-100 rounded-1">
          <Form.Control
            type="text"
            placeholder="Search our store..."
            className="border-0 shadow-none"
            autoFocus
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <CiSearch size={25} className="mt-1" />
        </div>
        <IoCloseOutline size={35} className="ms-3 text-white" onClick={handleClose} style={{cursor:'pointer'}} />
      </div>

      <div className="w-100" style={{ maxWidth: '800px', maxHeight: '70vh', overflowY: 'auto' }} onClick={e => e.stopPropagation()}>
        {results.length > 0 ? (
          results.map(item => ( 
            <Link to={`/product/${item.id}`} key={item.id} onClick={handleClose} style={{ textDecoration: 'none' }}>
              <Card className="mb-2 p-2 border-0 shadow-sm" style={{cursor:'pointer'}}>
                <div className="d-flex align-items-center">
                  <img src={item.thumbnail} alt="" style={{ width: '50px', height: '50px', objectFit: 'contain' }} />
                  <div className="ms-3 text-dark">
                    <h6 className="mb-0">{item.title}</h6>
                    <small className="text-muted">Rs. {item.price}</small>
                  </div>
                </div>
              </Card>
            </Link>
          ))
        ) : (
          // debouncingTerm use kiya hai takay jab tak user type kar raha ho, tab tak "No products" na likha aaye
          debouncingTerm && <p className="text-white text-center">No products found for "{debouncingTerm}"</p>
        )}
      </div>
    </div>
  );
}

export default SearchModal;