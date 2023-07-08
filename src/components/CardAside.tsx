interface Props {
  content: string;
  word: string;
}

export default function CardAside(props: Props) {
  return (
    <article className="h-auto flex flex-col pb-4  bg-white py-4 border-b-[1.5px] border-gray-600/20">
      <a href="" className="">
        <h2 className="font-normal text-base px-3 text-gray-800/90  hover:text-indigo-700 ">
          {props.content}
        </h2>
      </a>
      <p className="px-3 text-[14px] text-black/40 ">{props.word}</p>
    </article>
  );
}
