import { Post, User, Comment } from "../types/common.types";
import { Message, BookmarkEmpty } from "iconoir-react";
import { Link } from "react-router-dom";
import Comments from "./Comments";

interface Props {
  userLogged?: string;
  content?: Post;
  postOwner?: User;
  comments?: Comment[];
}

export default function CardMainPost(props: Props) {
  return (
    <main className="col-span-12 row-span-3 md:col-span-7 md:col-start-3 md:row-span-3 mt-20">
      <article className="flex flex-col columns-1 border rounded-xl bg-white shadow-sm mb-2">
        <img
          src={props.content?.postImg}
          alt="post-image"
          className="rounded-t-xl"
        />
        <div>
          <div className="flex flex-row row-span-2 m-3 gap-2 align-middle">
            <img
              src={props.postOwner?.picture}
              alt="avatar"
              className=" rounded-full mt-z w-10 h-10 hover:outline hover:outline-indigo-200/50 border border-black"
            />
            <button className="flex flex-col col-span-2">
              <a
                href=""
                className="text-[16px] font-semibold hover:text-indigo-900 hover:bg-gray-300/30 rounded-md w-20"
              >
                {`${props.postOwner?.name.first} ${props.postOwner?.name.last}`}
              </a>
              <p className="px-1 text-xs text-gray-500 hover:text-black">
                {`${props.content?.postDate ?? "1688927282"}`}
              </p>
              <input
                value={props.content?.postDate}
                className="text-[12px] mx-1"
              />
            </button>
          </div>
          <div className="pl-[4rem] mr-3">
            <h1 className="font-bold text-5xl text-gray-900/90  hover:text-indigo-800">
              {props.content?.postTitle}
            </h1>
            <div className="flex flex-row rows-4 gap-3 my-8">
              <a className="hover:bg-gray-300/30 hover:text-indigo-900 rounded-md p-1">
                {props.content?.hashtags.first}
              </a>
              <a className="hover:bg-gray-300/30 hover:text-indigo-900 rounded-md p-1">
                {props.content?.hashtags.second}
              </a>
              <a className="hover:bg-gray-300/30 hover:text-indigo-900 rounded-md p-1">
                {props.content?.hashtags.third}
              </a>
              <a className="hover:bg-gray-300/30 hover:text-indigo-900 rounded-md p-1">
                {props.content?.hashtags.fourth}
              </a>
            </div>
            <article className="my-8">{props.content?.postBody}</article>
            {props.userLogged === props.content?.postOwner && (
              <div className="flex justify-end">
                <Link
                  className="flex items-center gap-3 p-1 rounded hover:bg-indigo-200/30 hover:text-indigo-600"
                  to={`/Edit/${props.content?._id ?? "ID"}`}
                >
                  <i className="text-xl iconoir-edit-pencil" />
                  <p className="text-xs">Edit Post</p>
                </Link>
              </div>
            )}

            <div className="flex flex-row rows-4 gap-3 mt-2 justify-between mb-4">
              <button className="flex flex-row gap-20 hover:bg-gray-300/30 rounded-md p-1">
                <div className="flex flex-row w-1 p-1">
                  <p className="w-7 bg-slate-400/20 rounded-full z-30">
                    {`💖 ${props.content?.likes ?? 0}`}
                  </p>
                  <p className="w-7 bg-slate-400/20 rounded-full z-20">🦄0</p>
                  <p className="w-7 bg-slate-400/20 rounded-full z-10">🔥3</p>
                  <p className="w-7 bg-slate-400/20 rounded-full z-0">🤯1</p>
                  <p className="mx-2 text-[14px] pt-2 hover:text-indigo-900 whitespace-nowrap">
                    {" "}
                    5 Reactions{" "}
                  </p>
                </div>
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
            <h1 className="font-bold text-xl m-8">Top Comments</h1>
            <button
              type="submit"
              className="border-2 border-gray-300/50 hover:bg-gray-300/30 hover:border-gray-600/40  h-11 w-20 rounded-md m-6"
            >
              {" "}
              Suscribe{" "}
            </button>
          </div>
          <div className="flex w-full gap-2 mt-8">
            <img
              src="https://res.cloudinary.com/practicaldev/image/fetch/s--BHuURcXO--/c_fill,f_auto,fl_progressive,h_90,q_auto,w_90/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/667361/f10c4adf-d2ec-4c66-86a3-6c67925479bb.png"
              alt="avatar"
              className="w-8 h-8 rounded-full"
            />
            <textarea
              name="post-comment"
              placeholder="Add to the discussion"
              className="h-20 border border-gray-200 rounded resize-none grow focus:border-indigo-600 focus:outline-none placeholder:p-2"
            />
          </div>

          <section className=" flex flex-col col-span-1 justify-center mx-4">
            {props?.comments?.map((comment) => {
              return <Comments comment={comment} />;
            })}
          </section>
        </section>
      </article>
    </main>
  );
}
