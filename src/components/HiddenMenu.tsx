import { NavLink } from "react-router-dom";
import ListElement from "./menu/ListElement";

export default function HiddenMenu() {
  return (
    <main className="md:col-span-3 md:row-span-3 flex flex-col w-screen gap-3">
      <ul className="grid grid-col-1 col-span-1 gap-1 ">
        <NavLink to="/">
          <li>
            <ListElement icon="🏠" title="Home" />
          </li>
        </NavLink>
        <li>
          <ListElement icon="📜" title="Listings" />
        </li>
        <li>
          <ListElement icon="🎙️" title="Podcasts" />
        </li>
        <li>
          <ListElement icon="📽️" title="Videos" />
        </li>
        <li>
          <ListElement icon="🏷️" title="Tags" />
        </li>
        <li>
          <ListElement icon="💡" title="FAQ" />
        </li>
        <li>
          <ListElement icon="🛍️" title="Forem Shop" />
        </li>
        <li>
          <ListElement icon="❤️" title="Sponsors" />
        </li>
        <li>
          <ListElement icon="🏳️‍🌈" title="About" />
        </li>
        <li>
          <ListElement icon="📯" title="Contact" />
        </li>
        <li>
          <ListElement icon="📖" title="Guides" />
        </li>
        <li>
          <ListElement icon="🤔" title="Software comparisons" />
        </li>
        <h2 className="ml-6 m-2 font-bold">Other</h2>
        <li>
          <ListElement icon="👍" title="Code of Conduct" />
        </li>
        <li>
          <ListElement icon="🤓" title="Privacy Policy" />
        </li>
        <li>
          <ListElement icon="👀" title="Terms of use" />
        </li>
      </ul>
    </main>
  );
}
