import { useState } from "react";
import { Plus, Minus } from "lucide-react";



const CartCard = (props) => {
    const [amount, setAmount] = useState(1);

    return (
        <div className="flex w-fit ">
            <img src={props.img} alt="img" className="md:w-[170px] md:h-[190px] w-[140px] h-[160px]" />
            <div className="flex flex-col gap-[12px] py-[10px] px-[20px] justify-between">
                <div className="flex flex-col gap-[8px]">
                    <span className="text-2xl font-bold">{props.title}</span>
                    <span className="text-xl font-bold">{`$ ${props.price}`}</span>
                </div>
                <div className="p-[10px] border-1 rounded-xl border-[#EEEEEE] w-fit flex items-center gap-[24px]">
                    <button className="border-none" onClick={() => setAmount(amount <= 1 ? 0 : amount - 1)}><Minus /></button>
                    <span className="text-xl font-bold">{amount}</span>
                    <button className="border-none" onClick={() => setAmount(amount + 1)}><Plus /></button>
                </div>
            </div>
        </div>
    )
}

export default CartCard;