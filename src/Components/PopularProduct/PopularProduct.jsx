import axios from "axios";
import React, {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import PopularProductShim from "./PopularProductShim";

const PopularProduct = ({AddToCart}) => {
  const [popularProducts, setPopularProducts] = useState([]);
  useEffect(() => {
    const PopularProductFetch = async () => {
      try {
        const res = await axios("https://dummyjson.com/carts/1");
        setPopularProducts(res.data.products);

        console.log(res.data.products);
      } catch (err) {
        toast.error(err.message);
      }
    };
    PopularProductFetch();
  }, []);
  return (
    <div>
      <div className="mt-12 text-center ">
        <h2 className="md:text-5xl underline text-4xl font-semi-bold">
          Popular Products
        </h2>
      </div>
      {!popularProducts.length ? (
        <PopularProductShim />
      ) : (
        <section className="text-gray-600 body-font ">
          <div className="container px-5 py-24 mx-auto">
            <div className="flex flex-wrap -m-4  ">
              {popularProducts.map((popularItems) => (
                <div
                  className="lg:w-1/4 md:w-1/2 p-4 w-full flex flex-col  h-full border shadow-xl"
                  key={popularItems.id}
                >
                  {/* Image Section */}
                  <Link
                    to={`/singlepage/${popularItems.id}`}
                    className="block relative h-48 rounded overflow-hidden"
                  >
                    <img
                      alt="ecommerce"
                      className="object-contain object-center w-full h-full block "
                      src={popularItems.thumbnail}
                    />
                  </Link>

                  {/* Content Wrapper */}
                  <div className="mt-4  flex-grow">
                    <h2 className="text-gray-900 title-font text-lg font-medium">
                      {popularItems.title.length > 20
                        ? `${popularItems.title.slice(0, 20)}...`
                        : popularItems.title}
                    </h2>
                    <p className="mt-1 text-xl font-semibold">
                      Price: {popularItems.price} ₹
                    </p>
                  </div>

                  {/* Button at the Bottom */}
                  <div className="mt-4">
                    <button
                      className=" text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded"
                      onClick={() => AddToCart(popularItems)}
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

export default PopularProduct;
