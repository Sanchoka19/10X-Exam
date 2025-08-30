import Styles from "./MainHeader.module.css"
import Button from "../common/Button";
import BurgerMenu from "../../assets/icons/burger.svg"

const MainHeader = () => {
    return (
        <header className="py-[30px] px-[20px] lg:py-[30px] lg:px-[60px] flex justify-between items-center">
            <span className="font-black text-[40px] text-black cursor-pointer">VELOURA</span>
            <div className="items-center gap-[32px] hidden lg:flex">
                <nav className="flex">
                    <ul className="flex gap-[24px] ">
                        <li>
                            <a href="#">Home</a>
                        </li><li>
                            <a href="#">New Arrivals</a>
                        </li><li>
                            <a href="#">Packages</a>
                        </li><li>
                            <a href="#">Sign In</a>
                        </li>
                    </ul>
                </nav>
                <Button colorClass="bg-black text-white" value="Sign Up" />
            </div>
            <img src={BurgerMenu} alt="burgerMenu" className="lg:hidden cursor-pointer" />
        </header >
    )
}

export default MainHeader;