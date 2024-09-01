import { Outlet } from "react-router-dom";

const HomeLayout = () => {
  return (
    <div className="min-h-screen w-full">
      <Outlet />
    </div>
  );
};

export default HomeLayout;
