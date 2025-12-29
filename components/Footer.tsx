import React from "react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-200">
      <div className="max-w-6xl mx-auto px-6 py-16">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold text-fuchsia-400 mb-3">
              Lavender & Light
            </h3>
            <p className="text-gray-400 leading-relaxed text-sm mb-4">
              A safe, compassionate, and non-judgmental space for healing, growth,
              and self-discovery. Professional online counselling services based in
              Bangalore.
            </p>
            <p className="text-xs text-fuchsia-300">
              Counselling Psychologist | Confidential | APA Ethical Standards
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#home" className="text-gray-400 hover:text-fuchsia-400 transition">
                  Home
                </Link>
              </li>
              <li>
                <Link href="#about" className="text-gray-400 hover:text-fuchsia-400 transition">
                  About
                </Link>
              </li>
              <li>
                <Link href="#services" className="text-gray-400 hover:text-fuchsia-400 transition">
                  Services
                </Link>
              </li>
              <li>
                <Link href="#book" className="text-gray-400 hover:text-fuchsia-400 transition">
                  Book Session
                </Link>
              </li>
              <li>
                <Link href="#faq" className="text-gray-400 hover:text-fuchsia-400 transition">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="#contact" className="text-gray-400 hover:text-fuchsia-400 transition">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Services</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#" className="text-gray-400 hover:text-fuchsia-400 transition">
                  Psychotherapy
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-fuchsia-400 transition">
                  Counselling
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-fuchsia-400 transition">
                  Mental Health Wellbeing
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-fuchsia-400 transition">
                  Online Sessions
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 my-8"></div>

        {/* Bottom Section */}
        <div className="space-y-4">
          <p className="text-gray-400 text-sm text-center">
            © 2026 Lavender & Light: Therapy by Annesha. All rights reserved.
          </p>

          <div className="flex flex-col md:flex-row justify-center gap-6 text-sm">
            <Link href="/terms-of-service" className="text-gray-400 hover:text-fuchsia-400 transition">
              Terms of Service
            </Link>
             <span className="text-gray-600">•</span>
            <Link href="/privacy-policy" className="text-gray-400 hover:text-fuchsia-400 transition">
              Privacy Policy
            </Link>
            <span className="text-gray-600">•</span>
            
             <Link href="/refund-policy" className="text-gray-400 hover:text-fuchsia-400 transition">
              Refund Policy
            </Link>
          </div>

          <p className="text-xs text-gray-500 text-center leading-relaxed">
            Professional counselling services • Not for emergency situations • In case
            of emergency, please contact local emergency services
          </p>  


        </div>
      </div>
    </footer>
  );
}