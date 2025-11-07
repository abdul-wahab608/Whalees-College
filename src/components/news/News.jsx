import React, { useState } from "react";
import BlogCard from "../news/BlogCard";
import NewsItem from "../news/NewsItem";
import SectionHeader from "../common/SectionHeader";
import ContentModal from "../common/ContentModal";

/**
 * News section component - Blog and News articles with modals
 * Orchestrates modal state and data rendering
 * Data can be replaced with API calls via useNewsData hook
 */
const News = ({ blogPosts, newsItems }) => {
  const [selected, setSelected] = useState(null);

  const blogs = blogPosts || [];
  const news = newsItems || [];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title="Latest Updates"
          subtitle="Stay informed with our latest blog posts and news articles."
        />

        {/* Blog Posts Grid */}
        {blogs.length > 0 && (
          <div className="mb-12">
            <h3 className="text-2xl font-semibold text-gray-800 mb-6">Blog Posts</h3>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {blogs.map((post) => (
                <BlogCard key={post.id} post={post} onOpen={setSelected} />
              ))}
            </div>
          </div>
        )}

        {/* News Articles Grid */}
        {news.length > 0 && (
          <div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-6">News Articles</h3>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {news.map((item) => (
                <NewsItem key={item.id} item={item} onOpen={setSelected} />
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Modal */}
      {selected && (
        <ContentModal
          open={!!selected}
          onClose={() => setSelected(null)}
          image={selected.image}
          title={selected.title}
          subtitle={selected.category || selected.author || selected.date}
        >
          <div className="prose prose-sm max-w-none">
            {selected.content && <p className="whitespace-pre-line">{selected.content}</p>}
          </div>
        </ContentModal>
      )}
    </section>
  );
};

export default News;
