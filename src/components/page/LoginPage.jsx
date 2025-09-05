// { Components }
import Input from "../common/Input";
import Button from "../common/Button";
import SocialNetButton from "../common/SocialNetButton";

// { Images }
import MainImg from "/assets/images/pexels-olly-972804.jpg";
import googleIco from "/assets/icons/GoogleIco.svg";
import iphoneIco from "/assets/icons/ApleIco.svg";
import { Link } from "react-router-dom";


// const handleRegister = () => {
//     navigate("/register");
// }

const LoginPage = () => {
    const handleOnSubmit = (e) => {
        e.preventDefault();
    }

    // const [signInForm, setSignInForm] = useState({login:'', password:''});

    return (
        <div className="flex w-screen h-screen ">
            <div className="w-1/2 h-full">
                <img
                    src={MainImg}
                    alt="Main Img"
                    className="w-full h-full object-cover"
                />
            </div>

            <div className="w-1/2 h-full flex flex-col justify-center items-center p-3 gap-[40px]">
                <h1 className="font-black">VELOURA</h1>
                <div className="w-full flex flex-col gap-[16px] max-w-[80%] items-center">
                    <span className="text-32px font-bold">Sign In To VOLURE</span>
                    <div className="w-full flex gap-[12px] items-center justify-center">
                        <Link to={"/"}><SocialNetButton src={googleIco} value="Sign up with Google" /></Link>
                        <Link to={"/"}><SocialNetButton src={iphoneIco} value="Sign up with Apple" /></Link>
                    </div>
                </div>
                <div className="flex gap-[12px] w-full items-center justify-center">
                    <span className="h-[5px]  bg-[#000] w-[5%]"></span>
                    <span className="text-[24px] font-bold">OR</span>
                    <span className="h-[5px] bg-[#000] w-[5%]"></span>
                </div>
                <form onSubmit={handleOnSubmit} className="flex flex-col gap-4 w-full max-w-[80%] items-center">
                    <Input type="input" inputVal="Email" />
                    <Input type="input" inputVal="Password" />
                    <div className="flex flex-col gap-[16px] w-full items-center">
                        <Link to={"/"} className="w-full flex justify-center">
                            <Button
                                value="Sign In"
                                colorClass="bg-black text-white hover:bg-gray-800"
                                sizeClass="w-[90%] pt-[20px] pb-[20px]"
                                fontSizeClass="text-[16px]"
                                type="submit"
                            />
                        </Link>
                        <Link to={"/SignUp"} className="w-full flex justify-center">
                            <Button
                                value="Register Now"
                                colorClass="border-2 text-[#5B86E5] weight-400 hover:bg-gray-100 hover:text-black border-[#5B86E5]"
                                sizeClass="w-[90%] pt-[20px] pb-[20px]"
                                fontSizeClass="text-[16px]"
                                type="button"
                            />
                        </Link>
                        <button className="w-[90%] text-right font-bold text-[#5B86E5] cursor-pointer" type="button"><Link to={"/ForgetPassword"}> Forger Password? </Link></button>
                    </div>
                </form>
            </div >
        </div >
    );
};

export default LoginPage;
