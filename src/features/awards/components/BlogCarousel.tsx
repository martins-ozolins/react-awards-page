import React from "react";
import "react-multi-carousel/lib/styles.css";
import CarouselImport from "react-multi-carousel";
import { GoArrowLeft, GoArrowRight } from "react-icons/go";

import type { BlogCategory } from "../types/blogPosts";

type BlogCarouselProps = {
  children: React.ReactNode;
  activeFilter: BlogCategory;
  onFilterChange: (filter: BlogCategory) => void;
};

const Carousel =
  "default" in CarouselImport
    ? (CarouselImport as unknown as { default: typeof CarouselImport }).default
    : CarouselImport;

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    slidesToSlide: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 640 },
    items: 2,
    slidesToSlide: 1,
  },
  mobile: {
    breakpoint: { max: 640, min: 0 },
    items: 1,
    slidesToSlide: 1,
  },
};

function ButtonGroup({
  next,
  previous,
}: {
  next?: () => void;
  previous?: () => void;
}) {
  return (
    <div className="mt-8 px-2 flex items-center justify-between gap-6">
      <a
        href="https://www.wolfgangdigital.com/blog-insights/"
        className="rounded-full border border-brand-dark px-6 py-3 lg:px-10 text-sm font-medium text-brand-dark"
      >
        View all Blogs
      </a>

      <div className="flex items-center gap-2">
        <button
          type="button"
          onClick={previous}
          className="grid size-10 place-items-center rounded-full border border-brand-dark text-brand-dark transition-colors hover:bg-brand-dark hover:text-white cursor-pointer"
          aria-label="Previous slide"
        >
          <GoArrowLeft className="h-5 w-5" />
        </button>

        <button
          type="button"
          onClick={next}
          className="grid size-10 place-items-center rounded-full border border-brand-dark text-brand-dark transition-colors hover:bg-brand-dark hover:text-white cursor-pointer"
          aria-label="Next slide"
        >
          <GoArrowRight className="h-5 w-5" />
        </button>
      </div>
    </div>
  );
}

function CustomDot({
  active,
  onClick,
}: {
  active?: boolean;
  onClick?: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className={[
        "mx-1 h-[3px] w-14 transition-colors hover:cursor-pointer",
        active ? "bg-brand-slime" : "bg-brand-dark",
      ].join(" ")}
      aria-label="Go to slide"
    />
  );
}

const FILTERS: BlogCategory[] = ["Blogs", "News"];

export function BlogCarousel({
  children,
  activeFilter,
  onFilterChange,
}: BlogCarouselProps) {
  return (
    <section className="relative px-4 pt-16 pb-20 md:px-10 xl:px-14">
      <div className="flex items-center gap-2 mb-3">
        <span className="w-1 h-1 rounded-full bg-brand-dark" />
        <span className="text-xs font-bold tracking-widest uppercase text-brand-dark">
          Insights
        </span>
      </div>

      <div className="flex flex-col gap-6 mb-10 md:flex-row md:items-end md:justify-between">
        <h2 className="text-brand-dark text-3xl md:text-3xl lg:text-4xl xl:text-5xl leading-none font-bold tracking-tight uppercase max-w-sm">
          Latest News & Insights
        </h2>

        <div className="flex items-center gap-2">
          <span className="text-base mr-1">Filter by</span>
          {FILTERS.map((filter) => (
            <button
              key={filter}
              type="button"
              onClick={() => onFilterChange(filter)}
              className={[
                "rounded-full border border-brand-dark px-4 py-2 text-sm font-medium transition-colors cursor-pointer",
                activeFilter === filter
                  ? "bg-brand-dark text-white"
                  : "bg-white text-brand-dark hover:bg-brand-dark/10",
              ].join(" ")}
            >
              {filter}
            </button>
          ))}
        </div>
      </div>

      <Carousel
        responsive={responsive}
        arrows={false}
        showDots
        customDot={<CustomDot />}
        customButtonGroup={<ButtonGroup />}
        renderButtonGroupOutside
        infinite={false}
        swipeable
        draggable
        containerClass="pb-8"
        itemClass="px-2"
      >
        {children}
      </Carousel>
    </section>
  );
}
