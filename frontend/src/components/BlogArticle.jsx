import React from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { Calendar, Clock, User, ArrowLeft, Phone } from 'lucide-react';
import { blogPosts } from '../data/blogData';
import { companyInfo } from '../data/mockData';
import { Button } from './ui/button';

const BlogArticle = () => {
  const { slug } = useParams();
  const article = blogPosts.find(post => post.slug === slug);

  if (!article) {
    return <Navigate to="/blog" replace />;
  }

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('ro-RO', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    });
  };

  // Parse markdown-like content to HTML
  const renderContent = (content) => {
    if (!content) return null;
    
    const lines = content.split('\n');
    const elements = [];
    let currentList = [];
    let inList = false;

    lines.forEach((line, index) => {
      // Headers
      if (line.startsWith('## ')) {
        if (inList && currentList.length > 0) {
          elements.push(
            <ul key={`list-${index}`} className="list-disc list-inside space-y-2 mb-6 text-gray-300">
              {currentList}
            </ul>
          );
          currentList = [];
          inList = false;
        }
        elements.push(
          <h2 key={index} className="text-2xl font-bold text-white mt-8 mb-4">
            {line.replace('## ', '')}
          </h2>
        );
      }
      // List items
      else if (line.startsWith('- **')) {
        inList = true;
        const match = line.match(/- \*\*(.+?):\*\* (.+)/);
        if (match) {
          currentList.push(
            <li key={index} className="text-gray-300">
              <strong className="text-white">{match[1]}:</strong> {match[2]}
            </li>
          );
        }
      }
      // Bold text (Important)
      else if (line.startsWith('**Important:**')) {
        if (inList && currentList.length > 0) {
          elements.push(
            <ul key={`list-${index}`} className="list-disc list-inside space-y-2 mb-6 text-gray-300">
              {currentList}
            </ul>
          );
          currentList = [];
          inList = false;
        }
        elements.push(
          <div key={index} className="bg-[#c9a227]/10 border border-[#c9a227]/30 rounded-xl p-4 my-6">
            <p className="text-[#c9a227]">
              <strong>Important:</strong> {line.replace('**Important:**', '')}
            </p>
          </div>
        );
      }
      // Regular paragraphs
      else if (line.trim() !== '') {
        if (inList && currentList.length > 0) {
          elements.push(
            <ul key={`list-${index}`} className="list-disc list-inside space-y-2 mb-6 text-gray-300">
              {currentList}
            </ul>
          );
          currentList = [];
          inList = false;
        }
        elements.push(
          <p key={index} className="text-gray-300 leading-relaxed mb-4">
            {line}
          </p>
        );
      }
    });

    // Don't forget remaining list items
    if (inList && currentList.length > 0) {
      elements.push(
        <ul key="final-list" className="list-disc list-inside space-y-2 mb-6 text-gray-300">
          {currentList}
        </ul>
      );
    }

    return elements;
  };

  return (
    <div className="min-h-screen bg-[#0a0a0f] pt-32 pb-20">
      <div className="max-w-4xl mx-auto px-4">
        {/* Back Link */}
        <a
          href="/blog"
          className="inline-flex items-center gap-2 text-[#c9a227] hover:text-[#b8922a] transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          Înapoi la Blog
        </a>

        {/* Article Header */}
        <article>
          {/* Category */}
          <span className="inline-block bg-[#c9a227] text-black px-4 py-1.5 rounded-full text-sm font-semibold mb-4">
            {article.category}
          </span>

          {/* Title */}
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
            {article.title}
          </h1>

          {/* Meta */}
          <div className="flex flex-wrap items-center gap-6 text-gray-400 mb-8">
            <span className="flex items-center gap-2">
              <User className="w-5 h-5 text-[#c9a227]" />
              {article.author}
            </span>
            <span className="flex items-center gap-2">
              <Calendar className="w-5 h-5 text-[#c9a227]" />
              {formatDate(article.date)}
            </span>
            <span className="flex items-center gap-2">
              <Clock className="w-5 h-5 text-[#c9a227]" />
              {article.readTime} citire
            </span>
          </div>

          {/* Featured Image */}
          <div className="relative rounded-2xl overflow-hidden mb-10">
            <img
              src={article.image}
              alt={article.title}
              className="w-full h-auto max-h-[500px] object-cover"
            />
          </div>

          {/* Content */}
          <div className="prose prose-lg prose-invert max-w-none">
            {article.content ? (
              renderContent(article.content)
            ) : (
              <p className="text-gray-300 leading-relaxed">{article.excerpt}</p>
            )}
          </div>

          {/* CTA Section */}
          <div className="mt-12 bg-gradient-to-r from-[#c9a227]/20 via-[#c9a227]/10 to-[#c9a227]/20 rounded-2xl p-8 border border-[#c9a227]/30">
            <h3 className="text-xl font-bold text-white mb-3">
              Ai nevoie de servicii profesionale de detectiv?
            </h3>
            <p className="text-gray-400 mb-6">
              Echipa noastră de detectivi particulari din Focșani este disponibilă 24/7 pentru consultații gratuite și confidențiale.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href={`tel:${companyInfo.phone.replace(/\s/g, '')}`}>
                <Button className="bg-[#c9a227] hover:bg-[#b8922a] text-black font-semibold px-6">
                  <Phone className="w-4 h-4 mr-2" />
                  Sună: {companyInfo.phone}
                </Button>
              </a>
              <a href="/#contact">
                <Button variant="outline" className="border-[#c9a227] text-[#c9a227] hover:bg-[#c9a227]/10">
                  Trimite un mesaj
                </Button>
              </a>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
};

export default BlogArticle;
