'use client';
import { useParams } from 'next/navigation';
import { useState } from 'react';
import Image from 'next/image';
import { FaRegHeart, FaHeart } from 'react-icons/fa'; 
import Component from './componentproduct'

const products = {
  "Eye Shade": [
    { id: 1, name: 'Beauty Naked Highlighter', price: 3000, image: '/E1.webp' },
    { id: 2, name: 'Emelie Kit', price: 2500, image: '/E2.webp' },
    { id: 3, name: 'Huda Nude Kit', price: 1500, image: '/E3.webp' },
    { id: 4, name: 'Akoya Queen', price: 2700, image: '/E4.webp' },
    { id: 5, name: 'Modern Eyeshade Kit', price: 3500, image: '/E5.webp' },
    { id: 6, name: 'Rose Palette', price: 1380, image: '/E6.webp' },
  ],
  Lipstick: [
    { id: 1, name: 'ColurPop Lippie', price: 1100, image: '/L1.avif' },
    { id: 2, name: 'Huda Beauty Lipstick', price: 2000, image: '/L2.jpg' },
    { id: 3, name: 'Tilbury Lipstick', price: 1200, image: '/L3.avif' },
    { id: 4, name: 'Matte Lipstick', price: 1320, image: '/L4.webp' },
    { id: 5, name: 'Morphe Matte Lipstick', price: 1355, image: '/L5.avif' },
    { id: 6, name: 'Medora Lipstick', price: 1415, image: '/L6.avif' },
  ],
  Watch: [
    { id: 1, name: 'Rolex Submariner', price: 2000, image: '/W1.webp' },
    { id: 2, name: 'Fossil Jacqueline', price: 1350, image: '/W2.webp' },
    { id: 3, name: 'Daytona', price: 1195, image: '/W3.webp' },
    { id: 4, name: 'Seiko Presage', price: 1670, image: '/W4.webp' },
    { id: 5, name: 'Omega', price: 3000, image: '/W5.webp' },
    { id: 6, name: 'Casio Baby-G', price: 2590, image: '/W6.webp' },
    { id: 7, name: 'Watch', price: 1200, image: '/W7.webp' },
    { id: 8, name: 'Fansy Watch', price: 1500, image: '/W8.webp' },
  ],
 
  "Nail Polish": [
    { id: 1, name: 'Revlon ColorStay', price: 1500, image: '/N1.avif' },
    { id: 2, name: 'Peach Nailpolish', price: 1000, image: '/N2.webp' },
    { id: 3, name: 'Green Nailpolish', price: 1000, image: '/N3.jpg' },
    { id: 4, name: 'Essie Nail Polish', price: 1200, image: '/N4.avif' },
    { id: 5, name: 'Collections of Nailpolish', price: 2000, image: '/N5.jpg' },
    { id: 6, name: 'Red Nailpolish', price: 900, image: '/N6.webp' },
  ],
  Accessories : [
    { id: 1, name: 'Pandora Charm', price: 1500, image: '/A1.webp' },
    { id: 2, name: 'Ray-Ban', price: 2500, image: '/A2.webp' },
    { id: 3, name: 'Michael Kors', price: 3000, image: '/A3.webp' },
    { id: 4, name: 'Fossil ', price: 1400, image: '/A4.jpg' },
    { id: 5, name: 'Kory Burch', price: 2000, image: '/A5.webp' },
    { id: 6, name: 'Kate Spade', price: 1000, image: '/A6.webp' },
  ],
  Jewelry: [
    { id: 1, name: 'Ring', price: 1500, image: '/J1.webp' },
    { id: 2, name: 'Ring', price: 1300, image: '/J2.webp' },
    { id: 6, name: 'Earrings', price: 2000, image: '/J3.webp' },
    { id: 6, name: 'Earrings', price: 2500, image: '/J4.jpg' },
    { id: 6, name: 'Bracelets', price: 1000, image: '/J5.webp' },
    { id: 6, name: 'Necklace', price: 3000, image: '/J6.webp' },
  ],
  "Face Makeup": [
    { id: 1, name: 'Maybelline', price: 1900, image: '/F1.webp' },
    { id: 2, name: 'Rimmel', price: 1400, image: '/F2.webp' },
    { id: 3, name: 'Pro-Matte', price: 1100, image: '/F3.webp' },
    { id: 4, name: 'Poreless Powder', price: 1200, image: '/F4.webp' },
    { id: 5, name: 'True Match Powder', price: 1600, image: '/F5.webp' },
    { id: 6, name: 'Milani Smooth', price: 2000, image: '/F6.webp' },
  ],
  Perfume : [
    { id: 1, name: 'Dior Sauvage', price: 1200, image: '/B1.avif' },
    { id: 2, name: 'Ford Black', price: 1400, image: '/B2.avif' },
    { id: 3, name: 'Jacobs Daisy', price: 1500, image: '/B3.avif' },
    { id: 4, name: 'Gucci Bloom', price: 1300, image: '/B4.avif' },
    { id: 5, name: 'Armani Code', price: 2000, image: '/B5.jpg' },
    { id: 6, name: 'Calvin Klein', price: 1100, image: '/B6.avif' },
  ]
};

const categorySlugs = {
  'Eye%20Shade': 'Eye Shade',
  'Nail%20Polish': "Nail Polish",
  'Face%20Makeup': "Face Makeup",
  // Add more mappings as needed
};

const ProductDetailPage = () => {
  const { category, detail } = useParams();
  const normalizedCategory = categorySlugs[category as string] || category;
  const categoryProducts = products[normalizedCategory as string] || [];
  const product = categoryProducts.find((p) => p.id === parseInt(detail as string));
  if (!product) {
    return <div>Product not found</div>;
  }

  const [quantity, setQuantity] = useState(1);
  const [isFavorite, setIsFavorite] = useState(false);

  const handleHeartClick = () => {
    setIsFavorite(!isFavorite);
  };

  return (
    <div>
    <section className="text-gray-600 body-font overflow-hidden">
      <div className="container px-5 py-24 mx-auto">
        <div className="lg:w-4/5 mx-auto flex flex-wrap">
          {/* Product Image */}
          <div className="lg:w-1/2 w-full h-[500px] relative shadow-lg rounded-xl mb-6 lg:mb-0">
            <Image
              alt={product.name}
              src={product.image}
              layout="fill"
              objectFit="cover"
              className="rounded-xl"
            />
          </div>

          {/* Product Info */}
          <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
            {/* Heading */}
            <h1 style={{ color: '#D1007F' }} className="text-4xl md:text-5xl font-bold mb-6 font-serif relative inline-block group">
            {product.name}
          </h1>
            {/* Price */}
            <fieldset className="border border-gray-300 rounded-xl px-6 py-4 shadow-sm mb-6">
              <legend className="text-sm text-gray-500 px-2 font-semibold">PRICE</legend>
              <span className="text-3xl md:text-4xl font-bold text-gray-800">Rs.{product.price}</span>
            </fieldset>

            {/* Colors */}
          <fieldset className="border border-gray-300 rounded-xl px-6 py-4 shadow-sm mb-6">
            <legend className="text-sm text-gray-500 px-2 font-semibold">COLORS</legend>
            <div className="flex space-x-2">
              <button style={{ backgroundColor: '#F87171' }} className="border-2 border-gray-300 w-10 h-10 focus:outline-none hover:bg-red-600 transition"></button>
              <button style={{ backgroundColor: '#F59E0B' }} className="border-2 border-gray-300 w-10 h-10 focus:outline-none hover:bg-orange-600 transition"></button>
              <button style={{ backgroundColor: '#10B981' }} className="border-2 border-gray-300 w-10 h-10 focus:outline-none hover:bg-green-600 transition"></button>
              <button style={{ backgroundColor: '#D1007F' }} className="border-2 border-gray-300 w-10 h-10 focus:outline-none hover:bg-pink-600 transition"></button>
              <button style={{ backgroundColor: '#3B82F6' }} className="border-2 border-gray-300 w-10 h-10 focus:outline-none hover:bg-blue-600 transition"></button>
              <button style={{ backgroundColor: '#8B5CF6' }} className="border-2 border-gray-300 w-10 h-10 focus:outline-none hover:bg-purple-600 transition"></button>
            </div>
          </fieldset>

             {/* Quantity Box */}
            <div className="flex justify-center items-center space-x-4 mb-6">
              <div className="flex items-center space-x-2 border border-gray-300 rounded-xl px-4 py-2">
                <button
                  className="w-8 h-8 flex items-center justify-center border border-gray-400 text-gray-700 rounded-md hover:bg-gray-200 transition"
                  onClick={() => setQuantity((prev) => (prev > 1 ? prev - 1 : 1))}>
                  -
                </button>
                <input
                  type="number"
                  value={quantity}
                  onChange={(e) =>
                    setQuantity(Math.max(1, parseInt(e.target.value) || 1))
                  }
                  className="w-12 h-8 text-center border-none focus:outline-none focus:ring-0"
                  min="1"/>
                <button
                  className="w-8 h-8 flex items-center justify-center border border-gray-400 text-gray-700 rounded-md hover:bg-gray-200 transition"
                  onClick={() => setQuantity((prev) => prev + 1)}>
                  +
                </button>
              </div>

                {/* Icons */}
              <button
                className={`text-3xl focus:outline-none transition-all duration-300 ease-in-out transform ${
                  isFavorite ? 'text-pink-500 scale-110' : 'text-pink-500 hover:text-pink-400'
                }`}onClick={handleHeartClick}>
                {isFavorite ? (
                  <FaHeart className="w-8 h-8 text-pink-500" /> 
                ) : (
                  <FaRegHeart className="w-8 h-8 text-pink-500 hover:text-pink-400" /> 
                )}
              </button>
            </div>

            {/* Add to Cart Btn */}
            <button className="w-full text-white bg-gradient-to-r from-pink-500 to-pink-600 py-3 rounded-lg shadow-md hover:bg-pink-700 transition-all duration-300 ease-in-out transform hover:scale-105 mb-4 focus:ring-4 focus:ring-pink-500">
              Add to Cart
            </button>

            {/* Buy Now Btn*/}
            <button className="w-full text-white bg-gradient-to-r from-purple-500 to-indigo-500 py-4 rounded-lg shadow-md hover:bg-indigo-700 transition-all duration-300 ease-in-out transform hover:scale-105 focus:ring-4 focus:ring-purple-500">
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </section>
    <Component/>
    </div>
  );
};
export default ProductDetailPage;
