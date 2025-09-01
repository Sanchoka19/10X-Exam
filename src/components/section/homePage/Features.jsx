import handStar from "../../../assets/icons/HandStar.svg";
import callCenter from "../../../assets/icons/CallCenter.svg";
import orderBox from "../../../assets/icons/orderBox.svg";
import warrancy from "../../../assets/icons/warrancy.svg";

const Features = () => {

    return (
        <div className="flex justify-center p-[120px] flex-wrap lg:gap-[120px] gap-[60px] items-start bg-[#f9f9f9]">
            <div className="flex gap-[12px] items-center">
                <img src={handStar} alt="handStar" />
                <div className="flex flex-col gap-8px">
                    <span className="text-base">High Quality</span>
                    <span className="text-md text-[#484848]">crafted from top materials</span>
                </div>
            </div>
            <div className="flex gap-[12px] items-center">
                <img src={warrancy} alt="warrancy" />
                <div className="flex flex-col gap-8px">
                    <span className="text-base">Warrany Protection</span>
                    <span className="text-md text-[#484848]">Over 2 years</span>
                </div>
            </div>
            <div className="flex gap-[12px] items-center">
                <img src={orderBox} alt="orderBox" />
                <div className="flex flex-col gap-8px">
                    <span className="text-base">Free Shipping</span>
                    <span className="text-md text-[#484848]">Order over 150 $</span>
                </div>
            </div>
            <div className="flex gap-[12px] items-center">
                <img src={callCenter} alt="callCenter" />
                <div className="flex flex-col gap-8px">
                    <span className="text-base">24 / 7 Support</span>
                    <span className="text-md text-[#484848]">Dedicated support</span>
                </div>
            </div>
        </div>
    )
}

export default Features;