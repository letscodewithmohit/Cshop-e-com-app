import React from "react";
import Layout from "../../Components/Layout/Layout";
import HeroSection from "../../Components/Hero/HeroSection";
import Service from "../../Components/Service/Service";
import Gallery from "../../Components/Gallery/Gallery";
import PopularProduct from "../../Components/PopularProduct/PopularProduct";
import Testimonial from "../../Components/Testimonial/Testimonial";

const Home = ({AddToCart}) => {
  return (
    <Layout>
      <HeroSection />
      <Service />
      <PopularProduct AddToCart={AddToCart} />
      <Gallery />
      <Testimonial />
    </Layout>
  );
};

export default Home;
