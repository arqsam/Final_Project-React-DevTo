import { Droplet, Heart } from "iconoir-react";

export default function Footer() {
  return (
    <article className="flex flex-col col-span-1 justify-center p-5 flex-wrap">
      <p className="text-center text-[14px] text-black/80">
        <a
          href=""
          className="font-semibold text-indigo-700 hover:text-indigo-900 hover:underline "
        >
          {" "}
          DEV Community{" "}
        </a>
        — A constructive and inclusive social network for software developers.
        With you every step of your journey.
      </p>
      <ul className="flex flex-row gap-6 mt-3 justify-center text-center text-[14px] list-disc text-black/60">
        <li className="list-item list-none">
          <a href="" className="text-indigo-700 hover:text-indigo-900">
            Home
          </a>
        </li>
        <li>
          <a href="" className="text-indigo-700 hover:text-indigo-900">
            Listings
          </a>
        </li>
        <li>
          <a href="" className="text-indigo-700 hover:text-indigo-900">
            Podcasts
          </a>
        </li>
        <li>
          <a href="" className="text-indigo-700 hover:text-indigo-900">
            Videos
          </a>
        </li>
        <li>
          <a href="" className="text-indigo-700 hover:text-indigo-900">
            Tags
          </a>
        </li>
        <li>
          <a href="" className="text-indigo-700 hover:text-indigo-900">
            FAQ
          </a>
        </li>
        <li>
          <a href="" className="text-indigo-700 hover:text-indigo-900">
            Forem Shop
          </a>
        </li>
        <li>
          <a href="" className="text-indigo-700 hover:text-indigo-900">
            Sponsors
          </a>
        </li>
        <li>
          <a href="" className="text-indigo-700 hover:text-indigo-900">
            About
          </a>
        </li>
        <li>
          <a href="" className="text-indigo-700 hover:text-indigo-900">
            Contact
          </a>
        </li>
        <li>
          <a href="" className="text-indigo-700 hover:text-indigo-900">
            Guides
          </a>
        </li>
        <li>
          <a href="" className="text-indigo-700 hover:text-indigo-900">
            Software comparisons
          </a>
        </li>
      </ul>
      <ul className="flex flex-row gap-6 mt-3 justify-center text-center text-[14px] list-disc text-black/60">
        <li className="list-item list-none">
          <a href="" className="text-indigo-700 hover:text-indigo-900">
            Code of conduct
          </a>
        </li>
        <li>
          <a href="" className="text-indigo-700 hover:text-indigo-900">
            Privacy policy
          </a>
        </li>
        <li>
          <a href="" className="text-indigo-700 hover:text-indigo-900">
            Terms of use
          </a>
        </li>
      </ul>
      <p className="mt-3 text-center text-[14px] text-black/80">
        Built on{" "}
        <a href="" className="text-indigo-700 hover:text-indigo-900">
          Forem
        </a>{" "}
        — the{" "}
        <a href="" className="text-indigo-700 hover:text-indigo-900">
          open source
        </a>{" "}
        software that powers{" "}
        <a href="" className="text-indigo-700 hover:text-indigo-900">
          DEV
        </a>{" "}
        and other inclusive communities.
      </p>
      <p className="mt-3 text-center text-[14px] text-black/80">
        Made with love and{" "}
        <a href="" className="text-indigo-700 hover:text-indigo-900">
          Ruby on Rails
        </a>
        . DEV Community © 2016 - 2023.
      </p>
      <p className="flex flex-row justify-center mt-3 text-center text-[12px] text-black/50">
        Made with <Heart className="w-[15px] mx-2" /> and a lot of{" "}
        <Droplet className="w-[15px] mx-2" /> Sam. Kodemia Community © 2023.
      </p>
    </article>
  );
}
