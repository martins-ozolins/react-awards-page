export type BlogCategory = "Blogs" | "News";

export interface BlogPost {
  id: string;
  title: string;
  author: string;
  readTime: string;
  href: string;
  imageSrc: string;
  category: BlogCategory;
}
