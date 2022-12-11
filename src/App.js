import './App.css';
import Login from './pages/login';
import Register from "./pages/register"
import { Routes, Route } from "react-router-dom";
import Home from './pages/home';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "bootstrap-icons/font/bootstrap-icons.css";
import ProductList from './pages/product-list';
import ProductDetail from './pages/product-detail';
import Cart from './pages/cart';
import CartAddress from './pages/cart-address';
import Payment from './pages/payment';
import OrderConfirm from './pages/order-confirm';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/products' element={<ProductList />} />
        <Route path='/products/:productName/:productId' element={<ProductDetail />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/cart-address' element={<CartAddress />} />
        <Route path='/payment' element={<Payment />} />
        <Route path='/order' element={<OrderConfirm />} />
      </Routes>
    </div>
  );
}

export default App;
