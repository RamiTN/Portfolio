import React, { useState, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';

export default function Home() {
  const [openFaq, setOpenFaq] = useState(null);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const projects = [
    {
      title: 'Raincoat ®',
      tags: 'UI/UX Design, Web Development',
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop'
    },
    {
      title: 'Moisturiser ®',
      tags: 'Branding, Web Development',
      image: 'https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=800&h=600&fit=crop'
    },
    {
      title: 'Speed ®',
      tags: 'Product Design, App Development',
      image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800&h=600&fit=crop'
    },
    {
      title: 'Greendale ®',
      tags: 'Web Development, Interactive Design',
      image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&h=600&fit=crop'
    }
  ];

  const services = [
    {
      title: 'Web Design',
      desc: 'Crafting clean, user-centered interfaces using Figma — from wireframes to high-fidelity visuals that elevate your brand\'s look and feel.'
    },
    {
      title: 'Web Development',
      desc: 'Building smooth, responsive websites with Framer — no-code, fast-loading, and optimized across devices for performance and interactivity.'
    },
    {
      title: 'Full Solution',
      desc: 'Delivering end-to-end digital solutions — from design in Figma to launch in Framer, including strategy, setup, and ongoing support.'
    }
  ];

  const testimonials = [
    { name: 'Emily Carter', role: 'Startup Founder', text: 'Felt seamless from start to finish. They understood our brand instantly and delivered beyond expectations.' },
    { name: 'Daniel Lee', role: 'Marketing Director', text: 'A rare blend of creative talent and technical precision. I would definitely recommend their services.' },
    { name: 'Jasmine Torres', role: 'Creative Producer', text: 'They were responsive, thoughtful, and brought a lot of clarity to our website project. I love the final result!' },
    { name: 'Marcus Bell', role: 'eCommerce Owner', text: 'Super professional and detail-oriented. They brought our online store to life with smooth UX and clean design.' },
    { name: 'Amina Kim', role: 'Product Manager', text: 'Every interaction felt purposeful. The design process was collaborative and the final outcome speaks for itself.' },
    { name: 'Tomás Álvarez', role: 'Art Director', text: 'A beautifully crafted site that truly represents our brand. Would love to work together again on future campaigns.' }
  ];

  const faqs = [
    { q: "Who do you work with?", a: "I collaborate with entrepreneurs, startups, creative professionals, and growing businesses looking for high-quality web design and development solutions tailored to their brand." },
    { q: "What makes your design approach unique?", a: "I craft visually engaging, user-friendly websites optimized for performance, accessibility, and conversion—ensuring your brand stands out and connects with your audience." },
    { q: "Do you offer both design and development services?", a: "Yes! I provide end-to-end solutions, including UX/UI design, front-end and no-code development, and full website launches tailored to your needs." },
    { q: "What's your process like?", a: "My process includes strategy & research, wireframing, design, development, testing, and launch—all with regular collaboration and feedback to align with your goals." },
    { q: "How long does a project typically take?", a: "Project timelines vary based on scope, but a standard website takes 3–6 weeks from concept to completion, ensuring high quality and attention to detail." },
    { q: "Do you offer ongoing support and maintenance?", a: "Yes! I provide post-launch support, updates, and maintenance plans to keep your website secure, optimized, and up-to-date." },
    { q: "How do we get started?", a: "Just reach out via my contact form, and we'll discuss your project, goals, and next steps to bring your vision to life!" }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-lg border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-xl font-bold">Martha Rae</div>
          <button className="bg-black text-white px-6 py-2.5 rounded-full hover:bg-gray-800 transition-all text-sm font-medium">
            Let's connect
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&h=700&fit=crop"
                alt="Hero"
                className="rounded-3xl w-full object-cover"
                style={{ aspectRatio: '3/4' }}
              />
            </div>
            <div>
              <h1 className="text-5xl font-bold mb-6 leading-tight">
                Web & product design specialist
              </h1>
              <p className="text-lg text-gray-600 leading-relaxed">
                I help creative professionals, freelancers, and growing brands bring their digital vision to life — from designing clean, scalable interfaces in Figma to building responsive, no-code websites in Framer. My work blends clarity, performance, and storytelling to deliver digital experiences that truly connect.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Card */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="bg-gray-50 rounded-3xl p-8 md:p-12">
            <div className="flex items-center gap-4 mb-8">
              <img
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop"
                alt="Profile"
                className="w-16 h-16 rounded-full object-cover"
              />
              <div>
                <div className="font-bold text-lg">Martha Rae®</div>
                <div className="text-gray-600 text-sm">Crafting websites & digital products</div>
              </div>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div>
                <div className="text-4xl font-bold mb-1">5+</div>
                <div className="text-gray-600 text-sm">Years industry experience</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-1">50+</div>
                <div className="text-gray-600 text-sm">Projects completed</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-1">98%</div>
                <div className="text-gray-600 text-sm">Client satisfaction rate</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-1">24/7</div>
                <div className="text-gray-600 text-sm">Support & maintenance</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, idx) => (
              <div key={idx} className="group cursor-pointer">
                <div className="relative overflow-hidden rounded-2xl aspect-[4/3] mb-4 bg-gray-100">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-500">{project.tags}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-block bg-black text-white px-4 py-1 rounded-full text-sm mb-4">3</div>
            <h2 className="text-4xl font-bold">What I offer</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, idx) => (
              <div key={idx} className="bg-white rounded-2xl p-8 hover:shadow-lg transition-shadow">
                <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-4">
            <div className="text-sm text-gray-500 mb-2">Trusted by brands & founders</div>
            <h2 className="text-3xl font-bold mb-12">What clients say</h2>
          </div>
          <div className="relative">
            <div className="bg-gray-50 rounded-3xl p-8 md:p-12">
              <p className="text-xl md:text-2xl leading-relaxed mb-8">
                "{testimonials[currentTestimonial].text}"
              </p>
              <div>
                <div className="font-bold text-lg">{testimonials[currentTestimonial].name}</div>
                <div className="text-gray-600">{testimonials[currentTestimonial].role}</div>
              </div>
            </div>
            <div className="flex justify-center gap-2 mt-6">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentTestimonial(idx)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    idx === currentTestimonial ? 'bg-black w-8' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold mb-12">Frequently asked questions</h2>
          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div key={idx} className="bg-white rounded-2xl overflow-hidden border border-gray-200">
                <button
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full px-6 py-5 flex justify-between items-center hover:bg-gray-50 transition-colors text-left"
                >
                  <span className="font-medium pr-4">{faq.q}</span>
                  <ChevronDown
                    className={`w-5 h-5 flex-shrink-0 transition-transform ${
                      openFaq === idx ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    openFaq === idx ? 'max-h-96' : 'max-h-0'
                  }`}
                >
                  <p className="px-6 pb-5 text-gray-600 leading-relaxed">{faq.a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-gray-200">
        <div className="max-w-6xl mx-auto text-center">
          <div className="text-2xl font-bold mb-2">Martha Rae</div>
          <p className="text-gray-600 mb-6">Freelance Designer & Creative</p>
          <p className="text-sm text-gray-500">© 2025 Martha Rae. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}