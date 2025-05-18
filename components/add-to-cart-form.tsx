"use client"

import { useState } from "react"
import { Heart, ShoppingCart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useCart } from "@/lib/cart-context"
import { useWishlist } from "@/lib/wishlist-context"
import { useToast } from "@/hooks/use-toast"
import { cn } from "@/lib/utils"

export default function AddToCartForm({ product }) {
  const [selectedColor, setSelectedColor] = useState(product.colors[0] || null)
  const [selectedSize, setSelectedSize] = useState(product.sizes[0] || null)
  const [quantity, setQuantity] = useState(1)
  const { addToCart } = useCart()
  const { addToWishlist, removeFromWishlist, isInWishlist } = useWishlist()
  const { toast } = useToast()
  const inWishlist = isInWishlist(product.id)

  const handleAddToCart = () => {
    // Validate selection if product has sizes
    if (product.sizes.length > 0 && !selectedSize) {
      toast({
        title: "Please select a size",
        variant: "destructive",
      })
      return
    }

    addToCart(product, quantity, selectedSize, selectedColor)

    toast({
      title: "Added to cart",
      description: `${product.name} has been added to your cart.`,
    })
  }

  const handleWishlistToggle = () => {
    if (inWishlist) {
      removeFromWishlist(product.id)
    } else {
      addToWishlist(product)
    }
  }

  return (
    <div className="space-y-6">
      {/* Color Selection */}
      {product.colors.length > 0 && (
        <div className="space-y-2">
          <Label htmlFor="color-selection">
            Color: {selectedColor && <span className="capitalize">{selectedColor}</span>}
          </Label>
          <RadioGroup
            id="color-selection"
            value={selectedColor}
            onValueChange={setSelectedColor}
            className="flex flex-wrap gap-2"
          >
            {product.colors.map((color) => (
              <Label
                key={color}
                htmlFor={`color-${color}`}
                className={`relative flex h-9 w-9 cursor-pointer items-center justify-center rounded-full border ${
                  selectedColor === color ? "ring-2 ring-primary ring-offset-2" : ""
                }`}
                style={{ backgroundColor: color === "white" ? "#ffffff" : "" }}
              >
                <RadioGroupItem id={`color-${color}`} value={color} className="sr-only" />
                <span className="sr-only">{color}</span>
              </Label>
            ))}
          </RadioGroup>
        </div>
      )}

      {/* Size Selection */}
      {product.sizes.length > 0 && (
        <div className="space-y-2">
          <div className="flex justify-between">
            <Label htmlFor="size-selection">Size</Label>
            <button className="text-sm text-primary hover:underline">Size Guide</button>
          </div>
          <RadioGroup
            id="size-selection"
            value={selectedSize}
            onValueChange={setSelectedSize}
            className="flex flex-wrap gap-2"
          >
            {product.sizes.map((size) => (
              <Label
                key={size}
                htmlFor={`size-${size}`}
                className={`flex h-9 min-w-[2.5rem] cursor-pointer items-center justify-center rounded-md border px-3 ${
                  selectedSize === size ? "border-primary bg-primary text-primary-foreground" : "hover:bg-muted"
                }`}
              >
                <RadioGroupItem id={`size-${size}`} value={size} className="sr-only" />
                {size}
              </Label>
            ))}
          </RadioGroup>
        </div>
      )}

      {/* Quantity Selection */}
      <div className="space-y-2">
        <Label htmlFor="quantity">Quantity</Label>
        <Select value={quantity.toString()} onValueChange={(value) => setQuantity(Number.parseInt(value))}>
          <SelectTrigger id="quantity" className="w-24">
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

      {/* Action Buttons */}
      <div className="flex flex-col sm:flex-row gap-3">
        <Button size="lg" className="flex-1 w-full" onClick={handleAddToCart}>
          <ShoppingCart className="mr-2 h-5 w-5" />
          Add to Cart
        </Button>
        <Button
          variant={inWishlist ? "default" : "outline"}
          size="lg"
          onClick={handleWishlistToggle}
          className={cn("w-full sm:w-auto", inWishlist ? "bg-primary/90 hover:bg-primary/80" : "")}
        >
          <Heart className={cn("mr-2 h-5 w-5", inWishlist && "fill-current")} />
          {inWishlist ? "Remove from Wishlist" : "Add to Wishlist"}
        </Button>
      </div>
    </div>
  )
}
