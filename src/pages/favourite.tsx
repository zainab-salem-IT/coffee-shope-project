import { useFavorites } from "@/context/favouratie";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

export default function Favourite() {
  const { favorites } = useFavorites();

  if (favorites.length === 0) {
    return <h2 className="text-center mt-10 text-gray-500">No favorites yet 💔</h2>;
  }

  return (
    <div>
      <h1 className="text-center text-2xl font-bold mb-8">My Favorites</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4">
        {favorites.map((item) => (
          <Card key={item.id} className="w-[280px] shadow-md rounded-2xl">
            <CardHeader>
              <img src={item.image} alt={item.name} className="rounded-xl h-40 w-full object-cover" />
              <CardTitle>{item.name}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-lg font-semibold">${item.price}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
