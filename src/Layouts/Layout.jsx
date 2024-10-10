import { Link } from "react-router-dom";
import { PiShoppingCartSimpleBold } from "react-icons/pi";
import { useCart } from "../context/CartContext";
import styles from "./Layout.module.css";
function Layout({ children }) {
  const [state] = useCart();
  return (
    <>
      <header className={styles.header}>
        <Link to="/products">Shopping Site Name</Link>
        <Link to="checkout">
          <PiShoppingCartSimpleBold />
          {!!state.itemsCounter && <span>{state.itemsCounter}</span>}
        </Link>
      </header>
      {children}
      <footer className={styles.footer}>
        <p>Developed By Fateme Arefi</p>
      </footer>
    </>
  );
}

export default Layout;
