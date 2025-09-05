import { useState } from "react";
import { Star, Eye, Plus, Minus } from "lucide-react";

import Button from "../../common/Button";

import girlImg from "../../../assets/images/details-girl.png";
import img1 from "../../../assets/images/filter-girl-1.png";
import img2 from "../../../assets/images/filter-girl-2.png";
import img3 from "../../../assets/images/filter-girl-3.png";
import img4 from "../../../assets/images/filter-girl-4.png";

import MiniCart from "../MiniCart"
import BurgerMenu from "../../common/BurgerMenu";

const clotheSize = [{ size: "S" }, { size: "M" }, { size: "L" }, { size: "XL" }];



const ProductDetails = (props) => {
    const [activeClotheSize, setActiveClotheSize] = useState("S");
    const [amount, setAmount] = useState("1");

    return (
        <div className="flex gap-[60px] w-full justify-center lg:p-[60px] p-[10px] flex-wrap ">
            {props.showBurger && <BurgerMenu onClick={() => props.setShowBurger(false)} />}
            {props.showCart && <MiniCart onClick={() => props.setShowCart(false)} />}


            <div className="flex gap-[24px] flex-wrap justify-center">
                <div className="flex xl:flex-col gap-[16px] flex-wrap order-2 lg:order1">
                    <img src={girlImg} alt="details-img" className="w-[58px] h-[80px] cursor-pointer" />
                    <img src={img1} alt="details-img" className="w-[58px] h-[80px] cursor-pointer" />
                    <img src={img2} alt="details-img" className="w-[58px] h-[80px] cursor-pointer" />
                    <img src={img3} alt="details-img" className="w-[58px] h-[80px] cursor-pointer" />
                    <img src={img4} alt="details-img" className="w-[58px] h-[80px] cursor-pointer" />
                    <img src={girlImg} alt="details-img" className="w-[58px] h-[80px] cursor-pointer" />
                    <img src={img1} alt="details-img" className="w-[58px] h-[80px] cursor-pointer" />
                </div>
                <div className="order-1">
                    <img src={girlImg} alt="girl" />
                </div>
            </div>

            <div className="flex flex-col max-w-[590px] w-full justify-between gap-[90px]">
                <div className="flex flex-col w-full gap-[24px]">
                    <div className="flex flex-col gap-[8px]">
                        <span className="text-[#666666] text-2xl">Veloura</span>
                        <div className="flex justify-between items-center">
                            <h1 className="font-bold">Denim Jacket</h1>
                            <span className="border-1 border-[#EEEEEE] p-[15px] rounded-[100px] hover:bg-[#fff] duration-300 ease-in-out cursor-pointer">
                                <Star className="" />
                            </span>
                        </div>
                        <div className="flex gap-[8px] items-center">
                            <div className="flex gap-[4px]">
                                <Star className="w-4" fill="black" />
                                <Star className="w-4" fill="black" />
                                <Star className="w-4" fill="black" />
                                <Star className="w-4" fill="black" />
                                <Star className="w-4" />
                            </div>
                            <span>(3)</span>
                        </div>
                    </div>
                    <span className="text-4xl font-bold">$39.00</span>
                    <div className="flex gap-[4px] items-center">
                        <Eye />
                        <span>24 people are viewing this right now</span>
                    </div>
                    <div className="flex flex-col gap-[8px]">
                        {
                            <span className="text-xl font-bold">Size: {activeClotheSize}</span>
                        }
                        <div className="flex gap-[12px]">
                            {clotheSize.map(item => (
                                <span
                                    key={item.size}
                                    className={activeClotheSize == item.size
                                        ? "py-[10px] w-[42px] flex justify-center border-2 bg-black rounded-xl text-white cursor-pointer font-bold"
                                        : "py-[10px] w-[42px] flex justify-center border-2 border-[#8A8A8A] text-[#8A8A8A] rounded-xl cursor-pointer"}
                                    onClick={() => setActiveClotheSize(item.size)}
                                >
                                    {item.size}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="flex flex-col gap-[12px]">
                    <span className="text-xl font-bold">Quantity</span>
                    <div className="flex gap-[32px]">
                        <div className="p-[10px] border-1 rounded-xl border-[#EEEEEE] w-fit flex items-center gap-[24px]">
                            <button className="border-none" onClick={() => setAmount(amount <= 1 ? 0 : amount - 1)}><Minus /></button>
                            <span className="text-xl font-bold">{amount}</span>
                            <button className="border-none" onClick={() => setAmount(amount + 1)}><Plus /></button>
                        </div>

                        <Button colorClass="bg-transparent border-1 border-black" sizeClass="w-full" value="Add to cart" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductDetails;