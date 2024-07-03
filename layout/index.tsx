"use client";
import { usePathname } from "next/navigation";
import MainLayout from "./MainLayout";
import AdminLayout from "./AdminLayout";

const Layout = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();
  if (pathname.includes("/admin")) {
    return <AdminLayout>{children}</AdminLayout>;
  } else return <MainLayout>{children}</MainLayout>;
};

export default Layout;
