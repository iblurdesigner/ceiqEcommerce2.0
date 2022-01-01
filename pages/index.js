import Head from "next/head";
// import Image from 'next/image'
import styles from "../styles/Home.module.css";
import HomeScreen from "./screens/HomeScreen";
import Link from "next/link";

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
          <div className="brand">
            <Link href="/">CEIQ</Link>
          </div>
          <div>
            <Link href="/cart">Carrito</Link>
            <Link href="/signin">Ingresar</Link>
          </div>
        </header>
        <main>
          <HomeScreen />
        </main>
        <footer className="row center">Todos los derechos reservados</footer>
      </div>
    </>
  );
}
