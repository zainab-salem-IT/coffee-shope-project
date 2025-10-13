import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu"
import { Link } from "react-router-dom";


      




export default function Navbar() {
  return (
    <nav className="w-full bg-white shadow-md py-3">
      <NavigationMenu className="mx-auto flex justify-center">

      <Link to="/home" className="flex items-center gap-2">
        <img
          src="/src/images/logo.png"
          alt="Logo"
          className="w-10 h-10 rounded-full object-cover"
        />
      
      </Link>

        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuLink asChild>
            <Link
              to="/home"
              className="px-4 py-2 text-sm font-medium hover:text-brown-600"
            >
              Home
            </Link>
          </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink asChild>
             <Link
             to="/favourite"
             className="px-4 py-2 text-sm font-medium hover:text-brown-600"
           >
             Favourite
           </Link>
             
            
             
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink asChild>
             <Link
             to="/menu"
              className="px-4 py-2 text-sm font-medium hover:text-brown-600"
            >
             Menu
             </Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink asChild >
              <Link
              to="/about"
              className="px-4 py-2 text-sm font-medium hover:text-brown-600"
            >
              About us
            </Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
       
          <NavigationMenuItem>
            <NavigationMenuLink asChild>
              <Link
              to="/contact"
              className="px-4 py-2 text-sm font-medium hover:text-brown-600"
            >
              contact us
              </Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink
              href="/"
              className="px-4 py-2 text-sm font-medium hover:text-brown-600"
            >
              search
            </NavigationMenuLink>
          </NavigationMenuItem><NavigationMenuItem>
            <NavigationMenuLink asChild>
              <Link
              to="/buy"
              className="px-4 py-2 text-sm font-medium hover:text-brown-600"
            >
              buy
              </Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </nav>
  )
}
