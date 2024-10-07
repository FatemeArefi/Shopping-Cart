import { useProducts } from "../context/ProductContext";

function ProductPage() {
  const products = useProducts();
  console.log(products);
  return <div>page</div>;
}

export default ProductPage;
