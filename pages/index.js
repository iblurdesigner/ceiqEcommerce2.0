import Head from "next/head";
// import Image from 'next/image'
import styles from "../styles/Home.module.css";
import data from "./data";
import Link from "next/link";
import Product from "../components/Product";

export default function Home() {
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
          <div>
            <a href="/" className="brand">
              CEIQ
            </a>
          </div>
          <div>
            <a href="/cart">Carrito</a>
            <a href="/signin">Ingresar</a>
          </div>
        </header>
        <main>
          <div className="row center">
            <>
              {data.products.length === 0 && console.log("no hay productos")}
              {data.products.map((product) => {
                return <Product key={product._id} product={product}></Product>;
              })}
            </>
          </div>
        </main>
        <footer className="row center">Todos los derechos reservados</footer>
      </div>
    </>
  );
}
