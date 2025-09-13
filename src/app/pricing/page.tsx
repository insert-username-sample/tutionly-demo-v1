'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Moon, Sun, Check, Star, Zap, Crown } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { useTheme, useLogo } from '@/contexts/ThemeContext';
import GlassCard from '@/components/ui/GlassCard';
import Button from '@/components/ui/Button';

const PricingPage: React.FC = () => {
  const { isDark, toggleTheme } = useTheme();
  const { logoSrc, logoAlt } = useLogo();

  const valueProps = [
    {
      icon: <Zap className="w-8 h-8" />,
      title: 'AI-Powered Learning',
      description: 'Personalized tutoring that adapts to your unique learning style and pace'
    },
    {
      icon: <Star className="w-8 h-8" />,
      title: 'Comprehensive Support',
      description: 'From basic homework help to advanced problem-solving across all subjects'
    },
    {
      icon: <Crown className="w-8 h-8" />,
      title: 'Proven Results',
      description: 'Students see significant improvement in grades and understanding'
    }
  ];

  const faqs = [
    {
      question: 'When will pricing be finalized?',
      answer: 'We\'re currently finalizing our pricing based on extensive user testing and feedback. The plans shown above are our current estimates.'
    },
    {
      question: 'Will there be a free tier?',
      answer: 'Yes! We believe everyone should have access to quality education. Our free tier will always be available with basic features.'
    },
    {
      question: 'Can I change plans anytime?',
      answer: 'Absolutely! You can upgrade, downgrade, or cancel your subscription at any time. Changes take effect at the next billing cycle.'
    },
    {
      question: 'Do you offer student discounts?',
      answer: 'We\'re committed to making education accessible. We offer significant discounts for students, families, and educational institutions.'
    }
  ];

  return (
    <main
      className="min-h-screen transition-all duration-300"
      style={{
        backgroundColor: isDark ? 'var(--dark-bg)' : 'var(--light-bg)',
      }}
    >
      {/* Navigation Header */}
      <div className="max-w-7xl mx-auto px-6 xl:px-0 py-6">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3 group">
            <ArrowLeft
              size={24}
              className={`transition-colors ${
                isDark
                  ? 'text-gray-400 group-hover:text-white'
                  : 'text-gray-600 group-hover:text-gray-900'
              }`}
            />
            <span
              className={`font-semibold ${
                isDark ? 'text-gray-300' : 'text-gray-700'
              }`}
            >
              Back to Home
            </span>
          </Link>

          <div className="flex items-center gap-6">
            <Image src={logoSrc} alt={logoAlt} width={160} height={40} />
            <button
              onClick={toggleTheme}
              className={`p-2 rounded-xl transition-all duration-300 ${
                isDark
                  ? 'bg-gray-800 hover:bg-gray-700 text-gray-300'
                  : 'bg-white hover:bg-gray-50 text-gray-600 shadow-lg'
              }`}
              aria-label="Toggle theme"
            >
              {isDark ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 xl:px-0 pb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-16"
        >
          {/* Hero Section */}
          <GlassCard className="p-8 md:p-12 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">
                AI-Powered Private Tutoring at a Fraction of the Cost
              </h1>
              <p
                className={`text-xl md:text-2xl leading-relaxed max-w-3xl mx-auto mb-8 ${
                  isDark ? 'text-gray-300' : 'text-gray-700'
                }`}
              >
                Tuitionly brings the quality of one-on-one tutoring to every student through AI.
                Experience personalized learning that adapts to your needs, at a fraction of traditional tutoring costs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Button variant="primary" size="lg">
                  Join Waitlist for Updates
                </Button>
                <Button variant="secondary" size="lg">
                  Try Our Demo
                </Button>
              </div>
            </motion.div>
          </GlassCard>

          {/* Value Propositions */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {valueProps.map((prop, index) => (
              <motion.div
                key={prop.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <GlassCard className="p-8 h-full text-center hover:scale-105 transition-all duration-300">
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl mb-6 ${
                    isDark ? 'bg-gray-800 text-gray-300' : 'bg-gray-100 text-gray-600'
                  }`}>
                    {prop.icon}
                  </div>
                  <h3 className="text-2xl font-bold mb-4">{prop.title}</h3>
                  <p className={`text-base leading-relaxed ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                    {prop.description}
                  </p>
                </GlassCard>
              </motion.div>
            ))}
          </div>

          {/* Coming Soon Section */}
          <GlassCard className="p-8 md:p-12 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold mb-4 text-gradient">
                Pricing Coming Soon
              </h2>
              <p className={`text-xl mb-6 max-w-2xl mx-auto ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                We're currently working on our pricing model based on extensive user research and testing.
                Our goal is to make quality education accessible to everyone.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="primary" size="lg">
                  Join Waitlist for Updates
                </Button>
                <Button variant="secondary" size="lg">
                  Learn More About Our Mission
                </Button>
              </div>
            </motion.div>
          </GlassCard>

          {/* FAQ Section */}
          <GlassCard className="p-8 md:p-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold mb-4 text-gradient">
                Frequently Asked Questions
              </h2>
              <p className={`text-lg ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                Everything you need to know about Tuitionly pricing
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="space-y-3"
                >
                  <h3 className="text-xl font-semibold">{faq.question}</h3>
                  <p className={`text-base leading-relaxed ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                    {faq.answer}
                  </p>
                </motion.div>
              ))}
            </div>
          </GlassCard>

          {/* CTA Section */}
          <GlassCard className="p-8 md:p-12 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold mb-4 text-gradient">
                Ready to Transform Your Learning?
              </h2>
              <p className={`text-xl mb-8 max-w-2xl mx-auto ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                Join thousands of students already using Tuitionly to achieve their academic goals.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="primary" size="lg">
                  Join the Waitlist
                </Button>
                <Button variant="secondary" size="lg">
                  Try Demo
                </Button>
              </div>
            </motion.div>
          </GlassCard>
        </motion.div>
      </div>
    </main>
  );
};

export default PricingPage;
