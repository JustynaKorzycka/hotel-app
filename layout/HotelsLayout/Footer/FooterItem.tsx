"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useMemo } from "react";
import IMenuItem from "@/menu-items/types";

const FooterItem = ({ title, link }: IMenuItem) => {
  const pathname = usePathname();
  const isActive = useMemo(() => {
    if (pathname === link) return true;
  }, [pathname, link]);
  return (
    <Link href={link} style={isActive && { color: "blue" }}>
      {title}
    </Link>
  );
};

export default FooterItem;
