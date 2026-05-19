import type { Award, AwardYearSection } from "../types/awards";

export function getAwardYearSections(awards: Award[]): AwardYearSection[] {
  const awardsByYear: Record<number, Award[]> = {};
  for (const award of awards) {
    if (!awardsByYear[award.year]) {
      awardsByYear[award.year] = [];
    }

    awardsByYear[award.year].push(award);
  }

  const sections: AwardYearSection[] = [];

  for (const [year, awards] of Object.entries(awardsByYear)) {
    sections.push({
      year: Number(year),
      awards,
    });
  }

  sections.sort((a, b) => b.year - a.year);

  return sections;
}
