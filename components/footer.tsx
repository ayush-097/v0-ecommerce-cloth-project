import Link from "next/link"
import { Facebook, Instagram, Twitter, Youtube, ShoppingBag } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-muted/40 border-t">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <Link href="/" className="flex items-center gap-2 mb-4">
              <ShoppingBag className="h-6 w-6" />
              <span className="font-bold text-xl">StyleHub</span>
            </Link>
            <p className="text-muted-foreground mb-4">Your destination for modern fashion and style essentials.</p>
            <div className="flex space-x-4">
              <Link href="#" className="text-muted-foreground hover:text-primary">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary">
                <Youtube className="h-5 w-5" />
                <span className="sr-only">YouTube</span>
              </Link>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Shop</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/categories/men" className="text-muted-foreground hover:text-primary">
                  Men's Clothing
                </Link>
              </li>
              <li>
                <Link href="/categories/women" className="text-muted-foreground hover:text-primary">
                  Women's Clothing
                </Link>
              </li>
              <li>
                <Link href="/categories/accessories" className="text-muted-foreground hover:text-primary">
                  Accessories
                </Link>
              </li>
              <li>
                <Link href="/categories/footwear" className="text-muted-foreground hover:text-primary">
                  Footwear
                </Link>
              </li>
              <li>
                <Link href="/products?sale=true" className="text-muted-foreground hover:text-primary">
                  Sale
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Customer Service</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/contact" className="text-muted-foreground hover:text-primary">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/track-order" className="text-muted-foreground hover:text-primary">
                  Track Order
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-muted-foreground hover:text-primary">
                  FAQs
                </Link>
              </li>
              <li>
                <Link href="/shipping" className="text-muted-foreground hover:text-primary">
                  Shipping & Returns
                </Link>
              </li>
              <li>
                <Link href="/wishlist" className="text-muted-foreground hover:text-primary">
                  Wishlist
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">About</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/our-story" className="text-muted-foreground hover:text-primary">
                  Our Story
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-muted-foreground hover:text-primary">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/careers" className="text-muted-foreground hover:text-primary">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-muted-foreground hover:text-primary">
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-muted-foreground hover:text-primary">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-muted-foreground text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} StyleHub. All rights reserved.
          </p>
          <div className="flex items-center space-x-4">
            <img src="/placeholder.svg?height=30&width=50" alt="Visa" className="h-8" />
            <img src="/placeholder.svg?height=30&width=50" alt="Mastercard" className="h-8" />
            <img src="/placeholder.svg?height=30&width=50" alt="PayPal" className="h-8" />
            <img src="/placeholder.svg?height=30&width=50" alt="Apple Pay" className="h-8" />
          </div>
        </div>
      </div>
    </footer>
  )
}
