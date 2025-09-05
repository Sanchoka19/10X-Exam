import { useState } from "react";
import { useParams } from "react-router-dom";
import { Star, Eye, Plus, Minus } from "lucide-react";

import Button from "../../common/Button";
import productsData from "../../../data/products.json";
import MiniCart from "../MiniCart";
import BurgerMenu from "../../common/BurgerMenu";

const ProductDetails = (props) => {
    const { id } = useParams(); // get product id from URL
    const [activeClotheSize, setActiveClotheSize] = useState("");
    const [amount, setAmount] = useState(1);
    const [mainImage, setMainImage] = useState("");

    // Search all categories for product
    let product = null;
    for (const key in productsData) {
        const found = productsData[key].find(p => p.id === parseInt(id));
        if (found) {
            product = found;
            break;
        }
    }

    if (!product) return <div className="text-center mt-10">Product not found</div>;

    // Handle sizes dynamically
    const sizes = Array.isArray(product.size) ? product.size : [product.size];

    // Set default main image if not set
    if (!mainImage) setMainImage(product.img);
    if (!activeClotheSize) setActiveClotheSize(sizes[0]);

    return (
        <div className="flex gap-[60px] w-full justify-center lg:p-[60px] p-[10px] flex-wrap">
            {/* Burger & Cart */}
            {props.showBurger && <BurgerMenu onClick={() => props.setShowBurger(false)} />}
            {props.showCart && <MiniCart onClick={() => props.setShowCart(false)} />}

            {/* Images */}
            <div className="flex gap-[24px] flex-wrap justify-center">
                <div className="flex xl:flex-col gap-[16px] flex-wrap order-2 lg:order-1">
                    {sizes.map((size, index) => (
                        <img
                            key={index}
                            src={product.img} // only one image in your JSON
                            alt={`${product.title}-thumb-${index}`}
                            className="w-[58px] h-[80px] cursor-pointer"
                            onClick={() => setMainImage(product.img)}
                        />
                    ))}
                </div>
                <div className="order-1">
                    <img src={mainImage} alt={product.title} className="w-[600px]" />
                </div>
            </div>

            {/* Product Info */}
            <div className="flex flex-col max-w-[590px] w-full justify-between gap-[90px]">
                <div className="flex flex-col w-full gap-[24px]">
                    <div className="flex flex-col gap-[8px]">
                        <span className="text-[#666666] text-2xl">{product.brand}</span>
                        <div className="flex justify-between items-center">
                            <h1 className="font-bold">{product.title}</h1>
                            {product.status && (
                                <span className="text-red-500 font-bold">{product.status}</span>
                            )}
                        </div>
                        <div className="flex gap-[8px] items-center">
                            <div className="flex gap-[4px]">
                                {Array.from({ length: 5 }).map((_, i) => (
                                    <Star key={i} className="w-4" fill={i < 4 ? "black" : ""} />
                                ))}
                            </div>
                            <span>(3)</span>
                        </div>
                    </div>

                    <span className="text-4xl font-bold">${product.price}</span>

                    <div className="flex gap-[4px] items-center">
                        <Eye />
                        <span>24 people are viewing this right now</span>
                    </div>

                    {/* Sizes */}
                    <div className="flex flex-col gap-[8px]">
                        <span className="text-xl font-bold">Size: {activeClotheSize}</span>
                        <div className="flex gap-[12px]">
                            {sizes.map(size => (
                                <span
                                    key={size}
                                    className={
                                        activeClotheSize === size
                                            ? "py-[10px] w-[42px] flex justify-center border-2 bg-black rounded-xl text-white cursor-pointer font-bold"
                                            : "py-[10px] w-[42px] flex justify-center border-2 border-[#8A8A8A] text-[#8A8A8A] rounded-xl cursor-pointer"
                                    }
                                    onClick={() => setActiveClotheSize(size)}
                                >
                                    {size}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Quantity and Add to Cart */}
                <div className="flex flex-col gap-[12px]">
                    <span className="text-xl font-bold">Quantity</span>
                    <div className="flex gap-[32px]">
                        <div className="p-[10px] border-1 rounded-xl border-[#EEEEEE] w-fit flex items-center gap-[24px]">
                            <button
                                className="border-none"
                                onClick={() => setAmount(amount <= 1 ? 1 : amount - 1)}
                            >
                                <Minus />
                            </button>
                            <span className="text-xl font-bold">{amount}</span>
                            <button className="border-none" onClick={() => setAmount(amount + 1)}>
                                <Plus />
                            </button>
                        </div>

                        <Button
                            colorClass="bg-transparent border-1 border-black"
                            sizeClass="w-full"
                            value="Add to cart"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;
