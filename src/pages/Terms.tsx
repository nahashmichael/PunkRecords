"use client"

import { Helmet } from "react-helmet-async"
import { Motion } from "../components/animation-provider"

const Terms = () => {
  return (
    <>
      <Helmet>
        <title>Terms of Service - Customer-Centric Service Agreement | Punk Records</title>
        <meta
          name="description"
          content="Punk Records Terms of Service - Customer-first terms with value guarantees, rapid support commitments, and fair dispute resolution. Your rights protected."
        />
        <meta
          name="keywords"
          content="terms of service, service agreement, customer rights, value guarantee, rapid support, punk records terms"
        />
        <meta property="og:title" content="Terms of Service - Customer-Centric Agreement | Punk Records" />
        <meta
          property="og:description"
          content="Our customer-first terms ensure you get maximum value, fastest support, and complete protection of your rights."
        />
        <meta name="twitter:title" content="Terms of Service - Customer-Centric Agreement | Punk Records" />
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
              Customer-Centric Terms of Service
            </h1>
            <p className="text-avocado-text text-lg">
              <strong>Last Updated:</strong> December 10, 2024
            </p>
          </div>

          {/* Philosophy Section */}
          <div className="bg-avocado-gray border border-avocado-light-gray rounded-lg p-8 mb-8">
            <h2 className="text-2xl font-bold text-avocado-green mb-4">
              Our Promise: Value, Speed, Fairness
            </h2>
            <p className="text-avocado-text leading-relaxed">
              We're not happy unless you're thrilled. These terms exist to protect <strong className="text-white">your interests first</strong>, ensure you get maximum value, and guarantee the fastest support in the industry.
            </p>
          </div>

            {/* Main Content */}
            <div className="space-y-8">
              {/* Section 1 */}
              <section>
                <h2 className="text-3xl font-bold text-avocado-green mb-4">
                  1. Value Guarantee
                </h2>
                <p className="text-avocado-text mb-4">
                  We're committed to delivering exceptional value:
                </p>
                <ul className="list-disc list-inside space-y-2 text-avocado-text ml-4">
                  <li>
                    <strong className="text-white">Pay Only for What You Use:</strong> No hidden fees, no surprise charges. You see exactly what you're paying for upfront
                  </li>
                  <li>
                    <strong className="text-white">30-Day Money-Back Guarantee:</strong> Not satisfied? Get a full refund within 30 days of service delivery - no questions asked
                  </li>
                  <li>
                    <strong className="text-white">Price-Match Guarantee:</strong> Find a better deal elsewhere? We'll beat it by 10% or match it - your choice
                  </li>
                  <li>
                    <strong className="text-white">Transparent Pricing:</strong> All costs are clearly communicated before work begins - no surprises
                  </li>
                </ul>
              </section>

              {/* Section 2 */}
              <section>
                <h2 className="text-3xl font-bold text-avocado-green mb-4">
                  2. Rapid Support Commitment
                </h2>
                <p className="text-avocado-text mb-4">
                  We know your time is valuable. Our support commitments:
                </p>
                <ul className="list-disc list-inside space-y-2 text-avocado-text ml-4">
                  <li>
                    <strong className="text-white">Urgent Issues:</strong> <strong className="text-avocado-green">15-minute response time</strong> for critical problems affecting your project
                  </li>
                  <li>
                    <strong className="text-white">Standard Requests:</strong> <strong className="text-avocado-green">1-hour response time</strong> for general inquiries and support requests
                  </li>
                  <li>
                    <strong className="text-white">24/7 Emergency Support:</strong> For active projects, we provide round-the-clock emergency support to ensure continuity
                  </li>
                  <li>
                    <strong className="text-white">First-Contact Resolution:</strong> We aim to resolve 90% of issues in the first interaction
                  </li>
                </ul>
              </section>

              {/* Section 3 */}
              <section>
                <h2 className="text-3xl font-bold text-avocado-green mb-4">
                  3. Your Rights
                </h2>
                <p className="text-avocado-text mb-4">
                  You retain full control and ownership:
                </p>
                <ul className="list-disc list-inside space-y-2 text-avocado-text ml-4">
                  <li>
                    <strong className="text-white">100% Ownership:</strong> You own 100% of your creative work, source files, and deliverables upon final payment
                  </li>
                  <li>
                    <strong className="text-white">Cancel Anytime:</strong> Cancel your project or service with no penalties (you only pay for work completed)
                  </li>
                  <li>
                    <strong className="text-white">Source Files:</strong> Get all source files, raw materials, and project assets upon request - no extra charges
                  </li>
                  <li>
                    <strong className="text-white">Revision Rights:</strong> Reasonable revisions included in your package - we work until you're satisfied
                  </li>
                  <li>
                    <strong className="text-white">Usage Rights:</strong> Use your deliverables however you want - commercial, personal, or promotional
                  </li>
                </ul>
              </section>

              {/* Section 4 */}
              <section>
                <h2 className="text-3xl font-bold text-avocado-green mb-4">
                  4. Our Responsibilities
                </h2>
                <p className="text-avocado-text mb-4">
                  We hold ourselves to the highest standards:
                </p>
                <ul className="list-disc list-inside space-y-2 text-avocado-text ml-4">
                  <li>
                    <strong className="text-white">On-Time Delivery:</strong> Deliver on time or a discount applies - we take deadlines seriously
                  </li>
                  <li>
                    <strong className="text-white">Quality Guarantee:</strong> Fix errors at our cost - if we make a mistake, we fix it free
                  </li>
                  <li>
                    <strong className="text-white">Complete Transparency:</strong> Regular updates, clear communication, and no hidden surprises
                  </li>
                  <li>
                    <strong className="text-white">Professional Standards:</strong> All work meets industry standards and your agreed-upon specifications
                  </li>
                  <li>
                    <strong className="text-white">Data Protection:</strong> We protect your project data and intellectual property with the same care as our own
                  </li>
                </ul>
              </section>

              {/* Section 5 */}
              <section>
                <h2 className="text-3xl font-bold text-avocado-green mb-4">
                  5. Fair Use Policy
                </h2>
                <p className="text-avocado-text mb-4">
                  We trust you to:
                </p>
                <ul className="list-disc list-inside space-y-2 text-avocado-text ml-4">
                  <li>
                    <strong className="text-white">Respect Our Intellectual Property:</strong> Don't use our branding, methodologies, or proprietary tools without permission
                  </li>
                  <li>
                    <strong className="text-white">Provide Accurate Information:</strong> Give us accurate project details, requirements, and feedback to ensure quality delivery
                  </li>
                  <li>
                    <strong className="text-white">Timely Payments:</strong> Make payments as agreed in your service agreement to maintain project momentum
                  </li>
                  <li>
                    <strong className="text-white">Respectful Communication:</strong> Maintain professional and respectful communication throughout the project
                  </li>
                  <li>
                    <strong className="text-white">No Unauthorized Sharing:</strong> Don't share access credentials, proprietary information, or project materials with unauthorized parties
                  </li>
                </ul>
              </section>

              {/* Section 6 */}
              <section>
                <h2 className="text-3xl font-bold text-avocado-green mb-4">
                  6. Payment Terms
                </h2>
                <p className="text-avocado-text mb-4">
                  Fair and transparent payment structure:
                </p>
                <ul className="list-disc list-inside space-y-2 text-avocado-text ml-4">
                  <li>
                    <strong className="text-white">Payment Schedule:</strong> Typically 50% upfront, 50% upon completion - flexible arrangements available
                  </li>
                  <li>
                    <strong className="text-white">Accepted Methods:</strong> Bank transfer, UPI, credit/debit cards, and other secure payment methods
                  </li>
                  <li>
                    <strong className="text-white">Late Payment:</strong> We understand delays happen - just communicate with us, and we'll work out a solution
                  </li>
                  <li>
                    <strong className="text-white">Refunds:</strong> Full refund available within 30 days if not satisfied, or pro-rated refund for work not yet started
                  </li>
                </ul>
              </section>

              {/* Section 7 */}
              <section>
                <h2 className="text-3xl font-bold text-avocado-green mb-4">
                  7. Intellectual Property
                </h2>
                <p className="text-avocado-text mb-4">
                  Clear ownership rights:
                </p>
                <ul className="list-disc list-inside space-y-2 text-avocado-text ml-4">
                  <li>
                    <strong className="text-white">Your Work:</strong> You own all deliverables, creative assets, and final products upon full payment
                  </li>
                  <li>
                    <strong className="text-white">Our Tools:</strong> We retain rights to our proprietary tools, methodologies, and internal processes
                  </li>
                  <li>
                    <strong className="text-white">Portfolio Usage:</strong> We may request permission to showcase your project in our portfolio - you can always decline
                  </li>
                  <li>
                    <strong className="text-white">Third-Party Assets:</strong> Any third-party assets (fonts, stock images, etc.) are properly licensed for your use
                  </li>
                </ul>
              </section>

              {/* Section 8 */}
              <section>
                <h2 className="text-3xl font-bold text-avocado-green mb-4">
                  8. Limitation of Liability
                </h2>
                <p className="text-avocado-text mb-4">
                  Fair and reasonable limitations:
                </p>
                <ul className="list-disc list-inside space-y-2 text-avocado-text ml-4">
                  <li>
                    Our liability is limited to the total amount paid for the specific service in question
                  </li>
                  <li>
                    We're not liable for indirect, incidental, or consequential damages beyond our control
                  </li>
                  <li>
                    We maintain professional indemnity insurance to protect both parties
                  </li>
                  <li>
                    Force majeure events (natural disasters, pandemics, etc.) may affect timelines but we'll communicate proactively
                  </li>
                </ul>
              </section>

              {/* Section 9 */}
              <section>
                <h2 className="text-3xl font-bold text-avocado-green mb-4">
                  9. Dispute Resolution
                </h2>
                <p className="text-avocado-text mb-4">
                  We resolve issues fairly and quickly:
                </p>
                <ol className="list-decimal list-inside space-y-2 text-avocado-text ml-4">
                  <li>
                    <strong className="text-white">Direct Conversation:</strong> We'll have a direct, honest conversation within 24 hours to understand and resolve the issue
                  </li>
                  <li>
                    <strong className="text-white">Mediation:</strong> If unresolved, we'll engage a neutral mediator at our cost - you never pay for dispute resolution
                  </li>
                  <li>
                    <strong className="text-white">Legal Protection:</strong> You never pay legal fees - we cover all dispute resolution costs
                  </li>
                  <li>
                    <strong className="text-white">Fair Outcome:</strong> We're committed to finding a fair solution that works for both parties
                  </li>
                </ol>
              </section>

              {/* Section 10 */}
              <section>
                <h2 className="text-3xl font-bold text-avocado-green mb-4">
                  10. Service Modifications & Cancellations
                </h2>
                <p className="text-avocado-text mb-4">
                  Flexible service management:
                </p>
                <ul className="list-disc list-inside space-y-2 text-avocado-text ml-4">
                  <li>
                    <strong className="text-white">Modify Scope:</strong> Adjust project scope anytime - we'll provide updated pricing and timelines
                  </li>
                  <li>
                    <strong className="text-white">Cancel Anytime:</strong> Cancel with no penalties - you only pay for work completed and materials used
                  </li>
                  <li>
                    <strong className="text-white">Pause Projects:</strong> Pause your project if needed - we'll hold your place and materials
                  </li>
                  <li>
                    <strong className="text-white">Change Requests:</strong> Reasonable changes included; major scope changes may require additional fees (always discussed first)
                  </li>
                </ul>
              </section>

              {/* Section 11 */}
              <section>
                <h2 className="text-3xl font-bold text-avocado-green mb-4">
                  11. Changes to Terms
                </h2>
                <p className="text-avocado-text">
                  We may update these terms to reflect changes in our services or legal requirements. We'll notify you of significant changes via email at least 30 days in advance. Continued use of our services after updates constitutes acceptance of the revised terms. If you don't agree with changes, you can cancel your service with a full refund for work not yet started.
                </p>
              </section>

              {/* Contact Section */}
              <section className="bg-avocado-gray border border-avocado-light-gray rounded-lg p-8 mt-8">
                <h2 className="text-2xl font-bold text-avocado-green mb-4">
                  Questions About These Terms?
                </h2>
                <p className="text-avocado-text mb-4">
                  Our team is here to clarify anything:
                </p>
                <ul className="space-y-2 text-avocado-text">
                  <li>
                    <strong className="text-white">Email:</strong>{" "}
                    <a
                      href="mailto:terms@punktech.in"
                      className="text-avocado-green hover:text-avocado-light-green underline"
                    >
                      terms@punktech.in
                    </a>
                  </li>
                  <li>
                    <strong className="text-white">Response Guarantee:</strong> We guarantee a response within <strong className="text-avocado-green">30 minutes</strong> during business hours
                  </li>
                  <li>
                    <strong className="text-white">Phone:</strong>{" "}
                    <a
                      href="tel:+917447776766"
                      className="text-avocado-green hover:text-avocado-light-green underline"
                    >
                      +91-74477-76766
                    </a>
                  </li>
                </ul>
              </section>
            </div>
          </div>
      </Motion.div>
    </>
  )
}

export default Terms

