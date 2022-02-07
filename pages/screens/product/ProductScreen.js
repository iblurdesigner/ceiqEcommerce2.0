import Link from "next/link";
import { useRouter } from "next/router";
import useIsMounted from "hooks/useIsMounted";
import Rating from "components/Rating";

export default function ProductScreen({ products }) {
  const router = useRouter();
  const isMounted = useIsMounted();

  if (!isMounted) {
    return null;
  }

  const idPulsado = router.query._id;
  // const idProd = info.products[idPulsado]._id;
  // console.log(idProd === idPulsado);

  console.log({ router }, router.query._id);

  const product = products.find((x) => x._id === idPulsado);
  console.log(products);

  return (
    <div>
      <Link href="/">Regresar al inicio</Link>
      <div className="row top center">
        <div className="col-2">
          <img className="large" src={product.image} alt={product.name} />
        </div>
        <div className="col-1">
          <ul>
            <li>
              <h1>{product.name}</h1>
            </li>
            <li>
              <Rating rating={product.rating} numReviews={product.numReviews} />
            </li>
            <li>Precio: ${product.price}</li>
            <li>
              <p>Descripción: {product.description}</p>
            </li>
          </ul>
        </div>
        <div className="col-1">
          <div className="card card-body">
            <ul>
              <li>
                <div className="row">
                  <div>Price</div>
                  <div className="price">${product.price}</div>
                </div>
                <div className="row">
                  <div>Status:</div>
                  <div>
                    {product.countInStock > 0 ? (
                      <span className="success">En Stock</span>
                    ) : (
                      <span className="error">No disponible</span>
                    )}
                  </div>
                </div>
              </li>
              <li>
                <button className="primary block">Añadir al carrito</button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
