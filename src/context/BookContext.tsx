"use client";

import { create } from "domain";
import React, { ReactNode, use, useState } from "react";
import { createContext } from "vm";

const BooksContext = createContext({});

const BooksProvider = ({ children }: { children: ReactNode }) => {
  const [readBooks, setReadbooks] = useState([]);
  const [wishList, setWishList] = useState([]);

  const shareData = {
    readBooks,
    setReadbooks,
    wishList,
    setWishList,
  };

  return (
    <div>
      <BooksContext.Provider value={shareData}>
        {children}
      </BooksContext.Provider>
    </div>
  );
};

export default BooksProvider;
