import Link from "next/link"
import Image from "next/image"
import { ChevronRight } from "lucide-react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"

export default function AboutPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative">
          <div className="relative h-[40vh] md:h-[50vh] w-full overflow-hidden">
            <Image src="/images/about-hero.jpg" alt="About StyleHub" fill priority className="object-cover" />
            <div className="absolute inset-0 bg-black/50" />
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white p-4">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Story</h1>
              <p className="text-lg md:text-xl max-w-2xl">Crafting quality clothing and accessories since 2010</p>
            </div>
          </div>
        </section>

        <div className="container mx-auto px-4 py-12">
          {/* Breadcrumbs */}
          <nav className="flex items-center text-sm mb-8">
            <Link href="/" className="text-muted-foreground hover:text-foreground">
              Home
            </Link>
            <ChevronRight className="h-4 w-4 mx-2 text-muted-foreground" />
            <span>About Us</span>
          </nav>

          {/* Mission & Vision */}
          <section className="mb-16">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
                <p className="text-muted-foreground mb-6">
                  At StyleHub, our mission is to provide high-quality, sustainable fashion that empowers individuals to
                  express their unique style while minimizing environmental impact. We believe that looking good and
                  feeling good should go hand in hand with doing good for our planet.
                </p>
                <p className="text-muted-foreground">
                  We're committed to ethical manufacturing practices, fair labor standards, and reducing waste
                  throughout our supply chain. By choosing StyleHub, you're not just buying clothes – you're supporting
                  a movement towards more responsible fashion.
                </p>
              </div>
              <div className="relative h-80 rounded-lg overflow-hidden">
                <Image src="/images/about-mission.jpg" alt="Our mission" fill className="object-cover" />
              </div>
            </div>
          </section>

          {/* Our Values */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center">Our Values</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-muted/30 p-6 rounded-lg">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-primary"
                  >
                    <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
                    <path d="m7 10 3 3 7-7" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Quality</h3>
                <p className="text-muted-foreground">
                  We never compromise on quality. Each piece is crafted with attention to detail and made to last,
                  reducing the need for frequent replacements.
                </p>
              </div>
              <div className="bg-muted/30 p-6 rounded-lg">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-primary"
                  >
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Sustainability</h3>
                <p className="text-muted-foreground">
                  We're committed to reducing our environmental footprint through sustainable materials, ethical
                  production, and eco-friendly packaging.
                </p>
              </div>
              <div className="bg-muted/30 p-6 rounded-lg">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-primary"
                  >
                    <path d="M17 18a2 2 0 0 0-2-2H9a2 2 0 0 0-2 2" />
                    <rect width="18" height="18" x="3" y="4" rx="2" />
                    <circle cx="12" cy="10" r="2" />
                    <line x1="8" x2="8" y1="2" y2="4" />
                    <line x1="16" x2="16" y1="2" y2="4" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Inclusivity</h3>
                <p className="text-muted-foreground">
                  We design for everybody. Our products come in a wide range of sizes, and we strive to make fashion
                  accessible to all.
                </p>
              </div>
              <div className="bg-muted/30 p-6 rounded-lg">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-primary"
                  >
                    <path d="M14 9a2 2 0 0 1-2 2H6l-4 4V4c0-1.1.9-2 2-2h8a2 2 0 0 1 2 2v5Z" />
                    <path d="M18 9h2a2 2 0 0 1 2 2v11l-4-4h-6a2 2 0 0 1-2-2v-1" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Transparency</h3>
                <p className="text-muted-foreground">
                  We believe in being open about our processes, pricing, and impact. We share information about our
                  supply chain and manufacturing practices.
                </p>
              </div>
              <div className="bg-muted/30 p-6 rounded-lg">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-primary"
                  >
                    <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
                    <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
                    <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
                    <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Innovation</h3>
                <p className="text-muted-foreground">
                  We continuously explore new materials, technologies, and designs to improve our products and reduce
                  our environmental impact.
                </p>
              </div>
              <div className="bg-muted/30 p-6 rounded-lg">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-primary"
                  >
                    <path d="M20.42 4.58a5.4 5.4 0 0 0-7.65 0l-.77.78-.77-.78a5.4 5.4 0 0 0-7.65 0C1.46 6.7 1.33 10.28 4 13l8 8 8-8c2.67-2.72 2.54-6.3.42-8.42z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Community</h3>
                <p className="text-muted-foreground">
                  We value the relationships we build with our customers, partners, and communities. We actively support
                  causes that align with our values.
                </p>
              </div>
            </div>
          </section>

          {/* Our Team */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center">Meet Our Team</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { name: "Sarah Johnson", role: "Founder & CEO", image: "/images/about-team-1.jpg" },
                { name: "Michael Chen", role: "Creative Director", image: "/images/about-team-2.jpg" },
                { name: "Aisha Patel", role: "Head of Sustainability", image: "/images/about-team-3.jpg" },
                { name: "David Kim", role: "Lead Designer", image: "/images/about-team-4.jpg" },
              ].map((member, index) => (
                <div key={index} className="text-center">
                  <div className="relative h-64 mb-4 rounded-lg overflow-hidden">
                    <Image src={member.image || "/placeholder.svg"} alt={member.name} fill className="object-cover" />
                  </div>
                  <h3 className="text-xl font-semibold">{member.name}</h3>
                  <p className="text-muted-foreground">{member.role}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Timeline */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center">Our Journey</h2>
            <div className="space-y-12">
              <div className="flex flex-col md:flex-row gap-4">
                <div className="md:w-1/4 flex flex-col items-center md:items-end">
                  <div className="text-3xl font-bold text-primary">2010</div>
                  <div className="hidden md:block h-full w-px bg-border mt-2 mr-6"></div>
                </div>
                <div className="md:w-3/4">
                  <h3 className="text-xl font-semibold mb-2">The Beginning</h3>
                  <p className="text-muted-foreground mb-4">
                    StyleHub was founded with a simple mission: to create high-quality, timeless clothing that would
                    last for years, not seasons.
                  </p>
                  <div className="relative h-48 rounded-lg overflow-hidden">
                    <Image src="/images/about-history-1.jpg" alt="StyleHub founding" fill className="object-cover" />
                  </div>
                </div>
              </div>

              <div className="flex flex-col md:flex-row gap-4">
                <div className="md:w-1/4 flex flex-col items-center md:items-end">
                  <div className="text-3xl font-bold text-primary">2015</div>
                  <div className="hidden md:block h-full w-px bg-border mt-2 mr-6"></div>
                </div>
                <div className="md:w-3/4">
                  <h3 className="text-xl font-semibold mb-2">Sustainability Commitment</h3>
                  <p className="text-muted-foreground mb-4">
                    We made a formal commitment to sustainability, pledging to use eco-friendly materials and ethical
                    manufacturing processes.
                  </p>
                  <div className="relative h-48 rounded-lg overflow-hidden">
                    <Image
                      src="/images/about-history-2.jpg"
                      alt="Sustainability commitment"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>

              <div className="flex flex-col md:flex-row gap-4">
                <div className="md:w-1/4 flex flex-col items-center md:items-end">
                  <div className="text-3xl font-bold text-primary">2020</div>
                  <div className="hidden md:block h-full w-px bg-border mt-2 mr-6"></div>
                </div>
                <div className="md:w-3/4">
                  <h3 className="text-xl font-semibold mb-2">Global Expansion</h3>
                  <p className="text-muted-foreground mb-4">
                    StyleHub expanded globally, bringing our sustainable fashion to customers around the world through
                    our e-commerce platform.
                  </p>
                  <div className="relative h-48 rounded-lg overflow-hidden">
                    <Image src="/images/about-history-3.jpg" alt="Global expansion" fill className="object-cover" />
                  </div>
                </div>
              </div>

              <div className="flex flex-col md:flex-row gap-4">
                <div className="md:w-1/4 flex flex-col items-center md:items-end">
                  <div className="text-3xl font-bold text-primary">Today</div>
                </div>
                <div className="md:w-3/4">
                  <h3 className="text-xl font-semibold mb-2">Looking Forward</h3>
                  <p className="text-muted-foreground mb-4">
                    We continue to innovate and grow, staying true to our core values while adapting to the changing
                    needs of our customers and our planet.
                  </p>
                  <div className="relative h-48 rounded-lg overflow-hidden">
                    <Image src="/images/about-history-4.jpg" alt="StyleHub today" fill className="object-cover" />
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* CTA */}
          <section className="bg-muted/30 rounded-xl p-8 md:p-12 text-center">
            <h2 className="text-3xl font-bold mb-4">Join Our Journey</h2>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              We're building a community of people who care about quality, sustainability, and style. Join us in our
              mission to make fashion more responsible.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg">
                <Link href="/products">Shop Our Collection</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/contact">Get in Touch</Link>
              </Button>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  )
}
