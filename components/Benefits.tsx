import React from "react";

const benefits = [
  "Deepened self-awareness and emotional understanding",
  "Improved coping skills and stress management",
  "Healthier thought and behavior patterns",
  "Greater self-esteem and self-compassion",
  "Stronger relationships and communication",
  "Clearer life direction and decision-making",
  "Enhanced resilience and relapse prevention strategies",
  "A sense of inner peace and empowerment",
];

export default function Benefits() {
  return (
    <section className="py-12 flex flex-col items-center">
      <h2 className="text-3xl md:text-4xl font-semibold text-center text-gray-900 mb-6">
        Benefits of Therapy
      </h2>

      <div className="w-3/4">
        <div className="bg-fuchsia-600/15 rounded-xl p-8 shadow-lg bg-transparent">
         

          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
            {benefits.map((b, i) => (
              <div key={i} className="flex items-start gap-4">
                <span className="flex items-center justify-center h-7 w-7 rounded-full bg-fuchsia-200">
                  <span className="h-2.5 w-2.5 rounded-full bg-fuchsia-600" />
                </span>
                <p className="text-black/95">{b}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}