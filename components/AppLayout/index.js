import React from "react";
import Head from "next/head";
import Link from "next/link";
import styles from "../../styles/Home.module.css";
// import "../../styles/globals.css";

export default function AppLayout({ children }) {
  return (
    <>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap"
          rel="stylesheet"
        ></link>
      </Head>
      <div className="grid-container">
        <header className="row">
          <div className="brand">
            <Link href="/">CEIQ</Link>
          </div>
          <div>
            <Link href="/cart">Carrito</Link>
            <Link href="/signin">Ingresar</Link>
          </div>
        </header>

        <main>{children}</main>

        <footer className="row center">Todos los derechos reservados</footer>
      </div>
    </>
  );
}
