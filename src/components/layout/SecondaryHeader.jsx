import { User, Menu, Handbag } from "lucide-react";
import { Link } from "react-router-dom";

const SecondaryHeader = (props) => {
    return (
        <header className="py-[30px] px-[20px] lg:py-[30px] lg:px-[60px] flex justify-between items-center">
            <Link to={"/"}><span className="font-black text-[32px] md:text-[40px] text-black cursor-pointer">VELOURA</span></Link>
            <div className="items-center gap-[32px] hidden md:flex">
                <nav className="flex">
                    <ul className="flex gap-[24px] ">
                        <li>
                            <Link to={"/"}>Home</Link>
                        </li>
                        <li>
                            <Link to={"/shop"}>Shop</Link>
                        </li>
                        <li>
                            <Link to={"/shop"}>Product</Link>
                        </li>
                    </ul>
                </nav>
            </div>
            <div className="flex gap-[24px]">
                <User className="w-6 h-6 cursor-pointer" />
                <Handbag className="w-6 h-6 cursor-pointer" onClick={props.onClickHandbag} />
                <Menu className="md:hidden cursor-pointer w-6 h-6" onClick={props.onClickMenu} />
            </div>
        </header >
    )
}

export default SecondaryHeader;