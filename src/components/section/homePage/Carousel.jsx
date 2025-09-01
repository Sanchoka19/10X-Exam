import { useState } from "react";

import carousel1 from "../../../assets/images/Coursel-girl-1.jpg";
import carousel2 from "../../../assets/images/Coursel-girl-2.jpg";
import carousel3 from "../../../assets/images/Coursel-girl-3.jpg";

import rightArrow from "../../../assets/icons/right-arrow.svg";
import lefArrow from "../../../assets/icons/left-arrow.svg";
import Button from "../../common/Button";


const Carousel = () => {

  const products = [
    { id: 1, title: "Spring Sale", discount: "30%", img: carousel1 },
    { id: 2, title: "Spring Sale", discount: "15%", img: carousel2 },
    { id: 3, title: "Spring Sale", discount: "45%", img: carousel3 }
  ]

  const [curent, setCurent] = useState(0);

  const handleNextBtn = () => {
    setCurent((prev) => prev === products.length - 1 ? 0 : prev + 1);
  }

  const handlePrevBtn = () => {
    setCurent((prev) => prev === 0 ? products.length - 1 : prev - 1);
  }


  return (
    <div className="flex px-[20px] py-[120px] flex-col lg:flex-row">

      <div className="lg:w-3/7 w-full flex flex-col items-center justify-end py-[100px] gap-[60px]">
        <div className="flex flex-col items-center justify-center h-full w-full">
          <div className="flex flex-col gap-[32px] w-full items-start items-center">
            <div className="flex flex-col gap-[8px]">
              <span className="text-[60px] font-bold">Deals Of The Month</span>
              <p className="max-w-[436px] w-full">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque duis ultrices sollicitudin aliquam sem. Scelerisque duis ultrices sollicitudin </p>
            </div>
            <Button colorClass="bg-black max-w-[207px] w-full text-white" value="Buy Now" />
            <div className="flex flex-col gap-[8px]">
              <span className="text-[40px] font-medium">Hurry, Before It’s Too Late!</span>
            </div>
          </div>
        </div>
      </div>


      <div className="lg:w-4/7 w-full flex overflow-hidden relative">
        <div
          className="flex transition-transform duration-500"
          style={{ transform: `translateX(-${curent * 100}%)` }}
        >
          {products.map((item) => (
            <div
              key={item.id}
              className="w-full flex-shrink-0"
            >
              <div className="relative w-full h-[700px] ">
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-full object-cover rounded-2xl"
                />
                <div className="absolute bottom-4 left-4 bg-white px-6 py-4 rounded-2xl shadow-md shadow-black/40 absolute">
                  <p className="text-[32px] font-medium">{item.title}</p>
                  <span className="text-[24px] font-bold">{item.discount}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="flex self-end gap-[24px] absolute bottom-4 lg:left-1/2 lg:(-translate-x-1/2) right-4">
          <img onClick={handlePrevBtn} src={lefArrow} alt="left-arrow" className="p-[15px] bg-white hover:bg-lime-100 transition duration-150 ease-linear rounded-[100px] shadow-[0_0_50px_rgba(0,0,0,0.3)] active:bg-white" />
          <img onClick={handleNextBtn} src={rightArrow} alt="right-arrow" className="p-[15px] bg-white hover:bg-lime-100 transition duration-150 ease-linear rounded-[100px] shadow-[0_0_50px_rgba(0,0,0,0.3)] active:bg-white" />
        </div>
      </div>

    </div>
  )
}

export default Carousel;