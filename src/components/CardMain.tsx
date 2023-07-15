import { useState, useEffect } from "react";
import { BookmarkEmpty, Message } from "iconoir-react";
import { Post, UserState } from "../types/common.types";
import { Link } from "react-router-dom";

interface Props {
  post: Post;
}

export default function CardMain(props: Props) {
  const [postOwner, setPostOwner] = useState<UserState>();

  useEffect(() => {
    fetch(`http://localhost:8080/users/${props.post.postOwner}`)
      .then((response) => response.json())
      .then((response: UserState) => setPostOwner(response))
      .catch((error) => alert(error));
  });

  return (
    <article className="flex flex-col columns-1 border rounded-xl  shadow-sm mb-2">
      <img className="rounded-t-xl" src={props.post.postImg} alt="Img-post" />
      <div>
        <div className="flex flex-row row-span-2 m-3 gap-2 align-middle">
          <img
            src={postOwner?.data?.picture}
            alt="avatar"
            className=" rounded-full mt-z w-10 h-10 hover:outline hover:outline-indigo-200/50 border border-black"
          />
          <button className="flex flex-col col-span-2">
            <a
              href=""
              className="text-[16px] font-semibold hover:text-indigo-900 hover:bg-gray-300/30 rounded-md w-20 whitespace-nowrap"
            >
              {postOwner?.data?.name.first}
              {postOwner?.data?.name.last}
            </a>
            <p className="text-[12px] ">{props.post.postDate}</p>
          </button>
        </div>
        <div className="pl-[4rem]">
          <Link to={`/post/${props.post._id}`}>
            <h1 className="font-bold text-2xl text-gray-900/90 hover:text-indigo-800">
              {props.post.postTitle}
            </h1>
          </Link>
          <div className="flex flex-row rows-4 gap-3 mt-2">
            <a className="hover:bg-gray-300/30 hover:text-indigo-900 rounded-md p-1">
              {props.post.hashtags.first}
            </a>
            <a className="hover:bg-gray-300/30 hover:text-indigo-900 rounded-md p-1">
              {props.post.hashtags.second}
            </a>
            <a className="hover:bg-gray-300/30 hover:text-indigo-900 rounded-md p-1">
              {props.post.hashtags.third}
            </a>
            <a className="hover:bg-gray-300/30 hover:text-indigo-900 rounded-md p-1">
              {props.post.hashtags.fourth}
            </a>
          </div>
          <div className="flex flex-row rows-4 gap-3 mt-2 justify-between mb-4">
            <button className="flex flex-row gap-20 hover:bg-gray-300/30 rounded-md p-1">
              <div className="flex flex-row w-1 p-1">
                <p className="w-7 bg-slate-400/20 rounded-full z-30">💖</p>
                <p className="w-7 bg-slate-400/20 rounded-full z-20">🦄</p>
                <p className="w-7 bg-slate-400/20 rounded-full z-10">🔥</p>
                <p className="w-7 bg-slate-400/20 rounded-full z-0">🤯</p>
              </div>
              <p className="mx-2 text-[14px] pt-2 hover:text-indigo-900 whitespace-nowrap">
                {" "}
                5 Reactions
                {props.post.likes}
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
                {props.post.bookmarks}
              </button>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
