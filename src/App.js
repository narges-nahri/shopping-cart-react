import './App.css';
import { BrowserRouter as Router ,Routes , Route ,Navigate } from "react-router-dom";

//components
import Store from './components/Store';
import ProductsDetails from './components/ProductsDetails';
import Navbar from './components/shared/Navbar';
import ShopCart from './components/ShopCart';

//context
import ProductContextProvider from './context/ProductContextProvider';
import CartContextProvider from './context/CartContextProvider';


function App() {
  return (
    <ProductContextProvider>
      <CartContextProvider>
        <Router>
            <Navbar />
        <Routes>
            <Route path="/products/:id" element={<ProductsDetails />} />
            <Route path="/products" element={<Store />} />
            <Route path="/cart" element={<ShopCart />} />
            <Route path="/" element={<Navigate replace to="/products" /> }/>
          </Routes>
        </Router>
      </CartContextProvider>
      
    </ProductContextProvider>
  );
}

export default App;
