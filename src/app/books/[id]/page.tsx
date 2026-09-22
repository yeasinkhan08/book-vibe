import React from "react";
import { IBook } from "../../../types/books.type";
import Image from "next/image";
import ReadButton from "@/components/bookDetails/ReadButton";
import WishListButton from "@/components/bookDetails/WishListButton";

interface IBookDetailsPageProps {
  params: Promise<{
    id: string;
  }>;
}

const getBooks = async () => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_SERVER_BASE}/booksData.json`,
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching books data", error);
    return [];
  }
};

const booksDetailsPage = async ({ params }: IBookDetailsPageProps) => {
  const { id } = await params;
  const booksData = await getBooks();
  const book = booksData.find(
    (book: IBook) => String(book.bookId) === String(id),
  );

  return (
    <section className="container mx-auto px-4 py-10">
      <div className="grid grid-cols-1 items-start gap-8 md:grid-cols-2">
        {/* Book Image */}
        <div className="flex items-center justify-center rounded-lg bg-slate-100 p-8 md:p-12">
          <div className="relative h-[350px] w-full max-w-[280px]">
            <Image
              src={book.image}
              alt={book.bookName}
              fill
              className="object-contain"
              sizes="(max-width: 768px) 100vw, 280px"
            />
          </div>
        </div>

        {/* Book Information */}
        <div className="space-y-5">
          {/* Title & Author */}
          <div>
            <h1 className="font-serif text-3xl font-bold text-slate-900 md:text-4xl">
              {book.bookName}
            </h1>

            <p className="mt-2 text-sm text-slate-600">
              By : <span className="text-slate-900">{book.author}</span>
            </p>
          </div>

          <div className="border-t border-slate-200 pt-4">
            <p className="text-sm text-slate-700">{book.category}</p>
          </div>

          {/* Review */}
          <div className="border-t border-slate-200 pt-4">
            <p className="text-sm leading-6 text-slate-500">
              <span className="font-semibold text-slate-900">Review:</span>{" "}
              {book.review}
            </p>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap items-center gap-3 border-b border-t border-slate-200 py-4">
            <span className="text-sm font-semibold text-slate-800">Tag</span>

            {book.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full bg-green-50 px-3 py-1 text-xs font-medium text-green-600"
              >
                #{tag}
              </span>
            ))}
          </div>

          {/* Book Metadata */}
          <div className="space-y-4 text-sm">
            <div className="grid grid-cols-2 gap-3">
              <span className="text-slate-500">Number of Pages:</span>
              <span className="font-semibold text-slate-800">
                {book.totalPages}
              </span>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <span className="text-slate-500">Publisher:</span>
              <span className="font-semibold text-slate-800">
                {book.publisher}
              </span>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <span className="text-slate-500">Year of Publishing:</span>
              <span className="font-semibold text-slate-800">
                {book.yearOfPublishing}
              </span>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <span className="text-slate-500">Rating:</span>

              <div className="flex items-center gap-2">
                <span className="font-semibold text-slate-800">
                  {book.rating}
                </span>

                <span className="text-yellow-400">★★★★★</span>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-2 pt-2">
            <ReadButton book={book} />

            <WishListButton book={book} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default booksDetailsPage;
