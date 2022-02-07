import { useEffect } from "react";
import ProductScreen from "./ProductScreen";
import { useSelector, useDispatch } from "react-redux";
import { getProducts } from "features/products/productSlice";

export default function Product() {
  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(getProducts());
  }, []);

  console.log({ products });

  return (
    <>
      <ProductScreen products={products} />
    </>
  );
}
