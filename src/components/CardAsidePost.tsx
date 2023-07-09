interface Props {
  userName: string;
  title: string;
  hashtag: string;
}

export default function CardAsidePost(props: Props) {
  const photo = `https://api.dicebear.com/6.x/notionists/svg?seed= ${props.userName}`;
  return (
    <article className="flex flex-col columns-1 h-auto bg-white shadow-sm mb-2">
      <div className="pl-[1rem] flex flex-row row-span-2 mt-3">
        <img
          src={photo}
          alt="avatar"
          className="rounded-full w-10 h-10 hover:outline hover:outline-indigo-200/50 border border-black"
        />
        <div className="flex flex-col col-span-1 mx-3">
          <h1 className="text-md text-gray-900/90 hover:text-indigo-800">
            <a href="">{props.title}</a>
          </h1>
          <div className="flex flex-row rows-4 gap-2 my-2 text-[12px]">
            <a className="hover:bg-gray-300/30 hover:text-indigo-900 rounded-md p-1 ">
              {props.hashtag}
            </a>
            <a className="hover:bg-gray-300/30 hover:text-indigo-900 rounded-md p-1">
              {props.hashtag}
            </a>
            <a className="hover:bg-gray-300/30 hover:text-indigo-900 rounded-md p-1">
              {props.hashtag}
            </a>
            <a className="hover:bg-gray-300/30 hover:text-indigo-900 rounded-md p-1">
              {props.hashtag}
            </a>
          </div>
        </div>
      </div>
    </article>
  );
}
