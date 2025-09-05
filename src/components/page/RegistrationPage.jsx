import { useState } from "react";


// { Components }
import Input from "../common/Input";
import Button from "../common/Button";
import SocialNetButton from "../common/SocialNetButton";

// { Images }
import MainImg from "/assets/images/pexels-olly-919453.jpg";
import googleIco from "/assets/icons/GoogleIco.svg";
import iphoneIco from "/assets/icons/ApleIco.svg";
import { Link } from "react-router-dom";


const RegistrationPage = () => {
    const [form, setForm] = useState({ firstName: '', lastName: '', email: '', phoneNum: '', password: '', confirmPassword: '' });
    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm(prev => (
            { ...prev, [name]: value }
        ))
    }

    const validate = () => {
        const err = {};

        if (!form.firstName.trim()) {
            err.firstName = "სახელი აუცილებელია"
        }

        if (!form.lastName.trim()) {
            err.lastName = "გვარი აუცილებელია"
        }

        const gmailRegex = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;
        if (!form.email.trim()) {
            err.email = "მეილი აუცილებელია"
        } else if (!gmailRegex.test(form.email)) {
            err.email = "არასწორი სიმბოლოები";
        }

        if (form.phoneNum.length < 9) {
            err.phoneNum = "სიმბოლოების რაოდენობაა არაა საკმარისი"
        }

        if (form.password.length < 8) {
            err.password = "არასკმარისი სიმბოლოების რაოდენობა"
        }

        if (form.password !== form.confirmPassword) {
            err.confirmPassword = "არ ემთხვევა პაროლები ერთმანეთს"
        }

        return err;
    }

    const handleOnSubmit = (e) => {
        e.preventDefault();

        const v = validate();
        setErrors(v);

        if (Object.keys(v).length > 0) return;

        setErrors({});
        setForm({ firstName: '', lastName: '', email: '', phoneNum: '', password: '', confirmPassword: '' });
        alert("თქვენი რეგისტრაცია წარმატებით დასრულდა");
    }

    return (
        <div className="flex w-screen h-screen lg:">
            <div className="hidden lg:flex w-1/2 h-full">
                <img
                    src={MainImg}
                    alt="Main Img"
                    className="w-full h-full object-cover"
                />
            </div>

            <div className="w-1/2 h-full flex flex-col justify-center items-center p-3 gap-[40px]">
                <h1 className="font-black">VELOURA</h1>
                <div className="w-full flex flex-col gap-[16px] max-w-[80%] items-center">
                    <span className="text-32px font-bold">Create Account</span>
                    <div className="w-full flex gap-[12px] justify-center">
                        <Link to={"/"}><SocialNetButton src={googleIco} value="Sign up with Google" /></Link>
                        <Link to={"/"}><SocialNetButton src={iphoneIco} value="Sign up with Apple" /></Link>
                    </div>
                </div>
                <div className="flex gap-[12px] w-full items-center justify-center">
                    <span className="h-[5px]  bg-[#000] w-[5%]"></span>
                    <span className="text-[24px] font-bold">OR</span>
                    <span className="h-[5px] bg-[#000] w-[5%]"></span>
                </div>
                <form onSubmit={handleOnSubmit} className="flex flex-col gap-[32px] w-full max-w-[80%] items-center">
                    <div className="flex gap-[12px] w-[100%]">
                        <div className="flex flex-col gap-[4px] w-full">
                            <Input type="input" inputVal="First Name" name="firstName" value={form.firstName} onChange={handleChange} />
                        </div>
                        <div className="flex flex-col gap-[4px] w-full">
                            <Input type="input" inputVal="Last Name" name="lastName" value={form.lastName} onChange={handleChange} />
                        </div>
                    </div>
                    <div className="flex gap-[12px] w-[100%]">
                        <div className="flex flex-col w-full">
                            <Input type="input" inputVal="Email Addres" name="email" value={form.email} onChange={handleChange} />
                            {errors.email && <span className="text-red-400">{errors.email}</span>}
                        </div>
                        <div className="flex flex-col w-full">
                            <Input type="input" inputVal="Phone Number" name="phoneNum" value={form.phoneNum} onChange={handleChange} />
                            {errors.phoneNum && <span className="text-red-400">{errors.phoneNum}</span>}
                        </div>
                    </div>
                    <div className="flex gap-[12px] w-[100%]">
                        <div className="flex flex-col w-full">
                            <Input type="input" inputVal="Password" name="password" value={form.password} onChange={handleChange} />
                            {errors.password && <span className="text-red-400">{errors.password}</span>}
                        </div>
                        <div className="flex flex-col w-full">
                            <Input type="input" inputVal="Confirm Password" name="confirmPassword" value={form.confirmPassword} onChange={handleChange} />
                            {errors.confirmPassword && <span className="text-red-400">{errors.confirmPassword}</span>}
                        </div>
                    </div>
                    <div className="flex flex-col gap-[16px] w-full items-center">
                        <Link to={"/"} className="w-full flex justify-center">
                            <Button
                                value="Create Account"
                                colorClass="bg-black text-white hover:bg-gray-800"
                                sizeClass="w-[90%] pt-[20px] pb-[20px]"
                                fontSizeClass="text-[16px]"
                                type="submit"
                            />
                        </Link>
                        <span className="w-[90%] text-center cursor-pointer">Already have an account? <Link to={"/Login"}><button type="button" className="text-[#5B86E5]">Login</button></Link></span>
                    </div>
                </form>
            </div >
        </div >
    );
};

export default RegistrationPage;