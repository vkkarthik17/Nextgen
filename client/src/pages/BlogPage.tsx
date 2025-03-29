import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CalendarIcon, ClockIcon, UserIcon, SearchIcon, ArrowRightIcon, BookmarkIcon, TrendingUpIcon } from "lucide-react";
import { motion } from "framer-motion";
import { ScrollAnimationWrapper, StaggeredAnimation } from "@/hooks/use-scroll-animation";
import { fadeIn, slideIn } from "@/lib/animation";
import { Input } from "@/components/ui/input";
import { Link } from "wouter";

const BlogPage = () => {
  const featuredPost = {
    id: "post1",
    title: "The Future of Engineering Design in Industry 4.0",
    excerpt: "Explore how artificial intelligence and automation are transforming traditional engineering design processes, improving efficiency, and creating new possibilities for innovation.",
    author: "Rajesh Kumar",
    date: "May 15, 2023",
    readTime: "8 min read",
    category: "Technology Trends",
    image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
  };

  const blogPosts = [
    {
      id: "post2",
      title: "5 Essential Skills for Modern CAD Designers",
      excerpt: "Learn about the in-demand skills that can set you apart in today's competitive CAD design job market.",
      author: "Priya Sharma",
      date: "April 22, 2023",
      readTime: "6 min read",
      category: "Career Advice",
      image: "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    },
    {
      id: "post3",
      title: "Understanding Process Simulation in Petrochemical Industries",
      excerpt: "A comprehensive guide to the role of process simulation in optimizing petrochemical operations.",
      author: "Vikram Patel",
      date: "March 10, 2023",
      readTime: "10 min read",
      category: "Technical Insights",
      image: "https://images.unsplash.com/photo-1518709911915-712d5fd04677?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    },
    {
      id: "post4",
      title: "How to Successfully Transition to a Tech Career in 2023",
      excerpt: "Practical advice for professionals looking to make a career change into the technology sector.",
      author: "Ananya Singh",
      date: "February 28, 2023",
      readTime: "7 min read",
      category: "Career Advice",
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    },
    {
      id: "post5",
      title: "The Impact of IoT on Industrial Automation Systems",
      excerpt: "Discover how Internet of Things technology is revolutionizing industrial automation and control systems.",
      author: "Arjun Mehta",
      date: "January 15, 2023",
      readTime: "9 min read",
      category: "Technology Trends",
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    },
    {
      id: "post6",
      title: "Mastering Technical Documentation: Best Practices",
      excerpt: "Learn how to create effective technical documentation that enhances project success and team collaboration.",
      author: "Neha Gupta",
      date: "December 5, 2022",
      readTime: "5 min read",
      category: "Professional Development",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    },
  ];

  const categories = [
    "All Categories",
    "Technology Trends",
    "Career Advice",
    "Technical Insights",
    "Professional Development",
    "Industry News",
  ];

  const trendingPosts = [
    {
      id: "trending1",
      title: "Top Engineering Courses to Boost Your Career",
      category: "Career Advice",
      date: "June 2, 2023",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    },
    {
      id: "trending2",
      title: "How AI is Transforming Process Design",
      category: "Technology Trends",
      date: "May 28, 2023",
      image: "https://images.unsplash.com/photo-1535378719329-f0a8b9a42152?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    },
    {
      id: "trending3",
      title: "Engineering Skills Most in Demand for 2023",
      category: "Industry News",
      date: "May 20, 2023",
      image: "https://images.unsplash.com/photo-1573164713988-8665fc963095?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    },
  ];

  return (
    <div className="bg-[#fafafa]">
      {/* Hero Section with Featured Post */}
      <section className="relative bg-gradient-to-b from-primary/10 to-primary/5 pt-20 pb-32 overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-20 -right-20 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 -left-20 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4">
          <ScrollAnimationWrapper variants={fadeIn(0.2, "up")} className="max-w-4xl mx-auto text-center mb-16">
            <div className="inline-block bg-primary/10 px-4 py-1.5 rounded-full text-primary font-medium text-sm mb-4">
              Insights & Resources
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-neutral-800">
              Nextgen <span className="text-primary">Blog</span>
            </h1>
            <p className="text-lg md:text-xl text-neutral-600 mb-8">
              Stay updated with the latest industry insights, technical guides, and career advice
            </p>
            
            {/* Search box */}
            <div className="max-w-xl mx-auto relative">
              <Input 
                type="search"
                placeholder="Search for articles, topics, or keywords..."
                className="pl-10 pr-4 py-3 rounded-xl shadow-sm border border-neutral-200/80 focus:ring-2 focus:ring-primary/30"
              />
              <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-neutral-400" />
            </div>
          </ScrollAnimationWrapper>

          {/* Featured post */}
          <ScrollAnimationWrapper variants={fadeIn(0.3, "up")}>
            <motion.div 
              whileHover={{ y: -5, boxShadow: "0 20px 30px -10px rgba(0, 0, 0, 0.1)" }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              className="bg-white rounded-2xl overflow-hidden shadow-xl border border-neutral-100"
            >
              <div className="flex flex-col lg:flex-row">
                <div className="lg:w-1/2 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-black/30 to-transparent z-10"></div>
                  <img 
                    src={featuredPost.image} 
                    alt={featuredPost.title}
                    className="w-full h-64 lg:h-full object-cover transition-transform duration-700 hover:scale-105"
                  />
                  <div className="absolute top-4 left-4 z-20">
                    <span className="bg-primary text-white px-3 py-1.5 rounded-lg text-sm font-medium inline-block">
                      Featured
                    </span>
                  </div>
                </div>
                <div className="lg:w-1/2 p-6 lg:p-10 flex flex-col justify-center">
                  <div className="flex items-center text-sm text-neutral-500 mb-3">
                    <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-medium">
                      {featuredPost.category}
                    </span>
                    <span className="ml-3 flex items-center">
                      <ClockIcon className="h-4 w-4 mr-1" />
                      {featuredPost.readTime}
                    </span>
                  </div>
                  <h2 className="text-2xl lg:text-3xl font-bold mb-4 text-neutral-800 leading-tight">
                    <Link href={`/blog/${featuredPost.id}`}>
                      {featuredPost.title}
                    </Link>
                  </h2>
                  <p className="text-neutral-600 mb-6">{featuredPost.excerpt}</p>
                  <div className="flex items-center justify-between mb-5">
                    <div className="flex items-center">
                      <div className="w-10 h-10 rounded-full overflow-hidden mr-3">
                        <img 
                          src={`https://i.pravatar.cc/150?u=${featuredPost.author}`} 
                          alt={featuredPost.author}
                          className="w-full h-full object-cover" 
                        />
                      </div>
                      <div>
                        <p className="font-medium text-neutral-800">{featuredPost.author}</p>
                        <p className="text-sm text-neutral-500">{featuredPost.date}</p>
                      </div>
                    </div>
                  </div>
                  <Button 
                    className="flex items-center justify-center gap-2 mt-auto"
                    variant="secondary"
                  >
                    Read Full Article
                    <ArrowRightIcon className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </motion.div>
          </ScrollAnimationWrapper>
        </div>

        {/* Wave divider */}
        <div className="absolute bottom-0 left-0 w-full">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 100" fill="#ffffff">
            <path d="M0,96L80,80C160,64,320,32,480,21.3C640,11,800,21,960,37.3C1120,53,1280,75,1360,85.3L1440,96L1440,100L1360,100C1280,100,1120,100,960,100C800,100,640,100,480,100C320,100,160,100,80,100L0,100Z"></path>
          </svg>
        </div>
      </section>

      {/* Latest Articles Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-10">
            <div className="lg:w-2/3">
              <ScrollAnimationWrapper variants={fadeIn(0.2, "up")} className="mb-10">
                <h2 className="text-2xl md:text-3xl font-bold mb-2 text-neutral-800 flex items-center">
                  <span className="bg-primary/10 p-2 rounded-lg mr-3 text-primary">
                    <BookmarkIcon className="h-5 w-5" />
                  </span>
                  Latest Articles
                </h2>
                <div className="h-1 w-20 bg-primary mb-6"></div>
              </ScrollAnimationWrapper>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <StaggeredAnimation staggerDuration={0.1}>
                  {blogPosts.map((post) => (
                    <motion.div 
                      key={post.id}
                      whileHover={{ y: -8, boxShadow: "0 15px 30px -10px rgba(0, 0, 0, 0.1)" }}
                      transition={{ type: "spring", stiffness: 300, damping: 25 }}
                    >
                      <Card className="overflow-hidden h-full border-0 shadow-lg">
                        <div className="h-52 bg-neutral-100 overflow-hidden relative">
                          <img 
                            src={post.image} 
                            alt={post.title} 
                            className="w-full h-full object-cover transition-transform hover:scale-105 duration-500"
                          />
                          <div className="absolute top-3 left-3">
                            <span className="bg-white/90 backdrop-blur-sm text-primary px-3 py-1 rounded-lg text-xs font-medium inline-block shadow-sm">
                              {post.category}
                            </span>
                          </div>
                        </div>
                        <CardContent className="p-6">
                          <h3 className="text-xl font-bold mb-3 text-neutral-800 line-clamp-2 hover:text-primary transition-colors leading-tight">
                            <Link href={`/blog/${post.id}`}>{post.title}</Link>
                          </h3>
                          <p className="text-neutral-600 line-clamp-3 mb-4 text-sm">{post.excerpt}</p>
                          
                          <div className="flex items-center justify-between mt-auto pt-4 border-t border-neutral-100">
                            <div className="flex items-center text-xs text-neutral-500">
                              <div className="w-6 h-6 rounded-full overflow-hidden mr-2">
                                <img 
                                  src={`https://i.pravatar.cc/150?u=${post.author}`} 
                                  alt={post.author}
                                  className="w-full h-full object-cover" 
                                />
                              </div>
                              <span className="font-medium">{post.author}</span>
                            </div>
                            <div className="flex items-center text-xs text-neutral-500">
                              <ClockIcon className="h-3 w-3 mr-1" />
                              <span>{post.readTime}</span>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </StaggeredAnimation>
              </div>
              
              <ScrollAnimationWrapper variants={fadeIn(0.4, "up")} className="mt-12 flex justify-center">
                <Button 
                  variant="outline" 
                  className="px-6 py-2.5 rounded-xl border-neutral-300 hover:bg-primary/5 hover:text-primary hover:border-primary/30 transition-all duration-300"
                >
                  Load More Articles <ArrowRightIcon className="ml-2 h-4 w-4" />
                </Button>
              </ScrollAnimationWrapper>
            </div>
            
            <div className="lg:w-1/3">
              <div className="space-y-8">
                <ScrollAnimationWrapper variants={fadeIn(0.3, "left")}>
                  <Card className="overflow-hidden border-0 shadow-lg rounded-xl">
                    <div className="bg-primary/5 p-6 border-b border-neutral-100">
                      <h3 className="text-xl font-bold text-neutral-800 flex items-center">
                        <span className="bg-primary/10 p-2 rounded-lg mr-3 text-primary">
                          <TrendingUpIcon className="h-5 w-5" />
                        </span>
                        Trending Posts
                      </h3>
                    </div>
                    <CardContent className="p-0">
                      {trendingPosts.map((post, index) => (
                        <Link key={post.id} href={`/blog/${post.id}`}>
                          <motion.div 
                            className={`flex items-center p-5 hover:bg-neutral-50 transition-colors cursor-pointer ${
                              index < trendingPosts.length - 1 ? 'border-b border-neutral-100' : ''
                            }`}
                            whileHover={{ x: 5 }}
                          >
                            <div className="w-16 h-16 rounded-lg overflow-hidden mr-4 flex-shrink-0">
                              <img 
                                src={post.image} 
                                alt={post.title} 
                                className="w-full h-full object-cover"
                              />
                            </div>
                            <div>
                              <span className="text-xs font-medium text-primary">{post.category}</span>
                              <h4 className="font-medium text-neutral-800 line-clamp-2 text-sm">{post.title}</h4>
                              <span className="text-xs text-neutral-500">{post.date}</span>
                            </div>
                          </motion.div>
                        </Link>
                      ))}
                    </CardContent>
                  </Card>
                </ScrollAnimationWrapper>
                
                <ScrollAnimationWrapper variants={fadeIn(0.4, "left")}>
                  <Card className="overflow-hidden border-0 shadow-lg rounded-xl">
                    <div className="bg-primary/5 p-6 border-b border-neutral-100">
                      <h3 className="text-xl font-bold text-neutral-800">Categories</h3>
                    </div>
                    <CardContent className="p-3">
                      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-2 gap-2">
                        {categories.map((category, index) => (
                          <motion.a 
                            key={index} 
                            href={`/blog/category/${category.toLowerCase().replace(/\s+/g, '-')}`}
                            className={`block px-3 py-2.5 rounded-lg border transition-all duration-300 text-center ${
                              index === 0 
                                ? 'bg-primary text-white border-primary font-medium' 
                                : 'border-neutral-200 hover:bg-primary/5 hover:text-primary hover:border-primary/30'
                            }`}
                            whileHover={{ y: -2 }}
                          >
                            {category}
                          </motion.a>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </ScrollAnimationWrapper>
                
                <ScrollAnimationWrapper variants={fadeIn(0.5, "left")}>
                  <Card className="overflow-hidden border-0 shadow-lg rounded-xl bg-gradient-to-br from-primary/80 to-blue-600 text-white">
                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold mb-4">Subscribe to Our Newsletter</h3>
                      <p className="text-white/80 mb-6 text-sm">
                        Stay updated with our latest articles, industry insights, and exclusive content delivered straight to your inbox.
                      </p>
                      <form className="space-y-4">
                        <div>
                          <Input 
                            type="email" 
                            placeholder="Your email address" 
                            className="w-full px-4 py-3 rounded-lg border-0 shadow-inner bg-white/20 backdrop-blur-sm text-white placeholder:text-white/60 focus:ring-2 focus:ring-white/30"
                          />
                        </div>
                        <Button 
                          type="submit" 
                          className="w-full bg-white text-primary hover:bg-white/90 py-2.5"
                        >
                          Subscribe Now
                        </Button>
                      </form>
                    </CardContent>
                  </Card>
                </ScrollAnimationWrapper>
                
                <ScrollAnimationWrapper variants={fadeIn(0.6, "left")}>
                  <Card className="overflow-hidden border-0 shadow-lg rounded-xl">
                    <div className="bg-primary/5 p-6 border-b border-neutral-100">
                      <h3 className="text-xl font-bold text-neutral-800">Popular Tags</h3>
                    </div>
                    <CardContent className="p-6">
                      <div className="flex flex-wrap gap-2">
                        {[
                          "Engineering", "CAD", "Process Design", "Career Growth", 
                          "Automation", "Industry 4.0", "AI", "Skills", "IoT", 
                          "Manufacturing", "Simulation", "PLM"
                        ].map((tag, index) => (
                          <motion.a 
                            key={index}
                            href={`/blog/tag/${tag.toLowerCase().replace(/\s+/g, '-')}`}
                            className="bg-neutral-50 border border-neutral-200 px-3 py-1.5 rounded-lg text-sm hover:bg-primary/10 hover:text-primary hover:border-primary/30 transition-all duration-300"
                            whileHover={{ y: -2, x: 0 }}
                          >
                            {tag}
                          </motion.a>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </ScrollAnimationWrapper>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogPage;
