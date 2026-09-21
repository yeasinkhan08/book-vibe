"use client";

import React, { ReactNode, useState } from "react";
import { createContext } from "react";

export const BooksContext = createContext({});

const BooksProvider = ({ children }: { children: ReactNode }) => {
  const [readBook, setReadBook] = useState([]);
  const [wishlist, setWishlist] = useState([]);

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
