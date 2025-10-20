import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="w-full bg-white py-3">
      <NavigationMenu className="mx-auto flex justify-center">
       
       

        <NavigationMenuList>
        <NavigationMenuItem>
            <NavigationMenuLink asChild>
              <Link
                to="/menu"
                className="px-4 py-2 text-sm font-medium hover:text-brown-600"
              >
                All
              </Link>
            </NavigationMenuLink>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuLink asChild>
              <Link
                to="/menu/coffee"
                className="px-4 py-2 text-sm font-medium hover:text-brown-600"
              >
                Coffee
              </Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink asChild>
              <Link
                to="/menu/cake"
                className="px-4 py-2 text-sm font-medium hover:text-brown-600"
              >
                Cake
              </Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink asChild>
              <Link
                to="/menu/juice"
                className="px-4 py-2 text-sm font-medium hover:text-brown-600"
              >
                Juice
              </Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink asChild>
              <Link
                to="/menu/pastry"
                className="px-4 py-2 text-sm font-medium hover:text-brown-600"
              >
                Pastry
              </Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </nav>
  );
}
