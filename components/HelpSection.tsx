import React from "react";

type Item = { title: string; text: string; emoji?: string };

const items: Item[] = [
  {
    title: "Anxiety",
    text: "Learn to manage overwhelming thoughts and calm your nervous system through awareness, grounding, and practical coping tools. Together, we'll work towards helping you feel safe and in control again.",
    emoji: "🌿",
  },
  {
    title: "Depression",
    text: "Rediscover hope and meaning by understanding your emotions and patterns. We'll focus on small, gentle steps toward rebuilding motivation, self-worth, and emotional balance.",
    emoji: "💜",
  },
  {
    title: "Body Image Concerns",
    text: "Develop a kinder relationship with your body and learn to see yourself beyond appearance. Together, we'll work on self-compassion, acceptance, and confidence from within.",
    emoji: "🌸",
  },
  {
    title: "Low Self-Esteem",
    text: "Explore the roots of self-doubt and reframe your inner dialogue. Build a stronger sense of self through awareness, affirming boundaries, and self-validation.",
    emoji: "✨",
  },
  {
    title: "Stress",
    text: "Understand your stress triggers and learn effective coping techniques to manage them. Our sessions will focus on restoring calm, balance, and emotional clarity.",
    emoji: "☀️",
  },
  {
    title: "Self-Acceptance",
    text: "Learn to embrace yourself as you are — with compassion, patience, and authenticity. We'll work on letting go of unrealistic standards and nurturing self-trust.",
    emoji: "🌼",
  },
  {
    title: "Goal Setting and Motivation Building",
    text: "Gain clarity on your goals and the barriers holding you back. We'll create a structured yet flexible roadmap that helps you stay focused, motivated, and fulfilled.",
    emoji: "🌱",
  },
];

export default function HelpSection() {
  return (
    <section className="py-16">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-semibold text-center text-gray-900">
          What Can We Help You With?
        </h2>
        <p className="mt-3 text-center text-gray-600 max-w-3xl mx-auto">
          Support and guidance for a range of emotional and mental health concerns
        </p>

        <div className="mt-10 grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
          {items.slice(0, 6).map((it, idx) => (
            <article
              key={idx}
              className="bg-white rounded-xl shadow p-6 flex flex-col hover:shadow-lg transition-shadow"
            >
              {it.emoji ? (
                <div className="mt-4 text-2xl" aria-hidden>
                  {it.emoji}
                </div>
              ) : null}
              <h3 className="text-xl font-medium text-gray-900">{it.title}</h3>
              <p className="mt-3 text-gray-600 flex-1">{it.text}</p>

            </article>
          ))}

          {/* Last item centered as single box (3 + 3 + 1 layout on md+) */}
          <div className="md:col-span-3 flex justify-center">
            <article className="bg-white rounded-xl shadow p-6 w-full max-w-2xl hover:shadow-lg transition-shadow">
              <div className="mt-4 text-2xl" aria-hidden>
                {items[6].emoji}
              </div>
              <h3 className="text-xl font-medium text-gray-900">{items[6].title}</h3>
              <p className="mt-3 text-gray-600">{items[6].text}</p>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}
