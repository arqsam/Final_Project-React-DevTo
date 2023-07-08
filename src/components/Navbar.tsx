import Online from "./Online";
import Offline from "./Offline";
import { Search } from "iconoir-react";

const Icon = () => {
  return <Search className="w-[20px] pb-2" />;
};

interface Props {
  isOnline: boolean;
}

export default function Navbar(props: Props) {
  return (
    <nav className="container grid grid-cols-12 mx-auto h-14">
      <div className="flex items-center justify-between col-span-12 px-2 mx-6">
        {/* //TODO: Create Onside Menu */}
        <div className="flex items-center w-1/3 gap-2">
          <a className="p-2 space-y-1 rounded-md hover:bg-indigo-200/50 md:hidden">
            <div className="w-5 h-0.5 bg-gray-600"></div>
            <div className="w-5 h-0.5 bg-gray-600"></div>
            <div className="w-5 h-0.5 bg-gray-600"></div>
          </a>
          <img
            className="h-10"
            src="https://dev-to-uploads.s3.amazonaws.com/uploads/logos/resized_logo_UQww2soKuUsjaOGNB38o.png"
            alt="devlogo"
          />
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
        {props.isOnline ? <Online /> : <Offline />}
      </div>
    </nav>
  );
}
