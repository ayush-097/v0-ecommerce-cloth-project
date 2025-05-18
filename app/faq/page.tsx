"use client"

import { useState } from "react"
import Link from "next/link"
import { ChevronRight } from "lucide-react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function FAQPage() {
  const [searchQuery, setSearchQuery] = useState("")

  // FAQ categories and questions
  const faqCategories = [
    {
      id: "orders",
      label: "Orders & Shipping",
      questions: [
        {
          id: "order-tracking",
          question: "How can I track my order?",
          answer:
            "You can track your order by visiting the 'Track Order' page and entering your order number and email address. You'll receive real-time updates on your order status, from processing to delivery.",
        },
        {
          id: "shipping-time",
          question: "How long will it take to receive my order?",
          answer:
            "Standard shipping typically takes 3-5 business days within the continental US. Express shipping is 1-2 business days. International shipping times vary by location, generally taking 7-14 business days.",
        },
        {
          id: "shipping-cost",
          question: "How much does shipping cost?",
          answer:
            "We offer free standard shipping on all orders over $50. For orders under $50, standard shipping costs $5.99. Express shipping is available for $12.99. International shipping rates vary by destination.",
        },
        {
          id: "order-changes",
          question: "Can I change or cancel my order?",
          answer:
            "You can modify or cancel your order within 1 hour of placing it by contacting our customer service team. Once your order enters the processing stage, we cannot make changes or cancel it.",
        },
        {
          id: "international-shipping",
          question: "Do you ship internationally?",
          answer:
            "Yes, we ship to most countries worldwide. International customers may be responsible for import duties, taxes, and customs clearance fees, which are not included in the purchase price.",
        },
      ],
    },
    {
      id: "returns",
      label: "Returns & Refunds",
      questions: [
        {
          id: "return-policy",
          question: "What is your return policy?",
          answer:
            "We accept returns within 30 days of delivery for most items. Products must be unworn, unwashed, and with original tags attached. Some items, like intimates and final sale merchandise, cannot be returned.",
        },
        {
          id: "return-process",
          question: "How do I return an item?",
          answer:
            "To initiate a return, log into your account, go to your order history, and select the items you wish to return. You can print a prepaid return label or use your own shipping method. Once we receive and inspect your return, we'll process your refund.",
        },
        {
          id: "refund-timing",
          question: "When will I receive my refund?",
          answer:
            "After we receive and approve your return, refunds are typically processed within 3-5 business days. The time it takes for the refund to appear in your account depends on your payment method and financial institution, usually 5-10 business days.",
        },
        {
          id: "exchange-process",
          question: "How do I exchange an item for a different size or color?",
          answer:
            "We process exchanges as a return and a new purchase. Return your original item following our return process, and place a new order for the item you want. If you need assistance, our customer service team can help expedite this process.",
        },
        {
          id: "damaged-items",
          question: "What if I receive a damaged or defective item?",
          answer:
            "If you receive a damaged or defective item, please contact our customer service team within 48 hours of delivery. We'll arrange for a return and replacement at no additional cost to you.",
        },
      ],
    },
    {
      id: "products",
      label: "Products & Sizing",
      questions: [
        {
          id: "size-guide",
          question: "How do I find the right size?",
          answer:
            "We provide detailed size guides for all our products. You can find the size guide on each product page. If you're between sizes, we generally recommend sizing up. Our customer service team is also available to provide specific sizing advice.",
        },
        {
          id: "materials",
          question: "What materials do you use in your products?",
          answer:
            "We use a variety of high-quality materials in our products, including organic cotton, sustainable polyester, and natural fibers. Each product page lists the specific materials used and care instructions.",
        },
        {
          id: "product-care",
          question: "How should I care for my purchases?",
          answer:
            "Care instructions vary by product and material. Generally, we recommend washing in cold water, avoiding bleach, and air drying when possible to extend the life of your garments. Specific care instructions are included on product tags and product pages.",
        },
        {
          id: "restocking",
          question: "When will you restock sold-out items?",
          answer:
            "We regularly restock popular items. You can sign up for notifications on product pages to be alerted when a specific item is back in stock. Seasonal items may not be restocked until the following year.",
        },
        {
          id: "product-origin",
          question: "Where are your products made?",
          answer:
            "Our products are manufactured in various locations around the world, including the USA, Portugal, and India. We partner only with factories that meet our strict ethical and quality standards. The country of origin is listed on each product page.",
        },
      ],
    },
    {
      id: "account",
      label: "Account & Orders",
      questions: [
        {
          id: "create-account",
          question: "How do I create an account?",
          answer:
            "You can create an account by clicking the 'Account' icon in the top navigation bar and selecting 'Create Account'. You'll need to provide your email address and create a password. You can also create an account during the checkout process.",
        },
        {
          id: "forgot-password",
          question: "I forgot my password. How do I reset it?",
          answer:
            "Click on the 'Account' icon, select 'Sign In', and then click 'Forgot Password'. Enter your email address, and we'll send you instructions to reset your password.",
        },
        {
          id: "order-history",
          question: "How can I view my order history?",
          answer:
            "Log into your account and navigate to 'Order History' in your account dashboard. There, you'll find details of all your past orders, including order status, items purchased, and shipping information.",
        },
        {
          id: "guest-checkout",
          question: "Can I place an order without creating an account?",
          answer:
            "Yes, we offer guest checkout. You can complete your purchase without creating an account, but you'll need to provide your email address for order confirmation and shipping updates.",
        },
        {
          id: "update-info",
          question: "How do I update my account information?",
          answer:
            "Log into your account, go to 'Account Settings', and you can update your personal information, shipping addresses, payment methods, and communication preferences.",
        },
      ],
    },
    {
      id: "payment",
      label: "Payment & Promotions",
      questions: [
        {
          id: "payment-methods",
          question: "What payment methods do you accept?",
          answer:
            "We accept major credit cards (Visa, Mastercard, American Express, Discover), PayPal, Apple Pay, and Google Pay. We also offer Shop Pay for installment payments on eligible purchases.",
        },
        {
          id: "promo-codes",
          question: "How do I use a promo code?",
          answer:
            "During checkout, you'll see a field labeled 'Promo Code' or 'Discount Code'. Enter your code there and click 'Apply' to see the discount reflected in your order total.",
        },
        {
          id: "gift-cards",
          question: "Do you offer gift cards?",
          answer:
            "Yes, we offer digital gift cards in various denominations. You can purchase them online and have them emailed directly to the recipient or to yourself to give later.",
        },
        {
          id: "price-match",
          question: "Do you price match?",
          answer:
            "We do not offer price matching with other retailers. However, if an item you purchased goes on sale within 14 days of your purchase, contact our customer service team, and we may be able to adjust the price.",
        },
        {
          id: "taxes",
          question: "Why was I charged sales tax?",
          answer:
            "We are required by law to collect sales tax in states where we have a physical presence or where tax laws require us to do so. The sales tax rate is based on the shipping destination of your order.",
        },
      ],
    },
  ]

  // Filter questions based on search query
  const filteredFAQs = searchQuery
    ? faqCategories
        .map((category) => ({
          ...category,
          questions: category.questions.filter(
            (q) =>
              q.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
              q.answer.toLowerCase().includes(searchQuery.toLowerCase()),
          ),
        }))
        .filter((category) => category.questions.length > 0)
    : faqCategories

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
            <span>FAQ</span>
          </nav>

          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl font-bold mb-4 text-center">Frequently Asked Questions</h1>
            <p className="text-muted-foreground mb-8 text-center">
              Find answers to common questions about our products, orders, shipping, returns, and more.
            </p>

            {/* Search */}
            <div className="mb-8">
              <div className="relative max-w-md mx-auto">
                <Input
                  type="search"
                  placeholder="Search for answers..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pr-10"
                />
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
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground"
                >
                  <circle cx="11" cy="11" r="8" />
                  <path d="m21 21-4.3-4.3" />
                </svg>
              </div>
            </div>

            {searchQuery ? (
              // Search results
              <div>
                <h2 className="text-xl font-semibold mb-4">
                  {filteredFAQs.reduce((total, category) => total + category.questions.length, 0)} results for "
                  {searchQuery}"
                </h2>

                {filteredFAQs.length === 0 ? (
                  <div className="text-center py-8">
                    <p className="text-muted-foreground mb-4">
                      No results found. Try a different search term or browse our FAQ categories below.
                    </p>
                    <Button variant="outline" onClick={() => setSearchQuery("")}>
                      Clear Search
                    </Button>
                  </div>
                ) : (
                  filteredFAQs.map((category) => (
                    <div key={category.id} className="mb-8">
                      <h3 className="text-lg font-medium mb-4">{category.label}</h3>
                      <Accordion type="single" collapsible className="w-full">
                        {category.questions.map((faq) => (
                          <AccordionItem key={faq.id} value={faq.id}>
                            <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
                            <AccordionContent>{faq.answer}</AccordionContent>
                          </AccordionItem>
                        ))}
                      </Accordion>
                    </div>
                  ))
                )}
              </div>
            ) : (
              // Categorized FAQs
              <Tabs defaultValue="orders">
                <TabsList className="w-full flex flex-wrap justify-start mb-6">
                  {faqCategories.map((category) => (
                    <TabsTrigger key={category.id} value={category.id} className="flex-grow sm:flex-grow-0">
                      {category.label}
                    </TabsTrigger>
                  ))}
                </TabsList>

                {faqCategories.map((category) => (
                  <TabsContent key={category.id} value={category.id}>
                    <Accordion type="single" collapsible className="w-full">
                      {category.questions.map((faq) => (
                        <AccordionItem key={faq.id} value={faq.id}>
                          <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
                          <AccordionContent>{faq.answer}</AccordionContent>
                        </AccordionItem>
                      ))}
                    </Accordion>
                  </TabsContent>
                ))}
              </Tabs>
            )}

            {/* Contact CTA */}
            <div className="mt-12 bg-muted/30 p-6 rounded-lg text-center">
              <h2 className="text-xl font-semibold mb-2">Still have questions?</h2>
              <p className="text-muted-foreground mb-4">
                Our customer service team is here to help. Contact us and we'll get back to you as soon as possible.
              </p>
              <Button asChild>
                <Link href="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
