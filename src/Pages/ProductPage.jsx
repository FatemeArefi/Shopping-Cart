import { useProducts } from "../context/ProductContext";
import styles from "./ProductsPage.module.css";
function ProductPage() {
  const products = useProducts();
  console.log(products);
  return (
    <div className={styles.container}>
      <div className={styles.products}>
        {!products.length && <p>Loading...</p>}
        {products.map((p) => (
          <p key={p.id}>{p.title}</p>
        ))}
      </div>
      <div>Sidebar</div>
    </div>
  );
}

export default ProductPage;
