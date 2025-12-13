import React from "react";

type ProcessStep = {
  number: number;
  title: string;
  description: string;
};

const steps: ProcessStep[] = [
  {
    number: 1,
    title: "Building a Safe Space",
    description:
      "The first step in therapy is creating a trusting, non-judgmental environment where you feel heard and supported. This is your space to express freely and be your authentic self.",
  },
  {
    number: 2,
    title: "Understanding Your Concerns",
    description:
      "We explore your thoughts, emotions, and behavioral patterns to gain clarity on what you're experiencing. Through open dialogue and reflective exploration, we begin to uncover the root causes of your difficulties.",
  },
  {
    number: 3,
    title: "Setting Goals Together",
    description:
      "Therapy works best when it's guided by purpose. Together, we identify meaningful, achievable goals — whether that's improving emotional regulation, enhancing relationships, or fostering self-acceptance.",
  },
  {
    number: 4,
    title: "Working Through Patterns",
    description:
      "We identify unhelpful patterns and gradually replace them with healthier, more adaptive ones. This stage often includes learning coping strategies, mindfulness, and self-reflection techniques tailored to your needs.",
  },
  {
    number: 5,
    title: "Growth and Integration",
    description:
      "As you begin to notice positive shifts in your thoughts, emotions, and actions, therapy helps you integrate these insights into your everyday life — building confidence, balance, and self-awareness.",
  },
  {
    number: 6,
    title: "Relapse Prevention",
    description:
      "Healing isn't always linear. In this stage, we focus on recognizing potential triggers, strengthening coping strategies, and preparing you to manage future challenges effectively. The goal is to help you sustain the progress you've made and continue growing independently.",
  },
];

export default function TherapyProcess() {
  return (
    <section className="py-16">
      <div className="max-w-6xl mx-auto px-6">
        
        <h2 className="text-3xl md:text-4xl font-semibold text-center text-gray-900">
          The Process of Effective Therapy
        </h2>

        <p className="mt-4 text-center text-gray-600 max-w-3xl mx-auto leading-relaxed">
          Therapy is a collaborative journey — one that helps you understand yourself better, manage challenges, and build a more fulfilling life. It's not about "fixing" you, but about guiding you toward awareness, healing, and growth at your own pace.
        </p>

        <div className="mt-12 grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
          {steps.map((step) => (
            <article
              key={step.number}
              className="bg-white border border-gray-200 rounded-xl shadow p-6 hover:shadow-lg transition-shadow"
            >
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-full bg-fuchsia-500 text-white font-bold text-lg">
                    {step.number}
                  </div>
                </div>
              </div>
              <h3 className="mt-4 text-lg font-medium text-gray-900">
                {step.title}
              </h3>
              <p className="mt-3 text-gray-600 text-sm leading-relaxed">
                {step.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}