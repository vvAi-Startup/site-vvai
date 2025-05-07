'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background border-t border-gray-200">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo e Descrição */}
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="flex items-center space-x-2 mb-4">
              <Image
                src="/logo.svg"
                alt="VVAI Logo"
                width={40}
                height={40}
                className="w-10 h-10"
              />
              <span className="text-xl font-bold text-text">VVAI</span>
            </Link>
            <p className="text-text/80 mb-4">
              Transformando ideias em soluções tecnológicas inovadoras.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="text-text/60 hover:text-primary transition-colors"
              >
                <i className="fab fa-linkedin text-xl" />
              </a>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="text-text/60 hover:text-primary transition-colors"
              >
                <i className="fab fa-github text-xl" />
              </a>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="text-text/60 hover:text-primary transition-colors"
              >
                <i className="fab fa-twitter text-xl" />
              </a>
            </div>
          </div>

          {/* Links Rápidos */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-text">Links Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#about"
                  className="text-text/80 hover:text-primary transition-colors"
                >
                  Sobre
                </a>
              </li>
              <li>
                <a
                  href="#projects"
                  className="text-text/80 hover:text-primary transition-colors"
                >
                  Projetos
                </a>
              </li>
              <li>
                <a
                  href="#team"
                  className="text-text/80 hover:text-primary transition-colors"
                >
                  Equipe
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-text/80 hover:text-primary transition-colors"
                >
                  Contato
                </a>
              </li>
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-text">Contato</h3>
            <ul className="space-y-2 text-text/80">
              <li>contato@vvai.com.br</li>
              <li>+55 (11) 99999-9999</li>
              <li>São Paulo, SP - Brasil</li>
            </ul>
          </div>
        </div>

        {/* Linha Divisória */}
        <div className="border-t border-gray-200 mt-12 pt-8 text-center text-text/60">
          <p>
            © {currentYear} VVAI. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 