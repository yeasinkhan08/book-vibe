"use client";

import { IBook } from "@/types/books.type";
import React, { useContext } from "react";

import { BooksContext } from "@/context/BookContext";
import { toast } from "react-toastify";

const ReadButton = ({ book }: { book: IBook }) => {
  const { readBook, setReadBook } = useContext(BooksContext);
  const handleReadBook = () => {
    console.log(book);

    setReadBook([...readBook, book]);
    toast.success(`You have added${book.bookName} to your readlist `);
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
