import React from "react";

const Header = ({ children }: { children?: React.ReactNode }) => {
  return (
    <header style={{ display: "flex", justifyContent: "space-between" }}>
      <div>Logo</div>
      {children && children}
      <div>UsersSettings</div>
    </header>
  );
};

export default Header;
