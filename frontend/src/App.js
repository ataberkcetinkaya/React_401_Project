import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import Home from './pages/Home/Home'
import Products from './pages/Products/Products';
import ProductsDetail from './pages/ProductsDetail/ProductsDetail';
import Profile from './pages/Profile/Profile';
import Basket from './pages/Basket/Basket';
import Error404 from './pages/Error404/Error404';

function App() {

  return (
    <>
      <Router>
        <div>
          <Navbar></Navbar>

          <div>
            <Routes>
              <Route path="/" exact element={<Home />}></Route>
              <Route path="/products" element={<Products />}></Route>
              <Route path="/product/:product_id" element={<ProductsDetail />}></Route>
              <Route path="/login" element={<Login />}></Route>
              <Route path="/register" element={<Register />}></Route>
              <Route path="/profile" element={<Profile />}></Route>
              <Route path="/cart" element={<Basket />}></Route>
              <Route path="*" element={<Error404 />}></Route>
            </Routes>
          </div>
          
        </div>
      </Router>
    </>
  );
}

export default App;
