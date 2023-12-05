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
import Loader from "@/components/three-js/Loader";

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<Loader />}>
        <div className="relative z-0 flex w-screen flex-col items-center overflow-hidden bg-primary">
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
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
