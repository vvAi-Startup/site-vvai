'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { FaLightbulb, FaBolt, FaHandshake, FaGlobe, FaBullseye, FaEye, FaArrowRight } from 'react-icons/fa';

const About = () => {
  const values = [
    {
      title: 'Inovação Constante',
      description: 'Buscamos sempre as soluções mais modernas e eficientes para nossos clientes.',
      icon: <FaLightbulb className="w-8 h-8 text-text/60" />,
    },
    {
      title: 'Excelência Técnica',
      description: 'Comprometimento com a qualidade e melhores práticas de desenvolvimento.',
      icon: <FaBolt className="w-8 h-8 text-text/60" />,
    },
    {
      title: 'Colaboração',
      description: 'Trabalho em equipe e parceria com nossos clientes para resultados excepcionais.',
      icon: <FaHandshake className="w-8 h-8 text-text/60" />,
    },
    {
      title: 'Impacto Social',
      description: 'Desenvolvemos soluções que fazem a diferença na vida das pessoas.',
      icon: <FaGlobe className="w-8 h-8 text-text/60" />,
    },
  ];

  const stats = [
    { number: '50+', label: 'Projetos Entregues' },
    { number: '30+', label: 'Clientes Satisfeitos' },
    { number: '5+', label: 'Anos de Experiência' },
    { number: '100%', label: 'Comprometimento' },
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-text">
            Transformando o Futuro com <span className="text-primary">Tecnologia</span>
          </h2>
          <p className="text-xl text-text/80 max-w-3xl mx-auto mb-8">
            Somos uma equipe apaixonada por tecnologia e inovação, dedicada a criar
            soluções que transformam o futuro e impactam positivamente a sociedade.
          </p>

        </motion.div>

        {/* Imagem Principal e Estatísticas */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative h-[600px] rounded-2xl overflow-hidden shadow-xl"
          >
            <Image
              src="/about-image.svg"
              alt="Equipe VVAI trabalhando em projetos inovadores"
              fill
              className="object-cover"
              priority
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-8"
          >
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold mb-4 text-text flex items-center">
                <FaBullseye className="w-6 h-6 text-text/60 mr-3" />
                Nossa Missão
              </h3>
              <p className="text-text/80 leading-relaxed">
                Transformar ideias em soluções tecnológicas inovadoras que impactam
                positivamente a vida das pessoas e impulsionam o crescimento das empresas.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold mb-4 text-text flex items-center">
                <FaEye className="w-6 h-6 text-text/60 mr-3" />
                Nossa Visão
              </h3>
              <p className="text-text/80 leading-relaxed">
                Ser referência em inovação e tecnologia, reconhecida pela excelência
                técnica e impacto social de nossas soluções, contribuindo para um
                futuro mais tecnológico e sustentável.
              </p>
            </div>

            
          </motion.div>
        </div>

        {/* Valores */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h3 className="text-3xl md:text-4xl font-bold mb-4 text-text">
            Nossos <span className="text-primary">Valores</span>
          </h3>
          <p className="text-lg text-text/80 max-w-2xl mx-auto">
            Princípios que guiam nosso trabalho e relacionamento com clientes e parceiros.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all"
            >
              <div className="mb-6">{value.icon}</div>
              <h4 className="text-xl font-bold mb-4 text-text">{value.title}</h4>
              <p className="text-text/80">{value.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center mt-20"
        >
          <h3 className="text-2xl md:text-3xl font-bold mb-6 text-text">
            Pronto para começar seu projeto?
          </h3>
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center px-8 py-4 bg-primary text-white rounded-full text-lg font-semibold hover:bg-primary/90 transition-colors"
          >
            Fale conosco
            <FaArrowRight className="ml-2" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default About; 