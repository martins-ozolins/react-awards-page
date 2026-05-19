import { useMemo, useState } from "react";
import {
  ALL_AWARD_GROUP,
  awardGroups,
  awards,
} from "../features/awards/data/awards";
import { AwardYearSection } from "../features/awards/components/AwardYearSection";
import { getAwardYearSections } from "../features/awards/utils/getAwardYearSections";
import { AwardFilters } from "../features/awards/components/AwardsFilters";
import { AwardsHeroSection } from "../features/awards/components/AwardsHero";
import { AwardsContactForm } from "../features/awards/components/AwardsContactForm";
import { AwardsCTA } from "../features/awards/components/AwardsCTA";
import { BlogSection } from "../features/awards/components/BlogSection";
import { Footer } from "../components/Footer";

export default function AwardsPage() {
  const [selectedGroup, setSelectedGroup] = useState(ALL_AWARD_GROUP);

  const filteredAwards = useMemo(() => {
    if (selectedGroup === ALL_AWARD_GROUP) {
      return awards;
    }

    return awards.filter((award) => award.group === selectedGroup);
  }, [selectedGroup]);

  const awardYearSections = useMemo(() => {
    return getAwardYearSections(filteredAwards);
  }, [filteredAwards]);

  return (
    <main className="min-h-screen">
      <AwardsHeroSection />

      <section className="px-4 pb-6 pt-16 md:px-10 lg:pb-10 lg:pt-24 xl:px-14">
        <h2 className="text-balance text-brand-dark text-2xl md:text-3xl lg:text-4xl xl:text-5xl leading-none font-bold tracking-tight uppercase m-0 max-w-4xl">
          Six-time best global large agency, delivering award-winning strategy,
          creativity, and performance worldwide.
        </h2>
      </section>

      <AwardFilters
        groups={awardGroups}
        selectedGroup={selectedGroup}
        onChange={setSelectedGroup}
      />

      <section className="pb-20">
        {awardYearSections.length > 0 &&
          awardYearSections.map((section) => (
            <AwardYearSection
              key={section.year}
              year={section.year}
              awards={section.awards}
            />
          ))}
      </section>

      <AwardsContactForm />

      <BlogSection />

      <AwardsCTA />

      <Footer />
    </main>
  );
}
