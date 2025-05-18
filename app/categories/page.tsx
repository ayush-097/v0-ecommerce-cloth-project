import Link from "next/link"
import Image from "next/image"
import { ChevronRight } from "lucide-react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { categories } from "@/lib/data"

export default function CategoriesPage() {
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
            <span>Categories</span>
          </nav>

          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Shop by Category</h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Browse our wide selection of clothing and accessories, organized by category to help you find exactly what
              you're looking for.
            </p>
          </div>

          {/* Main Categories */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {categories.slice(0, 2).map((category) => (
              <Link
                key={category.id}
                href={`/categories/${category.slug}`}
                className="group relative h-80 overflow-hidden rounded-xl"
              >
                <Image
                  src={category.image || "/placeholder.svg"}
                  alt={category.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors duration-300" />
                <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-6">
                  <h2 className="text-3xl font-bold mb-2">{category.name}</h2>
                  <p className="text-lg mb-4 max-w-md text-center">
                    {category.id === 1
                      ? "Discover our collection of stylish and comfortable men's clothing."
                      : "Explore our latest women's fashion for every occasion."}
                  </p>
                  <Button
                    variant="outline"
                    className="bg-transparent border-white text-white hover:bg-white hover:text-black"
                  >
                    Shop Now
                  </Button>
                </div>
              </Link>
            ))}
          </div>

          {/* Secondary Categories */}
          <h2 className="text-2xl font-bold mb-6">More Categories</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {categories.slice(2).map((category) => (
              <Link
                key={category.id}
                href={`/categories/${category.slug}`}
                className="group relative h-64 overflow-hidden rounded-lg"
              >
                <Image
                  src={category.image || "/placeholder.svg"}
                  alt={category.name}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors duration-300" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <h3 className="text-xl font-semibold text-white">{category.name}</h3>
                </div>
              </Link>
            ))}
          </div>

          {/* Seasonal Categories */}
          <div className="mt-16">
            <h2 className="text-2xl font-bold mb-6">Seasonal Collections</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Link href="/products?collection=summer" className="group relative h-64 overflow-hidden rounded-lg">
                <Image
                  src="/images/banner-1.jpg"
                  alt="Summer Collection"
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-black/20 group-hover:from-black/70 group-hover:to-black/30 transition-colors duration-300" />
                <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-4">
                  <h3 className="text-xl font-semibold mb-2">Summer Collection</h3>
                  <p className="text-sm text-center">Light and breathable styles for hot days</p>
                </div>
              </Link>
              <Link href="/products?collection=autumn" className="group relative h-64 overflow-hidden rounded-lg">
                <Image
                  src="/images/banner-2.jpg"
                  alt="Autumn Collection"
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-black/20 group-hover:from-black/70 group-hover:to-black/30 transition-colors duration-300" />
                <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-4">
                  <h3 className="text-xl font-semibold mb-2">Autumn Collection</h3>
                  <p className="text-sm text-center">Warm and stylish pieces for the fall season</p>
                </div>
              </Link>
              <Link href="/products?collection=winter" className="group relative h-64 overflow-hidden rounded-lg">
                <Image
                  src="/images/banner-3.jpg"
                  alt="Winter Collection"
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-black/20 group-hover:from-black/70 group-hover:to-black/30 transition-colors duration-300" />
                <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-4">
                  <h3 className="text-xl font-semibold mb-2">Winter Collection</h3>
                  <p className="text-sm text-center">Cozy and insulated clothing for cold weather</p>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
