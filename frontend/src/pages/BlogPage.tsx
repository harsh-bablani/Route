import React from 'react';
import { ArrowLeft, Calendar, User, Clock } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

// Import local blog images
import blogImg1 from '../Blogs Assets/id 1.avif';
import blogImg2 from '../Blogs Assets/id 2.avif';
import blogImg3 from '../Blogs Assets/id 3.avif';
import blogImg4 from '../Blogs Assets/id 4.avif';
import blogImg5 from '../Blogs Assets/id 5.avif';
import blogImg6 from '../Blogs Assets/id 6.avif';

const BlogPage = () => {
  const navigate = useNavigate();

  const blogPosts = [
    {
      id: 1,
      title: "Must-Have Travel Apps for Smart Business Travelers",
      excerpt: "Discover the most essential apps that every business traveler needs to stay organized, productive, and stress-free on the road.",
      author: "Travel Expert",
      readTime: "8 min read",
      category: "Business Travel",
      image: blogImg1
    },
    {
      id: 2,
      title: "Ultimate Guide to Budget Travel in Europe",
      excerpt: "Learn how to explore Europe's most beautiful cities without breaking the bank with our comprehensive budget travel guide.",
      author: "Budget Traveler",
      readTime: "8 min read",
      category: "Travel Tips",
      image: blogImg2
    },
    {
      id: 3,
      title: "Adventure Travel: Thrilling Experiences Around the World",
      excerpt: "From mountain climbing to scuba diving, explore the most exciting adventure activities for adrenaline junkies.",
      author: "Adventure Guide",
      readTime: "6 min read",
      category: "Adventure",
      image: blogImg3
    },
    {
      id: 4,
      title: "Luxury Travel: Experiencing the World in Style",
      excerpt: "Discover the most luxurious hotels, resorts, and experiences that will make your travel dreams come true.",
      author: "Luxury Traveler",
      readTime: "7 min read",
      category: "Luxury",
      image: blogImg4
    },
    {
      id: 5,
      title: "Cultural Immersion: Connecting with Local Communities",
      excerpt: "Learn how to truly experience a destination by connecting with its people, traditions, and culture.",
      author: "Cultural Explorer",
      readTime: "4 min read",
      category: "Culture",
      image: blogImg5
    },
    {
      id: 6,
      title: "Sustainable Travel: Exploring the World Responsibly",
      excerpt: "Discover eco-friendly travel practices and destinations that help preserve our planet for future generations.",
      author: "Eco Traveler",
      readTime: "6 min read",
      category: "Sustainability",
      image: blogImg6
    }
  ];

  const handleBlogClick = (postId: number) => {
    navigate(`/blog/${postId}`);
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-24">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-amber-100 to-orange-200 text-amber-900 py-20">
        <div className="container mx-auto px-4">
          <button
            onClick={() => navigate('/')}
            className="flex items-center text-amber-900 hover:text-amber-700 mb-6 transition-colors"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Home
          </button>
          <h1 className="text-5xl md:text-6xl font-bold mb-4">Travel Blog</h1>
          <p className="text-xl md:text-2xl text-amber-800 max-w-3xl">
            Explore our latest travel insights, destination guides, and exclusive travel experiences to inspire your next adventure.
          </p>
        </div>
      </div>

      {/* Blog Posts Grid */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <article
              key={post.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 cursor-pointer"
              onClick={() => handleBlogClick(post.id)}
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-amber-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {post.category}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <h2 className="text-xl font-bold text-gray-800 mb-3 hover:text-amber-500 transition-colors">
                  {post.title}
                </h2>
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {post.excerpt}
                </p>

                <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                  <div className="flex items-center">
                    <User className="w-4 h-4 mr-1" />
                    {post.author}
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center text-sm text-gray-500">
                    <Clock className="w-4 h-4 mr-1" />
                    {post.readTime}
                  </div>
                  <button className="bg-amber-500 text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-amber-600 transition-colors">
                    Read More
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Newsletter Signup */}
        <div className="mt-20 bg-white rounded-lg shadow-lg p-8 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Stay Updated with Our Travel Stories
          </h2>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Explore our latest travel insights, destination guides, and exclusive travel experiences to inspire your next adventure.
          </p>
        </div>
      </div>
    </div>
  );
};

export default BlogPage; 