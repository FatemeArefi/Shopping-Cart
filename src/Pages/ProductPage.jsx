import { useState } from "react";
import { ImSearch } from "react-icons/im";

import Cart from "../components/Cart";
import Loader from "../components/Loader";
import { useProducts } from "../context/ProductContext";

import styles from "./ProductsPage.module.css";

function ProductPage() {
  const products = useProducts();

  const [search, setSearch] = useState("");

  const searchHandler = () => {
    console.log("Search");
  };

  return (
    <>
      <div>
        <input
          type="text"
          placeholder="Search..."
          value={search}
          onChange={(e) => setSearch(e.target.value.toLowerCase().trim())}
        />
        <button onClick={searchHandler}>
          <ImSearch />
        </button>
      </div>
      <div className={styles.container}>
        <div className={styles.products}>
          {!products.length && <Loader />}
          {products.map((p) => (
            <Cart key={p.id} data={p} />
          ))}
        </div>
        <div>Sidebar</div>
      </div>
    </>
  );
}

export default ProductPage;
