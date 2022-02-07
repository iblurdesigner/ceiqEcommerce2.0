// import data from "../data";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getProducts } from "features/products/productSlice";
import Product from "components/Product";

export default function HomeScreen() {
  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(getProducts());
  }, []);

  console.log(products);

  return (
    <div className="row center">
      <>
        {!products
          ? console.log("No hay productos")
          : products.map((product) => {
              return <Product key={product._id} product={product}></Product>;
            })}
      </>
      {/* {console.log(data)} */}
    </div>
  );
}
