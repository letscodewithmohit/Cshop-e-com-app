import React, {useState} from "react";
import Layout from "../../Components/Layout/Layout";
import login from "../../assets/log2.jpg";
import {Link, useNavigate} from "react-router-dom";
import toast from "react-hot-toast";
import {createUserWithEmailAndPassword, updateProfile} from "firebase/auth";
import {app, auth} from "../../FirebaseAuth/FirebaseAuth";

const SignUp = () => {
  const navigateLogin = useNavigate();
  const [userSignUp, setuserSignUp] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setuserSignUp({...userSignUp, [e.target.name]: e.target.value});
    // console.log(userSignUp);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!userSignUp.username || !userSignUp.email || !userSignUp.password) {
      return toast.error("All Field are Required");
    } else {
      createUserWithEmailAndPassword(
        auth,
        userSignUp.email,
        userSignUp.password
      )
        .then(async (res) => {
          const user = res.user;
          console.log(res);
          await updateProfile(user, {
            displayName: userSignUp.username,
          });
          navigateLogin("/login");
        })
        .catch((err) => toast.error(err.message));
    }
  };
  return (
    <>
      <Layout>
        <div className="relative ">
          <img
            src={login}
            alt="login-image"
            className="object-cover w-full object-center h-[200px] mt-5"
          />
          <div className="bg-black w-full h-[200px] absolute top-0 left-0 opacity-[.4]"></div>
          <h2 className="absolute top-[40%] md:left-[30%] left-[20%] sm:left-[10%] text-white font-semibold  text-3xl md:text-5xl border-b-4 border-red-600">
            Sign up
          </h2>
        </div>
        {/* Sign box */}

        <div className="container px-5 py-10 mx-auto flex ">
          {/* form box */}     
          <div className="mx-auto bg-red-500 rounded-lg p-8 flex flex-col mt-4 md:mt-0 shadow-md text-white w-[500px]">
            <h2 className="text-white        -3xl mb-5 font-medium title-font">
              SIGN UP
            </h2>

            <div className="relative mb-4">
              <label htmlFor="name" className="leading-7 text-sm">
                Name
              </label>
              <input
                autoComplete="off"
                type="text"
                name="username"
                value={userSignUp.username}
                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                onChange={handleChange}
              />
            </div>
            <div className="relative mb-4">
              <label htmlFor="email" className="leading-7 text-sm">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={userSignUp.email}
                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                onChange={handleChange}
              />
            </div>

            <div className="relative mb-4">
              <label htmlFor="password" className="leading-7 text-sm">
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                value={userSignUp.password}
                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200  text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                onChange={handleChange}
              />
            </div>
            <button
              className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg "
              onClick={handleSubmit}
            >
              Sign up
            </button>
            <p className="text-xs text-white mt-5">
              Already have Account?{" "}
              <Link to="/login">
                {" "}
                <button className="cursor-pointer hover:text-blue-300 ">
                  Login
                </button>
              </Link>
            </p>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default SignUp;
