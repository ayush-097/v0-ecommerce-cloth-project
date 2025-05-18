export type OrderStatus =
  | "order_placed"
  | "payment_confirmed"
  | "processing"
  | "shipped"
  | "out_for_delivery"
  | "delivered"
  | "cancelled"

export interface OrderStatusDetail {
  status: OrderStatus
  label: string
  description: string
  icon: string
  date?: Date
  isCompleted: boolean
  isActive: boolean
}

export interface OrderTrackingDetail {
  orderId: string
  customerName: string
  customerEmail: string
  orderDate: Date
  estimatedDelivery: Date
  currentStatus: OrderStatus
  statusHistory: OrderStatusDetail[]
  items: OrderItem[]
  shippingAddress: Address
  trackingNumber?: string
  carrier?: string
}

export interface OrderItem {
  id: number
  name: string
  price: number
  quantity: number
  image: string
  size?: string
  color?: string
}

export interface Address {
  line1: string
  line2?: string
  city: string
  state: string
  postalCode: string
  country: string
}

// Mock data for demonstration
export const mockOrders: Record<string, OrderTrackingDetail> = {
  "ORD-12345": {
    orderId: "ORD-12345",
    customerName: "John Doe",
    customerEmail: "john.doe@example.com",
    orderDate: new Date(2025, 4, 15, 14, 30), // May 15, 2025, 2:30 PM
    estimatedDelivery: new Date(2025, 4, 20), // May 20, 2025
    currentStatus: "out_for_delivery",
    statusHistory: [
      {
        status: "order_placed",
        label: "Order Placed",
        description: "Your order has been placed successfully",
        icon: "shopping-bag",
        date: new Date(2025, 4, 15, 14, 30), // May 15, 2025, 2:30 PM
        isCompleted: true,
        isActive: false,
      },
      {
        status: "payment_confirmed",
        label: "Payment Confirmed",
        description: "Your payment has been confirmed",
        icon: "credit-card",
        date: new Date(2025, 4, 15, 14, 35), // May 15, 2025, 2:35 PM
        isCompleted: true,
        isActive: false,
      },
      {
        status: "processing",
        label: "Processing",
        description: "Your order is being processed",
        icon: "package",
        date: new Date(2025, 4, 16, 9, 15), // May 16, 2025, 9:15 AM
        isCompleted: true,
        isActive: false,
      },
      {
        status: "shipped",
        label: "Shipped",
        description: "Your order has been shipped",
        icon: "truck",
        date: new Date(2025, 4, 17, 11, 0), // May 17, 2025, 11:00 AM
        isCompleted: true,
        isActive: false,
      },
      {
        status: "out_for_delivery",
        label: "Out for Delivery",
        description: "Your order is out for delivery",
        icon: "map-pin",
        date: new Date(2025, 4, 18, 8, 30), // May 18, 2025, 8:30 AM
        isCompleted: false,
        isActive: true,
      },
      {
        status: "delivered",
        label: "Delivered",
        description: "Your order has been delivered",
        icon: "check-circle",
        isCompleted: false,
        isActive: false,
      },
    ],
    items: [
      {
        id: 1,
        name: "Classic White T-Shirt",
        price: 29.99,
        quantity: 2,
        image: "/images/product-1.jpg",
        size: "M",
        color: "White",
      },
      {
        id: 3,
        name: "Summer Floral Dress",
        price: 49.99,
        quantity: 1,
        image: "/images/product-3.jpg",
        size: "S",
        color: "Floral",
      },
    ],
    shippingAddress: {
      line1: "123 Main Street",
      line2: "Apt 4B",
      city: "New York",
      state: "NY",
      postalCode: "10001",
      country: "United States",
    },
    trackingNumber: "TRK-9876543210",
    carrier: "FedEx",
  },
  "ORD-67890": {
    orderId: "ORD-67890",
    customerName: "Jane Smith",
    customerEmail: "jane.smith@example.com",
    orderDate: new Date(2025, 4, 16, 10, 15), // May 16, 2025, 10:15 AM
    estimatedDelivery: new Date(2025, 4, 21), // May 21, 2025
    currentStatus: "processing",
    statusHistory: [
      {
        status: "order_placed",
        label: "Order Placed",
        description: "Your order has been placed successfully",
        icon: "shopping-bag",
        date: new Date(2025, 4, 16, 10, 15), // May 16, 2025, 10:15 AM
        isCompleted: true,
        isActive: false,
      },
      {
        status: "payment_confirmed",
        label: "Payment Confirmed",
        description: "Your payment has been confirmed",
        icon: "credit-card",
        date: new Date(2025, 4, 16, 10, 20), // May 16, 2025, 10:20 AM
        isCompleted: true,
        isActive: false,
      },
      {
        status: "processing",
        label: "Processing",
        description: "Your order is being processed",
        icon: "package",
        date: new Date(2025, 4, 17, 11, 30), // May 17, 2025, 11:30 AM
        isCompleted: false,
        isActive: true,
      },
      {
        status: "shipped",
        label: "Shipped",
        description: "Your order has been shipped",
        icon: "truck",
        isCompleted: false,
        isActive: false,
      },
      {
        status: "out_for_delivery",
        label: "Out for Delivery",
        description: "Your order is out for delivery",
        icon: "map-pin",
        isCompleted: false,
        isActive: false,
      },
      {
        status: "delivered",
        label: "Delivered",
        description: "Your order has been delivered",
        icon: "check-circle",
        isCompleted: false,
        isActive: false,
      },
    ],
    items: [
      {
        id: 2,
        name: "Slim Fit Jeans",
        price: 59.99,
        quantity: 1,
        image: "/images/product-2.jpg",
        size: "32",
        color: "Blue",
      },
      {
        id: 5,
        name: "Canvas Sneakers",
        price: 39.99,
        quantity: 1,
        image: "/images/product-5.jpg",
        size: "9",
        color: "White",
      },
    ],
    shippingAddress: {
      line1: "456 Park Avenue",
      city: "Boston",
      state: "MA",
      postalCode: "02108",
      country: "United States",
    },
  },
  "ORD-54321": {
    orderId: "ORD-54321",
    customerName: "Robert Johnson",
    customerEmail: "robert.johnson@example.com",
    orderDate: new Date(2025, 4, 10, 9, 0), // May 10, 2025, 9:00 AM
    estimatedDelivery: new Date(2025, 4, 15), // May 15, 2025
    currentStatus: "delivered",
    statusHistory: [
      {
        status: "order_placed",
        label: "Order Placed",
        description: "Your order has been placed successfully",
        icon: "shopping-bag",
        date: new Date(2025, 4, 10, 9, 0), // May 10, 2025, 9:00 AM
        isCompleted: true,
        isActive: false,
      },
      {
        status: "payment_confirmed",
        label: "Payment Confirmed",
        description: "Your payment has been confirmed",
        icon: "credit-card",
        date: new Date(2025, 4, 10, 9, 5), // May 10, 2025, 9:05 AM
        isCompleted: true,
        isActive: false,
      },
      {
        status: "processing",
        label: "Processing",
        description: "Your order is being processed",
        icon: "package",
        date: new Date(2025, 4, 11, 10, 30), // May 11, 2025, 10:30 AM
        isCompleted: true,
        isActive: false,
      },
      {
        status: "shipped",
        label: "Shipped",
        description: "Your order has been shipped",
        icon: "truck",
        date: new Date(2025, 4, 12, 14, 0), // May 12, 2025, 2:00 PM
        isCompleted: true,
        isActive: false,
      },
      {
        status: "out_for_delivery",
        label: "Out for Delivery",
        description: "Your order is out for delivery",
        icon: "map-pin",
        date: new Date(2025, 4, 14, 9, 15), // May 14, 2025, 9:15 AM
        isCompleted: true,
        isActive: false,
      },
      {
        status: "delivered",
        label: "Delivered",
        description: "Your order has been delivered",
        icon: "check-circle",
        date: new Date(2025, 4, 14, 16, 45), // May 14, 2025, 4:45 PM
        isCompleted: true,
        isActive: true,
      },
    ],
    items: [
      {
        id: 4,
        name: "Leather Crossbody Bag",
        price: 79.99,
        quantity: 1,
        image: "/images/product-4.jpg",
        color: "Brown",
      },
    ],
    shippingAddress: {
      line1: "789 Oak Street",
      city: "Chicago",
      state: "IL",
      postalCode: "60601",
      country: "United States",
    },
    trackingNumber: "TRK-1234567890",
    carrier: "UPS",
  },
}

// Function to get order by ID
export function getOrderById(orderId: string): OrderTrackingDetail | null {
  return mockOrders[orderId] || null
}

// Function to get order by email and order ID
export function getOrderByEmailAndId(email: string, orderId: string): OrderTrackingDetail | null {
  const order = mockOrders[orderId]
  if (order && order.customerEmail.toLowerCase() === email.toLowerCase()) {
    return order
  }
  return null
}
