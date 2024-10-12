import BasketCart from "../components/BasketCart";
import BasketSidbar from "../components/BasketSidbar";
import { useCart } from "../context/CartContext";
import styles from "./chechoutPage.module.css";

function CheckoutPage() {
  const [state, dispatch] = useCart();

  const clickHandler = (type, payload) => dispatch({ type, payload });

  if (!state.itemsCounter) {
    return (
      <div className={styles.container}>
        <p>Empty</p>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <BasketSidbar state={state} clickHandler={clickHandler} />
      <div className={styles.product}>
        {state.selectedItems.map((p) => (
          <BasketCart key={p.id} data={p} clickHandler={clickHandler} />
        ))}
      </div>
    </div>
  );
}

export default CheckoutPage;
