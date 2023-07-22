import { useState } from "react";
import { Cancel } from "iconoir-react";

export default function SideBar() {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <div
        className={`${
          !open && "hidden"
        }"bg-gray-600/50 min-h-screen w-full backdrop-blur-sm "`}
        onClick={() => setOpen(false)}
      ></div>
      <div
        className={`${
          open ? "w-80" : "w-0"
        }"bg-green-500 min-h-screen w-80 fixed top-0 left-0 transition-all duration-300"`}
      >
        <div className={`${!open && "hidden"}"pt-3"`}>
          <button onClick={() => setOpen(false)}>
            <Cancel></Cancel>
          </button>
        </div>
      </div>
    </div>
  );
}
