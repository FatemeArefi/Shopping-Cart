import { createContext, useReducer } from "react";
import { useContext } from "react";
import { sumProducts } from "../helpers/helper";

const initialState = {
  selectedItems: [],
  itemsCounter: 0,
  total: 0,
  checkout: false,
};
const reducer = (state, action) => {
  switch (action.type) {
    case 1:
      if (!state.selectedItems.find((i) => i.id === action.payload.id)) {
        state.selectedItems.push({ ...action.payload, quantity: 1 });
      }
      return {
        ...state,
        ...sumProducts(state.selectedItems),
        checkout: false,
      };
    case 2: {
      const newSelectedItems = state.selectedItems.filter(
        (i) => i.id !== action.payload.id
      );
      return {
        ...state,
        ...sumProducts(newSelectedItems),
        selectedItems: [...newSelectedItems],
      };
    }
    case 3: {
      const index = state.selectedItems.findIndex(
        (i) => i.id === action.payload.id
      );
      state.selectedItems[index].quantity++;
      return {
        ...state,
        ...sumProducts(state.selectedItems),
      };
    }
    case 4: {
      const index = state.selectedItems.findIndex(
        (i) => i.id === action.payload.id
      );
      state.selectedItems[index].quantity--;
      return {
        ...state,
        ...sumProducts(state.selectedItems),
      };
    }
    case 5:
      return {
        selectedItems: [],
        itemsCounter: 0,
        total: 0,
        checkout: true,
      };

    default:
      throw new Error("Invalid Action");
  }
};
const CartContext = createContext();

function CartProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
}

const useCart = () => {
  const { state, dispatch } = useContext(CartContext);
  return [state, dispatch];
};

export default CartProvider;
export { useCart };
