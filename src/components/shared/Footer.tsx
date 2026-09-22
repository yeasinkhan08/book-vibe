"use client";

import Link from "next/link";
import React, { useState } from "react";
import { toast } from "react-toastify";

const Footer = () => {
  const [email, setEmail] = useState("");

  const handleNotifyMe = (e: React.FormEvent) => {
    e.preventDefault();

    if (!email) {
      toast.error("Enter an email to get notified");
      return;
    }

    toast.success("You're on the list — we'll let you know");
    setEmail("");
  };

  return (
    <footer className="relative bg-white pt-10">
      <div className="">
        {/* Overlapping "stay in the loop" card */}
        <div className="relative z-10 -mb-8 rounded-3xl border border-amber-200 bg-amber-100 px-8 py-5 shadow-sm sm:px-12">
          <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
            <div>
              <h3 className="text-2xl font-bold text-slate-800">
                Stay in the loop
              </h3>
              <p className="mt-2 max-w-sm text-slate-600">
                Get a nudge whenever a new title lands on the shelf.
              </p>
            </div>
            <form
              onSubmit={handleNotifyMe}
              className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row"
            >
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                className="w-full rounded-xl border border-amber-300 bg-white px-4 py-3 text-slate-700 placeholder:text-slate-400 focus:border-amber-500 focus:outline-none sm:w-64"
              />
              <button
                type="submit"
                className="shrink-0 rounded-xl bg-amber-500 px-6 py-3 font-semibold text-white transition hover:bg-amber-600"
              >
                Notify me
              </button>
            </form>
          </div>
        </div>

        {/* Main footer body */}
        <div className="rounded-t-3xl border border-slate-200 bg-slate-50 pt-15 pb-5">
          <div className="grid grid-cols-1 gap-12 px-8 sm:grid-cols-3 sm:px-12">
            {/* Brand */}
            <div className="max-w-xs">
              <span className="font-serif text-2xl text-slate-800">
                Book Vibe
              </span>
              <p className="mt-4 text-sm leading-relaxed text-slate-500">
                A quiet corner for what you&apos;re reading, what you loved, and
                what&apos;s next on the shelf.
              </p>
            </div>

            {/* Explore */}
            <div>
              <h4 className="font-semibold text-slate-800">Explore</h4>
              <ul className="mt-4 space-y-3 text-sm text-slate-500">
                <li>
                  <Link href="/" className="transition hover:text-amber-600">
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    href="/books"
                    className="transition hover:text-amber-600"
                  >
                    Books
                  </Link>
                </li>
                <li>
                  <Link
                    href="/listed-books"
                    className="transition hover:text-amber-600"
                  >
                    Listed Books
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="font-semibold text-slate-800">Get in touch</h4>
              <ul className="mt-4 space-y-3 text-sm text-slate-500">
                <li className="transition hover:text-amber-600">
                  <a>hello@bookvibe.app</a>
                </li>
                <li className="text-slate-500">Dhaka, Bangladesh</li>
              </ul>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="mt-3 flex flex-col gap-3 border-t border-slate-200 px-8 pt-2 text-xs text-slate-400 sm:flex-row sm:items-center sm:justify-between sm:px-12">
            <p>© {new Date().getFullYear()} Book Vibe. All rights reserved.</p>
            <p>Built for people who finish what they start.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
