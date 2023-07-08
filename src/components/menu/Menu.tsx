import ListElement from "./ListElement";
import Hashtags from "./Hashtags";

import {
  GithubCircle,
  Twitter,
  FacebookTag,
  Instagram,
  Stackoverflow,
  YouTube,
  Svg3DSelectPoint,
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
      <div className="mx-3 ml-5 grid grid-rows-1 grid-cols-6 gap-2 mt-2">
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
        <header className="ml-5 m-4 font-bold flex flex-row justify-between">
          <p>My Tags</p>
          <Svg3DSelectPoint className="w-[26px] h-[26px] stroke-[2px]  hover:text-indigo-800" />
        </header>
        <div className="h-20 overflow-y-auto flex flex-col gap-2">
          <Hashtags text="#devTo" />
          <Hashtags text="#react" />
          <Hashtags text="#coding" />
          <Hashtags text="#javascript" />
          <Hashtags text="#twitter" />
        </div>
      </nav>
      <article className="h-[15rem] overflow-y-auto flex flex-col mt-4 border bg-white rounded-xl shadow-md">
        <div className="grid grid-cols-2 p-2 gap-4">
          <p className="whitespace-nowrap"> DEV Community </p>
          <button className="justify-between hover:bg-slate-600/20 font-bold mx-9 rounded-md">
            {" "}
            ...{" "}
          </button>
        </div>
        <img
          src="https://res.cloudinary.com/practicaldev/image/fetch/s--Iim0709g--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_350/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/2tlkmy55xik6gfbcah9f.jpg"
          alt="article"
          className="w-auto rounded-2xl p-3"
        />
        <h1 className="font-bold text-2xl p-3 text-gray-800/90">
          Want to stay ahead of the game in the world of coding?
        </h1>
        <a
          href=""
          className="p-3  text-indigo-700 underline hover:text-indigo-900 hover:underline"
        >
          Join our newsletter community and never miss a beat.
        </a>
      </article>
      <article className="h-auto flex flex-col mt-4 pb-4  border bg-white rounded-xl shadow-md">
        <div className="grid grid-cols-2 p-2 gap-4">
          <p className="whitespace-nowrap"> DEV Community </p>
          <button className="justify-between hover:bg-slate-600/20 font-bold mx-9 rounded-md">
            {" "}
            ...{" "}
          </button>
        </div>
        <h1 className="font-normal text-base p-3 text-gray-800/90">
          DEV runs on 100% open source code known as
        </h1>
        <a
          href=""
          className="px-3  text-indigo-700 underline hover:text-indigo-900 hover:underline"
        >
          Forem
        </a>
        <p className="p-3">Contribute to the codebase or host your own!</p>
        <p className="p-3 font-bold">Check these out! 👇</p>
        <a
          href=""
          className="px-4  text-indigo-700 underline hover:text-indigo-900 hover:underline"
        >
          • Main Forem Repo
        </a>
        <a
          href=""
          className="px-4  text-indigo-700 underline hover:text-indigo-900 hover:underline"
        >
          • Self-Host Instructions
        </a>
      </article>
    </main>
  );
}
