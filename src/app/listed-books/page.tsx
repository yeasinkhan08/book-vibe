"use client";

import { BooksContext } from "@/context/BookContext";

import React, { useContext } from "react";

const ListedBooks = () => {
  const { readBooks } = useContext(BooksContext);
  console.log(readBooks);
  return <div>listed books</div>;

  return <div></div>;
};

export default ListedBooks;
