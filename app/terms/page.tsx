import Link from "next/link"
import { ChevronRight } from "lucide-react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export default function TermsPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        <div className="container mx-auto px-4 py-12">
          {/* Breadcrumbs */}
          <nav className="flex items-center text-sm mb-8">
            <Link href="/" className="text-muted-foreground hover:text-foreground">
              Home
            </Link>
            <ChevronRight className="h-4 w-4 mx-2 text-muted-foreground" />
            <span>Terms & Conditions</span>
          </nav>

          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl font-bold mb-8">Terms & Conditions</h1>
            <p className="text-muted-foreground mb-8">Last Updated: May 18, 2025</p>

            <div className="prose prose-sm sm:prose max-w-none">
              <p>
                Welcome to StyleHub. These Terms & Conditions govern your use of our website, mobile applications, and
                services. By accessing or using StyleHub, you agree to be bound by these Terms. Please read them
                carefully.
              </p>

              <h2>1. Acceptance of Terms</h2>
              <p>
                By accessing or using our services, you agree to these Terms & Conditions and our Privacy Policy. If you
                do not agree to these Terms, you may not use our services.
              </p>

              <h2>2. Changes to Terms</h2>
              <p>
                We may modify these Terms at any time. We will provide notice of any material changes by posting the new
                Terms on our site and updating the "Last Updated" date. Your continued use of our services after any
                such changes constitutes your acceptance of the new Terms.
              </p>

              <h2>3. Account Registration</h2>
              <p>
                To access certain features of our services, you may need to create an account. You are responsible for
                maintaining the confidentiality of your account information and for all activities that occur under your
                account. You agree to provide accurate and complete information when creating your account and to update
                your information to keep it accurate and complete.
              </p>

              <h2>4. User Conduct</h2>
              <p>You agree not to:</p>
              <ul>
                <li>Use our services for any illegal purpose or in violation of any laws</li>
                <li>Violate or infringe other people's intellectual property, privacy, or other rights</li>
                <li>Interfere with or disrupt our services or servers</li>
                <li>Attempt to gain unauthorized access to any part of our services</li>
                <li>Use our services to transmit viruses or other harmful code</li>
                <li>Harass, threaten, or intimidate other users</li>
                <li>Impersonate any person or entity</li>
              </ul>

              <h2>5. Products and Orders</h2>
              <p>
                All product descriptions, including pricing and availability, are subject to change without notice. We
                reserve the right to limit quantities of products purchased and to refuse or cancel orders at any time.
              </p>

              <h2>6. Pricing and Payment</h2>
              <p>
                All prices are shown in US dollars and do not include taxes or shipping fees, which will be added at
                checkout. We accept various payment methods, which are displayed during checkout. By providing payment
                information, you represent that you are authorized to use the payment method.
              </p>

              <h2>7. Shipping and Delivery</h2>
              <p>
                We ship to the addresses you provide during checkout. Delivery times are estimates and not guaranteed.
                Risk of loss and title for items purchased pass to you upon delivery of the items to the carrier.
              </p>

              <h2>8. Returns and Refunds</h2>
              <p>
                Please refer to our{" "}
                <Link href="/shipping" className="text-primary hover:underline">
                  Shipping & Returns
                </Link>{" "}
                policy for information on returns, exchanges, and refunds.
              </p>

              <h2>9. Intellectual Property</h2>
              <p>
                All content on our services, including text, graphics, logos, images, and software, is the property of
                StyleHub or its content suppliers and is protected by copyright, trademark, and other intellectual
                property laws. You may not use, reproduce, distribute, or create derivative works from this content
                without our express written permission.
              </p>

              <h2>10. User Content</h2>
              <p>
                By submitting content to our services (such as product reviews or comments), you grant us a
                non-exclusive, royalty-free, perpetual, irrevocable, and fully sublicensable right to use, reproduce,
                modify, adapt, publish, translate, create derivative works from, distribute, and display such content
                throughout the world in any media.
              </p>

              <h2>11. Disclaimer of Warranties</h2>
              <p>
                OUR SERVICES ARE PROVIDED "AS IS" WITHOUT ANY WARRANTIES, EXPRESS OR IMPLIED. WE DISCLAIM ALL
                WARRANTIES, INCLUDING IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND
                NON-INFRINGEMENT.
              </p>

              <h2>12. Limitation of Liability</h2>
              <p>
                IN NO EVENT WILL STYLEHUB, ITS AFFILIATES, OR THEIR LICENSORS, SERVICE PROVIDERS, EMPLOYEES, AGENTS,
                OFFICERS, OR DIRECTORS BE LIABLE FOR DAMAGES OF ANY KIND ARISING FROM THE USE OF OUR SERVICES, INCLUDING
                DIRECT, INDIRECT, INCIDENTAL, PUNITIVE, AND CONSEQUENTIAL DAMAGES.
              </p>

              <h2>13. Indemnification</h2>
              <p>
                You agree to indemnify, defend, and hold harmless StyleHub and its affiliates, officers, directors,
                employees, and agents from and against any claims, liabilities, damages, judgments, awards, losses,
                costs, expenses, or fees arising out of or relating to your violation of these Terms or your use of our
                services.
              </p>

              <h2>14. Governing Law</h2>
              <p>
                These Terms are governed by and construed in accordance with the laws of the State of New York, without
                giving effect to any principles of conflicts of law.
              </p>

              <h2>15. Dispute Resolution</h2>
              <p>
                Any dispute arising from or relating to these Terms or our services will be resolved through binding
                arbitration in accordance with the American Arbitration Association's rules. The arbitration will be
                conducted in New York, New York.
              </p>

              <h2>16. Termination</h2>
              <p>
                We may terminate or suspend your account and access to our services at any time, without prior notice or
                liability, for any reason, including if you violate these Terms.
              </p>

              <h2>17. Severability</h2>
              <p>
                If any provision of these Terms is found to be unenforceable or invalid, that provision will be limited
                or eliminated to the minimum extent necessary so that the Terms will otherwise remain in full force and
                effect.
              </p>

              <h2>18. Entire Agreement</h2>
              <p>
                These Terms constitute the entire agreement between you and StyleHub regarding our services and
                supersede all prior and contemporaneous agreements, proposals, or representations, written or oral,
                concerning our services.
              </p>

              <h2>19. Contact Information</h2>
              <p>If you have any questions about these Terms, please contact us at:</p>
              <p>
                StyleHub
                <br />
                123 Fashion Avenue
                <br />
                New York, NY 10001
                <br />
                Email: legal@stylehub.com
                <br />
                Phone: (800) 123-4567
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
