import { useState } from "react";
import carousel1 from "../../assets/images/Coursel-girl-1.jpg";
import carousel2 from "../../assets/images/Coursel-girl-2.jpg";
import carousel3 from "../../assets/images/Coursel-girl-3.jpg";

const CustomCarousel = () => {
  const products = [
    { id: 1, title: "Spring Sale", discount: "30% OFF", img: carousel1 },
    { id: 2, title: "Summer Dress", discount: "20% OFF", img: carousel2 },
    { id: 3, title: "Casual Wear", discount: "15% OFF", img: carousel3 },
  ];

  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev === products.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? products.length - 1 : prev - 1));
  };

  return (
    <div className="flex justify-center items-center py-10 px-6 gap-10">
      {/* LEFT SIDE */}
      <div className="w-1/2 flex flex-col gap-10">
        <div className="flex flex-col gap-6">
          <h2 className="text-4xl font-bold">Deals Of The Month</h2>
          <p className="w-[436px] text-gray-500">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque
            duis ultrices sollicitudin aliquam sem.
          </p>
          <button className="bg-black text-white px-10 py-3 rounded-lg shadow-md shadow-black/50">
            Buy Now
          </button>
        </div>

        {/* Countdown */}
        <div>
          <p className="text-2xl font-medium mb-4">Hurry, Before It’s Too Late!</p>
          <div className="flex gap-6">
            {[
              { time: "02", label: "Days" },
              { time: "06", label: "Hr" },
              { time: "05", label: "Mins" },
              { time: "30", label: "Sec" },
            ].map((item, i) => (
              <div key={i} className="flex flex-col items-center gap-2">
                <span className="px-4 py-2 text-3xl bg-white border border-dashed border-black rounded-md shadow-md shadow-black/40">
                  {item.time}
                </span>
                <span className="text-gray-600">{item.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Custom Buttons */}
        <div className="flex gap-4 mt-6">
          <button
            onClick={prevSlide}
            className="px-5 py-3 bg-black text-white rounded-full shadow-lg shadow-black/50"
          >
            ◀
          </button>
          <button
            onClick={nextSlide}
            className="px-5 py-3 bg-black text-white rounded-full shadow-lg shadow-black/50"
          >
            ▶
          </button>
        </div>
      </div>

      {/* RIGHT SIDE (Carousel) */}
      <div className="w-1/2 overflow-hidden">
        <div
          className="flex transition-transform duration-500"
          style={{ transform: `translateX(-${current * 100}%)` }}
        >
          {products.map((item) => (
            <div key={item.id} className="w-full flex-shrink-0 px-2">
              <div className="relative rounded-xl overflow-hidden shadow-xl shadow-black/40">
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-[500px] object-fit"
                />
                <div className="absolute bottom-4 left-4 bg-white px-3 py-2 rounded shadow-md shadow-black/40">
                  <p className="text-sm font-medium">{item.title}</p>
                  <span className="text-red-500 font-bold">{item.discount}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CustomCarousel;
