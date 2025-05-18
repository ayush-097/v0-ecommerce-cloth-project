"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { ChevronRight, Trash2, ShoppingBag } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Separator } from "@/components/ui/separator"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { useCart } from "@/lib/cart-context"
import { useToast } from "@/hooks/use-toast"

export default function CartPage() {
  const { cartItems, updateCartItem, removeFromCart, getCartTotal } = useCart()
  const { toast } = useToast()
  const [promoCode, setPromoCode] = useState("")

  const handleQuantityChange = (cartItemId, newQuantity) => {
    updateCartItem(cartItemId, { quantity: Number.parseInt(newQuantity) })
  }

  const handleRemoveItem = (cartItemId, productName) => {
    removeFromCart(cartItemId)

    toast({
      title: "Item removed",
      description: `${productName} has been removed from your cart.`,
    })
  }

  const handleApplyPromoCode = (e) => {
    e.preventDefault()

    if (promoCode.trim() === "") {
      toast({
        title: "Please enter a promo code",
        variant: "destructive",
      })
      return
    }

    // In a real app, you would validate the promo code with the backend
    toast({
      title: "Invalid promo code",
      description: "The promo code you entered is not valid.",
      variant: "destructive",
    })
  }

  const subtotal = getCartTotal()
  const shipping = subtotal > 50 ? 0 : 5.99
  const tax = subtotal * 0.08 // 8% tax rate
  const total = subtotal + shipping + tax

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
            <span>Shopping Cart</span>
          </nav>

          <h1 className="text-3xl font-bold mb-8">Shopping Cart</h1>

          {cartItems.length > 0 ? (
            <div className="grid md:grid-cols-3 gap-8">
              <div className="md:col-span-2 space-y-6">
                {/* Cart Items */}
                <div className="rounded-lg border overflow-hidden">
                  <div className="bg-muted/50 px-6 py-3 hidden md:grid md:grid-cols-[2fr_1fr_1fr_auto] gap-4 text-sm font-medium">
                    <div>Product</div>
                    <div>Quantity</div>
                    <div>Price</div>
                    <div></div>
                  </div>

                  <div className="divide-y">
                    {cartItems.map((item) => {
                      const price = item.discount > 0 ? item.price * (1 - item.discount / 100) : item.price

                      return (
                        <div
                          key={item.cartItemId}
                          className="p-4 md:p-6 md:grid md:grid-cols-[2fr_1fr_1fr_auto] gap-4 items-center"
                        >
                          <div className="flex items-center gap-4 mb-4 md:mb-0">
                            <div className="relative h-20 w-20 rounded-md overflow-hidden border">
                              <Image
                                src={item.image || "/placeholder.svg"}
                                alt={item.name}
                                fill
                                className="object-cover"
                              />
                            </div>
                            <div>
                              <h3 className="font-medium">{item.name}</h3>
                              {item.selectedColor && (
                                <p className="text-sm text-muted-foreground capitalize">Color: {item.selectedColor}</p>
                              )}
                              {item.selectedSize && (
                                <p className="text-sm text-muted-foreground">Size: {item.selectedSize}</p>
                              )}
                            </div>
                          </div>

                          <div className="mb-4 md:mb-0">
                            <Select
                              value={item.quantity.toString()}
                              onValueChange={(value) => handleQuantityChange(item.cartItemId, value)}
                            >
                              <SelectTrigger className="w-24">
                                <SelectValue placeholder="1" />
                              </SelectTrigger>
                              <SelectContent>
                                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
                                  <SelectItem key={num} value={num.toString()}>
                                    {num}
                                  </SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                          </div>

                          <div className="mb-4 md:mb-0">
                            <div className="font-medium">${(price * item.quantity).toFixed(2)}</div>
                            {item.discount > 0 && (
                              <div className="text-sm text-muted-foreground line-through">
                                ${(item.price * item.quantity).toFixed(2)}
                              </div>
                            )}
                          </div>

                          <div>
                            <Button
                              variant="ghost"
                              size="icon"
                              onClick={() => handleRemoveItem(item.cartItemId, item.name)}
                            >
                              <Trash2 className="h-5 w-5" />
                              <span className="sr-only">Remove item</span>
                            </Button>
                          </div>
                        </div>
                      )
                    })}
                  </div>
                </div>

                {/* Continue Shopping */}
                <div className="flex justify-between items-center">
                  <Button variant="outline" asChild>
                    <Link href="/products">Continue Shopping</Link>
                  </Button>
                </div>
              </div>

              {/* Order Summary */}
              <div>
                <div className="rounded-lg border overflow-hidden">
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

                    <form onSubmit={handleApplyPromoCode} className="pt-2">
                      <div className="flex gap-2">
                        <Input
                          placeholder="Promo code"
                          value={promoCode}
                          onChange={(e) => setPromoCode(e.target.value)}
                        />
                        <Button type="submit" variant="outline">
                          Apply
                        </Button>
                      </div>
                    </form>

                    <Button className="w-full" size="lg" asChild>
                      <Link href="/checkout">Proceed to Checkout</Link>
                    </Button>

                    <div className="text-xs text-muted-foreground text-center pt-2">
                      Taxes and shipping calculated at checkout
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="text-center py-16 space-y-6">
              <div className="flex justify-center">
                <ShoppingBag className="h-16 w-16 text-muted-foreground" />
              </div>
              <h2 className="text-2xl font-semibold">Your cart is empty</h2>
              <p className="text-muted-foreground max-w-md mx-auto">
                Looks like you haven't added anything to your cart yet. Browse our products and find something you'll
                love.
              </p>
              <Button asChild className="mt-4">
                <Link href="/products">Start Shopping</Link>
              </Button>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  )
}
