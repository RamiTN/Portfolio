import React, { useState } from 'react';
import { ChevronDown, Mail, Github, Linkedin } from 'lucide-react';

export default function Portfolio() {
  const [openFaq, setOpenFaq] = useState(null);

  const projects = [
    {
      id: 1,
      title: 'Raincoat ®',
      tags: 'UI/UX Design, Web Development',
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop',
      color: 'from-blue-500/20 to-purple-500/20'
    },
    {
      id: 2,
      title: 'Moisturiser ®',
      tags: 'Branding, Web Development',
      image: 'https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=800&h=600&fit=crop',
      color: 'from-pink-500/20 to-orange-500/20'
    },
    {
      id: 3,
      title: 'Speed ®',
      tags: 'Product Design, App Development',
      image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800&h=600&fit=crop',
      color: 'from-green-500/20 to-teal-500/20'
    },
    {
      id: 4,
      title: 'Greendale ®',
      tags: 'Web Development, Interactive Design',
      image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&h=600&fit=crop',
      color: 'from-emerald-500/20 to-cyan-500/20'
    },
    {
      id: 5,
      title: 'Podcast ®',
      tags: 'E-commerce UX, Web Development',
      image: 'https://images.unsplash.com/photo-1590650153855-d9e808231d41?w=800&h=600&fit=crop',
      color: 'from-violet-500/20 to-purple-500/20'
    },
    {
      id: 6,
      title: 'Perfume ®',
      tags: 'Motion Design, Interactive UI',
      image: 'https://images.unsplash.com/photo-1541643600914-78b084683601?w=800&h=600&fit=crop',
      color: 'from-rose-500/20 to-pink-500/20'
    }
  ];

  const faqs = [
    {
      q: "Who do you work with?",
      a: "I collaborate with entrepreneurs, startups, creative professionals, and growing businesses looking for high-quality web design and development solutions tailored to their brand."
    },
    {
      q: "What makes your design approach unique?",
      a: "I craft visually engaging, user-friendly websites optimized for performance, accessibility, and conversion—ensuring your brand stands out and connects with your audience."
    },
    {
      q: "Do you offer full-service design and development?",
      a: "Yes! I provide end-to-end solutions, including UX/UI design, front-end and no-code development, and full website launches tailored to your needs."
    },
    {
      q: "What's your process like?",
      a: "My process includes strategy & research, wireframing, design, development, testing, and launch—all with regular collaboration and feedback to align with your goals."
    },
    {
      q: "How long does a project typically take?",
      a: "Project timelines vary based on scope, but a standard website takes 3–6 weeks from concept to completion, ensuring high quality and attention to detail."
    },
    {
      q: "Do you provide ongoing support?",
      a: "Yes! I provide post-launch support, updates, and maintenance plans to keep your website secure, optimized, and up-to-date."
    },
    {
      q: "How do I get started?",
      a: "Just reach out via my contact form, and we'll discuss your project, goals, and next steps to bring your vision to life!"
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur-lg border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-xl font-bold tracking-tight">Martha Rae</div>
          <div className="flex gap-6 items-center">
            <a href="#work" className="hover:text-gray-400 transition-colors">Work</a>
            <a href="#about" className="hover:text-gray-400 transition-colors">About</a>
            <a href="#faq" className="hover:text-gray-400 transition-colors">FAQ</a>
            <button className="bg-white text-black px-6 py-2 rounded-full hover:bg-gray-200 transition-all font-medium">
              Contact
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-4xl">
            <h1 className="text-7xl font-bold mb-6 leading-tight">
              Shaping digital<br />products
            </h1>
            <p className="text-xl text-gray-400 max-w-2xl">
              Projects that blend creativity and usability — built with care and curiosity.
            </p>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section id="work" className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, idx) => (
              <div
                key={project.id}
                className="group cursor-pointer"
                style={{ animationDelay: `${idx * 100}ms` }}
              >
                <div className="relative overflow-hidden rounded-2xl aspect-[4/3] mb-4">
                  <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <h3 className="text-2xl font-bold mb-2 group-hover:text-gray-300 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-500 text-sm">{project.tags}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-32 px-6 bg-zinc-950">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-5xl font-bold mb-16">Frequently asked questions</h2>
          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                className="border border-white/10 rounded-2xl overflow-hidden bg-black/40"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full px-8 py-6 flex justify-between items-center hover:bg-white/5 transition-colors"
                >
                  <span className="text-lg font-medium text-left">{faq.q}</span>
                  <ChevronDown
                    className={`w-5 h-5 transition-transform duration-300 ${
                      openFaq === idx ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    openFaq === idx ? 'max-h-96' : 'max-h-0'
                  }`}
                >
                  <p className="px-8 pb-6 text-gray-400 leading-relaxed">{faq.a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 px-6 border-t border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div>
              <div className="text-2xl font-bold mb-2">Martha Rae</div>
              <p className="text-gray-500">Freelance Designer & Creative</p>
            </div>
            <div className="flex gap-6">
              <a href="#" className="hover:text-gray-400 transition-colors">
                <Mail className="w-6 h-6" />
              </a>
              <a href="#" className="hover:text-gray-400 transition-colors">
                <Github className="w-6 h-6" />
              </a>
              <a href="#" className="hover:text-gray-400 transition-colors">
                <Linkedin className="w-6 h-6" />
              </a>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-white/10 text-center text-gray-500 text-sm">
            © 2025 Martha Rae. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}