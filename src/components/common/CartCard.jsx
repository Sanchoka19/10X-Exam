import { Plus, Minus } from "lucide-react";

const CartCard = ({ img, title, price, quantity, onQuantityChange }) => {
    return (
        <div className="flex w-fit ">
            <img src={img} alt="img" className="md:w-[170px]  w-[140px]" />
            <div className="flex flex-col gap-[12px] py-[10px] px-[20px] justify-between">
                <div className="flex flex-col gap-[8px]">
                    <span className="text-2xl font-bold">{title}</span>
                    <span className="text-xl font-bold">{`$ ${price}`}</span>
                </div>
                <div className="p-[10px] border-1 rounded-xl border-[#EEEEEE] w-fit flex items-center gap-[24px]">
                    <button
                        className="border-none"
                        onClick={() => onQuantityChange(quantity > 1 ? quantity - 1 : 1)}
                    >
                        <Minus />
                    </button>
                    <span className="text-xl font-bold">{quantity}</span>
                    <button
                        className="border-none"
                        onClick={() => onQuantityChange(quantity + 1)}
                    >
                        <Plus />
                    </button>
                </div>
            </div>
        </div>
    )
}

export default CartCard;
