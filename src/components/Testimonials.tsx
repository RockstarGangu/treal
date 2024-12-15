import { testimonials } from "@/constants/Testimonials";
import React from "react";

export default function Testimonials() {
  return (
    <div id="testimonials" className="flex flex-col items-center justify-center gap-5 min-h-screen bg-[#FDFEC9]">
      <h1 className="text-center mt-5 sm:text-4xl text-3xl font-semibold text-gray-800">
        What our users say...
      </h1>
      <div className="sm:columns-5 columns-1 gap-5 w-[80%] sm:gap-[40px] sm:w-[90%] h-full">
        {testimonials.map((testimonial) => (
          <div
            key={testimonial.id}
            className={`bg-white inline-block w-[100%] hover:scale-105 transition-all duration-300 my-3 p-4 shadow-md rounded-2xl`}
          >
            <h2 className="text-xl font-bold mb-1">@{testimonial.username}</h2>
            <p className="text-sm text-gray-600 mb-2">
              {testimonial.profession}
            </p>
            <p className="mb-2">{testimonial.saying}</p>
            <div className="flex flex-wrap gap-1 mb-2">
              {testimonial.achievementBadges.map((badge, index) => (
                <span
                  key={index}
                  className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs"
                >
                  {badge}
                </span>
              ))}
            </div>
            <p className="text-xs text-gray-500">{testimonial.dateTime}</p>{" "}
          </div>
        ))}
      </div>
    </div>
  );
}
