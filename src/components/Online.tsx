import { Bell } from "iconoir-react";

const Icon = () => {
  return <Bell className="w-9 justify-center align-middle mt-2 stroke-1" />;
};

export default function Online() {
  return (
    <div className="flex flex-space-4 gap-2 items-center justify-center">
      <a
        href=""
        className="hidden md:block whitespace-nowrap text-indigo-600 rounded outline outline-1 px-[15px] py-[6px] outline-indigo-600 hover:bg-indigo-600 hover:text-white hover:underline"
      >
        Create Post
      </a>
      <a className="px-2 md:hidden hover:rounded-lg hover:bg-indigo-200/50 hover:text-indigo-600">
        <i className="mt-2 text-2xl iconoir-search"></i>
      </a>
      <a className="px-2 h-9 align-middle hover:rounded-sm hover:bg-indigo-200/50 hover:text-indigo-600">
        <Icon></Icon>
      </a>
      <button>
        {/* //TODO: Create Dropdown menu */}
        <img
          src="https://api.dicebear.com/6.x/notionists/svg"
          alt="avatar"
          className="rounded-full mt-z w-8 h-8 hover:outline hover:outline-indigo-200/50 border border-black"
        />
      </button>
    </div>
  );
}
