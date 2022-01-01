import data from "../data";
import Product from "components/Product";

export default function HomeScreen() {
  return (
    <div className="row center">
      <>
        {data.products.length === 0 && console.log("no hay productos")}
        {data.products.map((product) => {
          return <Product key={product._id} product={product}></Product>;
        })}
      </>
    </div>
  );
}
