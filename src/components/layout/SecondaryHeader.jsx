import { User, ShoppingCart, Menu } from "lucide-react";

const SecondaryHeader = (props) => {
    return (
        <header className="py-[30px] px-[20px] lg:py-[30px] lg:px-[60px] flex justify-between items-center">
            <span className="font-black text-[32px] md:text-[40px] text-black cursor-pointer">VELOURA</span>
            <div className="items-center gap-[32px] hidden md:flex">
                <nav className="flex">
                    <ul className="flex gap-[24px] ">
                        <li>
                            <a href="#">Home</a>
                        </li>
                        <li>
                            <a href="#">Shop</a>
                        </li>
                        <li>
                            <a href="#">Product</a>
                        </li>
                    </ul>
                </nav>
            </div>
            <div className="flex gap-[24px]">
                <div className="flex gap-[24px]">
                    <User className="w-6 h-6 cursor-pointer" />
                    <ShoppingCart className="w-6 h-6 cursor-pointer" onClick={props.onClick} />
                </div>
                <Menu className="md:hidden cursor-pointer w-6 h-6" />
            </div>
        </header >
    )
}

export default SecondaryHeader;