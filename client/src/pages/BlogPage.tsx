import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CalendarIcon, ClockIcon, UserIcon } from "lucide-react";

const BlogPage = () => {
  const blogPosts = [
    {
      id: "post1",
      title: "The Future of Engineering Design in Industry 4.0",
      excerpt: "Explore how artificial intelligence and automation are transforming traditional engineering design processes.",
      author: "Rajesh Kumar",
      date: "May 15, 2023",
      readTime: "8 min read",
      category: "Technology Trends",
      image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    },
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

  return (
    <div>
      <div className="bg-primary/10 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Blog & Resources</h1>
            <p className="text-lg mb-8">
              Insights, guides, and industry updates to keep you informed and inspired
            </p>
          </div>
        </div>
      </div>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-8">
            <div className="lg:w-3/4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {blogPosts.map((post) => (
                  <Card key={post.id} className="overflow-hidden">
                    <div className="h-48 bg-gray-200 overflow-hidden">
                      <img 
                        src={post.image} 
                        alt={post.title} 
                        className="w-full h-full object-cover transition-transform hover:scale-105 duration-300"
                      />
                    </div>
                    <CardContent className="p-6">
                      <div className="flex items-center text-sm text-gray-500 mb-3">
                        <span className="bg-primary/10 text-primary px-2 py-1 rounded-full text-xs font-medium">
                          {post.category}
                        </span>
                        <span className="mx-2">•</span>
                        <span className="flex items-center">
                          <ClockIcon className="h-3 w-3 mr-1" />
                          {post.readTime}
                        </span>
                      </div>
                      <h3 className="text-xl font-bold mb-2 hover:text-primary transition-colors">
                        <a href={`/blog/${post.id}`}>{post.title}</a>
                      </h3>
                      <p className="text-gray-600 mb-4">{post.excerpt}</p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center text-sm text-gray-500">
                          <UserIcon className="h-3 w-3 mr-1" />
                          <span>{post.author}</span>
                        </div>
                        <div className="flex items-center text-sm text-gray-500">
                          <CalendarIcon className="h-3 w-3 mr-1" />
                          <span>{post.date}</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
              
              <div className="mt-12 flex justify-center">
                <Button variant="outline">Load More Articles</Button>
              </div>
            </div>
            
            <div className="lg:w-1/4">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold mb-4">Categories</h3>
                  <div className="space-y-2">
                    {categories.map((category, index) => (
                      <a 
                        key={index} 
                        href={`/blog/category/${category.toLowerCase().replace(/\s+/g, '-')}`}
                        className={`block px-3 py-2 rounded-md hover:bg-gray-100 transition-colors ${
                          index === 0 ? 'bg-primary/10 text-primary' : ''
                        }`}
                      >
                        {category}
                      </a>
                    ))}
                  </div>
                </CardContent>
              </Card>
              
              <Card className="mt-6">
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold mb-4">Subscribe to Our Newsletter</h3>
                  <p className="text-gray-600 mb-4">
                    Stay updated with our latest articles, industry insights, and course offerings.
                  </p>
                  <form className="space-y-4">
                    <div>
                      <input 
                        type="email" 
                        placeholder="Your email address" 
                        className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary"
                      />
                    </div>
                    <Button type="submit" className="w-full">Subscribe</Button>
                  </form>
                </CardContent>
              </Card>
              
              <Card className="mt-6">
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold mb-4">Popular Tags</h3>
                  <div className="flex flex-wrap gap-2">
                    <a href="#" className="bg-gray-100 px-3 py-1 rounded-full text-sm hover:bg-primary/10 hover:text-primary transition-colors">
                      Engineering
                    </a>
                    <a href="#" className="bg-gray-100 px-3 py-1 rounded-full text-sm hover:bg-primary/10 hover:text-primary transition-colors">
                      CAD
                    </a>
                    <a href="#" className="bg-gray-100 px-3 py-1 rounded-full text-sm hover:bg-primary/10 hover:text-primary transition-colors">
                      Process Design
                    </a>
                    <a href="#" className="bg-gray-100 px-3 py-1 rounded-full text-sm hover:bg-primary/10 hover:text-primary transition-colors">
                      Career Growth
                    </a>
                    <a href="#" className="bg-gray-100 px-3 py-1 rounded-full text-sm hover:bg-primary/10 hover:text-primary transition-colors">
                      Automation
                    </a>
                    <a href="#" className="bg-gray-100 px-3 py-1 rounded-full text-sm hover:bg-primary/10 hover:text-primary transition-colors">
                      Industry 4.0
                    </a>
                    <a href="#" className="bg-gray-100 px-3 py-1 rounded-full text-sm hover:bg-primary/10 hover:text-primary transition-colors">
                      AI
                    </a>
                    <a href="#" className="bg-gray-100 px-3 py-1 rounded-full text-sm hover:bg-primary/10 hover:text-primary transition-colors">
                      Skills
                    </a>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogPage;
