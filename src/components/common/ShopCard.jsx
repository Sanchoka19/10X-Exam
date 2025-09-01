const ShopCard = (props) => {
    return (
        <div className="flex flex-col gap-[12px] relative">
            <img src={props.img} className="w-[302px]" />
            <div className="flex flex-col gap-[8px]">
                <span className="text-xl">{props.title}</span>
                <span className="text-3xl font-bold">{`$${props.price}`}</span>
            </div>
            <span className={props.status === "Sold Out" ? "absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 font-bold bg-[#B1B1B1] px-[20px] py-[40px] w-fit flex items-center justify-center text-white rounded-[100px]" : "hidden"}>Sold Out</span>
        </div>
    )
}

export default ShopCard;