"use client"
import * as React from "react"
import Link from "next/link"
import { cn } from "@/lib/utils"

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from '../components/ui/navigation-menu'

const components: { title: string; href: string; description: string }[] = [
  {
    title: "Eye Shade",
    href: "/Eye Shade",
    description: "Explore vibrant eye shadows, liners, and mascaras for bold looks.",
  },
  {
    title: "Nail Polish",
    href: "/Nail Polish",
    description: "Add color to your nails with our stunning nail polishes.",
  },
  {
    title: "Lipstick",
    href: "/Lipstick",
    description: "Find the perfect lipstick shade for every occasion.",
  },
  {
    title: "Face Makeup",
    href: "/Face Makeup",
    description: "Achieve flawless coverage with our face makeup products.",
  },
  {
    title: "Watch",
    href: "/Watch",
    description: "Add sophistication to your wrist with our stylish watches.",
  },
  {
    title: "Perfume",
    href: "/Perfume",
    description: "Indulge in our signature fragrance, designed to suit every moment",
  },
  {
    title: "Jewelry",
    href: "/Jewelry",
    description: "Elevate your style with our stunning jewellery",
  },
  {
    title: "Accessories",
    href: "/Accessories",
    description: "Complete your outfit with stylish accessories like box and bags.",
  }
]

export function NavigationMenuDemo() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
      <NavigationMenuItem>
          <Link href="/hero" legacyBehavior passHref>
            <NavigationMenuLink>
              Home
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>ShopHub</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] bg-white-900">
              {components.map((component) => (
                <ListItem
                  key={component.title}
                  title={component.title}
                  href={component.href}
                >
                  {component.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/about" legacyBehavior passHref>
            <NavigationMenuLink>
              About
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/contact" legacyBehavior passHref>
            <NavigationMenuLink>
              Contact
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block  select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground group",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none group-hover:text-pink-500">{title}</div>
          <p className="text-sm leading-snug text-muted-foreground group-hover:text-gray-700">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"
export default NavigationMenuDemo




