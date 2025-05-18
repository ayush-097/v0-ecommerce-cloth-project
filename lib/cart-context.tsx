"use client"

import { createContext, useContext, useState, useEffect } from "react"

const CartContext = createContext(null)

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([])
  const [isLoaded, setIsLoaded] = useState(false)

  // Load cart from localStorage on client side
  useEffect(() => {
    const storedCart = localStorage.getItem("cart")
    if (storedCart) {
      try {
        setCartItems(JSON.parse(storedCart))
      } catch (error) {
        console.error("Failed to parse cart from localStorage:", error)
        setCartItems([])
      }
    }
    setIsLoaded(true)
  }, [])

  // Save cart to localStorage whenever it changes
  useEffect(() => {
    if (isLoaded) {
      localStorage.setItem("cart", JSON.stringify(cartItems))
    }
  }, [cartItems, isLoaded])

  const addToCart = (product, quantity = 1, selectedSize = null, selectedColor = null) => {
    setCartItems((prevItems) => {
      // Check if product already exists in cart
      const existingItemIndex = prevItems.findIndex(
        (item) => item.id === product.id && item.selectedSize === selectedSize && item.selectedColor === selectedColor,
      )

      if (existingItemIndex > -1) {
        // Update quantity of existing item
        const updatedItems = [...prevItems]
        updatedItems[existingItemIndex].quantity += quantity
        return updatedItems
      } else {
        // Add new item to cart
        return [
          ...prevItems,
          {
            ...product,
            quantity,
            selectedSize,
            selectedColor,
            cartItemId: `${product.id}-${selectedSize || "default"}-${selectedColor || "default"}-${Date.now()}`,
          },
        ]
      }
    })
  }

  const updateCartItem = (cartItemId, updates) => {
    setCartItems((prevItems) =>
      prevItems.map((item) => (item.cartItemId === cartItemId ? { ...item, ...updates } : item)),
    )
  }

  const removeFromCart = (cartItemId) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.cartItemId !== cartItemId))
  }

  const clearCart = () => {
    setCartItems([])
  }

  const getCartTotal = () => {
    return cartItems.reduce((total, item) => {
      const price = item.discount > 0 ? item.price * (1 - item.discount / 100) : item.price
      return total + price * item.quantity
    }, 0)
  }

  const getCartCount = () => {
    return cartItems.reduce((count, item) => count + item.quantity, 0)
  }

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        updateCartItem,
        removeFromCart,
        clearCart,
        getCartTotal,
        getCartCount,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

export const useCart = () => {
  const context = useContext(CartContext)
  if (!context) {
    throw new Error("useCart must be used within a CartProvider")
  }
  return context
}
