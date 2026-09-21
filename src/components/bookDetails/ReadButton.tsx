"use client";
import { BooksContext } from "@/context/BookContext";
import { IBook } from "@/types/books.type";
import React, { useContext } from "react";

const ReadButton = ({ book }: { book: IBook }) => {
  const booksProvider = useContext(BooksContext);
  console.log(book);

  const handleReadBook = () => {
    console.log(book);
  };
  return (
    <button
      className="rounded-md border border-slate-300 px-5 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-100"
      onClick={() => handleReadBook()}
    >
      Read
    </button>
  );
};

export default ReadButton;
