import React from "react";
import Navbar from "@/Components/Navbar";
import Products from "@/Components/Products";
import Footer from "@/Components/Footer";

export const metadata = {
  title: "Items",
  description:
    "Discover amazing products at ProsunMart. Quality products, fast delivery, and exceptional customer service.",
};

export default function ProductsPage() {
  return (
    <div>
      <Navbar />
      <div className="min-h-screen bg-gray-50">
        <Products />
      </div>
      <Footer />
    </div>
  );
}
