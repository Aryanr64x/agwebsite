import React from "react";

type Step = {
  number: number;
  title: string;
  description: string;
};

const steps: Step[] = [
  {
    number: 1,
    title: "Choose a suitable package",
    description:
      "Explore the available therapy packages and select the one that best fits your needs",
  },
  {
    number: 2,
    title: "Book a convenient slot",
    description:
      "Pick a session time that works best for you. All sessions are online ensuring comfort and ease. You will receive a confirmation email with the session link once the slot is booked.",
  },
  {
    number: 3,
    title: "Confirm with payment",
    description: "After scheduling, an intake form and payment details will be shared via email.Your session is considered confirmed only after the intake form is submitted and payment is completed.Once payment is done, a confirmation message will be sent to you shortly, along with the Google Meet link for your session.",
  },
];

export default function BookJourney() {
  return (
    <section className="py-16" id="bookyoursession">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-semibold text-center text-gray-900">
          Book Your Session
        </h2>

        <p className="mt-6 text-center text-gray-700 leading-relaxed max-w-2xl mx-auto">
          Welcome, LightKeeper! I'm so glad you're taking this first step toward
          caring for your mental health.
        </p>
        <p className="mt-4 text-center text-gray-700 leading-relaxed max-w-2xl mx-auto">
          At Lavender and Light, I strive to offer a safe, compassionate, and
          empowering space - one where you can heal, grow, and feel truly heard.
          This is your space to slow down, reflect, and reconnect with yourself -
          gently and at your own pace.
        </p>

        <div className="mt-10">
          <h3 className="text-center text-2xl font-semibold text-gray-900">How It Works</h3>

          <div className="mt-6 grid gap-6 grid-cols-1 md:grid-cols-3">
            {steps.map((step) => (
              <div
                key={step.number}
                className="bg-gray-50 rounded-lg p-6 flex flex-col"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="flex items-center justify-center h-10 w-10 rounded-full bg-fuchsia-600 text-white font-bold">
                    {step.number}
                  </div>
                  <h4 className="text-lg font-medium text-gray-900">
                    {step.title}
                  </h4>
                </div>
                <p className="text-gray-600 leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}