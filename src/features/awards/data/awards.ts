import type { Award } from "../types/awards";

export const ALL_AWARD_GROUP = "All";

export const awards: Award[] = [
  {
    id: "global-search-awards-2025",
    year: 2025,
    group: "Global Search Awards",
    logo: "/global-search-awards-2025.png",
    cursorImage: "/global-search-awards-team-photo-2025.avif",
    categories: [
      {
        name: "Best Global Large Integrated Search Agency",
        result: "Winner",
      },
      {
        name: "Best Use Of Search - Retail / Ecommerce (SEO): Large",
        result: "Winner",
      },
      {
        name: "Best Use Of Search - Retail / Ecommerce (PPC): Large",
        result: "Winner",
      },
      {
        name: "Best Use Of Search - Finance (SEO): Large",
        result: "Winner",
      },
    ],
  },
  {
    id: "global-social-media-awards-2025",
    year: 2025,
    group: "Global Social Media Awards",
    logo: "/global-social-media-awards-2025.png",
    cursorImage: "/global-social-media-awards-team-photo-2025.jpg",
    categories: [
      {
        name: "Best Use of Search",
        result: "Winner",
      },
      {
        name: "Best Use of Integrated Campaign",
        result: "Winner",
      },
      {
        name: "Best Use Of AI In Social",
        result: "Winner",
      },
    ],
  },
  {
    id: "great-place-to-work-awards-2025",
    year: 2025,
    group: "Great Place To Work Awards",
    logo: "/great-place-to-work-award.png",
    cursorImage: "/great-place-to-work-team-photo.avif",
    categories: [
      {
        name: "Best Medium Workplaces - Rank 7",
        result: "Winner",
      },
      {
        name: "Best Workplaces for Women",
        result: "Winner",
      },
      {
        name: "Best Workplaces for Health & Wellbeing",
        result: "Winner",
      },
      {
        name: "Best Workplaces for Tech",
        result: "Winner",
      },
    ],
  },
  {
    id: "global-search-awards-2024",
    year: 2024,
    group: "Global Search Awards",
    logo: "/global-search-awards-2024.webp",
    cursorImage: "/global-search-awards-team-photo-2024.jpg",
    categories: [
      {
        name: "Best Use Of Search - Retail / eCommerce (PPC)",
        result: "Winner",
      },
      {
        name: "Best Local Campaign (SEO)",
        result: "Winner",
      },
      {
        name: "Best Use Of Search - B2B (SEO)",
        result: "Winner",
      },
      {
        name: "Best Global Large Integrated Search Agency",
        result: "Winner",
      },
    ],
  },
  {
    id: "global-social-media-awards-2024",
    year: 2024,
    group: "Global Social Media Awards",
    logo: "/global-social-media-awards-2025.png",
    cursorImage: "/global-social-media-awards-team-photo-2024.webp",
    categories: [
      {
        name: "Best Use of TikTok",
        result: "Winner",
      },
      {
        name: "Best Use Of Social Media For Finance",
        result: "Winner",
      },
    ],
  },
  {
    id: "european-content-awards-2024",
    year: 2024,
    group: "European Content Awards",
    logo: "/european-content-awards.avif",
    cursorImage: "/european-content-awards-team-photo-2024.avif",
    categories: [
      {
        name: "Content Strategy of the Year",
        result: "Nominated",
      },
      {
        name: "CRM / Email campaign of the year",
        result: "Winner",
      },
    ],
  },
];

export const awardGroups = [
  ALL_AWARD_GROUP,
  ...new Set(awards.map((award) => award.group)),
];
