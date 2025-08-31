import React from "react";
import Layout from "../Layout/Layout";

const About = () => {
  return (
    <Layout>
      <section className="text-gray-600 body-font">
        <div className="container mx-auto flex px-5 mt-8  pt-20 pb-8 md:flex-row flex-col items-center">
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
            <img
              className="object-cover object-center rounded"
              alt="hero"
              src="wwr.jpg"
            />
          </div>
          <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
              Who We Are ?
            </h1>
            <p className="mb-8 leading-relaxed">
              CShop is a dynamic and rapidly growing e-commerce platform
              dedicated to providing customers with a seamless and personalized
              shopping experience. With a strong focus on quality,
              affordability, and innovation, CShop offers a diverse range of
              products across multiple categories, ensuring that customers can
              find everything they need in one place. As a customer-centric
              brand, we continuously innovate and evolve to meet the
              ever-changing demands of the digital marketplace. Join us in
              shaping the future of online shopping with CShop – where
              convenience meets excellence!
            </p>
          </div>
        </div>
      </section>
      {/* 2nd section */}
      <section className="text-gray-600 body-font">
        <div className="container mx-auto flex px-5 pt-20 pb-8   md:flex-row flex-col-reverse items-center ">
          <div className="lg:flex-grow md:w-1/2  md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
              Technology at CShop
            </h1>
            <p className="mb-8 leading-relaxed">
              At CShop, we leverage cutting-edge technology to provide a
              seamless, secure, and efficient shopping experience. Our platform
              is built with the latest in React.js, Node.js, and Tailwind CSS,
              ensuring fast performance and a user-friendly interface.
            </p>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
            <img
              className="object-cover object-center rounded"
              alt="hero"
              src="inn.webp"
            />
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
