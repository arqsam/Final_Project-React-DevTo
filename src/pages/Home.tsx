import Navbar from "../components/Navbar";
import Menu from "../components/menu/Menu";
import CardMain from "../components/CardMain";
import CardAside from "../components/CardAside";
import Footer from "../components/Footer";
import { BookmarkEmpty, Message } from "iconoir-react";

export default function Home() {
  return (
    <>
      <header className=" bg-white shadow-md">
        <Navbar isOnline={true} />
      </header>

      <div className="container mx-auto ">
        <div className="grid grid-cols-12 grid-rows-3 gap-4 m-3 bg-[rgb(245,245,245,1)]">
          <aside className="hidden md:flex md:col-span-3 md:row-span-3  pt-4">
            <Menu></Menu>
          </aside>
          <main className="col-span-12 row-span-3 md:col-span-6 md:col-start-4 md:row-span-3 ">
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
            <article className="flex flex-col columns-1 border rounded-xl bg-white shadow-sm mb-2">
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
                  <h1 className="font-bold text-2xl text-gray-900/90  hover:text-indigo-800">
                    <a href="">
                      Integrating Jest Testing into an Existing Vue 3 Project
                      with ViteJs
                    </a>
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
                  <div className="flex flex-row rows-4 gap-3 mt-2 justify-between mb-4">
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
                    <div className="flex flex-row pr-4">
                      <p className="text-[12px] mx-1 align-middle mt-[14px] whitespace-nowrap">
                        4 min read
                      </p>
                      <button>
                        <BookmarkEmpty className="w-[19px] h-[19px] stroke-[2px] mt-2 hover:bg-gray-300/30 rounded-md" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </article>
            <section>
              <CardMain
                userName="Any Person"
                title="Best way to prepare for coding interviews in 2023?"
                hashtag="#react"
              ></CardMain>
              <CardMain
                userName="Other Person"
                title="Learn React.js: A Complete Guide to Proposals, Components, Functional Components, State, React.js Hooks, and Redux"
                hashtag="#react"
              ></CardMain>
            </section>
          </main>
          <aside className="hidden  md:flex md:col-span-3 md:col-start-10 md:row-span-3 gap-4 flex-wrap">
            <section className="w-screen h-[40rem] flex flex-col bg-white rounded-xl pt-1 border shadow-md">
              <div className="flex flex-row justify-between py-4 border-b-[1.5px] border-gray-600/20 align-middle">
                <h1 className="font-bold text-xl px-2">Listings</h1>
                <a
                  href=""
                  className="px-2 mt-1 text-[14px] text-indigo-700 hover:text-indigo-900 hover:underline font-semibold"
                >
                  See all
                </a>
              </div>
              <div>
                <CardAside
                  content="Join Our FREE Coding Community!"
                  word="misc"
                ></CardAside>
                <CardAside
                  content="Learn Solidity Blockchain Development: Zero to Expert (4.9 course rating)"
                  word="education"
                ></CardAside>
                <CardAside
                  content="Twitter Space - Future of Frontends in 5-10 years with Misko Hevery and Ryan Carniato"
                  word="events"
                ></CardAside>
                <CardAside
                  content="Developer Clothing and Apparel"
                  word="products"
                ></CardAside>
                <CardAside
                  content="🤖 Free (Virtual) Workshop on TinyML and loT "
                  word="events"
                ></CardAside>
              </div>
              <div className="flex flex-col justify-center py-4 align-middle">
                <a
                  href=""
                  className="px-2 mt-1 text-[14px] hover:text-indigo-900 font-semibold flex flex-row justify-center"
                >
                  Create a Listing
                </a>
              </div>
            </section>
            <section className="w-screen h-auto flex flex-col bg-white rounded-xl pt-1 border shadow-md">
              <div className="flex flex-row justify-between py-4 border-b-[1.5px] border-gray-600/20 align-middle">
                <h1 className="font-bold text-xl px-2">#discuss</h1>
              </div>
              <div>
                <CardAside
                  content="What was your win this week?"
                  word="22 comments"
                ></CardAside>
                <CardAside
                  content="Advice for newbie devs that are Working From Home? 💻"
                  word="7 comments"
                ></CardAside>
                <CardAside
                  content="What CSS details make forms amazing?"
                  word="1 comment"
                ></CardAside>
                <CardAside
                  content="Coding 101: How Do I Get My Website Online?"
                  word="8 comments"
                ></CardAside>
                <CardAside
                  content="Which Package Managers?"
                  word="2 comments"
                ></CardAside>
              </div>
            </section>
            <section className="w-screen h-[12rem] flex flex-col bg-white rounded-xl pt-1 border shadow-md">
              <div className="flex flex-row justify-between py-4 border-b-[1.5px] border-gray-600/20 align-middle">
                <h1 className="font-bold text-xl px-2">#watercooler</h1>
              </div>
              <div>
                <article className="h-auto flex flex-col pb-4  bg-white py-4 px-3">
                  <a href="" className="">
                    <h2 className="font-normal text-base text-gray-800/90  hover:text-indigo-700 ">
                      What was your win this week?
                    </h2>
                  </a>
                  <p className="text-[14px] text-black/40 ">22 comments</p>
                  <p className="bg-yellow-300 text-red-950 rounded-md w-10 p-1 text-[14px] mt-2">
                    New{" "}
                  </p>
                </article>
              </div>
            </section>
          </aside>
        </div>
      </div>
      <footer className="flex flex-cols-1 justify-center p-6 bg-[rgb(229,229,229)]">
        <Footer></Footer>
      </footer>
    </>
  );
}
