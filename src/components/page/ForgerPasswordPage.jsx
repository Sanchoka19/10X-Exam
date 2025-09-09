// import { useState } from "react";

// { Components }
import Input from "../common/Input";
import Button from "../common/Button";
// { Images }
import MainImg from "/assets/images/pexels-8.jpg";
import { Link } from "react-router-dom";



const ForgetPassword = () => {
    const handleOnSubmit = (e) => {
        e.preventDefault();
    }

    return (
        <div className="flex w-screen h-screen ">
            <div className="hidden lg:flex w-1/2 h-full">
                <img
                    src={MainImg}
                    alt="Main Img"
                    className="w-full h-full object-cover"
                />
            </div>

            <div className="lg:w-1/2 w-screen py-[40px] min-h-screen flex flex-col justify-center items-center p-3 gap-[40px]">
                <h1 className="font-black">VELOURA</h1>
                <form onSubmit={handleOnSubmit} className="flex flex-col gap-4 w-full max-w-[80%] items-center">
                    <span className="text-[24px] font-bold text-left w-full mb-[32px]">Forget Password</span>
                    <Input type="input" inputVal="Email Address" />
                    <div className="flex flex-col gap-[16px] w-full items-center">
                        <Link to={"/Confirm"} className="flex w-full justify-center">
                            <Button
                                value="Send Confirmation Code"
                                colorClass="bg-black text-white hover:bg-gray-800"
                                sizeClass="w-[90%] pt-[20px] pb-[20px]"
                                fontSizeClass="text-[16px]"
                                type="submit"
                            />
                        </Link>
                        <span className="w-[90%] text-center cursor-pointer">Already have an account? <button type="button" className="text-[#5B86E5]"><Link to={"/Newpass"} className="flex w-full justify-center">Login</Link></button></span>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ForgetPassword;
