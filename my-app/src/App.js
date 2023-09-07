import './App.css';
import { motion, AnimatePresence } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import images from './images';

function App() {
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
    <div className="App">
      <motion.div
        ref={carousel}
        className='carousel'
        whileTap={{ cursor: "grabbing" }}
        style={{ transform: `translateX(-${scrollX}px)` }}
      >
        <motion.div drag="x" dragConstraints={{ right: 0, left: -width }} className='inner-carousel'>
          {images.map(image => {
            return (
              <motion.div
                className='item'
                key={image}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <img src={image} alt='' />
              </motion.div>
            );
          })}
        </motion.div>
      </motion.div>
    </div>
  );
}

export default App;






