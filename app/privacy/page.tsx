import Link from "next/link"
import { ChevronRight } from "lucide-react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export default function PrivacyPolicyPage() {
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
            <span>Privacy Policy</span>
          </nav>

          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl font-bold mb-8">Privacy Policy</h1>
            <p className="text-muted-foreground mb-8">Last Updated: May 18, 2025</p>

            <div className="prose prose-sm sm:prose max-w-none">
              <p>
                At StyleHub, we take your privacy seriously. This Privacy Policy explains how we collect, use, disclose,
                and safeguard your information when you visit our website or use our services. Please read this Privacy
                Policy carefully. By accessing or using our services, you acknowledge that you have read, understood,
                and agree to be bound by all the terms of this Privacy Policy.
              </p>

              <h2>1. Information We Collect</h2>
              <p>We may collect information about you in various ways:</p>
              <h3>Personal Data</h3>
              <p>When you create an account, place an order, or interact with our services, we may collect:</p>
              <ul>
                <li>Contact information (name, email address, mailing address, phone number)</li>
                <li>Payment information (credit card details, billing address)</li>
                <li>Account credentials (username, password)</li>
                <li>Order history and preferences</li>
                <li>Communication preferences</li>
              </ul>

              <h3>Automatically Collected Information</h3>
              <p>When you access our services, we may automatically collect:</p>
              <ul>
                <li>Device information (device type, operating system, browser type)</li>
                <li>Usage data (pages visited, time spent, clicks)</li>
                <li>IP address and location information</li>
                <li>Cookies and similar tracking technologies</li>
              </ul>

              <h2>2. How We Use Your Information</h2>
              <p>We may use the information we collect for various purposes, including to:</p>
              <ul>
                <li>Process and fulfill your orders</li>
                <li>Create and manage your account</li>
                <li>Provide customer service and support</li>
                <li>Send transactional emails (order confirmations, shipping updates)</li>
                <li>Send marketing communications (if you've opted in)</li>
                <li>Improve our website and services</li>
                <li>Personalize your shopping experience</li>
                <li>Analyze usage patterns and trends</li>
                <li>Protect against fraud and unauthorized transactions</li>
                <li>Comply with legal obligations</li>
              </ul>

              <h2>3. Sharing Your Information</h2>
              <p>We may share your information with:</p>
              <ul>
                <li>Service providers (payment processors, shipping companies, marketing partners)</li>
                <li>Business partners (when necessary to provide services you've requested)</li>
                <li>Legal authorities (when required by law or to protect our rights)</li>
                <li>Affiliated companies (as part of our regular business operations)</li>
              </ul>
              <p>We do not sell your personal information to third parties.</p>

              <h2>4. Cookies and Tracking Technologies</h2>
              <p>
                We use cookies and similar tracking technologies to collect information about your browsing activities.
                These technologies help us analyze website traffic, customize content, and deliver targeted
                advertisements. You can control cookies through your browser settings, but disabling cookies may limit
                your ability to use some features of our services.
              </p>

              <h2>5. Your Privacy Choices</h2>
              <p>You have several choices regarding your personal information:</p>
              <ul>
                <li>
                  Account Information: You can review and update your account information by logging into your account.
                </li>
                <li>
                  Marketing Communications: You can opt out of marketing emails by clicking the "unsubscribe" link in
                  our emails or updating your communication preferences in your account.
                </li>
                <li>Cookies: You can manage cookie preferences through your browser settings.</li>
                <li>Do Not Track: We currently do not respond to "Do Not Track" signals from browsers.</li>
              </ul>

              <h2>6. Data Security</h2>
              <p>
                We implement appropriate technical and organizational measures to protect your personal information from
                unauthorized access, disclosure, alteration, and destruction. However, no method of transmission over
                the Internet or electronic storage is 100% secure, so we cannot guarantee absolute security.
              </p>

              <h2>7. Data Retention</h2>
              <p>
                We retain your personal information for as long as necessary to fulfill the purposes outlined in this
                Privacy Policy, unless a longer retention period is required or permitted by law. When we no longer need
                your personal information, we will securely delete or anonymize it.
              </p>

              <h2>8. Children's Privacy</h2>
              <p>
                Our services are not directed to children under 13 years of age. We do not knowingly collect personal
                information from children under 13. If you are a parent or guardian and believe that your child has
                provided us with personal information, please contact us so that we can delete the information.
              </p>

              <h2>9. International Data Transfers</h2>
              <p>
                Your information may be transferred to and processed in countries other than the one in which you
                reside. These countries may have different data protection laws than your country of residence. We will
                take appropriate measures to ensure that your personal information remains protected in accordance with
                this Privacy Policy.
              </p>

              <h2>10. Your Rights</h2>
              <p>
                Depending on your location, you may have certain rights regarding your personal information, including:
              </p>
              <ul>
                <li>Right to access your personal information</li>
                <li>Right to correct inaccurate or incomplete information</li>
                <li>Right to delete your personal information</li>
                <li>Right to restrict or object to processing</li>
                <li>Right to data portability</li>
                <li>Right to withdraw consent</li>
              </ul>
              <p>To exercise these rights, please contact us using the information provided below.</p>

              <h2>11. California Privacy Rights</h2>
              <p>
                If you are a California resident, you have specific rights under the California Consumer Privacy Act
                (CCPA) and the California Privacy Rights Act (CPRA). Please refer to our California Privacy Notice for
                more information.
              </p>

              <h2>12. Changes to This Privacy Policy</h2>
              <p>
                We may update this Privacy Policy from time to time to reflect changes in our practices or for other
                operational, legal, or regulatory reasons. We will post the revised Privacy Policy on our website with
                an updated "Last Updated" date. We encourage you to review the Privacy Policy whenever you access our
                services.
              </p>

              <h2>13. Contact Us</h2>
              <p>
                If you have any questions or concerns about this Privacy Policy or our privacy practices, please contact
                us at:
              </p>
              <p>
                StyleHub
                <br />
                Attn: Privacy Officer
                <br />
                123 Fashion Avenue
                <br />
                New York, NY 10001
                <br />
                Email: privacy@stylehub.com
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
