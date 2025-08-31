// import React from "react";
// import {FaFacebook} from "react-icons/fa";
// import {FaInstagramSquare} from "react-icons/fa";
// import {FaSquareXTwitter} from "react-icons/fa6";
// import {useNavigate} from "react-router-dom";
// const Footer = () => {
//   const navigate = useNavigate();
//   return (
//     <>
//       {/* footer section */}
//       <footer className=" bg-blue-600 text-white ">
//         {/* main div */}
//         <div className="container px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col ">
//           {/* child 1 */}
//           <div className="w-64  md:mx-0 mx-auto text-center md:text-left ">
//             <h3 className="font-bold text-2xl text-white">
//               C<span className="text-red-700">Shop</span>
//             </h3>
//           </div>

//           {/* child 2 */}

//           <div
//             className=" flex-grow flex  flex-wrap  md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left
//           text-center "
//           >
//             {/* child 2.1 */}
//             <div className="lg:w-1/3 md:w-1/2 w-full px-4  ">
//               <h2 className="title-font font-medium tracking-widest text-lg mb-3 ">
//                 <span className="border-b-2 border-red-600">QUICK LINKS</span>
//               </h2>
//               <ul className="list-none mb-10">
//                 <li className="mt-1">Home</li>
//                 <li className="mt-1">About</li>
//                 <li className="mt-1">Contact</li>
//                 <li className="mt-1">Login</li>
//               </ul>
//             </div>
//             {/* child 2.2 */}
//             <div className="lg:w-1/3 md:w-1/2  w-full px-4 ">
//               <h2 className="title-font font-medium tracking-widest text-lg mb-3">
//                 <span className="border-b-2 border-red-600"> MENU</span>
//               </h2>

//               <ul className="list-none mb-10">
//                 <a href="#services">
//                   <li className="mt-1">Features</li>
//                 </a>
//                 <a href="#gallery">
//                   <li className="mt-1">Gallery</li>
//                 </a>
//                 <a href="#testimonial">
//                   <li className="mt-1">New Reviews</li>
//                 </a>
//               </ul>
//             </div>
//             {/* child 2.3 */}
//             <div className="lg:w-1/3 md:w-1/2  w-full px-4 ">
//               <h2 className="title-font font-medium tracking-widest text-lg mb-3">
//                 <span className="border-b-2 border-red-600"> CONTACT </span>
//               </h2>
//               <ul className="list-none mb-10">
//                 <li className="mt-1">Contact us</li>
//                 <li className="mt-1">+123454</li>
//                 <li className="mt-1">Rating & Review</li>
//                 <li className="mt-1">Most Sales</li>
//               </ul>
//             </div>
//           </div>
//         </div>
//         {/* end main div */}
//         {/* last div */}
//         <div className="bg-gray-500 text-white">
//           <div className=" container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row ">
//             <p className="text-sm font-medium text-center sm:text-left ">
//               &copy; 2025 CShop - <span>@copyright</span>
//             </p>
//             <p className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
//               <span className="mr-2">
//                 <a href="https://www.facebook.com/">
//                   <FaFacebook size={30} />
//                 </a>
//               </span>
//               <span className="mr-2">
//                 <a href="https://www.instagram.com/">
//                   <FaInstagramSquare size={30} />
//                 </a>
//               </span>
//               <span className="mr-2">
//                 <a href="https://www.twitter.com/">
//                   <FaSquareXTwitter size={30} />
//                 </a>
//               </span>
//             </p>
//           </div>
//         </div>
//       </footer>
//     </>
//   );
// };

// export default Footer;
import React from "react";
import {FaFacebook, FaInstagramSquare} from "react-icons/fa";
import {FaSquareXTwitter} from "react-icons/fa6";
import {useNavigate} from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();

  // Function to handle navigation and scrolling
  const scrollToSection = (sectionId) => {
    navigate("/"); // Navigate to the homepage first

    // Wait a short time to ensure the page has loaded before scrolling
    setTimeout(() => {
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({behavior: "smooth"});
      }
    }, 100); // Delay to allow navigation
  };

  return (
    <footer className="bg-blue-700 text-white mt-10">
      {/* Main Footer Container */}
      <div className="container px-5 py-12 mx-auto flex md:items-center lg:items-start md:flex-row flex-wrap flex-col">
        {/* Logo Section */}
        <div className="w-64 md:mx-0 mx-auto text-center md:text-left">
          <h3 className="font-bold text-3xl text-white">
            C<span className="text-red-600">Shop</span>
          </h3>
          <p className="text-sm mt-2 opacity-80">
            Your Trusted Shopping Partner
          </p>
        </div>

        {/* Footer Links */}
        <div className="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
          {/* Quick Links */}
          <div className="lg:w-1/3 md:w-1/2 w-full px-4">
            <h2 className="title-font font-medium text-lg mb-3 border-b-2 border-red-500 pb-1">
              QUICK LINKS
            </h2>
            <ul className="list-none">
              <li
                className="mt-2 cursor-pointer hover:text-gray-300"
                onClick={() => navigate("/")}
              >
                Home
              </li>
              <li
                className="mt-2 cursor-pointer hover:text-gray-300"
                onClick={() => navigate("/about")}
              >
                About
              </li>
              <li
                className="mt-2 cursor-pointer hover:text-gray-300"
                onClick={() => navigate("/contact")}
              >
                Contact
              </li>
              <li
                className="mt-2 cursor-pointer hover:text-gray-300"
                onClick={() => navigate("/login")}
              >
                Login
              </li>
            </ul>
          </div>

          {/* Menu */}
          <div className="lg:w-1/3 md:w-1/2 w-full px-4">
            <h2 className="title-font font-medium text-lg mb-3 border-b-2 border-red-500 pb-1">
              SERVICES
            </h2>
            <ul className="list-none">
              <li
                className="mt-2 cursor-pointer hover:text-gray-300"
                onClick={() => scrollToSection("services")}
              >
                Features
              </li>
              <li
                className="mt-2 cursor-pointer hover:text-gray-300"
                onClick={() => scrollToSection("gallery")}
              >
                Gallery
              </li>
              <li
                className="mt-2 cursor-pointer hover:text-gray-300"
                onClick={() => scrollToSection("testimonial")}
              >
                New Reviews
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="lg:w-1/3 md:w-1/2 w-full px-4">
            <h2 className="title-font font-medium text-lg mb-3 border-b-2 border-red-500 pb-1">
              CONTACT
            </h2>
            <ul className="list-none">
              <li className="mt-2">📞 +123 456 7890</li>
              <li className="mt-2">📧 support@cshop.com</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Social Media & Copyright */}
      <div className="bg-gray-600 text-white py-4">
        <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center px-5">
          <p className="text-sm font-medium">
            &copy; 2025 CShop - All Rights Reserved
          </p>
          <div className="flex space-x-4 mt-2 sm:mt-0">
            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-300 transition"
            >
              <FaFacebook size={30} />
            </a>
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-pink-400 transition"
            >
              <FaInstagramSquare size={30} />
            </a>
            <a
              href="https://www.twitter.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400 transition"
            >
              <FaSquareXTwitter size={30} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
