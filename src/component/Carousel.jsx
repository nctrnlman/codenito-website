import React, { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const importAll = (r) => r.keys().map(r);
const images = importAll(
  require.context('../assets/carousel-logo', false, /\.(png|jpe?g|svg)$/)
);

function Carousel() {
  const [width, setWidth] = useState(0);
  const [scrollY, setScrollY] = useState(0);
  const carousel = useRef();

  useEffect(() => {
    setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
  }, [width]);

  const handleScrollDirection = () => {
    const newScrollY = window.scrollY;
    const newDirection = newScrollY > scrollY ? 1 : -1;

    // Calculate new scrollY value using modulo for looping
    setScrollY((newScrollY + width * newDirection) % width);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScrollDirection);

    return () => {
      window.removeEventListener('scroll', handleScrollDirection);
    };
  }, [scrollY]);

  return (
    <div className="py-20 bg-white">
      <div className="mx-auto p-10 items-center flex justify-center">
        <h1 className="text-5xl font-bold inline border-b-4 border-grey text-black">
          Portfolio
        </h1>
      </div>
      <motion.div
        ref={carousel}
        className="cursor-grab pt-10"
        whileTap={{ cursor: 'grabbing' }}
        style={{ transform: `translateX(-${scrollY}px)` }}
      >
        <motion.div
          drag="x"
          dragConstraints={{ right: 0, left: -width }}
          className="flex rounded-md gap-4"
          style={{
            userDrag: 'none',
          }}
        >
          {images.map((image) => (
            <motion.div
              className="min-h-full min-w-[30rem] p-30px shadow"
              key={image}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <div className="w-full h-full">
                <img
                  src={image}
                  alt=""
                  className="pointer-events-none rounded-lg"
                  style={{ width: '100%', height: '100%' }}
                />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
}

export default Carousel;
