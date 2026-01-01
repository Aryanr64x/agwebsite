'use client'
import React, { useState, useRef, useEffect } from "react";

type Plan = {
  title: string;
  price: number;
  perSession: number;
  frontBullets: string[];
  duration: string;
  savings?: number;
  backDescription: string;
};

const plans: Plan[] = [
  {
    title: "1 Session",
    price: 800,
    perSession: 800,
    frontBullets: [
      "Experience a safe and supportive space to express yourself",
      "Explore your thoughts and behaviour patterns",
      "Gain clarity about your needs",
    ],
    duration: "60-minute session",
    backDescription:
      "Experience a safe and supportive space to express yourself, explore your thoughts and behaviour patterns, and gain clarity about your needs.",
  },
  {
    title: "4 Sessions",
    price: 2500,
    perSession: 625,
    frontBullets: [
      "A space to open up and understand your patterns",
      "Set meaningful goals with your therapist",
      "Learn what kind of approach suits you best",
      "Take your first steps toward healing",
    ],
    duration: "Save ₹700",
    savings: 700,
    backDescription:
      "A space to open up, understand your patterns, and set meaningful goals with your therapist. Learn what kind of approach suits you best and take your first steps toward healing and healthy change.",
  },
  {
    title: "6 Sessions",
    price: 3600,
    perSession: 600,
    frontBullets: [
      "Express yourself and gain insight into your patterns",
      "Work towards your goals",
      "Learn healthy coping mechanisms",
      "Replace unhelpful patterns with empowering ones",
      "Develop a step-by-step pathway toward growth",
    ],
    duration: "Save ₹1,200",
    savings: 1200,
    backDescription:
      "Express yourself and gain insight into your patterns. Work towards your goals, learn healthy coping mechanisms, and replace unhelpful patterns with empowering ones. Develop a step-by-step pathway toward growth and well-being.",
  },
];

export default function ChoosePlan() {
  const [flipped, setFlipped] = useState<boolean[]>(
    () => plans.map(() => false)
  );

  const toggle = (i: number) => {
    setFlipped((s) => {
      const copy = [...s];
      copy[i] = !copy[i];
      return copy;
    });
  };

  const onKey = (e: React.KeyboardEvent, i: number) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      toggle(i);
    }
  };

  // HEIGHT SYNC SYSTEM
  const cardRefs = useRef<(HTMLDivElement | null )[]>([]);
  const [maxHeight, setMaxHeight] = useState(0);

  useEffect(() => {
    const heights = cardRefs.current.map(el => el?.scrollHeight || 0);
    setMaxHeight(Math.max(...heights));
  }, [flipped]);

  return (
    <section className="py-16 bg-fuchsia-100">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-semibold text-center text-gray-900">
          Choose Your Plan
        </h2>
        <p className="mt-3 text-center text-gray-600">
          Click on any card to see more details
        </p>

        <div
          className="mt-10 grid gap-6 grid-cols-1 md:grid-cols-3"
          style={{ perspective: 1000 }}
        >
          {plans.map((plan, i) => (
            <div key={plan.title} className="relative">
              {i === 1 && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 z-10">
                  <div className="bg-fuchsia-600 text-white px-4 py-1 rounded-full text-sm font-medium">
                    Most Popular
                  </div>
                </div>
              )}

              <div
                role="button"
                tabIndex={0}
                aria-pressed={flipped[i]}
                onClick={() => toggle(i)}
                onKeyDown={(e) => onKey(e, i)}
                className={`relative w-full rounded-xl shadow-lg cursor-pointer bg-white ${
                  i === 1 ? "border-2 border-fuchsia-600" : ""
                }`}
                style={{
                  transformStyle: "preserve-3d",
                  transition: "transform 0.6s",
                  transform: flipped[i] ? "rotateY(180deg)" : "rotateY(0deg)",
                  height: maxHeight ? `${maxHeight}px` : "auto",
                }}
              >
                {/* FRONT */}
                <div
                  ref={(el) => { cardRefs.current[i] = el; }}

                  className="absolute inset-0 rounded-xl p-6 flex flex-col justify-between"
                  style={{
                    backfaceVisibility: "hidden",
                    WebkitBackfaceVisibility: "hidden",
                  }}
                >
                  <div>
                    <h3 className="text-2xl font-semibold text-gray-900">
                      {plan.title}
                    </h3>

                    <div className="mt-3">
                      <p className="text-3xl font-bold text-fuchsia-600">
                        ₹{plan.price}
                      </p>
                      <p className="text-sm text-gray-600 mt-1">
                        ₹{plan.perSession} per session
                      </p>
                    </div>
                 <ul className="mt-4 space-y-2">
                       {plan.frontBullets.map((bullet, idx) => (
                        <li
                          key={idx}
                          className="flex items-start gap-2 text-sm text-gray-700"
                        >
                          <span className="text-fuchsia-600 mt-1"></span>
                          {/* <span>{bullet}</span> */}
                        </li>
                      ))} 
                    </ul> 

                    {plan.savings && (
                      <div className="mt-4 bg-fuchsia-50 rounded p-2 text-center">
                        <p className="text-sm font-medium text-fuchsia-700">
                          {plan.duration}
                        </p>
                      </div>
                    )}
                  </div>

                  <div className="pt-4 border-t border-gray-200">
                    <p className="text-sm text-fuchsia-600 font-medium">
                      Click for more details
                    </p>
                  </div>
                </div>

                {/* BACK */}
                <div
                  className="absolute inset-0 rounded-xl p-6 flex flex-col justify-between bg-white"
                  style={{
                    transform: "rotateY(180deg)",
                    backfaceVisibility: "hidden",
                    WebkitBackfaceVisibility: "hidden",
                  }}
                >
                  <div>
                    <h3 className="text-2xl font-semibold text-gray-900">
                      {plan.title}
                    </h3>
                    <p className="mt-4 text-gray-700 leading-relaxed text-sm">
                      {plan.backDescription}
                    </p>

                    <div className="mt-4">
                      <p className="text-2xl font-bold text-fuchsia-600">
                        ₹{plan.price}
                      </p>
                      <p className="text-sm text-gray-600 mt-1">
                        ₹{plan.perSession} per session
                      </p>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-gray-200">
                    <p className="text-sm text-fuchsia-600 font-medium">
                      Click to go back
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
