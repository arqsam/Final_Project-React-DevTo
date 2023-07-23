import { Heart, Message } from "iconoir-react";
import { useState, useEffect } from "react";
import { UserState, Comment } from "../types/common.types";

interface Props {
  comment?: Comment;
}

export default function Comments(props: Props) {
  const [user, setUser] = useState<UserState>();

  useEffect(() => {
    fetch(`http://localhost:8080/users/${props.comment?.commenterID ?? 0}`)
      .then((res) => res.json())
      .then((res: UserState) => setUser(res))
      .catch(() => alert("ERROR IN COMMENTS"));
  }, [props.comment?.commenterID]);

  return (
    <article className="flex flex-col columns-1  bg-white  mb-2 rounded-md">
      <div className="flex flex-row row-span-2 m-3 gap-2 align-middle">
        <img
          src={user?.data.picture}
          alt="avatar"
          className=" rounded-full mt-z w-10 h-10 hover:outline hover:outline-indigo-200/50 "
        />
        <div className="border border-gray-500/25 rounded-md w-full px-4 py-3">
          <button className="flex flex-row row-span-2">
            <a
              href=""
              className="text-[16px] font-semibold hover:text-indigo-900 hover:bg-gray-300/30 rounded-md whitespace-nowrap"
            >
              {`${user?.data?.name.first} ${user?.data?.name.last}`}
            </a>
            <p className="mt-1 text-[12px] mx-2">
              • {props.comment?.commentDate ?? "1688927282"}
            </p>
          </button>
          <p className="mt-2">{props.comment?.content}</p>
          <div className="flex flex-row gap-4 mt-3">
            <button className="flex flex-row  hover:bg-gray-300/30 rounded-md p-1">
              <Heart className="w-[19px] h-[19px] stroke-[2px] mt-2" />
              <p className="mx-2 text-[14px] pt-2 hover:text-indigo-900 whitespace-nowrap">
                {" "}
                1 like{" "}
              </p>
            </button>
            <button className="flex flex-row  align-middle hover:bg-gray-300/30 rounded-md p-1">
              <Message className="w-[19px] h-[19px] stroke-[2px] mt-2" />
              <p className="mx-2 text-[14px] pt-2 hover:text-indigo-900 whitespace-nowrap">
                {" "}
                Reply{" "}
              </p>
            </button>
          </div>
        </div>
      </div>
    </article>
  );
}
