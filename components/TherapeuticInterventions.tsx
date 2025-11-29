'use client'
import React, { useState } from "react";

type Card = {
  title: string;
  front: string;
  back: string;
};

const cards: Card[] = [
  {
    title: "Cognitive Behaviour Therapy (CBT)",
    front: "Sometimes, it is not the situation but our interpretation of it that leads to distress.",
    back: "CBT helps identify and challenge unhelpful thought patterns and replace them with balanced, realistic, and empowering alternatives.",
  },
  {
    title: "Rational Emotive Behaviour Therapy (REBT)",
    front: "Our beliefs shape how we feel and respond to life.",
    back: "REBT focuses on recognizing irrational beliefs and reframing them into rational, compassionate thoughts that promote emotional well-being.",
  },
  {
    title: "Solution-Focused Brief Therapy (SFBT)",
    front: "Healing doesn't always require looking back.",
    back: "SFBT helps you focus on your strengths, existing resources, and small steps forward to build meaningful and sustainable change.",
  },
  {
    title: "Emotion-Focused Therapy (EFT)",
    front: "Emotions guide us — even when they feel overwhelming.",
    back: "EFT helps you connect with, understand, and transform your emotional experiences into sources of self-awareness and healing.",
  },
  {
    title: "Acceptance and Commitment Therapy (ACT)",
    front: "Growth begins when we stop fighting our emotions.",
    back: "ACT encourages acceptance of what cannot be changed while committing to actions that align with your personal values and life goals.",
  },
  {
    title: "Supportive Psychotherapy",
    front: "Healing begins with feeling understood.",
    back: "Supportive Psychotherapy provides a safe, nurturing space where empathy and trust form the foundation for coping, self-reflection, and emotional resilience.",
  },
  {
    title: "Movement and Mindfulness-Based Approaches",
    front: "The body holds stories the mind cannot always express.",
    back: "These approaches use movement, breath, and mindfulness to help you reconnect with yourself, release tension, and find balance in the present moment.",
  },
];

export default function TherapeuticInterventions() {
  const [flipped, setFlipped] = useState<boolean[]>(
    () => cards.map(() => false)
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

  return (
    <section className="py-16">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-semibold text-center text-gray-900">
          Therapeutic Interventions
        </h2>
        <p className="mt-3 text-center text-gray-600 max-w-3xl mx-auto">
          Evidence-based approaches tailored to your unique needs
        </p>

        <div
          className="mt-10 grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3"
          style={{ perspective: 1000 }}
        >
          {cards.map((c, i) => (
            <div
              key={c.title}
              className="relative h-56"
            >
              <div
                role="button"
                tabIndex={0}
                aria-pressed={flipped[i]}
                onClick={() => toggle(i)}
                onKeyDown={(e) => onKey(e, i)}
                className="w-full h-full cursor-pointer"
                style={{
                  transformStyle: "preserve-3d",
                  transition: "transform 0.6s",
                  transform: flipped[i] ? "rotateY(180deg)" : "rotateY(0deg)",
                }}
              >
                {/* Front */}
                <div
                  className="absolute inset-0 bg-white rounded-xl shadow p-6 flex flex-col justify-between"
                  style={{
                    backfaceVisibility: "hidden",
                    WebkitBackfaceVisibility: "hidden",
                  }}
                >
                  <div>
                    <h3 className="text-lg font-medium text-fuchsia-600">{c.title}</h3>
                    <p className="mt-3 text-sm text-gray-700 leading-relaxed">
                      {c.front}
                    </p>
                  </div>
                  <p className="text-sm text-fuchsia-600 font-medium">
                    Click to learn more →
                  </p>
                </div>

                {/* Back */}
                <div
                  className="absolute inset-0 bg-white rounded-xl shadow p-6 flex flex-col justify-between"
                  style={{
                    transform: "rotateY(180deg)",
                    backfaceVisibility: "hidden",
                    WebkitBackfaceVisibility: "hidden",
                  }}
                >
                  <div>
                    <h3 className="text-lg font-medium text-fuchsia-600">{c.title}</h3>
                    <p className="mt-3 text-sm text-gray-700 leading-relaxed">
                      {c.back}
                    </p>
                  </div>
                  <p className="text-sm text-fuchsia-600 font-medium">
                    Click to go back
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}