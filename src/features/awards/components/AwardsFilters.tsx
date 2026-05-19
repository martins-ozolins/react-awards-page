interface AwardFiltersProps {
  groups: string[];
  selectedGroup: string;
  onChange: (group: string) => void;
}

export function AwardFilters({
  groups,
  selectedGroup,
  onChange,
}: AwardFiltersProps) {
  return (
    <section className="px-4 py-5 md:px-10 xl:px-14 flex items-center sm:gap-4 ">
      <label
        htmlFor="awardGroup"
        className="leading-tight hidden font-medium text-md sm:inline-block text-brand-dark"
      >
        Filter
      </label>

      <div className="relative w-full sm:w-auto">
        <select
          name="awardGroup"
          id="awardGroup"
          className="
            w-full appearance-none rounded-full border border-brand-dark bg-white
            pl-5 pr-12 py-2
            text-base font-normal text-brand-dark
            shadow-none outline-none transition
            sm:w-auto sm:text-md
            hover:border-brand-dark focus:border-brand-dark
          "
          onChange={(e) => onChange(e.target.value)}
          value={selectedGroup}
        >
          {groups.map((group) => {
            const label = group === "All" ? "By Group" : group;

            return (
              <option value={group} key={group}>
                {label}
              </option>
            );
          })}
        </select>

        <svg
          className="pointer-events-none absolute right-5 top-1/2 h-5 w-5 -translate-y-1/2 text-brand-dark"
          viewBox="0 0 20 20"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
        >
          <path d="M5 7.5L10 12.5L15 7.5" />
        </svg>
      </div>
    </section>
  );
}
