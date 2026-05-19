export interface AwardCategory {
  name: string;
  result: string;
}

export interface Award {
  id: string;
  year: number;
  group: string;
  logo: string;
  cursorImage: string;
  categories: AwardCategory[];
}

export interface AwardYearSection {
  year: number;
  awards: Award[];
}
