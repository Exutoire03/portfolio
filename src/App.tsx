import About from "./components/about";
import Experience from "./components/experiences";
import Home from "./components/home";
import Navbar from "./components/navbar";


export default function App() {
  return (
    <div>
      <div className="p-5 md:px-[15%] ">
       <Navbar />
       <Home />
      </div>
      <About />
      <div className="p-5 md:px-[15%] ">
        <Experience />
      </div>
    </div>
  )
}