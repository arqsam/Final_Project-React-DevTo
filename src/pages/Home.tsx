import Navbar from "../components/Navbar";
import Menu from "../components/menu/Menu";
import Hashtags from "../components/menu/Hashtags";
import { BookmarkEmpty, ChatBubbleEmpty, Message } from "iconoir-react";

export default function Home() {
  return (
    <>
      <header className=" bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]">
        <Navbar isOnline={true} />
      </header>

      <div className="container mx-auto ">
        <div className="grid grid-cols-12 grid-rows-3 gap-4 m-3 bg-[rgb(245,245,245,1)]">
          <aside className="hidden md:flex md:col-span-3 md:row-span-3 border-helper pt-4">
            <Menu></Menu>
          </aside>
          <main className="col-span-12 row-span-3 md:col-span-6 md:col-start-4 md:row-span-3 border-helper">
            <ul className=" mt-1 pb-2 flex flex-rows-3 gap-5 text-[18px]">
              <li className="my-1">
                <a
                  className=" p-2 mr-2 hover:text-indigo-700 hover:bg-white rounded-md"
                  aria-current="page"
                  href="#"
                  id="relevant-filter"
                >
                  {" "}
                  Relevant
                </a>
              </li>
              <li className="my-1">
                <a
                  className="p-2 mr-2 hover:text-indigo-700 hover:bg-white rounded-md"
                  href="#"
                  id="latest-filter"
                >
                  Latest
                </a>
              </li>
              <li className="m-1">
                <a
                  className="p-2 mr-2 hover:text-indigo-700 hover:bg-white rounded-md"
                  href="#"
                  id="top-filter"
                >
                  Top
                </a>
              </li>
            </ul>
            <article className="flex flex-col columns-1 border border rounded-xl bg-white shadow-sm">
              <img
                src="https://res.cloudinary.com/practicaldev/image/fetch/s--HsQMAsNu--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/rk8vycfryt31mh9tkzoe.png"
                alt="post-image"
                className="rounded-t-xl"
              />
              <div>
                <div className="flex flex-row row-span-2 m-3 gap-2 align-middle">
                  <img
                    src="https://api.dicebear.com/6.x/notionists/svg"
                    alt="avatar"
                    className=" rounded-full mt-z w-10 h-10 hover:outline hover:outline-indigo-200/50 border border-black"
                  />
                  <button className="flex flex-col col-span-2">
                    <a
                      href=""
                      className="text-[16px] font-semibold hover:text-indigo-900 hover:bg-gray-300/30 rounded-md w-20"
                    >
                      Abhishek
                    </a>
                    <p className="text-[12px] mx-1">Jul 7 (8 hours ago)</p>
                  </button>
                </div>
                <div className="pl-[4rem]">
                  <h1 className="font-bold text-2xl text-gray-900/90">
                    Integrating Jest Testing into an Existing Vue 3 Project with
                    ViteJs
                  </h1>
                  <div className="flex flex-row rows-4 gap-3 mt-2">
                    <a className="hover:bg-gray-300/30 hover:text-indigo-900 rounded-md p-1">
                      #devTo
                    </a>
                    <a className="hover:bg-gray-300/30 hover:text-indigo-900 rounded-md p-1">
                      #javascript
                    </a>
                    <a className="hover:bg-gray-300/30 hover:text-indigo-900 rounded-md p-1">
                      #vue
                    </a>
                    <a className="hover:bg-gray-300/30 hover:text-indigo-900 rounded-md p-1">
                      #viteJs
                    </a>
                  </div>
                  <div className="flex flex-row rows-4 gap-3 mt-2 justify-between">
                    <button className="flex flex-row gap-20 hover:bg-gray-300/30 rounded-md p-1">
                      <div className="flex flex-row w-1 p-1">
                        <p className="w-7 bg-slate-400/20 rounded-full z-30">
                          💖
                        </p>
                        <p className="w-7 bg-slate-400/20 rounded-full z-20">
                          🦄
                        </p>
                        <p className="w-7 bg-slate-400/20 rounded-full z-10">
                          🔥
                        </p>
                        <p className="w-7 bg-slate-400/20 rounded-full z-0">
                          🤯
                        </p>
                      </div>
                      <p className="mx-2 text-[14px] pt-2 hover:text-indigo-900 whitespace-nowrap">
                        {" "}
                        5 Reactions{" "}
                      </p>
                    </button>
                    <button className="flex flex-row  hover:bg-gray-300/30 rounded-md p-1">
                      <Message className="w-[19px] h-[19px] stroke-[2px] mt-2" />
                      <p className="mx-2 text-[14px] pt-2 hover:text-indigo-900 whitespace-nowrap">
                        {" "}
                        Add comment{" "}
                      </p>
                    </button>
                    <div className="flex flex-row pr-2">
                      <p className="text-[12px] mx-1 align-middle mt-[14px] whitespace-nowrap">
                        4 min read
                      </p>
                      <button>
                        <BookmarkEmpty className="w-[19px] h-[19px] stroke-[2px] mt-2" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </article>
          </main>
          <aside className="hidden md:flex md:col-span-3 md:col-start-10 md:row-span-3 border-helper">
            Cards Aside
          </aside>
        </div>
        <footer className="grid grid-cols-12 border-helper">Footer</footer>
      </div>
    </>
  );
}
