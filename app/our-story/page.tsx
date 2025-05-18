import Link from "next/link"
import Image from "next/image"
import { ChevronRight } from "lucide-react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"

export default function OurStoryPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative">
          <div className="relative h-[40vh] md:h-[50vh] w-full overflow-hidden">
            <Image src="/images/our-story-hero.png" alt="Our Story" fill priority className="object-cover" />
            <div className="absolute inset-0 bg-black/50" />
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white p-4">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Story</h1>
              <p className="text-lg md:text-xl max-w-2xl">From a small idea to a global fashion brand</p>
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
            <span>Our Story</span>
          </nav>

          {/* Founder's Message */}
          <section className="mb-16">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="relative h-80 md:h-96 rounded-lg overflow-hidden">
                <Image src="/images/founder.png" alt="Sarah Johnson, Founder" fill className="object-cover" />
              </div>
              <div>
                <h2 className="text-3xl font-bold mb-4">A Message from Our Founder</h2>
                <p className="text-muted-foreground mb-6">
                  When I started StyleHub in 2010, I had a simple vision: to create clothing that was both beautiful and
                  sustainable. As a fashion designer with over a decade of experience, I was increasingly troubled by
                  the industry's environmental impact and labor practices.
                </p>
                <p className="text-muted-foreground mb-6">
                  I believed there was a better way—that we could create stylish, high-quality clothing while respecting
                  our planet and the people who make our products. This belief became the foundation of StyleHub.
                </p>
                <p className="text-muted-foreground mb-6">
                  Today, I'm proud to say that we've stayed true to our founding principles while growing into a brand
                  that reaches customers worldwide. Our journey is just beginning, and I'm excited for what the future
                  holds.
                </p>
                <p className="italic font-medium">— Sarah Johnson, Founder & CEO</p>
              </div>
            </div>
          </section>

          {/* Our Journey Timeline */}
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
                    StyleHub was founded in a small studio in New York City. Our first collection consisted of just 12
                    pieces, all made from organic cotton and designed with timeless style in mind. Despite our small
                    beginnings, we quickly gained attention for our commitment to quality and sustainability.
                  </p>
                  <div className="relative h-48 rounded-lg overflow-hidden">
                    <Image src="/images/about-history-1.jpg" alt="StyleHub founding" fill className="object-cover" />
                  </div>
                </div>
              </div>

              <div className="flex flex-col md:flex-row gap-4">
                <div className="md:w-1/4 flex flex-col items-center md:items-end">
                  <div className="text-3xl font-bold text-primary">2013</div>
                  <div className="hidden md:block h-full w-px bg-border mt-2 mr-6"></div>
                </div>
                <div className="md:w-3/4">
                  <h3 className="text-xl font-semibold mb-2">First Retail Store</h3>
                  <p className="text-muted-foreground mb-4">
                    After three years of growing our online presence, we opened our first physical store in SoHo, New
                    York. The store was designed with sustainability in mind, featuring reclaimed wood fixtures and
                    energy-efficient lighting. It became a community hub for fashion lovers who shared our values.
                  </p>
                  <div className="relative h-48 rounded-lg overflow-hidden">
                    <Image src="/images/store-opening.png" alt="First store opening" fill className="object-cover" />
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
                    We formalized our commitment to sustainability by launching our "Earth First" initiative. This
                    included transitioning to 100% renewable energy in our operations, implementing a zero-waste policy
                    in our production facilities, and establishing partnerships with ethical manufacturers around the
                    world.
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
                  <div className="text-3xl font-bold text-primary">2018</div>
                  <div className="hidden md:block h-full w-px bg-border mt-2 mr-6"></div>
                </div>
                <div className="md:w-3/4">
                  <h3 className="text-xl font-semibold mb-2">International Expansion</h3>
                  <p className="text-muted-foreground mb-4">
                    StyleHub went global, opening stores in London, Tokyo, and Sydney. We also expanded our online
                    shipping to over 50 countries, bringing our sustainable fashion to customers worldwide. This growth
                    allowed us to increase our positive impact and spread our message of conscious consumption.
                  </p>
                  <div className="relative h-48 rounded-lg overflow-hidden">
                    <Image
                      src="/images/global-expansion.png"
                      alt="International expansion"
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
                  <h3 className="text-xl font-semibold mb-2">Digital Transformation</h3>
                  <p className="text-muted-foreground mb-4">
                    When the world changed in 2020, we pivoted quickly to enhance our digital experience. We launched
                    virtual styling sessions, improved our e-commerce platform, and created an innovative AR feature
                    that allows customers to "try on" clothes virtually. These innovations helped us maintain our
                    connection with customers during challenging times.
                  </p>
                  <div className="relative h-48 rounded-lg overflow-hidden">
                    <Image
                      src="/images/digital-transformation.png"
                      alt="Digital transformation"
                      fill
                      className="object-cover"
                    />
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
                    Today, StyleHub is a global brand with a presence in 15 countries and a community of over 2 million
                    customers who share our values. We continue to innovate in sustainable fashion, exploring new
                    materials and production methods that reduce our environmental footprint while creating beautiful,
                    timeless pieces.
                  </p>
                  <div className="relative h-48 rounded-lg overflow-hidden">
                    <Image src="/images/about-history-4.jpg" alt="StyleHub today" fill className="object-cover" />
                  </div>
                </div>
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
            <h2 className="text-3xl font-bold mb-8 text-center">Leadership Team</h2>
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
                <Link href="/careers">Join Our Team</Link>
              </Button>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  )
}
