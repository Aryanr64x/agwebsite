import React from "react";

export default function MissionVision() {
  return (
    <section className="py-16">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Mission Box */}
          <div className="bg-fuchsia-700 rounded-xl shadow-lg p-8">
            <h3 className="text-2xl font-semibold text-fuchsia-300 mb-4">
              Mission
            </h3>
            <p className="text-white leading-relaxed">
              To create a safe and compassionate space where individuals feel
              comforted, heard, and valued. My mission is to empower people to
              understand themselves better, embrace their emotions, and take
              meaningful steps toward healing and self-growth.
            </p>
          </div>

          {/* Vision Box */}
          <div className="bg-yellow-400 rounded-xl shadow-lg p-8">
            <h3 className="text-2xl font-semibold text-fuchsia-600 mb-4">
              Vision
            </h3>
            <p className="text-gray-800 leading-relaxed">
              To help dismantle the social stigma surrounding mental health and
              contribute to a world where emotional well-being is prioritized. A
              society where every individual is treated with kindness, empathy,
              and respect, regardless of their struggles.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}