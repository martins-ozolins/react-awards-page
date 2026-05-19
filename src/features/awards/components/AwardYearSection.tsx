import type { Award } from "../types/awards";
import { AwardGroupRow } from "./AwardGroupRow";

interface AwardYearSectionProps {
  year: number;
  awards: Award[];
}

export function AwardYearSection({ year, awards }: AwardYearSectionProps) {
  return (
    <section className="pt-10">
      <div className="px-4 md:px-10 xl:px-14">
        <div className="mb-8 inline-flex items-center rounded-full border border-brand-slime bg-brand-slime px-3 py-2 lg:px-4.5 lg:py-2.5 text-md font-medium leading-none text-brand-dark">
          {year}
        </div>
      </div>

      <div>
        {awards.map((award) => (
          <AwardGroupRow key={award.id} award={award} />
        ))}
      </div>
    </section>
  );
}
