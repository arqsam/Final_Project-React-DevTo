import { BookmarkEmpty, Heart, Message, MoreHoriz } from "iconoir-react";
import { Comment, Post } from "../types/common.types";

interface Props {
  post: Post;
  comments: Comment[];
}

export default function MenuPost(props: Props) {
  return (
    <main className="md:col-span-1 md:row-span-3 flex flex-col col-span-1 w-auto gap-3 m-[4rem] fixed">
      <ul className="flex flex-col col-span-1 gap-8 ">
        <li>
          <button className="hover:text-red-600">
            {" "}
            <Heart></Heart>
            {props.post?.likes}
          </button>
        </li>
        <li>
          <button className="hover:text-yellow-500">
            {" "}
            <Message></Message>
            {props.comments?.length}
          </button>
        </li>
        <li>
          <button className="hover:text-sky-700">
            {" "}
            <BookmarkEmpty></BookmarkEmpty>
            {props.post?.bookmarks}
          </button>
        </li>
        <li>
          <button className="hover:bg-gray-700/10 rounded-full w-8 h-8 flex justify-center pt-1">
            {" "}
            <MoreHoriz></MoreHoriz>
          </button>
        </li>
      </ul>
    </main>
  );
}
