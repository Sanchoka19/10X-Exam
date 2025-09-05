import { X } from "lucide-react";

const BurgerMenu = (props) => {
    return (
        <div className="w-screen h-screen flex flex-col items-end bg-white fixed z-1000 top-0 left-0 ">
            <div className="flex p-[30px]" >
                <X className="w-10 h-10 cursor-pointer" onClick={props.onClick} />
            </div>
            <nav className="flex justify-center w-full">
                <ul className="flex flex-col w-full items-center">
                    <li className="p-[20px] border-t-1 border-black w-full flex justify-center hover:bg-[#F7F4EA] text-white duration-300 ease-in-out">
                        <a href="#" className="hover:text-white">Home</a>
                    </li>
                    <li className="p-[20px] border-t-1 border-black w-full flex justify-center hover:bg-[#F7F4EA] text-white duration-300 ease-in-out">
                        <a href="#">Shop</a>
                    </li>
                    <li className="p-[20px] border-t-1 border-black w-full flex justify-center hover:bg-[#F7F4EA] text-white duration-300 ease-in-out">
                        <a href="#">Product</a>
                    </li>
                </ul>
            </nav>
        </div >
    )
}

export default BurgerMenu;