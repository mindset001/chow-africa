import React from 'react';
import Egg from '../../assets/images/egg.png';
import Pasta from '../../assets/images/green.png';
import ShreddedChicken from '../../assets/images/chicken.png';
import NaijaSpecial from '../../assets/images/naija.png';
import SouseFries from '../../assets/images/fries.png';
import Image from 'next/image';

function HeroCarousel() {
  // Dishes and their corresponding images
  const dishes = [
    { name: 'Pasta, Green Sauce & Kpomo', image: Pasta },
    { name: 'Egg-cooked Fried Rice & Peas', image: Egg },
    { name: 'Shredded Roasted Chicken', image: ShreddedChicken },
    { name: 'Naija Special Fried Rice with Shrimps', image: NaijaSpecial },
    { name: 'Souse Fries & Bacon', image: SouseFries },
  ];

  return (
    <div>
      <section className="py-8 grid grid-cols-5 sm:grid-cols-5 lg:grid-cols-5 gap-4">
        {dishes.map((dish, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-lg overflow-hidden"
          >
            <Image
              src={dish.image}
              alt={dish.name}
              className="w-full h-32 object-cover"
            />
            <div className="p-4">
              <h3 className="font-medium text-lg text-gray-800">{dish.name}</h3>
              <p className="text-sm text-gray-600">
                (2-3 servings · Approx. ₦1000)
              </p>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}

export default HeroCarousel;