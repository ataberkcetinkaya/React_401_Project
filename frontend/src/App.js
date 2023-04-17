import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import Home from './pages/Home/Home'
import Products from './pages/Products/Products';
import ProductsDetail from './pages/ProductsDetail/ProductsDetail';
import Profile from './pages/Profile/Profile';

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
            </Routes>
          </div>
          
        </div>
      </Router>
    </>
  );
}

export default App;
