


import { useState } from "react"
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"

export default function Contact() {
  const [formSubmitted, setFormSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission logic here
    setFormSubmitted(true)
    setTimeout(() => setFormSubmitted(false), 3000)
    e.target.reset() // Reset the form fields after submission
  }

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-[#EEDDD5] py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">Contact Us</h1>
          <p className="text-gray-700 max-w-3xl mx-auto text-lg">
            Have questions or need assistance? We are here to help! Reach out to our team using any of the methods below.
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-8">Get in Touch</h2>

              <div className="grid gap-6">
                <div className="flex items-start">
                  <div className="bg-amber-100 p-3 rounded-full mr-4">
                    <MapPin className="text-amber-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Our Location</h3>
                    <p className="text-gray-600">123 Delivery Street, Gulshan, Dhaka, Bangladesh</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-amber-100 p-3 rounded-full mr-4">
                    <Phone className="text-amber-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Phone Number</h3>
                    {/* <p className="text-gray-600">+880 1877127477</p> */}
                    <a href="tel:+01877127477">+880 1877127477</a>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-amber-100 p-3 rounded-full mr-4">
                    <Mail className="text-amber-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Email Address</h3>
                    <a href="mailto:help@parcelpioneer.com">help@parcelpioneer.com</a>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-amber-100 p-3 rounded-full mr-4">
                    <Clock className="text-amber-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Business Hours</h3>
                    <p className="text-gray-600">Monday - Friday: 9:00 AM - 8:00 PM</p>
                    <p className="text-gray-600">Saturday - Sunday: 10:00 AM - 6:00 PM</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div className="bg-white rounded-lg shadow-lg p-6 md:p-8">
                <h2 className="text-xl font-bold mb-6">Send Us a Message</h2>

                {formSubmitted ? (
                  <div className="bg-green-50 border border-green-200 text-green-700 p-4 rounded-md mb-6">
                    Thank you for your message! We will get back to you shortly.
                  </div>
                ) : null}

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="name">Your Name</Label>
                      <Input id="name" placeholder="John Doe" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address</Label>
                      <Input id="email" type="email" placeholder="john@example.com" required />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input id="phone" placeholder="+880 1XXXXXXXXX" />
                  </div>

                  <div className="space-y-2">
                    <Label>Inquiry Type</Label>
                    <RadioGroup defaultValue="general" className="flex flex-col space-y-1">
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="general" id="general" />
                        <Label htmlFor="general">General Inquiry</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="support" id="support" />
                        <Label htmlFor="support">Customer Support</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="business" id="business" />
                        <Label htmlFor="business">Business Partnership</Label>
                      </div>
                    </RadioGroup>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Your Message</Label>
                    <Textarea id="message" placeholder="How can we help you?" rows={5} required />
                  </div>

                  <Button type="submit" className="w-full bg-amber-500 hover:bg-amber-600">
                    <Send className="mr-2 h-4 w-4" /> Send Message
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">Find Us</h2>
          <div className="bg-white rounded-lg shadow-md p-2 max-w-5xl mx-auto">
            <div className="aspect-video relative">
              <img
                src="/placeholder.svg?height=400&width=800"
                alt="Map Location"
                
                className="rounded-md object-cover"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-white p-3 rounded-lg shadow-lg">
                  <MapPin className="text-amber-500 h-8 w-8" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
          <div className="max-w-3xl mx-auto">
            {[
              {
                question: "How do I track my delivery?",
                answer:
                  "You can track your delivery by entering your tracking number on our website or mobile app. You'll receive real-time updates on your parcel's location and estimated delivery time.",
              },
              {
                question: "What areas do you currently serve?",
                answer:
                  "We currently provide delivery services in Dhaka and Chattogram. We're constantly expanding our coverage area to serve more locations across Bangladesh.",
              },
              {
                question: "How do I schedule a pickup?",
                answer:
                  "You can schedule a pickup through our website, mobile app, or by calling our customer service. Simply provide the pickup details, and our courier will arrive at the specified time.",
              },
              {
                question: "What payment methods do you accept?",
                answer:
                  "We accept various payment methods including cash, credit/debit cards, mobile banking (bKash, Nagad), and online banking transfers.",
              },
            ].map((faq, index) => (
              <div key={index} className="border-b py-4">
                <h3 className="font-medium mb-2">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
