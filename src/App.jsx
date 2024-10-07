import { Navigate, Route, Routes } from "react-router-dom";
import ProductPage from "./Pages/ProductPage";
import DetailsPage from "./Pages/DetailsPage";
import CheckoutPage from "./Pages/CheckoutPage";
import PageNotFound from "./Pages/404";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/products" replace />} />
      <Route path="/products" element={<ProductPage />} />
      <Route path="/products/:id" element={<DetailsPage />} />
      <Route path="/checkout" element={<CheckoutPage />} />
      <Route path="/*" element={<PageNotFound />} />
    </Routes>
  );
}

export default App;
