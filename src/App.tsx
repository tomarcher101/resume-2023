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
import CanvasLoader from "@/components/canvas/Loader";

function App() {
  return (
    <Suspense fallback={<CanvasLoader />}>
      <BrowserRouter>
        <div className="relative z-0 bg-primary w-screen overflow-hidden">
          <Navbar />
          <div className="w-screen h-screen fixed">
            <StarsCanvas />
          </div>
          <Hero/>
          <About/>
          <Experience />
          <Tech />
          <Works />
          <Contact />
        </div>
      </BrowserRouter>
    </Suspense>
  );
}

export default App;
