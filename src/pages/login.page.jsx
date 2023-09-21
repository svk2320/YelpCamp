import React from "react";
import Input from "../components/input.component";
import Button from "../components/button.component";
import User from "../assets/User Testimonial.svg";

const Login = () => {
  return (
    <div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 relative">
        <div className="flex flex-col justify-start items-center">
          <div className="w-2/3">
            <div className="font-bold text-3xl mb-5">
              Start exploring camps from all around the world.
            </div>
            <Input
              label={"Username"}
              placeholder={"johndoe_91"}
              type={"text"}
              // InputChanges={""}
              // values={""}
            />
            <Input
              label={"Password"}
              placeholder={"Enter Your Password"}
              type={"password"}
              // InputChanges={""}
              // values={""}
            />
            <div className="my-3">
              <Button text={"Login"} wFull={true} />
            </div>
            <div>
              Not a user yet?{" "}
              <span className="text-[#41accd] font-semibold underline hover:cursor-pointer">
                Create an account
              </span>
            </div>
          </div>
        </div>
        <div className="bg-[#f9f7f0] h-screen flex justify-center items-center lg:absolute lg:-top-[51px] lg:right-0 lg:z-10 lg:w-[45%]">
          <div className="w-[250px] h-fit">
            <div className="font-bold text-xl mb-3">
              "YelpCamp has honestly saved me hours of research time, and the
              camps on here are definitely well picked and added."
            </div>
            <div className="flex flex-row">
              <img src={User} alt="User" />
              <div className="ml-3">
                <div className="font-bold">May Andrews</div>
                <div>Profession Hiker</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
