import React, {useContext, useState} from "react";
import {FaCartShopping} from "react-icons/fa6";
import {GiHamburgerMenu} from "react-icons/gi";
import {RxCross2} from "react-icons/rx";
import {CartContext, NameContext} from "../../App";
import {Link, NavLink} from "react-router-dom";
import {getAuth, signOut} from "firebase/auth";
import toast from "react-hot-toast";

const Navbar = () => {
  // getting name from NameContext by useContext hook
  const displayName = useContext(NameContext);
  const [isOpen, setIsOpen] = useState(false);

  // Function Toggle Change
  const FunToggleChange = () => {
    isOpen === false ? setIsOpen(true) : setIsOpen(false);
  };

  // Logout function
  const handleLogout = () => {
    const auth = getAuth();
    signOut(auth)
      .then(() => {
        // sign out
        toast.success("Logout Successfully!");
      })
      .catch((err) => {
        toast.error(err);
      });
  };

  return (
    <CartContext.Consumer>
      {(value) => {
        return (
          <header className="bg-gray-50 border-b border-gray-200 shadow-lg fixed top-0  z-10 w-full">
            {/* parent div */}

            <div className="container mx-auto flex justify-between p-5 items-center ">
              {/* div 1 */}
              <Link to="/">
                <div>
                  <h3 className="text-2xl font-bold">
                    C<span className="text-red-700">Shop</span>
                  </h3>
                </div>
              </Link>

              {/* list div */}
              <div className="hidden md:block">
                <ul className="flex items-center text-lg justify-center font-semibold ">
                  <NavLink
                    to="/"
                    className={({isActive}) =>
                      `mr-5 cursor-pointer relative ${
                        isActive
                          ? "border-b-2 border-red-700"
                          : "hover:border-b-2 hover:border-gray-400"
                      }`
                    }
                  >
                    Home
                  </NavLink>

                  <NavLink
                    to="/allproducts"
                    className={({isActive}) =>
                      `mr-5 cursor-pointer relative ${
                        isActive
                          ? "border-b-2 border-red-700"
                          : "hover:border-b-2 hover:border-gray-400"
                      }`
                    }
                  >
                    All Products
                  </NavLink>

                  <NavLink
                    to="/about"
                    className={({isActive}) =>
                      `mr-5 cursor-pointer relative ${
                        isActive
                          ? "border-b-2 border-red-700"
                          : "hover:border-b-2 hover:border-gray-400"
                      }`
                    }
                  >
                    About
                  </NavLink>

                  <NavLink
                    to="/contact"
                    className={({isActive}) =>
                      `mr-5 cursor-pointer relative ${
                        isActive
                          ? "border-b-2 border-red-700"
                          : "hover:border-b-2 hover:border-gray-400"
                      }`
                    }
                  >
                    Contact
                  </NavLink>
                </ul>
              </div>

              {/* conditinal rendering for the nav  */}
              {isOpen ? (
                <div className="">
                  <ul className="flex  flex-col gap-10 absolute top-[73px] left-0 h-screen w-full z-10 bg-red-600 text-white  items-center text-lg justify-center font-semibold ">
                    <Link to="/">
                      <li className="mt-5 hover:text-red-900 cursor-pointer">
                        Home
                      </li>
                    </Link>

                    <Link to="/allproducts">
                      <li className="mt-5 hover:text-red-900 cursor-pointer">
                        All Products
                      </li>
                    </Link>

                    <Link to={"/about"}>
                      <li className="mt-5 hover:text-red-900 cursor-pointer">
                        About
                      </li>
                    </Link>
                    <Link to={"/contact"}>
                      <li className="mt-5 hover:text-red-900 cursor-pointer">
                        Contact
                      </li>
                    </Link>
                  </ul>
                  <button
                    className="absolute top-[75px] z-10 right-0 text-white py-2 px-4 cursor-pointer"
                    onClick={FunToggleChange}
                  >
                    <RxCross2 size={30} />
                  </button>
                </div>
              ) : (
                ""
              )}
              {/* Login button & Cart  div*/}
              <div className="flex flex-row justify-center items-center gap-3 ">
                {displayName ? (
                  <>
                    <Link to="">
                      <button
                        className="font-semibold  bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base "
                        onClick={handleLogout}
                      >
                        Logout
                      </button>
                    </Link>

                    <span className="font-semibold ">{displayName}</span>
                  </>
                ) : (
                  <Link to="/login">
                    <button className="font-semibold  bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base ">
                      Login
                    </button>
                  </Link>
                )}

                <Link to="/cart" className="flex relative ">
                  <FaCartShopping size={30} />
                  {value > 0 && (
                    <span className="absolute -top-2 -right-5 bg-red-800 text-white px-2 py-1 text-xs rounded-full">
                      {value}
                    </span>
                  )}
                </Link>

                {isOpen ? (
                  ""
                ) : (
                  <button className="block md:hidden" onClick={FunToggleChange}>
                    <GiHamburgerMenu size={25} />
                  </button>
                )}
              </div>
            </div>
          </header>
        );
      }}
    </CartContext.Consumer>
  );
};

export default Navbar;
