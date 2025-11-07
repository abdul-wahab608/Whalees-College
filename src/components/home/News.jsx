import React, { useState } from "react";
import { motion } from "framer-motion";
import blogPosts from "../../data/blogPosts";
import newsItems from "../../data/newsItems";
import ContentModal from "../common/ContentModal";

const SectionHeader = ({ title, subtitle }) => (
  <div className="text-center mb-10">
    <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
      {title}
    </h2>
    {subtitle && (
      <p className="mt-2 text-gray-600 max-w-2xl mx-auto">{subtitle}</p>
    )}
  </div>
);

const BlogCard = ({ post, onOpen }) => (
  <motion.button
    type="button"
    onClick={() => onOpen(post, "blog")}
    className="group relative text-left w-full bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl transition-all overflow-visible focus:outline-none focus:ring-2 focus:ring-blue-500"
    whileHover={{ y: -4 }}
    aria-label={`Open blog post ${post.title}`}
  >
    {/* Dangling date tab */}
    <div className="absolute -top-3 left-6 z-10">
      <motion.span
        initial={{ y: 0 }}
        animate={{ y: [-2, 2, -2] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        className="inline-block px-3 py-1 bg-gradient-to-r from-blue-600 to-cyan-500 text-white text-xs font-semibold rounded-md shadow-md"
      >
        {new Date(post.date).toLocaleDateString()}
      </motion.span>
    </div>
    {/* Dangling tag strip */}
    <div className="absolute top-10 -left-3 flex flex-col gap-2 z-10">
      {post.tags?.map((t, idx) => (
        <motion.span
          key={t}
          initial={{ y: 0 }}
          animate={{ y: [-1.5, 1.5, -1.5] }}
          transition={{ duration: 2 + idx * 0.2, repeat: Infinity, ease: "easeInOut" }}
          className="px-3 py-1 rounded-md bg-white text-blue-700 text-[11px] font-semibold shadow border border-blue-100 rotate-[-6deg] origin-left"
        >
          {t}
        </motion.span>
      ))}
    </div>
    <div className="relative h-56 w-full overflow-hidden rounded-t-2xl">
      <img src={post.image} alt={post.title} className="h-full w-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
    </div>
    <div className="p-5 pt-6">
      <h3 className="mt-3 text-xl font-bold text-gray-900">{post.title}</h3>
      <p className="mt-2 text-gray-600 line-clamp-3">{post.excerpt}</p>
      <div className="mt-4 flex items-center justify-between text-sm">
        <span className="text-gray-500">By {post.author} • {post.readTime} min read</span>
        <span className="text-blue-600 font-semibold">Read ▶</span>
      </div>
    </div>
  </motion.button>
);

const NewsItem = ({ item, onOpen }) => (
  <motion.button
    type="button"
    onClick={() => onOpen(item, "news")}
    className="group relative text-left w-full bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl transition-all overflow-visible focus:outline-none focus:ring-2 focus:ring-cyan-500"
    whileHover={{ y: -4 }}
    aria-label={`Open news item ${item.headline}`}
  >
    {/* Dangling category tab */}
    <div className="absolute -top-3 right-6 z-10">
      <motion.span
        initial={{ y: 0 }}
        animate={{ y: [-2, 2, -2] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        className="inline-block px-3 py-1 bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-xs font-semibold rounded-md shadow-md"
      >
        {item.category}
      </motion.span>
    </div>
    {/* Dangling date tag rotated */}
    <div className="absolute top-10 -right-3 z-10 rotate-[5deg]">
      <motion.span
        initial={{ y: 0 }}
        animate={{ y: [-1.5, 1.5, -1.5] }}
        transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
        className="inline-block px-3 py-1 rounded-md bg-white text-cyan-700 text-[11px] font-semibold shadow border border-cyan-100"
      >
        {new Date(item.date).toLocaleDateString()}
      </motion.span>
    </div>
    <div className="relative h-48 w-full overflow-hidden rounded-t-2xl">
      <img src={item.image} alt={item.headline} className="h-full w-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
    </div>
    <div className="p-5 pt-6">
      <h3 className="text-lg font-bold text-gray-900">{item.headline}</h3>
      <p className="mt-2 text-gray-600 line-clamp-3">{item.summary}</p>
      <div className="mt-4 flex items-center justify-between text-sm">
        <span className="text-gray-500">{new Date(item.date).toLocaleDateString()}</span>
        <span className="text-cyan-600 font-semibold">Details ▶</span>
      </div>
    </div>
  </motion.button>
);

const News = () => {
  const [openItem, setOpenItem] = useState(null);
  const [openType, setOpenType] = useState(null); // 'blog' | 'news'

  const handleOpen = (data, type) => {
    setOpenItem(data);
    setOpenType(type);
  };
  const handleClose = () => {
    setOpenItem(null);
    setOpenType(null);
  };

  return (
    <section className="py-20 bg-gradient-to-b from-white via-blue-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Blog first */}
        <SectionHeader title="From the Blog" subtitle="Insights, stories, and highlights from our community." />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogPosts.map((post) => (
            <BlogCard key={post.id} post={post} onOpen={handleOpen} />
          ))}
        </div>

        {/* Divider graphic */}
        <div className="relative my-14">
          <div className="h-1 bg-gradient-to-r from-blue-200 via-cyan-300 to-blue-200 rounded-full" />
          <div className="absolute inset-0 -top-3 flex justify-center">
            <div className="h-6 w-6 rounded-full bg-gradient-to-tr from-blue-600 to-cyan-500 shadow-lg" />
          </div>
        </div>

        {/* News after blog */}
        <SectionHeader title="Campus News" subtitle="Announcements, partnerships, and campus updates." />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {newsItems.map((item) => (
            <NewsItem key={item.id} item={item} onOpen={handleOpen} />
          ))}
        </div>
      </div>

      <ContentModal
        open={!!openItem}
        onClose={handleClose}
        title={openType === "blog" ? openItem?.title : openItem?.headline}
        subtitle={openType === "blog" ? `By ${openItem?.author} • ${openItem?.readTime} min read` : `${openItem?.category} • ${openItem && new Date(openItem.date).toLocaleDateString()}`}
        image={openItem?.image}
      >
        <div className="text-gray-700 whitespace-pre-line leading-relaxed">
          {openType === "blog" ? openItem?.content : openItem?.content}
        </div>
      </ContentModal>
    </section>
  );
};

export default News;
