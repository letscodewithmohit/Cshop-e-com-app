import React, {useEffect, useState} from "react";
import Layout from "../Layout/Layout";
import axios, {all} from "axios";
import login from "../../assets/log2.jpg";

const AllProducts = () => {
  const [allProduct, setAllProduct] = useState([]);
  const [allcategory, setAllCategory] = useState([]);
  const [products, setProducts] = useState([]);
  const [selectProduct, setSelectProduct] = useState("");
  const [showProduct, setShowProduct] = useState(false);

  // AllProducts function

  useEffect(() => {
    const AllProducts = async () => {
      const res = await axios("https://dummyjson.com/products");
      setAllProduct(res.data.products);
    };
    AllProducts();
  }, []);

  // function for allproductcategory
  useEffect(() => {
    const getAllProductsCategory = async () => {
      try {
        const res = await axios("https://dummyjson.com/products/categories");
        setAllCategory(res.data);

        // console.log(res);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };
    getAllProductsCategory();
  }, []);

  // function for - single category product
  useEffect(() => {
    const singleProducts = async () => {
      try {
        if (selectProduct) {
          const res = await axios(
            `https://dummyjson.com/products/category/${selectProduct}`
          );
          setProducts(res.data.products);
          // console.log(res.data.products);
        }
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };

    singleProducts();
  }, [selectProduct]);

  // fiterproduct function

  const filterProduct = (category) => {
    setSelectProduct(category);
    setShowProduct(true);
  };

  return (
    <>
      <Layout>
        {/* image box */}
        <div className="relative ">
          <img
            src={login}
            alt="login-image"
            className="object-cover w-full object-center h-[200px] mt-5"
          />
          <div className="bg-black w-full h-[200px] absolute top-0 left-0 opacity-[.4]"></div>
          <h2 className="absolute top-[40%] md:left-[30%] left-[20%] sm:left-[10%] text-white font-semibold  text-3xl md:text-5xl border-b-4 border-red-600">
            All Products
          </h2>
        </div>

        <div className="flex gap-3 flex-wrap px-2">
          <select
            onChange={(e) => filterProduct(e.target.value)}
            className="bg-gray-200 mt-3 p-2 font-semibold outline-none"
          >
            <option>Filter by Category</option>

            {allcategory
              .filter(
                (filterItem) =>
                  ![
                    "furniture",
                    "motorcycle",
                    "sports-accessories",
                    "vehicle",
                  ].includes(filterItem.name.toLowerCase())
              )
              .map((category, index) => (
                <option key={index} value={category.slug}>
                  {category.slug}
                </option>
              ))}
          </select>
        </div>

        {/* single products section */}
        {showProduct ? (
          <section className="text-gray-600 body-font ">
            <div className="container px-5 py-3   mx-auto ">
              <h1 className="text-2xl text-center mb-10 font-semibold">
                {selectProduct.toUpperCase()}
              </h1>
              <div className="flex flex-wrap gap-4 justify-center ">
                {products.map((item) => (
                  <div
                    className=" lg:w-1/4 md:w-1/2 p-4 w-full border-4"
                    key={item.id}
                  >
                    <a className="block relative h-48 rounded overflow-hidden ">
                      <img
                        src={item.thumbnail}
                        alt="image"
                        className="object-cover object-center w-full h-full block"
                      />
                    </a>
                    <div className="mt-4">
                      <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                        Title: {item.title}
                      </h3>
                      <h2 className="text-gray-900 title-font text-lg font-medium ">
                        Rating: {item.rating}
                      </h2>
                      <p className="mt-1">Price: {item.price} Rs.</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        ) : (
          <div className="flex flex-wrap gap-4 justify-center py-3 mt-4">
            {allProduct.map((allItem, index) => (
              <div
                key={index}
                className="lg:w-1/4 md:w-1/2 p-4 w-full border-4"
              >
                ``
                <img
                  src={allItem.thumbnail}
                  alt="img"
                  className="object-cover object-center block"
                />
                <div className="mt-4">
                  <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                    Title: {allItem.title}
                  </h3>
                  <h2 className="text-gray-900 title-font text-lg font-medium ">
                    Rating: {allItem.rating}
                  </h2>
                  <p className="mt-1">Price: {allItem.price} Rs.</p>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* all products  */}
      </Layout>
    </>
  );
};

export default AllProducts;

/*<div className="" key={index}>
                <button
                  className="border rounded bg-gray-500 font-semibold text-white px-2 py-2 mt-5"
                  onClick={() => filterProduct(category.slug)}
                >
                  {category.name}
                </button>
              </div> */
