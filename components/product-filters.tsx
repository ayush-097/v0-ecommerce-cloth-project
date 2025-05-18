"use client"

import { useState, useTransition } from "react"
import { useRouter, usePathname, useSearchParams } from "next/navigation"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetFooter, SheetTrigger } from "@/components/ui/sheet"
import { SlidersHorizontal, X } from "lucide-react"
import { categories } from "@/lib/data"
import { Badge } from "@/components/ui/badge"

export default function ProductFilters() {
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const [isPending, startTransition] = useTransition()
  const [isFilterOpen, setIsFilterOpen] = useState(false)

  // Get current filter values from URL
  const currentCategory = searchParams.get("category") || ""
  const currentColor = searchParams.get("color") || ""
  const currentSize = searchParams.get("size") || ""
  const currentSort = searchParams.get("sort") || "featured"
  const currentSale = searchParams.get("sale") === "true"

  // Local state for filters
  const [localFilters, setLocalFilters] = useState({
    category: currentCategory,
    color: currentColor,
    size: currentSize,
    sort: currentSort,
    sale: currentSale,
  })

  // Update URL with filters
  const updateFilters = (newFilters) => {
    const updatedFilters = { ...localFilters, ...newFilters }
    setLocalFilters(updatedFilters)

    startTransition(() => {
      const params = new URLSearchParams(searchParams)

      // Update or remove each parameter
      Object.entries(updatedFilters).forEach(([key, value]) => {
        if (value && value !== "") {
          params.set(key, value.toString())
        } else {
          params.delete(key)
        }
      })

      router.push(`${pathname}?${params.toString()}`)
    })
  }

  // Reset all filters
  const resetFilters = () => {
    setLocalFilters({
      category: "",
      color: "",
      size: "",
      sort: "featured",
      sale: false,
    })

    startTransition(() => {
      router.push(pathname)
    })
  }

  // Count active filters
  const activeFilterCount = Object.values(localFilters).filter(
    (value) => value !== "" && value !== "featured" && value !== false,
  ).length

  // Filter content that will be used in both desktop and mobile views
  const filterContent = (
    <>
      <Accordion type="multiple" defaultValue={["categories", "colors", "sizes", "price"]} className="w-full">
        <AccordionItem value="categories">
          <AccordionTrigger>Categories</AccordionTrigger>
          <AccordionContent>
            <RadioGroup value={localFilters.category} onValueChange={(value) => updateFilters({ category: value })}>
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <RadioGroupItem id="all-categories" value="" />
                  <Label htmlFor="all-categories">All Categories</Label>
                </div>

                {categories.map((category) => (
                  <div key={category.id} className="flex items-center space-x-2">
                    <RadioGroupItem id={`category-${category.id}`} value={category.name} />
                    <Label htmlFor={`category-${category.id}`}>{category.name}</Label>
                  </div>
                ))}
              </div>
            </RadioGroup>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="colors">
          <AccordionTrigger>Colors</AccordionTrigger>
          <AccordionContent>
            <RadioGroup value={localFilters.color} onValueChange={(value) => updateFilters({ color: value })}>
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <RadioGroupItem id="all-colors" value="" />
                  <Label htmlFor="all-colors">All Colors</Label>
                </div>

                {["black", "white", "blue", "red", "gray", "brown"].map((color) => (
                  <div key={color} className="flex items-center space-x-2">
                    <RadioGroupItem id={`color-${color}`} value={color} />
                    <Label htmlFor={`color-${color}`} className="capitalize flex items-center gap-2">
                      <span
                        className="inline-block w-4 h-4 rounded-full border"
                        style={{ backgroundColor: color }}
                      ></span>
                      {color}
                    </Label>
                  </div>
                ))}
              </div>
            </RadioGroup>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="sizes">
          <AccordionTrigger>Sizes</AccordionTrigger>
          <AccordionContent>
            <RadioGroup value={localFilters.size} onValueChange={(value) => updateFilters({ size: value })}>
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <RadioGroupItem id="all-sizes" value="" />
                  <Label htmlFor="all-sizes">All Sizes</Label>
                </div>

                {["XS", "S", "M", "L", "XL"].map((size) => (
                  <div key={size} className="flex items-center space-x-2">
                    <RadioGroupItem id={`size-${size}`} value={size} />
                    <Label htmlFor={`size-${size}`}>{size}</Label>
                  </div>
                ))}
              </div>
            </RadioGroup>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="price">
          <AccordionTrigger>Price</AccordionTrigger>
          <AccordionContent>
            <RadioGroup value={localFilters.sort} onValueChange={(value) => updateFilters({ sort: value })}>
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <RadioGroupItem id="sort-featured" value="featured" />
                  <Label htmlFor="sort-featured">Featured</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem id="sort-price-low" value="price-low" />
                  <Label htmlFor="sort-price-low">Price: Low to High</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem id="sort-price-high" value="price-high" />
                  <Label htmlFor="sort-price-high">Price: High to Low</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem id="sort-newest" value="newest" />
                  <Label htmlFor="sort-newest">Newest</Label>
                </div>
              </div>
            </RadioGroup>

            <div className="mt-4 pt-4 border-t">
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="sale-only"
                  checked={localFilters.sale}
                  onCheckedChange={(checked) => updateFilters({ sale: checked === true })}
                />
                <Label htmlFor="sale-only" className="flex items-center gap-2">
                  Sale items only
                  {localFilters.sale && (
                    <span className="inline-block px-2 py-0.5 bg-red-100 text-red-800 text-xs rounded-full">
                      On Sale
                    </span>
                  )}
                </Label>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </>
  )

  // Mobile filter button and sheet
  const mobileFilters = (
    <div className="md:hidden">
      <Sheet open={isFilterOpen} onOpenChange={setIsFilterOpen}>
        <SheetTrigger asChild>
          <Button variant="outline" size="sm" className="flex items-center gap-2">
            <SlidersHorizontal className="h-4 w-4" />
            Filters
            {activeFilterCount > 0 && (
              <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-primary text-primary-foreground text-xs">
                {activeFilterCount}
              </span>
            )}
          </Button>
        </SheetTrigger>
        <SheetContent side="bottom" className="h-[85vh] pt-6 px-4">
          <SheetHeader className="mb-4 flex flex-row items-center justify-between">
            <SheetTitle>Filters</SheetTitle>
            <div className="flex items-center gap-2">
              <Button variant="ghost" size="sm" onClick={resetFilters} disabled={isPending}>
                Reset
              </Button>
              <Button variant="ghost" size="icon" onClick={() => setIsFilterOpen(false)}>
                <X className="h-4 w-4" />
              </Button>
            </div>
          </SheetHeader>
          <div className="overflow-y-auto flex-1 pb-16">{filterContent}</div>
          <SheetFooter className="fixed bottom-0 left-0 right-0 p-4 bg-background border-t">
            <Button className="w-full" onClick={() => setIsFilterOpen(false)}>
              Show {searchParams.toString() ? "Filtered" : "All"} Results
            </Button>
          </SheetFooter>
        </SheetContent>
      </Sheet>
    </div>
  )

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-semibold">Filters</h2>
        <div className="flex items-center gap-2">
          {mobileFilters}
          <Button
            variant="ghost"
            size="sm"
            onClick={resetFilters}
            disabled={isPending}
            className="hidden md:inline-flex"
          >
            Reset
          </Button>
        </div>
      </div>

      {/* Desktop filters */}
      <div className="hidden md:block">{filterContent}</div>

      {/* Active filters display */}
      {activeFilterCount > 0 && (
        <div className="flex flex-wrap gap-2 pt-2">
          {localFilters.category && (
            <Badge variant="outline" className="flex items-center gap-1">
              {localFilters.category}
              <Button
                variant="ghost"
                size="icon"
                className="h-4 w-4 p-0 ml-1"
                onClick={() => updateFilters({ category: "" })}
              >
                <X className="h-3 w-3" />
              </Button>
            </Badge>
          )}
          {localFilters.color && (
            <Badge variant="outline" className="flex items-center gap-1">
              <span
                className="inline-block w-2 h-2 rounded-full mr-1"
                style={{ backgroundColor: localFilters.color }}
              ></span>
              {localFilters.color}
              <Button
                variant="ghost"
                size="icon"
                className="h-4 w-4 p-0 ml-1"
                onClick={() => updateFilters({ color: "" })}
              >
                <X className="h-3 w-3" />
              </Button>
            </Badge>
          )}
          {localFilters.size && (
            <Badge variant="outline" className="flex items-center gap-1">
              Size: {localFilters.size}
              <Button
                variant="ghost"
                size="icon"
                className="h-4 w-4 p-0 ml-1"
                onClick={() => updateFilters({ size: "" })}
              >
                <X className="h-3 w-3" />
              </Button>
            </Badge>
          )}
          {localFilters.sort !== "featured" && (
            <Badge variant="outline" className="flex items-center gap-1">
              {localFilters.sort === "price-low" && "Price: Low to High"}
              {localFilters.sort === "price-high" && "Price: High to Low"}
              {localFilters.sort === "newest" && "Newest"}
              <Button
                variant="ghost"
                size="icon"
                className="h-4 w-4 p-0 ml-1"
                onClick={() => updateFilters({ sort: "featured" })}
              >
                <X className="h-3 w-3" />
              </Button>
            </Badge>
          )}
          {localFilters.sale && (
            <Badge variant="outline" className="flex items-center gap-1 bg-red-50">
              On Sale
              <Button
                variant="ghost"
                size="icon"
                className="h-4 w-4 p-0 ml-1"
                onClick={() => updateFilters({ sale: false })}
              >
                <X className="h-3 w-3" />
              </Button>
            </Badge>
          )}
        </div>
      )}
    </div>
  )
}
