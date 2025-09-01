import ShopCard from "../../common/ShopCard";

import img1 from "../../../assets/images/filter-girl-1.png"
import img2 from "../../../assets/images/filter-girl-2.png"
import img3 from "../../../assets/images/filter-girl-3.png"
import img4 from "../../../assets/images/filter-girl-4.png"
import { useState } from "react";

const page = [{ id: 1 }, { id: 2 }, { id: 3 }];

const products = {
    1: [
        { id: 1, img: img1, title: "Rounded Red Hat", status: "Sold Out", price: 600 },
        { id: 2, img: img2, title: "Linen Plain Top", status: "", price: 126 },
        { id: 3, img: img3, title: "Oversized T-shirt", status: "", price: 216 },
        { id: 4, img: img4, title: "Rounded Red Hat", status: "Sold Out", price: 526 },
        { id: 5, img: img1, title: "Rounded Red Hat", status: "", price: 316 },
        { id: 6, img: img2, title: "Rounded Red Hat", status: "", price: 366 },
        { id: 7, img: img3, title: "Rounded Red Hat", status: "", price: 436 },
        { id: 8, img: img1, title: "Rounded Red Hat", status: "Sold Out", price: 226 },
        { id: 9, img: img4, title: "Rounded Red Hat", status: "", price: 326 }
    ],
    2: [
        { id: 1, img: img2, title: "Rounded Red Hat", status: "Sold Out", price: 600 },
        { id: 2, img: img4, title: "Linen Plain Top", status: "", price: 126 },
        { id: 3, img: img3, title: "Oversized T-shirt", status: "", price: 216 },
        { id: 4, img: img1, title: "Rounded Red Hat", status: "", price: 526 },
        { id: 5, img: img2, title: "Rounded Red Hat", status: "Sold Out", price: 316 },
        { id: 6, img: img1, title: "Rounded Red Hat", status: "", price: 366 },
        { id: 7, img: img4, title: "Rounded Red Hat", status: "", price: 436 },
        { id: 8, img: img2, title: "Rounded Red Hat", status: "", price: 226 },
        { id: 9, img: img1, title: "Rounded Red Hat", status: "", price: 326 }
    ],
    3: [
        { id: 1, img: img3, title: "Rounded Red Hat", status: "Sold Out", price: 600 },
        { id: 2, img: img1, title: "Linen Plain Top", status: "", price: 126 },
        { id: 3, img: img4, title: "Oversized T-shirt", status: "", price: 216 },
        { id: 4, img: img1, title: "Rounded Red Hat", status: "Sold Out", price: 526 },
        { id: 5, img: img2, title: "Rounded Red Hat", status: "", price: 316 },
        { id: 6, img: img4, title: "Rounded Red Hat", status: "", price: 366 },
        { id: 7, img: img1, title: "Rounded Red Hat", status: "", price: 436 },
        { id: 8, img: img2, title: "Rounded Red Hat", status: "Sold Out", price: 226 },
        { id: 9, img: img3, title: "Rounded Red Hat", status: "", price: 326 }
    ],
}

const Filter = () => {
    const [activePage, setActivePage] = useState("1");

    return (
        <div className="flex gap-[24px] justify-center p-[80px]">
            <div className="lg:w-1/3">

            </div>
            <div className="flex flex-col gap-[64px] items-center lg:w-2/3">
                <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-4">
                    {
                        products[activePage]?.map(item => (
                            <ShopCard img={item.img} title={item.title} price={item.price} status={item.status} />
                        ))
                    }
                </div>
                <div className="flex gap-[12px]">
                    {
                        page.map(item => (
                            <div key={item.id}>
                                <span
                                    onClick={() => setActivePage(item.id)}
                                    key={item.id}
                                    className={`${activePage == item.id ? "p-[20px] rounded-[100px] bg-[#F3F3F3] cursor-pointer" : "p-[20px] cursor-pointer"}`} >
                                    {item.id}
                                </span>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div >
    )
}



export default Filter;