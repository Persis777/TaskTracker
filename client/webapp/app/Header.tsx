import React from "react";
import Link from "next/link";

export default function Header() {
  return (
    <header className="flex items-center justify-between p-2 border-b border-gray-600 bg-gray-900">
      <Link href="/">
        <h1 className="text-sm">Project name</h1>
      </Link>
    </header>
  );
}
