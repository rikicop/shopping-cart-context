import { CartState } from "../context/Context";
/* import Filters from "./Filters" */ /* import SingleProduct from "./SingleProduct"; */
import "./styles.css";
const Home = () => {
  const { state } = CartState();
  console.log("State: ", state);

  return (
    <div className="home">
      {/*   */}
      <div className="productContainer">
        {/*  {products.map((prod) => {
          return <SingleProduct key={prod.id} prod={prod} />;
        })} */}
      </div>
    </div>
  );
};

export default Home;
