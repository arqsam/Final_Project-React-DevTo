import { useEffect, useState } from "react";
import MenuPost from "../components/MenuPost";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import TimeAgo from "react-timeago";
import CardAsidePost from "../components/CardAsidePost";
import {
  UserState,
  GetAPost,
  CommentsState,
  Token,
} from "../types/common.types";
import CardMainPost from "../components/CardMainPost";
import { useParams } from "react-router-dom";

export default function PostDetail() {
  const [userID, setUserID] = useState<string>("");
  const [post, setPost] = useState<GetAPost>({});
  const [user, setUser] = useState<UserState>({});
  const [comments, setComments] = useState<CommentsState>({});

  const { id } = useParams();

  useEffect(() => {
    const token =
      localStorage.getItem("token") || sessionStorage.getItem("token");
    if (token) {
      const payload: string = token.split(".")[1];
      const plainPayload: Token = JSON.parse(atob(payload)) as Token;
      setUserID(plainPayload.id);
    }
  }, []);

  useEffect(() => {
    fetch(`http://localhost:8080/posts/${id ?? "0"}`)
      .then((res) => res.json())
      .then((res: GetAPost) => setPost(res))
      .catch(() => alert("ERROR IN POST FIRST FETCH"));
  }, [id]);

  useEffect(() => {
    if (post?.data?.postOwner) {
      fetch(`http://localhost:8080/users/${post?.data?.postOwner}`)
        .then((res) => res.json())
        .then((res: UserState) => setUser(res))
        .catch(() => alert("ERROR IN POST SECOND FETCH"));
    }
  }, [post]);

  useEffect(() => {
    fetch(`http://localhost:8080/comments/?postID=${id ?? "0"}`)
      .then((res) => res.json())
      .then((res: CommentsState) => setComments(res))
      .catch(() => alert("ERROR IN POST THIRD FETCH"));
  }, [id]);

  return (
    <>
      <header className=" bg-white shadow-md fixed w-screen z-10">
        <Navbar />
      </header>

      <div className="container mx-auto">
        <div className="grid grid-cols-12 grid-rows-3 gap-4">
          <aside className="hidden md:flex md:col-span-2 md:row-span-3 mt-20">
            <MenuPost post={post?.data} comments={comments?.data}></MenuPost>
          </aside>
          <div className="col-span-12 row-span-3 md:col-span-7 md:col-start-3 md:row-span-3 mt-20">
            <CardMainPost
              userLogged={userID}
              content={post?.data}
              postOwner={user?.data}
              comments={comments?.data}
            />
          </div>
          <aside className="hidden md:flex md:col-span-3 md:col-start-10 md:row-span-3 mt-20 gap-8 flex-col col-span-1">
            <article className="w-auto h-[25rem]  flex flex-col bg-white rounded-xl border border-t-[47px] border-t-black shadow-md">
              <div className="flex flex-row gap-5 px-5 absolute top-[110px]  align-middle">
                <img
                  src={user?.data?.picture}
                  alt="avatar"
                  className=" rounded-full mt-z w-14 bg-white h-14 hover:outline hover:outline-indigo-200/50"
                />
                <h1 className="flex align-botom justify-center font-bold text-black/70 text-2xl mt-6">
                  {`${user?.data?.name.first} ${user?.data?.name.last}`}
                </h1>
              </div>
              <div className="realtive flex justify-center mt-16">
                <button className="py-1 justify-center align-middle w-full mx-2 h-9 bg-indigo-600 rounded-md text-white font-semibold">
                  Follow
                </button>
              </div>
              <p className="my-8 text-black/70 mx-2">
                {user?.data?.description}
                <div className="my-5">
                  <p className="text-[12px] font-semibold text-black/90">
                    LOCATION
                  </p>
                  <p className="text-[12px] font-semibold">
                    {user?.data?.location}
                  </p>
                </div>
                <div className="my-3">
                  <p className="text-[12px] font-semibold text-black/90">
                    JOINED
                  </p>
                  <p className="text-[12px] font-semibold">
                    <TimeAgo
                      data={`${user?.data?.joined ?? "1688927282"}`}
                      className="px-1 text-xs text-gray-500 hover:text-black"
                    />
                  </p>
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
