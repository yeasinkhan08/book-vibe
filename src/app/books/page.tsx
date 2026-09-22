import React from "react";

import { IBook } from "@/types/books.type";
import BookCard from "../../components/shared/BookCard";

const getBooks = async () => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_SERVER_BASE_URL}/booksData.json`,
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching books data", error);
    return [];
  }
};

const Books = async () => {
  const booksData = await getBooks();
  console.log(booksData);

  return (
    <section className="container mx-auto my-[70px] px-4">
      {/* Section Header */}
      <div className="mb-10 text-center">
        <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-amber-900">
          Explore Our All Collection
        </p>

        <h1 className="text-3xl font-bold text-slate-900 md:text-4xl">
          Discover All Books
          <span className="text-amber-600">Favorite Book</span>
        </h1>

        <p className="mx-auto mt-3 max-w-2xl text-slate-500">
          Explore our carefully curated collection of books and find your next
          great read.
        </p>
      </div>

      {/* Books Grid */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {booksData.map((book: IBook) => (
          <BookCard key={book.bookId} book={book} />
        ))}
      </div>
    </section>
  );
};

export default Books;
