import {
  Bold,
  Code,
  CodeBracketsSquare,
  Italic,
  Link,
  MediaImage,
  MoreVert,
  NumberedListLeft,
  Quote,
  Text,
  Svg3DSelectPoint,
} from "iconoir-react";

export default function CreatePost() {
  return (
    <>
      <header className="container grid grid-cols-12 h-auto mx-auto  w-screen mt-5">
        <div className="flex items-center w-full justify-between col-span-12 ">
          <img
            className="h-12"
            src="https://dev-to-uploads.s3.amazonaws.com/uploads/logos/resized_logo_UQww2soKuUsjaOGNB38o.png"
            alt="devlogo"
          />
          <img />
          <p className="mx-5 w-40 font-semibold"> Create Post </p>
          <div className="flex flex-row row-span-3 w-2/3 gap-6 mx-40">
            <button className="w-auto h-10 px-5 hover:bg-indigo-300/30 hover:text-indigo-600 rounded-md font-semibold">
              Edit
            </button>
            <button className="w-auto h-10 px-5 hover:bg-indigo-300/30 hover:text-indigo-600 rounded-md font-normal">
              Preview
            </button>
          </div>
          <button className="font-semibold"> X</button>
        </div>
      </header>
      <main className="container flex flex-col col-span-1 mx-auto h-auto w-screen mt-4">
        <div className="flex flex-row row-span-6 gap-10 mx-6">
          <section className="w-screen bg-white py-6 rounded-2xl shadow-md">
            <form action="" className="w-full bg-white">
              <button className="boder border-2 border-gray-600/20 shadow-sm mx-8 p-2 rounded-md">
                {" "}
                Add cover image
              </button>
              <textarea
                className="mt-7 w-full h-36 resize-none placeholder:text-black/60 placeholder:px-8 placeholder:py-10 placeholder:font-extrabold placeholder:text-5xl"
                id="FormControlTextarea1"
                placeholder="New post title here..."
              ></textarea>
              <input
                type="text"
                placeholder="Add up to 4 tags..."
                className="h-10 placeholder:p-5 pb-3 placeholder:text-black/40 ml-5"
              />
              <div className="flex flex-row gap-2 bg-[rgb(245,245,245)] w-full h-10">
                <button className="ml-3 w-10 h-10 hover:bg-indigo-300/30 hover:text-indigo-600 rounded-md">
                  <Bold></Bold>
                </button>
                <button className="w-10 h-10 hover:bg-indigo-300/30 hover:text-indigo-600 rounded-md">
                  <Italic></Italic>
                </button>
                <button className="w-10 h-10 hover:bg-indigo-300/30 hover:text-indigo-600 rounded-md">
                  <Link></Link>
                </button>
                <button className="w-10 h-10 hover:bg-indigo-300/30 hover:text-indigo-600 rounded-md">
                  <NumberedListLeft></NumberedListLeft>
                </button>
                <button className="w-10 h-10 hover:bg-indigo-300/30 hover:text-indigo-600 rounded-md">
                  <Text></Text>
                </button>
                <button className="w-10 h-10 hover:bg-indigo-300/30 hover:text-indigo-600 rounded-md">
                  <Quote></Quote>
                </button>
                <button className="w-10 h-10 hover:bg-indigo-300/30 hover:text-indigo-600 rounded-md">
                  <Code></Code>
                </button>
                <button className="w-10 h-10 hover:bg-indigo-300/30 hover:text-indigo-600 rounded-md">
                  <CodeBracketsSquare></CodeBracketsSquare>
                </button>
                <button className="w-10 h-10 hover:bg-indigo-300/30 hover:text-indigo-600 rounded-md">
                  <MediaImage></MediaImage>
                </button>
                <button className="ml-48 w-10 h-10 hover:bg-indigo-300/30 hover:text-indigo-600 rounded-md">
                  <MoreVert></MoreVert>
                </button>
              </div>
              <textarea
                className="mt-7 w-full h-44 resize-none placeholder:text-black/60 placeholder:px-8 placeholder:py-3 placeholder:font-mono placeholder:text-md"
                id="FormControlTextarea1"
                placeholder="Write your post content here..."
              ></textarea>
            </form>
          </section>
          <article className="pr-12">
            <h1 className="my-5 font-bold text-xl text-gray-900/80">
              Writing a Great Post Title
            </h1>
            <p className="text-justify">
              Think of your post title as a super short (but compelling!)
              description — like an overview of the actual post in one short
              sentence. Use keywords where appropriate to help ensure people can
              find your post by search.
            </p>
          </article>
        </div>
        <div className="my-4 flex flex-row gap-4 mx-6">
          <button className="bg-indigo-600 rounded-md py-2 px-4 text-white font-semibold hover:bg-indigo-800">
            {" "}
            Publish
          </button>
          <button className="rounded-md py-2 px-4 text-black/80 font-semibold hover:bg-indigo-300/30 hover:text-indigo-800">
            {" "}
            Safe draft{" "}
          </button>
          <button className="rounded-md py-2 px-4 text-black/80 font-semibold hover:bg-indigo-300/30 hover:text-indigo-800">
            <Svg3DSelectPoint></Svg3DSelectPoint>
          </button>
          <button className="rounded-md py-2 px-4 text-black/80 font-semibold hover:bg-indigo-300/30 hover:text-indigo-800">
            {" "}
            Revert new changes{" "}
          </button>
        </div>
      </main>
    </>
  );
}
