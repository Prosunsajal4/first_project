import React from "react";

const WhyChooseUS = () => {
  const reasons = [
    {
      title: "Quality Products",
      description:
        "We offer only the highest quality products that meet international standards.",
      icon: "🏆",
    },
    {
      title: "Expert Support",
      description:
        "Our team of experts is always ready to help you with any questions or concerns.",
      icon: "👥",
    },
    {
      title: "Fast Delivery",
      description:
        "Quick and reliable shipping to get your orders to you as soon as possible.",
      icon: "🚚",
    },
    {
      title: "Secure Payment",
      description:
        "Your payment information is protected with the latest security measures.",
      icon: "🔒",
    },
  ];

  return (
    <div className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Why Choose Us?
          </h2>
          <p className="mt-4 text-lg text-gray-500">
            Discover what makes ProsunMart the best choice for your shopping
            needs
          </p>
        </div>
        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md p-6 text-center"
            >
              <div className="text-4xl mb-4">{reason.icon}</div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">
                {reason.title}
              </h3>
              <p className="text-gray-500">{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUS;
