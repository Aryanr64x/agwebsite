import React from "react";
import Image from "next/image";

export default function About() {
  return (
    <section className="py-16 ">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-900">
            About Annesha Guha
          </h2>
          <p className="mt-3 text-gray-600 text-lg">
            Counselling Psychologist based in Bangalore
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left side - Image */}
          <div className="flex justify-center">
            <div className="relative w-80 h-96 rounded-xl overflow-hidden shadow-lg">
              <Image
                src="/images/annesha.jpg"
                alt="Annesha Guha"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Right side - Text */}
          <div className="space-y-4">
            <p className="text-gray-700 leading-relaxed">
              I am a Counselling Psychologist dedicated to creating a safe,
              compassionate, and non-judgmental space for individuals to explore
              their inner world. With training in a range of therapeutic
              interventions, I strive to support people in understanding
              themselves better, building resilience, and leading more
              fulfilling and empowered lives.
            </p>

            <p className="text-gray-700 leading-relaxed">
              My approach is eclectic and client-centered, meaning I draw from
              different evidence-based therapies depending on each individual's
              unique needs, personality, and goals.
            </p>

            <p className="text-gray-700 leading-relaxed">
              At the heart of my work lies the belief that every person has the
              capacity to heal and grow when provided with the right support. My
              role is to help you gain clarity, develop healthy coping
              mechanisms, and rediscover your sense of strength and purpose -
              one step at a time.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}