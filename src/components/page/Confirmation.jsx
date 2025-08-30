// import { useState } from "react";

// { Components }
import Input from "../common/Input";
import Button from "../common/Button";

// { Images }
import MainImg from "../../assets/images/pexels-olly-972804.jpg";



const Confirmation = () => {
    const handleOnSubmit = (e) => {
        e.preventDefault();
    }

    return (
        <div className="flex w-screen h-screen ">
            <div className="w-1/2 h-full">
                <img
                    src={MainImg}
                    alt="Main Img"
                    className="w-full h-full object-cover"
                />
            </div>

            <div className="w-1/2 h-full flex flex-col justify-center items-center p-3 gap-[120px]">
                <h1 className="font-black">VELOURA</h1>
                <form onSubmit={handleOnSubmit} className="flex flex-col gap-4 w-full max-w-[80%] items-center">
                    <span className="text-[24px] font-bold text-left w-full mb-[32px]">Enter The Confirmation Code</span>
                    <Input type="input" inputVal="Confirmation Code" />
                    <div className="flex flex-col gap-[16px] w-full items-center">
                        <Button
                            value="Recover Account"
                            colorClass="bg-black text-white hover:bg-gray-800"
                            sizeClass="w-[90%] pt-[20px] pb-[20px]"
                            fontSizeClass="text-[16px]"
                            type="submit"
                        />
                        <span className="w-[90%] text-center cursor-pointer">Didn’t receive Confirmation Code?  <button type="button" className="text-[#5B86E5]">Resend Now</button></span>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Confirmation;
