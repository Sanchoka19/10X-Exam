import { Link } from "react-router-dom";
import Button from "../common/Button";
import { Menu } from "lucide-react";

const MainHeader = (props) => {
    return (
        <header className="py-[30px] px-[20px] lg:py-[30px] lg:px-[60px] flex justify-between items-center">
            <Link to={"/"}><span className="font-black text-[40px] text-black cursor-pointer">VELOURA</span></Link>
            <div className="items-center gap-[32px] hidden md:flex">
                <nav className="flex">
                    <ul className="flex gap-[24px] ">
                        <li>
                            <Link to={"/"}>Home</Link>
                        </li>
                        <li>
                            <Link to="/shop">New Arrivals</Link>
                        </li>
                        <li>
                            <Link>Packages</Link>
                        </li>
                    </ul>
                </nav>
                <Link to={"/SignUp"}><Button colorClass="bg-black text-white" value="Sign Up" /></Link>
            </div>
            <Menu className="md:hidden  cursor-pointer w-6 h-6" onClick={props.onClickMenu} />
        </header >
    )
}

export default MainHeader;