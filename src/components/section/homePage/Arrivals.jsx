import Card from "../../common/Card";
import Button from "../../common/Button";


import cardGirl1 from "/assets/images/cardGirl-1.jpg"
import cardGirl2 from "/assets/images/cardGirl-2.jpg"
import cardGirl3 from "/assets/images/CardGirl-3.jpg"

import cardMan1 from "/assets/images/man-fashion-1.jpg"
import cardMan2 from "/assets/images/man-fashion-2.jpg"

import womenAcc1 from "/assets/images/woman-acc1.jpg"
import womenAcc2 from "/assets/images/woman-acc2.jpg"
import womenAcc3 from "/assets/images/woman-acc-3.jpg"

import manAcc1 from "/assets/images/man-acc.jpg"
import manAcc2 from "/assets/images/manAcc.jpg"
import manAcc3 from "/assets/images/rolex.jpg"


import { useState } from "react";


const categories = [
    { id: "men", label: "Men's Fashion" },
    { id: "women", label: "Women's Fashion" },
    { id: "womenAcc", label: "Women Accessories" },
    { id: "menAcc", label: "Men Accessories" },
];

const products = {
    women: [
        { id: 1, img: cardGirl1, title: "Shiny Dress", brand: "AI Karam", review: "(4.1k)", price: "95.5", status: "Almost Sold Out" },
        { id: 2, img: cardGirl2, title: "Colorful Dress", brand: "PRADA", review: "(3.5k)", price: "195.5", status: "In Stock" },
        { id: 3, img: cardGirl3, title: "White Dress", brand: "CHANEL", review: "(1.6k)", price: "125.5", status: "Sold Out" }
    ],
    men: [
        { id: 1, img: cardMan1, title: "Shiny Trouser", brand: "LOUIS VUITTON", review: "(800)", price: "955.5", status: "Almost Sold Out" },
        { id: 2, img: cardMan2, title: "Shiny Jacket", brand: "CHANEL", review: "(1k)", price: "125.5", status: "In Stock" },
    ],
    womenAcc: [
        { id: 1, img: womenAcc1, title: "Neckleck", brand: "LOUIS VUITTON", review: "(800)", price: "1955.5", status: "Almost Sold Out" },
        { id: 2, img: womenAcc3, title: "Ring", brand: "Denim", review: "(800)", price: "1955.5", status: "Almost Sold Out" },
        { id: 3, img: womenAcc2, title: "Neckleck", brand: "PRADA", review: "(1.7k)", price: "731.5", status: "In Stock" },
    ],
    menAcc: [
        { id: 1, img: manAcc1, title: "Watch", brand: "Tsikolia", review: "(5.8k)", price: "155.5", status: "Almost Sold Out" },
        { id: 2, img: manAcc2, title: "Belt", brand: "PRADA", review: "(1.8k)", price: "428.5", status: "Sold Out" },
        { id: 3, img: manAcc3, title: "Watch", brand: "ROLEX", review: "(1.8k)", price: "1428.5", status: "In Stock" },
    ]
}

const Arrivals = () => {

    const [active, setActive] = useState("women");

    return (

        <div className="flex flex-col justify-center w-screen px-[10px] py-[120px] items-center gap-[60px] bg-[#f9f9f9]">
            <div className="flex flex-col gap-[16px]  max-w-[614px] items-center">
                <h1 className="font-bold">New Arrivals</h1>
                <p className="text-center text-[#8A8A8A] text-lg w-full">Our new arrivals have just landed, bringing you an exclusive selection of fresh styles, bold designs, and carefully crafted pieces. </p>
            </div>
            <div className="flex gap-[12px] justify-center flex-wrap">
                {categories.map(item => (
                    <Button
                        key={item.id}
                        value={item.label}
                        onClick={() => setActive(item.id)}
                        type="button"
                        colorClass={`${active == item.id ? "bg-black text-white" : ""}`}
                    />
                ))}
            </div>

            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8 justify-center items-center w-fit">
                {products[active]?.map(item => (
                    <div key={item.id}>
                        <Card
                            img={item.img}
                            alt={item.title}
                            title={item.title}
                            brand={item.brand}
                            review={`${item.review} Customer Reviews`}
                            price={`$${item.price}`}
                            status={item.status}
                        />
                    </div>
                ))}
            </div>

            <Button value="View More" colorClass="bg-black text-white" sizeClass="px-[60px] rounded-lg" />
        </div>
    );
}

export default Arrivals;
