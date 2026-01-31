import React from 'react';
import Section from '../components/Section';
import { BLOG_POSTS } from '../constants';
import { Search } from 'lucide-react';

const Blog: React.FC = () => {
  return (
    <div className="pb-20">
      <Section className="pt-40 border-b border-white/5">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div className="max-w-2xl">
            <h1 className="text-5xl font-bold mb-6">Insights</h1>
            <p className="text-xl text-slate-400">
              Technical whitepapers, regional strategy, and the future of spatial intelligence.
            </p>
          </div>
          <div className="relative w-full md:w-80">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-purple-400/50" />
            <input 
              type="text" 
              placeholder="Search articles..." 
              className="w-full bg-white/5 border border-white/10 rounded-full py-3 pl-12 pr-6 text-sm focus:outline-none focus:border-purple-500/50 transition-colors"
            />
          </div>
        </div>
      </Section>

      <Section>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          {BLOG_POSTS.map(post => (
            <article key={post.id} className="group cursor-pointer">
              <div className="aspect-[16/9] mb-8 rounded-2xl overflow-hidden glass-card border border-white/5">
                <img 
                  src={`https://picsum.photos/seed/post${post.id}/1200/800`} 
                  alt={post.title} 
                  className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="flex items-center gap-4 text-xs font-bold text-purple-400 uppercase tracking-widest mb-4">
                <span>{post.date}</span>
                <span className="w-1 h-1 bg-purple-500 rounded-full" />
                <span>{post.readTime}</span>
              </div>
              <h2 className="text-3xl font-bold mb-4 group-hover:text-purple-400 transition-colors">
                {post.title}
              </h2>
              <p className="text-slate-400 text-lg leading-relaxed mb-6">
                {post.excerpt}
              </p>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-slate-800" />
                <span className="text-sm font-semibold text-slate-300">Written by {post.author}</span>
              </div>
            </article>
          ))}
        </div>
      </Section>

      {/* Subscription Section */}
      <Section className="bg-white/[0.02] border-y border-white/5">
        <div className="max-w-2xl mx-auto text-center">
          <h3 className="text-2xl font-bold mb-6">Join the Strategic Network</h3>
          <p className="text-slate-500 mb-8">
            Quarterly insights delivered directly to your inbox. No marketing noise. Only high-fidelity regional strategy.
          </p>
          <form className="flex flex-col sm:flex-row gap-3" onSubmit={(e) => e.preventDefault()}>
            <input 
              type="email" 
              placeholder="Your email address" 
              className="flex-grow bg-white/5 border border-white/10 rounded-full px-6 py-4 focus:outline-none focus:border-purple-500/50 transition-colors text-white"
            />
            <button className="px-10 py-4 btn-primary-glow text-white font-bold rounded-full transition-all whitespace-nowrap">
              Subscribe
            </button>
          </form>
        </div>
      </Section>
    </div>
  );
};

export default Blog;