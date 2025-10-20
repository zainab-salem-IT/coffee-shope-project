import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useLocation } from "react-router-dom";

function ItemDetails() {
  const location = useLocation();
  const item = location.state?.item;

  if (!item) {
    return <p>Item not found</p>;
  }

  return (
    <Card className="p-6 flex flex-col items-center">
      <CardHeader>
      <img src={item.image} alt={item.name} className="w-64 h-64 rounded-xl" />
      <CardTitle className="text-2xl font-bold mt-2">{item.name}</CardTitle>
      <CardDescription className="mt-2">{item.description}</CardDescription>
      <CardContent>
      <p className="mt-2 text-lg font-semibold">${item.price}</p>
      </CardContent>
      </CardHeader>
    </Card>
  );
}

export default ItemDetails;
