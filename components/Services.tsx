import React from "react";

type Service = {
  emoji: string;
  title: string;
  description: string;
  chooseText: string;
};

const services: Service[] = [
  {
    emoji: "💜",
    title: "Psychotherapy",
    description:
      "Psychotherapy provides a safe and structured space to explore your emotions, thoughts, and behaviors on a deeper level. It helps you identify patterns, heal from past experiences, and build tools to manage present challenges.",
    chooseText:
      "Choose this if you're seeking long-term emotional growth, deeper self-understanding, and lasting change.",
  },
  {
    emoji: "🌿",
    title: "Counselling",
    description:
      "Counselling focuses on helping you navigate current life challenges and emotional difficulties through open dialogue, reflection, and skill-building. It promotes clarity, empowerment, and personal growth in a supportive environment.",
    chooseText:
      "Choose this if you're looking for short-term guidance, perspective, and practical strategies to cope better with life's stressors.",
  },
  {
    emoji: "☀️",
    title: "Mental Health Wellbeing",
    description:
      "This service emphasizes holistic care — nurturing your emotional, mental, and behavioral wellness. It focuses on preventive support, lifestyle awareness, and mindfulness-based strategies to build resilience and balance in everyday life.",
    chooseText:
      "Choose this if you want to enhance your overall well-being and maintain a healthy relationship with yourself.",
  },
];

export default function Services() {
  return (
    <section className="py-16">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-semibold text-center text-gray-900">
          Our Services
        </h2>
        <p className="mt-4 text-center text-gray-600 max-w-3xl mx-auto leading-relaxed">
          Comprehensive mental health support tailored to your journey
        </p>

        <div className="mt-10 grid gap-6 grid-cols-1 md:grid-cols-3">
          {services.map((s) => (
            <article
              key={s.title}
              className="bg-white rounded-xl shadow p-6 flex flex-col hover:shadow-lg transition-shadow"
            >
              <div className="flex items-center gap-3">
                <div className="text-3xl">{s.emoji}</div>
                <h3 className="text-xl font-medium text-gray-900">{s.title}</h3>
              </div>

              <p className="mt-4 text-gray-600 flex-1 leading-relaxed">{s.description}</p>

              <div className="mt-6 pt-4 border-t border-gray-100">
                <div className="bg-fuchsia-100/90 text-fuchsia-800 rounded-md p-4">
                  <p className="text-sm leading-relaxed">{s.chooseText}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}