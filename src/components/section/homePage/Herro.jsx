import Button from "../../common/Button";

import heroImg1 from "/assets/images/HerroImg1.jpg"
import heroImg2 from "/assets/images/HerroImg2.jpg"
import heroImg3 from "/assets/images/HerroImg3.jpg"
import heroImg4 from "/assets/images/HerroImg4.jpg"
import { Link } from "react-router-dom";

const Herro = () => {
    return (
        <div
            className="
              w-full  px-[20px]
              grid gap-4 h-auto
              grid-cols-1             
              md:grid-cols-2          
              lg:grid-cols-[repeat(3,_minmax(150px,_1fr))] 
              items-center
            "
        >
            {/* Left big image */}
            <div className="row-span-1 order-1 lg:row-span-4  hidden lg:flex justify-center items-end pt-[20px]">
                <img src={heroImg2} alt="blackGuy" className="w-full h-full rounded-md" />
            </div>

            {/* Top small image (tablet/desktop only) */}
            <div className="row-span-1 order-2  hidden lg:flex justify-center items-end rounded-md pt-[20px]">
                <img src={heroImg4} alt="girlFromTop" className="h-[300px] rounded-md" />
            </div>

            {/* Right big image */}
            <div className="row-span-1 order-3 lg:row-span-4  flex justify-center items-end pt-[20px] rounded-md">
                <img src={heroImg1} alt="curlyGuy" className="w-full rounded-md object-cover h-full" />
            </div>

            {/* Center text block */}
            <div className="bg-transparent lg:order-4 order-1 row-span-1 lg:row-span-2 flex items-center justify-center flex-col p-2 rounded-md">
                <span className="font-bold text-[30px] md:text-[40px] lg:text-[70px] text-[#484848]">
                    ULTIMATE
                </span>
                <span
                    className="text-[50px] md:text-[90px] lg:text-[70px] font-bold"
                    style={{ color: "transparent", WebkitTextStroke: "2px black" }}
                >
                    SALE
                </span>
                <span className="text-[18px] md:text-[20px] lg:text-[24px] font-bold">
                    NEW COLLECTION
                </span>
                <Link to={"/shop"}><Button colorClass="bg-black font-medium text-white mt-[12px]" value="SHOP NOW" /></Link>
            </div>

            {/* Bottom small image (tablet/desktop only) */}
            <div className="row-span-1 order-5  lg:flex justify-center items-end rounded-md pt-[20px] hidden">
                <img src={heroImg3} alt="girlFromTop" className="h-[300px] rounded-md" />
            </div>
        </div>
    )
}

export default Herro;
