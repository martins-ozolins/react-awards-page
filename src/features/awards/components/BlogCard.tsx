import { MdOutlineTimer } from "react-icons/md";
import { GoArrowUpRight } from "react-icons/go";

type BlogCardProps = {
  title: string;
  author: string;
  readTime: string;
  href: string;
  imageSrc: string;
};

export function BlogCard({
  title,
  author,
  readTime,
  href,
  imageSrc,
}: BlogCardProps) {
  return (
    <a
      href={href}
      className="group relative block h-[288px] sm:h-[520px] overflow-hidden rounded-xl bg-slate-900 text-white transition-transform duration-300 hover:-translate-y-2"
    >
      <img
        src={imageSrc}
        alt=""
        className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105 bg-gradient-to-t from-black/80 via-black/25 to-black/10"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/10" />

      <div className="absolute left-4 top-4 sm:left-8 sm:top-8 z-10 flex items-center gap-1">
        <div className="flex items-center gap-2 rounded-full bg-white px-1 py-1 text-xs text-brand-dark shadow-sm">
          <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand-slime text-[10px] font-bold text-brand-dark">
            {author
              .split(" ")
              .map((n) => n[0])
              .join("")}
          </div>
          <span>{author}</span>
        </div>

        <div className="flex items-center gap-1.5 rounded-full bg-white px-3 py-2 text-xs text-brand-dark shadow-sm">
          <MdOutlineTimer className="h-3 w-3" />
          <span>{readTime}</span>
        </div>
      </div>

      <div className="absolute bottom-8 left-8 right-8 z-10 flex items-end justify-between gap-6">
        <h3 className="text-balance text-white text-xl lg:text-2xl font-semibold leading-none tracking-tight m-0 max-w-2xl">
          {title}
        </h3>

        <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-white/90 text-white transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
          <GoArrowUpRight className="h-5 w-5" />
        </span>
      </div>
    </a>
  );
}
