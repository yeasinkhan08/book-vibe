import React from "react";
import Image from "next/image";
import bannerImg from "@/assets/hero_img.jpg";
const Banner = () => {
  return (
    <div className="grid grid-cols-2 gap-4 items-center">
      <div>
        <h2>Books to freshen up your bookshelf </h2>
        <button>view the task</button>
      </div>
      <div>
        <Image src={bannerImg} alt="" />
      </div>
    </div>
  );
};

export default Banner;
