import { Children, createContext, useReducer } from "react";

const initialstate = {};
const reducer = () => {};
const cartContext = createContext();

function CartProvider({ Children }) {
  const [state, dispatch] = useReducer(reducer, initialstate);

  return <CartContext.Provider value={state}>{Children}</CartContext.Provider>;
}

export default CartProvider;
