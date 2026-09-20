import { IBook } from "@/types/books.type";
import React from "react";
import { FaStar, FaArrowRight } from "react-icons/fa6";
import Link from "next/link";

interface IBookCardProps {
  book: IBook;
}

const BookCard = ({ book }: IBookCardProps) => {
  const {
    bookName,
    author,
    image,
    rating,
    category,
    totalPages,
    yearOfPublishing,
  } = book;

  return (
    <article className="group overflow-hidden rounded-xl border border-slate-200 bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
      {/* Small Book Cover */}
      <div className="relative flex h-[220px] items-center justify-center bg-[#f5f5f3] p-4">
        <span className="absolute left-3 top-3 rounded-full bg-white px-2.5 py-1 text-xs font-medium text-slate-600 shadow-sm">
          {category}
        </span>

        <img
          src={image}
          alt={bookName}
          className="h-full w-auto max-w-[150px] object-contain transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      {/* Content */}
      <div className="p-4">
        {/* Rating & Year */}
        <div className="mb-2 flex items-center justify-between text-sm">
          <div className="flex items-center gap-1">
            <FaStar className="text-amber-400" />
            <span className="font-semibold text-slate-700">{rating}</span>
          </div>

          <span className="text-slate-400">{yearOfPublishing}</span>
        </div>

        {/* Title */}
        <h2 className="line-clamp-2 min-h-[48px] text-lg font-bold leading-6 text-slate-900 transition-colors group-hover:text-amber-800">
          {bookName}
        </h2>

        {/* Author */}
        <p className="mt-1 truncate text-sm text-slate-500">{author}</p>

        <div className="my-3 border-t border-slate-100" />

        {/* Bottom */}
        <div className="flex items-center justify-between">
          <div>
            <p className="text-xs text-slate-400">Pages</p>
            <p className="font-semibold text-slate-700">{totalPages}</p>
          </div>

          <Link href={`/books/${book.bookId}`}>
            <button className="flex items-center gap-2 rounded-full bg-slate-900 px-3 py-2 text-xs font-medium text-white transition-colors hover:bg-red-950">
              Details
              <FaArrowRight className="text-[10px]" />
            </button>
          </Link>
        </div>
      </div>
    </article>
  );
};

export default BookCard;
