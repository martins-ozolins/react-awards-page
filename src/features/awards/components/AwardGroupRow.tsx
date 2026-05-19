import { useState } from "react";
import type { Award } from "../types/awards";

interface AwardGroupRowProps {
  award: Award;
}

export function AwardGroupRow({ award }: AwardGroupRowProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

  function handleMouseMove(event: React.MouseEvent<HTMLElement>) {
    setCursorPosition({
      x: event.clientX,
      y: event.clientY,
    });
  }
  return (
    <article
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onMouseMove={handleMouseMove}
      className="
        group cursor-none px-4 transition
        pointer-fine:hover:bg-brand-dark pointer-fine:hover:text-white
        md:px-10 xl:px-14
      "
    >
      <div
        className="
          grid gap-8 border-y border-green-950/15 py-8 transition
          pointer-fine:group-hover:border-brand-dark
          lg:grid-cols-12 lg:items-center lg:gap-5 lg:py-12
        "
      >
        <div className="flex items-center gap-5 lg:col-span-5">
          <div
            className="
              flex h-24 w-36 shrink-0 items-center justify-center
              rounded-2xl bg-gray-100 p-5 transition
              pointer-fine:group-hover:bg-[#0d5450]
              sm:h-28 sm:w-44
            "
          >
            <img
              src={award.logo}
              alt={`${award.group} logo`}
              className="max-h-full max-w-full object-contain"
            />
          </div>

          <h3 className="text-xl lg:text-2xl font-bold uppercase leading-none tracking-tight text-brand-dark pointer-fine:group-hover:text-white transition">
            {award.group}
          </h3>
        </div>

        <div className="grid grid-cols-[3fr_2fr_1fr] gap-6 lg:col-span-7 lg:grid-cols-[3fr_2fr_1fr]">
          <div>
            <h4 className="text-xs font-normal text-grey-600 opacity-50 mb-1 transition pointer-fine:group-hover:text-green-100 pointer-fine:group-hover:opacity-100">
              Category
            </h4>

            <ul className="space-y-1 text-sm font-medium leading-snug text-brand-dark transition pointer-fine:group-hover:text-white">
              {award.categories.map((category) => (
                <li key={category.name}>{category.name}</li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-normal text-grey-600 opacity-50 mb-1 transition pointer-fine:group-hover:text-green-100 pointer-fine:group-hover:opacity-100">
              Awards
            </h4>

            <ul className="space-y-1 text-sm font-medium text-brand-dark transition pointer-fine:group-hover:text-white">
              {award.categories.map((category) => (
                <li key={`${category.name}-${category.result}`}>
                  {category.result}
                </li>
              ))}
            </ul>
          </div>

          <div className="text-right">
            <h4 className="text-sm font-black transition pointer-fine:group-hover:text-white">
              {award.year}
            </h4>
          </div>
        </div>
      </div>

      {isHovered && (
        <img
          src={award.cursorImage}
          alt=""
          aria-hidden="true"
          className="
            pointer-events-none fixed z-50 hidden
            h-60 w-48
            rounded-2xl object-cover shadow-2xl
            sm:block
          "
          style={{
            left: `${cursorPosition.x}px`,
            top: `${cursorPosition.y}px`,
            // rotate -15deg to +15deg based on cursor x position
            transform: `translate(-50%, -50%) rotate(${(cursorPosition.x / window.innerWidth) * 30 - 15}deg)`,
            transition: "transform 150ms",
          }}
        />
      )}
    </article>
  );
}
