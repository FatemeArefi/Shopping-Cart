import { Navigate, Route, Routes } from "react-router-dom";

import Layout from "./Layouts/Layout";
import ProductPage from "./Pages/ProductPage";
import DetailsPage from "./Pages/DetailsPage";
import CheckoutPage from "./Pages/CheckoutPage";
import PageNotFound from "./Pages/404";
import ProductsProvider from "./context/ProductContext";
import CartProvider from "./context/CartContext";

function App() {
  return (
    <CartProvider>
      <ProductsProvider>
        <Layout>
          <Routes>
            <Route index element={<Navigate to="/products" replace />} />
            <Route path="/products" element={<ProductPage />} />
            <Route path="/products/:id" element={<DetailsPage />} />
            <Route path="/checkout" element={<CheckoutPage />} />
            <Route path="/*" element={<PageNotFound />} />
          </Routes>
        </Layout>
      </ProductsProvider>
    </CartProvider>
  );
}

export default App;
