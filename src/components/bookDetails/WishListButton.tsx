"use client";
import { BooksContext } from "@/context/BookContext";
import { IBook } from "@/types/books.type";
import React, { useContext } from "react";
import { toast } from "react-toastify";

const WishListButton = ({ book }: { book: IBook }) => {
  const { wishlist, setWishlist } = useContext(BooksContext);

  const handleWishList = () => {
    console.log(book);

    setWishlist([...wishlist, book]);

    toast.success(`You have added${book.bookName} to your wishlist`);
  };

  return (
    <div>
      <button
        className="rounded-md bg-cyan-500 px-5 py-2 text-sm font-medium text-white transition hover:bg-cyan-600"
        onClick={() => handleWishList()}
      >
        Wishlist
      </button>
    </div>
  );
};

export default WishListButton;
