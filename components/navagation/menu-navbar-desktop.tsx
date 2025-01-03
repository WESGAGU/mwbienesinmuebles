"use client";

import * as React from "react";
import Link from "next/link";

import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";


const MenuNavbarDesktop = () => {
  return (
    <div>
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <Link href="/" legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                Inicio
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>

          <NavigationMenuItem className="dark:text-">
            <NavigationMenuTrigger>Servicios</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                <ListItem 
                href="/pages/service-prestamos" 
                title="Prestamos"
                className="hover:bg-gray-400 hover:rounded-xl hover:bg-opacity-30 dark:hover:bg-gray-800 ">
                  Re-usable components built using Radix UI and Tailwind CSS.
                </ListItem>

                <ListItem
                  href="/pages/service-asesoramientos"
                  title="Asesoramientos"
                  className="hover:bg-gray-400 hover:rounded-xl hover:bg-opacity-30 dark:hover:bg-gray-800"
                > 
                  How to install dependencies and structure your app.
                </ListItem>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuTrigger>Propiedades</NavigationMenuTrigger>
            <NavigationMenuContent>
            <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                <ListItem 
                href="/categories/casas" 
                title="Casas"
                className="hover:bg-gray-400 hover:rounded-xl hover:bg-opacity-30 dark:hover:bg-gray-800 ">
                  Mira las casas que tenemos para ti.
                </ListItem>

                <ListItem
                  href="/categories/terrenos"
                  title="Terrenos"
                  className="hover:bg-gray-400 hover:rounded-xl hover:bg-opacity-30 dark:hover:bg-gray-800"
                > 
                 Para hacer cualquier contruccion que se te ocurra.
                </ListItem>

                <ListItem
                  href="/categories/fincas"
                  title="Fincas"
                  className="hover:bg-gray-400 hover:rounded-xl hover:bg-opacity-30 dark:hover:bg-gray-800"
                > 
                Mira las fabulosas fincas disponibles.
                </ListItem>
              </ul>

            </NavigationMenuContent>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <Link href="/pages/about" legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                Sobre Nosotros
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <Link href="/pages/contact" legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                Contacto
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
};

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
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";

export default MenuNavbarDesktop;
