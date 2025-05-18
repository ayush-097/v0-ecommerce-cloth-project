import Link from "next/link"
import { ChevronRight } from "lucide-react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import ProductCard from "@/components/product-card"
import ProductFilters from "@/components/product-filters"
import { allProducts, categories } from "@/lib/data"

export default function CategoryPage({ params }) {
  const { slug } = params

  // Find the category by slug
  const category = categories.find((c) => c.slug === slug)

  if (!category) {
    return (
      <div className="flex min-h-screen flex-col">
        <Navbar />
        <main className="flex-1 container mx-auto px-4 py-12">
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-4">Category Not Found</h1>
            <p className="mb-6">The category you are looking for does not exist.</p>
            <Link href="/categories" className="text-primary hover:underline">
              Browse all categories
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    )
  }

  // Filter products by category
  const categoryProducts = allProducts.filter((product) =>
    product.category.toLowerCase().includes(category.name.toLowerCase().replace("'s", "")),
  )

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
            <Link href="/categories" className="text-muted-foreground hover:text-foreground">
              Categories
            </Link>
            <ChevronRight className="h-4 w-4 mx-2 text-muted-foreground" />
            <span>{category.name}</span>
          </nav>

          <div className="flex flex-col gap-8">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center">
              <h1 className="text-2xl font-bold mb-2 sm:mb-0">{category.name}</h1>
              <p className="text-muted-foreground">{categoryProducts.length} products</p>
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

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {categoryProducts.map((product) => (
                    <ProductCard key={product.id} product={product} />
                  ))}
                </div>

                {categoryProducts.length === 0 && (
                  <div className="text-center py-12">
                    <h2 className="text-xl font-semibold mb-2">No products found</h2>
                    <p className="text-muted-foreground mb-6">We couldn't find any products in this category.</p>
                    <Link href="/products" className="text-primary hover:underline">
                      View all products
                    </Link>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
