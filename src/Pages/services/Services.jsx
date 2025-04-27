import { ArrowRight, Clock, Package, Shield, Truck } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Link } from "react-router-dom"

export default function Services() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-amber-50 py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">Our Services</h1>
          <p className="text-gray-700 max-w-3xl mx-auto text-lg">
            Discover our range of reliable delivery services designed to meet all your parcel delivery needs.
          </p>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-16">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">Our Reliable Delivery Services</h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="h-48 relative bg-[#FFF5F2]">
                <img
                  src="https://i.ibb.co.com/jkK26kyf/Chat-GPT-Image-Apr-27-2025-10-23-38-PM.png"
                  alt="On Demand Delivery"
                  
                  className="object-contain h-full w-full"
                />
              </div>
              <div className="p-6">
                <h3 className="font-bold text-xl mb-3">On Demand Delivery</h3>
                <p className="text-gray-600 mb-4">
                  Let your customers choose their desired delivery time! Have it delivered to you on Parcel - Fast,
                  without any hassle.
                </p>
                <ul className="space-y-2 mb-4">
                  <li className="flex items-center">
                    <ArrowRight className="h-4 w-4 text-amber-500 mr-2" />
                    <span>Flexible scheduling</span>
                  </li>
                  <li className="flex items-center">
                    <ArrowRight className="h-4 w-4 text-amber-500 mr-2" />
                    <span>Same-day options available</span>
                  </li>
                  <li className="flex items-center">
                    <ArrowRight className="h-4 w-4 text-amber-500 mr-2" />
                    <span>Real-time tracking</span>
                  </li>
                </ul>
                <Button className="w-full bg-amber-500 hover:bg-amber-600">Book Now</Button>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="h-48 bg-[#FFF5F2]">
                <img
                  src="https://i.ibb.co.com/S73xZrG0/Chat-GPT-Image-Apr-27-2025-10-20-04-PM.png"
                  alt="Secure Document Delivery"
                  className="object-contain h-full w-full"    
                  
                />
              </div>
              <div className="p-6">
                <h3 className="font-bold text-xl mb-3">Secure Document Delivery</h3>
                <p className="text-gray-600 mb-4">
                  You can trust us to deliver your most confidential documents to the desired place absolutely intact
                  right on time.
                </p>
                <ul className="space-y-2 mb-4">
                  <li className="flex items-center">
                    <ArrowRight className="h-4 w-4 text-amber-500 mr-2" />
                    <span>Tamper-proof packaging</span>
                  </li>
                  <li className="flex items-center">
                    <ArrowRight className="h-4 w-4 text-amber-500 mr-2" />
                    <span>Signature confirmation</span>
                  </li>
                  <li className="flex items-center">
                    <ArrowRight className="h-4 w-4 text-amber-500 mr-2" />
                    <span>Confidentiality guaranteed</span>
                  </li>
                </ul>
                <Button className="w-full bg-amber-500 hover:bg-amber-600">Book Now</Button>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="h-48 relative bg-[#FFF5F2]">
                <img
                  src="https://i.ibb.co.com/xtkBcpby/Chat-GPT-Image-Apr-27-2025-10-26-15-PM.png"
                  alt="Emergency Delivery"
                  
                  className="object-contain h-full w-full"
                />
              </div>
              <div className="p-6">
                <h3 className="font-bold text-xl mb-3">Emergency Delivery</h3>
                <p className="text-gray-600 mb-4">
                  Need to send something right now to the quickest time, because your emergency wont wait? It is urgent!
                </p>
                <ul className="space-y-2 mb-4">
                  <li className="flex items-center">
                    <ArrowRight className="h-4 w-4 text-amber-500 mr-2" />
                    <span>Priority handling</span>
                  </li>
                  <li className="flex items-center">
                    <ArrowRight className="h-4 w-4 text-amber-500 mr-2" />
                    <span>Fastest routes guaranteed</span>
                  </li>
                  <li className="flex items-center">
                    <ArrowRight className="h-4 w-4 text-amber-500 mr-2" />
                    <span>24/7 availability</span>
                  </li>
                </ul>
                <Button className="w-full bg-amber-500 hover:bg-amber-600">Book Now</Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">Specialized Services</h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg shadow-md p-6 flex">
              <div className="mr-4">
                <div className="bg-amber-100 p-3 rounded-full w-12 h-12 flex items-center justify-center">
                  <Package className="text-amber-600" />
                </div>
              </div>
              <div>
                <h3 className="font-bold text-lg mb-2">E-commerce Delivery</h3>
                <p className="text-gray-600 mb-3">
                  Specialized delivery service for online businesses with order tracking, cash on delivery options, and
                  return management.
                </p>
                <Link to={'#'} className="text-amber-600 font-medium flex items-center">
                  Learn more <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 flex">
              <div className="mr-4">
                <div className="bg-amber-100 p-3 rounded-full w-12 h-12 flex items-center justify-center">
                  <Clock className="text-amber-600" />
                </div>
              </div>
              <div>
                <h3 className="font-bold text-lg mb-2">Scheduled Deliveries</h3>
                <p className="text-gray-600 mb-3">
                  Plan your deliveries in advance with our scheduled service, perfect for regular shipments and business
                  operations.
                </p>
                <Link to={'#'} className="text-amber-600 font-medium flex items-center">
                  Learn more <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 flex">
              <div className="mr-4">
                <div className="bg-amber-100 p-3 rounded-full w-12 h-12 flex items-center justify-center">
                  <Truck className="text-amber-600" />
                </div>
              </div>
              <div>
                <h3 className="font-bold text-lg mb-2">Bulk Shipping</h3>
                <p className="text-gray-600 mb-3">
                  Cost-effective solutions for businesses needing to ship multiple packages with volume discounts and
                  dedicated support.
                </p>
                <Link to="#" className="text-amber-600 font-medium flex items-center">
                  Learn more <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 flex">
              <div className="mr-4">
                <div className="bg-amber-100 p-3 rounded-full w-12 h-12 flex items-center justify-center">
                  <Shield className="text-amber-600" />
                </div>
              </div>
              <div>
                <h3 className="font-bold text-lg mb-2">Insured Delivery</h3>
                <p className="text-gray-600 mb-3">
                  Extra protection for valuable items with insurance coverage and special handling procedures for peace
                  of mind.
                </p>
                <Link to="#" className="text-amber-600 font-medium flex items-center">
                  Learn more <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Comparison */}
      <section className="py-16">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">Service Comparison</h2>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-amber-50">
                  <th className="border p-3 text-left">Service Type</th>
                  <th className="border p-3 text-center">Delivery Time</th>
                  <th className="border p-3 text-center">Tracking</th>
                  <th className="border p-3 text-center">Insurance</th>
                  <th className="border p-3 text-center">Price Range</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border p-3 font-medium">Standard Delivery</td>
                  <td className="border p-3 text-center">24-48 hours</td>
                  <td className="border p-3 text-center">Yes</td>
                  <td className="border p-3 text-center">Optional</td>
                  <td className="border p-3 text-center">৳60-120</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border p-3 font-medium">Express Delivery</td>
                  <td className="border p-3 text-center">Same day</td>
                  <td className="border p-3 text-center">Yes</td>
                  <td className="border p-3 text-center">Optional</td>
                  <td className="border p-3 text-center">৳100-200</td>
                </tr>
                <tr>
                  <td className="border p-3 font-medium">Emergency Delivery</td>
                  <td className="border p-3 text-center">2-4 hours</td>
                  <td className="border p-3 text-center">Yes</td>
                  <td className="border p-3 text-center">Included</td>
                  <td className="border p-3 text-center">৳150-300</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border p-3 font-medium">Secure Document</td>
                  <td className="border p-3 text-center">12-24 hours</td>
                  <td className="border p-3 text-center">Yes</td>
                  <td className="border p-3 text-center">Included</td>
                  <td className="border p-3 text-center">৳120-250</td>
                </tr>
                <tr>
                  <td className="border p-3 font-medium">Bulk Shipping</td>
                  <td className="border p-3 text-center">24-72 hours</td>
                  <td className="border p-3 text-center">Yes</td>
                  <td className="border p-3 text-center">Optional</td>
                  <td className="border p-3 text-center">Custom</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-amber-50">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">Ready to Ship with ParcelPioneer?</h2>
          <p className="text-gray-700 max-w-2xl mx-auto mb-8">
            Experience the fastest, most reliable delivery service in Dhaka and Chattogram. Book your first delivery
            today!
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button size="lg" className="bg-amber-500 hover:bg-amber-600">
              Book a Delivery
            </Button>
            <Button size="lg" variant="outline">
              Contact Sales
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}
