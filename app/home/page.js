'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Search, Menu } from 'lucide-react'
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import { Button } from "@/components/ui/button"

export default function Page() {
  return (
    <header className="bg-[#F40009] text-white">
      <div className="container mx-auto px-4">
        <NavigationMenu className="relative">
          <div className="flex items-center justify-between py-4">
            <Link href="/" className="flex items-center">
              <Image
                src="/placeholder.svg?height=40&width=120"
                alt="Coca-Cola Logo"
                width={120}
                height={40}
                className="mr-2"
              />
            </Link>
            <NavigationMenuList className="hidden md:flex space-x-4">
              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-white hover:text-gray-200">Our Brands</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px]">
                    <li className="row-span-3">
                      <NavigationMenuLink asChild>
                        <Link
                          className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-red-500 to-red-700 p-6 no-underline outline-none focus:shadow-md"
                          href="/"
                        >
                          <div className="mt-4 text-lg font-medium text-white">Coca-Cola</div>
                          <p className="text-sm leading-tight text-white/90">
                            Discover our iconic brand and its variants
                          </p>
                        </Link>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink asChild>
                        <Link
                          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-red-100 hover:text-red-900 focus:bg-red-100 focus:text-red-900"
                          href="/"
                        >
                          <div className="text-sm font-medium leading-none">Sprite</div>
                          <p className="line-clamp-2 text-sm leading-snug text-white/70">
                            Crisp, refreshing lemon-lime flavor
                          </p>
                        </Link>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink asChild>
                        <Link
                          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-red-100 hover:text-red-900 focus:bg-red-100 focus:text-red-900"
                          href="/"
                        >
                          <div className="text-sm font-medium leading-none">Fanta</div>
                          <p className="line-clamp-2 text-sm leading-snug text-white/70">
                            Colorful fruit-flavored sodas
                          </p>
                        </Link>
                      </NavigationMenuLink>
                    </li>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink className="text-white hover:text-gray-200" href="/">
                  Sustainability
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink className="text-white hover:text-gray-200" href="/">
                  Social Impact
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink className="text-white hover:text-gray-200" href="/">
                  Careers
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="icon" className="text-white hover:text-gray-200">
                <Search className="h-5 w-5" />
                <span className="sr-only">Search</span>
              </Button>
              <Button variant="ghost" size="icon" className="md:hidden text-white hover:text-gray-200">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Menu</span>
              </Button>
            </div>
          </div>
        </NavigationMenu>
      </div>
    </header>
  )
}

