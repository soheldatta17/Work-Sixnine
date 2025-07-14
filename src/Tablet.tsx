import { useState, useEffect } from "react";
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
import headphone from "/img/headphone.png";
import plus from "/img/plus.png";
import minus from "/img/minus.png";
import bag from "/img/bag.png";
import heart from "/img/heart.png";
import person from "/img/person.png";
import { motion, AnimatePresence } from "framer-motion";
import LoadingScreen from "./components/LoadingScreen";
import ProductCarousel from "./components/ProductCarousel";
import FAQSection from "./components/FAQSection";

function Tablet() {

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


    const [currentIndex, setCurrentIndex] = useState(0);
    const [currentIndex2, setCurrentIndex2] = useState(0);
    const product = [
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


    const scrollLeft = () => {
        setCurrentIndex((prev) => (prev > 0 ? prev - 1 : product.length - 1));
    };

    const scrollRight = () => {
        setCurrentIndex((prev) => (prev < product.length - 1 ? prev + 1 : 0));
    };

    const scrollLeft2 = () => {
        setCurrentIndex2((prev) => (prev > 0 ? prev - 1 : product.length - 1));
    };

    const scrollRight2 = () => {
        setCurrentIndex2((prev) => (prev < product.length - 1 ? prev + 1 : 0));
    };


    return (
        <>
            <AnimatePresence mode="wait">
                {isLoading && (
                    <LoadingScreen key="loading" onComplete={handleLoadingComplete} />
                )}
            </AnimatePresence>

            <AnimatePresence>
                {showContent && (
                    <motion.div className="min-h-screen" style={{ backgroundColor: "#FEFFF4" }}>

                        {/* Tablet Header */}
                        <motion.header
                            initial={{ y: -100, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="flex flex-wrap items-center justify-between px-4 py-6 bg-[#eff5e1]"
                        >
                            <motion.div
                                whileHover={{ scale: 1.05 }}
                                className="text-2xl font-extrabold uppercase text-[#2D3B36]"
                                style={{ fontFamily: "Inter", letterSpacing: "0%" }}
                            >
                                SKINCARE
                            </motion.div>

                            <nav className="flex flex-wrap justify-center gap-4 mt-4 md:mt-0 md:gap-8">
                                {["All Products", "Serum", "Sunscreen", "Bundle"].map((item, index) => (
                                    <motion.a
                                        key={item}
                                        href="#"
                                        initial={{ opacity: 0, y: -20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                                        whileHover={{ y: -2, color: "#1F2937" }}
                                        className="text-gray-700 hover:text-gray-900 capitalize transition-colors text-lg"
                                        style={{ fontFamily: "Inter", letterSpacing: "-0.05em" }}
                                    >
                                        {item}
                                    </motion.a>
                                ))}
                            </nav>

                            <div className="flex items-center gap-3 mt-4 md:mt-0">
                                {[
                                    { icon: bag, label: "Cart (1)" },
                                    { icon: heart, label: "Wishlist" },
                                    { icon: person, label: "User" },
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
                            style={{ backgroundColor: "#eff5e1", paddingBottom: "120px" }} // 👈 Add bottom padding here
                        >
                            {/* Grid layout */}
                            <div className="relative z-10 grid grid-cols-12 gap-8 items-center">
                                {/* Left Text */}
                                <motion.div
                                    className="col-span-6"
                                    initial={{ opacity: 0, y: 40 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.8 }}
                                >
                                    <p
                                        className="text-gray-700 text-lg leading-relaxed text-justify"
                                        style={{ textIndent: "105px" }}
                                    >
                                        Transform your skincare routine with premium products that restore, protect, and enhance your natural glow every day.
                                    </p>
                                </motion.div>

                                {/* Right Image */}
                                <motion.div
                                    className="col-span-6 flex justify-center"
                                    initial={{ opacity: 0, y: 40 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.8, delay: 0.2 }}
                                >
                                    <motion.img
                                        whileHover={{ scale: 1.05, rotate: 2 }}
                                        transition={{ duration: 0.3 }}
                                        src={wash}
                                        alt="Wash Product"
                                        className="rounded-xl"
                                    />
                                </motion.div>
                            </div>


                            {/* Overlapping Full-Width Heading */}
                            <motion.div
                                transition={{ duration: 1 }}
                                className="absolute bottom-0 left-0 w-full flex justify-center pointer-events-none z-50"
                            >
                                <h1
                                    className="uppercase text-center w-full leading-[100%]"
                                    style={{
                                        fontFamily: "Inter",
                                        fontWeight: 800,
                                        fontSize: "clamp(40px, 40vw, 100px)",
                                        color: "#2D3B36",
                                        lineHeight: "1.1",
                                    }}
                                >
                                    Glowwww
                                    <br />
                                    Naturally
                                </h1>
                            </motion.div>

                        </motion.section>


                        <section className="relative bg-[#eff5e1] px-4 sm:px-8 py-20 overflow-hidden">
                            {/* SKINCARE Overlay Text */}
                            <div className="absolute inset-0 flex items-end justify-end pointer-events-none z-0">
                                <motion.h2
                                    viewport={{ once: true }}
                                    transition={{ duration: 1, delay: 0.2 }}
                                    className="uppercase leading-[100%] whitespace-nowrap text-right pr-4 sm:pr-12"
                                    style={{
                                        fontFamily: "Inter",
                                        fontWeight: 800,
                                        fontSize: "clamp(40px, 15vw, 300px)",
                                        color: "#2D3B36",
                                    }}
                                >
                                    SKINCARE
                                </motion.h2>
                            </div>

                            {/* Row Layout */}
                            <div className="relative z-10 flex flex-wrap md:flex-nowrap items-center justify-evenly">
                                {/* Image with Notification */}
                                <div className="relative flex-shrink-0">
                                    <motion.div
                                        initial={{ scale: 0.8, opacity: 0 }}
                                        whileInView={{ scale: 1, opacity: 1 }}
                                        whileHover={{ scale: 1.02 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.6 }}
                                        className="w-[clamp(240px,50vw,384px)] h-[clamp(240px,50vw,384px)] rounded-lg overflow-hidden flex items-center justify-center"
                                    >
                                        <img
                                            src={girl}
                                            alt="Girl"
                                            className="w-full h-full object-cover rounded-[30px]"
                                        />
                                    </motion.div>

                                    {/* Notification */}
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
                                            width: "clamp(250px, 80vw, 350px)",
                                        }}
                                    >
                                        <div className="flex items-center gap-4 w-full">
                                            <div
                                                className="w-8 h-8 flex-shrink-0 rounded-full flex items-center justify-center border border-dashed border-black"
                                            >
                                                <div className="w-6 h-6 rounded-full overflow-hidden bg-gray-300">
                                                    <img src={wash} alt="Inner Icon" className="w-full h-full object-cover" />
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

                                {/* CTA Button */}
                                <motion.button
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    whileHover={{ scale: 1.05, y: -2 }}
                                    whileTap={{ scale: 0.95 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.3 }}
                                    className="text-white px-8 py-3 rounded-full transition-all flex-shrink-0"
                                    style={{
                                        backgroundColor: "#2D3B36",
                                        fontFamily: "Inter",
                                        fontWeight: 400,
                                        fontSize: "20px",
                                    }}
                                >
                                    Shop Now
                                </motion.button>
                            </div>
                        </section>



                        {/* Bottom Description */}
                        <section className="px-4 py-8">
                            <motion.div className="mx-auto">
                                <p
                                    style={{
                                        fontFamily: "Inter",
                                        fontWeight: 400,
                                        fontStyle: "normal",
                                        fontSize: "24px",
                                        lineHeight: "32px",
                                        letterSpacing: "-0.02em",
                                        color: "#374151",
                                        textAlign: "center",
                                    }}
                                >
                                    Experience the ultimate in skincare with our expertly formulated
                                    products, crafted to nourish, protect, and rejuvenate your skin.
                                    Combining the finest natural ingredients with{" "}
                                    <span style={{ color: "#9CA3AF" }}>
                                        advanced science, our collection ensures every skin type can
                                        achieve a radiant, healthy glow. Embrace your beauty with
                                        confidence every day.
                                    </span>
                                </p>
                            </motion.div>
                        </section>

                        {/* Why Our Products Section - Mobile */}
                        <section className="px-4 py-12">
                            <motion.div className="max-w-full mx-auto">
                                {/* Badge */}
                                <motion.div className="flex mb-6">
                                    <motion.div className="inline-flex items-center gap-3 bg-white border border-gray-300 rounded-full px-4 py-2 text-sm text-gray-700">
                                        <motion.div
                                            style={{
                                                width: "10px",
                                                height: "10px",
                                                backgroundColor: "#2D3B36",
                                                borderRadius: "50%",
                                            }}
                                        ></motion.div>
                                        <span
                                            style={{
                                                fontFamily: "Inter",
                                                fontWeight: 400,
                                                fontStyle: "normal",
                                                fontSize: "16px",
                                                lineHeight: "100%",
                                                letterSpacing: "0%",
                                            }}
                                        >
                                            Why Our Products
                                        </span>
                                    </motion.div>
                                </motion.div>

                                {/* Main heading */}
                                <h2
                                    className="mb-6 leading-tight"
                                    style={{
                                        fontFamily: "Inter",
                                        fontWeight: 400,
                                        fontStyle: "normal",
                                        fontSize: "36px",
                                        lineHeight: "40px",
                                        letterSpacing: "-2%",
                                    }}
                                >
                                    YOUR SKIN DESERVES
                                    <br />
                                    THE BEST CARE.
                                </h2>

                                {/* Description */}
                                <p
                                    className="text-gray-600 mb-8 leading-relaxed text-center px-2"
                                    style={{
                                        fontFamily: "Inter",
                                        fontWeight: 400,
                                        fontStyle: "normal",
                                        fontSize: "16px",
                                        lineHeight: "22px",
                                        letterSpacing: "-1%",
                                    }}
                                >
                                    Discover our premium skincare collection, featuring products
                                    designed to rejuvenate, protect, and pamper your skin.
                                </p>


                                {/* Features list */}
                                <motion.div className="space-y-8">
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
                                    ].map(({ number, title, desc }) => (
                                        <motion.div key={number} className="flex items-start space-x-6">
                                            {/* Number on the left */}
                                            <span
                                                className="text-[32px] font-bold bg-clip-text text-transparent leading-none"
                                                style={{
                                                    backgroundImage: "linear-gradient(180deg, #293330 0%, #FEFFF4 100%)",
                                                    fontFamily: "Inter",
                                                }}
                                            >
                                                {number}
                                            </span>

                                            {/* Text Content on the right */}
                                            <motion.div>
                                                <h3
                                                    className="text-gray-800 mb-2"
                                                    style={{
                                                        fontFamily: "Inter",
                                                        fontWeight: 400,
                                                        fontStyle: "normal",
                                                        fontSize: "28px",
                                                        lineHeight: "32px",
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
                                                        fontStyle: "normal",
                                                        fontSize: "16px",
                                                        lineHeight: "22px",
                                                        letterSpacing: "-1%",
                                                    }}
                                                >
                                                    {desc}
                                                </p>
                                            </motion.div>
                                        </motion.div>
                                    ))}
                                </motion.div>
                                <motion.div className="relative w-full px-4 sm:px-8">
                                    {/* Image */}
                                    <motion.div className="mb-8 flex justify-center mt-8 w-full">
                                        <motion.div
                                            className="rounded-2xl relative overflow-hidden flex items-center justify-center w-full max-w-[700px]"
                                            style={{ height: "350px" }}
                                        >
                                            <img
                                                src={girl2}
                                                alt="Woman with Face Mask"
                                                className="w-full h-full object-cover"
                                            />
                                        </motion.div>
                                    </motion.div>

                                    {/* Award notification */}
                                    <motion.div
                                        className="absolute left-1/2 transform -translate-x-1/2 bg-white bg-opacity-90 p-4 shadow-lg flex items-center space-x-5 w-[90%] sm:w-auto"
                                        style={{
                                            bottom: "5%",
                                            borderRadius: "200px",
                                        }}
                                    >
                                        <motion.div
                                            className="w-14 h-14 flex-shrink-0 rounded-full flex items-center justify-center"
                                            style={{
                                                border: "1px dashed #000",
                                            }}
                                        >
                                            <motion.div
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
                                            </motion.div>
                                        </motion.div>

                                        <motion.div>
                                            <p
                                                style={{
                                                    fontFamily: "Inter",
                                                    fontWeight: 400,
                                                    fontStyle: "normal",
                                                    fontSize: "16px",
                                                    lineHeight: "100%",
                                                    letterSpacing: "0%",
                                                    color: "#1F2937",
                                                }}
                                            >
                                                Best Skin Care Product<br />
                                                Award Winning
                                            </p>
                                        </motion.div>
                                    </motion.div>
                                </motion.div>


                                {/* Bottom info */}
                                <motion.div className="flex justify-between items-center mt-8 px-4">
                                    <p
                                        className="text-gray-600"
                                        style={{
                                            fontFamily: "Inter",
                                            fontWeight: 400,
                                            fontStyle: "normal",
                                            fontSize: "16px",
                                            lineHeight: "100%",
                                            letterSpacing: "-2%",
                                            textTransform: "uppercase",
                                        }}
                                    >
                                        SINCE 2001
                                    </p>

                                    <button
                                        style={{
                                            fontFamily: "Inter",
                                            fontWeight: 400,
                                            fontStyle: "normal",
                                            fontSize: "16px",
                                            lineHeight: "100%",
                                            letterSpacing: "-2%",
                                            textTransform: "uppercase",
                                            color: "#1F2937",
                                        }}
                                        className="hover:underline"
                                    >
                                        LEARN MORE
                                    </button>
                                </motion.div>
                            </motion.div>
                        </section>

                        {/* Best Selling Products Section - Mobile */}
                        <section className="px-4 py-12">
                            <motion.div className="max-w-full mx-auto">
                                {/* Badge */}
                                <motion.div className="flex mb-6">
                                    <motion.div className="inline-flex items-center gap-3 bg-white border border-gray-300 rounded-full px-4 py-2 text-sm text-gray-700">
                                        <motion.div
                                            style={{
                                                width: "10px",
                                                height: "10px",
                                                backgroundColor: "#2D3B36",
                                                borderRadius: "50%",
                                            }}
                                        ></motion.div>
                                        <span
                                            style={{
                                                fontFamily: "Inter",
                                                fontWeight: 400,
                                                fontStyle: "normal",
                                                fontSize: "16px",
                                                lineHeight: "100%",
                                                letterSpacing: "0%",
                                            }}
                                        >
                                            Best Selling Products
                                        </span>
                                    </motion.div>
                                </motion.div>

                                {/* Title */}
                                <motion.div className="mb-8">
                                    <h2
                                        style={{
                                            fontFamily: "Inter",
                                            fontWeight: 400,
                                            fontSize: "28px",
                                            lineHeight: "32px",
                                            letterSpacing: "-1%",
                                            color: "#1F2937",
                                        }}
                                    >
                                        Skincare That Brings Out
                                        <br />
                                        Your Natural Radiance
                                    </h2>
                                </motion.div>

                                {/* Navigation arrows */}
                                <motion.div className="px-4">
                                    {/* Product Card */}
                                    <motion.div
                                        className="relative max-w-[320px] mx-auto rounded-2xl overflow-hidden shadow-sm"
                                        style={{
                                            backgroundColor: product[currentIndex].bgColor,
                                            height: "300px",
                                        }}
                                    >
                                        <img
                                            src={product[currentIndex].image}
                                            alt={product[currentIndex].title}
                                            className="w-full h-full object-cover"
                                        />

                                        {/* Info Box */}
                                        <motion.div
                                            className="absolute bottom-4 left-4 right-4 backdrop-blur-sm rounded-lg p-4"
                                            style={{
                                                backgroundColor: product[currentIndex].isDark
                                                    ? "rgba(0, 0, 0, 0.7)"
                                                    : "rgba(255, 255, 255, 0.9)",
                                            }}
                                        >
                                            <motion.div className="flex justify-between items-start">
                                                <motion.div>
                                                    <h3
                                                        style={{
                                                            fontFamily: "Inter",
                                                            fontWeight: 400,
                                                            fontSize: "18px",
                                                            lineHeight: "100%",
                                                            letterSpacing: "-3%",
                                                            color: product[currentIndex].isDark ? "#FFFFFF" : "#1F2937",
                                                            marginBottom: "8px",
                                                        }}
                                                    >
                                                        {product[currentIndex].title}
                                                    </h3>
                                                    <p
                                                        style={{
                                                            fontFamily: "Inter",
                                                            fontWeight: 400,
                                                            fontSize: "14px",
                                                            lineHeight: "100%",
                                                            letterSpacing: "-3%",
                                                            color: product[currentIndex].isDark
                                                                ? "rgba(255, 255, 255, 0.7)"
                                                                : "#2D3B3680",
                                                        }}
                                                    >
                                                        {product[currentIndex].price}
                                                    </p>
                                                </motion.div>
                                                <button
                                                    className="w-[40px] h-[40px] border border-gray-300 rounded flex items-center justify-center hover:bg-gray-50"
                                                    style={{
                                                        backgroundColor: product[currentIndex].isDark
                                                            ? "rgba(255, 255, 255, 0.1)"
                                                            : "rgba(45, 59, 54, 0.1)",
                                                    }}
                                                >
                                                    <img
                                                        src={product[currentIndex].isDark ? cartwhite : cart}
                                                        alt="Cart"
                                                        className="w-5 h-5"
                                                    />
                                                </button>

                                            </motion.div>
                                        </motion.div>
                                    </motion.div>

                                    {/* Navigation Buttons */}
                                    <motion.div className="flex justify-center space-x-2 mt-6">
                                        <button
                                            onClick={scrollLeft}
                                            className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-50"
                                        >
                                            <span className="text-gray-600">←</span>
                                        </button>
                                        <button
                                            onClick={scrollRight}
                                            className="w-10 h-10 rounded-full bg-gray-800 text-white flex items-center justify-center hover:bg-gray-700"
                                        >
                                            <span>→</span>
                                        </button>
                                    </motion.div>
                                </motion.div>
                            </motion.div>
                        </section>

                        {/* Feel Beautiful Section - Mobile */}
                        <section className="px-4 py-12">
                            <motion.div className="max-w-full mx-auto">
                                {/* Title */}
                                <motion.div className=" mb-6">
                                    <h2
                                        style={{
                                            fontFamily: "Inter",
                                            fontWeight: 400,
                                            fontStyle: "normal",
                                            fontSize: "28px",
                                            lineHeight: "32px",
                                            letterSpacing: "-2%",
                                            color: "#1F2937",
                                        }}
                                    >
                                        Feel Beautiful Inside <br /> and Out
                                        with Every product[currentIndex].
                                    </h2>
                                </motion.div>

                                {/* Category Filter Buttons - Mobile scroll */}
                                <motion.div className="grid grid-cols-2 gap-3 mb-8">
                                    {[
                                        { label: "NEW ARRIVAL", filled: true },
                                        { label: "CLEANSING" },
                                        { label: "ACNE FIGHTER" },
                                        { label: "ANTI AGEING" },
                                    ].map(({ label, filled }) => (
                                        <button
                                            key={label}
                                            className={`px-4 py-2 rounded-full text-sm whitespace-nowrap ${filled
                                                ? "text-white"
                                                : "border border-gray-300 text-gray-700 hover:bg-gray-50"
                                                }`}
                                            style={{
                                                backgroundColor: filled ? "#2D3B36" : "transparent",
                                                fontFamily: "Inter",
                                                fontWeight: 400,
                                                fontStyle: "normal",
                                                fontSize: "14px",
                                                lineHeight: "100%",
                                                letterSpacing: "0%",
                                            }}
                                        >
                                            {label}
                                        </button>
                                    ))}
                                </motion.div>

                                {/* Product Grid - Single column for mobile */}
                                <motion.div>

                                    {/* Horizontal Scroll Container */}
                                    <motion.div className="px-4">
                                        {/* Product Card */}
                                        <motion.div
                                            className="relative max-w-[320px] mx-auto rounded-2xl overflow-hidden shadow-sm"
                                            style={{
                                                backgroundColor: product[currentIndex2].bgColor,
                                                height: "300px",
                                            }}
                                        >
                                            <img
                                                src={product[currentIndex2].image}
                                                alt={product[currentIndex2].title}
                                                className="w-full h-full object-cover"
                                            />

                                            {/* Info Box */}
                                            <motion.div
                                                className="absolute bottom-4 left-4 right-4 backdrop-blur-sm rounded-lg p-4"
                                                style={{
                                                    backgroundColor: "rgba(255, 255, 255, 0.9)",
                                                }}
                                            >
                                                <motion.div className="flex justify-between items-start">
                                                    <motion.div>
                                                        <h3
                                                            style={{
                                                                fontFamily: "Inter",
                                                                fontWeight: 400,
                                                                fontSize: "18px",
                                                                lineHeight: "100%",
                                                                letterSpacing: "-3%",
                                                                color: "#1F2937",
                                                                marginBottom: "8px",
                                                            }}
                                                        >
                                                            {product[currentIndex2].title}
                                                        </h3>
                                                        <p
                                                            style={{
                                                                fontFamily: "Inter",
                                                                fontWeight: 400,
                                                                fontSize: "14px",
                                                                lineHeight: "100%",
                                                                letterSpacing: "-3%",
                                                                color: "#2D3B3680"
                                                            }}
                                                        >
                                                            {product[currentIndex2].price}
                                                        </p>
                                                    </motion.div>
                                                    <button
                                                        className="w-[40px] h-[40px] border border-gray-300 rounded flex items-center justify-center hover:bg-gray-50"
                                                        style={{
                                                            backgroundColor: "rgba(45, 59, 54, 0.1)",
                                                        }}
                                                    >
                                                        <img
                                                            src={cart}
                                                            alt="Cart"
                                                            className="w-5 h-5"
                                                        />
                                                    </button>

                                                </motion.div>
                                            </motion.div>
                                        </motion.div>

                                        {/* Navigation Buttons */}
                                        <motion.div className="flex justify-center space-x-2 mt-6">
                                            <button
                                                onClick={scrollLeft2}
                                                className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-50"
                                            >
                                                <span className="text-gray-600">←</span>
                                            </button>
                                            <button
                                                onClick={scrollRight2}
                                                className="w-10 h-10 rounded-full bg-gray-800 text-white flex items-center justify-center hover:bg-gray-700"
                                            >
                                                <span>→</span>
                                            </button>
                                        </motion.div>

                                    </motion.div>
                                </motion.div>
                            </motion.div>
                        </section>

                        {/* FAQ Section - Mobile */}
                        <section className="px-4 py-12">
                            <motion.div className="max-w-full mx-auto">

                                {/* FAQ Content */}
                                <motion.div>
                                    <motion.div className="flex mb-6">
                                        <motion.div className="inline-flex items-center gap-3 bg-white border border-gray-300 rounded-full px-4 py-2 text-sm text-gray-700">
                                            <motion.div
                                                style={{
                                                    width: "10px",
                                                    height: "10px",
                                                    backgroundColor: "#2D3B36",
                                                    borderRadius: "50%",
                                                }}
                                            ></motion.div>
                                            <h3
                                                style={{
                                                    fontFamily: "Inter",
                                                    fontWeight: 400,
                                                    fontStyle: "normal",
                                                    fontSize: "14px",
                                                    lineHeight: "100%",
                                                    letterSpacing: "0%",
                                                }}
                                            >
                                                Frequently Asked Question
                                            </h3>
                                        </motion.div>
                                    </motion.div>

                                    <h2
                                        className="mb-8"
                                        style={{
                                            fontFamily: "Inter",
                                            fontWeight: 400,
                                            fontStyle: "normal",
                                            fontSize: "28px",
                                            lineHeight: "32px",
                                            letterSpacing: "-2%",
                                            color: "#1F2937",
                                        }}
                                    >
                                        Answers to Your
                                        <br />
                                        Skincare Questions,
                                        <br />
                                        All in One Place.
                                    </h2>

                                    {/* FAQ Items */}
                                    <motion.div className="space-y-3">
                                        {[
                                            {
                                                question: "Are your products safe for sensitive skin?",
                                                isOpen: false,
                                            },
                                            {
                                                question: "Are your products cruelty-free?",
                                                isOpen: true,
                                                answer:
                                                    "Absolutely! All our products are cruelty-free, and most are vegan. Check inmotion.dividual product details for specifics.",
                                            },
                                            {
                                                question: "What's your return policy?",
                                                isOpen: false,
                                            },
                                            {
                                                question: "Do you ship internationally?",
                                                isOpen: false,
                                            },
                                            {
                                                question: "How do I choose the right product?",
                                                isOpen: false,
                                            },
                                        ].map((faq, index) => (
                                            <motion.div
                                                key={index}
                                                className="rounded-lg border"
                                                style={{
                                                    border: "1px solid #2D3B36",
                                                }}
                                            >
                                                <button className="w-full px-4 py-3 text-left flex justify-between items-center hover:bg-gray-50">
                                                    <h3
                                                        style={{
                                                            fontFamily: "Inter",
                                                            fontWeight: 400,
                                                            fontStyle: "normal",
                                                            fontSize: "16px",
                                                            lineHeight: "20px",
                                                            letterSpacing: "0%",
                                                            color: "#2D3B36",
                                                        }}
                                                    >
                                                        {faq.question}
                                                    </h3>

                                                    <img
                                                        src={faq.isOpen ? minus : plus}
                                                        alt={faq.isOpen ? "Minus" : "Plus"}
                                                        className="w-4 h-4"
                                                    />
                                                </button>
                                                {faq.isOpen && (
                                                    <motion.div className="px-4 pb-3">
                                                        <p
                                                            style={{
                                                                fontFamily: "Inter",
                                                                fontWeight: 400,
                                                                fontStyle: "normal",
                                                                fontSize: "14px",
                                                                lineHeight: "20px",
                                                                letterSpacing: "0%",
                                                                color: "#525349",
                                                            }}
                                                        >
                                                            {faq.answer}
                                                        </p>
                                                    </motion.div>
                                                )}
                                            </motion.div>
                                        ))}
                                    </motion.div>

                                </motion.div>
                            </motion.div>
                            <motion.div className="relative h-auto w-full" style={{ marginTop: "2rem" }}>
                                <motion.div className="rounded-2xl overflow-hidden bg-gray-200">
                                    <motion.div
                                        className="bg-gray-300 flex flex-col items-center justify-center relative"
                                        style={{ borderRadius: "20px" }}
                                    >
                                        <img
                                            src={wash2}
                                            alt="Face Wash"
                                            className="w-full object-cover max-h-[400px]"
                                        />

                                        {/* Help Button */}
                                        <motion.div
                                            className="absolute bottom-4 left-1/2 transform -translate-x-1/2 backdrop-blur-sm rounded-full px-6 py-3 flex justify-center items-center gap-4 shadow-md min-w-[250px] sm:min-w-[150px]"
                                            style={{
                                                backgroundColor: "#EFF5E1",

                                            }}
                                        >
                                            <motion.div
                                                className="w-12 h-12 rounded-full flex items-center justify-center"
                                                style={{ border: "1px dashed #2D3B36" }}
                                            >
                                                <motion.div
                                                    className="w-10 h-10 rounded-full flex items-center justify-center"
                                                    style={{ backgroundColor: "#2D3B36", padding: "4px" }}
                                                >
                                                    <img
                                                        src={headphone}
                                                        alt="Inner Icon"
                                                        className="w-full h-full object-cover"
                                                    />
                                                </motion.div>
                                            </motion.div>

                                            <motion.div>
                                                <p
                                                    className="text-sm sm:text-base leading-snug text-center"
                                                    style={{
                                                        fontFamily: "Inter",
                                                        fontWeight: 400,
                                                        color: "#1F2937",
                                                        margin: 0,
                                                    }}
                                                >
                                                    24/7 We're Here
                                                    <br />
                                                    to Help You
                                                </p>
                                            </motion.div>
                                        </motion.div>

                                    </motion.div>
                                </motion.div>
                            </motion.div>

                        </section>

                        {/* Footer - Mobile */}
                        <footer className="relative w-full px-4 py-12 bg-[#2D3B36]">
                            <motion.div className="max-w-[1400px] mx-auto relative z-10 space-y-10">

                                {/* Heading */}
                                <div>
                                    <h2
                                        style={{
                                            fontFamily: "Inter",
                                            fontWeight: 400,
                                            fontSize: "32px",
                                            lineHeight: "36px",
                                            color: "#FFFFFF",
                                        }}
                                    >
                                        Join The Skincare
                                        <br />
                                        Community Now.
                                    </h2>
                                </div>

                                {/* Row 1: Facebook | Instagram | YouTube */}
                                <div className="flex w-full justify-between items-center text-white px-2">
                                    <div className="text-left text-lg font-medium">Facebook</div>
                                    <div className="text-center text-lg font-medium">Instagram</div>
                                    <div className="text-right text-lg font-medium">YouTube</div>
                                </div>

                                {/* Row 2: Get in Touch */}
                                <div className="w-full text-left px-2">
                                    <p className="text-white text-base font-medium">Get in Touch</p>
                                    <p className="text-white text-xl font-semibold">contact.skincare.com</p>
                                </div>

                                {/* Row 4: Terms | Privacy | Cookies */}
                                <div className="flex w-full justify-between items-center text-white px-2">
                                    <div className="text-left text-sm">Terms of Service</div>
                                    <div className="text-center text-sm">Privacy Policy</div>
                                    <div className="text-right text-sm">Cookies Policy</div>
                                </div>

                                {/* SKINCARE Background Text */}
                                <div className="w-full pointer-events-none">
                                    <h2
                                        className="uppercase font-extrabold leading-[100%] text-center opacity-10 whitespace-nowrap"
                                        style={{
                                            fontFamily: "Inter",
                                            fontSize: "130px",
                                            color: "#FFFFFF",
                                        }}
                                    >
                                        SKINCARE
                                    </h2>
                                </div>
                            </motion.div>
                        </footer>

                    </motion.div >
                )}
            </AnimatePresence>
        </>
    );
}

export default Tablet;