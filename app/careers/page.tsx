import Link from "next/link"
import Image from "next/image"
import { ChevronRight } from "lucide-react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function CareersPage() {
  // Sample job listings
  const jobListings = [
    {
      id: 1,
      title: "Senior Fashion Designer",
      department: "Design",
      location: "New York, NY",
      type: "Full-time",
      description:
        "We're looking for an experienced fashion designer to join our creative team and help shape our upcoming collections.",
    },
    {
      id: 2,
      title: "E-commerce Manager",
      department: "Digital",
      location: "Remote",
      type: "Full-time",
      description: "Lead our online retail strategy and optimize the customer journey across our digital platforms.",
    },
    {
      id: 3,
      title: "Supply Chain Coordinator",
      department: "Operations",
      location: "Chicago, IL",
      type: "Full-time",
      description: "Coordinate with suppliers and manage inventory to ensure smooth operations and timely delivery.",
    },
    {
      id: 4,
      title: "Social Media Specialist",
      department: "Marketing",
      location: "Remote",
      type: "Part-time",
      description:
        "Create engaging content and manage our social media presence to build brand awareness and community.",
    },
    {
      id: 5,
      title: "Customer Experience Associate",
      department: "Customer Service",
      location: "Miami, FL",
      type: "Full-time",
      description:
        "Provide exceptional support to our customers and ensure their shopping experience exceeds expectations.",
    },
  ]

  // Sample departments
  const departments = [
    {
      name: "Design",
      description: "Create innovative and stylish products that resonate with our customers",
      image: "/images/careers-design.png",
    },
    {
      name: "Marketing",
      description: "Build our brand and connect with customers across all channels",
      image: "/images/careers-marketing.png",
    },
    {
      name: "Operations",
      description: "Ensure smooth running of our supply chain and logistics",
      image: "/images/careers-operations.png",
    },
    {
      name: "Technology",
      description: "Drive innovation through digital solutions and e-commerce excellence",
      image: "/images/careers-technology.png",
    },
  ]

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative">
          <div className="relative h-[40vh] md:h-[50vh] w-full overflow-hidden">
            <Image src="/images/careers-hero.png" alt="Join Our Team" fill priority className="object-cover" />
            <div className="absolute inset-0 bg-black/50" />
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white p-4">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Join Our Team</h1>
              <p className="text-lg md:text-xl max-w-2xl">
                Be part of a passionate team dedicated to creating exceptional fashion experiences
              </p>
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
            <span>Careers</span>
          </nav>

          {/* Why Join Us */}
          <section className="mb-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Why Join StyleHub?</h2>
              <p className="text-muted-foreground max-w-3xl mx-auto">
                At StyleHub, we're more than just a fashion retailer. We're a team of passionate individuals working
                together to create exceptional experiences for our customers and each other.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-muted/30 p-6 rounded-lg text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4 mx-auto">
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
                <h3 className="text-xl font-semibold mb-2">Growth & Development</h3>
                <p className="text-muted-foreground">
                  We invest in our team members' growth with continuous learning opportunities, mentorship programs, and
                  clear career paths.
                </p>
              </div>

              <div className="bg-muted/30 p-6 rounded-lg text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4 mx-auto">
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
                <h3 className="text-xl font-semibold mb-2">Inclusive Culture</h3>
                <p className="text-muted-foreground">
                  We celebrate diversity and foster an inclusive environment where everyone feels valued, respected, and
                  empowered to contribute.
                </p>
              </div>

              <div className="bg-muted/30 p-6 rounded-lg text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4 mx-auto">
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
                    <path d="M8 14s1.5 2 4 2 4-2 4-2" />
                    <line x1="9" x2="9.01" y1="9" y2="9" />
                    <line x1="15" x2="15.01" y1="9" y2="9" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Work-Life Balance</h3>
                <p className="text-muted-foreground">
                  We believe in the importance of balance, offering flexible work arrangements, generous time off, and
                  wellness programs.
                </p>
              </div>
            </div>
          </section>

          {/* Benefits */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center">Benefits & Perks</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-muted/30 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4">Health & Wellness</h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-primary mt-1 flex-shrink-0"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <span>Comprehensive health, dental, and vision insurance</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-primary mt-1 flex-shrink-0"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <span>Mental health resources and support</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-primary mt-1 flex-shrink-0"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <span>Wellness stipend for gym memberships or fitness classes</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-primary mt-1 flex-shrink-0"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <span>Paid parental leave</span>
                  </li>
                </ul>
              </div>

              <div className="bg-muted/30 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4">Financial Benefits</h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-primary mt-1 flex-shrink-0"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <span>Competitive salary and performance bonuses</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-primary mt-1 flex-shrink-0"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <span>401(k) matching program</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-primary mt-1 flex-shrink-0"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <span>Employee stock purchase plan</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-primary mt-1 flex-shrink-0"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <span>Generous employee discount on all products</span>
                  </li>
                </ul>
              </div>

              <div className="bg-muted/30 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4">Time Off</h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-primary mt-1 flex-shrink-0"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <span>Flexible paid time off policy</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-primary mt-1 flex-shrink-0"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <span>Paid holidays and company-wide breaks</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-primary mt-1 flex-shrink-0"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <span>Volunteer time off</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-primary mt-1 flex-shrink-0"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <span>Sabbatical program for long-term employees</span>
                  </li>
                </ul>
              </div>

              <div className="bg-muted/30 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4">Professional Development</h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-primary mt-1 flex-shrink-0"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <span>Learning and development budget</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-primary mt-1 flex-shrink-0"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <span>Conference and industry event attendance</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-primary mt-1 flex-shrink-0"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <span>Tuition reimbursement for relevant education</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-primary mt-1 flex-shrink-0"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <span>Mentorship and career coaching</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Departments */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center">Our Departments</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {departments.map((department, index) => (
                <div key={index} className="relative rounded-lg overflow-hidden group">
                  <div className="relative h-64">
                    <Image
                      src={department.image || "/placeholder.svg?height=400&width=600"}
                      alt={department.name}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors duration-300" />
                    <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-6 text-center">
                      <h3 className="text-2xl font-bold mb-2">{department.name}</h3>
                      <p>{department.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Open Positions */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center">Open Positions</h2>
            <div className="space-y-6">
              {jobListings.map((job) => (
                <Card key={job.id}>
                  <CardHeader>
                    <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-2">
                      <div>
                        <CardTitle>{job.title}</CardTitle>
                        <CardDescription className="flex flex-wrap gap-2 mt-1">
                          <span className="inline-flex items-center bg-muted px-2 py-1 rounded text-xs">
                            {job.department}
                          </span>
                          <span className="inline-flex items-center bg-muted px-2 py-1 rounded text-xs">
                            {job.location}
                          </span>
                          <span className="inline-flex items-center bg-muted px-2 py-1 rounded text-xs">
                            {job.type}
                          </span>
                        </CardDescription>
                      </div>
                      <Button className="md:self-start">Apply Now</Button>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{job.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* CTA */}
          <section className="bg-muted/30 rounded-xl p-8 md:p-12 text-center">
            <h2 className="text-3xl font-bold mb-4">Don't See the Right Fit?</h2>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              We're always looking for talented individuals to join our team. Send us your resume and we'll keep you in
              mind for future opportunities.
            </p>
            <Button size="lg">Send Your Resume</Button>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  )
}
