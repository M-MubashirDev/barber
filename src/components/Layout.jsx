import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

function Layout() {
  return (
    <div className="flex h-100% flex-col ">
      <nav className="w-screen border-b-[0.5px] border-black">
        <Navbar />
      </nav>
      <main className="flex-1  ">
        <Outlet />
      </main>
    </div>
  );
}

export default Layout;
// max-w-[1440px] mx-auto w-[90%]
