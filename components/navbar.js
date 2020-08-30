import React from 'react';
import Link from 'next/link';
const navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link href="/">
            <a>Home</a>
          </Link>
        </li>
        <li>
          <Link href="/product">
            <a>Product</a>
          </Link>
        </li>
        <li>
          <Link href="/product/1">
            <a>Product 1</a>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default navbar;
