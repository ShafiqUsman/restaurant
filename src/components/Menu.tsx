"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import CartIcon from "./CartIcon";

const links = [
  {
    id: 1,
    title: "Homepage",
    url: "/",
  },
  {
    id: 2,
    title: "Menu",
    url: "/menu",
  },
  {
    id: 3,
    title: "Working Hours",
    url: "/",
  },
  {
    id: 4,
    title: "Contact",
    url: "/",
  },
];

const Menu = () => {
  const [open, setOpen] = useState(false);

  // TEMPORARY USER
  const user = false;

  return (
    <div>
      {!open ? (
        <Image
          src="/open.png"
          alt="open"
          width={20}
          height={20}
          onClick={() => setOpen(true)}
          className="cursor-pointer"
        />
      ) : (
        <Image
          src="/close.png"
          alt="close"
          width={20}
          height={20}
          onClick={() => setOpen(false)}
          className="cursor-pointer"
        />
      )}
      {open && <div className="bg-red-500 text-white absolute left-0 top-24 w-full h-[calc(100vh-6rem)] flex flex-col justify-center items-center gap-8 text-3xl z-10">
        {links.map((item) => (
          <Link href={item.url} key={item.id} onClick={()=>setOpen(false)}>
            {item.title}
          </Link>
        ))}
        {!user ? (
          <Link href={"/login"}>Login</Link>
        ) : (
          <Link href={"/orders"} onClick={()=>setOpen(false)}>Orders</Link>
        )}
        <Link href={'/cart'} onClick={()=>setOpen(false)}>
            <CartIcon />
        </Link>
      </div>}
    </div>
  );
};

export default Menu;