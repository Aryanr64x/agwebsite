'use client'
import React from "react";

export default function BookYourSlot() {
  const handleEmailClick = () => {
    window.location.href = "mailto:your-email@example.com";
  };

  return (
    <section className="py-16 flex justify-center ">
      <div className="w-1/2">
        <div className="bg-fuchsia-600/10 rounded-xl p-12 shadow-lg backdrop-blur-sm">
          <h2 className="text-3xl  md:text-4xl font-semibold text-center text-black">
            Ready to Begin?
          </h2>

          <p className="mt-6 text-center text-black leading-relaxed">
            Choose the plan that best fits your needs and begin your journey toward
            calm and clarity. We provide online services for your convenience.
          </p>

          <div className="mt-8 flex justify-center">
            <button
              onClick={handleEmailClick}
              className="bg-fuchsia-600 hover:bg-fuchsia-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              Book Your Slot
            </button>
          </div>

          <p className="mt-6 text-center text-black/80 text-sm">
            You'll be directed to your email to share your details and preferred time
          </p>
        </div>
      </div>
    </section>
  );
}