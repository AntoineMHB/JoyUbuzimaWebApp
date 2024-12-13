'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Search, Menu } from 'lucide-react'
import { useState } from 'react';
import cn from 'classnames';
import { Button } from "@/components/ui/button";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"

const slides = [
  { id: 1, image: '/images/carousel1.jpeg', alt: 'Slide 1' },
  { id: 2, image: '/images/carousel2.jpeg', alt: 'Slide 2' },
  { id: 3, image: '/images/carousel3.jpeg', alt: 'Slide 3' },
  { id: 4, image: '/images/carousel4.jpeg', alt: 'Slide 4' },
  { id: 5, image: '/images/carousel5.jpeg', alt: 'Slide 5' },
]

export default function Page() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % slides.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="bg-white text-black">
      <header className="bg-white text-black relative">
        <div className="max-w-full px-4 mx-auto">
          <NavigationMenu className="relative w-full z-50">
            <div className="flex items-center justify-between py-4">
              <Link href="/" className="flex items-center">
                <Image
                  src="/images/logoJoy.jpeg?height=40&width=120"
                  alt="Joy Ubuzima Logo"
                  width={120}
                  height={40}
                  className="mr-2"
                />
              </Link>
              <NavigationMenuList className="hidden lg:flex space-x-2">
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-black hover:text-[#F40009] px-3 py-2 text-sm">
                    Our Brands
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="w-screen max-w-screen-xl mx-auto bg-white">
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 p-4">
                        <div className="space-y-3">
                          <h3 className="font-bold text-lg">Joy Ubuzima</h3>
                          <p className="text-sm text-gray-500">Discover our iconic brand and its offerings</p>
                        </div>
                        <div>
                          <h4 className="font-semibold mb-2">Joy Ubuzima Natural Booster</h4>
                          <p className="text-sm text-gray-500">Description of Product 1</p>
                        </div>
                        <div>
                          <h4 className="font-semibold mb-2">Joy Ubuzima Aloe Refresh</h4>
                          <p className="text-sm text-gray-500">Description of Product 2</p>
                        </div>
                        <div>
                          <h4 className="font-semibold mb-2">Joy Ubuzima Guava Bliss</h4>
                          <p className="text-sm text-gray-500">Description of Product 3</p>
                        </div>
                      </div>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-black hover:text-[#F40009] px-3 py-2 text-sm">
                    Consumer Testimonials
                  </NavigationMenuTrigger>
                  <NavigationMenuContent >
                    <div className="w-screen max-w-screen-xl mx-auto bg-white">
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 p-4">
                        <div className="space-y-3">
                          <h3 className="font-bold text-lg">A GAME CHANGER</h3>
                          <p className="text-sm text-gray-500">
                            Joy Ubuzima has completely transformed my energy levels! I love that it is made from natural ingredients.
                          </p>
                        </div>
                        <div>
                          <h4 className="font-semibold mb-2">Eco-Conscious Consumer</h4>
                          <p className="text-sm text-gray-500">Description of testimonial</p>
                        </div>
                        <div>
                          <h4 className="font-semibold mb-2">Personal Trainer</h4>
                          <p className="text-sm text-gray-500">Description of testimonial</p>
                        </div>
                        <div>
                          <h4 className="font-semibold mb-2">Health-Conscious Consumer</h4>
                          <p className="text-sm text-gray-500">Description of testimonial</p>
                        </div>
                      </div>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-black hover:text-[#F40009] px-3 py-2 text-sm">
                    Offers
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="w-screen max-w-screen-xl mx-auto bg-white">
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 p-4">
                        <div className="space-y-3">
                          <h3 className="font-bold text-lg">Checkout what we offer</h3>
                          <p className="text-sm text-gray-500">Discover our offerings</p>
                        </div>
                        <div>
                          <h4 className="font-semibold mb-2">Welcome Discount</h4>
                          <p className="text-sm text-gray-500">GET 15% OFF YOUR FIRST ORDER!</p>
                        </div>
                        <div>
                          <h4 className="font-semibold mb-2">Loyalty Rewards Program</h4>
                          <p className="text-sm text-gray-500">EARN POINTS WITH EVERY PURCHASE!</p>
                        </div>
                        <div>
                          <h4 className="font-semibold mb-2">Free Shipping Offers</h4>
                          <p className="text-sm text-gray-500">ENJOY FREE SHIPPING on orders above 5,000 Rwf!</p>
                        </div>
                      </div>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-black hover:text-[#F40009] px-3 py-2 text-sm">
                    Social
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="w-screen max-w-screen-xl mx-auto bg-white">
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 p-4">
                        <div className="space-y-3">
                          <h3 className="font-bold text-lg">Follow Us</h3>
                          <p className="text-sm text-gray-500">
                            Stay connected with Joy Ubuzima on social media and keep up with our latest offers and updates.
                          </p>
                        </div>
                        <div>
                          <h4 className="font-semibold mb-2">Instagram</h4>
                          <p className="text-sm text-gray-500">Follow us on Instagram for the latest updates.</p>
                        </div>
                        <div>
                          <h4 className="font-semibold mb-2">Facebook</h4>
                          <p className="text-sm text-gray-500">Join our Facebook community.</p>
                        </div>
                        <div>
                          <h4 className="font-semibold mb-2">Twitter</h4>
                          <p className="text-sm text-gray-500">Stay updated with our latest tweets.</p>
                        </div>
                      </div>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>

              <div className="flex items-center space-x-4">
                <Button variant="ghost" size="icon" className="text-black hover:text-[#F40009]">
                  <Search className="h-5 w-5" />
                  <span className="sr-only">Search</span>
                </Button>
                <Button variant="ghost" size="icon" className="lg:hidden text-black hover:text-[#F40009]">
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Menu</span>
                </Button>
              </div>
            </div>
          </NavigationMenu>
        </div>
      </header>

      <main>
  {/* Carousel Section */}
  <div className="relative overflow-hidden">
    <div
      className="flex transition-transform duration-500 ease-in-out"
      style={{ transform: `translateX(-${currentIndex * 100}%)` }}
    >
      {slides.map((slide) => (
        <div key={slide.id} className="w-full flex-shrink-0">
          <Image
            src={slide.image}
            alt={slide.alt}
            width={1920}
            height={600}
            className="w-full object-cover"
          />
        </div>
      ))}
    </div>

    {/* Navigation */}
    <div className="absolute inset-0 flex justify-between items-center px-4">
      <Button
        variant="ghost"
        onClick={handlePrev}
        className="bg-white/50 text-black hover:bg-white/75 rounded-full p-2"
      >
        &lt;
      </Button>
      <Button
        variant="ghost"
        onClick={handleNext}
        className="bg-white/50 text-black hover:bg-white/75 rounded-full p-2"
      >
        &gt;
      </Button>
    </div>

    {/* Indicators */}
    <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2">
      {slides.map((_, index) => (
        <button
          key={index}
          className={cn(
            'w-3 h-3 rounded-full transition-colors',
            index === currentIndex ? 'bg-white' : 'bg-gray-500 hover:bg-gray-400'
          )}
          onClick={() => setCurrentIndex(index)}
        />
      ))}
    </div>
  </div>

  {/* Featured Products Section */}
  <section className="py-12 bg-gray-100">
    <div className="container mx-auto px-4">
      <h2 className="text-3xl font-bold text-center mb-8">Featured Products</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <Image src="/images/naturalBooster.jpeg?height=200&width=300" alt="Joy Ubuzima Natural Booster" width={300} height={200} className="w-full" />
          <div className="p-4">
            <h3 className="font-semibold text-lg mb-2">Joy Ubuzima Natural Booster</h3>
            <p className="text-gray-600">Enhance your energy naturally with our signature blend.</p>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <Image src="/images/joyAloe.jpeg?height=200&width=300" alt="Joy Ubuzima Aloe Refresh" width={300} height={200} className="w-full" />
          <div className="p-4">
            <h3 className="font-semibold text-lg mb-2">Joy Ubuzima Aloe Refresh</h3>
            <p className="text-gray-600">Revitalize your day with the soothing power of aloe.</p>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <Image src="/images/joyGuavaBliss.jpeg?height=200&width=300" alt="Joy Ubuzima Guava Bliss" width={300} height={200} className="w-full" />
          <div className="p-4">
            <h3 className="font-semibold text-lg mb-2">Joy Ubuzima Guava Bliss</h3>
            <p className="text-gray-600">Experience tropical delight with our guava-infused drink.</p>
          </div>
        </div>
      </div>
    </div>
  </section>

  {/* About Us Section */}
  <section className="py-12">
    <div className="container mx-auto px-4">
      <h2 className="text-3xl font-bold text-center mb-8">About Joy Ubuzima</h2>
      <div className="flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-6 md:mb-0">
          <Image src="/images/logoJoy.jpeg?height=400&width=600" alt="About Joy Ubuzima" width={600} height={400} className="rounded-lg shadow-md" />
        </div>
        <div className="md:w-1/2 md:pl-8">
          <p className="text-gray-600 mb-4">
            Joy Ubuzima is committed to providing high-quality health and wellness products made from natural ingredients. Our mission is to enhance the well-being of our customers through innovative and refreshing beverages.
          </p>
          <p className="text-gray-600 mb-4">
            Founded in Rwanda, we take pride in sourcing local ingredients and supporting our community while delivering exceptional products to our customers worldwide.
          </p>
          <Button className="bg-[#F40009] text-white hover:bg-[#D5001C]">Learn More</Button>
        </div>
      </div>
    </div>
  </section>
</main>

      <footer className="bg-[#F40009] text-white">
        <div className="max-w-full px-4 py-8 mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <h3 className="text-lg font-semibold">About Us</h3>
              <p className="text-sm">
                Joy Ubuzima is committed to providing high-quality health and wellness products made from natural ingredients.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/" className="text-sm hover:text-gray-300">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/" className="text-sm hover:text-gray-300">
                    Shop
                  </Link>
                </li>
                <li>
                  <Link href="/" className="text-sm hover:text-gray-300">
                    Contact
                  </Link>
                </li>
                <li>
                  <Link href="/" className="text-sm hover:text-gray-300">
                    FAQ
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold">Contact Us</h3>
              <p className="text-sm">
                123 Joy Ubuzima St., Kigali, Rwanda
              </p>
              <p className="text-sm">Email: support@joyubuzima.com</p>
              <p className="text-sm">Phone: +250 123 456 789</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

