import React from "react";

const OurImpact = () => {
  const stats = [
    {
      number: "10,000+",
      label: "Happy Customers",
      icon: "😊",
    },
    {
      number: "500+",
      label: "Products Delivered",
      icon: "📦",
    },
    {
      number: "50+",
      label: "Countries Served",
      icon: "🌍",
    },
    {
      number: "99%",
      label: "Satisfaction Rate",
      icon: "⭐",
    },
  ];

  return (
    <div className="py-16 bg-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Our Impact
          </h2>
          <p className="mt-4 text-lg text-gray-500">
            Numbers that speak for ProsunMart&apos;s success
          </p>
        </div>
        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md p-6 text-center"
            >
              <div className="text-4xl mb-4">{stat.icon}</div>
              <div className="text-3xl font-bold text-blue-600 mb-2">
                {stat.number}
              </div>
              <div className="text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurImpact;
