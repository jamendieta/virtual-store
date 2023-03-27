import { Routes, Route } from 'react-router-dom';
import Main from './layouts/main';
import Login from './views/auth/login';
import PrivateRoutes from './features/privateRoutes';
import NotFound from './views/auth/notFound';
import Products from './views/shopping/products';
import ProductDetails from './views/shopping/productDetails';
import Home from './views/Main/home';

function App() {
  return (
    <Routes>
      {/* <Route path="/" element={<PrivateRoutes />}> */}
      <Route path="/" element={<Main />}>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/" element={<Home />}></Route>
        <Route path="/product" element={<Products />} ></Route>
        <Route path="/product/:id" element={<ProductDetails />} ></Route>
        <Route element={<NotFound />} path="*"></Route>
      </Route>
      {/* </Route> */}
    </Routes>
  );
}

export default App;
