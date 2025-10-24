import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export default function home() {
  return (
    <div className="">
      <section className="flex flex-col md:flex-row  justify-between gap-8">
        <div className="w-full lg:w-1/2 flex flex-col justify-between items-center md:items-start gap-5">
          <div>
            <h1 className=""> Golden Treats</h1>
            <p className="main-title my-4">
              Welcome to coffee store where every sip and bite is crafted with
              care. We offer a delightful selection of coffee, cakes, fresh
              juices, and pastries, catering to all tastes. Whether you prefer
              classic flavrs or need gluten-free , lactose-free and classic
              options, we ensure a delicious experience for everyone. Step in
              and enjoy a cozy atmosphere.
            </p>
          </div>

          <div className="flex items-center gap-7.5">
            <img
              src="/src/images/cake-icon.png"
              alt=""
              className="w-12 h-auto"
            />
            <img
              src="/src/images/croissant-icon.png"
              alt=""
              className="w-12 h-auto"
            />
            <img
              src="/src/images/drink-icon.png"
              alt=""
              className="w-12 h-auto"
            />
            <img
              src="/src/images/coffe-icon.png"
              alt=""
              className="w-12 h-auto"
            />
          </div>
          <Link to="/menu">
            <Button size="xl">Order Now</Button>
          </Link>
        </div>
        <div className="w-full lg:w-1/2 flex justify-center md:justify-end">
          <div className="flex flex-col w-4/5">
            <div className="flex w-full">
              <div className="flex flex-col w-1/2">
                <img
                  src="./src/images/pastry.png"
                  alt="x1"
                  className="w-64 h-42 object-cover border-2 border-[var(--border-primary)]"
                />
                <img
                  src="./src/images/juice.png"
                  alt="x2"
                  className="w-64 h-42 object-cover mt-2 border-2 border-[var(--border-primary)]"
                />
              </div>

              <img
                src="./src/images/coffee.png"
                alt="y"
                className="w-1/2 h-86 object-cover ml-4 border-2 border-[var(--border-secondary)]"
              />
            </div>

            <img
              src="./src/images/cake.png"
              alt="yyyy"
              className="w-full h-46 object-cover mt-4 border-2 border-[var(--border-secondary)] hover:outline-4 outline-amber-500"
            />
          </div>
        </div>
      </section>

      <section className="space-section">
        <h1 className="text-center mb-8 title-page">menu</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 place-items-center gap-8">
          <Link to={"/menu/coffee"} className="relative w-64 h-40">
            <img
              src="./src/images/coffee.png"
              alt="coffee"
              className="w-full h-full object-cover rounded-lg"
            />
            <div className="absolute inset-0 bg-black opacity-40 rounded-lg"></div>
          </Link>
          <Link to={"/menu/juice"} className="relative w-64 h-40">
            <img
              src="./src/images/juice.png"
              alt="coffee"
              className="w-full h-full object-cover rounded-lg"
            />
            <div className="absolute inset-0 bg-black opacity-40 rounded-lg"></div>
          </Link>
          <Link to={"/menu/cake"} className="relative w-64 h-40">
            <img
              src="./src/images/cake.png"
              alt="coffee"
              className="w-full h-full object-cover rounded-lg"
            />
            <div className="absolute inset-0 bg-black opacity-40 rounded-lg"></div>
          </Link>
          <Link to={"/menu/pastry"} className="relative w-64 h-40">
            <img
              src="./src/images/pastry.png"
              alt="coffee"
              className="w-full h-full object-cover rounded-lg"
            />
            <div className="absolute inset-0 bg-black opacity-40 rounded-lg"></div>
          </Link>
        </div>
      </section>

      <section className="space-section">
        <h1 className="text-center mb-8 title-page">About us</h1>
        <div className="flex items-stretch justify-center md:justify-between md:gap-12 lg:gap-24 ">
 
        <div className="flex flex-col md:flex-row items-center justify-center md:justify-between md:gap-12 lg:gap-24 w-4/5 md:w-full">
  <div className="md:w-1/2 lg:w-2/5 text-center md:text-start">
    <h2 className="mb-6 text-2xl font-semibold">Welcome to Coffee Store</h2>
    <p className="main-title leading-relaxed text-gray-700">
      At Coffee Store, we believe that every sip and every bite should
      be a delightful experience. That’s why we craft our drinks and
      pastries with care, ensuring a cozy and inclusive atmosphere for
      all.
    </p>
  </div>

  <div className="md:w-1/2 lg:w-2/5">
    <img
      src="./src/images/fruite.png"
      alt="Coffee shop"
      className="w-full h-full object-cover"
    />
  </div>
</div>



  
</div>


        <div className="flex flex-col md:flex-row justify-center items-center md:justify-between mt-16 md:gap-12 lg:gap-24 ">
  <div className=" w-4/5 md:w-1/2 lg:w-2/5">
    <img
      src="./src/images/paresta.png"
      alt="x1"
      className="w-full h-full object-cover"
    />
  </div>

  <div className="w-4/5 md:w-1/2 lg:w-2/5 flex flex-col justify-center text-center md:text-start ">
    <h2 className="mb-6">What Makes Us Special?</h2>
    <p className="main-title">
      Allergy-Friendly Options — We offer a variety of gluten-free,
      lactose-free, and classic options to suit different dietary needs.
      <br /><br />
      High-Quality Ingredients — Every item is made with carefully
      selected, natural, and fresh ingredients.
      <br /><br />
      A Cozy Atmosphere — Whether you're here for a morning coffee, a study
      session, or a casual chat with friends, our space is designed for
      comfort and enjoyment.
    </p>
  </div>
</div>

      </section>
    </div>
  );
}
