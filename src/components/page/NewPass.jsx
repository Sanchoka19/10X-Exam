// { Components }
import Input from "../common/Input";
import Button from "../common/Button";

// { Images }
import MainImg from "/assets/images/pexels-olly-972804.jpg";
import { Link } from "react-router-dom";



const Newpass = () => {
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
                    <span className="text-[24px] font-bold text-left w-full mb-[32px]">Enter Your New Password</span>
                    <Input type="input" inputVal="New Password" />
                    <Input type="input" inputVal="Confirmation Password" />
                    <div className="flex flex-col gap-[16px] w-full items-center">
                        <Link to={"/"} className="flex w-full justify-center">
                            <Button
                                value="Submit"
                                colorClass="bg-[#5B86E5] text-white hover:bg-gray-800"
                                sizeClass="w-[90%] pt-[20px] pb-[20px]"
                                fontSizeClass="text-[16px]"
                                type="submit"
                            />
                        </Link>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Newpass;
