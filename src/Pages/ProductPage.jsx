import Cart from "../components/Cart";
import Loader from "../components/Loader";
import { useProducts } from "../context/ProductContext";
import styles from "./ProductsPage.module.css";
function ProductPage() {
  const products = useProducts();
  return (
    <div className={styles.container}>
      <div className={styles.products}>
        {!products.length && <Loader />}
        {products.map((p) => (
          <Cart key={p.id} data={p} />
        ))}
      </div>
      <div>Sidebar</div>
    </div>
  );
}

export default ProductPage;
