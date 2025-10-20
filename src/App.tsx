import Navbar from "@/components/ui/navBar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Menu from "./pages/menu";
import Favouratie from "./pages/favourite";
import About from "./pages/about";
import Contact from "./pages/contact";
import Buy from "./pages/buy";
import Cake from "./pages/menu/cake";
import Juice from "./pages/menu/juice";
import Coffee from "./pages/menu/coffee";
import Pastry from "./pages/menu/pastry";
import { FavoritesProvider } from "@/context/favouratie";
import { BuyProvider } from "@/context/buyContext";
import ItemDetails from "./pages/menu/itemsDetail";

function App() {
  return (
    <>
      <FavoritesProvider>
        <BuyProvider> {/* ✅ wrap with BuyProvider */}
          <Router>
            <div className="py-4 px-8">
              <Navbar />
              <Routes>
                <Route path="/home" element={<Home />} />
                <Route path="/menu" element={<Menu />} />
                <Route path="/menu/item/:id" element={<ItemDetails />} />
                <Route path="/menu/cake" element={<Cake />} />
                <Route path="/menu/coffee" element={<Coffee />} />
                <Route path="/menu/pastry" element={<Pastry />} />
                <Route path="/menu/juice" element={<Juice />} />
                <Route path="/favourite" element={<Favouratie />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/buy" element={<Buy />} />
              </Routes>
            </div>
          </Router>
        </BuyProvider>
      </FavoritesProvider>
    </>
  );
}

export default App;
