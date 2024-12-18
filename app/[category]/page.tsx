'use client';
import Link from 'next/link';
import { BsCartCheck } from "react-icons/bs";
import { TbShoppingBagCheck } from "react-icons/tb";
import Image from 'next/image';
import { usePathname } from 'next/navigation';

const CategoryPage = () => {
  const pathname = usePathname();
  const categorySlug = pathname?.split('/')[1]; 
  const category = decodeURIComponent(categorySlug).replace(/[\d%]/g, '').trim(); 

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

  const categoryProducts = products[category] || [];

  return (
    <section className="text-gray-600 body-font overflow-x-hidden">
      <div className="container px-3 py-12 mx-auto max-w-full">
        <div className="text-center mb-5">
          <h1 className="scroll-m-20 text-5xl font-extrabold tracking-tight lg:text-3xl text-[#FB2576]">
            {category} Collection
          </h1>
          <div className="flex mt-2 justify-center">
            <div className="w-16 h-1 rounded-full bg-[#DA0C81] inline-flex" />
          </div>
        </div>
        <div className="flex flex-wrap justify-center">
          {categoryProducts.map(product => (
            <div key={product.id} className="p-4 w-full sm:w-1/2 md:w-1/3 mb-6">
              <Link href={`/${category}/${product.id}`}>
                <div className="border-2 border-pink-300 rounded-lg p-4 hover:border-[#F35588] transition-all duration-300 ease-in-out">
                  <div className="rounded-lg h-64 overflow-hidden">
                    <Image src={product.image} alt={product.name} width={1100} height={400} className="object-cover object-center h-full w-full" />
                  </div>
                  <h2 className="text-2xl font-bold title-font text-[#F7418F] mt-5 text-center">
                    {product.name}
                  </h2>
                  <div className="text-center font-bold text-3xl mt-3 mb-3">
                    ${product.price}
                  </div>
                  <div className="flex mt-3 justify-center">
                    <button className="hidden sm:flex text-white bg-[#EC9CD3] border-0 py-2 px-6 focus:outline-none hover:bg-[#F35588] rounded flex items-center space-x-2 group">
                      <TbShoppingBagCheck className="group-hover:animate-bounce" />
                      <span>Shop Now</span>
                    </button>
                    <button className="hidden sm:flex ml-4 text-white bg-[#EC9CD3] border-0 py-2 px-6 focus:outline-none hover:bg-[#F35588] rounded flex items-center space-x-2 group">
                      <BsCartCheck className="group-hover:animate-bounce" />
                      <span>Buy Now</span>
                    </button>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoryPage;
