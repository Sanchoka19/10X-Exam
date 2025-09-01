import star from "../../assets/icons/Star 2.svg";

const Card = (props) => {

    return (
        <div className="flex flex-col p-[24px] bg-white rounded-lg gap-[12px] cursor-pointer">
            <img src={props.img} alt={props.alt} className="w-[336px]  rounded-lg max-h-[224px] h-full object-cover " />
            <div className="flex flex-col gap-[32px]">
                <div className="flex flex-col gap-[4px]">
                    <div className="flex justify-between">
                        <span className="text-2xl">
                            {props.title}
                        </span>
                        <div className="flex gap-[4px]">
                            <img src={star} alt="star" className="w-[20px]" />
                            <img src={star} alt="star" className="w-[20px]" />
                            <img src={star} alt="star" className="w-[20px]" />
                            <img src={star} alt="star" className="w-[20px]" />
                            <img src={star} alt="star" className="w-[20px]" />
                        </div>
                    </div>
                    <span className="text-base text-[#8A8A8A]">{props.brand}</span>
                </div>
                <div className="flex flex-col gap-[24px]">
                    <span className="text-sm">{props.review}</span>
                    <div className="flex justify-between items-center">
                        <span className="text-3xl font-bold">{props.price}</span>
                        <span className={props.status === "Sold Out" ? "text-red-700 text-xs" : props.status === "Almost Sold Out" ? "text-orange-600 text-xs" : "text-green-900 text-xs"}>{props.status}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card;