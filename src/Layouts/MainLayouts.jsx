import { Toaster } from "react-hot-toast";
import { Outlet } from "react-router-dom";

const MainLayouts = () => {
  return (
    <div className="max-w-7xl mx-auto font-poppins">
      <Toaster></Toaster>
      <Outlet></Outlet>
    </div>
  );
};

export default MainLayouts;
