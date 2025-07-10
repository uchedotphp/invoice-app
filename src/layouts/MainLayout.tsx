import Sidebar from "@components/sidebar/Sidebar";
import { Outlet } from "react-router";

const MainLayout = () => {
  return (
    <div className="h-full flex flex-col lg:flex-row">
      <aside className="overflow-hidden">
        <Sidebar />
      </aside>
      <main className="bg-red-300 flex-1 overflow-y-auto">
        <Outlet />
      </main>
    </div>
  );
};

export default MainLayout;
