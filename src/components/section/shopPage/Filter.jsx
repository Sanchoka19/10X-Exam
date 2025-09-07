import ShopCard from "../../common/ShopCard";

import { useState } from "react";
import MiniCart from "../MiniCart";
import BurgerMenu from "../../common/BurgerMenu";

import products from "../../../data/products.json"
import { Link } from "react-router-dom";

const page = [{ id: 1 }, { id: 2 }, { id: 3 }];

const clotheSize = [{ size: "S" }, { size: "M" }, { size: "L" }, { size: "XL" }];

const brands = [
    { id: 1, name: "ZARA" },
    { id: 2, name: "PRADA" },
    { id: 3, name: "DENIM" },
    { id: 4, name: "LOUIS VUITTONE" },
    { id: 5, name: "H&M" },
];

const priceRanges = [
    { label: "All", min: 0, max: 0 },
    { label: "$0 - $50", min: 0, max: 50 },
    { label: "$50 - $200", min: 50, max: 200 },
    { label: "$200 - $500", min: 200, max: 500 },
];

const Filter = (props) => {
    const [priceRange, setPriceRange] = useState({ min: 0, max: 0 });
    const [activeClotheSize, setActiveClotheSize] = useState("");
    const [activeBrand, setActiveBrand] = useState("");
    const [activePage, setActivePage] = useState("1");


    const currentProducts = products[activePage] || [];

    const filteredProducts = currentProducts.filter(item => {
        const sizeMatch = !activeClotheSize || (Array.isArray(item.size) ? item.size.includes(activeClotheSize) : item.size === activeClotheSize);

        const priceMatch = (priceRange.min === 0 && priceRange.max === 0)
            ? true
            : item.price >= priceRange.min && item.price <= priceRange.max;

        const brandMatch = !activeBrand || item.brand === activeBrand;

        return sizeMatch && priceMatch && brandMatch;
    });

    return (
        <div className="flex gap-[24px] justify-center p-[80px]">
            {props.showBurger && <BurgerMenu onClick={() => props.setShowBurger(false)} />}
            {props.showCart && <MiniCart onClick={() => props.setShowCart(false)} />}

            <div className="lg:w-2/7 flex flex-col gap-[32px] hidden lg:flex">

                <div className="flex flex-col gap-[24px] bg-white px-[40px] py-[50px] rounded-md w-fit sticky top-[40px]">
                    <div className="flex flex-col gap-[12px] w-fit">
                        <span className="text-2xl font-bold">Size</span>
                        <div className="flex gap-[12px]">
                            {clotheSize.map(item => (
                                <span
                                    key={item.size}
                                    className={activeClotheSize == item.size
                                        ? "py-[10px] w-[42px] flex justify-center border-2 border-black rounded-xl cursor-pointer font-bold"
                                        : "py-[10px] w-[42px] flex justify-center border-2 border-[#8A8A8A] text-[#8A8A8A] rounded-xl cursor-pointer"}
                                    onClick={() => setActiveClotheSize(item.size)}
                                >
                                    {item.size}
                                </span>
                            ))}
                        </div>
                    </div>
                    <div className="flex flex-col gap-[12px] w-fit">
                        <span className="text-2xl font-bold">Pricies</span>
                        <div className="flex gap-[12px] flex-col">
                            {priceRanges.map(item => (
                                <span
                                    key={item.label}
                                    className={priceRange.label === item.label
                                        ? "text-black cursor-pointer font-bold"
                                        : "text-[#8A8A8A] cursor-pointer"}
                                    onClick={() => setPriceRange({ min: item.min, max: item.max, label: item.label })}
                                >
                                    {`${item.label}`}
                                </span>
                            ))}
                        </div>
                    </div>
                    <div className="flex flex-col gap-[12px] w-fit">
                        <span className="text-2xl font-bold">Brands</span>
                        <div className="grid grid-cols-2 gap-2 w-fit ">
                            {brands.map(item => (
                                <span
                                    key={item.id}
                                    className={activeBrand === item.name
                                        ? "text-black cursor-pointer font-bold"
                                        : "text-[#8A8A8A] cursor-pointer"}
                                    onClick={() => setActiveBrand(item.name)}
                                >
                                    {`${item.name}`}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex flex-col gap-[64px] items-center lg:w-5/7">
                <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-4">
                    {filteredProducts.map(product => (
                        <ShopCard
                            key={product.id}
                            id={product.id}
                            img={product.img}
                            title={product.title}
                            price={product.price}
                            status={product.status}
                        />
                    ))}
                </div>

                <div className="flex gap-[12px]">
                    {page.map(item => (
                        <div key={item.id}>
                            <span
                                onClick={() => setActivePage(item.id)}
                                className={`${activePage == item.id
                                    ? "p-[20px] rounded-[100px] bg-[#F3F3F3] cursor-pointer"
                                    : "p-[20px] cursor-pointer"}`}
                            >
                                {item.id}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Filter;