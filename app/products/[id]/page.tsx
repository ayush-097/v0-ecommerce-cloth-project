import Link from "next/link"
import { ChevronRight, Star, Truck, RotateCcw, Shield } from "lucide-react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import ProductGallery from "@/components/product-gallery"
import AddToCartForm from "@/components/add-to-cart-form"
import RelatedProducts from "@/components/related-products"
import { allProducts } from "@/lib/data"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function ProductPage({ params }) {
  const productId = Number.parseInt(params.id)
  const product = allProducts.find((p) => p.id === productId)

  if (!product) {
    return (
      <div className="flex min-h-screen flex-col">
        <Navbar />
        <main className="flex-1 container mx-auto px-4 py-12">
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-4">Product Not Found</h1>
            <p className="mb-6">The product you are looking for does not exist.</p>
            <Link href="/products" className="text-primary hover:underline">
              Browse all products
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    )
  }

  // Calculate discounted price if applicable
  const discountedPrice = product.discount > 0 ? product.price * (1 - product.discount / 100) : null

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
            <Link href="/products" className="text-muted-foreground hover:text-foreground">
              Products
            </Link>
            <ChevronRight className="h-4 w-4 mx-2 text-muted-foreground" />
            <Link
              href={`/categories/${product.category.toLowerCase().replace("'s", "").replace(" ", "-")}`}
              className="text-muted-foreground hover:text-foreground"
            >
              {product.category}
            </Link>
            <ChevronRight className="h-4 w-4 mx-2 text-muted-foreground" />
            <span className="truncate max-w-[200px]">{product.name}</span>
          </nav>

          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            {/* Product Gallery */}
            <ProductGallery product={product} />

            {/* Product Info */}
            <div className="space-y-6">
              <div>
                <h1 className="text-3xl font-bold">{product.name}</h1>
                <div className="flex items-center gap-4 mt-2">
                  <div className="flex items-center">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star
                        key={star}
                        className={`w-5 h-5 ${star <= 4 ? "fill-primary" : "fill-muted stroke-muted-foreground"}`}
                      />
                    ))}
                    <span className="ml-2 text-sm text-muted-foreground">4.0 (24 reviews)</span>
                  </div>
                </div>
              </div>

              <div className="flex items-baseline gap-2">
                {discountedPrice ? (
                  <>
                    <span className="text-3xl font-bold">${discountedPrice.toFixed(2)}</span>
                    <span className="text-xl text-muted-foreground line-through">${product.price.toFixed(2)}</span>
                    <span className="text-sm font-medium bg-red-100 text-red-700 px-2 py-0.5 rounded">
                      Save {product.discount}%
                    </span>
                  </>
                ) : (
                  <span className="text-3xl font-bold">${product.price.toFixed(2)}</span>
                )}
              </div>

              <p className="text-muted-foreground">{product.description}</p>

              {/* Add to Cart Form */}
              <AddToCartForm product={product} />

              {/* Shipping & Returns */}
              <div className="border-t pt-6 space-y-4">
                <div className="flex items-start gap-3">
                  <Truck className="w-5 h-5 text-muted-foreground mt-0.5" />
                  <div>
                    <h3 className="font-medium">Free Shipping</h3>
                    <p className="text-sm text-muted-foreground">Free standard shipping on orders over $50</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <RotateCcw className="w-5 h-5 text-muted-foreground mt-0.5" />
                  <div>
                    <h3 className="font-medium">Easy Returns</h3>
                    <p className="text-sm text-muted-foreground">Return within 30 days for a full refund</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Shield className="w-5 h-5 text-muted-foreground mt-0.5" />
                  <div>
                    <h3 className="font-medium">Secure Checkout</h3>
                    <p className="text-sm text-muted-foreground">Safe & secure payment processing</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Product Details Tabs */}
          <div className="mt-16">
            <Tabs defaultValue="description">
              <TabsList className="w-full border-b flex overflow-x-auto">
                <TabsTrigger value="description" className="flex-1">
                  Description
                </TabsTrigger>
                <TabsTrigger value="details" className="flex-1">
                  Details & Care
                </TabsTrigger>
                <TabsTrigger value="reviews" className="flex-1">
                  Reviews (24)
                </TabsTrigger>
              </TabsList>
              <TabsContent value="description" className="py-6">
                <p className="mb-4">
                  {product.description} This premium quality item is crafted with attention to detail and designed to
                  last.
                </p>
                <p>
                  The {product.name} features a modern fit and versatile design, making it perfect for various
                  occasions. Whether you're dressing up for a special event or keeping it casual for everyday wear, this
                  piece offers both comfort and style.
                </p>
              </TabsContent>
              <TabsContent value="details" className="py-6">
                <h3 className="font-medium mb-3">Materials</h3>
                <p className="mb-4 text-muted-foreground">
                  Made from high-quality materials selected for durability and comfort. The fabric blend provides the
                  perfect balance of structure and flexibility.
                </p>

                <h3 className="font-medium mb-3">Care Instructions</h3>
                <ul className="list-disc pl-5 space-y-1 text-muted-foreground mb-4">
                  <li>Machine wash cold with similar colors</li>
                  <li>Do not bleach</li>
                  <li>Tumble dry low</li>
                  <li>Iron on low heat if needed</li>
                  <li>Do not dry clean</li>
                </ul>

                <h3 className="font-medium mb-3">Dimensions & Fit</h3>
                <p className="text-muted-foreground">
                  This item is designed with a regular fit. Please refer to our size guide for detailed measurements.
                  Model is 6'1" and wearing size M.
                </p>
              </TabsContent>
              <TabsContent value="reviews" className="py-6">
                <div className="flex justify-between items-center mb-6">
                  <div>
                    <h3 className="font-medium text-lg">Customer Reviews</h3>
                    <p className="text-muted-foreground">24 reviews with an average rating of 4.0</p>
                  </div>
                  <Link href="#" className="text-primary hover:underline">
                    Write a Review
                  </Link>
                </div>

                <div className="space-y-6">
                  {/* Sample reviews */}
                  <div className="border-b pb-6">
                    <div className="flex justify-between mb-2">
                      <div className="font-medium">John D.</div>
                      <div className="text-muted-foreground text-sm">2 weeks ago</div>
                    </div>
                    <div className="flex items-center mb-2">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star
                          key={star}
                          className={`w-4 h-4 ${star <= 5 ? "fill-primary" : "fill-muted stroke-muted-foreground"}`}
                        />
                      ))}
                    </div>
                    <p className="text-muted-foreground">
                      Great quality and fits perfectly. I've been looking for something like this for a while and I'm
                      very happy with my purchase. Would definitely recommend!
                    </p>
                  </div>

                  <div className="border-b pb-6">
                    <div className="flex justify-between mb-2">
                      <div className="font-medium">Sarah M.</div>
                      <div className="text-muted-foreground text-sm">1 month ago</div>
                    </div>
                    <div className="flex items-center mb-2">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star
                          key={star}
                          className={`w-4 h-4 ${star <= 4 ? "fill-primary" : "fill-muted stroke-muted-foreground"}`}
                        />
                      ))}
                    </div>
                    <p className="text-muted-foreground">
                      The material is nice and the design is exactly as pictured. I ordered my usual size and it fits
                      well. Shipping was fast too!
                    </p>
                  </div>

                  <div>
                    <div className="flex justify-between mb-2">
                      <div className="font-medium">Michael T.</div>
                      <div className="text-muted-foreground text-sm">2 months ago</div>
                    </div>
                    <div className="flex items-center mb-2">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star
                          key={star}
                          className={`w-4 h-4 ${star <= 3 ? "fill-primary" : "fill-muted stroke-muted-foreground"}`}
                        />
                      ))}
                    </div>
                    <p className="text-muted-foreground">
                      Good product but runs a bit small. I would recommend sizing up if you're between sizes. Otherwise,
                      the quality is good for the price.
                    </p>
                  </div>
                </div>

                <div className="mt-8 text-center">
                  <Link href="#" className="text-primary hover:underline">
                    View All 24 Reviews
                  </Link>
                </div>
              </TabsContent>
            </Tabs>
          </div>

          {/* Related Products */}
          <RelatedProducts currentProductId={product.id} category={product.category} />
        </div>
      </main>
      <Footer />
    </div>
  )
}
