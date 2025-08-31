import React, {useState} from "react";
import Layout from "../Layout/Layout";
import {db} from "../../FirebaseAuth/FirebaseAuth";
import {addDoc, collection} from "firebase/firestore";
import toast from "react-hot-toast";

const Contact = () => {
  const [userContact, setUserContact] = useState({
    username: "",
    email: "",
    msg: "",
  });

  const handleContact = (e) => {
    setUserContact({...userContact, [e.target.name]: e.target.value});
    // console.log(userContact);
  };

  const handleSubmitContact = (e) => {
    e.preventDefault();
    if (!userContact.username || !userContact.email || !userContact.msg) {
      return toast.error("All Field are Required");
    } else {
      addDoc(collection(db, "contactUsers"), {
        user: userContact.username,
        userEmail: userContact.email,
        message: userContact.msg,
      })
        .then(() => {
          toast.success(
            `Your Message get Recorded! Thank you, ${userContact.username}`
          );
          setUserContact({
            username: "",
            email: "",
            msg: "",
          });
        })
        .catch((err) => toast.error(err.message));
    }
  };
  return (
    <Layout>
      <section className="text-gray-600 body-font relative mt-[40px]">
        <div className="container px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap">
          <div className="lg:w-2/3 md:w-1/2 bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
            <iframe
              width="100%"
              height="100%"
              className="absolute inset-0"
              frameborder="0"
              title="map"
              marginheight="0"
              marginwidth="0"
              scrolling="no"
              src="https://maps.google.com/maps?width=100%&height=600&hl=en&q=%C4%B0zmir+(My%20Business%20Name)&ie=UTF8&t=&z=14&iwloc=B&output=embed"
              style={{filter: "grayscale(1) contrast(1.2) opacity(0.4)"}}
            ></iframe>
            <div className="bg-white relative flex flex-wrap py-6 rounded shadow-md">
              <div className="lg:w-1/2 px-6">
                <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">
                  ADDRESS
                </h2>
                <p className="mt-1">
                  Cshop Pvt. Ltd. 123, Mhow, Indore , Madhya Pradesh, India -
                  453661
                </p>
              </div>
              <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
                <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">
                  EMAIL
                </h2>
                <a className="text-indigo-500 leading-relaxed">
                  <a href="http://www.gmail.com/" target="_blank">
                    support@cshop.com
                  </a>
                </a>
                <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs mt-4">
                  PHONE
                </h2>
                <p className="leading-relaxed">9691967...</p>
              </div>
            </div>
          </div>
          {/* div 2 */}
          <div className="lg:w-1/3 md:w-1/2 bg-white flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
            <h2 className="text-gray-900 text-lg mb-1 font-medium title-font">
              Contact Us
            </h2>

            <div className="relative mb-4">
              <label for="name" className="leading-7 text-sm text-gray-600">
                Name
              </label>
              <input
                autoComplete="off"
                type="text"
                name="username"
                value={userContact.username}
                id="name"
                onChange={handleContact}
                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div className="relative mb-4">
              <label for="email" className="leading-7 text-sm text-gray-600">
                Email
              </label>
              <input
                autoComplete="off"
                type="email"
                name="email"
                value={userContact.email}
                id="email"
                onChange={handleContact}
                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div className="relative mb-4">
              <label for="message" className="leading-7 text-sm text-gray-600">
                Message
              </label>
              <textarea
                id="message"
                autoComplete="off"
                type="text"
                name="msg"
                value={userContact.msg}
                onChange={handleContact}
                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
              ></textarea>
            </div>
            <button
              className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
              onClick={handleSubmitContact}
            >
              Submit
            </button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
