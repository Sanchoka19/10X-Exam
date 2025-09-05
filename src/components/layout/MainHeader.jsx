import Button from "../common/Button";
import { Menu } from "lucide-react";


const MainHeader = (props) => {
    return (
        <header className="py-[30px] px-[20px] lg:py-[30px] lg:px-[60px] flex justify-between items-center">
            <span className="font-black text-[40px] text-black cursor-pointer">VELOURA</span>
            <div className="items-center gap-[32px] hidden md:flex">
                <nav className="flex">
                    <ul className="flex gap-[24px] ">
                        <li>
                            <a href="">Home</a>
                        </li>
                        <li>
                            <a href="#">New Arrivals</a>
                        </li>
                        <li>
                            <a href="#">Packages</a>
                        </li>
                    </ul>
                </nav>
                <Button colorClass="bg-black text-white" value="Sign Up" />
            </div>
            <Menu className="md:hidden  cursor-pointer w-6 h-6" onClick={props.onClickMenu} />
        </header >
    )
}

export default MainHeader;