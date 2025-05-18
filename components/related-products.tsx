import ProductCard from "@/components/product-card"
import { allProducts } from "@/lib/data"

export default function RelatedProducts({ currentProductId, category }) {
  // Find related products in the same category, excluding current product
  const relatedProducts = allProducts
    .filter((product) => product.category === category && product.id !== currentProductId)
    .slice(0, 4) // Limit to 4 products

  return (
    <section className="mt-16">
      <h2 className="text-2xl font-bold mb-6">You May Also Like</h2>

      {relatedProducts.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {relatedProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <p className="text-muted-foreground">No related products found.</p>
      )}
    </section>
  )
}
