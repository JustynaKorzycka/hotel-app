"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useMemo } from "react";
import IMenuItem from "@/menu-items/types";

const MenuItem = ({ title, link }: IMenuItem) => {
  const pathname = usePathname();
  const isActive = useMemo(() => pathname === link, [pathname, link]);
  return (
    <Link href={link} style={isActive ? { color: "red" } : {}}>
      {title}
    </Link>
  );
};

export default MenuItem;
