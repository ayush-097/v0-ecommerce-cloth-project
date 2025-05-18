"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { ShoppingBag, User, Heart, Search, Menu, X, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger, SheetClose } from "@/components/ui/sheet"
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"
import { useCart } from "@/lib/cart-context"
import { useWishlist } from "@/lib/wishlist-context"

export default function Navbar() {
  const pathname = usePathname()
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const { cartItems } = useCart()
  const { wishlistItems } = useWishlist()

  const routes = [
    { href: "/", label: "Home" },
    { href: "/products", label: "Shop" },
    { href: "/categories", label: "Categories" },
    { href: "/track-order", label: "Track Order" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
  ]

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center mx-auto">
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="w-[85vw] max-w-[300px] p-0">
            <SheetHeader className="border-b p-4">
              <SheetTitle className="flex items-center gap-2">
                <ShoppingBag className="h-5 w-5" />
                StyleHub
              </SheetTitle>
            </SheetHeader>
            <div className="py-4">
              <nav className="flex flex-col">
                {routes.map((route) => (
                  <SheetClose asChild key={route.href}>
                    <Link
                      href={route.href}
                      className={cn(
                        "flex items-center justify-between py-3 px-4 text-base transition-colors hover:bg-muted",
                        pathname === route.href ? "font-medium text-primary" : "text-foreground",
                      )}
                    >
                      {route.label}
                      <ChevronRight className="h-4 w-4 text-muted-foreground" />
                    </Link>
                  </SheetClose>
                ))}
                <SheetClose asChild>
                  <Link
                    href="/wishlist"
                    className={cn(
                      "flex items-center justify-between py-3 px-4 text-base transition-colors hover:bg-muted",
                      pathname === "/wishlist" ? "font-medium text-primary" : "text-foreground",
                    )}
                  >
                    Wishlist
                    <span className="flex items-center">
                      {wishlistItems.length > 0 && (
                        <Badge variant="outline" className="mr-2">
                          {wishlistItems.length}
                        </Badge>
                      )}
                      <ChevronRight className="h-4 w-4 text-muted-foreground" />
                    </span>
                  </Link>
                </SheetClose>
              </nav>
            </div>
          </SheetContent>
        </Sheet>

        <Link href="/" className="ml-4 md:ml-0 flex items-center gap-2">
          <ShoppingBag className="h-6 w-6" />
          <span className="font-bold text-xl hidden md:inline-block">StyleHub</span>
        </Link>

        <nav className="mx-6 hidden md:flex items-center space-x-4 lg:space-x-6 flex-1 justify-center">
          {routes.map((route) => (
            <Link
              key={route.href}
              href={route.href}
              className={cn(
                "text-sm font-medium transition-colors hover:text-primary",
                pathname === route.href ? "text-primary" : "text-muted-foreground",
              )}
            >
              {route.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-1 sm:gap-2 ml-auto">
          {isSearchOpen ? (
            <div className="flex items-center absolute inset-x-0 top-0 bg-background h-16 px-4 z-20">
              <Input type="search" placeholder="Search..." className="flex-1 max-w-md mx-auto" autoFocus />
              <Button variant="ghost" size="icon" onClick={() => setIsSearchOpen(false)} className="ml-2">
                <X className="h-5 w-5" />
              </Button>
            </div>
          ) : (
            <Button variant="ghost" size="icon" onClick={() => setIsSearchOpen(true)}>
              <Search className="h-5 w-5" />
              <span className="sr-only">Search</span>
            </Button>
          )}

          <Button variant="ghost" size="icon" className="relative hidden sm:flex" asChild>
            <Link href="/wishlist">
              <Heart className="h-5 w-5" />
              {wishlistItems.length > 0 && (
                <Badge className="absolute -top-2 -right-2 h-5 w-5 flex items-center justify-center p-0 text-xs">
                  {wishlistItems.length}
                </Badge>
              )}
              <span className="sr-only">Wishlist</span>
            </Link>
          </Button>

          <Button variant="ghost" size="icon" className="hidden sm:flex" asChild>
            <Link href="/account">
              <User className="h-5 w-5" />
              <span className="sr-only">Account</span>
            </Link>
          </Button>

          <Button variant="ghost" size="icon" className="relative" asChild>
            <Link href="/cart">
              <ShoppingBag className="h-5 w-5" />
              {cartItems.length > 0 && (
                <Badge className="absolute -top-2 -right-2 h-5 w-5 flex items-center justify-center p-0 text-xs">
                  {cartItems.length}
                </Badge>
              )}
              <span className="sr-only">Cart</span>
            </Link>
          </Button>
        </div>
      </div>
    </header>
  )
}
