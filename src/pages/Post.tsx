import Comments from "../components/Comments";
import MenuPost from "../components/MenuPost";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import { Message, BookmarkEmpty } from "iconoir-react";
import CardAsidePost from "../components/CardAsidePost";

export default function Post() {
  return (
    <>
      <header className=" bg-white shadow-md fixed w-screen z-10">
        <Navbar isOnline={true} />
      </header>

      <div className="container mx-auto">
        <div className="grid grid-cols-12 grid-rows-3 gap-4">
          <aside className="hidden md:flex md:col-span-2 md:row-span-3 mt-20">
            <MenuPost></MenuPost>
          </aside>
          <main className="col-span-12 row-span-3 md:col-span-7 md:col-start-3 md:row-span-3 mt-20">
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
                <div className="pl-[4rem] mr-3">
                  <h1 className="font-bold text-5xl text-gray-900/90  hover:text-indigo-800">
                    <a href="">
                      Integrating Jest Testing into an Existing Vue 3 Project
                      with ViteJs
                    </a>
                  </h1>
                  <div className="flex flex-row rows-4 gap-3 my-8">
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
                  <article className="my-8">
                    In my recent experience, I faced the challenge of
                    integrating the Jest testing framework into an existing Vue3
                    js project that was built with Vite. I encountered
                    difficulty finding helpful installation guides on various
                    blogs. However, after multiple attempts and putting in a lot
                    of effort, I eventually found a solution. In this blog post,
                    I aim to provide a step-by-step installation guide that can
                    assist others who may encounter the same challenge. Jest
                    Unit Testing 🧪 Jest, developed by Facebook, is a
                    widely-used JavaScript testing framework. It is specifically
                    designed for testing JavaScript applications, including
                    frontend frameworks like React, Vue, and Angular, as well as
                    backend Node.js applications. The core objective of Jest is
                    to provide users with a user-friendly and comprehensive
                    testing experience, achieved through its extensive feature
                    set and inclusive built-in functionalities. You can find
                    more information about Jest here. Prerequisites 📋 Before
                    proceeding, ensure that you have the following prerequisites
                    in place: Node.js (version 14 or above) and npm (Node
                    Package Manager) installed on your machine. Basic knowledge
                    of Vue.js and the Vite build tool. If needed, you can refer
                    to the documentation for Vue3js and Vite.
                  </article>
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
              <section className="flex flex-col border-t-[1.5px] border-gray-600/20 align-middle">
                <div className="flex justify-between">
                  <h1 className="font-bold text-xl m-8">TOP COMMENTS</h1>
                  <button
                    type="submit"
                    className="border-2 border-gray-300/50 hover:bg-gray-300/30 hover:border-gray-600/40  h-11 w-20 rounded-md m-6"
                  >
                    {" "}
                    Suscribe{" "}
                  </button>
                </div>
                <section className=" flex flex-col col-span-1 justify-center mx-4">
                  <Comments
                    userName="Alguien"
                    text="Great article with step by step guide to integrate in my Vue 3 project This is exactly what I was looking for... Hope to see more of such posts."
                  ></Comments>
                  <Comments userName="Otro" text="¡Great Post! 👍"></Comments>
                </section>
              </section>
            </article>
          </main>
          <aside className="hidden md:flex md:col-span-3 md:col-start-10 md:row-span-3 mt-20 gap-8 flex-col col-span-1">
            <article className="w-auto h-[25rem]  flex flex-col bg-white rounded-xl border border-t-[47px] border-t-black shadow-md">
              <div className="flex flex-row gap-5 px-5 absolute top-[110px]  align-middle">
                <img
                  src="https://api.dicebear.com/6.x/notionists/svg"
                  alt="avatar"
                  className=" rounded-full mt-z w-14 bg-white h-14 hover:outline hover:outline-indigo-200/50 border border-black"
                />
                <h1 className="flex align-botom justify-center font-bold text-black/70 text-2xl mt-6">
                  Abnishek
                </h1>
              </div>
              <div className="realtive flex justify-center mt-16">
                <button className="py-1 justify-center align-middle w-full mx-2 h-9 bg-indigo-600 rounded-md text-white font-semibold">
                  Follow
                </button>
              </div>
              <p className="my-8 text-black/70 mx-2">
                Hi, I'm Abnishek and I'm a full-stack web developer, a tutor at
                Boolean Careers and a Star Wars fan 😎
                <div className="my-5">
                  <p className="text-[12px] font-semibold text-black/90">
                    LOCATION
                  </p>
                  <p className="text-[12px] font-semibold">N.Y.</p>
                </div>
                <div className="my-3">
                  <p className="text-[12px] font-semibold text-black/90">
                    JOINED
                  </p>
                  <p className="text-[12px] font-semibold">May 29, 2022</p>
                </div>
              </p>
            </article>
            <section className="w-auto h-auto flex flex-col bg-white rounded-xl pt-1 border shadow-md py-3">
              <div className="flex flex-row justify-center py-4 border-b-[1.5px] border-gray-600/20 align-middle">
                <h1 className="font-bold text-lg px-2">
                  Trending on{" "}
                  <span className="text-indigo-700">DEV Comunnity</span> 🔥
                </h1>
              </div>
              <div>
                <CardAsidePost
                  userName="Any Person"
                  title="Increasing productivity: Best practices for React beginners."
                  hashtag="#React"
                ></CardAsidePost>
                <CardAsidePost
                  userName="Other Person"
                  title="Daxus - A New Server State"
                  hashtag="#web"
                ></CardAsidePost>
                <CardAsidePost
                  userName="Other Other Person"
                  title="What's the difference between a library and a framework?"
                  hashtag="#discuss"
                ></CardAsidePost>
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
