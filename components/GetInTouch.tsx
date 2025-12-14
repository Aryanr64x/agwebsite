import React from "react";

type Contact = {
  label: string;
  value: string;
};

const contacts: Contact[] = [
  {
    label: "Email",
    value: "hello@lavenderandlight.com",
  },
  {
    label: "Phone",
    value: "+91 XXXXX XXXXX",
  },
  {
    label: "Availability",
    value: "By appointment only",
  },
  {
    label: "Location",
    value: "Bangalore | Online Sessions Available",
  },
];

export default function GetInTouch() {
  return (
    <section className="py-16 " id="getintouch">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-semibold text-center text-gray-900">
          Get in Touch
        </h2>
        <p className="mt-3 text-center text-gray-600 max-w-2xl mx-auto">
          Ready to begin your journey? Reach out to book your session or ask any
          questions.
        </p>

        <div className="mt-10 grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-2">
          {contacts.map((contact, i) => (
            <div
              key={i}
              className="bg-white border border-gray-200 rounded-xl shadow-lg p-8 flex flex-col justify-center hover:shadow-xl transition-shadow"
            >
              <h3 className="text-lg font-semibold text-fuchsia-600">
                {contact.label}
              </h3>
              <p className="mt-3 text-gray-700 text-lg">{contact.value}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}