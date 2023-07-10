import Image from "next/image";
import Link from "next/link";
import React from "react";

const Logo = () => {
  return (
    <div>
      <Link href="/">
        <Image src="/logo.png" width={80} height={80} alt="Logo" />
      </Link>
    </div>
  );
};

export default Logo;
