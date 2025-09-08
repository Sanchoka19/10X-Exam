// { Components }
import Input from "../common/Input";
import Button from "../common/Button";

// { Images }
import MainImg from "/assets/images/pexels-olly-972804.jpg";
import { useState } from "react";
import { useNavigate } from "react-router-dom";



const Newpass = () => {
    const [form, setForm] = useState({ password: '', confirmPassword: '' });
    const [errors, setErrors] = useState({});
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm(prev => (
            { ...prev, [name]: value }
        ))
    }

    const validate = () => {
        const err = {};

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
        setForm({ password: '', confirmPassword: '' });
        alert("თქვენი რეგისტრაცია წარმატებით დასრულდა");
        navigate("/");
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
                    <div className="flex flex-col w-full">
                        <Input type="input" inputVal="Password" name="password" value={form.password} onChange={handleChange} />
                        {errors.password && <span className="text-red-400">{errors.password}</span>}
                    </div>
                    <div className="flex flex-col w-full">
                        <Input type="input" inputVal="Confirm Password" name="confirmPassword" value={form.confirmPassword} onChange={handleChange} />
                        {errors.confirmPassword && <span className="text-red-400">{errors.confirmPassword}</span>}
                    </div>
                    <div className="flex flex-col gap-[16px] w-full items-center">
                        <Button
                            value="Submit"
                            colorClass="bg-black text-white hover:bg-gray-800"
                            sizeClass="w-[90%] pt-[20px] pb-[20px]"
                            fontSizeClass="text-[16px]"
                            type="submit"
                        />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Newpass;
