import Button from "./Button";
import { Plus, Minus } from "lucide-react";

const MainCartCard = ({ cart = [], updateQuantity }) => {
    const subTotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

    return (
        <div className="flex items-center justify-center pb-[120px]">
            <div className="flex items-center flex-col justify-center px-[10px] gap-24px max-w-[1280px] w-full">
                <table className=" w-full border-spacing-y-[40px]">
                    <thead>
                        <tr className="border-b">
                            <th className="text-left py-6 text-xl font-bold">Product</th>
                            <th className="text-left py-6 text-xl font-bold">Price</th>
                            <th className="text-left py-6 text-xl font-bold">Quantity</th>
                            <th className="text-left py-6 text-xl font-bold w-[150px]">Total</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            cart.map(item => (
                                <tr className="align-top">
                                    <td className="flex gap-[24px] py-4">
                                        <img src={item.img} alt={item.alt} className="w-[168px] rounded-lg" />
                                        <div className="flex flex-col justify-between pb-[20px] items-start">
                                            <span className="flex max-w-[176px] w-full text-2xl font-bold">{item.title}</span>
                                            <Button
                                                value="Remove"
                                                colorClass="bg-red-400 text-white"
                                            />
                                        </div>
                                    </td>
                                    <td className="py-4">
                                        <span className="text-2xl font-bold">${item.price}</span>
                                    </td>
                                    <td className="py-4">
                                        <div className="p-[10px] border-1 rounded-xl border-[#EEEEEE] w-fit flex items-center gap-[24px]">
                                            <button
                                                className="border-none"
                                                onClick={() => updateQuantity(item.id, item.size, item.quantity > 1 ? item.quantity - 1 : 1)}
                                            >
                                                <Minus />
                                            </button>
                                            <span className="text-xl font-bold">{item.quantity}</span>
                                            <button
                                                className="border-none"
                                                onClick={() => updateQuantity(item.id, item.size, item.quantity + 1)}
                                            >
                                                <Plus />
                                            </button>
                                        </div>
                                    </td>
                                    <td className="py-4 w-100px">
                                        <span className="font-bold text-2xl">
                                            ${(item.price * item.quantity).toFixed(2)}
                                        </span>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table >
                <div className="flex flex-col gap-[24px] mt-6 self-end w-200px">
                    <div className="flex justify-between">
                        <span className="font-bold text-xl">Subtotal</span>
                        <span className="font-bold text-xl">{`$ ${subTotal.toFixed(2)}`}</span>
                    </div>
                    <div className="flex flex-col gap-[12px]">
                        <Button value="Checkout" colorClass="bg-black text-white w-full" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MainCartCard;