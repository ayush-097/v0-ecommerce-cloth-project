"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Heart, ShoppingCart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { useCart } from "@/lib/cart-context"
import { useWishlist } from "@/lib/wishlist-context"
import { useToast } from "@/hooks/use-toast"
import { cn } from "@/lib/utils"

export default function ProductCard({ product }) {
  const [isHovered, setIsHovered] = useState(false)
  const { addToCart } = useCart()
  const { addToWishlist, removeFromWishlist, isInWishlist } = useWishlist()
  const { toast } = useToast()
  const inWishlist = isInWishlist(product.id)

  const handleAddToCart = (e) => {
    e.preventDefault()
    e.stopPropagation()

    addToCart(product)

    toast({
      title: "Added to cart",
      description: `${product.name} has been added to your cart.`,
    })
  }

  const handleWishlistToggle = (e) => {
    e.preventDefault()
    e.stopPropagation()

    if (inWishlist) {
      removeFromWishlist(product.id)
    } else {
      addToWishlist(product)
    }
  }

  return (
    <div
      className="group relative rounded-lg overflow-hidden border bg-background transition-all hover:shadow-md"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Link href={`/products/${product.id}`} className="block">
        <div className="relative aspect-square overflow-hidden">
          <Image
            src={product.image || "/placeholder.svg"}
            alt={product.name}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />

          {product.isNew && <Badge className="absolute top-2 left-2 z-10">New</Badge>}

          {product.discount > 0 && (
            <Badge variant="destructive" className="absolute top-2 right-2 z-10">
              -{product.discount}%
            </Badge>
          )}

          <div
            className={`absolute inset-0 bg-black/40 flex items-center justify-center transition-opacity duration-300 ${
              isHovered ? "opacity-100" : "opacity-0"
            }`}
          >
            <Button variant="secondary" size="sm" className="mx-2" onClick={handleAddToCart}>
              <ShoppingCart className="h-4 w-4 mr-2" />
              Add to Cart
            </Button>
          </div>
        </div>

        <div className="p-4">
          <h3 className="font-medium text-base mb-1 line-clamp-1">{product.name}</h3>
          <p className="text-muted-foreground text-sm mb-2 line-clamp-1">{product.category}</p>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              {product.discount > 0 ? (
                <>
                  <span className="font-semibold">${(product.price * (1 - product.discount / 100)).toFixed(2)}</span>
                  <span className="text-muted-foreground line-through text-sm">${product.price.toFixed(2)}</span>
                </>
              ) : (
                <span className="font-semibold">${product.price.toFixed(2)}</span>
              )}
            </div>
            <Button
              variant="ghost"
              size="icon"
              className="h-8 w-8"
              onClick={handleWishlistToggle}
              aria-label={inWishlist ? "Remove from wishlist" : "Add to wishlist"}
            >
              <Heart className={cn("h-4 w-4", inWishlist && "fill-primary text-primary")} />
            </Button>
          </div>
        </div>
      </Link>
    </div>
  )
}
