import React from 'react';
import { useEffect, useState } from 'react';

import { Container, Form } from 'react-bootstrap';
import { CiSearch } from "react-icons/ci";
import { IoCloseOutline } from "react-icons/io5";
import { useLocation, useNavigate } from 'react-router-dom';


function SearchModal() {
  const [show, setShow] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const { hash } = location;
  
  const handleShow = () => setShow(true);
  const handleClose = () => {
    setShow(false);
    navigate(location.pathname + location.search, { replace: true });
  };



  useEffect(() => {
    const parsedHash = hash.replace('#', '')

    if (parsedHash == "search") {
      handleShow()
    }

  }, [hash])
  if (!show) return null;

  return (
    <div className="search-overlay animate__animated animate__fadeInDown">
      <Container fluid className="h-100 d-flex align-items-center justify-content-center position-relative">


        <div className="search-bar-container d-flex align-items-center bg-white border">
          <Form.Control
            type="text"
            placeholder="Search"
            className="border-0 shadow-none px-3 py-2"
            autoFocus
          />
          <CiSearch size={25} className="mx-2 text-muted" />
        </div>


        <IoCloseOutline
          onClick={handleClose}
          size={35}
          className="search-close-icon"

        />

      </Container>
    </div>
  );
};

export default SearchModal;