"use client";
import React, { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import Image from "next/image";
import Navbar from "../../../Components/Navbar";
import Footer from "../../../Components/Footer";

const ItemDetailsPage = () => {
  const params = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (params.id) {
      fetch(`https://dummyjson.com/products/${params.id}`)
        .then((res) => res.json())
        .then((data) => {
          setProduct(data);
          setLoading(false);
        })
        .catch((err) => {
          setError(err.message);
          setLoading(false);
        });
    }
  }, [params.id]);

  if (loading) {
    return (
      <div>
        <Navbar />
        <div className="min-h-screen bg-gray-50 flex items-center justify-center">
          <div className="text-center">
            <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600 mx-auto"></div>
            <p className="mt-4 text-lg text-gray-600">ProsunMart</p>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  if (error) {
    return (
      <div>
        <Navbar />
        <div className="min-h-screen bg-gray-50 flex items-center justify-center">
          <div className="text-center">
            <div className="text-6xl mb-4">😞</div>
            <h2 className="text-2xl font-bold text-gray-800 mb-2">
              Oops! Something went wrong
            </h2>
            <p className="text-gray-600">Error: {error}</p>
            <button
              onClick={() => window.history.back()}
              className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-300"
            >
              Go Back
            </button>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  if (!product) {
    return (
      <div>
        <Navbar />
        <div className="min-h-screen bg-gray-50 flex items-center justify-center">
          <div className="text-center">
            <div className="text-6xl mb-4">🔍</div>
            <h2 className="text-2xl font-bold text-gray-800 mb-2">
              Product Not Found
            </h2>
            <p className="text-gray-600">
              The product you&apos;re looking for doesn&apos;t exist.
            </p>
            <button
              onClick={() => window.history.back()}
              className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-300"
            >
              Go Back
            </button>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div>
      <Navbar />
      <div className="min-h-screen bg-gray-50 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="md:flex">
              {/* Product Images */}
              <div className="md:w-1/2">
                <div className="relative h-96 md:h-full">
                  <Image
                    src={product.thumbnail}
                    alt={product.title}
                    width={500}
                    height={400}
                    className="w-full h-full object-cover"
                  />
                </div>
                {product.images && product.images.length > 1 && (
                  <div className="p-4 border-t">
                    <div className="grid grid-cols-4 gap-2">
                      {product.images.slice(0, 4).map((image, index) => (
                        <Image
                          key={index}
                          src={image}
                          alt={`${product.title} ${index + 1}`}
                          width={80}
                          height={80}
                          className="w-full h-20 object-cover rounded cursor-pointer hover:opacity-75 transition duration-300"
                        />
                      ))}
                    </div>
                  </div>
                )}
              </div>

              <div className="md:w-1/2 p-8">
                <div className="mb-4">
                  <h1 className="text-3xl font-bold text-gray-900 mb-2">
                    {product.title}
                  </h1>
                  <div className="flex items-center mb-4">
                    <span className="text-2xl font-bold text-green-600">
                      ${product.price}
                    </span>
                    {product.discountPercentage > 0 && (
                      <span className="ml-3 text-sm text-red-500 bg-red-100 px-2 py-1 rounded">
                        -{product.discountPercentage}% off
                      </span>
                    )}
                  </div>
                  <div className="flex items-center mb-4">
                    <div className="flex text-yellow-400">
                      {[...Array(5)].map((_, i) => (
                        <span
                          key={i}
                          className={
                            i < Math.floor(product.rating)
                              ? "text-yellow-400"
                              : "text-gray-300"
                          }
                        >
                          ★
                        </span>
                      ))}
                    </div>
                    <span className="ml-2 text-gray-600">
                      ({product.rating})
                    </span>
                  </div>
                </div>

                <div className="mb-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    Description
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {product.description}
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div>
                    <span className="text-sm text-slate-500">Category</span>
                    <p className="font-medium text-rose-500">
                      {product.category}
                    </p>
                  </div>
                  <div>
                    <span className="text-sm text-slate-500">Brand</span>
                    <p className="font-medium text-rose-500">{product.brand}</p>
                  </div>
                  <div>
                    <span className="text-sm text-slate-500">Stock</span>
                    <p className="font-medium text-rose-500">
                      {product.stock} available
                    </p>
                  </div>
                  <div>
                    <span className="text-sm text-slate-500">SKU</span>
                    <p className="font-medium text-rose-500">{product.sku}</p>
                  </div>
                </div>

                <div className="mb-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    Tags
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {product.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mb-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    Additional Information
                  </h3>
                  <div className="space-y-2 text-sm text-gray-600">
                    <p>
                      <span className="font-medium">Warranty:</span>{" "}
                      {product.warrantyInformation}
                    </p>
                    <p>
                      <span className="font-medium">Shipping:</span>{" "}
                      {product.shippingInformation}
                    </p>
                    <p>
                      <span className="font-medium">Return Policy:</span>{" "}
                      {product.returnPolicy}
                    </p>
                    <p>
                      <span className="font-medium">Minimum Order:</span>{" "}
                      {product.minimumOrderQuantity} items
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Reviews Section */}
            {product.reviews && product.reviews.length > 0 && (
              <div className="border-t p-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-6">
                  Customer Reviews
                </h3>
                <div className="space-y-4">
                  {product.reviews.map((review, index) => (
                    <div key={index} className="border rounded-lg p-4">
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-medium text-slate-500">
                          {review.reviewerName}
                        </span>
                        <div className="flex text-yellow-400">
                          {[...Array(5)].map((_, i) => (
                            <span
                              key={i}
                              className={
                                i < review.rating
                                  ? "text-yellow-400"
                                  : "text-gray-300"
                              }
                            >
                              ★
                            </span>
                          ))}
                        </div>
                      </div>
                      <p className="text-gray-600 mb-2">{review.comment}</p>
                      <p className="text-sm text-gray-400">
                        {new Date(review.date).toLocaleDateString()}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ItemDetailsPage;
