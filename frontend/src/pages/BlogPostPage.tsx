import React from 'react';
import { ArrowLeft, User, Clock, Share2, Facebook, Twitter, Linkedin } from 'lucide-react';
import { useNavigate, useParams } from 'react-router-dom';

// Import local blog images
import blogImg1 from '../Blogs Assets/id 1.avif';
import blogImg2 from '../Blogs Assets/id 2.avif';
import blogImg3 from '../Blogs Assets/id 3.avif';
import blogImg4 from '../Blogs Assets/id 4.avif';
import blogImg5 from '../Blogs Assets/id 5.avif';
import blogImg6 from '../Blogs Assets/id 6.avif';

const blogPosts = [
  {
    id: 1,
    title: "Must-Have Travel Apps for Smart Business Travelers",
    subtitle: "Because even important meetings need important apps.",
    content: `<p>Business travel in the 21st century is no longer about just boarding a plane with a briefcase and a grin. It's an orchestrated symphony of tight schedules, global connectivity, and a constant balancing act between efficiency and comfort. With business travelers bouncing from terminals to taxis to trade shows, the need for smart tools has never been more pressing. Fortunately, there's an app (or three) for that.</p><p>So, whether you're a globe-trotting executive or a startup founder with more frequent flyer miles than sleep hours, here's your digital toolkit for traveling smart, not hard.</p>`,
    author: "Travel Expert",
    readTime: "8 min read",
    category: "Business Travel",
    image: blogImg1,
    tags: ["Business Travel", "Apps", "Technology", "Productivity"]
  },
  {
    id: 2,
    title: "Ultimate Guide to Budget Travel in Europe",
    subtitle: "Explore Europe without breaking the bank.",
    content: `<p>Europe is a dream destination for many, but it doesn't have to be expensive. With the right planning, you can see the best of Europe on a budget. Start by booking flights in advance, using budget airlines, and staying in hostels or guesthouses. Take advantage of free walking tours, cook your own meals, and use public transportation to get around. Don't forget to explore off-the-beaten-path destinations for a more authentic and affordable experience!</p>`,
    author: "Budget Traveler",
    readTime: "8 min read",
    category: "Travel Tips",
    image: blogImg2,
    tags: ["Europe", "Budget", "Travel Tips"]
  },
  {
    id: 3,
    title: "Adventure Travel: Thrilling Experiences Around the World",
    subtitle: "For the adrenaline junkies and thrill seekers.",
    content: `<p>Adventure travel is all about pushing your limits and experiencing the world in a new way. Whether it's bungee jumping in New Zealand, scuba diving in Australia, or hiking the Inca Trail in Peru, there's an adventure out there for everyone. Make sure to research your destination, pack the right gear, and always prioritize safety. Adventure awaits!</p>`,
    author: "Adventure Guide",
    readTime: "6 min read",
    category: "Adventure",
    image: blogImg3,
    tags: ["Adventure", "Thrill", "Experiences"]
  },
  {
    id: 4,
    title: "Luxury Travel: Experiencing the World in Style",
    subtitle: "Indulge in the finest experiences travel has to offer.",
    content: `<p>Luxury travel is about more than just five-star hotels and first-class flights. It's about unique experiences, personalized service, and unforgettable moments. From private island resorts to gourmet dining and exclusive tours, luxury travel lets you see the world in style. Treat yourself to the best and make memories that will last a lifetime.</p>`,
    author: "Luxury Traveler",
    readTime: "7 min read",
    category: "Luxury",
    image: blogImg4,
    tags: ["Luxury", "Exclusive", "Style"]
  },
  {
    id: 5,
    title: "Cultural Immersion: Connecting with Local Communities",
    subtitle: "Travel deeper by engaging with local cultures.",
    content: `<p>Cultural immersion is the key to truly understanding a destination. Take the time to learn the language, try local foods, and participate in traditional activities. Stay with local families, attend festivals, and be open to new experiences. The connections you make will enrich your travels and broaden your perspective.</p>`,
    author: "Cultural Explorer",
    readTime: "4 min read",
    category: "Culture",
    image: blogImg5,
    tags: ["Culture", "Immersion", "Local"]
  },
  {
    id: 6,
    title: "Sustainable Travel: Exploring the World Responsibly",
    subtitle: "Travel in a way that protects our planet.",
    content: `<p>Sustainable travel is about making choices that minimize your impact on the environment and support local communities. Choose eco-friendly accommodations, reduce your waste, and respect wildlife and natural habitats. By traveling responsibly, you can help preserve the world's beauty for future generations.</p>`,
    author: "Eco Traveler",
    readTime: "6 min read",
    category: "Sustainability",
    image: blogImg6,
    tags: ["Sustainability", "Eco-Friendly", "Responsible Travel"]
  }
];

const BlogPostPage = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const postId = id ? parseInt(id, 10) : 0;
  const blogPost = blogPosts.find(post => post.id === postId);
  if (!blogPost) return <div className="pt-24 text-center">Blog post not found.</div>;

  // Related posts (other than current)
  const relatedPosts = blogPosts.filter(post => post.id !== postId).slice(0, 3);

  return (
    <div className="min-h-screen bg-white pt-24">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-amber-100 to-orange-200 text-amber-900 py-16">
        <div className="container mx-auto px-4">
          <button
            onClick={() => navigate('/blog')}
            className="flex items-center text-amber-900 hover:text-amber-700 mb-6 transition-colors"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Blog
          </button>
          <div className="max-w-4xl">
            <span className="bg-amber-200 text-amber-900 px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
              {blogPost.category}
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">{blogPost.title}</h1>
            <p className="text-xl md:text-2xl text-amber-800 mb-6">{blogPost.subtitle}</p>
            <div className="flex items-center space-x-6 text-sm">
              <div className="flex items-center">
                <User className="w-4 h-4 mr-2" />
                {blogPost.author}
              </div>
              <div className="flex items-center">
                <Clock className="w-4 h-4 mr-2" />
                {blogPost.readTime}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Featured Image */}
          <div className="mb-8">
            <img
              src={blogPost.image}
              alt={blogPost.title}
              className="w-full h-96 object-cover rounded-lg"
            />
          </div>

          {/* Article Content */}
          <article className="prose prose-lg max-w-none">
            <div dangerouslySetInnerHTML={{ __html: blogPost.content }} />
          </article>

          {/* Tags */}
          <div className="mt-12 pt-8 border-t border-gray-200">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Tags:</h3>
            <div className="flex flex-wrap gap-2">
              {blogPost.tags.map((tag, index) => (
                <span
                  key={index}
                  className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm hover:bg-amber-100 hover:text-amber-700 transition-colors cursor-pointer"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Related Posts */}
        <div className="mt-20">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Related Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {relatedPosts.map((post) => (
              <article
                key={post.id}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 cursor-pointer"
                onClick={() => navigate(`/blog/${post.id}`)}
              >
                <div className="h-48 overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-3 hover:text-amber-500 transition-colors">
                    {post.title}
                  </h3>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPostPage; 