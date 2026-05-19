import { useMemo, useState } from "react";
import { BlogCarousel } from "./BlogCarousel";
import { BlogCard } from "./BlogCard";
import { blogPosts } from "../data/blogPosts";
import type { BlogCategory } from "../types/blogPosts";

export function BlogSection() {
  const [selectedCategory, setSelectedCategory] =
    useState<BlogCategory>("Blogs");

  const filteredPosts = useMemo(() => {
    return blogPosts.filter((post) => post.category === selectedCategory);
  }, [selectedCategory]);

  return (
    <div className="bg-gray-50">
      <BlogCarousel
        activeFilter={selectedCategory}
        onFilterChange={setSelectedCategory}
      >
        {filteredPosts.map((post) => (
          <BlogCard
            key={post.id}
            title={post.title}
            author={post.author}
            readTime={post.readTime}
            href={post.href}
            imageSrc={post.imageSrc}
          />
        ))}
      </BlogCarousel>
    </div>
  );
}
