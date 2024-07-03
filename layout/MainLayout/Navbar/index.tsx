import menuItems from "@/menu-items/nav-itema";
import MenuItem from "./MenuItem";

const Navbar = () => {
  return (
    <nav style={{ display: "flex", gap: "10px" }}>
      {menuItems.map((item, index) => (
        <MenuItem key={index} link={item.link} title={item.title} />
      ))}
    </nav>
  );
};

export default Navbar;
