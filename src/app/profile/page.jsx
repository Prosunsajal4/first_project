"use client";
import React, { useState, useEffect } from "react";
import Navbar from "../../Components/Navbar";
import Footer from "../../Components/Footer";


const ProfilePage = () => {
  const [userEmail, setUserEmail] = useState("");

  useEffect(() => {
    const cookies = document.cookie.split("; ");
    const userEmailCookie = cookies.find((cookie) =>
      cookie.startsWith("Useremail=")
    );
    if (userEmailCookie) {
      setUserEmail(userEmailCookie.split("=")[1]);
    }
  }, []);

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gray-100 py-12">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-3xl font-bold text-gray-900 mb-8">Profile</h1>
          <div className="bg-white shadow-md rounded-lg p-6">
            <p className="text-gray-600">
              Welcome to your profile page, {userEmail}.
            </p>
            <p className="text-gray-600">
              Here you can view and edit your personal information.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ProfilePage;
