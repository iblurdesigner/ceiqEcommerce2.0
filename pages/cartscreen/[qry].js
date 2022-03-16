import React from "react";
import { useRouter } from "next/router";

export default function CartScreen({ products }) {
  const router = useRouter();
  // const isMounted = useIsMounted();

  // if (!isMounted) {
  //   return null;
  // }

  const idPulsado = router.query._id;

  //   console.log({ router }, router.query._id);

  //   const product = products.find((x) => x._id === idPulsado);

  // const qty = router.location.search
  //   ? Number(router.location.search.split("=")[1])
  //   : 1;

  const qty = router.asPath ? Number(router.asPath.split("=")[1]) : 1;

  const qry = router.query.qry;

  console.log(router);

  return (
    <>
      <h1>Cart Screen</h1>
      <span>Anadir al carrito:</span>
      <p>
        Producto: {qry} Cantidad: {qty}
      </p>
    </>
  );
}
