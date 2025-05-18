"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const banners = [
  {
    id: 1,
    title: "Summer Collection 2025",
    description: "Discover the latest trends and styles for the upcoming season",
    image: "/images/banner-1.jpg",
    link: "/products",
    linkText: "Shop Now",
  },
  {
    id: 2,
    title: "New Arrivals",
    description: "Be the first to explore our freshest styles and limited editions",
    image: "/images/banner-2.jpg",
    link: "/categories/new-arrivals",
    linkText: "Explore Collection",
  },
  {
    id: 3,
    title: "Summer Sale",
    description: "Up to 50% off on selected items. Limited time offer!",
    image: "/images/banner-3.jpg",
    link: "/products?sale=true",
    linkText: "Shop the Sale",
  },
]

export default function HeroSwiper() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)
  const [autoplay, setAutoplay] = useState(true)

  const goToSlide = (index: number) => {
    if (isAnimating) return
    setIsAnimating(true)
    setCurrentSlide(index)
    setTimeout(() => setIsAnimating(false), 500)
  }

  const nextSlide = () => {
    goToSlide((currentSlide + 1) % banners.length)
  }

  const prevSlide = () => {
    goToSlide((currentSlide - 1 + banners.length) % banners.length)
  }

  // Autoplay functionality
  useEffect(() => {
    let interval: NodeJS.Timeout

    if (autoplay) {
      interval = setInterval(() => {
        nextSlide()
      }, 5000)
    }

    return () => {
      if (interval) clearInterval(interval)
    }
  }, [currentSlide, autoplay])

  // Pause autoplay on hover
  const handleMouseEnter = () => setAutoplay(false)
  const handleMouseLeave = () => setAutoplay(true)

  return (
    <div
      className="relative h-[70vh] w-full overflow-hidden"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Slides */}
      <div className="relative h-full w-full">
        {banners.map((banner, index) => (
          <div
            key={banner.id}
            className={cn(
              "absolute inset-0 transition-opacity duration-500",
              index === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0",
            )}
          >
            <Image src={banner.image || "/placeholder.svg"} alt={banner.title} fill priority className="object-cover" />
            <div className="absolute inset-0 bg-black/40" />
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white p-4">
              <h1 className="text-4xl md:text-6xl font-bold mb-4">{banner.title}</h1>
              <p className="text-lg md:text-xl mb-8 max-w-2xl">{banner.description}</p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="text-lg">
                  <Link href={banner.link}>{banner.linkText}</Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="text-lg bg-transparent text-white border-white hover:bg-white hover:text-black"
                >
                  <Link href="/categories">Browse Categories</Link>
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 z-20 -translate-y-1/2 h-10 w-10 flex items-center justify-center rounded-full bg-black/30 text-white hover:bg-black/50 transition-colors"
        aria-label="Previous slide"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 z-20 -translate-y-1/2 h-10 w-10 flex items-center justify-center rounded-full bg-black/30 text-white hover:bg-black/50 transition-colors"
        aria-label="Next slide"
      >
        <ChevronRight className="h-6 w-6" />
      </button>

      {/* Pagination Dots */}
      <div className="absolute bottom-4 left-0 right-0 z-20 flex justify-center gap-2">
        {banners.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={cn(
              "h-2 w-2 rounded-full transition-all",
              index === currentSlide ? "bg-white w-6" : "bg-white/50 hover:bg-white/80",
            )}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}
