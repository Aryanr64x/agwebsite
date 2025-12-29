import React from "react";
import Link from "next/link";
import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";

export default function TermsOfService() {
  return (
    <div className="bg-fuchsia-100 min-h-screen">
      <Navbar />
      <div className="max-w-4xl mx-auto px-6 py-16">
        <h1 className="text-4xl mt-8 font-bold text-gray-900 mb-8 text-center">
          Terms of Service
        </h1>

        <div className="bg-white rounded-lg shadow-lg p-8 space-y-6 text-gray-700 leading-relaxed">
          <p>
            Welcome to Lavender & Light: Therapy by Annesha, an online counselling and psychotherapy service committed to offering emotional support, healing, and personal growth. This write-up outlines and provides insights on important information about our professional yet compassionate services with ethical responsibilities, and practice policies. It also encompasses key principles from the Mental Healthcare Act, 2017, a law that provides for mental healthcare and services for persons with mental illness and to protect, promote and fulfil their rights and the American Psychological Association (APA) Ethical Guidelines, which guide the standards of therapeutic practice, confidentiality, and professional conduct.
          </p>
          <p>
            The details mentioned below are essential for you to understand before beginning the therapeutic services from us. By scheduling an appointment to accessing our services, you acknowledge and agree to the terms enumerated below.
          </p>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">1. Nature of Services</h2>
            <p>Lavender & Light offers:</p>
            <ul className="list-disc list-inside mb-4">
              <li>Online counselling</li>
              <li>Online psychotherapy</li>
              <li>Mental well-being sessions</li>
              <li>Evidence-based therapeutic interventions (CBT, REBT, EFT, ACT, SFBT, Mindfulness-based approaches, Supportive Psychotherapy)</li>
            </ul>
            <p>We do not solicit or offer:</p>
            <ul className="list-disc list-inside mb-4">
              <li>Emergency or crisis intervention</li>
              <li>Medication or psychiatric consultation</li>
              <li>Court-mandated evaluations</li>
              <li>Medical advice</li>
              <li>In-person sessions</li>
            </ul>
            <p>If you/ your relations are in immediate danger or experiencing a crisis related to harm to self or harm to others, please contact your nearest emergency service or hospital immediately.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">2. Eligibility</h2>
            <p>Services are available to:</p>
            <ul className="list-disc list-inside mb-4">
              <li>Adolescents (13–17 years) - only with mandatory parental/guardian booking and supervision; and</li>
              <li>Adults (18+)</li>
            </ul>
            <p>Individuals under 18 years cannot independently book, register, or engage in services nor we accept any such booking.</p>
            <p>Any unsupervised use of our services by minors is the sole responsibility of parents/guardians.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">3. Client -Therapist Relationship</h2>
            <p>This relationship is strictly professional and exists solely for providing therapeutic purposes. To maintain ethical boundaries, we do not indulge or encourage:</p>
            <ul className="list-disc list-inside mb-4">
              <li>Any personal, social, financial, or dual relationships</li>
              <li>Any gift exchange or favors</li>
              <li>Any engagement on social media</li>
              <li>Communication outside sessions is limited to scheduling or essential matters incidental thereto</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">4. Confidentiality</h2>
            <p>Information shared and exchanged during sessions is strictly confidential except when disclosure is legally or ethically required, including:</p>
            <ul className="list-disc list-inside mb-4">
              <li>Risk of harm to self</li>
              <li>Risk of harm to others</li>
              <li>Abuse or neglect of a minor, elder, or vulnerable person</li>
              <li>Legal or court-mandated orders</li>
            </ul>
            <p>Only the minimal necessary information will be shared to ensure safety and confidentiality. We shall not store, keep or process any personal identifiable information of any individual/ client, who accepts our services, in any digital form.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">5. Emergency Situations</h2>
            <p>Lavender & Light does not offer emergency or crisis services.</p>
            <p>In situations involving:</p>
            <ul className="list-disc list-inside mb-4">
              <li>Imminent or potential harm to self</li>
              <li>Intent or risk of harm to others</li>
              <li>Severe psychological distress</li>
            </ul>
            <p>Clients must immediately seek emergency support through local authorities or medical services as may be considered appropriate. Lavender & Light is not responsible for managing emergency/ies outside the therapeutic space.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">6. Session Duration</h2>
            <p>Each session lasts 45-60 minutes. Session shall commence and end promptly to respect all scheduled appointments.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">7. Therapist Rescheduling</h2>
            <p>The therapist may reschedule a pre-appointed session with:</p>
            <ul className="list-disc list-inside mb-4">
              <li>Minimum 24 hours’ prior notice</li>
            </ul>
            <p>In rare or unavoidable situations, a new and mutually agreeable time will be offered without penalty.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">8. Client Responsibilities</h2>
            <p>Clients agree to:</p>
            <ul className="list-disc list-inside mb-4">
              <li>Attend sessions on time</li>
              <li>Provide accurate information without any concealment</li>
              <li>Engage respectfully and responsibly</li>
              <li>Avoid attending sessions under the influence of any prohibitive substance</li>
              <li>Use website services appropriately</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">9. Payments</h2>
            <p>Full payment is required at the time of booking/ taking appointment to confirm a session.</p>
            <p>Pricing may be updated with prior notice and is clearly listed on the website. Booking is to be done online through G-pay / Phone Pe.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">10. Cancellation & Refunds</h2>
            <p>Cancellations and refunds follow the Cancellation & Refund Policy detailed on the website.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">11. Package Validity & Usage</h2>
            <p>Package validity is maintained to support continuity in therapy and to allow session slots to be planned and reserved with care.</p>
            <ul className="list-disc list-inside mb-4">
              <li><strong>Single Session Package</strong><br />The 1-session package is valid for 30 days from the date of purchase.</li>
              <li><strong>4-Session Package</strong><br />The 4-session package is valid for 8 weeks (2 months) from the date of purchase.</li>
              <li><strong>6-Session Package</strong><br />The 6-session package is valid for 12 weeks (3 months) from the date of purchase.</li>
            </ul>
            <p><strong>Additional Terms</strong></p>
            <ul className="list-disc list-inside mb-4">
              <li>Sessions must be used within the validity period stated above.</li>
              <li>Unused sessions will expire after the validity period and are non-refundable and non-transferable.</li>
              <li>Validity extensions may be considered only in exceptional circumstances, at the discretion of the therapist.</li>
              <li>Packages are intended to support continuity of care and therapeutic progress.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">12. Professional Records</h2>
            <p>Clinical notes may be maintained to support quality care. These may include:</p>
            <ul className="list-disc list-inside mb-4">
              <li>Presenting concerns</li>
              <li>Progress summaries</li>
              <li>Goals</li>
              <li>Therapeutic interventions used</li>
            </ul>
            <p>Records are stored securely and confidentially.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">13. Limitation of Responsibility</h2>
            <p>Lavender & Light and the therapist are not responsible or liable for:</p>
            <ul className="list-disc list-inside mb-4">
              <li>Any form of harm to self, occurring outside sessions</li>
              <li>Harm caused to others</li>
              <li>Decisions, behaviors, or actions taken by the client outside therapy</li>
              <li>Misinterpretation or misuse of therapeutic content</li>
              <li>Consequences of withholding or misrepresenting information</li>
            </ul>
            <p>Clients retain full responsibility for their behaviour both outside the therapeutic environment as well as during the ongoing session. The clients also indemnify Lavender & Light from any consequences/ harm caused to self-by-self behavior</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">14. Intellectual Property</h2>
            <p>All website content including but not limited to text, branding, therapeutic descriptions, scripts, worksheets, downloadable materials, and design etc. shall be the intellectual property of Lavender & Light.</p>
            <p>Users may not:</p>
            <ul className="list-disc list-inside mb-4">
              <li>Copy</li>
              <li>Reproduce</li>
              <li>Distribute</li>
              <li>Modify</li>
              <li>Share</li>
              <li>Sell</li>
              <li>Use for commercial or training purposes without written permission.</li>
            </ul>
            <p>Any unauthorized use of the website content by anyone without written consent, shall attract appropriate legal actions in accordance with applicable laws, under the jurisdiction of competent courts in Bengaluru.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">15. Disclaimer</h2>
            <p>Lavender and Light is not responsible for:</p>
            <ul className="list-disc list-inside mb-4">
              <li>Any form of harm to self that occurs outside sessions</li>
              <li>Harm caused to others</li>
              <li>Crises arising outside the session</li>
              <li>Choices or actions made independently by the client</li>
            </ul>
            <p>Emergency or crisis situations must be directed to appropriate medical or emergency services.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">16. Changes to Terms</h2>
            <p>Terms and conditions of the services may be revised periodically as and when required. Continuing to use the website implies acceptance of updated terms.</p>
          </section>

          <hr className="my-8" />

          <p>All content included on this Website is the property of Lavender & Light (trade name "Lavender and Light" or "we" or "us"). Content means any text, graphics, images, audio, video, software, data, page layout, coding, or any other information which appears on or forms part of this Website. You must not reproduce, modify, copy, distribute, or use for commercial purposes, any content without the express written consent of Lavender and Light.</p>
          <p>You may not use the Website in any way which causes damage to the Website or interferes with any persons use or enjoyment of the Website. You may not use the Website in any way which is harmful, unlawful, illegal, abusive, harassing, threatening, or otherwise objectionable or in breach of any applicable law, regulation, or government order.</p>
          <p>Any content on this Website is provided on an "as is" and "as available" basis. We provide no guarantee that the Website will be free of defects and/or faults. While every step will be taken to ensure information is accurate at the time of publication, we cannot guarantee and are under no obligation to ensure that any information will be updated. We make no claims regarding the accuracy, adequacy, validity, reliability, availability, or completeness of the information on the Website. We accept no liability for loss or damage of any kind incurred as a result of your use of the Website or reliance on the information provided. Your use of the Website, and how you use the information contained on the Website, is solely at your own risk and consequence.</p>
          <p>This site may contain testimonials by users of our services. These testimonials are from real-life clients based on their own experiences and opinions, and are personal to them. We do not claim, and you should not assume, that every person accessing our services will have the same experience or outcome. Individual results will vary. Testimonials shall appear on the site in-verbatim as provided by the service user, but may have been shortened for brevity and relevance. Users are not paid or otherwise rewarded for providing testimonials or other feedback about their experiences of our services. Testimonials are not intended, nor should they be construed, as claims that our services can be used to diagnose, treat, mitigate, cure, prevent, or otherwise be used for any disease or medical condition. No testimonials have been clinically proven or evaluated.</p>

          <hr className="my-8" />

          <h2 className="text-3xl font-bold text-gray-900 mb-6">LEGAL DISCLAIMER</h2>
          <p>This Legal Disclaimer outlines important limitations, responsibilities, and conditions related to your use of Lavender and Light ("we," "our," "the therapist," "the practice") and its services. By accessing this website or engaging in counselling sessions, you agree to the terms described below.</p>

          <section>
            <h3 className="text-xl font-semibold text-gray-800 mb-4">1. Nature of Services</h3>
            <p>Lavender & Light provides online counselling and psychotherapy services, not medical treatment.</p>
            <p>We do not provide:</p>
            <ul className="list-disc list-inside mb-4">
              <li>Emergency crisis intervention</li>
              <li>Suicide prevention services</li>
              <li>Psychiatric diagnosis</li>
              <li>Medication prescriptions</li>
              <li>Medical advice</li>
              <li>Court-mandated evaluations</li>
            </ul>
            <p>For immediate danger or risk of harm to self or harm to others, you must contact local emergency services or the nearest hospital immediately.</p>
          </section>

          <section>
            <h3 className="text-xl font-semibold text-gray-800 mb-4">2. Legal Actions</h3>
            <p>If a user engages in behavior that defames, maligns, tarnishes, or intentionally harms the reputation or goodwill of Lavender & Light - including spreading false information, hate, or malicious content - appropriate legal action may be initiated.</p>
            <p>This includes defamatory comments posted:</p>
            <ul className="list-disc list-inside mb-4">
              <li>On social media</li>
              <li>On review websites</li>
              <li>In messages, emails, or online platforms</li>
              <li>In any space where harm to reputation is intended</li>
            </ul>
            <p>We encourage open communication but do not tolerate abusive, threatening, or defamatory conduct.</p>
          </section>

          <section>
            <h3 className="text-xl font-semibold text-gray-800 mb-4">3. Legal Disclaimer</h3>
            <p><strong>a) Emergency Disclaimer</strong></p>
            <p>Lavender & Light is not:</p>
            <ul className="list-disc list-inside mb-4">
              <li>A suicide prevention helpline</li>
              <li>An emergency response service</li>
              <li>A substitute for psychiatric or medical care</li>
            </ul>
            <p>If you are in crisis, experiencing severe distress, or at risk of harm to self or harm to others, seek immediate help from:</p>
            <ul className="list-disc list-inside mb-4">
              <li>Local emergency helplines</li>
              <li>Hospital emergency departments</li>
              <li>Crisis intervention centers</li>
            </ul>
            <p>Our services are not suitable for emergency support.</p>

            <p><strong>b) Service Availability</strong></p>
            <p>We may modify, suspend, or discontinue any feature of the website or services without prior notice.</p>
            <p>We are not liable for:</p>
            <ul className="list-disc list-inside mb-4">
              <li>Service interruptions</li>
              <li>Technical issues beyond our control</li>
              <li>Sudden unavailability of features</li>
              <li>Temporary downtime (maintenance, upgrades, outages)</li>
            </ul>

            <p><strong>c) Events Beyond Control</strong></p>
            <p>We are not responsible for delays or failures due to circumstances beyond our reasonable control, including:</p>
            <ul className="list-disc list-inside mb-4">
              <li>Natural disasters</li>
              <li>Internet or electrical failures</li>
              <li>Government restrictions</li>
              <li>Acts of hostility or sabotage</li>
              <li>System malfunctions</li>
            </ul>
          </section>

          <section>
            <h3 className="text-xl font-semibold text-gray-800 mb-4">4. Exceptions & Limitations</h3>
            <p><strong>a) Quality & Representation</strong></p>
            <p>While we maintain high ethical and professional standards, we do not make guarantees regarding:</p>
            <ul className="list-disc list-inside mb-4">
              <li>Outcomes of therapy</li>
              <li>The suitability of services for every individual</li>
              <li>Results or timelines of therapeutic progress</li>
            </ul>
            <p>Therapy is a collaborative process and varies based on individual needs and effort.</p>

            <p><strong>b) Third-Party Information</strong></p>
            <p>We do not endorse or guarantee:</p>
            <ul className="list-disc list-inside mb-4">
              <li>External websites linked from our platform</li>
              <li>Third-party tools or resources</li>
              <li>Any content shared by users outside the therapeutic space</li>
            </ul>
            <p>Users should verify third-party information independently.</p>

            <p><strong>c) Website Interruptions</strong></p>
            <p>Occasional interruptions may occur due to maintenance, upgrades, or technical outages.</p>
            <p>We are not obligated to notify users of such interruptions.</p>

            <p><strong>d) User Content Liability</strong></p>
            <p>If users post comments, messages, or information that violates laws, ethics, or these terms, the user is solely responsible for any consequences.</p>
            <p>We reserve the right to remove inappropriate content without notice.</p>

            <p><strong>e) Content Removal & Storage</strong></p>
            <p>Removed content may still be stored internally for compliance with legal obligations and cannot always be retrieved.</p>

            <p><strong>f) Termination of Access</strong></p>
            <p>We may suspend or terminate access for violations of terms or misuse of the website.</p>
            <p>Even after termination, you remain bound by all relevant policies.</p>
          </section>

          <section>
            <h3 className="text-xl font-semibold text-gray-800 mb-4">5. Warranty & Limitation of Liability</h3>
            <p><strong>a) "As Is" Services</strong></p>
            <p>All services are provided "as is", without warranties regarding:</p>
            <ul className="list-disc list-inside mb-4">
              <li>Continuous availability</li>
              <li>Error-free functionality</li>
              <li>Perfect security or reliability</li>
            </ul>
            <p>We disclaim all implied warranties to the fullest extent permitted by law.</p>

            <p><strong>b) Third-Party Products & Services</strong></p>
            <p>We are not responsible for:</p>
            <ul className="list-disc list-inside mb-4">
              <li>Third-party websites</li>
              <li>External links</li>
              <li>Services advertised elsewhere</li>
              <li>Any dealings between users and external entities</li>
            </ul>

            <p><strong>c) Limitation of Damages</strong></p>
            <p>To the fullest extent permitted by Indian law, Lavender & Light is not liable for:</p>
            <ul className="list-disc list-inside mb-4">
              <li>Loss of data</li>
              <li>Loss of profits</li>
              <li>Emotional distress outside sessions</li>
              <li>Indirect, incidental, or punitive damages</li>
              <li>Actions taken by the client outside therapy</li>
            </ul>
            <p>Clients assume full responsibility for their choices and behaviors.</p>
          </section>

          <section>
            <h3 className="text-xl font-semibold text-gray-800 mb-4">6. Indemnity</h3>
            <p>You agree to indemnify and hold harmless Lavender & Light, its therapist, affiliates, and associates from claims arising out of:</p>
            <ul className="list-disc list-inside mb-4">
              <li>Your misuse of the website</li>
              <li>Violation of laws or policies</li>
              <li>Sharing false information</li>
              <li>Posting harmful or defamatory content</li>
              <li>Misrepresenting yourself or your condition</li>
            </ul>
            <p>This indemnity remains binding even after you discontinue use of the website.</p>
          </section>

          <section>
            <h3 className="text-xl font-semibold text-gray-800 mb-4">7. Violation of Terms</h3>
            <p>If you breach these terms, Lavender & Light may:</p>
            <ul className="list-disc list-inside mb-4">
              <li>Suspend or permanently disable access</li>
              <li>Pursue legal remedy if necessary</li>
              <li>Remove harmful content</li>
              <li>Restrict future use</li>
            </ul>
          </section>

          
        </div>
      </div>

      <Footer />
    </div>
  );
}