import React from "react";
import {Swiper, SwiperSlide} from "swiper/react";
import {Autoplay, Navigation, Pagination} from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import {Link} from "react-router-dom";

const HeroSection = () => {
  const products = [
    {
      id: 1,
      name: "TrendFit",
      img: "/slider1.avif",
      text: "Wear the vibe, own the style",
    },
    {
      id: 2,
      name: "Gadgetrons",
      img: "/slider2.jpg",
      text: "Immerse Yourself in Pure Sound",
    },
    {
      id: 3,
      name: "GlowNest",
      img: "/slider3.webp",
      text: "Glow with confidence, shine with beauty",
    },
  ];

  return (
    <div className="w-full container mx-auto">
      {/* Swiper Section */}
      <div className="relative w-full h-[50vh] sm:h-[60vh] md:h-[70vh] mt-[7%]">
        <Swiper
          modules={[Autoplay, Navigation, Pagination]}
          spaceBetween={30}
          slidesPerView={1}
          loop={true}
          autoplay={{delay: 3000, disableOnInteraction: false}}
          navigation
          pagination={{clickable: true}}
          className="absolute inset-0 w-full h-full"
        >
          {products.map((product) => (
            <SwiperSlide key={product.id} className="relative w-full h-full">
              {/* Background Image */}
              <img
                src={product.img}
                alt={product.name}
                className="w-full h-full object-cover"
              />

              {/* Overlay with Animated Text */}
              <div className="absolute inset-0 bg-black/40 flex flex-col items-start justify-center px-12 text-white">
                <h1 className="text-4xl sm:text-5xl  animate-fadeIn font-semibold">
                  {product.name}
                </h1>
                <p className="text-lg sm:text-xl mt-2 max-w-lg animate-fadeIn">
                  {product.text}
                </p>
                <Link to="/allproducts">
                  {" "}
                  <button className="mt-4 px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700">
                    Shop Now
                  </button>
                </Link>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Additional Sections Below */}
      <div className="flex flex-col gap-6 p-6">
        {/* First Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="relative w-full h-[300px] bg-gray-200 md:rounded-lg overflow-hidden">
            <img
              src="banner.jpg"
              alt="Limited Offer"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-white text-center">
              <h2 className="text-2xl font-bold">Exclusive Deals</h2>
              <p className="text-lg">Hurry up! Limited-time offers.</p>
              <Link to="/allproducts">
                {" "}
                <button className="mt-3 px-4 py-2 bg-red-500 rounded-md">
                  Explore Now
                </button>
              </Link>
            </div>
          </div>
          <div className="relative w-full h-[300px] bg-gray-200 md:rounded-lg overflow-hidden">
            <img
              src="banner2.jpeg"
              alt="New Arrivals"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-white text-center">
              <h2 className="text-2xl font-bold">New Arrivals</h2>
              <p className="text-lg">Discover the latest tech trends.</p>
              <Link to="/allproducts">
                <button className="mt-3 px-4 py-2 bg-green-500 rounded-md">
                  Shop Now
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
