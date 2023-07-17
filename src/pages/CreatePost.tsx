import { useState } from "react";
import { useForm } from "react-hook-form";
import { CreatePostData, postSuccess } from "../types/common.types";
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
  Cancel,
} from "iconoir-react";
import {
  Popover,
  PopoverHandler,
  PopoverContent,
  Typography,
  Button,
  Input,
} from "@material-tailwind/react";
import { NavLink, useNavigate } from "react-router-dom";

export default function CreatePost() {
  const nav = useNavigate();
  const [titleFocused, setTitleFocused] = useState(false);
  const [tagsFocused, setTagsFocused] = useState(false);
  const [bodyFocused, setBodyFocused] = useState(false);

  async function onSubmit(data: CreatePostData) {
    const token =
      localStorage.getItem("token") || sessionStorage.getItem("token");
    const response: Response = await fetch("http://localhost:8080/posts", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token ?? 0}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        postTitle: data.postTitle,
        postBody: data.postBody,
        postImg: data.postImg,
        hashtags: {
          first: data.hashtags.first,
          second: data.hashtags.second,
          third: data.hashtags.third,
          fourth: data.hashtags.fourth,
        },
      }),
    });
    const res: postSuccess = (await response.json()) as postSuccess;
    if (res?.data) {
      nav("/");
    } else {
      alert(res?.message);
    }
  }

  const { register, handleSubmit } = useForm<CreatePostData>();

  return (
    <>
      <nav className="container grid grid-cols-12 h-auto mx-auto  w-screen mt-5">
        <div className="flex items-center w-full justify-between col-span-12">
          <NavLink to={"/"}>
            <img
              className="h-12"
              src="https://dev-to-uploads.s3.amazonaws.com/uploads/logos/resized_logo_UQww2soKuUsjaOGNB38o.png"
              alt="devlogo"
            />
            <img />
          </NavLink>
          <p className="mx-5 w-40 font-semibold"> Create Post </p>
          <div className="flex flex-row row-span-3 w-2/3 gap-6 mx-40">
            <button className="w-auto h-10 px-5 hover:bg-indigo-300/30 hover:text-indigo-600 rounded-md font-semibold">
              Edit
            </button>
            <button className="w-auto h-10 px-5 hover:bg-indigo-300/30 hover:text-indigo-600 rounded-md font-normal">
              Preview
            </button>
          </div>
          <NavLink to={"/"}>
            <button className="font-semibold">
              <Cancel></Cancel>
            </button>
          </NavLink>
        </div>
      </nav>
      <main className="container flex flex-col col-span-1 mx-auto h-auto md:w-full mt-4">
        <div className="flex flex-row row-span-6 gap-12 mx-6">
          <section>
            <form
              action=""
              onSubmit={(event) => void handleSubmit(onSubmit)(event)}
            >
              <section className="md:w-full bg-white py-6 rounded-2xl shadow-md">
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
                          className="border-gray-800"
                          {...register("postImg", {
                            required: {
                              value: true,
                              message: "Image required",
                            },
                          })}
                        />
                        <Button type="submit" color="gray" variant="gradient">
                          Add
                        </Button>
                      </div>
                    </PopoverContent>
                  </Popover>
                </div>
                <textarea
                  placeholder="New post title here..."
                  onFocus={() => setTitleFocused(true)}
                  className="outline-none border-none mt-7 w-full p-5 h-36 resize-none text-black/60 font-extrabold text-5xl placeholder:text-black/60  placeholder:py-10 placeholder:font-extrabold placeholder:text-5xl"
                  {...register("postTitle", {
                    required: { value: true, message: "Title required" },
                    minLength: {
                      value: 5,
                      message: "At least five characters for the Title",
                    },
                    onBlur: () => setTitleFocused(false),
                  })}
                ></textarea>
                <div className="flex flex-row w-auto p-3">
                  {
                    <input
                      placeholder="Add up to first tag..."
                      onFocus={() => setTitleFocused(true)}
                      className="text-center outline-none border-none h-10 placeholder:text-black/40 "
                      {...register("hashtags.first", {
                        required: { value: true, message: "Hashtag required" },
                        minLength: {
                          value: 3,
                          message: "Min Length Required is 3",
                        },
                        onBlur: () => setTagsFocused(false),
                      })}
                    />
                  }
                  <input
                    placeholder="Add up to second tag..."
                    onFocus={() => setTitleFocused(true)}
                    className="text-center outline-none border-none h-10 placeholder:text-black/40 "
                    {...register("hashtags.second", {
                      required: { value: true, message: "Hashtag required" },
                      minLength: {
                        value: 3,
                        message: "Min Length Required is 3",
                      },
                      onBlur: () => setTagsFocused(false),
                    })}
                  />
                  <input
                    placeholder="Add up to third tag..."
                    onFocus={() => setTitleFocused(true)}
                    className="text-center outline-none border-none h-10 placeholder:text-black/40 "
                    {...register("hashtags.third", {
                      required: { value: true, message: "Hashtag required" },
                      minLength: {
                        value: 3,
                        message: "Min Length Required is 3",
                      },
                      onBlur: () => setTagsFocused(false),
                    })}
                  />
                  <input
                    placeholder="Add up to fourth tag..."
                    onFocus={() => setTitleFocused(true)}
                    className="text-center outline-none border-none h-10 placeholder:text-black/40 "
                    {...register("hashtags.fourth", {
                      required: { value: true, message: "Hashtag required" },
                      minLength: {
                        value: 3,
                        message: "Min Length Required is 3",
                      },
                      onBlur: () => setTagsFocused(false),
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
                  placeholder="Write your post content here..."
                  onFocus={() => setBodyFocused(true)}
                  className="outline-none border-none mt-7 w-full h-44 resize-none p-4 placeholder:text-black/60 placeholder:px-8 placeholder:py-3 placeholder:font-thin placeholder:text-md"
                  {...register("postBody", {
                    required: {
                      value: true,
                      message: "Content post required",
                    },
                    minLength: {
                      value: 10,
                      message: "At least five characters for the Post",
                    },
                    onBlur: () => setBodyFocused(false),
                  })}
                ></textarea>
              </section>

              <div className="my-4 flex flex-row gap-4 mx-6">
                <input
                  type="submit"
                  className="bg-indigo-600 rounded-md py-2 px-4 text-white font-semibold hover:bg-indigo-800"
                  value="Publish"
                ></input>
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
          </section>
          <article className="pr-12">
            {titleFocused && (
              <div className="absolute w-72 top-[5rem]">
                <h1 className="my-5 font-bold text-xl text-gray-900/80">
                  Writing a Great Post Title
                </h1>
                <p className="text-justify">
                  Think of your post title as a super short (but compelling!)
                  description — like an overview of the actual post in one short
                  sentence. Use keywords where appropriate to help ensure people
                  can find your post by search.
                </p>
              </div>
            )}
            {tagsFocused && (
              <div className="absolute w-72 top-[5rem]">
                <h1 className="my-5 font-bold text-xl text-gray-900/80">
                  Tagging Guidelines
                </h1>
                <p className="text-justify">
                  Tags help people find your post. Think of tags as the topics
                  or categories that best describe your post. Add up to four
                  comma-separated tags per post. Combine tags to reach the
                  appropriate subcommunities. Use existing tags whenever
                  possible. Some tags, such as “help” or “healthydebate”, have
                  special posting guidelines.
                </p>
              </div>
            )}
            {bodyFocused && (
              <div className="absolute w-72 top-[26rem]">
                <h2 className="my-5 font-bold text-xl text-gray-900/80">
                  Editor Basics
                </h2>
                <p className="text-justify">
                  Use Markdown to write and format posts. Embed rich content
                  such as Tweets, YouTube videos, etc. A list of supported
                  embeds. In addition to images for the post's content, you can
                  also drag and drop a cover image.
                </p>
              </div>
            )}
          </article>
        </div>
      </main>
    </>
  );
}
