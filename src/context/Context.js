import { createContext, useContext, useReducer } from "react";
import { cartReducer } from "./Reducers";
/* import products from "./data/products"; */
/* 36:26 --> Los datos deben ser aquí estáticos 
posiblemente por eso tuvistes tantos problemas */
const Cart = createContext();
const Context = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, {
    products: [],
    cart: [],
  });

  return <Cart.Provider value={{ state, dispatch }}>{children}</Cart.Provider>;
};

export default Context;

export const CartState = () => {
  return useContext(Cart);
};
