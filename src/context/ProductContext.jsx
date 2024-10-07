import { createContext, useEffect, useState } from "react";

const ProductContext = createContext();

function ProductProvider({ chidren }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        // const response = await api.get("/product");
        setProducts(await api.get("/product"));
      } catch (error) {
        console.log(error.message);
      }
    };

    fetchProducts();
  }, []);

  return (
    <ProductContext.Provider value={products}>
      {chidren}
    </ProductContext.Provider>
  );
}

export default ProductProvider;
