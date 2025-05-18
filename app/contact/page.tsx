"use client"

import { useState } from "react"
import Link from "next/link"
import { ChevronRight, Mail, Phone, MapPin, Clock, Send } from "lucide-react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { useToast } from "@/hooks/use-toast"

export default function ContactPage() {
  const { toast } = useToast()
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "general",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      toast({
        title: "Message sent!",
        description: "We'll get back to you as soon as possible.",
      })
      setFormData({
        name: "",
        email: "",
        subject: "general",
        message: "",
      })
    }, 1500)
  }

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        <div className="container mx-auto px-4 py-8">
          {/* Breadcrumbs */}
          <nav className="flex items-center text-sm mb-8">
            <Link href="/" className="text-muted-foreground hover:text-foreground">
              Home
            </Link>
            <ChevronRight className="h-4 w-4 mx-2 text-muted-foreground" />
            <span>Contact Us</span>
          </nav>

          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Get in Touch</h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Have a question, feedback, or need assistance? We're here to help. Fill out the form below or use our
              contact information to reach out to us.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Your Name</Label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email Address</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john.doe@example.com"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label>Subject</Label>
                  <RadioGroup
                    value={formData.subject}
                    onValueChange={(value) => setFormData((prev) => ({ ...prev, subject: value }))}
                  >
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="general" id="general" />
                      <Label htmlFor="general">General Inquiry</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="order" id="order" />
                      <Label htmlFor="order">Order Support</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="product" id="product" />
                      <Label htmlFor="product">Product Information</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="other" id="other" />
                      <Label htmlFor="other">Other</Label>
                    </div>
                  </RadioGroup>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="How can we help you?"
                    rows={5}
                    required
                  />
                </div>

                <Button type="submit" className="w-full" disabled={isSubmitting}>
                  {isSubmitting ? (
                    <span className="flex items-center">
                      <svg
                        className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        ></path>
                      </svg>
                      Sending...
                    </span>
                  ) : (
                    <span className="flex items-center">
                      <Send className="mr-2 h-4 w-4" />
                      Send Message
                    </span>
                  )}
                </Button>
              </form>
            </div>

            {/* Contact Information */}
            <div>
              <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <Mail className="h-6 w-6 text-primary mt-0.5" />
                  <div>
                    <h3 className="font-semibold">Email</h3>
                    <p className="text-muted-foreground mb-1">For general inquiries:</p>
                    <a href="mailto:info@stylehub.com" className="text-primary hover:underline">
                      info@stylehub.com
                    </a>
                    <p className="text-muted-foreground mt-2 mb-1">For customer support:</p>
                    <a href="mailto:support@stylehub.com" className="text-primary hover:underline">
                      support@stylehub.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Phone className="h-6 w-6 text-primary mt-0.5" />
                  <div>
                    <h3 className="font-semibold">Phone</h3>
                    <p className="text-muted-foreground mb-1">Customer Service:</p>
                    <a href="tel:+18001234567" className="text-primary hover:underline">
                      +1 (800) 123-4567
                    </a>
                    <p className="text-muted-foreground mt-2 mb-1">Business Hours:</p>
                    <p>Monday - Friday: 9am - 6pm EST</p>
                    <p>Saturday: 10am - 4pm EST</p>
                    <p>Sunday: Closed</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <MapPin className="h-6 w-6 text-primary mt-0.5" />
                  <div>
                    <h3 className="font-semibold">Headquarters</h3>
                    <address className="not-italic text-muted-foreground">
                      123 Fashion Avenue
                      <br />
                      Suite 500
                      <br />
                      New York, NY 10001
                      <br />
                      United States
                    </address>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Clock className="h-6 w-6 text-primary mt-0.5" />
                  <div>
                    <h3 className="font-semibold">Business Hours</h3>
                    <div className="text-muted-foreground">
                      <div className="flex justify-between">
                        <span>Monday - Friday:</span>
                        <span>9:00 AM - 6:00 PM</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Saturday:</span>
                        <span>10:00 AM - 4:00 PM</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Sunday:</span>
                        <span>Closed</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Map Placeholder */}
              <div className="mt-8 rounded-lg overflow-hidden border h-64 bg-muted flex items-center justify-center">
                <p className="text-muted-foreground">Map would be displayed here</p>
              </div>
            </div>
          </div>

          {/* FAQ Section */}
          <section className="mt-16">
            <h2 className="text-2xl font-bold mb-6 text-center">Frequently Asked Questions</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-muted/30 p-6 rounded-lg">
                <h3 className="text-lg font-semibold mb-2">What are your shipping options?</h3>
                <p className="text-muted-foreground">
                  We offer standard shipping (5-7 business days), express shipping (2-3 business days), and next-day
                  delivery options. Free standard shipping is available for orders over $50.
                </p>
              </div>
              <div className="bg-muted/30 p-6 rounded-lg">
                <h3 className="text-lg font-semibold mb-2">How can I track my order?</h3>
                <p className="text-muted-foreground">
                  Once your order ships, you'll receive a confirmation email with a tracking number. You can also track
                  your order by logging into your account and viewing your order history.
                </p>
              </div>
              <div className="bg-muted/30 p-6 rounded-lg">
                <h3 className="text-lg font-semibold mb-2">What is your return policy?</h3>
                <p className="text-muted-foreground">
                  We accept returns within 30 days of purchase. Items must be unworn, unwashed, and with original tags
                  attached. Return shipping is free for exchanges.
                </p>
              </div>
              <div className="bg-muted/30 p-6 rounded-lg">
                <h3 className="text-lg font-semibold mb-2">Do you ship internationally?</h3>
                <p className="text-muted-foreground">
                  Yes, we ship to most countries worldwide. International shipping rates and delivery times vary by
                  location. Import duties and taxes may apply.
                </p>
              </div>
            </div>
            <div className="text-center mt-8">
              <Link href="/faq" className="text-primary hover:underline">
                View all FAQs
              </Link>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  )
}
