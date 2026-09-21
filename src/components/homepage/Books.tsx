import React from "react";
import BookCard from "../shared/BookCard";
import { IBook } from "@/types/books.type";

const getBooks = async () => {
  const response = await fetch("http://localhost:3000/booksData.json");
  const data = await response.json();
  return data;
};

const Books = async () => {
  const booksData = await getBooks();
  console.log(booksData);

  return (
    <section className="container mx-auto my-[70px] px-4">
      {/* Section Header */}
      <div className="mb-10 text-center">
        <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-amber-900">
          Explore Our Populer Collection
        </p>

        <h1 className="text-3xl font-bold text-slate-900 md:text-4xl gap-2">
          Discover Your Next{" "}
          <span className="text-amber-600">Favorite Book</span>
        </h1>

        <p className="mx-auto mt-3 max-w-2xl text-slate-500">
          Explore our carefully curated collection of books and find your next
          great read.
        </p>
      </div>

      {/* Books Grid */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {booksData.slice(0, 6).map((book: IBook) => (
          <BookCard key={book.bookId} book={book} />
        ))}
      </div>
    </section>
  );
};

export default Books;
