"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

const Navbar = () => {
  const router = useRouter();
  const [loggedIn, setLoggedIn] = useState(() => {
    if (typeof window !== "undefined") {
      const cookies = document.cookie || "";
      return cookies.includes("auth=true");
    }
    return false;
  });

  const handleLogout = () => {
    // clear auth cookie and redirect to login
    document.cookie = "auth=false; path=/; max-age=0";
    setLoggedIn(false);
    router.push("/login");
  };

  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center">
          {/* Logo/Brand */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center py-4 px-2">
              <span className="font-semibold text-gray-500 text-lg">
                ProsunMart
              </span>
            </Link>
          </div>

          {/* Center Navigation Links */}
          <div className="hidden md:flex items-center space-x-2">
            <Link
              href="/"
              className="py-4 px-2 text-gray-500 font-semibold hover:text-green-500 transition duration-300"
            >
              Home
            </Link>
            <Link
              href="/Items"
              className="py-4 px-2 text-gray-500 font-semibold hover:text-green-500 transition duration-300"
            >
              Items
            </Link>

            <Link
              href="/profile"
              className="py-4 px-2 text-gray-500 font-semibold hover:text-green-500 transition duration-300"
            >
              Profile
            </Link>
            <Link
              href="/dashboard"
              className="py-4 px-2 text-gray-500 font-semibold hover:text-green-500 transition duration-300"
            >
              Dashboard
            </Link>
          </div>

          {/* Right Side - Login/Logout */}
          <div className="hidden md:flex items-center">
            {loggedIn ? (
              <div className="flex items-center space-x-4">
                <button
                  onClick={handleLogout}
                  className="py-2 px-4 text-gray-500 font-semibold hover:text-red-500 transition duration-300"
                >
                  Logout
                </button>
              </div>
            ) : (
              <Link
                href="/login"
                className="py-4 px-2 text-gray-500 font-semibold hover:text-green-500 transition duration-300"
              >
                Login
              </Link>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
