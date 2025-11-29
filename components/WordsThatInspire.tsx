import React from "react";

type Quote = {
  text: string;
  author: string;
};

const quotes: Quote[] = [
  {
    text: "Everyone passes through a tunnel of darkness in life. A long tunnel that makes you think that you may never see light again. But as there are no tunnels without exits, there is no eternal pain in the world.",
    author: "Hi, Bye Mama! (K-drama)",
  },
  {
    text: "Ah, kindness! What a simple way to tell another struggling soul that there is love to be found in the world",
    author: "A.A. Malee",
  },
];

export default function WordsThatInspire() {
  return (
    <section className="py-16 bg-fuchsia-100">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-semibold text-center text-gray-900">
          Words That Inspire
        </h2>
        <p className="mt-3 text-center text-gray-600">
          Personal favorite quotes
        </p>

        <div className="mt-10 grid gap-8 grid-cols-1 md:grid-cols-2">
          {quotes.map((quote, i) => (
            <div
              key={i}
              className="bg-white rounded-xl shadow-lg p-8 flex flex-col justify-between"
            >
              <p className="text-gray-700 italic leading-relaxed text-lg">
                "{quote.text}"
              </p>
              <p className="mt-6 text-fuchsia-600 font-semibold">
                — {quote.author}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}