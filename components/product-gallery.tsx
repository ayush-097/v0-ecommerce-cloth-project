"use client"

import { useState } from "react"
import Image from "next/image"
import { cn } from "@/lib/utils"

export default function ProductGallery({ product }) {
  const [mainImage, setMainImage] = useState(product.image)

  // For a real product, we would have multiple images
  // Here we're creating dummy images for the gallery
  const images = [product.image, "/images/product-2.jpg", "/images/product-3.jpg", "/images/product-4.jpg"]

  return (
    <div className="space-y-4">
      <div className="relative aspect-square overflow-hidden rounded-lg border bg-background">
        <Image
          src={mainImage || "/placeholder.svg"}
          alt={product.name}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 50vw"
          priority
        />
        {product.discount > 0 && (
          <div className="absolute top-2 right-2 bg-red-600 text-white text-sm font-medium px-2 py-1 rounded">
            {product.discount}% OFF
          </div>
        )}
      </div>

      <div className="grid grid-cols-4 gap-4">
        {images.map((image, index) => (
          <button
            key={index}
            className={cn(
              "relative aspect-square overflow-hidden rounded-md border",
              mainImage === image ? "ring-2 ring-primary" : "",
            )}
            onClick={() => setMainImage(image)}
            aria-label={`View product image ${index + 1}`}
          >
            <Image
              src={image || "/placeholder.svg"}
              alt={`${product.name} thumbnail ${index + 1}`}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 25vw, 10vw"
            />
          </button>
        ))}
      </div>
    </div>
  )
}
