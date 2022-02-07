import Rating from "./Rating";
import Link from "next/link";
import Image from "next/image";

export default function Product(props) {
  const { product } = props;
  return (
    <div key={product._id} className="card">
      <Link href={`/screens/product/${product._id}`}>
        <Image
          className="medium"
          src={product.image}
          alt={product.name}
          width={460}
          height={360}
        />
      </Link>
      <div className="card-body">
        <Link href={`/screens/product/${product._id}`}>
          <h2>{product.name}</h2>
        </Link>
        <Rating
          rating={product.rating}
          numReviews={product.numReviews}
        ></Rating>
        <div className="price">${product.price}</div>
      </div>
    </div>
  );
}
