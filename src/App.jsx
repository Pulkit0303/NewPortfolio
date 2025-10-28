import HomePage from "./pages/HomePage";
import TechPage from "./pages/TechPage";
import ContactPage from "./pages/ContactPage";
import { useEffect, useState,useRef } from "react";
import { motion } from "framer-motion";
import { CursorProvider } from "../../portfolio/src/context/CursorContext";

function App() {
  const ref = useRef('');

  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0,
  });
  const [cursorVariant, setCursorVariant] = useState("default");

  useEffect(() => {
    const mouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", mouseMove);
    return () => {
      window.removeEventListener("mousemove", mouseMove);
    };
  }, []);

  const variants = {
    default: {
      x: mousePosition.x - 16,
      y: mousePosition.y - 16,
    },
    hovered: {
      height: 150,
      width: 150,
      x: mousePosition.x - 75,
      y: mousePosition.y - 75,
    },
  };
  const mouseEntered = () => {
    setCursorVariant("hovered");
  };
  const mouseLeaved = () => {
    setCursorVariant("default");
  };

  return (
    <CursorProvider value={{mouseEntered,mouseLeaved}}>
      <div className="h-dvh overflow-y-scroll overflow-x-hidden snap-y snap-mandatory scroll-smooth">
        <motion.div
          className="xl:block hidden fixed top-0 left-0 h-8 w-8 bg-black rounded-full pointer-events-none mix-blend-difference"
          variants={variants}
          animate={cursorVariant}
        />

        <section className="snap-start">
          <HomePage />
        </section>

        <section className="snap-start">
          <TechPage />
        </section>

        <section className="snap-start">
          <ContactPage />
        </section>
      </div>
    </CursorProvider>
  );
}

export default App;
