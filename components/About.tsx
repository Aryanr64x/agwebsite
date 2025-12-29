"use client";
import React, { useState } from "react";
import Image from "next/image";

export default function About() {
  const [open, setOpen] = useState(false);

  return (
    <section className="py-16" id="about">
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
                src="/about.jpg"
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

            <div className="mt-6 text-center">
              <button
                onClick={() => setOpen(true)}
                className="text-fuchsia-600 hover:text-fuchsia-700 font-semibold underline cursor-pointer"
              >
                Read More
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Modal */}
      {open && (
        <div
          className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center px-4"
          onClick={() => setOpen(false)}
        >
          <div
            className="relative bg-white w-full max-w-2xl max-h-[80vh] rounded-xl shadow-xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setOpen(false)}
              className="absolute top-4 right-4 text-xl font-bold z-10 cursor-pointer"
            >
              ✕
            </button>

            {/* Content */}
            <div className="p-8 overflow-y-auto h-[70vh]">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                More About Annesha Guha
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4">
               
              </p>
             

              <h4 className="text-xl font-semibold text-gray-900 mb-2 mt-6">
                Education:
              </h4>
              <ul className="list-disc list-inside text-gray-700 leading-relaxed mb-4">
                <li>M.A. Counselling Psychology from Chhatrapati Shivaji Maharaj University, Navi Mumbai</li>
                <li>B.A. (Hons) Applied Psychology from Amity University, Mumbai</li>
                <li>12th Grade (CBSE) from Delhi Public School, Joka, Kolkata</li>
                <li>10th Grade (CBSE) from Delhi Public School, Joka, Kolkata</li>
              </ul>

              <h4 className="text-xl font-semibold text-gray-900 mb-2">
                Professional courses and certifications:
              </h4>
              <ul className="list-disc list-inside text-gray-700 leading-relaxed">
                <li>Certification in Cognitive Behavioural Therapy - HEALTALK.IN and Therapy By Saachi, Mumbai</li>
                <li>Certification in Rational Emotive Behavioural Therapy - HEALTALK.IN and Therapy By Saachi, Mumbai</li>
                <li>Certification in Dialectical Behaviour Therapy - HEALTALK.IN and Therapy By Saachi, Mumbai</li>
                <li>Certification in Emotion Focused Therapy - HEALTALK.IN and Therapy By Saachi, Mumbai</li>
                <li>Trained in Counselling and Psychotherapy - HEALTALK.IN and Therapy By Saachi, Mumbai</li>
                <li>Trained in Solution-Focused Brief Therapy and Acceptance and Commitment Therapy - HEALTALK.IN and Therapy By Saachi, Mumbai</li>
              </ul>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}