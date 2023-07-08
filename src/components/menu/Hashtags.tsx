interface Props {
  text: string;
}

export default function ListElement(props: Props) {
  return (
    <a
      href=""
      className="hover:bg-indigo-600/10 pl-5 p-[2px] rounded-md flex flex-row basis-auto gap-4 h-10 align-middle hover:text-indigo-700 hover:underline"
    >
      {props.text}
    </a>
  );
}
