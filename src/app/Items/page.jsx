import React from "react";
import Navbar from "../../Components/Navbar";
import Products from "../../Components/Products";
import Footer from "../../Components/Footer";

const ItemsPage = () => {
  return (
    <div>
      <Navbar />
      <div className="min-h-screen bg-gray-50">
        <Products />
      </div>
      <Footer />
    </div>
  );
};

export default ItemsPage;
