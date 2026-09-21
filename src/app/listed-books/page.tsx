"use client";

import { BooksContext } from "@/context/BookContext";

import React, { useContext } from "react";

const ListedBooks = () => {
  const { readBook, wishlist } = useContext(BooksContext);
  console.log(readBook, wishlist);
  return (
    <div>
      listed books | Total Read books:{readBook.length} <br /> {wishlist.lenght}
    </div>
  );
};

export default ListedBooks;
