"use client";

import { BooksContext } from "@/context/BookContext";
import { IBook } from "@/types/books.type";
import Image from "next/image";

import React, { useContext } from "react";
import Link from "next/link";

const ListedBooks = () => {
  const { readBook, wishlist } = useContext(BooksContext);

  return (
    <div className="container mx-auto py-[60px]">
      <h2 className="my-7 bg-amber-200 rounded-3xl py-16 font-bold text-4xl text-center">
        listed Books
      </h2>
      <div className="tabs tabs-lift">
        <input
          type="radio"
          name="my_tabs_3"
          className="tab"
          aria-label={`Read Books (${readBook.length})`}
        />
        <div className="tab-content bg-base-100 border-base-300 p-6">
          {readBook.length > 0 ? (
            readBook.map((book: IBook) => (
              <div
                key={book.bookId}
                className="flex w-full flex-col gap-5 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:shadow-md sm:flex-row"
              >
                <div className="h-56 w-full shrink-0 overflow-hidden rounded-xl sm:h-48 sm:w-36">
                  <Image
                    src={book.image}
                    alt={book.bookName}
                    width={144}
                    height={192}
                    className="h-full w-full object-cover"
                  />
                </div>

                <div className="flex flex-1 flex-col justify-between">
                  <div>
                    <h2 className="text-2xl font-bold text-slate-800">
                      {book.bookName}
                    </h2>
                    <p className="mt-2 text-slate-500">By {book.author}</p>
                    <p className="mt-4 line-clamp-3 text-slate-600">
                      {book.review}
                    </p>
                  </div>
                  <Link href={`/books/${book.bookId}`}>
                    <button className="mt-5 w-fit rounded-lg bg-amber-500 px-5 py-2 font-semibold text-white hover:bg-amber-600">
                      Read Details
                    </button>
                  </Link>
                </div>
              </div>
            ))
          ) : (
            <p className="text-center text-lg font-bold">No read books found</p>
          )}
        </div>

        <input
          type="radio"
          name="my_tabs_3"
          className="tab"
          aria-label={`WishList Books (${wishlist.length})`}
          defaultChecked
        />
        <div className="tab-content bg-base-100 border-base-300 p-6">
          {wishlist.length > 0 ? (
            wishlist.map((book: IBook) => (
              <div
                key={book.bookId}
                className="flex w-full flex-col gap-5 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:shadow-md sm:flex-row"
              >
                <div className="h-56 w-full shrink-0 overflow-hidden rounded-xl sm:h-48 sm:w-36">
                  <Image
                    src={book.image}
                    alt={book.bookName}
                    width={144}
                    height={192}
                    className="h-full w-full object-cover"
                  />
                </div>

                <div className="flex flex-1 flex-col justify-between">
                  <div>
                    <h2 className="text-2xl font-bold text-slate-800">
                      {book.bookName}
                    </h2>
                    <p className="mt-2 text-slate-500">By {book.author}</p>
                    <p className="mt-4 line-clamp-3 text-slate-600">
                      {book.review}
                    </p>
                  </div>

                  <Link href={`/books/${book.bookId}`}>
                    <button className="mt-5 w-fit rounded-lg bg-amber-500 px-5 py-2 font-semibold text-white hover:bg-amber-600">
                      Read Details
                    </button>
                  </Link>
                </div>
              </div>
            ))
          ) : (
            <p className="text-center text-lg font-bold">
              No wishlist books found
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ListedBooks;
