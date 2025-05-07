'use client';

import { motion } from 'framer-motion';
import {
  FaReact,
  FaNodeJs,
  FaPython,
  FaDocker,
  FaGitAlt,
} from 'react-icons/fa';
import { 
  SiTypescript, 
  SiNextdotjs, 
  SiTailwindcss, 
  SiTensorflow, 
  SiMongodb, 
  SiPostgresql,
  SiPytorch,
  SiFlask,
  SiFastapi,
  SiReact
} from 'react-icons/si';

const Technologies = () => {
  const technologies = [
    {
      name: 'React',
      icon: <FaReact className="w-16 h-16 text-text/60" />,
      category: 'Frontend',
    },
    {
      name: 'React Native',
      icon: <SiReact className="w-16 h-16 text-text/60" />,
      category: 'Mobile',
    },
    {
      name: 'TypeScript',
      icon: <SiTypescript className="w-16 h-16 text-text/60" />,
      category: 'Frontend',
    },
    {
      name: 'Next.js',
      icon: <SiNextdotjs className="w-16 h-16 text-text/60" />,
      category: 'Frontend',
    },
    {
      name: 'Tailwind CSS',
      icon: <SiTailwindcss className="w-16 h-16 text-text/60" />,
      category: 'Frontend',
    },
    {
      name: 'Node.js',
      icon: <FaNodeJs className="w-16 h-16 text-text/60" />,
      category: 'Backend',
    },
    {
      name: 'Python',
      icon: <FaPython className="w-16 h-16 text-text/60" />,
      category: 'Backend',
    },
    {
      name: 'Flask',
      icon: <SiFlask className="w-16 h-16 text-text/60" />,
      category: 'Backend',
    },
    {
      name: 'FastAPI',
      icon: <SiFastapi className="w-16 h-16 text-text/60" />,
      category: 'Backend',
    },
    {
      name: 'MongoDB',
      icon: <SiMongodb className="w-16 h-16 text-text/60" />,
      category: 'Database',
    },
    {
      name: 'PostgreSQL',
      icon: <SiPostgresql className="w-16 h-16 text-text/60" />,
      category: 'Database',
    },
    {
      name: 'Docker',
      icon: <FaDocker className="w-16 h-16 text-text/60" />,
      category: 'DevOps',
    },
    {
      name: 'TensorFlow',
      icon: <SiTensorflow className="w-16 h-16 text-text/60" />,
      category: 'AI/ML',
    },
    {
      name: 'PyTorch',
      icon: <SiPytorch className="w-16 h-16 text-text/60" />,
      category: 'AI/ML',
    },
    {
      name: 'Git',
      icon: <FaGitAlt className="w-16 h-16 text-text/60" />,
      category: 'DevOps',
    },
  ];

  const categories = ['Frontend', 'Mobile', 'Backend', 'Database', 'DevOps', 'AI/ML'];

  // Criar três cópias do array para garantir transição suave
  const techArray = [...technologies, ...technologies, ...technologies];

  return (
    <section id="tech" className="py-20 bg-background overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-text">
            Nossas <span className="text-primary">Tecnologias</span>
          </h2>
          <p className="text-lg text-text/80 max-w-2xl mx-auto">
            Utilizamos as mais modernas tecnologias para desenvolver soluções
            inovadoras e escaláveis.
          </p>
        </motion.div>

        {/* Carrossel de Tecnologias */}
        <div className="relative">
          <div className="flex space-x-8 overflow-hidden py-8">
            <motion.div
              animate={{
                x: [0, -2000],
              }}
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 40,
                  ease: "linear",
                },
              }}
              className="flex space-x-8"
            >
              {techArray.map((tech, index) => (
                <motion.div
                  key={`${tech.name}-${index}`}
                  whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
                  className="flex flex-col items-center justify-center bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg min-w-[200px] hover:bg-white transition-colors"
                >
                  {tech.icon}
                  <h3 className="text-lg font-bold mt-4 text-text">{tech.name}</h3>
                  <span className="text-sm text-text/60 mt-2">{tech.category}</span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Categorias */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-16 flex flex-wrap justify-center gap-4"
        >
          {categories.map((category, index) => (
            <motion.span
              key={index}
              whileHover={{ scale: 1.05 }}
              className="px-6 py-3 bg-primary/10 text-primary rounded-full text-sm font-medium cursor-pointer hover:bg-primary/20 transition-colors"
            >
              {category}
            </motion.span>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Technologies; 