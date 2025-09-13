'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Clock, Users, BookOpen, Brain } from 'lucide-react';
import { useTheme } from '@/contexts/ThemeContext';
import MagicContainer from '@/components/ui/MagicContainer';

const BenefitsSection: React.FC = () => {
  const { isDark } = useTheme();

  const benefits = [
    {
      icon: <Clock className="w-8 h-8" />,
      title: '24/7 Availability',
      description: 'Get help whenever you need it, day or night. Our AI tutors are always ready to assist.'
    },
    {
      icon: <BookOpen className="w-8 h-8" />,
      title: 'Study at Your Pace',
      description: 'Learn on your own schedule. No fixed class times or rushing through material.'
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Unlimited Access',
      description: 'Ask as many questions as you want. Get unlimited personalized tutoring sessions.'
    },
    {
      icon: <Brain className="w-8 h-8" />,
      title: 'Personalized Learning',
      description: 'AI adapts to your unique learning style, memory type, and preferences for optimal results.'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-transparent to-gray-50/50 dark:to-gray-900/50">
      <div className="max-w-7xl mx-auto px-6 xl:px-0">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gradient">
            Why Choose Tuitionly?
          </h2>
          <p className={`text-lg md:text-xl max-w-2xl mx-auto ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
            Experience the future of personalized education with AI-powered tutoring
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <MagicContainer>
                <div className="p-6 h-full text-center group">
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl mb-4 transition-colors ${
                    isDark
                      ? 'bg-gray-800 text-gray-300 group-hover:bg-gradient-to-r group-hover:from-blue-500 group-hover:to-purple-600 group-hover:text-white'
                      : 'bg-gray-100 text-gray-600 group-hover:bg-gradient-to-r group-hover:from-blue-500 group-hover:to-purple-600 group-hover:text-white'
                  }`}>
                    {benefit.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
                  <p className={`text-sm leading-relaxed ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                    {benefit.description}
                  </p>
                </div>
              </MagicContainer>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
