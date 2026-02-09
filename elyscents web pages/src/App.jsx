// import Container from 'react-bootstrap/Container';

import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";

// import ProductCard from './components/perfumecard';
import MyNavbar from './components/navbar';
import Footer from './components/footer';
import { Routes, Route } from 'react-router-dom'
import Mycataloge from './cataloge';
import Home from './Home';

import ProductPage from './Productpage'
import CartModal from './Addtocart';
import Checkout from './checkout';
import SearchModal from './overlay/Overlay'
// import OpenCartModal from '../helpers/OpenCartModal';
import Login from './Login'
import UserProfile from './UserProfile'
import Beauty from './components/Beauty';

// import BasicExample from './components/perfumecard';


function ColorSchemesExample() {

  return (
    <>
      <p className="top-bar"> BUY ANY TWO PERFUMES AND GET FREE SHIPPING. </p>

      <MyNavbar />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/cataloge' element={<Mycataloge />} />
        <Route path='/product-page' element={<ProductPage />} />
        <Route path='/checkout' element={<Checkout />} />
        <Route path='/login' element={<Login />} />
        <Route path='/user' element={<UserProfile />} />
        <Route path='/collection/:category' element={<Beauty />} />
      </Routes>

      <Footer />

      <CartModal />
      <SearchModal />

    </>
  );
}


export default ColorSchemesExample;