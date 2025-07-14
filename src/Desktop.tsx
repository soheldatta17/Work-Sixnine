import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import LoadingScreen from "./components/LoadingScreen";
import ProductCarousel from "./components/ProductCarousel";
import FAQSection from "./components/FAQSection";
import wash from "/img/wash.jpg";
import wash2 from "/img/wash2.png";
import girl from "/img/girl.png";
import girl2 from "/img/girl2.png";
import award from "/img/award.png";
import mask1 from "/img/mask.png";
import mask2 from "/img/mask2.png";
import mask3 from "/img/mask3.png";
import cart from "/img/cart.png";
import cartwhite from "/img/cartwhite.png";
import girl3 from "/img/girl3.png";
import headphone from "/img/headphone.png";
import plus from "/img/plus.png";
import minus from "/img/minus.png";
import bag from "/img/bag.png";
import heart from "/img/heart.png";
import person from "/img/person.png";

function Desktop() {
  const [isLoading, setIsLoading] = useState(true);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const handleLoadingComplete = () => {
    setShowContent(true);
  };

  const pageVariants = {
    initial: { opacity: 0, y: 20 },
    in: { opacity: 1, y: 0 },
    out: { opacity: 0, y: -20 }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      }
    }
  };

  const products = [
    {
      id: 1,
      title: "ALYA SKIN CLEANSER.",
      price: "FROM $29.99",
      image: mask1,
    },
    {
      id: 2,
      title: "RITUAL OF SAKURA.",
      price: "FROM $27.99",
      image: mask2,
    },
    {
      id: 3,
      title: "THE BODY LOTION.",
      price: "FROM $19.99",
      image: mask3,
    },
  ];

  const categoryProducts = [
    {
      id: 1,
      title: "ALYA SKIN CLEANSER.",
      price: "FROM $29.99",
      bgColor: "#F5F5F5",
      image: mask1,
    },
    {
      id: 2,
      title: "RITUAL OF SAKURA.",
      price: "FROM $27.99",
      bgColor: "#1F2937",
      isDark: true,
      image: mask2,
    },
    {
      id: 3,
      title: "THE BODY LOTION.",
      price: "FROM $19.99",
      bgColor: "#E5E7EB",
      image: mask3,
    },
  ];

  return (
    <>
      <AnimatePresence mode="wait">
        {isLoading && (
          <LoadingScreen key="loading" onComplete={handleLoadingComplete} />
        )}
      </AnimatePresence>

      <AnimatePresence>
        {showContent && (
          <motion.div
            key="content"
            initial="initial"
            animate="in"
            exit="out"
            variants={pageVariants}
            className="min-h-screen"
            style={{ backgroundColor: "#FEFFF4" }}
          >
            {/* Header */}
            <motion.header
              initial={{ y: -100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex items-center justify-between px-8 py-6"
              style={{ backgroundColor: "#eff5e1" }}
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                style={{
                  fontFamily: "Inter",
                  fontWeight: 800,
                  fontSize: "30px",
                  lineHeight: "100%",
                  letterSpacing: "0%",
                  textTransform: "uppercase",
                  color: "#1F2937",
                }}
              >
                SKINCARE
              </motion.div>

              <nav className="flex space-x-8">
                {["All Products", "Serum", "Sunscreen", "Bundle"].map((item, index) => (
                  <motion.a
                    key={item}
                    href="#"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                    whileHover={{ y: -2, color: "#1F2937" }}
                    className="text-gray-700 hover:text-gray-900 capitalize transition-colors"
                    style={{
                      fontFamily: "Inter",
                      fontWeight: 400,
                      fontSize: "20px",
                      lineHeight: "100%",
                      letterSpacing: "-0.05em",
                    }}
                  >
                    {item}
                  </motion.a>
                ))}
              </nav>

              <div className="flex items-center space-x-4">
                {[
                  { icon: bag, label: "Cart (1)" },
                  { icon: heart, label: "Wishlist" },
                  { icon: person, label: "User" }
                ].map((item, index) => (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center space-x-2"
                  >
                    <div
                      className="flex items-center justify-center w-10 h-10 rounded-full cursor-pointer"
                      style={{ backgroundColor: "#F8FEE5" }}
                    >
                      <img src={item.icon} alt={item.label} className="w-5 h-5" />
                    </div>
                    {item.label === "Cart (1)" && (
                      <p
                        style={{
                          fontFamily: "Inter",
                          fontWeight: 400,
                          fontSize: "20px",
                          lineHeight: "100%",
                          letterSpacing: "-5%",
                          textTransform: "capitalize",
                          color: "#374151",
                          margin: 0,
                        }}
                      >
                        {item.label}
                      </p>
                    )}
                  </motion.div>
                ))}
              </div>
            </motion.header>

            {/* Hero Section */}
            <motion.section
              variants={staggerContainer}
              initial="hidden"
              animate="show"
              className="px-8 py-12 relative"
              style={{ backgroundColor: "#eff5e1" }}
            >
              <div className="grid grid-cols-12 gap-8 items-center">
                {/* Left content */}
                <motion.div className="col-span-3">
                  <motion.p
                    className="text-gray-700 text-lg leading-relaxed mb-8 text-justify"
                    style={{ textIndent: "105px" }}
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                  >
                    Transform your skincare
                    <br />
                    routine with premium products that
                    <br />
                    restore, protect, and enhance your
                    <br />
                    natural glow every day.
                  </motion.p>
                </motion.div>


                {/* Center heading */}
                <motion.div className="col-span-6 text-center">
                  <motion.h1
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    style={{
                      fontFamily: "Inter",
                      fontWeight: 700,
                      fontSize: "100px",
                      lineHeight: "90px",
                      letterSpacing: "-3%",
                      textTransform: "uppercase",
                      color: "#2D3B36",
                    }}
                  >
                    GLOW
                    <br />
                    NATUR-
                    <br />
                    ALLY
                  </motion.h1>
                </motion.div>

                {/* Right product image */}
                <motion.div
                  className="col-span-3 flex justify-center"
                >
                  <motion.img
                    whileHover={{ scale: 1.05, rotate: 2 }}
                    transition={{ duration: 0.3 }}
                    src={wash}
                    alt="Wash Product"
                    style={{
                      width: '222.61px',
                      height: '220px',
                      borderRadius: '20px',
                    }}
                  />
                </motion.div>
              </div>
            </motion.section>

            {/* Main Content Section */}
            <section
              className="px-8 py-16 relative"
              style={{ backgroundColor: "#eff5e1" }}
            >
              <motion.button
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3 }}
                className="text-white px-8 py-3 rounded-full transition-all"
                style={{
                  backgroundColor: "#2D3B36",
                  fontFamily: "Inter",
                  fontWeight: 400,
                  fontSize: "20px",
                  lineHeight: "100%",
                  letterSpacing: "0%",
                }}
              >
                Shop Now
              </motion.button>

              {/* Background SKINCARE text */}
              <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
                <motion.h2
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.2 }}
                  className="font-extrabold uppercase leading-[100%] tracking-[0%] opacity-100 whitespace-nowrap text-center"
                  style={{
                    fontFamily: "Inter",
                    fontWeight: 800,
                    fontSize: "clamp(40px, 18vw, 378px)",
                    color: "#2D3B36",
                  }}
                >
                  SKINCARE
                </motion.h2>
              </div>

              {/* Central image and notification */}
              <div className="relative z-10 flex justify-center items-center">
                <div className="relative">
                  <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    whileHover={{ scale: 1.02 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="w-96 h-96 rounded-lg overflow-hidden relative flex items-center justify-center"
                  >
                    <img
                      src={girl}
                      alt="Girl"
                      className="w-full h-full object-cover"
                      style={{ borderRadius: "30px" }}
                    />
                  </motion.div>

                  {/* Notification popup */}
                  <motion.div
                    initial={{ x: -50, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="absolute bottom-8 left-4 bg-opacity-90 shadow-lg"
                    style={{
                      backgroundColor: "#EFF5E1",
                      borderRadius: "200px",
                      padding: "1rem",
                      maxWidth: "350px",
                      width: "100%",
                    }}
                  >
                    <div className="flex items-center gap-4 w-full">
                      <div
                        className="w-8 h-8 flex-shrink-0 rounded-full flex items-center justify-center"
                        style={{ border: "1px dashed #000" }}
                      >
                        <div
                          className="w-6 h-6 rounded-full overflow-hidden"
                          style={{ backgroundColor: "#D1D5DB" }}
                        >
                          <img
                            src={wash}
                            alt="Inner Circle Icon"
                            className="w-full h-full object-cover"
                          />
                        </div>
                      </div>
                      <p
                        className="flex-1"
                        style={{
                          fontFamily: "Inter",
                          fontWeight: 400,
                          fontSize: "20px",
                          lineHeight: "100%",
                          letterSpacing: "0%",
                          margin: 0,
                        }}
                      >
                        While giving you an invigorating cleansing experience.
                      </p>
                    </div>
                  </motion.div>
                </div>
              </div>
            </section>

            {/* Bottom Description */}

            <motion.section
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="px-4 sm:px-8 py-12"
            >
              <div className="mx-auto" style={{ maxWidth: "1716px" }}>
                <p
                  style={{
                    fontFamily: "Inter",
                    fontWeight: 400,
                    fontStyle: "normal",
                    fontSize: "53px",
                    lineHeight: "78px",
                    letterSpacing: "-0.035em",
                    color: "#374151",
                  }}
                >
                  Experience the ultimate in skincare with our expertly formulated products,
                  crafted to nourish, protect, and rejuvenate your skin. Combining the finest
                  natural ingredients with{" "}
                  <span style={{ color: "#9CA3AF" }}>
                    advanced science, our collection ensures every skin type can achieve a radiant,
                    healthy glow. Embrace your beauty with confidence every day. Experience the
                    ultimate in skincare with our expertly formulated products, crafted to nourish,
                    protect, and rejuvenate your skin.
                  </span>
                </p>
              </div>
            </motion.section>


            {/* Why Our Products Section */}
            <section className="px-8 py-16">
              <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-2 gap-16 items-center">
                  {/* Left content */}
                  <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                  >
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4 }}
                      className="inline-flex items-center gap-3 bg-white border border-gray-300 rounded-full px-4 py-2 text-sm text-gray-700 mb-8"
                    >
                      <div
                        style={{
                          width: "10px",
                          height: "10px",
                          backgroundColor: "#2D3B36",
                          borderRadius: "50%",
                        }}
                      ></div>
                      <span
                        style={{
                          fontFamily: "Inter",
                          fontWeight: 400,
                          fontSize: "20px",
                          lineHeight: "100%",
                          letterSpacing: "0%",
                        }}
                      >
                        Why Our Products
                      </span>
                    </motion.div>

                    <motion.h2
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 0.1 }}
                      className="mb-8 leading-tight"
                      style={{
                        fontFamily: "Inter",
                        fontWeight: 400,
                        fontSize: "60px",
                        lineHeight: "100%",
                        letterSpacing: "-2%",
                      }}
                    >
                      YOUR SKIN DESERVES
                      <br />
                      THE BEST CARE.
                    </motion.h2>

                    <motion.p
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 0.2 }}
                      className="text-gray-600 mb-12 leading-relaxed"
                      style={{
                        fontFamily: "Inter",
                        fontWeight: 400,
                        fontSize: "18px",
                        lineHeight: "24px",
                        letterSpacing: "-2%",
                      }}
                    >
                      Discover our premium skincare collection, featuring products
                      designed to rejuvenate, protect, and pamper your skin. Explore
                      our luxe crafted with love backed by science, and inspired by
                      nature.
                    </motion.p>

                    <div className="space-y-12">
                      {[
                        {
                          number: "01",
                          title: "Bio Ingredients",
                          desc: "Get naturally beautiful and transform with our bio ingredients craving for healthy, radiant skin.",
                        },
                        {
                          number: "02",
                          title: "Everything Natural",
                          desc: "Pure ingredients for pure skin. The perfect solution for your skin care needs.",
                        },
                        {
                          number: "03",
                          title: "All Handmade",
                          desc: "Made with love and care. Just for you. Give your skin the tender loving care it deserves.",
                        },
                      ].map(({ number, title, desc }, index) => (
                        <motion.div
                          key={number}
                          initial={{ opacity: 0, x: -30 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                          className="flex items-start space-x-6"
                        >
                          <span
                            className="text-[48px] font-bold bg-clip-text text-transparent leading-none pt-2"
                            style={{
                              backgroundImage: "linear-gradient(180deg, #293330 0%, #FEFFF4 100%)",
                              fontFamily: "Inter",
                            }}
                          >
                            {number}
                          </span>
                          <div>
                            <h3
                              className="text-gray-800 mb-2"
                              style={{
                                fontFamily: "Inter",
                                fontWeight: 400,
                                fontSize: "60px",
                                lineHeight: "100%",
                                letterSpacing: "-2%",
                              }}
                            >
                              {title}
                            </h3>
                            <p
                              className="text-gray-600"
                              style={{
                                fontFamily: "Inter",
                                fontWeight: 400,
                                fontSize: "18px",
                                lineHeight: "24px",
                                letterSpacing: "-2%",
                              }}
                            >
                              {desc}
                            </p>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>

                  {/* Right image */}
                  <div className="relative">
                    {/* Image box with matched size */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 0.4 }}
                      className="rounded-2xl relative overflow-hidden flex items-center justify-center"
                      style={{ width: "610px", height: "676px" }}
                    >
                      <img
                        src={girl2}
                        alt="Woman with Face Mask"
                        className="w-full h-full object-cover"
                      />
                    </motion.div>

                    {/* Award notification */}
                    <div
                      className="absolute left-1/2 transform -translate-x-1/2 bg-white bg-opacity-90 p-4 shadow-lg flex items-center space-x-5"
                      style={{
                        bottom: "15%",
                        borderRadius: "200px",
                      }}
                    >
                      <div
                        className="w-14 h-14 flex-shrink-0 rounded-full flex items-center justify-center"
                        style={{
                          border: "1px dashed #000",
                        }}
                      >
                        <div
                          className="w-12 h-12 rounded-full overflow-hidden"
                          style={{
                            backgroundColor: "#2D3B36",
                            padding: "4px",
                          }}
                        >
                          <img
                            src={award}
                            alt="Inner Icon"
                            className="w-full h-full object-cover"
                          />
                        </div>

                      </div>

                      <div>
                        <p
                          style={{
                            fontFamily: "Inter",
                            fontWeight: 400,
                            fontStyle: "normal",
                            fontSize: "20px",
                            lineHeight: "100%",
                            letterSpacing: "0%",
                            color: "#1F2937",
                          }}
                        >
                          Best Skin Care Product<br />
                          Award Winning
                        </p>

                      </div>
                    </div>

                    {/* Bottom info */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 0.4 }}
                      className="flex justify-between items-center mt-6"
                    >
                      <p
                        className="text-gray-600"
                        style={{
                          fontFamily: "Inter",
                          fontWeight: 400,
                          fontSize: "20px",
                          lineHeight: "100%",
                          letterSpacing: "-2%",
                          textTransform: "uppercase",
                        }}
                      >
                        SINCE 2001
                      </p>
                      <motion.button
                        whileHover={{ y: -2 }}
                        style={{
                          fontFamily: "Inter",
                          fontWeight: 400,
                          fontSize: "20px",
                          lineHeight: "100%",
                          letterSpacing: "-2%",
                          textTransform: "uppercase",
                          color: "#1F2937",
                        }}
                        className="hover:underline"
                      >
                        LEARN MORE
                      </motion.button>
                    </motion.div>
                  </div>
                </div>
              </div>
            </section>

            {/* Best Selling Products Section */}
            <section className="px-8 py-16">
              <div className="max-w-7xl mx-auto">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="flex items-center justify-between mb-12"
                >
                  <div className="inline-flex items-center gap-3 bg-white border border-gray-300 rounded-full px-4 py-2 text-sm text-gray-700 mb-8">
                    <div
                      style={{
                        width: "10px",
                        height: "10px",
                        backgroundColor: "#2D3B36",
                        borderRadius: "50%",
                      }}
                    ></div>
                    <span
                      style={{
                        fontFamily: "Inter",
                        fontWeight: 400,
                        fontSize: "20px",
                        lineHeight: "100%",
                        letterSpacing: "0%",
                      }}
                    >
                      Best Selling Products
                    </span>
                  </div>
                  <div className="text-center flex-1">
                    <h2 className="text-4xl font-bold text-gray-800">
                      Skincare That Brings Out
                      <br />
                      Your Natural Radiance
                    </h2>
                  </div>
                </motion.div>

                <ProductCarousel products={products} cart={cart} cartwhite={cartwhite} />
              </div>
            </section>

            {/* Feel Beautiful Section */}
            <motion.section
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="px-8 py-16"
            >
              <div className="max-w-7xl mx-auto">
                <motion.div
                  whileHover={{ scale: 1.01 }}
                  transition={{ duration: 0.3 }}
                  className="relative h-[600px] bg-gray-800 rounded-3xl overflow-hidden flex items-center justify-center"
                >
                  <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
                    <img
                      src={girl3}
                      alt="Woman with Product and Leaves"
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <motion.div
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="absolute left-1/2 transform -translate-x-1/2"
                    style={{ bottom: "10%" }}
                  >
                    <div className="text-center text-white">
                      <h2
                        style={{
                          fontFamily: "Inter",
                          fontWeight: 400,
                          fontSize: "50px",
                          lineHeight: "100%",
                          letterSpacing: "-2%",
                          textAlign: "center",
                        }}
                        className="mb-8"
                      >
                        Feel Beautiful Inside and Out
                        <br />
                        with Every Product.
                      </h2>
                      <motion.button
                        whileHover={{ scale: 1.05, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                        className="bg-white text-gray-800 px-8 py-3 rounded-full hover:bg-gray-100 transition-colors"
                        style={{
                          fontFamily: "Inter",
                          fontWeight: 400,
                          fontSize: "20px",
                          lineHeight: "100%",
                          letterSpacing: "0%",
                        }}
                      >
                        Shop Now
                      </motion.button>
                    </div>
                  </motion.div>
                </motion.div>
              </div>
            </motion.section>

            {/* Category Products Section */}
            <section className="px-8 py-16">
              <div className="max-w-7xl mx-auto">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="text-center mb-8"
                >
                  <h2
                    style={{
                      fontFamily: "Inter",
                      fontWeight: 400,
                      fontSize: "50px",
                      lineHeight: "100%",
                      letterSpacing: "-2%",
                      color: "#1F2937",
                    }}
                  >
                    Feel Beautiful Inside and Out
                    <br />
                    with Every Product.
                  </h2>
                </motion.div>

                {/* Category Filter Buttons */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  className="flex justify-center gap-4 mb-12"
                >
                  {["NEW ARRIVAL", "CLEANSING", "ACNE FIGHTER", "ANTI AGEING"].map((category, index) => (
                    <motion.button
                      key={category}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      whileHover={{ scale: 1.05, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      className={`px-6 py-3 rounded-full transition-all ${index === 0
                        ? "text-white"
                        : "border border-gray-300 text-gray-700 hover:bg-gray-50"
                        }`}
                      style={{
                        backgroundColor: index === 0 ? "#2D3B36" : "transparent",
                        fontFamily: "Inter",
                        fontWeight: 400,
                        fontSize: "16px",
                        lineHeight: "100%",
                        letterSpacing: "0%",
                      }}
                    >
                      {category}
                    </motion.button>
                  ))}
                </motion.div>

                <ProductCarousel products={categoryProducts} cart={cart} cartwhite={cartwhite} />
              </div>
            </section>

            {/* FAQ Section */}
            <section className="px-8 py-16">
              <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-stretch">
                  {/* Left - Product Image */}
                  <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="relative h-full"
                  >
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      transition={{ duration: 0.3 }}
                      className="rounded-2xl overflow-hidden h-full"
                      style={{ backgroundColor: "#E5E7EB" }}
                    >
                      <div className="h-full bg-gray-300 flex items-center justify-center relative"
                        style={{ borderRadius: "20px" }}>
                        <img
                          src={wash2}
                          alt="Face Wash"
                          className="w-full h-full object-cover"
                        />

                        {/* Help Button */}
                        <div
                          className="absolute bottom-6 left-1/2 transform -translate-x-1/2 backdrop-blur-sm rounded-full px-6 py-3 flex items-center gap-3 shadow-lg"
                          style={{
                            backgroundColor: "#EFF5E1"
                          }}
                        >
                          <div
                            className="w-14 h-14 rounded-full flex items-center justify-center"
                            style={{
                              border: "1px dashed #2D3B36",
                            }}
                          >
                            <div
                              className="w-12 h-12 rounded-full flex items-center justify-center"
                              style={{
                                backgroundColor: "#2D3B36",
                                padding: "4px",
                              }}
                            >
                              <img
                                src={headphone}
                                alt="Inner Icon"
                                className="w-full h-full object-cover"
                              />
                            </div>
                          </div>

                          <div>
                            <p
                              style={{
                                fontFamily: "Inter",
                                fontWeight: 400,
                                fontStyle: "normal",
                                fontSize: "20px",
                                lineHeight: "100%",
                                letterSpacing: "0%",
                                margin: 0,
                                color: "#1F2937",
                              }}
                            >
                              24/7 We're Here
                              <br />
                              to Help You
                            </p>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  </motion.div>

                  {/* Right - FAQ Content */}
                  <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                  >
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4 }}
                      className="inline-flex items-center gap-3 bg-white border border-gray-300 rounded-full px-4 py-2 text-sm text-gray-700 mb-8"
                    >
                      <div
                        style={{
                          width: "10px",
                          height: "10px",
                          backgroundColor: "#2D3B36",
                          borderRadius: "50%",
                        }}
                      ></div>
                      <h3
                        style={{
                          fontFamily: "Inter",
                          fontWeight: 400,
                          fontSize: "16px",
                          lineHeight: "100%",
                          letterSpacing: "0%",
                        }}
                      >
                        Frequently Asked Question
                      </h3>
                    </motion.div>

                    <motion.h2
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 0.1 }}
                      className="mb-12"
                      style={{
                        fontFamily: "Inter",
                        fontWeight: 400,
                        fontSize: "50px",
                        lineHeight: "60px",
                        letterSpacing: "-2%",
                        color: "#1F2937",
                      }}
                    >
                      Answers to Your
                      <br />
                      Skincare Questions, All
                      <br />
                      in One Place.
                    </motion.h2>

                    <FAQSection plus={plus} minus={minus} />
                  </motion.div>
                </div>
              </div>
            </section>

            {/* Footer */}
            <motion.footer
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative px-8 py-16"
              style={{ backgroundColor: "#2D3B36" }}
            >
              <div className="max-w-7xl mx-auto relative z-10">
                {/* Main Footer Content */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="grid grid-cols-2 gap-16 mb-16"
                >
                  {/* Left */}
                  <div>
                    <h2
                      style={{
                        fontFamily: "Inter",
                        fontWeight: 400,
                        fontSize: "60px",
                        lineHeight: "100%",
                        letterSpacing: "-2%",
                        color: "#FFFFFF",
                      }}
                    >
                      Join The Skincare
                      <br />
                      Community Now.
                    </h2>
                  </div>

                  {/* Right */}
                  <div className="text-right">
                    <p
                      className="mb-4"
                      style={{
                        fontFamily: "Inter",
                        fontWeight: 400,
                        fontSize: "30px",
                        lineHeight: "100%",
                        letterSpacing: "-2%",
                        color: "#FFFFFF",
                      }}
                    >
                      Get in Touch
                    </p>
                    <p
                      style={{
                        fontFamily: "Inter",
                        fontWeight: 400,
                        fontSize: "60px",
                        lineHeight: "100%",
                        letterSpacing: "-2%",
                        color: "#FFFFFF",
                      }}
                    >
                      contact.skincare.com
                    </p>
                  </div>
                </motion.div>

                {/* Bottom Footer Links */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="flex justify-between items-center mb-16"
                >
                  {/* Social */}
                  <div className="flex space-x-8">
                    {["Facebook", "Instagram", "YouTube"].map((text, index) => (
                      <motion.a
                        key={text}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        whileHover={{ y: -2 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: index * 0.1 }}
                        href="#"
                        className="text-white hover:text-gray-300 transition-colors"
                        style={{
                          fontFamily: "Inter",
                          fontWeight: 400,
                          fontSize: "18px",
                          lineHeight: "100%",
                          letterSpacing: "0%",
                        }}
                      >
                        {text}
                      </motion.a>
                    ))}
                  </div>

                  {/* Legal */}
                  <div className="flex space-x-8">
                    {["Terms of Service", "Privacy Policy", "Cookies Policy"].map((text, index) => (
                      <motion.a
                        key={text}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        whileHover={{ y: -2 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                        href="#"
                        className="text-white hover:text-gray-300 transition-colors"
                        style={{
                          fontFamily: "Inter",
                          fontWeight: 400,
                          fontSize: "18px",
                          lineHeight: "100%",
                          letterSpacing: "0%",
                        }}
                      >
                        {text}
                      </motion.a>
                    ))}
                  </div>
                </motion.div>
              </div>

              {/* SKINCARE - Standalone Third Row */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 0.1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.4 }}
                className="w-full flex justify-center pt-8"
              >
                <h2
                  className="font-extrabold uppercase leading-[100%] tracking-[0%] text-center whitespace-nowrap"
                  style={{
                    fontFamily: "Inter",
                    fontWeight: 800,
                    fontSize: "clamp(60px, 20vw, 400px)",
                    color: "#FFFFFF",
                  }}
                >
                  SKINCARE
                </h2>
              </motion.div>
            </motion.footer>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default Desktop;