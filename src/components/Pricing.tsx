import { Check } from "lucide-react";
import React from "react";

const basicFeatures = [
  {
    id: 1,
    feature: "Calories Tracking",
  },
  {
    id: 2,
    feature: "Macros Tracking",
  },
  {
    id: 3,
    feature: "Limited Analytics",
  },
  {
    id: 4,
    feature: "Weekly Reports",
  },
];

const premiumFeatures = [
  {
    id: 1,
    feature: "Everything in Novice",
  },
  {
    id: 2,
    feature: "Advanced Analytics",
  },
  {
    id: 3,
    feature: "Water intake reminder notifications",
  },
  {
    id: 4,
    feature: "Personalized Goals",
  },
  {
    id: 5,
    feature: "Meal Planner",
  },
];

export default function Pricing() {
  return (
    <div id="pricing" className="flex flex-col items-center justify-center gap-8 bg-[#FEFEFE] min-h-screen">
      <div className="space-y-4 mt-5">
        <h1 className="text-center sm:text-5xl text-2xl font-bold sm:scale-y-125 sm:scale-x-125 text-gray-800">
          Pay once, use forever
        </h1>
        <p className="sm:text-lg text-center text-md">
          {" "}
          We offer a specific pricing plan to suit your needs and budget.
        </p>
      </div>
      <div className="grid sm:grid-cols-2 grid-cols-1 gap-10 grid-row-1">
        <div className="flex flex-col items-start gap-5 border-2 p-5 sm:w-[400px] w-[300px] rounded-xl shadow-md scale-95 transition-all duration-300">
          <div className="space-y-2">
            <h2 className="text-xl font-semibold">Novice</h2>
            <p className=" text-4xl text-gray-800 font-semibold">Free</p>
            <p className="text-sm text-gray-600">
              Perfect for getting started with our app.
            </p>
          </div>
          <div className="flex flex-col gap-2 items-start justify start">
            {basicFeatures.map((feature) => (
              <div
                key={feature.id}
                className="flex flex-row gap-2 items-center justify-start"
              >
                <Check className="text-green-400 w-7 h-7" />
                <p className="text-sm sm:text-[16px] text-black">
                  {feature.feature}
                </p>
              </div>
            ))}
          </div>
          <button className="bg-gray-700 w-full text-sm sm:text-lg font-semibold hover:bg-gray-800 text-white rounded-full p-2 sm:px-4 sm:py-2">
            Get Started Now
          </button>
        </div>

        <div className="flex flex-col items-start gap-5 border-2 mb-5 border-green-300 p-5 sm:w-[400px] w-[300px] rounded-xl shadow-md scale-105 hover:scale-110 transition-all duration-300">
            {/* <p className="absolute"> Try It</p> */}
          <div className="space-y-2">
            <h2 className="text-xl font-semibold">Veteran</h2>
            <p className=" text-4xl text-gray-800 font-semibold">
              ₹149 <span className="text-xl text-gray-600">only</span>
            </p>
            <p className="text-sm text-gray-600">
              Perfect for getting started with our app.
            </p>
          </div>
          <div className="flex flex-col gap-2 items-start justify start">
            {premiumFeatures.map((feature) => (
              <div
                key={feature.id}
                className="flex flex-row gap-2 items-center justify-start"
              >
                <Check className="text-green-400 w-7 h-7" />
                <p className="text-sm sm:text-[16px] text-black">
                  {feature.feature}
                </p>
              </div>
            ))}
          </div>
          <button className="bg-green-500 w-full text-sm sm:text-lg font-semibold hover:bg-green-700 text-white rounded-full p-2 sm:px-4 sm:py-2">
            Start Pro Plan
          </button>
        </div>
      </div>
    </div>
  );
}
