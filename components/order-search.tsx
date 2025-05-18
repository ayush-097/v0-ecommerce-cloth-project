"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Search } from "lucide-react"

interface OrderSearchProps {
  onSearch: (orderId: string, email: string) => void
}

export default function OrderSearch({ onSearch }: OrderSearchProps) {
  const [orderId, setOrderId] = useState("")
  const [email, setEmail] = useState("")
  const [errors, setErrors] = useState({ orderId: "", email: "" })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    // Validate inputs
    const newErrors = { orderId: "", email: "" }
    let hasError = false

    if (!orderId.trim()) {
      newErrors.orderId = "Order ID is required"
      hasError = true
    }

    if (!email.trim()) {
      newErrors.email = "Email is required"
      hasError = true
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = "Please enter a valid email address"
      hasError = true
    }

    setErrors(newErrors)

    if (!hasError) {
      onSearch(orderId.trim(), email.trim())
    }
  }

  return (
    <div className="bg-muted/30 p-6 rounded-lg">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="order-id">Order ID</Label>
          <Input
            id="order-id"
            placeholder="e.g., ORD-12345"
            value={orderId}
            onChange={(e) => setOrderId(e.target.value)}
            className={errors.orderId ? "border-destructive" : ""}
          />
          {errors.orderId && <p className="text-destructive text-sm">{errors.orderId}</p>}
        </div>

        <div className="space-y-2">
          <Label htmlFor="email">Email Address</Label>
          <Input
            id="email"
            type="email"
            placeholder="e.g., your.email@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={errors.email ? "border-destructive" : ""}
          />
          {errors.email && <p className="text-destructive text-sm">{errors.email}</p>}
        </div>

        <Button type="submit" className="w-full">
          <Search className="mr-2 h-4 w-4" />
          Track Order
        </Button>
      </form>
    </div>
  )
}
