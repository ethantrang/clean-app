import Image from "next/image"
import Link from "next/link"
import { MapPin, Phone, Mail, Facebook, Twitter, Instagram } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-white text-[#333333]">
      {/* Sticky Header */}
      <header className="sticky top-0 z-50 bg-white shadow-md">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold text-[#4DAEA1]">
            Clean
          </Link>
          <nav className="hidden md:flex space-x-4">
            <Link href="#features" className="hover:text-[#4DAEA1]">Features</Link>
            <Link href="#testimonials" className="hover:text-[#4DAEA1]">Testimonials</Link>
            <Link href="#contact" className="hover:text-[#4DAEA1]">Contact</Link>
          </nav>
          <Button className="bg-[#4DAEA1] hover:bg-[#3D8D82]">
            Contact Us
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 bg-[#F5F5F5]">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">Fresh Start, Every Time</h1>
            <p className="text-xl mb-6">Experience the cleanest laundry service in town.</p>
            <Button className="bg-[#4DAEA1] hover:bg-[#3D8D82] text-white">
              Book Now
            </Button>
          </div>
          <div className="md:w-1/2">
            <Image
              src="/placeholder.svg?height=400&width=600"
              alt="Clean Laundromat"
              width={600}
              height={400}
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose Clean?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "Low Cost", description: "Affordable prices for all your laundry needs" },
              { title: "Convenient Location", description: "Easy to access, right in your neighborhood" },
              { title: "Excellent Service", description: "Friendly staff ready to assist you" },
            ].map((feature, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p>{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Proof Section */}
      <section id="testimonials" className="py-20 bg-[#F5F5F5]">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">What Our Customers Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {[
              { name: "John D.", text: "Clean has revolutionized my laundry routine. Fast, efficient, and always spotless!" },
              { name: "Sarah M.", text: "I love the convenient location and friendly staff. Clean is my go-to laundromat." },
            ].map((testimonial, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <p className="mb-4">"{testimonial.text}"</p>
                <p className="font-semibold">- {testimonial.name}</p>
              </div>
            ))}
          </div>
          <div className="aspect-w-16 aspect-h-9">
            <Image
              src="/placeholder.svg?height=400&width=600"
              alt="Customer Testimonial Video"
              width={600}
              height={400}
              className="rounded-lg shadow-lg mx-auto"
            />
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section id="contact" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Get in Touch</h2>
          <form className="max-w-md mx-auto">
            <div className="mb-4">
              <Input type="text" placeholder="Your Name" />
            </div>
            <div className="mb-4">
              <Input type="email" placeholder="Your Email" />
            </div>
            <div className="mb-4">
              <Textarea placeholder="Your Message" />
            </div>
            <Button type="submit" className="w-full bg-[#4DAEA1] hover:bg-[#3D8D82] text-white">
              Send Message
            </Button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#333333] text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Map */}
            <div className="aspect-w-16 aspect-h-9">
              <Image
                src="/placeholder.svg?height=200&width=300"
                alt="Location Map"
                width={300}
                height={200}
                className="rounded-lg"
              />
            </div>
            {/* Contact and Socials */}
            <div>
              <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
              <div className="space-y-2">
                <p className="flex items-center"><MapPin className="mr-2" size={18} /> 123 Laundry St, Clean City</p>
                <p className="flex items-center"><Phone className="mr-2" size={18} /> (555) 123-4567</p>
                <p className="flex items-center"><Mail className="mr-2" size={18} /> info@cleanlaundromat.com</p>
              </div>
              <div className="flex space-x-4 mt-4">
                <Link href="#" className="hover:text-[#4DAEA1]"><Facebook size={24} /></Link>
                <Link href="#" className="hover:text-[#4DAEA1]"><Twitter size={24} /></Link>
                <Link href="#" className="hover:text-[#4DAEA1]"><Instagram size={24} /></Link>
              </div>
            </div>
            {/* Company Information */}
            <div>
              <h3 className="text-xl font-semibold mb-4">About Clean</h3>
              <p>Clean is your trusted local laundromat, providing top-notch laundry services since 2010. We're committed to making your laundry experience as smooth and efficient as possible.</p>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-700 text-center">
            <p>&copy; {new Date().getFullYear()} Clean Laundromat. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}