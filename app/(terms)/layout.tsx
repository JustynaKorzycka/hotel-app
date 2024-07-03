import HotelsLayout from "@/layout/HotelsLayout";
import React from "react";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return <HotelsLayout>{children}</HotelsLayout>;
};

export default Layout;
