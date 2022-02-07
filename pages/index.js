// import Image from 'next/image'
// import { fetchAllProducts } from "store/slices/products";

import HomeScreen from "./screens/HomeScreen";

// const fetcher = async () => {
//   const response = await fetch("http://localhost:3000/api/data");
//   const data = await response.json();

//   return data;
// };

export default function Home() {
  return (
    <>
      <HomeScreen />
    </>
  );
}
