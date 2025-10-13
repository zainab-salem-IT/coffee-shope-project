import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export default function home() {
  return (
    <div className="">
      <section className=" flex justify-between">
        <div className="max-w-1/2">
          <h1 className=""> Golden Treats</h1>
          <p>
            Welcome to coffee store where every sip and bite is crafted with
            care. We offer a delightful selection of coffee, cakes, fresh
            juices, and pastries, catering to all tastes. Whether you prefer
            classic flavrs or need gluten-free , lactose-free and classic
            options, we ensure a delicious experience for everyone. Step in and
            enjoy a cozy atmosphere.
          </p>

          <Link to="/menu">
      <Button>Order Now</Button>
    </Link>
        </div>
        <div className="max-w-1/2">
          <div className="flex flex-col items-center">
            <div className="flex items-start">
              <div className="flex flex-col">
                <img
                  src="./src/images/Rectangle 40.png"
                  alt="x1"
                  className="w-40 h-40 object-cover"
                />
                <img
                  src="./src/images/Rectangle 40.png"
                  alt="x2"
                  className="w-40 h-40 object-cover mt-2"
                />
              </div>

              <img
                src="./src/images/picture-1.png"
                alt="y"
                className="w-64 h-82 object-cover ml-4"
              />
            </div>

            <img
              src="./src/images/picture-1.png"
              alt="yyyy"
              className="w-full h-40 object-cover mt-4"
            />
          </div>
        </div>
      </section>

      <section className="space-section">
        <h1 className="text-center mb-8 title-page">menu</h1>

        <div className="flex justify-between">
          <img
            src="./src/images/Rectangle 40.png"
            alt="x1"
            className="w-40 h-40 object-cover"
          />{" "}
          <img
            src="./src/images/Rectangle 40.png"
            alt="x1"
            className="w-40 h-40 object-cover"
          />{" "}
          <img
            src="./src/images/Rectangle 40.png"
            alt="x1"
            className="w-40 h-40 object-cover"
          />{" "}
          <img
            src="./src/images/Rectangle 40.png"
            alt="x1"
            className="w-40 h-40 object-cover"
          />
        </div>
      </section>

      <section className="space-section">
        <h1 className="text-center mb-8 title-page">About us</h1>
        <div className="bg-amber-300 flex justify-between">
        <div className="max-w-1/2">
          <h1> Golden Treats</h1>
          <p>
            Welcome to coffee store where every sip and bite is crafted with
            care. We offer a delightful selection of coffee, cakes, fresh
            juices, and pastries, catering to all tastes. Whether you prefer
            classic flavors or need gluten-free , lactose-free and classic
            options, we ensure a delicious experience for everyone. Step in and
            enjoy a cozy atmosphere.
          </p>
        </div>
        <div className="max-w-1/2">
          
            
                <img
                  src="./src/images/Rectangle 40.png"
                  alt="x1"
                  className="w-40 h-40 object-cover"
                />
              

             
        </div>
      </div>
        
      </section>
    </div>
  );
}
