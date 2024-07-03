import Header from "../Header";
import Navbar from "./Navbar";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Header>
        <Navbar />
      </Header>
      {children}
    </>
  );
};

export default MainLayout;
