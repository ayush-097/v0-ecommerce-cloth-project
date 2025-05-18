import { Suspense } from "react"
import Link from "next/link"
import { ChevronRight } from "lucide-react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import ProductCard from "@/components/product-card"
import ProductFilters from "@/components/product-filters"
import { allProducts } from "@/lib/data"

export default function ProductsPage({ searchParams }) {
  // Get filter parameters from URL
  const category = searchParams.category || ""
  const color = searchParams.color || ""
  const size = searchParams.size || ""
  const sort = searchParams.sort || "featured"
  const sale = searchParams.sale === "true"

  // Filter products based on URL parameters
  const filteredProducts = allProducts.filter((product) => {
    if (category && product.category !== category) return false
    if (color && !product.colors.includes(color)) return false
    if (size && !product.sizes.includes(size)) return false
    if (sale && product.discount === 0) return false
    return true
  })

  // Sort products
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sort) {
      case "price-low":
        return a.price - b.price
      case "price-high":
        return b.price - a.price
      case "newest":
        return new Date(b.date || "2023-01-01") - new Date(a.date || "2023-01-01")
      case "featured":
      default:
        return b.isNew - a.isNew
    }
  })

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
            <span>Products</span>
          </nav>

          <div className="flex flex-col gap-8">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center">
              <h1 className="text-2xl font-bold mb-2 sm:mb-0">All Products</h1>
              <p className="text-muted-foreground">{sortedProducts.length} products</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-[240px_1fr] gap-8">
              {/* Filters sidebar - hidden on mobile */}
              <aside className="hidden md:block">
                <div className="sticky top-20">
                  <ProductFilters />
                </div>
              </aside>

              {/* Products grid */}
              <div>
                {/* Mobile filters - only visible on mobile */}
                <div className="md:hidden mb-6">
                  <ProductFilters />
                </div>

                <Suspense fallback={<div>Loading products...</div>}>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {sortedProducts.map((product) => (
                      <ProductCard key={product.id} product={product} />
                    ))}
                  </div>

                  {sortedProducts.length === 0 && (
                    <div className="text-center py-12">
                      <h2 className="text-xl font-semibold mb-2">No products found</h2>
                      <p className="text-muted-foreground mb-6">
                        Try adjusting your filters to find what you're looking for.
                      </p>
                      <Link href="/products" className="text-primary hover:underline">
                        View all products
                      </Link>
                    </div>
                  )}
                </Suspense>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
