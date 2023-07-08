interface Props {
  icon: string;
  title: string;
}

export default function ListElement(props: Props) {
  return (
    <a
      href=""
      className="hover:bg-indigo-600/10  rounded-md flex flex-row basis-auto gap-4  h-8 align-middle "
    >
      <span className="ml-6 text-xl">{props.icon}</span>
      <p className=" text-[1rem] mt-1 hover:text-indigo-700 hover:underline text-black/80 whitespace-nowrap">
        {props.title}
      </p>
    </a>
  );
}
