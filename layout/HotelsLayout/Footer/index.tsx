import footerItem from "@/menu-items/footer-item";
import React from "react";
import FooterItem from "./FooterItem";

const Footer = () => {
  return (
    <footer style={{ display: "flex", justifyContent: "center", gap: "20px" }}>
      {footerItem.map((item, index) => (
        <FooterItem title={item.title} link={item.link} key={index} />
      ))}
    </footer>
  );
};

export default Footer;
 