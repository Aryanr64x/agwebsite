import React from "react";

type Ethic = {
  title: string;
  description: string;
};

const ethics: Ethic[] = [
  {
    title: "Beneficence and Nonmaleficence",
    description:
      "I prioritize the well-being of my clients and strive to do good while avoiding harm. Every decision in therapy is made with your best interest in mind.",
  },
  {
    title: "Fidelity and Responsibility",
    description:
      "I maintain professional boundaries, uphold confidentiality, and take full responsibility for the quality of care I provide.",
  },
  {
    title: "Integrity",
    description:
      "Honesty and transparency are at the heart of my work. I provide accurate information about my qualifications, methods, and therapeutic processes.",
  },
  {
    title: "Justice",
    description:
      "I believe everyone deserves fair and equal access to mental health care. I strive to create an inclusive environment.",
  },
  {
    title: "Respect for People's Rights and Dignity",
    description:
      "I respect the autonomy, confidentiality, and inherent worth of every individual. Your voice, values, and experiences are honoured throughout the therapeutic process.",
  },
];

export default function WorkEthics() {
  return (
    <section className="py-16 bg-fuchsia-100">
      <div className="max-w-6xl mx-auto px-6">
        <div className="bg-white rounded-xl shadow-lg p-10">
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-900">
            Work Ethics
          </h2>

          <p className="mt-6 text-gray-700 leading-relaxed max-w-3xl">
            I strictly adhere to the Ethical Principles of Psychologists and Code
            of Conduct as outlined by the American Psychological Association (APA).
            These principles guide my practice and ensure that every client is
            treated with integrity, respect, and care.
          </p>

          <div className="mt-10 grid gap-6 grid-cols-1 md:grid-cols-2">
            {ethics.map((ethic) => (
              <div key={ethic.title} className="border-l-4 border-fuchsia-600 pl-4">
                <h3 className="text-lg font-semibold text-gray-900">
                  {ethic.title}
                </h3>
                <p className="mt-2 text-gray-600 leading-relaxed">
                  {ethic.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}