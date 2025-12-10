"use client"

import { Helmet } from "react-helmet-async"
import { Motion } from "../components/animation-provider"

const Privacy = () => {
  return (
    <>
      <Helmet>
        <title>Privacy Policy - Zero Trust Data Protection | Punk Records</title>
        <meta
          name="description"
          content="Punk Records Zero Trust Privacy Policy - We collect minimal data, protect it with military-grade security, and give you complete control. Customer-centric privacy protection."
        />
        <meta
          name="keywords"
          content="privacy policy, data protection, zero trust policy, customer data privacy, data security, privacy rights, punk records privacy"
        />
        <meta property="og:title" content="Privacy Policy - Zero Trust Data Protection | Punk Records" />
        <meta
          property="og:description"
          content="Our Zero Trust Privacy Policy ensures minimal data collection, maximum security, and complete customer control."
        />
        <meta name="twitter:title" content="Privacy Policy - Zero Trust Data Protection | Punk Records" />
        <meta name="robots" content="index, follow" />
      </Helmet>

      <Motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="min-h-screen py-20 px-4 sm:px-6 lg:px-8"
      >
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Zero Trust Privacy Policy
            </h1>
            <p className="text-avocado-text text-lg">
              <strong>Last Updated:</strong> December 10, 2024
            </p>
          </div>

          {/* Philosophy Section */}
          <div className="bg-avocado-gray border border-avocado-light-gray rounded-lg p-8 mb-8">
            <h2 className="text-2xl font-bold text-avocado-green mb-4">
              Our Philosophy: Zero Trust, Maximum Value
            </h2>
            <p className="text-avocado-text leading-relaxed">
              At Punk Records, we operate on a <strong className="text-white">Zero Trust Policy</strong> - we don't trust anyone with your data, including ourselves. We collect only what's absolutely necessary and protect it with military-grade security. You're always in control.
            </p>
          </div>

            {/* Main Content */}
            <div className="space-y-8">
              {/* Section 1 */}
              <section>
                <h2 className="text-3xl font-bold text-avocado-green mb-4">
                  1. What We Collect (The Bare Minimum)
                </h2>
                <p className="text-avocado-text mb-4">
                  We only collect data that's essential to deliver our creative services:
                </p>
                <ul className="list-disc list-inside space-y-2 text-avocado-text ml-4">
                  <li>
                    <strong className="text-white">Contact Information:</strong> Name, email, and phone number - only when you provide it voluntarily through our contact form or service inquiries
                  </li>
                  <li>
                    <strong className="text-white">Project Details:</strong> Information about your project requirements, preferences, and creative briefs - just enough to deliver exceptional creative solutions
                  </li>
                  <li>
                    <strong className="text-white">Payment Information:</strong> Processed directly by secure, PCI-compliant payment gateways (we never see your full card details or store payment information)
                  </li>
                  <li>
                    <strong className="text-white">Communication Records:</strong> Emails and messages exchanged during project collaboration - stored securely for project continuity
                  </li>
                </ul>
              </section>

              {/* Section 2 */}
              <section>
                <h2 className="text-3xl font-bold text-avocado-green mb-4">
                  2. What We Never Collect
                </h2>
                <p className="text-avocado-text mb-4">
                  We believe in privacy by design. We explicitly do NOT collect:
                </p>
                <ul className="list-disc list-inside space-y-2 text-avocado-text ml-4">
                  <li>Your browsing history or website analytics tied to personal identity</li>
                  <li>Location data without your explicit consent and clear purpose</li>
                  <li>Personal information not directly relevant to your project</li>
                  <li>Social media data or third-party profile information</li>
                  <li>Sensitive personal information (financial details, health records, etc.) unless absolutely necessary for your project</li>
                </ul>
              </section>

              {/* Section 3 */}
              <section>
                <h2 className="text-3xl font-bold text-avocado-green mb-4">
                  3. Your Data, Your Control
                </h2>
                <p className="text-avocado-text mb-4">
                  You have complete control over your data. We guarantee:
                </p>
                <ul className="list-disc list-inside space-y-2 text-avocado-text ml-4">
                  <li>
                    <strong className="text-white">Right to Access:</strong> Request all data we have about you anytime - we'll provide it within 48 hours
                  </li>
                  <li>
                    <strong className="text-white">Right to Deletion:</strong> Request permanent deletion of your data with one email - we'll remove it within 7 business days
                  </li>
                  <li>
                    <strong className="text-white">Right to Correction:</strong> Update or correct any inaccurate information instantly
                  </li>
                  <li>
                    <strong className="text-white">Right to Opt-Out:</strong> Unsubscribe from communications with a single click - no questions asked
                  </li>
                  <li>
                    <strong className="text-white">Data Portability:</strong> Export your data in a machine-readable format anytime
                  </li>
                </ul>
              </section>

              {/* Section 4 */}
              <section>
                <h2 className="text-3xl font-bold text-avocado-green mb-4">
                  4. Ironclad Security
                </h2>
                <p className="text-avocado-text mb-4">
                  We protect your data like it's our own. Our security measures include:
                </p>
                <ul className="list-disc list-inside space-y-2 text-avocado-text ml-4">
                  <li>
                    <strong className="text-white">End-to-End Encryption:</strong> All communications and data transfers are encrypted using industry-standard protocols (TLS 1.3, AES-256)
                  </li>
                  <li>
                    <strong className="text-white">Regular Security Audits:</strong> Independent security experts audit our systems quarterly
                  </li>
                  <li>
                    <strong className="text-white">Strict Access Controls:</strong> Only essential personnel have access to your data, and all access is logged and monitored
                  </li>
                  <li>
                    <strong className="text-white">Secure Infrastructure:</strong> Our servers are hosted on enterprise-grade platforms with 99.9% uptime guarantees
                  </li>
                  <li>
                    <strong className="text-white">Incident Response:</strong> If a security breach occurs (which we work tirelessly to prevent), we'll notify you within 24 hours
                  </li>
                </ul>
              </section>

              {/* Section 5 */}
              <section>
                <h2 className="text-3xl font-bold text-avocado-green mb-4">
                  5. Data Sharing & Third Parties
                </h2>
                <p className="text-avocado-text mb-4">
                  We don't sell your data. Ever. We only share data when:
                </p>
                <ul className="list-disc list-inside space-y-2 text-avocado-text ml-4">
                  <li>You explicitly consent to sharing</li>
                  <li>It's necessary to deliver our services (e.g., payment processing, cloud storage)</li>
                  <li>Required by law or legal process</li>
                  <li>To protect our rights or prevent fraud</li>
                </ul>
                <p className="text-avocado-text mt-4">
                  All third-party service providers we work with are vetted for security and privacy compliance.
                </p>
              </section>

              {/* Section 6 */}
              <section>
                <h2 className="text-3xl font-bold text-avocado-green mb-4">
                  6. Value-First Support
                </h2>
                <p className="text-avocado-text mb-4">
                  Privacy concerns? We're here to help - fast:
                </p>
                <ul className="list-disc list-inside space-y-2 text-avocado-text ml-4">
                  <li>
                    <strong className="text-white">Response Time:</strong> Our privacy team responds in <strong className="text-avocado-green">under 15 minutes</strong> during business hours (9 AM - 6 PM IST)
                  </li>
                  <li>
                    <strong className="text-white">Resolution Rate:</strong> We resolve 90% of privacy requests in one interaction because your time is valuable
                  </li>
                  <li>
                    <strong className="text-white">No Fees:</strong> All privacy requests are handled free of charge - it's your right, not a privilege
                  </li>
                </ul>
              </section>

              {/* Section 7 */}
              <section>
                <h2 className="text-3xl font-bold text-avocado-green mb-4">
                  7. Cookies & Tracking
                </h2>
                <p className="text-avocado-text mb-4">
                  We use minimal, essential cookies only:
                </p>
                <ul className="list-disc list-inside space-y-2 text-avocado-text ml-4">
                  <li>Session cookies for website functionality</li>
                  <li>No third-party tracking cookies without consent</li>
                  <li>No cross-site tracking or behavioral advertising</li>
                  <li>You can disable cookies in your browser settings</li>
                </ul>
              </section>

              {/* Section 8 */}
              <section>
                <h2 className="text-3xl font-bold text-avocado-green mb-4">
                  8. Policy Updates
                </h2>
                <p className="text-avocado-text">
                  We may update this policy to reflect changes in our practices or legal requirements. We'll notify you of significant changes via email and update the "Last Updated" date. Continued use of our services after updates constitutes acceptance of the revised policy.
                </p>
              </section>

              {/* Contact Section */}
              <section className="bg-avocado-gray border border-avocado-light-gray rounded-lg p-8 mt-8">
                <h2 className="text-2xl font-bold text-avocado-green mb-4">
                  Contact Our Privacy Team
                </h2>
                <p className="text-avocado-text mb-4">
                  For privacy concerns, data requests, or questions about this policy:
                </p>
                <ul className="space-y-2 text-avocado-text">
                  <li>
                    <strong className="text-white">Email:</strong>{" "}
                    <a
                      href="mailto:privacy@punktech.in"
                      className="text-avocado-green hover:text-avocado-light-green underline"
                    >
                      privacy@punktech.in
                    </a>
                  </li>
                  <li>
                    <strong className="text-white">Response Guarantee:</strong> We guarantee a response within <strong className="text-avocado-green">1 business hour</strong>
                  </li>
                  <li>
                    <strong className="text-white">Data Request Processing:</strong> All data access and deletion requests processed within 48 hours
                  </li>
                </ul>
              </section>
            </div>
          </div>
      </Motion.div>
    </>
  )
}

export default Privacy

