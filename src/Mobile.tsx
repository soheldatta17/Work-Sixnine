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
import FAQSection from "./components/FAQSection";

function Mobile() {

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
                    <div className="w-full min-h-screen" style={{ backgroundColor: "#FEFFF4" }}>

                        {/* Mobile Header */}
                        <header
                            className="flex items-center justify-between px-4 py-4"
                            style={{ backgroundColor: "#eff5e1" }}
                        >
                            <div
                                style={{
                                    fontFamily: "Inter",
                                    fontWeight: 800,
                                    fontStyle: "normal",
                                    fontSize: "24px",
                                    lineHeight: "100%",
                                    letterSpacing: "0%",
                                    textTransform: "uppercase",
                                    color: "#1F2937",
                                }}
                            >
                                SKINCARE
                            </div>

                            <div className="flex items-center space-x-3">
                                <div
                                    className="flex items-center justify-center w-10 h-10 rounded-full"
                                    style={{ backgroundColor: "#F8FEE5" }}
                                >
                                    <img src={bag} alt="bag icon" className="w-5 h-5 object-contain" />
                                </div>
                                <div
                                    className="flex items-center justify-center w-10 h-10 rounded-full"
                                    style={{ backgroundColor: "#F8FEE5" }}
                                >
                                    <img src={heart} alt="heart icon" className="w-5 h-5 object-contain" />
                                </div>
                                <div
                                    className="flex items-center justify-center w-10 h-10 rounded-full"
                                    style={{ backgroundColor: "#F8FEE5" }}
                                >
                                    <img src={person} alt="person icon" className="w-5 h-5 object-contain" />
                                </div>
                            </div>

                        </header>

                        {/* Mobile Hero Section */}
                        <section className="py-8" style={{ backgroundColor: "#eff5e1" }}>
                            {/* Main heading */}
                            <div className="w-full mx-0 px-0 text-left mb-8">
                                <h1
                                    style={{
                                        fontFamily: "Inter",
                                        fontWeight: 900,
                                        fontStyle: "normal", // Black is a weight (900), not a style
                                        fontSize: "75px",
                                        lineHeight: "60px",
                                        letterSpacing: "-5%",
                                        textTransform: "uppercase",
                                        color: "#2D3B36",
                                        margin: 0,
                                        padding: 0,
                                    }}
                                >
                                    Glowwww
                                    <br />
                                    Naturally
                                </h1>
                            </div>

                            {/* Description text */}
                            <p
                                className="text-gray-700 text-center leading-relaxed mb-8 px-4"
                                style={{
                                    fontFamily: "Inter",
                                    fontWeight: 400,
                                    fontSize: "16px",
                                    lineHeight: "24px",
                                }}
                            >
                                Transform your skincare routine with premium products that restore,
                                protect, and enhance your natural glow every day.
                            </p>

                            {/* Background SKINCARE text section */}
                            <section
                                className="px-4 py-12 relative"
                                style={{ backgroundColor: "#eff5e1" }}
                            >


                                {/* Central image and notification */}
                                <div className="relative z-10 flex justify-center items-center">
                                    <div className="relative">
                                        {/* Main circular image */}
                                        <div className="w-80 h-80 rounded-lg overflow-hidden relative flex items-center justify-center">
                                            <img
                                                src={girl}
                                                alt="Girl"
                                                className="w-full h-full object-cover"
                                                style={{
                                                    borderRadius: "30px",
                                                }}
                                            />
                                        </div>

                                        {/* Notification popup */}
                                        <motion.div
                                            initial={{ x: -50, opacity: 0 }}
                                            whileInView={{ x: 0, opacity: 1 }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 0.6, delay: 0.3 }}
                                            className="absolute bottom-4 left-2 right-2 bg-opacity-90 shadow-lg"
                                            style={{
                                                backgroundColor: "#EFF5E1",
                                                borderRadius: "200px",
                                                padding: "0.75rem",
                                            }}
                                        >
                                            <div className="flex items-center gap-3 w-full">
                                                {/* Icon with dashed border */}
                                                <div
                                                    className="w-6 h-6 flex-shrink-0 rounded-full flex items-center justify-center"
                                                    style={{
                                                        border: "1px dashed #000",
                                                    }}
                                                >
                                                    <div
                                                        className="w-4 h-4 rounded-full overflow-hidden"
                                                        style={{
                                                            backgroundColor: "#D1D5DB",
                                                        }}
                                                    >
                                                        <img
                                                            src={wash}
                                                            alt="Inner Circle Icon"
                                                            className="w-full h-full object-cover"
                                                        />
                                                    </div>
                                                </div>

                                                {/* Text */}
                                                <p
                                                    className="flex-1"
                                                    style={{
                                                        fontFamily: "Inter",
                                                        fontWeight: 400,
                                                        fontStyle: "normal",
                                                        fontSize: "14px",
                                                        lineHeight: "18px",
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
                                {/* Background SKINCARE text */}
                                {/* Background SKINCARE text */}
                                <div className="absolute inset-x-0 bottom-0 flex justify-center overflow-hidden">
                                    <h2
                                        className="font-extrabold uppercase leading-[100%] tracking-[0%] opacity-100 whitespace-nowrap text-center"
                                        style={{
                                            fontFamily: "Inter",
                                            fontWeight: 800,
                                            fontStyle: "normal",
                                            fontSize: "85px",
                                            color: "#2D3B36",
                                        }}
                                    >
                                        SKINCARE
                                    </h2>
                                </div>

                            </section>

                        </section>

                        {/* Product image */}
                        <div className="flex justify-center mb-6">
                            <img
                                src={wash}
                                alt="Wash Product"
                            />
                        </div>



                        {/* Shop Now Button */}
                        <div className="text-center">
                            <button
                                className="text-white px-8 py-3 rounded-full hover:bg-gray-700 transition-colors"
                                style={{
                                    backgroundColor: "#2D3B36",
                                    fontFamily: "Inter",
                                    fontWeight: 400,
                                    fontStyle: "normal",
                                    fontSize: "18px",
                                    lineHeight: "100%",
                                    letterSpacing: "0%",
                                }}
                            >
                                Shop Now
                            </button>
                        </div>


                        {/* Bottom Description */}
                        <section className="px-4 py-8">
                            <div className="mx-auto">
                                <motion.p
                                    initial={{ x: -50, opacity: 0 }}
                                    whileInView={{ x: 0, opacity: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6, delay: 0.3 }}
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
                                </motion.p>
                            </div>
                        </section>

                        {/* Why Our Products Section - Mobile */}
                        <section className="px-4 py-12">
                            <div className="max-w-full mx-auto">
                                {/* Badge */}
                                <motion.div
                                    initial={{ x: -50, opacity: 0 }}
                                    whileInView={{ x: 0, opacity: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6, delay: 0.3 }}
                                    className="flex mb-6">
                                    <div className="inline-flex items-center gap-3 bg-white border border-gray-300 rounded-full px-4 py-2 text-sm text-gray-700">
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
                                                fontStyle: "normal",
                                                fontSize: "16px",
                                                lineHeight: "100%",
                                                letterSpacing: "0%",
                                            }}
                                        >
                                            Why Our Products
                                        </span>
                                    </div>
                                </motion.div>
                                <motion.div
                                    initial={{ x: -50, opacity: 0 }}
                                    whileInView={{ x: 0, opacity: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6, delay: 0.3 }}
                                >
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
                                    <div className="space-y-8">
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
                                            <div key={number} className="flex items-start space-x-6">
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
                                                <div>
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
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </motion.div>
                                <div className="relative">
                                    {/* Image */}
                                    <motion.div
                                        initial={{ x: -50, opacity: 0 }}
                                        whileInView={{ x: 0, opacity: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.6, delay: 0.3 }}
                                        className="mb-8 flex justify-center mt-8">
                                        <div
                                            className="rounded-2xl relative overflow-hidden flex items-center justify-center"
                                            style={{ width: "300px", height: "350px" }}
                                        >
                                            <img
                                                src={girl2}
                                                alt="Woman with Face Mask"
                                                className="w-full h-full object-cover"
                                            />
                                        </div>
                                    </motion.div>
                                    {/* Award notification */}
                                    <motion.div
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.6, delay: 0.3 }}
                                        className="absolute left-1/2 transform -translate-x-1/2 bg-white bg-opacity-90 p-4 shadow-lg flex items-center space-x-5 w-[80%] sm:w-auto"
                                        style={{
                                            bottom: "5%",
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
                                                    fontSize: "16px",
                                                    lineHeight: "100%",
                                                    letterSpacing: "0%",
                                                    color: "#1F2937",
                                                }}
                                            >
                                                Best Skin Care Product<br />
                                                Award Winning
                                            </p>

                                        </div>
                                    </motion.div>
                                </div>


                                {/* Bottom info */}
                                <motion.div
                                    initial={{ x: -50, opacity: 0 }}
                                    whileInView={{ x: 0, opacity: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6, delay: 0.3 }}
                                    className="flex justify-between items-center mt-8 px-4">
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
                            </div>
                        </section>

                        {/* Best Selling Products Section - Mobile */}
                        <section className="px-4 py-12">
                            <div className="max-w-full mx-auto">
                                {/* Badge */}
                                <motion.div
                                    initial={{ x: -50, opacity: 0 }}
                                    whileInView={{ x: 0, opacity: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6, delay: 0.3 }}
                                    className="flex mb-6">
                                    <div className="inline-flex items-center gap-3 bg-white border border-gray-300 rounded-full px-4 py-2 text-sm text-gray-700">
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
                                                fontStyle: "normal",
                                                fontSize: "16px",
                                                lineHeight: "100%",
                                                letterSpacing: "0%",
                                            }}
                                        >
                                            Best Selling Products
                                        </span>
                                    </div>
                                </motion.div>

                                {/* Title */}
                                <motion.div
                                    initial={{ x: -50, opacity: 0 }}
                                    whileInView={{ x: 0, opacity: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6, delay: 0.3 }}
                                    className="mb-8">
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
                                <div className="px-4">
                                    {/* Product Card */}
                                    <div
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
                                        <div
                                            className="absolute bottom-4 left-4 right-4 backdrop-blur-sm rounded-lg p-4"
                                            style={{
                                                backgroundColor: product[currentIndex].isDark
                                                    ? "rgba(0, 0, 0, 0.7)"
                                                    : "rgba(255, 255, 255, 0.9)",
                                            }}
                                        >
                                            <div className="flex justify-between items-start">
                                                <div>
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
                                                </div>
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

                                            </div>
                                        </div>
                                    </div>

                                    {/* Navigation Buttons */}
                                    <div className="flex justify-center space-x-2 mt-6">
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
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* Feel Beautiful Section - Mobile */}
                        <section className="px-4 py-12">
                            <div className="max-w-full mx-auto">
                                {/* Title */}
                                <motion.div
                                    initial={{ x: -50, opacity: 0 }}
                                    whileInView={{ x: 0, opacity: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6, delay: 0.3 }}
                                    className=" mb-6">
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
                                        with Every Product.
                                    </h2>
                                </motion.div>

                                {/* Category Filter Buttons - Mobile scroll */}
                                <div className="grid grid-cols-2 gap-3 mb-8">
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
                                </div>

                                {/* Product Grid - Single column for mobile */}
                                <div>

                                    {/* Horizontal Scroll Container */}
                                    <div className="px-4">
                                        {/* Product Card */}
                                        <div
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
                                            <div
                                                className="absolute bottom-4 left-4 right-4 backdrop-blur-sm rounded-lg p-4"
                                                style={{
                                                    backgroundColor: "rgba(255, 255, 255, 0.9)",
                                                }}
                                            >
                                                <div className="flex justify-between items-start">
                                                    <div>
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
                                                    </div>
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

                                                </div>
                                            </div>
                                        </div>

                                        {/* Navigation Buttons */}
                                        <div className="flex justify-center space-x-2 mt-6">
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
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* FAQ Section - Mobile */}
                        <section className="px-4 py-12">
                            <div className="max-w-full mx-auto">

                                {/* FAQ Content */}
                                <div>
                                    <div className="flex mb-6">
                                        <motion.div
                                            initial={{ x: -50, opacity: 0 }}
                                            whileInView={{ x: 0, opacity: 1 }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 0.6, delay: 0.3 }}
                                            className="inline-flex items-center gap-3 bg-white border border-gray-300 rounded-full px-4 py-2 text-sm text-gray-700">

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
                                                    fontStyle: "normal",
                                                    fontSize: "14px",
                                                    lineHeight: "100%",
                                                    letterSpacing: "0%",
                                                }}
                                            >
                                                Frequently Asked Question
                                            </h3>
                                        </motion.div>
                                    </div>
                                    <motion.div
                                        initial={{ x: -50, opacity: 0 }}
                                        whileInView={{ x: 0, opacity: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.6, delay: 0.3 }}
                                    >
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
                                    </motion.div>
                                    <FAQSection plus={plus} minus={minus} />
                                </div>
                            </div>
                            <div className="relative h-auto w-full" style={{ marginTop: "2rem" }}>
                                <div className="rounded-2xl overflow-hidden bg-gray-200">
                                    <motion.div
                                        initial={{ x: -50, opacity: 0 }}
                                        whileInView={{ x: 0, opacity: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.6, delay: 0.3 }}
                                        className="bg-gray-300 flex flex-col items-center justify-center relative"
                                        style={{ borderRadius: "20px" }}
                                    >
                                        <img
                                            src={wash2}
                                            alt="Face Wash"
                                            className="w-full object-cover max-h-[400px]"
                                        />

                                        {/* Help Button */}
                                        <div
                                            className="absolute bottom-4 left-1/2 transform -translate-x-1/2 backdrop-blur-sm rounded-full px-6 py-3 flex justify-center items-center gap-4 shadow-md min-w-[250px] sm:min-w-[150px]"
                                            style={{
                                                backgroundColor: "#EFF5E1",

                                            }}
                                        >
                                            <div
                                                className="w-12 h-12 rounded-full flex items-center justify-center"
                                                style={{ border: "1px dashed #2D3B36" }}
                                            >
                                                <div
                                                    className="w-10 h-10 rounded-full flex items-center justify-center"
                                                    style={{ backgroundColor: "#2D3B36", padding: "4px" }}
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
                                            </div>
                                        </div>

                                    </motion.div>
                                </div>
                            </div>

                        </section>

                        {/* Footer - Mobile */}
                        <motion.footer
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                            className="relative px-4 py-12"
                            style={{ backgroundColor: "#2D3B36" }}
                        >
                            <div className="max-w-full mx-auto relative z-10">
                                {/* Main Footer Content */}
                                <div className="mb-12">
                                    {/* Left */}
                                    <div className="mb-8 text-center">
                                        <h2
                                            style={{
                                                fontFamily: "Inter",
                                                fontWeight: 400,
                                                fontStyle: "regular",
                                                fontSize: "32px",
                                                lineHeight: "36px",
                                                letterSpacing: "-2%",
                                                color: "#FFFFFF",
                                            }}
                                        >
                                            Join The Skincare
                                            <br />
                                            Community Now.
                                        </h2>
                                    </div>
                                    <div className="flex justify-between items-start flex-wrap px-4 md:px-12">
                                        {/* Social - Centered */}
                                        <div className="w-full flex justify-evenly md:justify-between max-w-md mx-auto mb-6 md:mb-0">
                                            {["Facebook", "Instagram", "YouTube"].map((text) => (
                                                <a
                                                    key={text}
                                                    href="#"
                                                    className="text-white hover:text-gray-300"
                                                    style={{
                                                        fontFamily: "Inter",
                                                        fontWeight: 400,
                                                        fontStyle: "normal",
                                                        fontSize: "16px",
                                                        lineHeight: "100%",
                                                        letterSpacing: "0%",
                                                    }}
                                                >
                                                    {text}
                                                </a>
                                            ))}
                                        </div>

                                        {/* Get in Touch - Right */}
                                        <div className="text-right ml-auto mt-4 md:mt-0">
                                            <p
                                                className="mb-1"
                                                style={{
                                                    fontFamily: "Inter",
                                                    fontWeight: 400,
                                                    fontStyle: "normal",
                                                    fontSize: "14px",
                                                    lineHeight: "100%",
                                                    letterSpacing: "-2%",
                                                    color: "#FFFFFF",
                                                    marginRight: "2.5rem",
                                                }}
                                            >
                                                Get in Touch
                                            </p>

                                        </div>
                                        <div className="w-full md:w-auto flex justify-center md:justify-start mb-12 md:mb-0 space-x-6 mx-auto">
                                            <p
                                                style={{
                                                    fontFamily: "Inter",
                                                    fontWeight: 400,
                                                    fontStyle: "normal",
                                                    fontSize: "24px",
                                                    lineHeight: "100%",
                                                    letterSpacing: "-2%",
                                                    color: "#FFFFFF",
                                                }}
                                            >
                                                contact.skincare.com
                                            </p>
                                        </div>
                                        <div className="w-full md:w-auto flex justify-center md:justify-start md:mt-0 space-x-6 mx-auto">
                                            {["Terms of Service", "Privacy Policy", "Cookies Policy"].map((text) => (
                                                <a
                                                    key={text}
                                                    href="#"
                                                    className="text-white hover:text-gray-300"
                                                    style={{
                                                        fontFamily: "Inter",
                                                        fontWeight: 400,
                                                        fontStyle: "normal",
                                                        fontSize: "16px",
                                                        lineHeight: "100%",
                                                        letterSpacing: "0%",
                                                    }}
                                                >
                                                    {text}
                                                </a>
                                            ))}
                                        </div>
                                    </div>

                                </div>

                            </div>

                            {/* SKINCARE - Background text */}
                            <div className="w-full flex justify-center">
                                <h2
                                    className="font-extrabold uppercase leading-[100%] tracking-[0%] opacity-10 text-center whitespace-nowrap"
                                    style={{
                                        fontFamily: "Inter",
                                        fontWeight: 800,
                                        fontStyle: "normal",
                                        fontSize: "80px",
                                        color: "#FFFFFF",
                                    }}
                                >
                                    SKINCARE
                                </h2>
                            </div>
                        </motion.footer >
                    </div >
                )}
            </AnimatePresence >
        </>
    );
}

export default Mobile;