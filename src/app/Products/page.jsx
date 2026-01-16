import React from "react";
import Navbar from "@/Components/Navbar";
import Products from "@/Components/Products";
import Footer from "@/Components/Footer";

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
