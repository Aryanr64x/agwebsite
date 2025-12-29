import React from "react";
import Link from "next/link";
import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";

export default function PrivacyPolicy() {
  return (
    <div className="bg-fuchsia-100 min-h-screen">
      <Navbar />
      <div className="max-w-4xl mx-auto px-6 py-16">
        <h1 className="text-4xl mt-8 font-bold text-gray-900 mb-8 text-center">
          Privacy Policy
        </h1>

        <div className="bg-white rounded-lg shadow-lg p-8 space-y-6 text-gray-700 leading-relaxed">
          <p>
            At Lavender & Light: Therapy by Annesha, we are committed to protecting your privacy and ensuring the confidentiality of your personal information. This Privacy Policy outlines how we collect, use, store, and protect your information in compliance with applicable laws, including the Mental Healthcare Act, 2017, and APA Ethical Guidelines. By using our services, you consent to the practices described in this policy.
          </p>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">1. Information We Collect</h2>
            <p>We collect minimal information necessary to provide our online counselling and psychotherapy services:</p>
            <ul className="list-disc list-inside mb-4">
              <li>Basic contact information for scheduling sessions (e.g., name, email, phone number for booking purposes only).</li>
              <li>Payment information processed through secure third-party platforms (G-pay/Phone Pe) – we do not store payment details.</li>
              <li>Session-related information shared during therapy for therapeutic purposes.</li>
            </ul>
            <p>We do not collect or store any personal identifiable information (PII) in digital form beyond what is necessary for immediate service provision.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">2. How We Use Your Information</h2>
            <p>Your information is used solely for:</p>
            <ul className="list-disc list-inside mb-4">
              <li>Scheduling and conducting therapy sessions.</li>
              <li>Communication related to appointments and essential therapeutic matters.</li>
              <li>Maintaining clinical records to support quality care (stored securely and confidentially).</li>
              <li>Ensuring compliance with legal and ethical obligations.</li>
            </ul>
            <p>We do not use your information for marketing, research, or any other purposes without your explicit consent.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">3. Confidentiality and Data Sharing</h2>
            <p>All information shared during sessions is strictly confidential and protected by professional ethical standards. Information may only be disclosed in limited circumstances, such as:</p>
            <ul className="list-disc list-inside mb-4">
              <li>Risk of harm to self or others.</li>
              <li>Abuse or neglect of vulnerable individuals.</li>
              <li>Legal or court-mandated requirements.</li>
            </ul>
            <p>Only the minimal necessary information will be shared to ensure safety. We do not share your information with third parties except as required by law.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">4. Data Storage and Security</h2>
            <p>We prioritize your privacy and security:</p>
            <ul className="list-disc list-inside mb-4">
              <li>We do not store, keep, or process any personal identifiable information in digital form.</li>
              <li>Clinical notes and records are maintained securely in non-digital formats where possible.</li>
              <li>Any digital communications are handled through secure, encrypted platforms.</li>
              <li>Access to information is limited to authorized personnel only.</li>
            </ul>
            <p>While we take reasonable measures to protect your information, we cannot guarantee absolute security against all potential threats.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">5. Data Retention</h2>
            <p>Information is retained only as long as necessary for therapeutic purposes and legal compliance. Clinical records may be kept for a reasonable period to support ongoing care, after which they are securely disposed of.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">6. Your Rights</h2>
            <p>You have the right to:</p>
            <ul className="list-disc list-inside mb-4">
              <li>Access your clinical records (subject to therapeutic appropriateness).</li>
              <li>Request corrections to any inaccuracies in your information.</li>
              <li>Withdraw consent for information processing (though this may affect service provision).</li>
              <li>Request deletion of information where legally permissible.</li>
            </ul>
            <p>To exercise these rights, please contact us directly.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">7. Cookies and Website Analytics</h2>
            <p>Our website may use cookies or similar technologies for functionality and analytics. These do not collect personal information and can be managed through your browser settings.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">8. Third-Party Services</h2>
            <p>We use secure third-party platforms for payments and scheduling. These providers have their own privacy policies, and we encourage you to review them. We are not responsible for their data practices.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">9. International Data Transfers</h2>
            <p>As our services are online, information may be processed in different jurisdictions. We ensure compliance with applicable data protection laws.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">10. Changes to This Policy</h2>
            <p>This Privacy Policy may be updated periodically. We will notify you of significant changes. Continued use of our services implies acceptance of the updated policy.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">11. Contact Us</h2>
            <p>If you have any questions about this Privacy Policy or wish to exercise your rights, please contact us at [contact information].</p>
          </section>


        </div>
      </div>



      <Footer />
    </div>
  );
}