import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

interface Product {
  id: number;
  title: string;
  price: string;
  image: string;
  bgColor?: string;
  isDark?: boolean;
}

interface ProductCarouselProps {
  products: Product[];
  cart: string;
  cartwhite: string;
}

const ProductCarousel = ({ products, cart, cartwhite }: ProductCarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % products.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + products.length) % products.length);
  };

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
      scale: 0.9,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      scale: 1,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 300 : -300,
      opacity: 0,
      scale: 0.9,
    }),
  };

  const swipeConfidenceThreshold = 10000;
  const swipePower = (offset: number, velocity: number) => {
    return Math.abs(offset) * velocity;
  };

  return (
    <div className="relative">
      {/* Mobile/Tablet Carousel */}
      <div className="block lg:hidden">
        <div className="relative h-96 overflow-hidden rounded-2xl">
          <AnimatePresence initial={false} custom={currentIndex}>
            <motion.div
              key={currentIndex}
              custom={currentIndex}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 },
                scale: { duration: 0.2 },
              }}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={1}
              onDragEnd={(_, { offset, velocity }) => {
                const swipe = swipePower(offset.x, velocity.x);

                if (swipe < -swipeConfidenceThreshold) {
                  nextSlide();
                } else if (swipe > swipeConfidenceThreshold) {
                  prevSlide();
                }
              }}
              className="absolute inset-0"
            >
              <ProductCard 
                product={products[currentIndex]} 
                cart={cart} 
                cartwhite={cartwhite} 
              />
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Navigation Buttons */}
        <div className="flex justify-center space-x-4 mt-6">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={prevSlide}
            className="w-12 h-12 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-50 transition-colors"
          >
            <span className="text-gray-600">←</span>
          </motion.button>
          
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={nextSlide}
            className="w-12 h-12 rounded-full bg-gray-800 text-white flex items-center justify-center hover:bg-gray-700 transition-colors"
          >
            <span>→</span>
          </motion.button>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center space-x-2 mt-4">
          {products.map((_, index) => (
            <motion.button
              key={index}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 rounded-full transition-colors ${
                index === currentIndex ? 'bg-gray-800' : 'bg-gray-300'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Desktop Grid */}
      <div className="hidden lg:grid grid-cols-3 gap-8">
        {products.map((product, index) => (
          <motion.div
            key={product.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
          >
            <ProductCard product={product} cart={cart} cartwhite={cartwhite} />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

const ProductCard = ({ product, cart, cartwhite }: { product: Product; cart: string; cartwhite: string }) => {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
      className="relative rounded-2xl overflow-hidden shadow-sm h-96"
      style={{ backgroundColor: product.bgColor || "#F5F5F5" }}
    >
      {/* Product Image */}
      <div className="h-full bg-gray-200 flex items-center justify-center">
        <img
          src={product.image}
          alt={product.title}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Floating Info Box */}
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.4, delay: 0.2 }}
        className="absolute bottom-4 left-4 right-4 backdrop-blur-sm rounded-lg p-4"
        style={{
          backgroundColor: product.isDark ? "rgba(0, 0, 0, 0.7)" : "rgba(255, 255, 255, 0.9)",
        }}
      >
        <div className="flex justify-between items-start">
          <div>
            <h3
              style={{
                fontFamily: "Inter",
                fontWeight: 400,
                fontSize: "20px",
                lineHeight: "100%",
                letterSpacing: "-5%",
                color: product.isDark ? "#FFFFFF" : "#1F2937",
                marginBottom: "8px",
              }}
            >
              {product.title}
            </h3>
            <p
              style={{
                fontFamily: "Inter",
                fontWeight: 400,
                fontSize: "16px",
                lineHeight: "100%",
                letterSpacing: "-5%",
                color: product.isDark ? "rgba(255, 255, 255, 0.7)" : "#6B7280",
              }}
            >
              {product.price}
            </p>
          </div>

          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="w-[50px] h-[50px] border border-gray-300 rounded flex items-center justify-center"
            style={{
              backgroundColor: product.isDark ? "rgba(255, 255, 255, 0.1)" : "rgba(45, 59, 54, 0.1)",
            }}
          >
            <img
              src={!product.isDark ? cart : cartwhite}
              alt="Cart"
              className="w-8 h-8 object-contain"
            />
          </motion.button>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ProductCarousel;