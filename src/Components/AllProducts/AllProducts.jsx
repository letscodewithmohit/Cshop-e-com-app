import React, {useEffect, useState} from "react";
import Layout from "../Layout/Layout";
import axios, {all} from "axios";
import login from "../../assets/log2.jpg";
import {Link} from "react-router-dom";
import AllProductsShim from "../AllProductsShim/AllProductsShim";

const AllProducts = ({AddToCart}) => {
  const [allProduct, setAllProduct] = useState([]);
  const [orignalAllProduct, setOrignalALlProduct] = useState([]);
  const [allcategory, setAllCategory] = useState([]);
  const [selectProduct, setSelectProduct] = useState("");
  const [searchItem, setSearchItem] = useState("");

  const [minPrice, setminPrice] = useState("");
  const [maxPrice, setmaxPrice] = useState("");

  // AllProducts function

  useEffect(() => {
    const AllProducts = async () => {
      const res = await axios("https://dummyjson.com/products");
      setAllProduct(res.data.products);
      setOrignalALlProduct(res.data.products);
      console.log(allProduct);
      console.log(setOrignalALlProduct);
    };
    AllProducts();
  }, []);

  // function for allproductcategory
  useEffect(() => {
    const getAllProductsCategory = async () => {
      try {
        const res = await axios("https://dummyjson.com/products/categories");
        setAllCategory(res.data);

        console.log(res);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };
    getAllProductsCategory();
  }, []);

  // fiterproduct function
  const filterProduct = (selectCategory) => {
    setSelectProduct(selectCategory);

    if (selectCategory === "") {
      setAllProduct(orignalAllProduct);
    } else {
      const selectData = orignalAllProduct.filter(
        (fiterItem) => fiterItem.category === selectCategory
      );

      setAllProduct(selectData);
    }
  };

  // serach bar button
  const handleSearchBtn = () => {
    const searchProduct = orignalAllProduct.filter((serachFilterItem) =>
      serachFilterItem.title.toLowerCase().includes(searchItem.toLowerCase())
    );

    setAllProduct(searchProduct);
  };

  // function for handlePrice filter

  const handlePrice = () => {
    let min = parseFloat(minPrice);
    let max = parseFloat(maxPrice);
    const fiterPrice = orignalAllProduct.filter(
      (priceItem) =>
        (!min || priceItem.price >= min) && (!max || priceItem.price <= max)
    );

    setAllProduct(fiterPrice);
  };
  return (
    <>
      <Layout>
        {/* container  */}

        <div className="flex flex-wrap justify-center gap-4 md:justify-evenly px-2 py-2 mt-20 items-center container mx-auto bg-slate-100 border">
          {/* All ProductCategoryies */}
          <div className="flex justify-center px-2 hover:text-blue-800 bg-white w-full sm:w-auto ">
            <select
              onChange={(e) => filterProduct(e.target.value)}
              className=" px-2 py-1 font-semibold  outline-none w-full sm:w-auto "
            >
              <option className="" value={""}>
                Filter by Category
              </option>

              {allcategory
                .filter((filterItem) =>
                  ["beauty", "fragrances", "furniture", "groceries"].includes(
                    filterItem.name.toLowerCase()
                  )
                )
                .map((selectCategory, index) => (
                  <option key={index} value={selectCategory.slug}>
                    {selectCategory.slug}
                  </option>
                ))}
            </select>
          </div>
          {/* serach bar  */}
          <div className="text-center w-full sm:w-1/3 flex justify-center ">
            <input
              type="search"
              placeholder="Search Products Here..."
              onChange={(e) => {
                setSearchItem(e.target.value);
              }}
              value={searchItem}
              className="border-2 focus:border-red-700  outline-none px-2 py-1 text-center w-[90%] sm:w-3/4"
            />
            <button
              type="serach"
              className="bg-green-500 text-white px-2 py-1 border-2  hover:bg-green-700 w-[30%] ml-2 sm:w-auto "
              onClick={handleSearchBtn}
            >
              Search
            </button>
          </div>
          {/* product filter by price  */}
          <div
            className="text-center w-full sm:w-auto flex flex-col sm:flex-row items-center gap-2
          "
          >
            <input
              className="border-2 focus:border-red-700 px-2 py-1 w-[90%] sm:w-24 text-center"
              placeholder="Min Price"
              onChange={(e) => {
                setminPrice(e.target.value);
              }}
              value={minPrice}
            />
            <input
              className="border-2 focus:border-red-700 px-2 py-1 w-[90%] sm:w-24 text-center"
              placeholder="Max Price"
              onChange={(e) => {
                setmaxPrice(e.target.value);
              }}
              value={maxPrice}
            />
            <button
              className="bg-green-500  hover:bg-green-700 text-white px-2 py-1 w-[90%] sm:w-auto"
              onClick={handlePrice}
            >
              Filter by Price
            </button>
          </div>
        </div>

        {/* shimmar effect */}

        {!allProduct.length ? (
          <AllProductsShim />
        ) : (
          /* All Products showing   */
          <div className="flex flex-wrap gap-4 justify-center py-3 mt-4 container mx-auto bg-slate-100 ">
            {allProduct.map((allItem, index) => (
              <div
                key={index}
                className="lg:w-1/4 md:w-1/2 p-4 w-full   shadow-md bg-white"
              >
                <Link
                  className="block relative h-48 overflow-hidden "
                  to={`/singlepage/${allItem.id}`}
                >
                  <img
                    src={allItem.thumbnail}
                    alt="img"
                    className="object-contain object-center w-full h-40  rounded-full"
                  />
                </Link>
                <div className="mt-4 flex flex-col items-center">
                  <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                    Title: {allItem.title}
                  </h3>
                  <h2 className="text-gray-900 title-font text-l font-medium ">
                    Rating: {allItem.rating}
                  </h2>
                  <p className="mt-1">Price: {allItem.price} Rs.</p>

                  <div className="m-2">
                    <button
                      className="flex ml-auto text-white bg-indigo-500 border-0 py-2 md:px-6 px-6 focus:outline-none hover:bg-indigo-600 rounded"
                      onClick={() => {
                        AddToCart(allItem);
                      }}
                    >
                      Add to cart
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </Layout>
    </>
  );
};

export default AllProducts;
