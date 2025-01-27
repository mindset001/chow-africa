'use client'
import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import Egg from "../../assets/images/egg.png";
import Pasta from "../../assets/images/green.png";
import ShreddedChicken from "../../assets/images/chicken.png";
import NaijaSpecial from "../../assets/images/naija.png";
import SouseFries from "../../assets/images/fries.png";
import Image from "next/image";
import Icon from "../icons";

function HeroCarousel() {
  // Dishes and their corresponding images
  const dishes = [
    {
      name: "Pasta, Green Sauce & Kpomo",
      image: Pasta,
      type: "🍲 Continental",
      price: "Approx. ₦3,000",
      picks: "120 picks",
    },
    {
      name: "Egg-cooked Fried Rice & Peas",
      image: Egg,
      type: "🍲 Continental",
      price: "Approx. ₦3,000",
      picks: "120 picks",
    },
    {
      name: "Shredded Roasted Chicken",
      image: ShreddedChicken,
      type: "🍲 Continental",
      price: "Approx. ₦3,000",
      picks: "120 picks",
    },
    {
      name: "Naija Special Fried Rice with Shrimps",
      image: NaijaSpecial,
      type: "🍲 Continental",
      price: "Approx. ₦3,000",
      picks: "120 picks",
    },
    {
      name: "Souse Fries & Bacon",
      image: SouseFries,
      type: "🍲 Continental",
      price: "Approx. ₦3,000",
      picks: "120 picks",
    },
  ];

  // Responsive settings for Alice Carousel
  const responsive = {
    0: { items: 2 },
    768: { items: 2 },
    1024: { items: 3 },
    1280: { items: 4 },
  };

  // Carousel items
  const items = dishes.map((dish, index) => (
    <div
      key={index}
      className="relative bg-white cursor-pointer shadow-md rounded-lg p-2 w-[121px] md:w-[244px] h-[150px] md:h-[289px] hover:h-[510px] flex flex-col justify-center items-center overflow-hidden transition-all group"
    >
      {/* Hover Background */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-300"
        style={{
          backgroundImage: `url('https://res.cloudinary.com/mindset/image/upload/v1737963645/span_vjgprg.png')`,
        }}
      ></div>

      {/* Dish Image */}
      <div className="group-hover:bg-transparent bg-[#F4F3E8] flex justify-center items-center h-[97px] md:h-[173px] w-[102px] md:w-[231px] rounded-[8px] relative z-10 transition-transform group-hover:scale-110">
        <Image
          src={dish.image}
          alt={dish.name}
          className="object-cover w-[46px] md:w-[111px] h-[46px] md:h-[111px]"
        />
      </div>

      {/* Dish Details */}
      <div className="p-4 gap-2 flex flex-col z-10 relative">
        <h3 className="text-[10px] md:text-[13px] font-[700] text-[#3C3937]">{dish.name}</h3>
        <p className="text-[6px] md:text-[7px] text-gray-600 bg-[#D6D5CA] p-2 rounded-[56px] uppercase w-[80px]">
          {dish.type}
        </p>
        <div className="flex gap-4 text-[4px] md:text-[9px] text-[#858786]">
          <div className="flex gap-2 items-center">
            <Icon name="thumbIcon" />
            <p>{dish.picks}</p>
          </div>
          <div className="flex md:gap-2 items-center">
            <div className="bg-[#858786] h-[2px] w-[2px] rounded-full"></div>
            <p>{dish.price}</p>
          </div>
        </div>
      </div>
    </div>
  ));

  return (
    <div className="py-8">
      <AliceCarousel
        mouseTracking
        items={items}
        responsive={responsive}
        controlsStrategy="responsive"
        infinite
        autoPlay
        autoPlayInterval={3000}
        disableButtonsControls
        disableDotsControls
      />
    </div>
  );
}

export default HeroCarousel;
