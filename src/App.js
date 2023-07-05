import './App.css';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from './components/Home';
/* import Shop from './components/Shop'; */
import SecretShop from './components/SecretShop';

function App() {
  return (
    <div className='app'>
      <nav className='nav-menu'>
        <ul className='nav-list'>
          <li>
            <Link className='nav-link' to={'/'}>Home</Link>
          </li>
          {/* <li>
            <Link className='nav-link' to={'/shop'}>Shop</Link>
          </li> */}
          <li>
            <Link className='nav-link' to={'/secretshop'}>Secret Shop</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/shop" element={<Shop />} /> */}
        <Route path="/secretshop" element={<SecretShop />} />
      </Routes>
    </div>
  );
}

export default App;
