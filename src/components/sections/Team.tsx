'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const Team = () => {
  const teamMembers = [
    {
      name: 'João Silva',
      role: 'Desenvolvedor Full Stack',
      image: '/team/member1.svg',
      social: {
        linkedin: '#',
        github: '#',
        twitter: '#',
      },
    },
    {
      name: 'Maria Santos',
      role: 'UX/UI Designer',
      image: '/team/member2.svg',
      social: {
        linkedin: '#',
        behance: '#',
        dribbble: '#',
      },
    },
    {
      name: 'Pedro Oliveira',
      role: 'Desenvolvedor Backend',
      image: '/team/member3.svg',
      social: {
        linkedin: '#',
        github: '#',
        twitter: '#',
      },
    },
  ];

  return (
    <section id="team" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-text">
            Nossa <span className="text-primary">Equipe</span>
          </h2>
          <p className="text-lg text-text/80 max-w-2xl mx-auto">
            Conheça os profissionais talentosos que fazem parte da nossa equipe.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-lg overflow-hidden shadow-lg"
            >
              <div className="relative h-64">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-text">{member.name}</h3>
                <p className="text-primary mb-4">{member.role}</p>
                <div className="flex space-x-4">
                  {Object.entries(member.social).map(([platform, url]) => (
                    <a
                      key={platform}
                      href={url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-text/60 hover:text-primary transition-colors"
                    >
                      <span className="sr-only">{platform}</span>
                      <i className={`fab fa-${platform} text-xl`} />
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team; 