import Online from "./Online";
import Offline from "./Offline";
import { Search, Cancel } from "iconoir-react";
import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import MenuHidden from "./menu/Menu";
import HiddenMenu from "./HiddenMenu";

const Icon = () => {
  return <Search className="w-[20px] pb-2" />;
};

export default function Navbar() {
  const [token, setToken] = useState("");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    setToken(token);
  }, []);

  return (
    <nav className="container grid grid-cols-12 mx-auto h-14">
      <div className="flex items-center justify-between col-span-12 px-2 mx-6">
        {/* //TODO: Create Onside Menu */}
        <div className="flex items-center w-1/3 gap-2">
          <div className="md:hidden">
            <button
              className="p-2 mr-10 space-y-1 rounded-md hover:bg-indigo-200/50 md:hidden "
              onClick={() => setOpen(true)}
            >
              <img src="../icons8-menú.svg" alt="menu" className="px-2 h-7" />
            </button>
            <div
              className={`${
                !open && "hidden"
              } bg-white backdrop-blur-sm transition-all duration-700 shadow-2xl shadow-gray-800 min-h-screen w-[52%] fixed top-0 left-0 right-0`}
            >
              <div className="flex flex-row justify-between">
                <h2 className="m-3 font-bold p-1 text-xl">DEV Community</h2>
                <button
                  className="m-3 p-1 hover:bg-indigo-200/40 rounded-md"
                  onClick={() => setOpen(false)}
                >
                  <Cancel></Cancel>
                </button>
              </div>
              <div className="mt-3">
                <HiddenMenu></HiddenMenu>
              </div>
            </div>
          </div>

          <NavLink to={"/"}>
            <img
              className="h-10"
              src="https://dev-to-uploads.s3.amazonaws.com/uploads/logos/resized_logo_UQww2soKuUsjaOGNB38o.png"
              alt="devlogo"
            />
          </NavLink>
          <form
            action="Search"
            className="h-9 justify-between align-middle hidden grow md:rounded-md md:flex md:outline md:outline-1 outline-gray-500/50 hover:outline-2 hover:outline-indigo-600"
          >
            <input
              type="text"
              name="search"
              className="rounded-md search-bar grow ml-2 h"
              placeholder="Search..."
            />
            <button
              type="submit"
              aria-label="search"
              className="px-1 text-3xl rounded-md hover:bg-indigo-200/50 align-middle"
            >
              <Icon></Icon>
            </button>
          </form>
        </div>
        {token != null ? <Online /> : <Offline />}
      </div>
    </nav>
  );
}
