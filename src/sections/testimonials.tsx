import { FC } from "react";

import { testimonials } from "@/configs/site";
import Image from "next/image";

const Testimonials: FC = () => {
  const testimonialsIdx = 0;

  return (
    <section className="section">
      <h2 className="text-4xl flex md:text-7xl lg:text-8xl flex-col overflow-hidden">
        <span className="whitespace-nowrap">Don't Take Our Word For It</span>
        <span className="whitespace-nowrap self-end text-sage">
          Don't Take Our Word For It
        </span>
      </h2>
      <div className="container">
        <div className="mt-20">
          {testimonials.map(
            ({ name, company, role, quote, image, imagePositionY }, idx) =>
              idx === testimonialsIdx && (
                <div
                  key={name}
                  className="grid md:grid-cols-5 md:gap-8 md:items-center lg:gap-16"
                >
                  <div className="aspect-square md:col-span-2 md:aspect-[9/16]">
                    <Image
                      src={image}
                      alt={name}
                      className="size-full object-cover"
                      style={{ objectPosition: `50% ${imagePositionY * 100}%` }}
                    />
                  </div>
                  <blockquote className="md:col-span-3">
                    <div className="text-3xl md:text-5xl lg:text-6xl mt-8 md:mt-0">
                      <span>&ldquo;</span>
                      <span className="">{quote}</span>
                      <span>&rdquo;</span>
                    </div>
                    <cite className="mt-4 not-italic block md:mt-8 md:text-lg lg:text-xl">
                      {name}, {role} at {company}
                    </cite>
                  </blockquote>
                </div>
              )
          )}
        </div>
        <div className="flex gap-4 mt-6 lg:mt-10">
          <button className="border border-stone-400 size-11 inline-flex items-center justify-center rounded-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
              />
            </svg>
          </button>
          <button className="border border-stone-400 size-11 inline-flex items-center justify-center rounded-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
