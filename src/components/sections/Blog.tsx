'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { BlogPost } from '@/types';

const Blog = () => {
  const posts: BlogPost[] = [
    {
      id: '1',
      title: 'O Futuro da Inteligência Artificial',
      excerpt: 'Como a IA está transformando diferentes setores da indústria.',
      image: '/blog/post1.svg',
      date: '2024-03-15',
      author: 'João Silva',
      category: 'Tecnologia',
    },
    {
      id: '2',
      title: 'Desenvolvimento Web Moderno',
      excerpt: 'As melhores práticas e ferramentas para desenvolvimento web em 2024.',
      image: '/blog/post2.svg',
      date: '2024-03-10',
      author: 'Maria Santos',
      category: 'Desenvolvimento',
    },
    {
      id: '3',
      title: 'UX/UI Design Trends',
      excerpt: 'As tendências mais importantes em design de interface para 2024.',
      image: '/blog/post3.svg',
      date: '2024-03-05',
      author: 'Pedro Oliveira',
      category: 'Design',
    },
  ];

  return (
    <section id="blog" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-text">
            Nosso <span className="text-primary">Blog</span>
          </h2>
          <p className="text-lg text-text/80 max-w-2xl mx-auto">
            Artigos e insights sobre tecnologia, inovação e desenvolvimento.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-lg overflow-hidden shadow-lg"
            >
              <div className="relative h-48">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center space-x-4 mb-4">
                  <span className="text-sm text-primary">{post.category}</span>
                  <span className="text-sm text-text/60">{post.date}</span>
                </div>
                <h3 className="text-xl font-bold mb-2 text-text">{post.title}</h3>
                <p className="text-text/80 mb-4">{post.excerpt}</p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-text/60">Por {post.author}</span>
                  <button className="text-primary hover:text-secondary transition-colors">
                    Ler mais →
                  </button>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center mt-12"
        >
          <Link
            href="/blog"
            className="inline-block px-8 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors"
          >
            Ver todos os artigos
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Blog; 