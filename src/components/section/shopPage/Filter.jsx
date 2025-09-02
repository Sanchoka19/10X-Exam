import ShopCard from "../../common/ShopCard";

import img1 from "../../../assets/images/filter-girl-1.png";
import img2 from "../../../assets/images/filter-girl-2.png";
import img3 from "../../../assets/images/filter-girl-3.png";
import img4 from "../../../assets/images/filter-girl-4.png";

import { useState } from "react";

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


const products = {
    1: [
        { id: 1, img: img3, title: "Classic Red Hat", brand: "ZARA", status: "Sold Out", price: 145, size: "M" },
        { id: 2, img: img1, title: "Linen Summer Top", brand: "PRADA", status: "", price: 480, size: ["S", "M"] },
        { id: 3, img: img4, title: "Oversized Black T-shirt", brand: "DENIM", status: "", price: 95, size: "XL" },
        { id: 4, img: img2, title: "Sporty Cap", brand: "LOUIS VUITTONE", status: "Sold Out", price: 310, size: ["L", "XL"] },
        { id: 5, img: img3, title: "Casual Hoodie", brand: "H&M", status: "", price: 570, size: "S" },
        { id: 6, img: img4, title: "Denim Jacket", brand: "ZARA", status: "", price: 220, size: "L" },
        { id: 7, img: img1, title: "Slim Fit Shirt", brand: "PRADA", status: "", price: 405, size: ["M", "XL"] },
        { id: 8, img: img2, title: "Cotton Shorts", brand: "DENIM", status: "Sold Out", price: 190, size: "S" },
        { id: 9, img: img3, title: "Leather Jacket", brand: "LOUIS VUITTONE", status: "", price: 330, size: ["L", "XL"] }
    ],
    2: [
        { id: 1, img: img4, title: "Vintage Hat", brand: "H&M", status: "Sold Out", price: 720, size: "XL" },
        { id: 2, img: img1, title: "Casual Blouse", brand: "ZARA", status: "", price: 260, size: ["M", "L"] },
        { id: 3, img: img2, title: "Graphic Tee", brand: "PRADA", status: "", price: 135, size: "S" },
        { id: 4, img: img3, title: "Bomber Jacket", brand: "DENIM", status: "", price: 560, size: ["L", "XL"] },
        { id: 5, img: img4, title: "Basic Hoodie", brand: "LOUIS VUITTONE", status: "Sold Out", price: 295, size: "M" },
        { id: 6, img: img2, title: "Cargo Pants", brand: "H&M", status: "", price: 415, size: ["S", "M"] },
        { id: 7, img: img1, title: "Long Sleeve Shirt", brand: "ZARA", status: "", price: 175, size: "L" },
        { id: 8, img: img4, title: "Windbreaker", brand: "PRADA", status: "", price: 505, size: ["XL", "M"] },
        { id: 9, img: img3, title: "Jogger Pants", brand: "DENIM", status: "", price: 260, size: "S" }
    ],
    3: [
        { id: 1, img: img2, title: "Streetwear Cap", brand: "LOUIS VUITTONE", status: "Sold Out", price: 430, size: "M" },
        { id: 2, img: img4, title: "Sleeveless Top", brand: "H&M", status: "", price: 160, size: ["S", "XL"] },
        { id: 3, img: img1, title: "Basic White Tee", brand: "ZARA", status: "", price: 390, size: "L" },
        { id: 4, img: img2, title: "Denim Shorts", brand: "PRADA", status: "Sold Out", price: 250, size: ["M", "L"] },
        { id: 5, img: img3, title: "Wool Sweater", brand: "DENIM", status: "", price: 600, size: "XL" },
        { id: 6, img: img1, title: "Striped Shirt", brand: "LOUIS VUITTONE", status: "", price: 310, size: ["S", "M"] },
        { id: 7, img: img4, title: "Fleece Jacket", brand: "H&M", status: "", price: 490, size: "L" },
        { id: 8, img: img3, title: "Training Shorts", brand: "ZARA", status: "Sold Out", price: 205, size: ["XL", "S"] },
        { id: 9, img: img2, title: "Formal Shirt", brand: "PRADA", status: "", price: 355, size: "M" }
    ]
}

const Filter = () => {
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
                    {filteredProducts.map(item => (
                        <ShopCard
                            key={item.id}
                            img={item.img}
                            title={item.title}
                            price={item.price}
                            status={item.status}
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