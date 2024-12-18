import React from "react";
import { TbShoppingBagHeart } from "react-icons/tb";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <div className="mb-[100px]">
      <div className="hero min-h-[85vh] custom-img bg-fixed bg-center bg-no-repeat">
        <div className="hero-overlay bg-opacity-20"></div>
        <div className="hero-content text-neutral-content text-center">
          <div className="max-w-md">
            <h1 className="mb-5 underline scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl text-[#F7418F]">
              Makeup Magic <span className="text-white">Awaits</span>
            </h1>
            <p className="mb-5 scroll-m-20 text-xl font-semibold tracking-tight text-[#e364b0]">
              Discover amazing products at unbeatable prices. Enjoy high-quality
              items that fit your budget.
            </p>
            <Button className="outline outline-offset-1 outline-1 text-white group hover:rounded-3xl duration-300 hover:outline-[#F35588] bg-[#EC9CD3]">
              <TbShoppingBagHeart className="mr-2 text-5xl group-hover:text-pink-900 group-hover:animate-bounce " />
              <span className="text-lg">Shop Now!</span>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
