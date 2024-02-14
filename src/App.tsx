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
    <Suspense fallback={<Loader />}>
      <BrowserRouter>
        <div className="relative z-0 flex flex-col items-center overflow-hidden bg-primary">
          <Navbar />
          <div className="fixed h-screen w-screen">
            <StarsCanvas />
          </div>
          <Hero />
          <About />
          <Experience />
          {/* <Tech /> */}
          <Works />
          <Contact />
        </div>
      </BrowserRouter>
    </Suspense>
  );
}

export default App;
