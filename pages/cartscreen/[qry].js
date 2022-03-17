import React from "react";
import { useRouter } from "next/router";

export default function CartScreen({ products }) {
  const router = useRouter();

  const qty = router.asPath ? Number(router.asPath.split("=")[1]) : 1;

  const qry = router.query.qry;

  console.log(router);

  return (
    <>
      <h1>Cart Screen</h1>
      <span>AÑADIR AL CARRITO:</span>
      <p>
        Producto: {qry} Cantidad: {qty}
      </p>
    </>
  );
}
