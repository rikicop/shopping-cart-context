import {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useState,
} from "react";

import { cartReducer } from "./Reducers";
import axios from "axios";
/* import products from "./data/products"; */

const Cart = createContext();

const Context = ({ children }) => {
  const [products, setProducts] = useState([]);

  const [state, dispatch] = useReducer(cartReducer, {
    cart: [],
    products: products,
  });

  useEffect(() => {
    axios
      .get("/api/products")
      .then((res) => {
        setProducts(res.data);
        state.products = res.data;
      })
      .catch((err) => console.log(err));
  }, [state]);

  return <Cart.Provider value={{ state, dispatch }}>{children}</Cart.Provider>;
};

export default Context;

export const CartState = () => {
  return useContext(Cart);
};
