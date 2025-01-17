import About from "./components/about";
import Experience from "./components/experiences";
import Footer from "./components/footer";
import Home from "./components/home";
import Navbar from "./components/navbar";
import Projects from "./components/projects";


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
        <Projects />
      </div>
      <Footer />
    </div>
  )
}