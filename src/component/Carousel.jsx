import { motion, AnimatePresence } from "framer-motion";
import { useRef, useEffect, useState } from "react";
// import { images } from "../assets/carousel-logo";
const importAll = (r) => r.keys().map(r);
const images = importAll(
  require.context("../assets/carousel-logo", false, /\.(png|jpe?g|svg)$/)
);

function Carousel() {
  const [width, setWidth] = useState(0);
  const [scrollX, setScrollX] = useState(0);
  const [direction, setDirection] = useState(1); // Direction 1 is forward, -1 is reverse
  const carousel = useRef();

  useEffect(() => {
    setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);

    const intervalId = setInterval(() => {
      const newScrollX = scrollX + direction;

      if (newScrollX >= width || newScrollX <= 0) {
        // If the end is reached, reverse the direction
        setDirection(-direction);
      } else {
        setScrollX(newScrollX);
      }
    }, 10);

    return () => clearInterval(intervalId);
  }, [scrollX, width, direction]);

  return (
    <div className="py-20 bg-white">
      <div className="mx-auto p-10 items-center flex justify-center">
        <h1 className="text-5xl font-bold inline border-b-4 border-grey text-black">
          Portofolio
        </h1>
      </div>
      <motion.div
        ref={carousel}
        className="cursor-grab pt-10"
        whileTap={{ cursor: "grabbing" }}
        style={{ transform: `translateX(-${scrollX}px)` }}
      >
        <motion.div
          drag="x"
          dragConstraints={{ right: 0, left: -width }}
          className="flex rounded-md gap-4 "
        >
          {images.map((image) => {
            return (
              <motion.div
                className="min-h-full min-w-[30rem] p-20px"
                key={image}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <img
                  src={image}
                  alt=""
                  className="w-full h-full pointer-events-none rounded-lg"
                  style={{ maxWidth: "100%", maxHeight: "100%" }}
                />
              </motion.div>
            );
          })}
        </motion.div>
      </motion.div>
    </div>
  );
}

export default Carousel;
