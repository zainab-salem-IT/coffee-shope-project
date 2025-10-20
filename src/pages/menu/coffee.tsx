import { useEffect, useState } from "react";
import { Category, type Item } from "@/types/items";
import { getItems } from "@/services/itemsService";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import MenuCategory from "@/components/ui/menuCategory";
import { useFavorites } from "@/context/favouratie";
import { Heart } from "lucide-react";
export default function Coffee() {
  const [coffee, setCoffee] = useState<Item[]>([]);
  const { toggleFavorite, isFavorite } = useFavorites();

  useEffect(() => {
    getItems()
      .then((data) => {
        const coffeeItem = data.filter(
          (item) => item.category === Category.Coffee
        );
        setCoffee(coffeeItem);
        console.log("iam coffee", setCoffee);
      })
      .catch((err) => console.error("Fetch error:", err));
  }, []);

  return (
    <div>
      <h1 className="text-center text-2xl font-bold">Coffee</h1>
      <MenuCategory />
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 place-items-center gap-4 mt-12">
        {coffee.map((item) => (
          <Card key={item.id} className="w-[280px] shadow-md rounded-2xl">
            <CardHeader>
              <button className="" onClick={() => toggleFavorite(item)}>
                <Heart
                  className={`w-6 h-6 ${
                    isFavorite(item.id)
                      ? "fill-red-500 text-red-500"
                      : "text-gray-400 "
                  }`}
                />
              </button>
              <img
                src={item.image}
                alt={item.name}
                className="rounded-xl mb-2 h-40 w-full object-cover"
              />
              <CardTitle>{item.name}</CardTitle>
              <CardTitle>{item.category}</CardTitle>

              <CardDescription>{item.description}</CardDescription>
            </CardHeader>

            <CardContent>
              <p className="text-lg font-semibold">${item.price}</p>
            </CardContent>

            <CardFooter>
              <Button className="w-full">Order Now</Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
