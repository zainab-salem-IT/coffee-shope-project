
import Navbar from '@/components/ui/navBar';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from './pages/home';
import Menu from './pages/menu';
import Favouratie from './pages/favourite';
import About from './pages/about';
import Contact from './pages/contact';
import Buy from './pages/buy';
function App() {

  return (
    <>
    <div className=' h-screen p-2'>
    <Router>
      <Navbar />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/favourite" element={<Favouratie />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/buy" element={<Buy />} />
      </Routes>
    </Router>
    </div>
    </>
  )
}

export default App
