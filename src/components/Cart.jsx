import { Link } from "react-router-dom";
import { TbListDetails } from "react-icons/tb";
import { TbShoppingBagCheck } from "react-icons/tb";
import { shortenText } from "../helpers/helper";
import styles from "./Cart.module.css";
function Cart({ data }) {
  const { id, title, image, price } = data;

  return (
    <div className={styles.cart}>
      <img
        src={image}
        alt={title}
        style={{ width: "150px", height: "150px" }}
      />
      <h3>{shortenText(title)}</h3>
      <p>{price}$</p>
      <div className={styles.actions}>
        <Link to={`/products/${id}`}>
          <TbListDetails />
        </Link>
        <button>
          <TbShoppingBagCheck />
        </button>
      </div>
    </div>
  );
}

export default Cart;
