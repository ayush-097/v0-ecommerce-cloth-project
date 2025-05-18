import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import ProductCard from "@/components/product-card"
import { featuredProducts, categories } from "@/lib/data"
import HeroSwiper from "@/components/hero-swiper"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative">
          <HeroSwiper />
        </section>

        {/* Categories Section */}
        <section className="py-16 px-4 md:px-6 lg:px-8">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Shop by Category</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              {categories.map((category) => (
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
          </div>
        </section>

        {/* Featured Products */}
        <section className="py-16 px-4 md:px-6 lg:px-8 bg-muted/30">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Featured Products</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {featuredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
            <div className="mt-12 text-center">
              <Button asChild size="lg">
                <Link href="/products">View All Products</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Promotion Banner */}
        <section className="py-16 px-4 md:px-6 lg:px-8">
          <div className="container mx-auto">
            <div className="relative rounded-xl overflow-hidden">
              <div className="h-80 md:h-96 bg-gradient-to-r from-purple-500 to-pink-500">
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white p-6">
                  <h2 className="text-3xl md:text-4xl font-bold mb-4">Summer Sale</h2>
                  <p className="text-lg md:text-xl mb-6">Up to 50% off on selected items</p>
                  <Button asChild size="lg" variant="secondary">
                    <Link href="/products?sale=true">Shop the Sale</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Newsletter */}
        <section className="py-16 px-4 md:px-6 lg:px-8 bg-muted/50">
          <div className="container mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold mb-4">Subscribe to Our Newsletter</h2>
            <p className="text-muted-foreground mb-6">Stay updated with the latest trends and exclusive offers</p>
            <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Your email address"
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                required
              />
              <Button type="submit">Subscribe</Button>
            </form>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
