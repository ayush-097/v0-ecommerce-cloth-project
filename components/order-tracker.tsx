"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import {
  ShoppingBag,
  CreditCard,
  Package,
  Truck,
  MapPin,
  CheckCircle,
  ChevronDown,
  ChevronUp,
  ExternalLink,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import type { OrderTrackingDetail } from "@/lib/order-tracking"
import { cn } from "@/lib/utils"

interface OrderTrackerProps {
  order: OrderTrackingDetail
}

export default function OrderTracker({ order }: OrderTrackerProps) {
  const [showDetails, setShowDetails] = useState(false)

  // Function to get the appropriate icon component
  const getStatusIcon = (iconName: string) => {
    switch (iconName) {
      case "shopping-bag":
        return <ShoppingBag className="h-6 w-6" />
      case "credit-card":
        return <CreditCard className="h-6 w-6" />
      case "package":
        return <Package className="h-6 w-6" />
      case "truck":
        return <Truck className="h-6 w-6" />
      case "map-pin":
        return <MapPin className="h-6 w-6" />
      case "check-circle":
        return <CheckCircle className="h-6 w-6" />
      default:
        return <ShoppingBag className="h-6 w-6" />
    }
  }

  // Format date
  const formatDate = (date: Date) => {
    return new Intl.DateTimeFormat("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
      hour: "numeric",
      minute: "numeric",
      hour12: true,
    }).format(date)
  }

  // Calculate progress percentage
  const calculateProgress = () => {
    const totalSteps = order.statusHistory.length
    const completedSteps = order.statusHistory.filter((status) => status.isCompleted).length
    return (completedSteps / (totalSteps - 1)) * 100
  }

  return (
    <div className="bg-white border rounded-lg overflow-hidden">
      {/* Order Header */}
      <div className="bg-primary text-primary-foreground p-6">
        <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4">
          <div>
            <h2 className="text-xl font-bold">Order #{order.orderId}</h2>
            <p className="text-primary-foreground/80">Placed on {formatDate(order.orderDate)}</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3">
            {order.trackingNumber && (
              <Button variant="secondary" size="sm" asChild>
                <a
                  href={`https://example.com/track/${order.trackingNumber}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center"
                >
                  <ExternalLink className="mr-2 h-4 w-4" />
                  Track with {order.carrier}
                </a>
              </Button>
            )}
            <Button
              variant="outline"
              size="sm"
              onClick={() => setShowDetails(!showDetails)}
              className="bg-transparent border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground"
            >
              {showDetails ? (
                <>
                  <ChevronUp className="mr-2 h-4 w-4" />
                  Hide Details
                </>
              ) : (
                <>
                  <ChevronDown className="mr-2 h-4 w-4" />
                  View Details
                </>
              )}
            </Button>
          </div>
        </div>
      </div>

      {/* Order Status */}
      <div className="p-6">
        <div className="mb-6">
          <div className="flex justify-between items-center mb-2">
            <h3 className="font-semibold">Order Status</h3>
            <div className="text-sm text-muted-foreground">
              Estimated Delivery: {formatDate(order.estimatedDelivery)}
            </div>
          </div>

          {/* Progress Bar */}
          <div className="h-2 bg-muted rounded-full mb-6 relative">
            <div
              className="absolute top-0 left-0 h-full bg-primary rounded-full transition-all duration-500"
              style={{ width: `${calculateProgress()}%` }}
            ></div>
          </div>

          {/* Status Timeline */}
          <div className="relative">
            <div className="absolute top-0 bottom-0 left-[19px] w-[2px] bg-muted"></div>
            <div className="space-y-6">
              {order.statusHistory.map((status, index) => (
                <div key={status.status} className="flex items-start gap-4">
                  <div
                    className={cn(
                      "relative z-10 flex items-center justify-center w-10 h-10 rounded-full",
                      status.isActive
                        ? "bg-primary text-primary-foreground"
                        : status.isCompleted
                          ? "bg-primary/20 text-primary"
                          : "bg-muted text-muted-foreground",
                    )}
                  >
                    {getStatusIcon(status.icon)}
                  </div>
                  <div className="flex-1 pt-1">
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-1">
                      <h4
                        className={cn(
                          "font-medium",
                          status.isActive
                            ? "text-primary"
                            : status.isCompleted
                              ? "text-foreground"
                              : "text-muted-foreground",
                        )}
                      >
                        {status.label}
                      </h4>
                      {status.date && <span className="text-sm text-muted-foreground">{formatDate(status.date)}</span>}
                    </div>
                    <p className="text-sm text-muted-foreground mt-1">{status.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Order Details (Collapsible) */}
      {showDetails && (
        <div className="border-t p-6">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Shipping Information */}
            <div>
              <h3 className="font-semibold mb-3">Shipping Information</h3>
              <div className="bg-muted/30 p-4 rounded-lg">
                <p className="font-medium">{order.customerName}</p>
                <p>{order.shippingAddress.line1}</p>
                {order.shippingAddress.line2 && <p>{order.shippingAddress.line2}</p>}
                <p>
                  {order.shippingAddress.city}, {order.shippingAddress.state} {order.shippingAddress.postalCode}
                </p>
                <p>{order.shippingAddress.country}</p>
              </div>
            </div>

            {/* Order Summary */}
            <div>
              <h3 className="font-semibold mb-3">Order Summary</h3>
              <div className="bg-muted/30 p-4 rounded-lg">
                <div className="space-y-4">
                  {order.items.map((item) => (
                    <div key={item.id} className="flex gap-3">
                      <div className="relative h-16 w-16 flex-shrink-0 rounded-md overflow-hidden border">
                        <Image src={item.image || "/placeholder.svg"} alt={item.name} fill className="object-cover" />
                      </div>
                      <div className="flex-1">
                        <p className="font-medium">{item.name}</p>
                        <div className="text-sm text-muted-foreground">
                          {item.size && <span>Size: {item.size}</span>}
                          {item.size && item.color && <span> | </span>}
                          {item.color && <span>Color: {item.color}</span>}
                        </div>
                        <div className="text-sm">
                          ${item.price.toFixed(2)} x {item.quantity}
                        </div>
                      </div>
                      <div className="font-medium">${(item.price * item.quantity).toFixed(2)}</div>
                    </div>
                  ))}
                </div>

                <div className="border-t mt-4 pt-4">
                  <div className="flex justify-between font-medium">
                    <span>Total</span>
                    <span>${order.items.reduce((sum, item) => sum + item.price * item.quantity, 0).toFixed(2)}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 text-center">
            <p className="text-sm text-muted-foreground mb-4">Need help with your order?</p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button variant="outline" asChild>
                <Link href="/contact">Contact Support</Link>
              </Button>
              <Button variant="outline" asChild>
                <Link href="/faq">View FAQs</Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
