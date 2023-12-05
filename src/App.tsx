import { BrowserRouter } from "react-router-dom";
import {
  About,
  Contact,
  Experience,
  Hero,
  Navbar,
  Tech,
  Works,
  StarsCanvas,
} from "@/components";
import { Suspense } from "react";
import Loader from "@/components/canvas/Loader";

function App() {
  return (
    <BrowserRouter>
      <div className="relative z-0 w-screen overflow-hidden bg-primary">
        <Navbar />
        <div className="fixed h-screen w-screen">
          <StarsCanvas />
        </div>
        <Hero />
        <About />
        <Experience />
        <Tech />
        <Works />
        <Contact />
      </div>
    </BrowserRouter>
  );
}

export default App;
