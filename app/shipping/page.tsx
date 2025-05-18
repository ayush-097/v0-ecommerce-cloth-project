import Link from "next/link"
import { ChevronRight, Truck, RotateCcw, Clock, Globe, CreditCard, ShieldCheck } from "lucide-react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function ShippingReturnsPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        <div className="container mx-auto px-4 py-12">
          {/* Breadcrumbs */}
          <nav className="flex items-center text-sm mb-8">
            <Link href="/" className="text-muted-foreground hover:text-foreground">
              Home
            </Link>
            <ChevronRight className="h-4 w-4 mx-2 text-muted-foreground" />
            <span>Shipping & Returns</span>
          </nav>

          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl font-bold mb-8 text-center">Shipping & Returns</h1>

            <Tabs defaultValue="shipping">
              <TabsList className="w-full grid grid-cols-2 mb-8">
                <TabsTrigger value="shipping">Shipping Information</TabsTrigger>
                <TabsTrigger value="returns">Returns & Exchanges</TabsTrigger>
              </TabsList>

              <TabsContent value="shipping">
                <div className="space-y-8">
                  {/* Shipping Options */}
                  <section>
                    <h2 className="text-2xl font-semibold mb-4 flex items-center">
                      <Truck className="mr-2 h-6 w-6 text-primary" />
                      Shipping Options
                    </h2>
                    <p className="text-muted-foreground mb-6">
                      We offer several shipping options to meet your needs. All orders are processed within 1-2 business
                      days.
                    </p>

                    <div className="overflow-x-auto">
                      <Table>
                        <TableHeader>
                          <TableRow>
                            <TableHead>Shipping Method</TableHead>
                            <TableHead>Estimated Delivery</TableHead>
                            <TableHead>Cost</TableHead>
                          </TableRow>
                        </TableHeader>
                        <TableBody>
                          <TableRow>
                            <TableCell className="font-medium">Standard Shipping</TableCell>
                            <TableCell>3-5 business days</TableCell>
                            <TableCell>
                              <span className="font-medium">FREE</span> on orders over $50
                              <br />
                              $5.99 for orders under $50
                            </TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell className="font-medium">Express Shipping</TableCell>
                            <TableCell>2 business days</TableCell>
                            <TableCell>$12.99</TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell className="font-medium">Next Day Delivery</TableCell>
                            <TableCell>Next business day if ordered before 1 PM ET</TableCell>
                            <TableCell>$24.99</TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell className="font-medium">International Shipping</TableCell>
                            <TableCell>7-14 business days</TableCell>
                            <TableCell>Varies by destination</TableCell>
                          </TableRow>
                        </TableBody>
                      </Table>
                    </div>

                    <div className="mt-4 text-sm text-muted-foreground">
                      <p>* Business days are Monday through Friday, excluding holidays.</p>
                      <p>* Delivery times are estimates and not guaranteed.</p>
                    </div>
                  </section>

                  {/* Order Processing */}
                  <section>
                    <h2 className="text-2xl font-semibold mb-4 flex items-center">
                      <Clock className="mr-2 h-6 w-6 text-primary" />
                      Order Processing
                    </h2>
                    <p className="text-muted-foreground mb-4">
                      All orders are processed within 1-2 business days. Orders placed after 1 PM ET may not be
                      processed until the following business day.
                    </p>
                    <p className="text-muted-foreground mb-4">
                      Once your order has been processed, you will receive a shipping confirmation email with tracking
                      information. You can also track your order by visiting the "Track Order" page on our website.
                    </p>
                    <div className="flex justify-center mt-6">
                      <Button asChild>
                        <Link href="/track-order">Track Your Order</Link>
                      </Button>
                    </div>
                  </section>

                  {/* International Shipping */}
                  <section>
                    <h2 className="text-2xl font-semibold mb-4 flex items-center">
                      <Globe className="mr-2 h-6 w-6 text-primary" />
                      International Shipping
                    </h2>
                    <p className="text-muted-foreground mb-4">
                      We ship to most countries worldwide. International shipping rates vary by destination and are
                      calculated at checkout.
                    </p>
                    <p className="text-muted-foreground mb-4">
                      Please note that international customers may be responsible for import duties, taxes, and customs
                      clearance fees. These charges are not included in the purchase price and are the customer's
                      responsibility.
                    </p>
                    <p className="text-muted-foreground mb-4">
                      International orders typically take 7-14 business days to arrive, depending on the destination and
                      customs processing times.
                    </p>

                    <div className="bg-muted/30 p-4 rounded-lg">
                      <h3 className="font-medium mb-2">Countries We Ship To</h3>
                      <p className="text-muted-foreground mb-2">
                        We currently ship to over 100 countries, including but not limited to:
                      </p>
                      <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                        <div>Canada</div>
                        <div>United Kingdom</div>
                        <div>Australia</div>
                        <div>Germany</div>
                        <div>France</div>
                        <div>Japan</div>
                        <div>Singapore</div>
                        <div>South Korea</div>
                        <div>Mexico</div>
                      </div>
                    </div>
                  </section>

                  {/* Shipping Restrictions */}
                  <section>
                    <h2 className="text-2xl font-semibold mb-4 flex items-center">
                      <ShieldCheck className="mr-2 h-6 w-6 text-primary" />
                      Shipping Restrictions
                    </h2>
                    <p className="text-muted-foreground mb-4">
                      Some products may have shipping restrictions due to regulations or other limitations. These
                      restrictions will be noted on the product page.
                    </p>
                    <p className="text-muted-foreground mb-4">
                      We cannot ship to P.O. boxes for express or next-day deliveries. Standard shipping to P.O. boxes
                      is available for domestic orders only.
                    </p>
                  </section>

                  {/* Order Tracking */}
                  <section>
                    <h2 className="text-2xl font-semibold mb-4 flex items-center">
                      <Truck className="mr-2 h-6 w-6 text-primary" />
                      Order Tracking
                    </h2>
                    <p className="text-muted-foreground mb-4">
                      Once your order ships, you'll receive a confirmation email with tracking information. You can also
                      track your order by visiting our "Track Order" page and entering your order number and email
                      address.
                    </p>
                    <p className="text-muted-foreground mb-4">
                      If you have any questions about your shipment, please contact our customer service team.
                    </p>
                  </section>
                </div>
              </TabsContent>

              <TabsContent value="returns">
                <div className="space-y-8">
                  {/* Return Policy */}
                  <section>
                    <h2 className="text-2xl font-semibold mb-4 flex items-center">
                      <RotateCcw className="mr-2 h-6 w-6 text-primary" />
                      Return Policy
                    </h2>
                    <p className="text-muted-foreground mb-4">
                      We want you to be completely satisfied with your purchase. If you're not happy with your order for
                      any reason, you can return it within 30 days of delivery.
                    </p>

                    <div className="bg-muted/30 p-4 rounded-lg mb-6">
                      <h3 className="font-medium mb-2">Return Requirements</h3>
                      <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
                        <li>Items must be unworn, unwashed, and in original condition</li>
                        <li>Original tags must be attached</li>
                        <li>Items must be returned in original packaging, if possible</li>
                        <li>A completed return form must be included</li>
                      </ul>
                    </div>

                    <div className="bg-muted/30 p-4 rounded-lg">
                      <h3 className="font-medium mb-2">Non-Returnable Items</h3>
                      <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
                        <li>Intimates and swimwear (for hygiene reasons)</li>
                        <li>Personalized or customized items</li>
                        <li>Gift cards</li>
                        <li>Items marked as "Final Sale"</li>
                        <li>Items damaged due to customer misuse</li>
                      </ul>
                    </div>
                  </section>

                  {/* Return Process */}
                  <section>
                    <h2 className="text-2xl font-semibold mb-4 flex items-center">
                      <RotateCcw className="mr-2 h-6 w-6 text-primary" />
                      Return Process
                    </h2>
                    <ol className="space-y-4 mb-6">
                      <li className="flex gap-3">
                        <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-medium text-primary-foreground">
                          1
                        </div>
                        <div>
                          <h3 className="font-medium">Initiate Your Return</h3>
                          <p className="text-muted-foreground">
                            Log into your account, go to your order history, and select the items you wish to return. If
                            you checked out as a guest, use our{" "}
                            <Link href="/contact" className="text-primary hover:underline">
                              contact form
                            </Link>{" "}
                            to request a return.
                          </p>
                        </div>
                      </li>
                      <li className="flex gap-3">
                        <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-medium text-primary-foreground">
                          2
                        </div>
                        <div>
                          <h3 className="font-medium">Print Return Label</h3>
                          <p className="text-muted-foreground">
                            Print the prepaid return label provided in your return confirmation email. If you prefer to
                            use your own shipping method, you can do so at your own expense.
                          </p>
                        </div>
                      </li>
                      <li className="flex gap-3">
                        <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-medium text-primary-foreground">
                          3
                        </div>
                        <div>
                          <h3 className="font-medium">Package Your Return</h3>
                          <p className="text-muted-foreground">
                            Place the items in secure packaging along with the completed return form. Attach the return
                            label to the outside of the package.
                          </p>
                        </div>
                      </li>
                      <li className="flex gap-3">
                        <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-medium text-primary-foreground">
                          4
                        </div>
                        <div>
                          <h3 className="font-medium">Ship Your Return</h3>
                          <p className="text-muted-foreground">
                            Drop off your package at any authorized shipping location. We recommend keeping your receipt
                            until your return is processed.
                          </p>
                        </div>
                      </li>
                      <li className="flex gap-3">
                        <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-medium text-primary-foreground">
                          5
                        </div>
                        <div>
                          <h3 className="font-medium">Refund Processing</h3>
                          <p className="text-muted-foreground">
                            Once we receive and inspect your return, we'll process your refund. You'll receive an email
                            notification when your refund is issued.
                          </p>
                        </div>
                      </li>
                    </ol>

                    <div className="text-sm text-muted-foreground">
                      <p>
                        * Return shipping is free for exchanges. For regular returns, a $5.99 return shipping fee will
                        be deducted from your refund.
                      </p>
                      <p>
                        * International returns are the responsibility of the customer and are not eligible for free
                        return shipping.
                      </p>
                    </div>
                  </section>

                  {/* Refunds */}
                  <section>
                    <h2 className="text-2xl font-semibold mb-4 flex items-center">
                      <CreditCard className="mr-2 h-6 w-6 text-primary" />
                      Refunds
                    </h2>
                    <p className="text-muted-foreground mb-4">
                      After we receive and inspect your return, we'll process your refund. Refunds are issued to the
                      original payment method used for the purchase.
                    </p>

                    <div className="overflow-x-auto">
                      <Table>
                        <TableHeader>
                          <TableRow>
                            <TableHead>Payment Method</TableHead>
                            <TableHead>Refund Processing Time</TableHead>
                            <TableHead>Additional Information</TableHead>
                          </TableRow>
                        </TableHeader>
                        <TableBody>
                          <TableRow>
                            <TableCell className="font-medium">Credit/Debit Card</TableCell>
                            <TableCell>3-5 business days</TableCell>
                            <TableCell>
                              May take an additional 2-10 business days to appear on your statement, depending on your
                              bank
                            </TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell className="font-medium">PayPal</TableCell>
                            <TableCell>1-2 business days</TableCell>
                            <TableCell>Refunded directly to your PayPal account</TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell className="font-medium">Store Credit</TableCell>
                            <TableCell>1 business day</TableCell>
                            <TableCell>Issued as a digital gift card sent to your email</TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell className="font-medium">Gift Card</TableCell>
                            <TableCell>1-2 business days</TableCell>
                            <TableCell>Refunded to the original gift card or as store credit</TableCell>
                          </TableRow>
                        </TableBody>
                      </Table>
                    </div>
                  </section>

                  {/* Exchanges */}
                  <section>
                    <h2 className="text-2xl font-semibold mb-4 flex items-center">
                      <RotateCcw className="mr-2 h-6 w-6 text-primary" />
                      Exchanges
                    </h2>
                    <p className="text-muted-foreground mb-4">
                      We process exchanges as a return and a new purchase. This allows us to ensure you get exactly what
                      you want without delays.
                    </p>
                    <p className="text-muted-foreground mb-4">To exchange an item:</p>
                    <ol className="list-decimal pl-5 space-y-2 text-muted-foreground mb-4">
                      <li>Return your original item following our return process</li>
                      <li>Place a new order for the item you want</li>
                      <li>
                        Contact our customer service team with both order numbers, and we'll expedite your exchange
                      </li>
                    </ol>
                    <p className="text-muted-foreground">
                      For size exchanges, we offer free return shipping. Contact our customer service team for
                      assistance.
                    </p>
                  </section>

                  {/* Damaged or Defective Items */}
                  <section>
                    <h2 className="text-2xl font-semibold mb-4 flex items-center">
                      <ShieldCheck className="mr-2 h-6 w-6 text-primary" />
                      Damaged or Defective Items
                    </h2>
                    <p className="text-muted-foreground mb-4">
                      If you receive a damaged or defective item, please contact our customer service team within 48
                      hours of delivery. We'll arrange for a return and replacement at no additional cost to you.
                    </p>
                    <p className="text-muted-foreground mb-4">
                      Please provide photos of the damaged or defective item to help us improve our quality control
                      process.
                    </p>
                    <div className="flex justify-center mt-6">
                      <Button asChild>
                        <Link href="/contact">Contact Customer Service</Link>
                      </Button>
                    </div>
                  </section>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
