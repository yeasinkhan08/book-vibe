import React from "react";
import Image from "next/image";
import bannerImg from "@/assets/hero_img.jpg";
const Banner = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto grid grid-cols-2 gap-4 items-center bg-amber-50 rounded-3xl p-4 ">
        <div className="space-y-4">
          <h2 className="font-bold text-5xl">
            Books to freshen up <br /> your bookshelf{" "}
          </h2>
          <button className="btn btn-success">view the task</button>
        </div>
        <div>
          <Image src={bannerImg} alt="" />
        </div>
      </div>
      2
    </section>
  );
};

export default Banner;
