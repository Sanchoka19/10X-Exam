import { X } from "lucide-react";
import CartCard from "../common/CartCard";

import Button from "../common/Button";

const MiniCart = ({ onClick, cart = [], updateQuantity }) => {
    const subTotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

    return (
        <div className="w-screen h-screen bg-[#78787869] fixed top-0 left-0 flex items-center justify-end z-[1000]">
            <div className="max-w-[741px] w-full h-screen bg-white p-[40px] flex flex-col">
                <div className="flex flex-col gap-[12px]">
                    <div className="flex justify-between items-center">
                        <span className="font-bold text-3xl">Shopping Cart</span>
                        <X className="w-10 h-10 cursor-pointer" onClick={onClick} />
                    </div>
                    <p className="md:text-2xl text-base text-[#8A8A8A]">
                        Buy <span className="font-bold text-black">$122.35</span> more and get <span className="font-bold text-black">free shipping</span>
                    </p>
                </div>

                <div className="flex-1 min-h-0 overflow-y-auto mt-6 space-y-6">
                    {cart.map(item => (
                        <CartCard
                            key={`${item.id}-${item.size}`}
                            img={item.img}
                            title={item.title}
                            size={item.size}
                            price={item.price}
                            quantity={item.quantity}
                            onQuantityChange={(newQty) => updateQuantity(item.id, item.size, newQty)}
                        />
                    ))}
                </div>

                <div className="flex flex-col gap-[24px] mt-6">
                    <div className="flex justify-between">
                        <span className="font-bold text-xl">Subtotal</span>
                        <span className="font-bold text-xl">{`$ ${subTotal.toFixed(2)}`}</span>
                    </div>
                    <div className="flex flex-col gap-[12px]">
                        <Button value="Checkout" colorClass="bg-black text-white w-full" />
                        <u className="text-base text-center cursor-pointer">View Cart</u>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MiniCart;