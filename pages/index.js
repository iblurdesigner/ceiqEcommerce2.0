// import Image from 'next/image'
import useSWR from "swr";
import HomeScreen from "./screens/HomeScreen";

const fetcher = async () => {
  const response = await fetch("http://localhost:3000/api/data");
  const data = await response.json();

  return data;
};

export default function Home() {
  const { data, error } = useSWR("products", fetcher);

  if (error) return "Ha ocurrido un error";
  if (!data) return "...Loading";

  return (
    <>
      <HomeScreen {...data} />
    </>
  );
}
