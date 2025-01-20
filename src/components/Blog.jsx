import React from "react";
import { ArrowUpRight } from "lucide-react";
import card1 from "../assets/blog/card1.png";
import card2 from "../assets/blog/card2.png";
import card3 from "../assets/blog/card3.png";
import pfp from "../assets/testiminial/Avatar.png";

const BlogCard = ({
  image,
  category,
  title,
  description,
  author,
  date,
  categoryColor = "text-red-500",
}) => (
  <div className="flex flex-col h-full">
    <div className="relative mb-5 overflow-hidden rounded-lg aspect-[16/10]">
      <img src={image} alt={title} className="w-full h-full object-cover" />
    </div>
    <div className="flex flex-col flex-1">
      <span className={`text-sm font-medium ${categoryColor} mb-3 block`}>
        {category}
      </span>
      <div className="group cursor-pointer mb-auto">
        <div className="flex items-start gap-2 mb-3">
          <h3 className="text-xl font-semibold text-gray-900 group-hover:text-gray-600 transition-colors">
            {title}
          </h3>
          <ArrowUpRight className="w-5 h-5 flex-shrink-0 text-gray-400 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
        </div>
        <p className="text-gray-600 mb-4 line-clamp-2">{description}</p>
      </div>
      <div className="flex items-center gap-3 mt-4">
        <img
          src={pfp}
          alt={author.name}
          className="w-10 h-10 rounded-full object-cover"
        />
        <div>
          <p className="font-medium text-gray-900">{author.name}</p>
          <p className="text-sm text-gray-500">{date}</p>
        </div>
      </div>
    </div>
  </div>
);

const BlogSection = () => {
  const blogPosts = [
    {
      image: card1,
      category: "Design",
      title: "UX review presentations",
      description:
        "How do you create compelling presentations that wow your colleagues and impress your managers?",
      author: {
        name: "Olivia Rhye",
        avatar: pfp,
      },
      date: "20 Jan 2024",
    },
    {
      image: card2,
      category: "Product",
      title: "Migrating to Linear 101",
      description:
        "Linear helps streamline software projects, sprints, tasks, and bug tracking. Here's how to get started.",
      author: {
        name: "Phoenix Baker",
        avatar: pfp,
      },
      date: "19 Jan 2024",
    },
    {
      image: card3,
      category: "Software Engineering",
      title: "Building your API stack",
      description:
        "The rise of RESTful APIs has been met by a rise in tools for creating, testing, and managing them.",
      author: {
        name: "Lana Steiner",
        avatar: pfp,
      },
      date: "18 Jan 2024",
    },
  ];

  return (
    <section className="w-full py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-12">
          <div className="max-w-2xl">
            <p className="text-red-500 font-medium mb-3">Our blog</p>
            <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-4">
              Latest blog posts
            </h2>
            <p className="text-lg md:text-xl text-gray-600">
              Tool and strategies modern teams need to help their companies
              grow.
            </p>
          </div>
          <button className="hidden md:inline-flex px-5 py-3 bg-red-500 text-white font-medium rounded-lg hover:bg-red-600 transition-colors whitespace-nowrap">
            View all posts
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 xl:gap-12 mb-8 md:mb-0">
          {blogPosts.map((post, index) => (
            <BlogCard key={index} {...post} />
          ))}
        </div>

        <button className="w-full md:hidden mt-8 px-5 py-3 bg-red-500 text-white font-medium rounded-lg hover:bg-red-600 transition-colors">
          View all posts
        </button>
      </div>
    </section>
  );
};

export default BlogSection;
