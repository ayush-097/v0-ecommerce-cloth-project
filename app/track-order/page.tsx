"use client"

import { useState } from "react"
import Link from "next/link"
import { ChevronRight } from "lucide-react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import OrderTracker from "@/components/order-tracker"
import OrderSearch from "@/components/order-search"
import { getOrderByEmailAndId, type OrderTrackingDetail } from "@/lib/order-tracking"

export default function TrackOrderPage() {
  const [order, setOrder] = useState<OrderTrackingDetail | null>(null)
  const [searchAttempted, setSearchAttempted] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleSearch = (orderId: string, email: string) => {
    setSearchAttempted(true)
    setError(null)

    const foundOrder = getOrderByEmailAndId(email, orderId)
    if (foundOrder) {
      setOrder(foundOrder)
    } else {
      setOrder(null)
      setError("We couldn't find an order with that ID and email. Please check your information and try again.")
    }
  }

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        <div className="container mx-auto px-4 py-8">
          {/* Breadcrumbs */}
          <nav className="flex items-center text-sm mb-6">
            <Link href="/" className="text-muted-foreground hover:text-foreground">
              Home
            </Link>
            <ChevronRight className="h-4 w-4 mx-2 text-muted-foreground" />
            <span>Track Order</span>
          </nav>

          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <h1 className="text-3xl font-bold mb-2">Track Your Order</h1>
              <p className="text-muted-foreground">
                Enter your order ID and email address to track the status of your order
              </p>
            </div>

            <OrderSearch onSearch={handleSearch} />

            {searchAttempted && (
              <div className="mt-8">
                {error ? (
                  <div className="bg-destructive/10 text-destructive p-4 rounded-lg text-center">{error}</div>
                ) : order ? (
                  <OrderTracker order={order} />
                ) : null}
              </div>
            )}

            {/* Demo Orders */}
            <div className="mt-12 border-t pt-8">
              <h2 className="text-xl font-semibold mb-4">Demo Orders</h2>
              <p className="text-muted-foreground mb-4">
                For demonstration purposes, you can use the following order IDs and emails:
              </p>
              <div className="space-y-4">
                <div className="bg-muted p-4 rounded-lg">
                  <div className="font-medium">Order in Progress (Out for Delivery)</div>
                  <div>Order ID: ORD-12345</div>
                  <div>Email: john.doe@example.com</div>
                </div>
                <div className="bg-muted p-4 rounded-lg">
                  <div className="font-medium">Order in Processing Stage</div>
                  <div>Order ID: ORD-67890</div>
                  <div>Email: jane.smith@example.com</div>
                </div>
                <div className="bg-muted p-4 rounded-lg">
                  <div className="font-medium">Completed Order (Delivered)</div>
                  <div>Order ID: ORD-54321</div>
                  <div>Email: robert.johnson@example.com</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
