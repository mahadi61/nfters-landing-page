import { Outlet } from "react-router-dom";
import Footer from "../Shared/Footer/Footer";
import Navbar from "../Shared/Navbar/Navbar";

const MainLayout = () => {
  return (
    <>
      <Navbar />

      <Outlet />
      <div className="w-11/12 lg:max-w-7xl mx-auto">
        <Footer />
      </div>
    </>
  );
};

export default MainLayout;
