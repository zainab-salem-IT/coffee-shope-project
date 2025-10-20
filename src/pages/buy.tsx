import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useBuy } from "@/context/buyContext";

const BuyPage = () => {
  const { buyList, removeFromBuy, increase, decrease } = useBuy();

  const total = buyList.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div>
      <h2>Your Orders</h2>
      {buyList.length === 0 ? (
        <p>No items yet.</p>
      ) : (
        buyList.map((item) => (
          <Card key={item.id} className="w-[280px] shadow-md rounded-2xl">
          <CardHeader>
            <img src={item.image} alt={item.name} className="rounded-xl h-40 w-full object-cover" />
            <CardTitle>{item.name}</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-lg font-semibold">${item.price}</p>
          </CardContent>
          <button onClick={() => removeFromBuy(Number(item.id))}>Remove</button>
          <button onClick={() => increase(Number(item.id))} >+</button>
          <span>{item.quantity}</span>
          <button onClick={()=> decrease(Number(item.id))} >-</button>

        </Card>
         
        ))
      )}
      <h3 className="mt-6 text-xl font-bold">
            Total: ${total.toFixed(2)}
          </h3>
    </div>
  );
};

export default BuyPage;
