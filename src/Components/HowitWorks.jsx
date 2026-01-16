import React from "react";

const HowitWorks = () => {
  const steps = [
    {
      step: "01",
      title: "Choose Your Product",
      description:
        "Browse our extensive catalog and select the products that best fit your needs.",
    },
    {
      step: "02",
      title: "Place Your Order",
      description:
        "Add items to your cart and complete the secure checkout process.",
    },
    {
      step: "03",
      title: "Fast Delivery",
      description:
        "We process and ship your order quickly to ensure timely delivery.",
    },
    {
      step: "04",
      title: "Enjoy Your Purchase",
      description:
        "Receive your products and enjoy the quality service you deserve.",
    },
  ];

  return (
    <div className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            How It Works
          </h2>
          <p className="mt-4 text-lg text-gray-500">
            Simple steps to get what you need
          </p>
        </div>
        <div className="mt-12">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {steps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="mx-auto h-16 w-16 bg-blue-500 rounded-full flex items-center justify-center text-white text-xl font-bold mb-4">
                  {step.step}
                </div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">
                  {step.title}
                </h3>
                <p className="text-gray-500">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowitWorks;
