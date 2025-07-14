import { ShoppingBag, User, RefreshCw } from "lucide-react";
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

function App() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: "#FEFFF4" }}>
      {/* Header */}
      <header
        className="flex items-center justify-between px-8 py-6"
        style={{ backgroundColor: "#eff5e1" }}
      >
        <div
          style={{
            fontFamily: "Inter",
            fontWeight: 800,
            fontStyle: "normal",
            fontSize: "30px",
            lineHeight: "100%",
            letterSpacing: "0%",
            textTransform: "uppercase",
            color: "#1F2937",
          }}
        >
          SKINCARE
        </div>

        <nav className="flex space-x-8">
          <a
            href="#"
            className="text-gray-700 hover:text-gray-900 capitalize"
            style={{
              fontFamily: "Inter",
              fontWeight: 400,
              fontStyle: "normal",
              fontSize: "20px",
              lineHeight: "100%",
              letterSpacing: "-0.05em", // -5%
            }}
          >
            All Products
          </a>
          <a
            href="#"
            className="text-gray-700 hover:text-gray-900 capitalize"
            style={{
              fontFamily: "Inter",
              fontWeight: 400,
              fontStyle: "normal",
              fontSize: "20px",
              lineHeight: "100%",
              letterSpacing: "-0.05em",
            }}
          >
            Serum
          </a>
          <a
            href="#"
            className="text-gray-700 hover:text-gray-900 capitalize"
            style={{
              fontFamily: "Inter",
              fontWeight: 400,
              fontStyle: "normal",
              fontSize: "20px",
              lineHeight: "100%",
              letterSpacing: "-0.05em",
            }}
          >
            Sunscreen
          </a>
          <a
            href="#"
            className="text-gray-700 hover:text-gray-900 capitalize"
            style={{
              fontFamily: "Inter",
              fontWeight: 400,
              fontStyle: "normal",
              fontSize: "20px",
              lineHeight: "100%",
              letterSpacing: "-0.05em",
            }}
          >
            Bundle
          </a>
        </nav>


        <div className="flex items-center space-x-4">
          {/* Cart */}
          <div
            className="flex items-center justify-center w-10 h-10 rounded-full"
            style={{ backgroundColor: "#F8FEE5" }}
          >
            <img src={bag} alt="Cart" className="w-full h-full object-cover" />
          </div>
          <p
            style={{
              fontFamily: "Inter",
              fontWeight: 400,
              fontStyle: "normal",
              fontSize: "20px",
              lineHeight: "100%",
              letterSpacing: "-5%",
              textTransform: "capitalize",
              color: "#374151",
              margin: 0,
            }}
          >
            Cart (1)
          </p>



          {/* Heart */}
          <div
            className="flex items-center justify-center w-10 h-10 rounded-full"
            style={{ backgroundColor: "#F8FEE5" }}
          >
            <img src={heart} alt="Wishlist" className="w-5 h-5" />
          </div>

          {/* User */}
          <div
            className="flex items-center justify-center w-10 h-10 rounded-full"
            style={{ backgroundColor: "#F8FEE5" }}
          >
            <img src={person} alt="User" className="w-5 h-5" />
          </div>
        </div>

      </header>

      {/* Hero Section */}
      <section
        className="px-8 py-12 relative"
        style={{ backgroundColor: "#eff5e1" }}
      >
        <div className="grid grid-cols-12 gap-8 items-center">
          {/* Left content */}
          <div className="col-span-3">
            <p
              className="text-gray-700 text-lg leading-relaxed mb-8 text-justify"
              style={{
                textIndent: "105px",
              }}
            >
              Transform your skincare<br />
              routine with premium products that<br />
              restore, protect, and enhance your<br />
              natural glow every day.
            </p>

          </div>

          {/* Center heading */}
          <div className="col-span-6 text-center">
            <h1
              style={{
                fontFamily: "Inter",
                fontWeight: 700,
                fontStyle: "normal",
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
            </h1>
          </div>

          {/* Right product image */}
          <div className="col-span-3 flex justify-center">
            <img
              src={wash}
              alt="Wash Product"
              style={{
                width: '222.61px',
                height: '220px',
                borderRadius: '20px',
              }}
            />
          </div>
        </div>
      </section>

      {/* Main Content Section */}
      <section
        className="px-8 py-16 relative"
        style={{ backgroundColor: "#eff5e1" }}
      >

        <button
          className="text-white px-8 py-3 rounded-full hover:bg-gray-700 transition-colors"
          style={{
            backgroundColor: "#2D3B36",
            fontFamily: "Inter",
            fontWeight: 400,
            fontStyle: "normal",
            fontSize: "20px",
            lineHeight: "100%",
            letterSpacing: "0%",
          }}
        >
          Shop Now
        </button>
        {/* Background SKINCARE text */}
        <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
          <h2
            className="font-extrabold uppercase leading-[100%] tracking-[0%] opacity-100 whitespace-nowrap text-center"
            style={{
              fontFamily: "Inter",
              fontWeight: 800,
              fontStyle: "normal",
              fontSize: "clamp(40px, 18vw, 378px)",
              color: "#2D3B36",
            }}
          >
            SKINCARE
          </h2>
        </div>

        {/* Central image and notification */}
        <div className="relative z-10 flex justify-center items-center">
          <div className="relative">
            {/* Main circular image placeholder */}
            <div className="w-96 h-96 rounded-lg overflow-hidden relative flex items-center justify-center">
              <img
                src={girl}
                alt="Girl"
                className="w-full h-full object-cover"
                style={{
                  borderRadius: "30px"
                }}
              />
            </div>

            {/* Notification popup */}
            <div
              className="absolute bottom-8 left-4 bg-opacity-90 shadow-lg"
              style={{
                backgroundColor: "#EFF5E1",
                borderRadius: "200px",
                padding: "1rem ",
                maxWidth: "350px",
                width: "100%",
              }}
            >
              <div className="flex items-center gap-4 w-full">
                {/* Icon with dashed border */}
                <div
                  className="w-8 h-8 flex-shrink-0 rounded-full flex items-center justify-center"
                  style={{
                    border: "1px dashed #000",
                  }}
                >
                  <div
                    className="w-6 h-6 rounded-full overflow-hidden"
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
                    fontSize: "20px",
                    lineHeight: "100%",
                    letterSpacing: "0%",
                    margin: 0,
                  }}
                >
                  While giving you an invigorating cleansing experience.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom Description */}
      <section className="px-4 sm:px-8 py-12">
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
            Experience the ultimate in skincare with our expertly formulated
            products, crafted to nourish, protect, and rejuvenate your skin.
            Combining the finest natural ingredients with{" "}
            <span style={{ color: "#9CA3AF" }}>
              advanced science, our collection ensures every skin type can
              achieve a radiant, healthy glow. Embrace your beauty with
              confidence every day. Experience the ultimate in skincare with our
              expertly formulated products, crafted to nourish, protect, and
              rejuvenate your skin.
            </span>
          </p>
        </div>
      </section>

      {/* Why Our Products Section */}
      <section className="px-8 py-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 gap-16 items-center">
            {/* Left content */}
            <div>
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
                    fontStyle: "normal",
                    fontSize: "20px",
                    lineHeight: "100%",
                    letterSpacing: "0%",
                  }}
                >
                  Why Our Products
                </span>
              </div>


              <h2
                className="mb-8 leading-tight"
                style={{
                  fontFamily: "Inter",
                  fontWeight: 400,
                  fontStyle: "normal",
                  fontSize: "60px",
                  lineHeight: "100%",
                  letterSpacing: "-2%",
                }}
              >
                YOUR SKIN DESERVES
                <br />
                THE BEST CARE.
              </h2>
              <p
                className="text-gray-600 mb-12 leading-relaxed"
                style={{
                  fontFamily: "Inter",
                  fontWeight: 400,
                  fontStyle: "normal",
                  fontSize: "18px",
                  lineHeight: "24px",
                  letterSpacing: "-2%",
                }}
              >
                Discover our premium skincare collection, featuring products
                designed to rejuvenate, protect, and pamper your skin. Explore
                our luxe crafted with love backed by science, and inspired by
                nature.
              </p>
              <div className="space-y-12">
                {[
                  {
                    number: "01",
                    title: "Bio Ingredients",
                    desc:
                      "Get naturally beautiful and transform with our bio ingredients craving for healthy, radiant skin.",
                  },
                  {
                    number: "02",
                    title: "Everything Natural",
                    desc:
                      "Pure ingredients for pure skin. The perfect solution for your skin care needs.",
                  },
                  {
                    number: "03",
                    title: "All Handmade",
                    desc:
                      "Made with love and care. Just for you. Give your skin the tender loving care it deserves.",
                  },
                ].map(({ number, title, desc }) => (
                  <div key={number} className="flex items-start space-x-6">
                    {/* Number */}
                    <span
                      className="text-[48px] font-bold bg-clip-text text-transparent leading-none pt-2"
                      style={{
                        backgroundImage: "linear-gradient(180deg, #293330 0%, #FEFFF4 100%)",
                        fontFamily: "Inter",
                      }}
                    >
                      {number}
                    </span>

                    {/* Text Block */}
                    <div>
                      <h3
                        className="text-gray-800 mb-2"
                        style={{
                          fontFamily: "Inter",
                          fontWeight: 400,
                          fontStyle: "normal",
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
                          fontStyle: "normal",
                          fontSize: "18px",
                          lineHeight: "24px",
                          letterSpacing: "-2%",
                        }}
                      >
                        {desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

            </div>

            {/* Right image */}
            <div className="relative">
              {/* Image box with matched size */}
              <div
                className="rounded-2xl relative overflow-hidden flex items-center justify-center"
                style={{ width: "610px", height: "676px" }}
              >
                <img
                  src={girl2}
                  alt="Woman with Face Mask"
                  className="w-full h-full object-cover"
                />
              </div>

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
              <div className="flex justify-between items-center mt-6">
                <p
                  className="text-gray-600"
                  style={{
                    fontFamily: "Inter",
                    fontWeight: 400,
                    fontStyle: "normal",
                    fontSize: "20px",
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
                    fontSize: "20px",
                    lineHeight: "100%",
                    letterSpacing: "-2%",
                    textTransform: "uppercase",
                    color: "#1F2937",
                  }}
                  className="hover:underline"
                >
                  LEARN MORE
                </button>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Best Selling Products Section */}
      <section className="px-8 py-16">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-12">
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
                  fontStyle: "normal",
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

            <div className="flex space-x-2">
              <button className="w-12 h-12 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-50">
                <span className="text-gray-600">←</span>
              </button>
              <button className="w-12 h-12 rounded-full bg-gray-800 text-white flex items-center justify-center hover:bg-gray-700">
                <span>→</span>
              </button>
            </div>
          </div>

          {/* Product Grid */}
          {/* <div className="grid grid-cols-3 gap-8"> */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
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
                id: 2,
                title: "THE BODY LOTION.",
                price: "FROM $19.99",
                image: mask3,
              },
            ].map((product) => (
              <div
                key={product.id}
                className="relative rounded-2xl overflow-hidden shadow-sm"
              >
                {/* Product Image */}
                <div className="h-96 bg-gray-200 flex items-center justify-center">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Floating Info Box */}
                <div className="absolute bottom-4 left-4 right-4 bg-white bg-opacity-90 backdrop-blur-sm rounded-lg p-4">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3
                        style={{
                          fontFamily: "Inter",
                          fontWeight: 400,
                          fontStyle: "normal",
                          fontSize: "20px",
                          lineHeight: "100%",
                          letterSpacing: "-5%",
                          color: "#1F2937",
                          marginBottom: "8px",
                        }}
                      >
                        {product.title}
                      </h3>

                      <p
                        style={{
                          fontFamily: "Inter",
                          fontWeight: 400,
                          fontStyle: "normal",
                          fontSize: "16px",
                          lineHeight: "100%",
                          letterSpacing: "-5%",
                          color: "#2D3B3680",
                        }}
                      >
                        {product.price}
                      </p>
                    </div>

                    <button
                      className="w-[50px] h-[50px] border border-gray-300 rounded flex items-center justify-center hover:bg-gray-50"
                      style={{
                        backgroundColor: "#2D3B361A"
                      }}
                    >
                      <img
                        src={cart}
                        alt="Cart"
                        className="w-8 h-8 object-contain"
                      />
                    </button>

                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* </div> */}
        </div>
      </section>

      {/* Feel Beautiful Section */}
      <section className="px-8 py-16">
        <div className="max-w-7xl mx-auto">
          <div className="relative h-[600px] bg-gray-800 rounded-3xl overflow-hidden flex items-center justify-center">
            <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
              <img
                src={girl3}
                alt="Woman with Product and Leaves"
                className="w-full h-full object-cover"
              />
            </div>


            {/* Content overlay */}
            <div
              className="absolute left-1/2 transform -translate-x-1/2"
              style={{ bottom: "10%" }}
            >
              <div className="text-center text-white">
                <h2
                  style={{
                    fontFamily: "Inter",
                    fontWeight: 400,
                    fontStyle: "normal",
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
                <button
                  className="bg-white text-gray-800 px-8 py-3 rounded-full hover:bg-gray-100 transition-colors"
                  style={{
                    fontFamily: "Inter",
                    fontWeight: 400,
                    fontStyle: "normal",
                    fontSize: "20px",
                    lineHeight: "100%",
                    letterSpacing: "0%",
                  }}
                >
                  Shop Now
                </button>

              </div>
            </div>

          </div>
        </div>
      </section>
      {/* Feel Beautiful Section */}
      <section className="px-8 py-16">
        <div className="max-w-7xl mx-auto">
          {/* Title */}
          <div className="text-center mb-8">
            <h2
              style={{
                fontFamily: "Inter",
                fontWeight: 400,
                fontStyle: "normal",
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
          </div>

          {/* Category Filter Buttons */}
          <div className="flex justify-center gap-4 mb-12">
            <button
              className="px-6 py-3 rounded-full text-white"
              style={{
                backgroundColor: "#2D3B36",
                fontFamily: "Inter",
                fontWeight: 400,
                fontStyle: "normal",
                fontSize: "16px",
                lineHeight: "100%",
                letterSpacing: "0%",
              }}
            >
              NEW ARRIVAL
            </button>
            <button
              className="px-6 py-3 rounded-full border border-gray-300 text-gray-700 hover:bg-gray-50"
              style={{
                fontFamily: "Inter",
                fontWeight: 400,
                fontStyle: "normal",
                fontSize: "16px",
                lineHeight: "100%",
                letterSpacing: "0%",
              }}
            >
              CLEANSING
            </button>
            <button
              className="px-6 py-3 rounded-full border border-gray-300 text-gray-700 hover:bg-gray-50"
              style={{
                fontFamily: "Inter",
                fontWeight: 400,
                fontStyle: "normal",
                fontSize: "16px",
                lineHeight: "100%",
                letterSpacing: "0%",
              }}
            >
              ACNE FIGHTER
            </button>
            <button
              className="px-6 py-3 rounded-full border border-gray-300 text-gray-700 hover:bg-gray-50"
              style={{
                fontFamily: "Inter",
                fontWeight: 400,
                fontStyle: "normal",
                fontSize: "16px",
                lineHeight: "100%",
                letterSpacing: "0%",
              }}
            >
              ANTI AGEING
            </button>
          </div>

          {/* Product Grid - Same as before */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
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
            ].map((product) => (
              <div
                key={product.id}
                className="relative rounded-2xl overflow-hidden shadow-sm"
                style={{
                  backgroundColor: product.bgColor,
                  height: "400px",
                }}
              >
                {/* Product Image */}
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-full object-cover"
                />

                {/* Floating Info Box */}
                <div
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
                          fontStyle: "normal",
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
                          fontStyle: "normal",
                          fontSize: "16px",
                          lineHeight: "100%",
                          letterSpacing: "-5%",
                          color: product.isDark ? "rgba(255, 255, 255, 0.7)" : "#6B7280",
                        }}
                      >
                        {product.price}
                      </p>
                    </div>

                    <button
                      className="w-[50px] h-[50px] border border-gray-300 rounded flex items-center justify-center hover:bg-gray-50"
                      style={{
                        backgroundColor: product.isDark ? "rgba(255, 255, 255, 0.1)" : "rgba(45, 59, 54, 0.1)",
                      }}
                    >
                      <img
                        src={!product.isDark ? cart : cartwhite}
                        alt="Cart"
                        className="w-8 h-8 object-contain"
                      />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="px-8 py-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-stretch">
            {/* Left - Product Image */}
            <div className="relative h-full">
              <div
                className="rounded-2xl overflow-hidden h-full"
                style={{
                  backgroundColor: "#E5E7EB",
                }}
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
              </div>
            </div>

            {/* Right - FAQ Content */}
            <div>
              <div className="inline-flex items-center gap-3 bg-white border border-gray-300 rounded-full px-4 py-2 text-sm text-gray-700 mb-8">
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
                    fontSize: "16px",
                    lineHeight: "100%",
                    letterSpacing: "0%",
                  }}
                >
                  Frequently Asked Question
                </h3>
              </div>

              <h2
                className="mb-12"
                style={{
                  fontFamily: "Inter",
                  fontWeight: 400,
                  fontStyle: "normal",
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
              </h2>

              {/* FAQ Items */}
              <div className="space-y-4">
                {[
                  {
                    question: "Are your products safe for sensitive skin?",
                    isOpen: false,
                  },
                  {
                    question: "Are your products cruelty-free?",
                    isOpen: true,
                    answer: "Absolutely! All our products are cruelty-free, and most are vegan.<br/> Check individual product details for specifics.",
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
                  <div
                    key={index}
                    className="rounded-lg border"
                    style={{
                      border: "1px solid #2D3B36",
                    }}
                  >
                    <button
                      className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50"
                    >
                      <h3
                        style={{
                          fontFamily: "Inter",
                          fontWeight: 400,
                          fontStyle: "normal",
                          fontSize: "20px",
                          lineHeight: "100%",
                          letterSpacing: "0%",
                          color: "#2D3B36",
                        }}
                      >
                        {faq.question}
                      </h3>

                      <img
                        src={faq.isOpen ? minus : plus}
                        alt={faq.isOpen ? "Minus" : "Plus"}
                        className="w-6 h-6"
                      />

                    </button>
                    {faq.isOpen && (
                      <div className="px-6 pb-4">
                        <p
                          style={{
                            fontFamily: "Inter",
                            fontWeight: 400,
                            fontStyle: "normal",
                            fontSize: "16px",
                            lineHeight: "24px",
                            letterSpacing: "0%",
                            color: "#525349",
                          }}
                        >
                          {faq.answer
                            ? faq.answer.split("<br/>").map((line, idx) => (
                              <span key={idx}>
                                {line}
                                <br />
                              </span>
                            ))
                            : null}
                        </p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      <footer className="relative px-8 py-16" style={{ backgroundColor: "#2D3B36" }}>
        <div className="max-w-7xl mx-auto relative z-10">
          {/* Main Footer Content */}
          <div className="grid grid-cols-2 gap-16 mb-16">
            {/* Left */}
            <div>
              <h2
                style={{
                  fontFamily: "Inter",
                  fontWeight: 400,
                  fontStyle: "regular",
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
                  fontStyle: "normal",
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
                  fontStyle: "normal",
                  fontSize: "60px",
                  lineHeight: "100%",
                  letterSpacing: "-2%",
                  color: "#FFFFFF",
                }}
              >
                contact.skincare.com
              </p>
            </div>
          </div>

          {/* Bottom Footer Links */}
          <div className="flex justify-between items-center mb-16">
            {/* Social */}
            <div className="flex space-x-8">
              {["Facebook", "Instagram", "YouTube"].map((text) => (
                <a
                  key={text}
                  href="#"
                  className="text-white hover:text-gray-300"
                  style={{
                    fontFamily: "Inter",
                    fontWeight: 400,
                    fontStyle: "normal",
                    fontSize: "18px",
                    lineHeight: "100%",
                    letterSpacing: "0%",
                  }}
                >
                  {text}
                </a>
              ))}
            </div>

            {/* Legal */}
            <div className="flex space-x-8">
              {["Terms of Service", "Privacy Policy", "Cookies Policy"].map((text) => (
                <a
                  key={text}
                  href="#"
                  className="text-white hover:text-gray-300"
                  style={{
                    fontFamily: "Inter",
                    fontWeight: 400,
                    fontStyle: "normal",
                    fontSize: "18px",
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

        {/* SKINCARE - Standalone Third Row */}
        <div className="w-full flex justify-center pt-8">
          <h2
            className="font-extrabold uppercase leading-[100%] tracking-[0%] opacity-10 text-center whitespace-nowrap"
            style={{
              fontFamily: "Inter",
              fontWeight: 800,
              fontStyle: "normal",
              fontSize: "clamp(60px, 20vw, 400px)",
              color: "#FFFFFF",
            }}
          >
            SKINCARE
          </h2>
        </div>
      </footer>

    </div>
  );
}

export default App;
