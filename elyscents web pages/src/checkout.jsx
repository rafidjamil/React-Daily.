import React from 'react';
import { Container, Row, Col, Form, Button, InputGroup, Badge } from 'react-bootstrap';
import './App.css';
import pro1main from "./assets/images/pro1main.jpg"; 

const Checkout = () => {
  return (
    <Container className="checkout-container py-5">
      <Row className="flex-column-reverse flex-md-row">
       
        <Col md={7} className="pe-md-5 border-end">
          <section className="mb-5">
            <div className="d-flex justify-content-between align-items-center mb-3">
              <h5 className="fw-bold">Contact</h5>
              <a href="#" className="text-dark small text-decoration-underline">Sign in</a>
            </div>
            <Form.Control type="text" placeholder="Email or mobile phone number" className="py-2 mb-2" />
            <Form.Check type="checkbox" label="Email me with news and offers" className="small" />
          </section>

          <section className="mb-5">
            <h5 className="fw-bold mb-3">Delivery</h5>
            <Form.Group className="mb-3">
              <Form.Label className="small text-muted">Country/Region</Form.Label>
              <Form.Select className="py-2">
                <option>Pakistan</option>
              </Form.Select>
            </Form.Group>
            
            <Row className="mb-3">
              <Col><Form.Control placeholder="First name" className="py-2" /></Col>
              <Col><Form.Control placeholder="Last name" className="py-2" /></Col>
            </Row>

            <Form.Control placeholder="Address" className="py-2 mb-3" />
            <Form.Control placeholder="Apartment, suite, etc. (optional)" className="py-2 mb-3" />
            
            <Row className="mb-3">
              <Col><Form.Control placeholder="City" className="py-2" /></Col>
              <Col><Form.Control placeholder="Postal code (optional)" className="py-2" /></Col>
            </Row>

            <Form.Control placeholder="Phone" className="py-2 mb-3" />
            <Form.Check type="checkbox" label="Save this information for next time" className="small" />
          </section>

          <section className="mb-5">
            <h5 className="fw-bold mb-3">Shipping method</h5>
            <div className="border rounded p-3 d-flex justify-content-between bg-light">
              <span>Standard</span>
              <span className="fw-bold">Rs 200.00</span>
            </div>
          </section>

          <section className="mb-5">
            <h5 className="fw-bold mb-1">Payment</h5>
            <p className="text-muted small mb-3">All transactions are secure and encrypted.</p>
            <div className="border rounded">
              <div className="p-3 border-bottom d-flex justify-content-between align-items-center bg-light">
                <span className="fw-bold">Cash on Delivery (COD)</span>
              </div>
              <div className="p-4 text-center text-muted small bg-white">
                -
              </div>
            </div>
          </section>

          <section className="mb-5">
            <h5 className="fw-bold mb-3">Billing address</h5>
            <div className="border rounded">
              <div className="p-3 border-bottom">
                <Form.Check type="radio" name="billing" label="Same as shipping address" defaultChecked />
              </div>
              <div className="p-3">
                <Form.Check type="radio" name="billing" label="Use a different billing address" />
              </div>
            </div>
          </section>

          <Button variant="dark" className="w-100 py-3 fw-bold mb-5 rounded-1">
            Complete order
          </Button>

          <footer className="border-top pt-3 d-flex gap-3 small text-muted">
            <a href="#" className="text-decoration-underline text-muted">Refund policy</a>
            <a href="#" className="text-decoration-underline text-muted">Shipping</a>
            <a href="#" className="text-decoration-underline text-muted">Privacy policy</a>
          </footer>
        </Col>

        {/* RIGHT COLUMN: Order Summary (Sticky) */}
        <Col md={5} className="ps-md-5 py-4 py-md-0 bg-summary shadow-sm">
          <div className="sticky-top pt-2">
            <div className="d-flex align-items-center mb-4">
              <div className="position-relative border rounded p-1 me-3 bg-white">
                <img src={pro1main} alt="Product" width="60" height="60" style={{objectFit: 'cover'}} />
                <Badge bg="secondary" pill className="position-absolute translate-middle top-0 start-100">1</Badge>
              </div>
              <div className="flex-grow-1">
                <h6 className="mb-0 small fw-bold">Zarak Inspired By Azzaro Wanted</h6>
                <small className="text-muted">50 ML</small>
              </div>
              <span className="small fw-bold">Rs 1,899.00</span>
            </div>

            <InputGroup className="mb-4">
              <Form.Control placeholder="Discount code" className="py-2" />
              <Button variant="secondary" className="px-4">Apply</Button>
            </InputGroup>

            <div className="d-flex justify-content-between small mb-2">
              <span>Subtotal</span>
              <span className="fw-bold">Rs 1,899.00</span>
            </div>
            <div className="d-flex justify-content-between small mb-4">
              <span>Shipping ⓘ</span>
              <span className="fw-bold">Rs 200.00</span>
            </div>

            <div className="d-flex justify-content-between align-items-center pt-3 border-top">
              <h5 className="fw-bold">Total</h5>
              <div className="text-end">
                <small className="text-muted me-2">PKR</small>
                <span className="h4 fw-bold">Rs 2,099.00</span>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Checkout;