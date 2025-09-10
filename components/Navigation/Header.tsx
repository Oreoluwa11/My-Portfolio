"use client"
import React from 'react'
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";


const headerLinks = [
  { name: "About", href: "#about" },
  { name: "Portfolio", href: "#portfolio" },
  { name: "Services", href: "#services" },
  { name: "Resume", href: "#resume" },
];

export default function Header() {
  return (
    <nav className="fixed  w-full border-b border-white/10 bg-gradient-to-br from-accent to-primary backdrop-blur px-6">
      <div className="max-w-7xl mx-auto px-6 ">
        <div className="flex items-center justify-between h-16 py-6">
          {/* Logo */}
          <Image src="/p-logo.svg" alt="Logo" width={64} height={64} />
        </div>
      </div>
    </nav>
  );
}

