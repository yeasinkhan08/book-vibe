"use client";

import React, { ReactNode, useState } from "react";
import { createContext } from "react";
import { IBook } from "../types/books.type";

interface IBookContext {
  readBook: IBook[];
  setReadBook: React.Dispatch<React.SetStateAction<IBook[]>>;
  wishlist: IBook[];
  setWishlist: React.Dispatch<React.SetStateAction<IBook[]>>;
}

export const BooksContext = createContext<IBookContext>({
  readBook: [],
  setReadBook: () => {},
  wishlist: [],
  setWishlist: () => {},
});

const BooksProvider = ({ children }: { children: ReactNode }) => {
  const [readBook, setReadBook] = useState<IBook[]>([]);
  const [wishlist, setWishlist] = useState<IBook[]>([]);

  const shareData = {
    readBook,
    setReadBook,
    wishlist,
    setWishlist,
  };

  return (
    <BooksContext.Provider value={shareData}>{children}</BooksContext.Provider>
  );
};

export default BooksProvider;
