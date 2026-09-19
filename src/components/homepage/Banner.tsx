import React from "react";
import Image from "next/image";
import bannerImg from "@/assets/hero_img.jpg";

const Banner = () => {
  return (
    <section className="px-4 py-12 sm:py-16 lg:py-20">
      <div className="container mx-auto grid max-w-7xl items-center gap-10 overflow-hidden rounded-3xl bg-amber-50 p-6 sm:p-10 lg:grid-cols-2 lg:p-14">
        {/* Content */}
        <div className="space-y-6 text-center lg:text-left">
          <span className="inline-block rounded-full bg-amber-200 px-4 py-2 text-sm font-semibold text-amber-900">
            Discover Your Next Favorite Book
          </span>

          <h1 className="text-4xl font-extrabold leading-tight text-slate-900 sm:text-5xl lg:text-6xl">
            Books to freshen up{" "}
            <span className="text-amber-600">your bookshelf</span>
          </h1>

          <p className="max-w-lg text-base leading-relaxed text-slate-600 sm:text-lg">
            Explore inspiring stories, timeless classics, and exciting new reads
            to make your bookshelf truly special.
          </p>

          <div className="flex flex-wrap justify-center gap-4 lg:justify-start">
            <button className="btn btn-success rounded-full px-6 shadow-md transition hover:scale-105">
              Explore Books →
            </button>

            <button className="btn btn-outline rounded-full px-6 transition hover:scale-105">
              Learn More
            </button>
          </div>
        </div>

        {/* Image */}
        <div className="relative mx-auto w-full max-w-md lg:max-w-lg">
          <Image
            src={bannerImg}
            alt="A collection of books"
            priority
            className="h-auto w-full rounded-2xl object-cover shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default Banner;
