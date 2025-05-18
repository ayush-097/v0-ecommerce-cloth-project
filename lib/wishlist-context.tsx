"use client"

import { createContext, useContext, useState, useEffect } from "react"
import { useToast } from "@/hooks/use-toast"

const WishlistContext = createContext(null)

export function WishlistProvider({ children }) {
  const [wishlistItems, setWishlistItems] = useState([])
  const [isLoaded, setIsLoaded] = useState(false)
  const { toast } = useToast()

  // Load wishlist from localStorage on client side
  useEffect(() => {
    const storedWishlist = localStorage.getItem("wishlist")
    if (storedWishlist) {
      try {
        setWishlistItems(JSON.parse(storedWishlist))
      } catch (error) {
        console.error("Failed to parse wishlist from localStorage:", error)
        setWishlistItems([])
      }
    }
    setIsLoaded(true)
  }, [])

  // Save wishlist to localStorage whenever it changes
  useEffect(() => {
    if (isLoaded) {
      localStorage.setItem("wishlist", JSON.stringify(wishlistItems))
    }
  }, [wishlistItems, isLoaded])

  const addToWishlist = (product) => {
    setWishlistItems((prevItems) => {
      // Check if product already exists in wishlist
      const existingItem = prevItems.find((item) => item.id === product.id)

      if (existingItem) {
        toast({
          title: "Already in wishlist",
          description: `${product.name} is already in your wishlist.`,
        })
        return prevItems
      } else {
        toast({
          title: "Added to wishlist",
          description: `${product.name} has been added to your wishlist.`,
        })
        return [...prevItems, product]
      }
    })
  }

  const removeFromWishlist = (productId) => {
    setWishlistItems((prevItems) => {
      const itemToRemove = prevItems.find((item) => item.id === productId)
      if (itemToRemove) {
        toast({
          title: "Removed from wishlist",
          description: `${itemToRemove.name} has been removed from your wishlist.`,
        })
      }
      return prevItems.filter((item) => item.id !== productId)
    })
  }

  const isInWishlist = (productId) => {
    return wishlistItems.some((item) => item.id === productId)
  }

  const clearWishlist = () => {
    setWishlistItems([])
    toast({
      title: "Wishlist cleared",
      description: "All items have been removed from your wishlist.",
    })
  }

  return (
    <WishlistContext.Provider
      value={{
        wishlistItems,
        addToWishlist,
        removeFromWishlist,
        isInWishlist,
        clearWishlist,
      }}
    >
      {children}
    </WishlistContext.Provider>
  )
}

export const useWishlist = () => {
  const context = useContext(WishlistContext)
  if (!context) {
    throw new Error("useWishlist must be used within a WishlistProvider")
  }
  return context
}
