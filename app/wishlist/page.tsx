"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { ChevronRight, Heart, Trash2, ShoppingCart } from "lucide-react"
import { Button } from "@/components/ui/button"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { useWishlist } from "@/lib/wishlist-context"
import { useCart } from "@/lib/cart-context"
import { useToast } from "@/hooks/use-toast"

export default function WishlistPage() {
  const { wishlistItems, removeFromWishlist, clearWishlist } = useWishlist()
  const { addToCart } = useCart()
  const { toast } = useToast()
  const [isClearing, setIsClearing] = useState(false)

  const handleAddToCart = (product) => {
    addToCart(product)
    toast({
      title: "Added to cart",
      description: `${product.name} has been added to your cart.`,
    })
  }

  const handleRemoveItem = (productId, productName) => {
    removeFromWishlist(productId)
  }

  const handleClearWishlist = () => {
    setIsClearing(true)
    setTimeout(() => {
      clearWishlist()
      setIsClearing(false)
    }, 500)
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
            <span>Wishlist</span>
          </nav>

          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
            <h1 className="text-3xl font-bold">My Wishlist</h1>
            {wishlistItems.length > 0 && (
              <Button variant="outline" onClick={handleClearWishlist} disabled={isClearing}>
                {isClearing ? "Clearing..." : "Clear Wishlist"}
              </Button>
            )}
          </div>

          {wishlistItems.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {wishlistItems.map((product) => (
                <div
                  key={product.id}
                  className="relative group rounded-lg overflow-hidden border bg-background hover:shadow-md"
                >
                  <Button
                    variant="ghost"
                    size="icon"
                    className="absolute top-2 right-2 z-10 h-8 w-8 bg-background/80 hover:bg-background"
                    onClick={() => handleRemoveItem(product.id, product.name)}
                  >
                    <Trash2 className="h-4 w-4 text-muted-foreground" />
                    <span className="sr-only">Remove from wishlist</span>
                  </Button>

                  <Link href={`/products/${product.id}`} className="block">
                    <div className="relative aspect-square overflow-hidden">
                      <Image
                        src={product.image || "/placeholder.svg"}
                        alt={product.name}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                      />

                      {product.isNew && (
                        <div className="absolute top-2 left-2 z-10">
                          <span className="bg-primary text-primary-foreground text-xs px-2 py-1 rounded">New</span>
                        </div>
                      )}

                      {product.discount > 0 && (
                        <div className="absolute top-2 left-2 z-10">
                          <span className="bg-red-600 text-white text-xs px-2 py-1 rounded">-{product.discount}%</span>
                        </div>
                      )}
                    </div>

                    <div className="p-4">
                      <h3 className="font-medium text-base mb-1">{product.name}</h3>
                      <p className="text-muted-foreground text-sm mb-2">{product.category}</p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          {product.discount > 0 ? (
                            <>
                              <span className="font-semibold">
                                ${(product.price * (1 - product.discount / 100)).toFixed(2)}
                              </span>
                              <span className="text-muted-foreground line-through text-sm">
                                ${product.price.toFixed(2)}
                              </span>
                            </>
                          ) : (
                            <span className="font-semibold">${product.price.toFixed(2)}</span>
                          )}
                        </div>
                      </div>
                    </div>
                  </Link>

                  <div className="p-4 pt-0">
                    <Button className="w-full" onClick={() => handleAddToCart(product)}>
                      <ShoppingCart className="mr-2 h-4 w-4" />
                      Add to Cart
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-16 space-y-6">
              <div className="flex justify-center">
                <Heart className="h-16 w-16 text-muted-foreground" />
              </div>
              <h2 className="text-2xl font-semibold">Your wishlist is empty</h2>
              <p className="text-muted-foreground max-w-md mx-auto">
                Add items you love to your wishlist. Review them anytime and easily move them to your cart.
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
