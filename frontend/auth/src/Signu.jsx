import React, { useState } from "react";
import "../src/App.css";

import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [name, setName] = useState();
  const [email, setemail] = useState();
  const [password, setpassword] = useState();
  const [confirmpassword, setconfirmpassword] = useState();
  const navigate = useNavigate();
  const handlesignupsubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3000/register", {
        name,
        email,
        password,
        confirmpassword,
      })
      .then((res) => {
        console.log("signup", res);
        navigate("/login");
      })
      .catch((err) => {
        console.log("err", err);
      });
  };

  return (
    <div className=" h-full w-full overflow-hidden">
      <div className=" h-full w-full flex justify-between overflow-hidden max-[768px]:flex-col">
        <div className=" min-[320px]:h-[620px] min-[1024px]:h-[634px] w-4/12  left flex flex-col justify-around max-[768px]:w-full">
          <div className="flex w-full justify-center items-center max-[768px]:flex-col">
            <div className=" w-9/12 flex justify-center ml-[27px] items-center max-[768px]:ml-[1px]">
              <img
                src="https://www.apnaconnection.com/public/admin-panel/img/logo.png"
                alt=""
              />
            </div>
            <div className=" w-3/12 flex justify-center ml-[13px] mt-[4px]  items-center cursor-pointer">
              <img
                className=" w-2/12"
                src="https://www.apnaconnection.com/public/img/cross.jpg"
                alt=""
              />
            </div>
          </div>
          <div className=" min-[320px]:mt-[10px] min-[1024px]:translate-y-[10px] flex justify-center w-full">
            <p className=" w-9/12 flex cursor-pointer items-center bg-[#3c5a9a] text-white p-[7px] rounded-lg max-[320px]:p-[6px] max-[320px]:w-10/12">
              <span></span>
              <span className=" ml-[29px]">Register With Facebook</span>
            </p>
          </div>
          <div className="min-[320px]:mt-[10px] min-[1024px]:translate-y-[0px] flex justify-center w-full ">
            <p className=" w-9/12 flex cursor-pointer items-center bg-[#dd4b39] text-white p-[7px] rounded-lg max-[320px]:p-[6px] max-[320px]:w-10/12">
              <span></span>
              <span className=" ml-[29px]">Register With Google</span>
            </p>
          </div>

          <div className=" w-full flex justify-center items-center  mt-[10px]">
            <p className=" w-4/12 bg-[#C1C1C1] h-[1px] flex justify-center items-center max-[320px]:w-5/12"></p>
            <p className=" flex justify-center items-center h-[1px] w-1/12">
              Or
            </p>
            <p className="bg-[#C1C1C1] w-4/12 flex justify-center items-center h-[1px] max-[320px]:w-4/12"></p>
          </div>

          <form onSubmit={handlesignupsubmit}>
            <div className=" flex justify-center w-full mt-[5px]">
              <div className=" w-2/12 flex items-center justify-center border-y-[1px]  border-s-[1px] border-solid h-[40px]">
                <span></span>
              </div>
              <input
                type="text"
                aria-label="text"
                placeholder="Name"
                onChange={(e) => setName(e.target.value)}
                className=" w-7/12 border-y-[1px]  border-e-[1px] border-solid focus:outline-none  focus:border-s-[2px] focus:border-[#2363ab] focus:border-e-[2px] focus:border-y-[2px] max-[768px]:w-9/12"
              />
            </div>

            <div className=" flex justify-center w-full mt-[10px]">
              <div className=" w-2/12 flex items-center justify-center border-y-[1px]  border-s-[1px] border-solid h-[40px]">
                <span></span>
              </div>
              <input
                type="email"
                aria-label="email"
                placeholder="Email"
                onChange={(e) => setemail(e.target.value)}
                className=" w-7/12 border-y-[1px]  border-e-[1px] border-solid focus:outline-none  focus:border-s-[2px] focus:border-[#2363ab] focus:border-e-[2px] focus:border-y-[2px] max-[768px]:w-9/12"
              />
            </div>

            <div className=" flex justify-center w-full mt-[10px]">
              <div className=" w-2/12 flex items-center justify-center border-y-[1px]  border-s-[1px] border-solid h-[40px]"></div>
              <input
                type="password"
                onChange={(e) => setpassword(e.target.value)}
                aria-label="password"
                placeholder="Password"
                className=" w-7/12 border-y-[1px]  border-e-[1px] border-solid focus:outline-none  focus:border-s-[2px] focus:border-blue-600 focus:border-e-[2px] focus:border-y-[2px] max-[768px]:w-9/12"
              />
            </div>

            <div className=" flex justify-center w-full mt-[10px]">
              <div className=" w-2/12 flex items-center justify-center border-y-[1px]  border-s-[1px] border-solid h-[40px]"></div>
              <input
                type="text"
                onChange={(e) => setconfirmpassword(e.target.value)}
                aria-label="text"
                placeholder="Confirm Password"
                className=" w-7/12 border-y-[1px]  border-e-[1px] border-solid focus:outline-none  focus:border-s-[2px] focus:border-[#2363ab] focus:border-e-[2px] focus:border-y-[2px] max-[768px]:w-9/12"
              />
            </div>

            <button
              type="submit"
              className=" min-[320px]:mt-[7px] flex justify-center w-full min-[1024px]:mt-[10px]"
            >
              <p className=" w-8/12 flex cursor-pointer items-center justify-center bg-[#3c5a9a] text-white p-[10px] rounded-lg">
                <p>
                  {" "}
                  <span className=" font-bold">Register Now!</span>{" "}
                </p>
              </p>
            </button>
          </form>

          <div className=" min-[320px]:translate-y-[4px] w-full flex justify-center min-[1024px]:mt-[0px] min-[768px]:translate-y-[0px]">
            <p className=" text-sm text-gray-400">
              Already have an account?
              <Link to={"/login"} className=" text-[#2363ab]">
                {" "}
                Sign In!
              </Link>
            </p>
          </div>
          <p className=" text-center font-semibold  min-[769px]:block min-[768px]:translate-y-[6px]">
            © 2024 Apna Connection
          </p>
        </div>

        <div className=" overflow-hidden min-[320px]:hidden min-[1024px]:block h-full w-8/12 right max-[768px]:w-full">
          <img
            className="overflow-hidden w-full h-[704px]"
            src="https://www.apnaconnection.com/public/admin-panel/img/register-banner.jpg"
            alt=""
          />
        </div>
      </div>
      {/* <p className=' translate-y-[-4px] block text-center min-[769px]:hidden '>© 2024 Apna Connection</p> */}
    </div>
  );
};

export default Register;
