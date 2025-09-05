import Button from "../../common/Button";

import blackGuy from "/assets/images/BlackHerroGuy.png"
import girlFromTop from "/assets/images/GirlForHerroUp.png"
import curlyGuy from "/assets/images/CurlyGuyForHero.png"

const Herro = () => {
    return (
        <div
            className="
              w-full  px-[20px]
              grid gap-4 h-auto
              grid-cols-1             
              md:grid-cols-2          
              lg:grid-cols-[repeat(3,_minmax(150px,_1fr))] 
            "
        >
            {/* Left big image */}
            <div className="row-span-1 order-1 lg:row-span-4 bg-[#E0E0E0] hidden lg:flex justify-center items-end pt-[20px] rounded-md">
                <img src={blackGuy} alt="blackGuy" className="h-[570px]" />
            </div>

            {/* Top small image (tablet/desktop only) */}
            <div className="row-span-1 order-2 bg-[#E0E0E0] hidden lg:flex justify-center items-end rounded-md pt-[20px]">
                <img src={girlFromTop} alt="girlFromTop" />
            </div>

            {/* Right big image */}
            <div className="row-span-1 order-3 lg:row-span-4 bg-[#E0E0E0] flex justify-center items-end pt-[20px] rounded-md">
                <img src={curlyGuy} alt="curlyGuy" className="h-[570px]" />
            </div>

            {/* Center text block */}
            <div className="bg-transparent lg:order-4 order-1 row-span-1 lg:row-span-2 flex items-center justify-center flex-col p-2 rounded-md">
                <span className="font-bold text-[40px] md:text-[50px] lg:text-[70px] text-[#484848]">
                    ULTIMATE
                </span>
                <span
                    className="text-[60px] md:text-[90px] lg:text-[120px] font-bold"
                    style={{ color: "transparent", WebkitTextStroke: "2px black" }}
                >
                    SALE
                </span>
                <span className="text-[18px] md:text-[20px] lg:text-[24px] font-bold">
                    NEW COLLECTION
                </span>
                <Button colorClass="bg-black font-medium text-white mt-[12px]" value="SHOP NOW" />
            </div>

            {/* Bottom small image (tablet/desktop only) */}
            <div className="row-span-1 order-5 bg-[#E0E0E0] lg:flex justify-center items-end rounded-md pt-[20px] hidden">
                <img src={girlFromTop} alt="girlFromTop" />
            </div>
        </div>
    )
}

export default Herro;
