import { Button } from "@/components/ui/button"
import {
  Card,
  
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"


const items = Array(9).fill({
  name: "Caramel Latte",
  description: "Rich espresso with caramel flavor",
  price: "$4.50",
  image: "./src/images/Rectangle 40.png",
})
export default function Menu() {
  return <div className="grid grid-cols-4 place-items-center gap-4"> 
  
  {items.map((item, index) => (

<Card key={index} className="w-[280px] shadow-md rounded-2xl">
      <CardHeader>
        <img 
          src={item.image} 
          alt="Coffee" 
          className="rounded-xl mb-2"
        />
        <CardTitle>{item.name}</CardTitle>
        <CardDescription>{item.description}</CardDescription>
      </CardHeader>

      <CardContent>
        <p className="text-lg font-semibold">{item.price}</p>
      </CardContent>

      <CardFooter>
        <Button className="w-full">Order Now</Button>
      </CardFooter>
    </Card>
  
  ))};

  
  
  </div>
}
