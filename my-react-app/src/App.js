import { Routes, Route } from 'react-router-dom';
import Home from './Routes/Home';
import ProductDetails from './Routes/ProductDetails';
import Checkout from './Routes/Checkout';
import InitialQueryComponent from './Components/InitialQueryComponent';
import Header from './Components/Header/Header';


function App() {
  return (
    <div>
      <InitialQueryComponent />
      <Header />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
    </div>  
  );
}

export default App;
