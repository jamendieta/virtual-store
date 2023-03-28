import { Routes, Route } from 'react-router-dom';
import Main from './layouts/main';
import Login from './views/auth/login';
import NotFound from './views/auth/notFound';
import ProductDetails from './views/shopping/productDetails';
import Home from './views/Main/home';
import ProductsCart from './views/shopping/productsCart';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Main />}>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/" element={<Home />}></Route>
        <Route path="/productDetails/:id" element={<ProductDetails />} ></Route>
        <Route path="/productsCart" element={<ProductsCart />} ></Route>
        <Route element={<NotFound />} path="*"></Route>
      </Route>
      {/* </Route> */}
    </Routes>
  );
}

export default App;
