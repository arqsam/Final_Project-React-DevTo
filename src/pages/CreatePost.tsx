import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { CreatePostData } from "../types/common.types";
import clsx from "clsx";
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
import {
  Popover,
  PopoverHandler,
  PopoverContent,
  Typography,
  Button,
  Input,
} from "@material-tailwind/react";

export default function CreatePost() {
  const [posts, setPosts] = useState<CreatePostData[]>([]);
  /* const [post, setPost] = useState({});
  const [image, setImage] = useState(""); */

  function getPostsFromApi() {
    fetch("http://localhost:8080/posts")
      .then((response) => response.json())
      .then((response) => {
        console.log("response", response);
        setPosts(response.posts);
      });
  }

  useEffect(() => {
    getPostsFromApi();
  }, []);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<CreatePostData>();

  function onSubmit(data: CreatePostData) {
    fetch(`http://localhost:8080/posts/${props.post.postOwner}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        postTitle: data.postTitle,
        postBody: data.postBody,
        postImg: data.postImg,
        postDate: data.postDate,
        isRelevant: data.isRelevant,
        likes: data.likes,
        bookmarks: data.bookmarks,
        postOwner: data.postOwner,
        hashtags: {
          first: data.hashtagsFirst,
          second: data.hashtagsSecond,
          third: data.hashtagsThird,
          fourth: data.hashtagsFourth,
        },
      }),
    }).then(() => {
      reset();
      getPostsFromApi();
    });
    /* function onAddContent() {
    setPost({ image, ...posts });
    setImage("");
  } */

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
            <section>
              <form action="" onSubmit={handleSubmit(onSubmit)}>
                <section className="w-full bg-white py-6 rounded-2xl shadow-md">
                  <div>
                    <Popover placement="bottom">
                      <PopoverHandler>
                        <Button
                          color="white"
                          className=" text-gray-600 font-sans boder border-2 border-gray-600/20 shadow-sm mx-8 p-2 rounded-md"
                        >
                          {" "}
                          Add cover image{" "}
                        </Button>
                      </PopoverHandler>
                      <PopoverContent className="w-96">
                        <Typography
                          variant="h6"
                          color="gray"
                          className="mb-6 font-sans"
                        >
                          Add Image
                        </Typography>
                        <div className="flex gap-2">
                          <Input
                            color="gray"
                            label="Image URL"
                            className={clsx("border-gray-800", {
                              "border-red-500": errors.postImg,
                            })}
                            {...register("postImg", {
                              required: {
                                value: true,
                                message: "Image required",
                              },
                            })}
                          />
                          <Button color="gray" variant="gradient">
                            Add
                          </Button>
                        </div>
                      </PopoverContent>
                    </Popover>
                  </div>
                  <textarea
                    id="FormControlTextarea1"
                    placeholder="New post title here..."
                    className={clsx(
                      "outline-none border-none mt-7 w-full p-5 h-36 resize-none text-black/60 font-extrabold text-5xl placeholder:text-black/60  placeholder:py-10 placeholder:font-extrabold placeholder:text-5xl",
                      { "border-red-500": errors.postTitle }
                    )}
                    {...register("postTitle", {
                      required: { value: true, message: "Title required" },
                      minLength: {
                        value: 5,
                        message: "At least five characters for the Title",
                      },
                    })}
                  ></textarea>
                  <div className="flex flex-row w-auto">
                    <input
                      type="text"
                      placeholder="Add up to 4 tags..."
                      className="outline-none border-none h-10 placeholder:p-5 pb-3 placeholder:text-black/40 ml-5"
                      {...register("hashtags.first", {
                        required: { value: true, message: "Hashtag required" },
                      })}
                    />
                    <input
                      type="text"
                      className="outline-none border-none h-10 placeholder:p-5 pb-3 ml-5"
                      {...register("hashtags.second", {
                        required: { value: true, message: "Hashtag required" },
                      })}
                    />
                    <input
                      type="text"
                      className="outline-none border-none h-10 placeholder:p-5 pb-3 ml-5"
                      {...register("hashtags.third", {
                        required: { value: true, message: "Hashtag required" },
                      })}
                    />
                    <input
                      type="text"
                      className="outline-none border-none h-10 placeholder:p-5 pb-3 ml-5"
                      {...register("hashtags.fourth", {
                        required: { value: true, message: "Hashtag required" },
                      })}
                    />
                  </div>
                  <div className="flex flex-row gap-2 bg-[rgb(245,245,245)] w-full h-10">
                    <button className=" flex justify-center ml-3 w-10 h-10  hover:bg-indigo-300/30 hover:text-indigo-600 rounded-md">
                      <Bold className="mt-2"></Bold>
                    </button>
                    <button className="flex justify-center w-10 h-10 hover:bg-indigo-300/30 hover:text-indigo-600 rounded-md">
                      <Italic className="mt-2"></Italic>
                    </button>
                    <button className="flex justify-center w-10 h-10 hover:bg-indigo-300/30 hover:text-indigo-600 rounded-md">
                      <Link className="mt-2"></Link>
                    </button>
                    <button className="flex justify-center w-10 h-10 hover:bg-indigo-300/30 hover:text-indigo-600 rounded-md">
                      <NumberedListLeft className="mt-2"></NumberedListLeft>
                    </button>
                    <button className="flex justify-center w-10 h-10 hover:bg-indigo-300/30 hover:text-indigo-600 rounded-md">
                      <Text className="mt-2"></Text>
                    </button>
                    <button className="flex justify-center w-10 h-10 hover:bg-indigo-300/30 hover:text-indigo-600 rounded-md">
                      <Quote className="mt-2"></Quote>
                    </button>
                    <button className="flex justify-center w-10 h-10 hover:bg-indigo-300/30 hover:text-indigo-600 rounded-md">
                      <Code className="mt-2"></Code>
                    </button>
                    <button className="flex justify-center w-10 h-10 hover:bg-indigo-300/30 hover:text-indigo-600 rounded-md">
                      <CodeBracketsSquare className="mt-2"></CodeBracketsSquare>
                    </button>
                    <button className="flex justify-center w-10 h-10 hover:bg-indigo-300/30 hover:text-indigo-600 rounded-md">
                      <MediaImage className="mt-2"></MediaImage>
                    </button>
                    <button className="flex justify-center ml-48 w-10 h-10 hover:bg-indigo-300/30 hover:text-indigo-600 rounded-md">
                      <MoreVert className="mt-2"></MoreVert>
                    </button>
                  </div>
                  <textarea
                    id="FormControlTextarea1"
                    placeholder="Write your post content here..."
                    className={clsx(
                      "outline-none border-none mt-7 w-full h-44 resize-none p-4 placeholder:text-black/60 placeholder:px-8 placeholder:py-3 placeholder:font-thin placeholder:text-md",
                      { "border-red-500": errors.postBody }
                    )}
                    {...register("postBody", {
                      required: {
                        value: true,
                        message: "Content post required",
                      },
                      minLength: {
                        value: 10,
                        message: "At least five characters for the Post",
                      },
                    })}
                  ></textarea>
                </section>

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
              </form>
              {errors.postTitle && <p>{errors?.postTitle.message}</p>}
              {errors.hashtags.first && <p>{errors?.hashtags.first.message}</p>}
              {errors.hashtags.second && (
                <p>{errors?.hashtags.second.message}</p>
              )}
              {errors.hashtags.third && <p>{errors?.hashtags.third.message}</p>}
              {errors.hashtags.fourth && (
                <p>{errors?.hashtags.fourth.message}</p>
              )}
              {errors.postBody && <p>{errors?.postBody.message}</p>}
            </section>
            <article className="pr-12">
              <h1 className="my-5 font-bold text-xl text-gray-900/80">
                Writing a Great Post Title
              </h1>
              <p className="text-justify">
                Think of your post title as a super short (but compelling!)
                description — like an overview of the actual post in one short
                sentence. Use keywords where appropriate to help ensure people
                can find your post by search.
              </p>
            </article>
          </div>
          {/*  <div className="my-4 flex flex-row gap-4 mx-6">
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
        </div> */}
        </main>
      </>
    );
  }
}
