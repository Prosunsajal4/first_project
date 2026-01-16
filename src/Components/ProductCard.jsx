import React from "react";
import Link from "next/link";
import Image from "next/image";

const ProductCard = ({ product }) => {
  return (
    <Link href={`/Items/${product.id}`}>
      <div className="bg-white shadow-md rounded-lg p-4 m-4 max-w-sm cursor-pointer hover:shadow-xl transition duration-300 transform hover:-translate-y-1">
        <Image
          src={product.thumbnail}
          alt={product.title}
          width={400}
          height={192}
          className="w-full h-48 object-cover rounded-t-lg"
        />
        <div className="p-4">
          <h2 className="text-xl text-slate-900 font-bold mb-2 hover:text-blue-600 transition duration-300">
            {product.title}
          </h2>
          <p className="text-gray-600 mb-2">{product.description}</p>
          <p className="text-lg font-semibold text-green-600">
            ${product.price}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
