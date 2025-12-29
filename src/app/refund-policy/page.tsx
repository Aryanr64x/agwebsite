import React from "react";
import Link from "next/link";
import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";

export default function RefundPolicy() {
  return (
    <div className="bg-fuchsia-100 min-h-screen">
      <Navbar />
      <div className="max-w-4xl mx-auto px-6 py-16">
        <h1 className="text-4xl mt-8 font-bold text-gray-900 mb-8 text-center">
          Refund Policy
        </h1>

        <div className="bg-white rounded-lg shadow-lg p-8 space-y-6 text-gray-700 leading-relaxed">
          <p>
            At Lavender & Light: Therapy by Annesha, we are committed to providing high-quality online counselling and psychotherapy services. This Refund Policy outlines the terms and conditions for cancellations, refunds, and package usage. By booking our services, you agree to the terms outlined below.
          </p>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">1. Payment Terms</h2>
            <p>Full payment is required at the time of booking to confirm a session.</p>
            <p>Pricing may be updated with prior notice and is clearly listed on the website. Booking is to be done online through G-pay / Phone Pe.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">2. Cancellation Policy</h2>
            <ul className="list-disc list-inside mb-4">
              <li>Cancellations must be made at least 24 hours in advance for a full refund.</li>
              <li>Late cancellations or no-shows may be subject to a fee or forfeiture of the session.</li>
              <li>The therapist may reschedule a session with minimum 24 hours' prior notice, offering a new mutually agreeable time without penalty.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">3. Refund Eligibility</h2>
            <p>Refunds are processed based on the following conditions:</p>
            <ul className="list-disc list-inside mb-4">
              <li>Full refund for cancellations made 24 hours or more before the scheduled session.</li>
              <li>No refund for cancellations made less than 24 hours before the session or for no-shows.</li>
              <li>Refunds for unused sessions in packages are not available, as packages are designed for continuity of care.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">4. Package Validity & Usage</h2>
            <p>Package validity is maintained to support continuity in therapy and to allow session slots to be planned and reserved with care.</p>
            <ul className="list-disc list-inside mb-4">
              <li><strong>Single Session Package:</strong> Valid for 30 days from the date of purchase.</li>
              <li><strong>4-Session Package:</strong> Valid for 8 weeks (2 months) from the date of purchase.</li>
              <li><strong>6-Session Package:</strong> Valid for 12 weeks (3 months) from the date of purchase.</li>
            </ul>
            <p><strong>Additional Terms:</strong></p>
            <ul className="list-disc list-inside mb-4">
              <li>Sessions must be used within the validity period stated above.</li>
              <li>Unused sessions will expire after the validity period and are non-refundable and non-transferable.</li>
              <li>Validity extensions may be considered only in exceptional circumstances, at the discretion of the therapist.</li>
              <li>Packages are intended to support continuity of care and therapeutic progress.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">5. Refund Process</h2>
            <p>To request a refund:</p>
            <ul className="list-disc list-inside mb-4">
              <li>Contact us via email or the website contact form with your booking details.</li>
              <li>Refunds will be processed within 7-10 business days after approval.</li>
              <li>Refunds will be issued to the original payment method.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">6. Exceptions</h2>
            <p>In cases of technical issues, therapist unavailability, or other unforeseen circumstances, we may offer rescheduling or credits at our discretion. Refunds for such cases will be evaluated on a case-by-case basis.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">7. Contact Information</h2>
            <p>If you have any questions about this Refund Policy or need to request a refund, please contact us at [contact information].</p>
          </section>

         
        </div>
      </div>


      <Footer />
    </div>
  );
}