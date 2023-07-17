import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Menu from "../components/menu/Menu";
import CardMain from "../components/CardMain";
import CardAside from "../components/CardAside";
import Footer from "../components/Footer";
import { PostState } from "../types/common.types";
import clsx from "clsx";

interface Props {
  query?: string;
}

export default function Home(props: Props) {
  const [posts, setPosts] = useState<PostState>();
  const [isRelevant, setRelevant] = useState(true);
  const [isLatest, setLatest] = useState(false);
  const [isTop, setTop] = useState(false);
  const [query, setQuery] = useState(false);

  useEffect(() => {
    fetch("http://localhost:8080/posts/")
      .then((response) => response.json())
      .then((response: PostState) => setPosts(response))
      .catch((error) => alert("ERROR EN HOME"));
  }, []);

  useEffect(() => {
    if (props.query !== undefined) {
      if (props.query !== "") {
        console.log("props query", props.query);
        setQuery(true);
        setRelevant(false);
        setLatest(false);
        setTop(false);
      }
    }
  }, [props.query]);

  return (
    <>
      <header className=" bg-white shadow-md">
        <Navbar isOnline={true} />
      </header>

      <div className="container mx-auto ">
        <div className="grid grid-cols-12 grid-rows-3 gap-4 m-3 ">
          <aside className="hidden md:flex md:col-span-3 md:row-span-3  pt-4">
            <Menu></Menu>
          </aside>
          <main className="col-span-12 row-span-3 md:col-span-6 md:col-start-4 md:row-span-3 ">
            <ul className=" mt-1 pb-2 flex flex-rows-3 gap-5 text-[18px]">
              <li className="my-1">
                <button
                  type="button"
                  onClick={() => {
                    setRelevant(true);
                    setLatest(false);
                    setTop(false);
                    setQuery(false);
                  }}
                  className={clsx(
                    "p-2 mr-2 hover:text-indigo-700 hover:bg-white rounded-md",
                    {
                      "font-bold": isRelevant,
                    }
                  )}
                >
                  {" "}
                  Relevant
                </button>
              </li>
              <li className="my-1">
                <button
                  type="button"
                  onClick={() => {
                    setRelevant(false);
                    setLatest(true);
                    setTop(false);
                    setQuery(false);
                  }}
                  className={clsx(
                    "p-2 mr-2 hover:text-indigo-700 hover:bg-white rounded-md",
                    {
                      "font-bold": isLatest,
                    }
                  )}
                >
                  {" "}
                  Latest
                </button>
              </li>
              <li className="m-1">
                <button
                  type="button"
                  onClick={() => {
                    setRelevant(false);
                    setLatest(false);
                    setTop(true);
                    setQuery(false);
                  }}
                  className={clsx(
                    "p-2 mr-2 hover:text-indigo-700 hover:bg-white rounded-md",
                    {
                      "font-bold": isTop,
                    }
                  )}
                >
                  {" "}
                  Top
                </button>
              </li>
            </ul>
            <article className="flex flex-col columns-1 rounded-xl shadow-sm ">
              <div className="flex flex-col gap-2 align-middle">
                {posts?.data &&
                  query &&
                  posts.data
                    .filter(
                      (post) =>
                        post.postTitle
                          .toLowerCase()
                          .includes(
                            props.query?.toLowerCase() ?? "No Results"
                          ) ||
                        post.postBody
                          .toLowerCase()
                          .includes(props.query?.toLowerCase() ?? "No Results")
                    )
                    .map((post) => {
                      console.log("post Searched", post);
                      return <CardMain post={post} />;
                    })}

                {posts?.data &&
                  isLatest &&
                  [...posts.data]
                    .sort((a, b) => Number(b.postDate) - Number(a.postDate))
                    .map((post) => {
                      return <CardMain post={post} />;
                    })}

                {posts?.data &&
                  isTop &&
                  posts.data
                    .filter((post) => post.isRelevant)
                    .map((post) => {
                      return <CardMain post={post} />;
                    })}
                {posts?.data &&
                  isRelevant &&
                  posts.data.map((post) => {
                    return <CardMain post={post} />;
                  })}
              </div>
            </article>
          </main>
          <aside className="hidden h-48  md:flex md:col-span-3 md:col-start-10 md:row-span-3 gap-4 flex-wrap">
            <section className="w-screen h-[40rem] flex flex-col bg-white rounded-xl pt-1 border shadow-md">
              <div className="flex flex-row justify-between py-4 border-gray-600/20 align-middle">
                <h1 className="font-bold text-xl px-3">Listings</h1>
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
                  className="px-2 pt-6 text-[14px] hover:text-indigo-900 font-semibold flex flex-row justify-center border-t-[1.5px]"
                >
                  Create a Listing
                </a>
              </div>
            </section>
            <section className="w-screen h-auto flex flex-col bg-white rounded-xl pt-1 border shadow-md">
              <div className="flex flex-row justify-between py-4  border-gray-600/20 align-middle">
                <h1 className="font-bold text-xl px-3">#discuss</h1>
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
