import React, { useState } from 'react';
import { Calendar, Clock, User, ChevronRight, Search, Tag, ArrowLeft } from 'lucide-react';
import { blogPosts, blogCategories, getPostsByCategory } from '../data/blogData';
import { Button } from './ui/button';
import { Input } from './ui/input';

const BlogPage = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');

  const filteredPosts = selectedCategory
    ? getPostsByCategory(selectedCategory)
    : blogPosts;

  const searchedPosts = searchQuery
    ? filteredPosts.filter(post =>
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : filteredPosts;

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('ro-RO', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    });
  };

  return (
    <div className="min-h-screen bg-[#0a0a0f] pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-4">
        {/* Back to Home */}
        <a
          href="/"
          className="inline-flex items-center gap-2 text-[#c9a227] hover:text-[#b8922a] transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          Înapoi la pagina principală
        </a>

        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Blog <span className="text-[#c9a227]">Detectivi Focșani</span>
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Articole, sfaturi și informații utile despre investigații private,
            verificare fidelitate și servicii de detectiv particular.
          </p>
        </div>

        <div className="grid lg:grid-cols-4 gap-8">
          {/* Main Content - Articles Grid */}
          <div className="lg:col-span-3">
            {/* Search Bar - Mobile */}
            <div className="lg:hidden mb-6">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
                <Input
                  type="text"
                  placeholder="Caută articole..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 bg-white/5 border-white/10 text-white placeholder:text-gray-500"
                />
              </div>
            </div>

            {/* Category Filter Pills - Mobile */}
            <div className="lg:hidden flex flex-wrap gap-2 mb-6">
              <button
                onClick={() => setSelectedCategory(null)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  selectedCategory === null
                    ? 'bg-[#c9a227] text-black'
                    : 'bg-white/5 text-gray-300 hover:bg-white/10'
                }`}
              >
                Toate
              </button>
              {blogCategories.slice(0, 3).map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.slug)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                    selectedCategory === cat.slug
                      ? 'bg-[#c9a227] text-black'
                      : 'bg-white/5 text-gray-300 hover:bg-white/10'
                  }`}
                >
                  {cat.name}
                </button>
              ))}
            </div>

            {/* Articles Grid */}
            <div className="grid md:grid-cols-2 gap-6">
              {searchedPosts.map((post) => (
                <article
                  key={post.id}
                  className="group bg-white/5 rounded-2xl overflow-hidden border border-white/10 hover:border-[#c9a227]/50 transition-all duration-300 hover:transform hover:-translate-y-1"
                >
                  {/* Featured Image */}
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-[#c9a227] text-black px-3 py-1 rounded-full text-xs font-semibold">
                        {post.category}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    {/* Meta */}
                    <div className="flex items-center gap-4 text-gray-500 text-sm mb-3">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {formatDate(post.date)}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {post.readTime}
                      </span>
                    </div>

                    {/* Title */}
                    <h2 className="text-lg font-bold text-white mb-3 group-hover:text-[#c9a227] transition-colors line-clamp-2">
                      {post.title}
                    </h2>

                    {/* Excerpt */}
                    <p className="text-gray-400 text-sm mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>

                    {/* Read More */}
                    <a 
                      href={`/blog/${post.slug}`}
                      className="flex items-center gap-2 text-[#c9a227] font-medium text-sm group-hover:gap-3 transition-all"
                    >
                      Citește articolul
                      <ChevronRight className="w-4 h-4" />
                    </a>
                  </div>
                </article>
              ))}
            </div>

            {/* No Results */}
            {searchedPosts.length === 0 && (
              <div className="text-center py-12">
                <p className="text-gray-400">Nu am găsit articole pentru căutarea ta.</p>
                <Button
                  onClick={() => {
                    setSearchQuery('');
                    setSelectedCategory(null);
                  }}
                  className="mt-4 bg-[#c9a227] hover:bg-[#b8922a] text-black"
                >
                  Resetează filtrele
                </Button>
              </div>
            )}

            {/* Load More */}
            {searchedPosts.length > 0 && (
              <div className="text-center mt-10">
                <Button
                  variant="outline"
                  className="border-[#c9a227] text-[#c9a227] hover:bg-[#c9a227]/10"
                >
                  Încarcă mai multe articole
                </Button>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <aside className="hidden lg:block space-y-8">
            {/* Search */}
            <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
              <h3 className="text-white font-bold mb-4">Caută</h3>
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
                <Input
                  type="text"
                  placeholder="Caută articole..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 bg-white/5 border-white/10 text-white placeholder:text-gray-500"
                />
              </div>
            </div>

            {/* Categories */}
            <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
              <h3 className="text-white font-bold mb-4 flex items-center gap-2">
                <Tag className="w-5 h-5 text-[#c9a227]" />
                Categorii
              </h3>
              <ul className="space-y-2">
                <li>
                  <button
                    onClick={() => setSelectedCategory(null)}
                    className={`w-full flex items-center justify-between p-3 rounded-lg transition-all ${
                      selectedCategory === null
                        ? 'bg-[#c9a227]/20 text-[#c9a227]'
                        : 'text-gray-400 hover:bg-white/5 hover:text-white'
                    }`}
                  >
                    <span>Toate articolele</span>
                    <span className="bg-white/10 px-2 py-0.5 rounded text-xs">
                      {blogPosts.length}
                    </span>
                  </button>
                </li>
                {blogCategories.map((category) => (
                  <li key={category.id}>
                    <button
                      onClick={() => setSelectedCategory(category.slug)}
                      className={`w-full flex items-center justify-between p-3 rounded-lg transition-all ${
                        selectedCategory === category.slug
                          ? 'bg-[#c9a227]/20 text-[#c9a227]'
                          : 'text-gray-400 hover:bg-white/5 hover:text-white'
                      }`}
                    >
                      <span>{category.name}</span>
                      <span className="bg-white/10 px-2 py-0.5 rounded text-xs">
                        {category.count}
                      </span>
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Recent Posts */}
            <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
              <h3 className="text-white font-bold mb-4">Articole Recente</h3>
              <ul className="space-y-4">
                {blogPosts.slice(0, 3).map((post) => (
                  <li key={post.id}>
                    <a href="#" className="flex gap-3 group">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-16 h-16 object-cover rounded-lg flex-shrink-0"
                      />
                      <div>
                        <h4 className="text-white text-sm font-medium group-hover:text-[#c9a227] transition-colors line-clamp-2">
                          {post.title}
                        </h4>
                        <span className="text-gray-500 text-xs">
                          {formatDate(post.date)}
                        </span>
                      </div>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* CTA Card */}
            <div className="bg-gradient-to-br from-[#c9a227]/20 to-[#c9a227]/5 rounded-2xl p-6 border border-[#c9a227]/30">
              <h3 className="text-white font-bold mb-2">Ai nevoie de ajutor?</h3>
              <p className="text-gray-400 text-sm mb-4">
                Contactează-ne pentru o consultație gratuită și confidențială.
              </p>
              <a href="/#contact">
                <Button className="w-full bg-[#c9a227] hover:bg-[#b8922a] text-black font-semibold">
                  Contactează-ne
                </Button>
              </a>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
