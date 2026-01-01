"use client";
import React, { useState } from "react";



export default function BookYourSlot() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <section className="py-16 flex justify-center">
        <div className="w-full md:w-1/2 px-4">
          <div className="bg-fuchsia-600/10 rounded-xl p-8 md:p-12 shadow-lg backdrop-blur-sm">
            <h2 className="text-3xl md:text-4xl font-semibold text-center text-black">
              Ready to Begin?
            </h2>

            <p className="mt-6 text-center text-black leading-relaxed">
              Choose the plan that best fits your needs and begin your journey toward
              calm and clarity. We provide online services for your convenience.
            </p>

            <div className="mt-8 flex justify-center">
              <button
                onClick={() => setOpen(true)}
                className="bg-fuchsia-600 hover:bg-fuchsia-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
              >
                Book Your Slot
              </button>
            </div>

            <p className="mt-6 text-center text-black/80 text-sm">
              You'll be able to select a date and time in the next step
            </p>
          </div>
        </div>
      </section>

      {/* Modal */}
      {open && (
        <div
          className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center px-4"
          onClick={() => setOpen(false)}
        >
          <div
            className="relative bg-white w-full max-w-3xl h-[85vh] rounded-xl shadow-xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setOpen(false)}
              className="absolute top-4 right-4 text-xl font-bold"
            >
              ✕
            </button>

            {/* Calendly Embed */}
            <iframe
              src="https://calendly.com/hi-lavenderandlighttherapy/30min"
              className="w-full h-full rounded-xl"
              frameBorder="0"
            />
          </div>
        </div>
      )}
    </>
  );
}
