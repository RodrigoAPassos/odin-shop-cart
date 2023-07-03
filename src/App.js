import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './components/Home';
import Shop from './components/Shop';
import SecretShop from './components/SecretShop';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/shop" element={<Shop />} />
        <Route path="/secretshop" element={<SecretShop />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
