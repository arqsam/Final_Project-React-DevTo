import ListElement from "./ListElement";
import {
  GithubCircle,
  Twitter,
  FacebookTag,
  Instagram,
  Stackoverflow,
  YouTube,
} from "iconoir-react";

export default function Menu() {
  return (
    <main className="md:col-span-3 md:row-span-3 flex flex-col w-screen gap-3">
      <ul className="grid grid-col-1 col-span-1 gap-1 ">
        <li>
          <ListElement icon="🏠" title="Home" />
        </li>
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
        <h2 className=" ml-6 m-2 font-bold">Other</h2>
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
      <div className="mx-3 grid grid-rows-1 grid-cols-6 gap-2">
        <a href="" className="hover:bg-indigo-600/10 w-9 h-9 p-1 rounded-md ">
          <Twitter className="w-[26px] h-[26px] stroke-[2px] hover:text-indigo-800" />
        </a>
        <a href="" className="hover:bg-indigo-600/10 w-9 h-9 p-1 rounded-md ">
          <FacebookTag className="w-[26px] h-[26px] stroke-[2px]  hover:text-indigo-800" />
        </a>
        <a href="" className="hover:bg-indigo-600/10 w-9 h-9 p-1 rounded-md">
          <GithubCircle className="w-[26px] h-[26px] stroke-[2px]  hover:text-indigo-800" />
        </a>
        <a href="" className="hover:bg-indigo-600/10 w-9 h-9 p-1 rounded-md">
          <Instagram className="w-[26px] h-[26px] stroke-[2px]  hover:text-indigo-800" />
        </a>
        <a href="" className="hover:bg-indigo-600/10 w-9 h-9 p-1 rounded-md">
          <Stackoverflow className="w-[26px] h-[26px] stroke-[2px]  hover:text-indigo-800" />
        </a>
        <a href="" className="hover:bg-indigo-600/10 w-9 h-9 p-1 rounded-md ">
          <YouTube className="w-[26px] h-[26px] stroke-[2px]  hover:text-indigo-800" />
        </a>
      </div>
      <nav>
        <header> My Tags</header>
        <div>#Hastags</div>
      </nav>
      <article></article>
      <article></article>
    </main>
  );
}
