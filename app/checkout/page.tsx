"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { ChevronRight, CreditCard, Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { useCart } from "@/lib/cart-context"

export default function CheckoutPage() {
  const { cartItems, getCartTotal } = useCart()
  const [paymentMethod, setPaymentMethod] = useState("card")

  const subtotal = getCartTotal()
  const shipping = subtotal > 50 ? 0 : 5.99
  const tax = subtotal * 0.08 // 8% tax rate
  const total = subtotal + shipping + tax

  if (cartItems.length === 0) {
    return (
      <div className="flex min-h-screen flex-col">
        <Navbar />
        <main className="flex-1 container mx-auto px-4 py-12">
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-4">Your cart is empty</h1>
            <p className="mb-6">Add some products to your cart before proceeding to checkout.</p>
            <Link href="/products" className="text-primary hover:underline">
              Browse products
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    )
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
            <Link href="/cart" className="text-muted-foreground hover:text-foreground">
              Cart
            </Link>
            <ChevronRight className="h-4 w-4 mx-2 text-muted-foreground" />
            <span>Checkout</span>
          </nav>

          <h1 className="text-3xl font-bold mb-8">Checkout</h1>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="md:col-span-2 space-y-8">
              {/* Shipping Information */}
              <div className="rounded-lg border overflow-hidden">
                <div className="bg-muted/50 px-6 py-3 font-medium flex items-center">
                  <span className="flex items-center justify-center w-6 h-6 rounded-full bg-primary text-primary-foreground text-sm mr-2">
                    1
                  </span>
                  Shipping Information
                </div>

                <div className="p-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="first-name">First Name</Label>
                      <Input id="first-name" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="last-name">Last Name</Label>
                      <Input id="last-name" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input id="email" type="email" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone</Label>
                      <Input id="phone" type="tel" />
                    </div>
                    <div className="space-y-2 md:col-span-2">
                      <Label htmlFor="address">Address</Label>
                      <Input id="address" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="city">City</Label>
                      <Input id="city" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="postal-code">Postal Code</Label>
                      <Input id="postal-code" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="state">State/Province</Label>
                      <Input id="state" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="country">Country</Label>
                      <Input id="country" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Payment Method */}
              <div className="rounded-lg border overflow-hidden">
                <div className="bg-muted/50 px-6 py-3 font-medium flex items-center">
                  <span className="flex items-center justify-center w-6 h-6 rounded-full bg-primary text-primary-foreground text-sm mr-2">
                    2
                  </span>
                  Payment Method
                </div>

                <div className="p-6">
                  <Tabs defaultValue="card" onValueChange={setPaymentMethod}>
                    <TabsList className="grid grid-cols-3 mb-6">
                      <TabsTrigger value="card">Credit Card</TabsTrigger>
                      <TabsTrigger value="paypal">PayPal</TabsTrigger>
                      <TabsTrigger value="cod">Cash on Delivery</TabsTrigger>
                    </TabsList>

                    <TabsContent value="card" className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="card-number">Card Number</Label>
                        <Input id="card-number" placeholder="1234 5678 9012 3456" />
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="expiry">Expiry Date</Label>
                          <Input id="expiry" placeholder="MM/YY" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="cvc">CVC</Label>
                          <Input id="cvc" placeholder="123" />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="name-on-card">Name on Card</Label>
                        <Input id="name-on-card" />
                      </div>
                    </TabsContent>

                    <TabsContent value="paypal" className="text-center py-6">
                      <p className="mb-4">You will be redirected to PayPal to complete your purchase securely.</p>
                      <Button className="mx-auto">
                        <Image
                          src="/placeholder.svg?height=24&width=80"
                          alt="PayPal"
                          width={80}
                          height={24}
                          className="mr-2"
                        />
                        Pay with PayPal
                      </Button>
                    </TabsContent>

                    <TabsContent value="cod" className="text-center py-6">
                      <p>Pay with cash upon delivery.</p>
                      <p className="text-muted-foreground mt-2">Additional fee may apply depending on your location.</p>
                    </TabsContent>
                  </Tabs>
                </div>
              </div>

              {/* Review Order */}
              <div className="rounded-lg border overflow-hidden">
                <div className="bg-muted/50 px-6 py-3 font-medium flex items-center">
                  <span className="flex items-center justify-center w-6 h-6 rounded-full bg-primary text-primary-foreground text-sm mr-2">
                    3
                  </span>
                  Review Order
                </div>

                <div className="p-6">
                  <div className="space-y-4">
                    {cartItems.map((item) => {
                      const price = item.discount > 0 ? item.price * (1 - item.discount / 100) : item.price

                      return (
                        <div key={item.cartItemId} className="flex items-center gap-4">
                          <div className="relative h-16 w-16 rounded-md overflow-hidden border flex-shrink-0">
                            <Image
                              src={item.image || "/placeholder.svg"}
                              alt={item.name}
                              fill
                              className="object-cover"
                            />
                          </div>
                          <div className="flex-1 min-w-0">
                            <h3 className="font-medium truncate">{item.name}</h3>
                            <div className="text-sm text-muted-foreground">
                              {item.selectedSize && `Size: ${item.selectedSize}`}
                              {item.selectedSize && item.selectedColor && ", "}
                              {item.selectedColor && `Color: ${item.selectedColor}`}
                            </div>
                            <div className="text-sm">Qty: {item.quantity}</div>
                          </div>
                          <div className="font-medium">${(price * item.quantity).toFixed(2)}</div>
                        </div>
                      )
                    })}
                  </div>
                </div>
              </div>
            </div>

            {/* Order Summary */}
            <div>
              <div className="rounded-lg border overflow-hidden sticky top-4">
                <div className="bg-muted/50 px-6 py-3 font-medium">Order Summary</div>

                <div className="p-6 space-y-4">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Subtotal</span>
                    <span>${subtotal.toFixed(2)}</span>
                  </div>

                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Shipping</span>
                    <span>{shipping === 0 ? "Free" : `$${shipping.toFixed(2)}`}</span>
                  </div>

                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Tax</span>
                    <span>${tax.toFixed(2)}</span>
                  </div>

                  <Separator />

                  <div className="flex justify-between font-medium text-lg">
                    <span>Total</span>
                    <span>${total.toFixed(2)}</span>
                  </div>

                  <Button className="w-full" size="lg">
                    {paymentMethod === "card" && <CreditCard className="mr-2 h-4 w-4" />}
                    {paymentMethod === "paypal" && (
                      <Image
                        src="/placeholder.svg?height=16&width=16"
                        alt="PayPal"
                        width={16}
                        height={16}
                        className="mr-2"
                      />
                    )}
                    {paymentMethod === "cod" && <Check className="mr-2 h-4 w-4" />}
                    Place Order
                  </Button>

                  <p className="text-xs text-muted-foreground text-center">
                    By placing your order, you agree to our{" "}
                    <Link href="/terms" className="text-primary hover:underline">
                      Terms of Service
                    </Link>{" "}
                    and{" "}
                    <Link href="/privacy" className="text-primary hover:underline">
                      Privacy Policy
                    </Link>
                    .
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* Order Tracking Promotion */}
          <section className="container mx-auto px-4 py-8 mt-8 bg-muted/30 rounded-lg">
            <div className="text-center">
              <h2 className="text-2xl font-bold mb-4">Track Your Order Anytime</h2>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                After placing your order, you can easily track its status using our order tracking system. Get real-time
                updates on processing, shipping, and delivery.
              </p>
              <Button asChild>
                <Link href="/track-order">Track an Order</Link>
              </Button>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  )
}
