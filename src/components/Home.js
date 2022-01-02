import { useEffect, useState } from "react";
import { CartState } from "../context/Context";
import axios from "axios";
import "./styles.css";
import SingleProduct from "./SingleProduct";
import Filters from "./Filters";
const Home = () => {
  const [productos, setProductos] = useState([]);
  const { state } = CartState();
  useEffect(() => {
    axios
      .get("/api/products")
      .then((res) => {
        /* setProductos(res.data); */
        state.products = res.data;
        setProductos(state.products);
      })
      .catch((err) => console.log(err));
  }, [state]);
  console.log("state.products: ", productos);
  /* setProductos(state.products); */

  return (
    <div className="home">
      <Filters />
      <div className="productContainer">
        {productos.map((prod) => {
          return <SingleProduct prod={prod} key={prod.id} />;
        })}
      </div>
    </div>
  );
};

export default Home;
