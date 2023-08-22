import { Product } from "@common/types/product";
import { FC } from "react";
import Link from "next/link";
import Image from "next/image";

interface Props {
  product: Product;
}

const ProductCard: FC<Props> = ({ product }) => {
  
  const placeholderImage = "/product-image-placeholder.svg";

  return (
    <Link href={`/products/${product.slug}`}>
      <div>
        <h3>
          <span>{product.name}</span>
          <span>14 $</span>
          {product.images && (
            <Image
              alt={product.name ?? "Product Image"}
              src={placeholderImage}
              height={540}
              width={540}
              quality={"85"}
              layout="responsive"
            />
          )}
        </h3>
      </div>
    </Link>
  );
};

export default ProductCard;
