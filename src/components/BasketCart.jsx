import { shortenText } from "../helpers/helper";
import { MdDeleteOutline } from "react-icons/md";
import styles from "./BasketCart.module.css";

function BasketCart({ data, clickHandler }) {
  const { image, title, quantity } = data;
  return (
    <div className={styles.card}>
      <img src={image} alt={data.title} />
      <p>{shortenText(title)}</p>
      <div className={styles.actions}>
        {quantity === 1 && (
          <button onClick={(() => clickHandler("REMOVE_ITEM"), data)}>
            <MdDeleteOutline />
          </button>
        )}
        {data.quantity > 1 && (
          <button onClick={(() => clickHandler("DECREASE"), data)}> - </button>
        )}
        <span>{data.quantity}</span>
        <button onClick={(() => clickHandler("INCREASE"), data)}> + </button>
      </div>
    </div>
  );
}

export default BasketCart;
