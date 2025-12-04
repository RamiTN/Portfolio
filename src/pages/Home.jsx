import { useState, useEffect, useRef } from "react";

function CounterCard({ end, suffix = "", label, color }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          let start = 0;
          const duration = 2000;
          const increment = end / (duration / 16);

          const timer = setInterval(() => {
            start += increment;
            if (start >= end) {
              setCount(end);
              clearInterval(timer);
            } else {
              setCount(Math.floor(start));
            }
          }, 16);

          return () => clearInterval(timer);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [end]);

  const displayValue = end === 24 ? (count === 24 ? "24/7" : count) : `${count}${suffix}`;

  return (
    <div ref={ref}>
      <div className={`text-5xl md:text-6xl font-bold ${color} tabular-nums`}>
        {displayValue}
      </div>
      <div className="text-gray-600 mt-3 text-sm md:text-base">{label}</div>
    </div>
  );
}

export default function Home() {
  const [showButton, setShowButton] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const introRef = useRef(null);
  const statsRef = useRef(null);
  const projectsRef = useRef(null);
  const offersRef = useRef(null);
  const contactRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setShowButton(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-in");
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -50px 0px" }
    );

    [introRef, statsRef, projectsRef, offersRef, contactRef].forEach((ref) => {
      if (ref.current) observer.observe(ref.current);
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener("click", (e) => {
        e.preventDefault();
        const target = document.querySelector(anchor.getAttribute("href"));
        if (target) {
          target.scrollIntoView({ behavior: "smooth" });
        }
      });
    });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const formDataToSend = new FormData(form);
    
    fetch("https://formsubmit.co/b5348e156d3e17151f1f904bd9a3de17", {
      method: "POST",
      body: formDataToSend
    }).then(() => {
      alert("Message sent successfully!");
      setFormData({ name: '', email: '', subject: '', message: '' });
    }).catch(() => {
      alert("Failed to send message. Please try again.");
    });
  };

  return (
    <>
      <div className="min-h-screen bg-white text-gray-900 overflow-x-hidden">
        <style jsx>{`
          @keyframes fadeUp {
            from {
              opacity: 0;
              transform: translateY(40px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
          .section-animate {
            opacity: 0;
            transition: all 0.8s ease-out;
          }
          .section-animate.animate-in {
            opacity: 1;
            animation: fadeUp 0.8s ease-out forwards;
          }
        `}</style>



        {/* Introduction */}
        <section
          ref={introRef}
          id="intro"
          className="section-animate min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-indigo-900 text-white flex items-center justify-center px-6 py-24"
        >
          <h1 className="sr-only">Rami Abbassi — Web Developer Portfolio</h1>
          <div className="max-w-7xl mx-auto w-full grid md:grid-cols-2 gap-16 items-center">
            {/* Text Content */}
            <div className="text-center md:text-left order-2 md:order-1 space-y-6">
              <div className="inline-block px-4 py-2 bg-blue-500/10 border border-blue-400/20 rounded-full text-blue-300 text-sm font-medium mb-4">
                Welcome to my portfolio
              </div>
              <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
                Hello!
                <br />
                <span className="bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent">
                  I'm Rami Abbassi
                </span>
              </h2>
              <p className="text-lg lg:text-xl leading-relaxed text-slate-300 max-w-xl">
                A passionate web developer focused on creating modern and intuitive digital experiences. I transform ideas into
                functional, visually stunning projects with clean, organized code. Always learning, always improving.
              </p>
              <div className="flex gap-4 justify-center md:justify-start pt-4">
                <a
                  href="#contact"
                  className="px-8 py-4 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-lg font-semibold hover:shadow-lg hover:shadow-blue-500/50 transition-all duration-300 transform hover:-translate-y-1"
                >
                  Get in Touch
                </a>
                <a
                  href="#projects"
                  className="px-8 py-4 bg-slate-800 border border-slate-700 rounded-lg font-semibold hover:bg-slate-700 transition-all duration-300"
                >
                  View Projects
                </a>
              </div>
            </div>

            {/* Image */}
            <div className="flex justify-center order-1 md:order-2">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full blur-3xl opacity-20 animate-pulse"></div>
                <img
                  src="/Design_sans_titre-removebg-preview.png"
                  alt="Abbassi Mohamed Rami working on a computer"
                  className="relative w-full max-w-sm lg:max-w-md drop-shadow-2xl hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Statistics with Animated Counters */}
        <section ref={statsRef} id="stats" className="section-animate py-24 px-6 bg-slate-50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4 text-slate-900">My Journey in Numbers</h2>
              <p className="text-slate-600 text-lg">Continuous growth and dedication to excellence</p>
            </div>
<details className="group cursor-pointer">
  <summary className="text-slate-600 text-lg font-medium flex items-center gap-2 cursor-pointer hover:text-slate-800 transition-all">
    More information about the stats
    <span className="transition-transform group-open:rotate-90">›</span>
  </summary>

  <div className="mt-3 pl-1 text-slate-600 space-y-1">
    <p>I have been learning web development for 3 years and I’m willing to continue improving.</p>
    <p>I created more than 5 projects to strengthen my skills.</p>
    <p>I stay fully committed every day and maintain a constant learning mindset to stay updated with new technologies.</p>
  </div>
</details>



            <div className="bg-white rounded-3xl p-12 shadow-xl border border-slate-200">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
                <CounterCard end={3} suffix="+" label="Years of learning" color="text-blue-600" />
                <CounterCard end={5} suffix="+" label="Projects created" color="text-indigo-600" />
                <CounterCard end={100} suffix="%" label="Commitment to improve" color="text-purple-600" />
                <CounterCard end={24} label="Learning mindset" color="text-blue-600" />
              </div>
            </div>
          </div>
        </section>

        {/* Projects */}
        <section ref={projectsRef} id="projects" className="section-animate py-24 px-6 bg-gradient-to-b from-white to-slate-50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4 text-slate-900">Featured Projects</h2>
              <p className="text-slate-600 text-lg">Showcasing my best work and creative solutions</p>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-slate-200">
                <div className="relative overflow-hidden">
                  <img 
                    src="/image.png" 
                    alt="MovieNight Project" 
                    className="w-full h-72 object-cover group-hover:scale-110 transition-transform duration-500" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold mb-2 text-slate-900">MovieNight®</h3>
                  <p className="text-slate-500 mb-6">Full-Stack Web Development • Entertainment Platform</p>
                  <a
                    href="https://movienight.42web.io/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-blue-500/50 transition-all duration-300 transform hover:-translate-y-1"
                  >
                    Visit Website
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </a>
                </div>
              </div>

              <div className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-slate-200">
                <div className="relative overflow-hidden">
                  <img 
                    src="/tictactoe.png" 
                    alt="TicTacToe Project" 
                    className="w-full h-72 object-cover group-hover:scale-110 transition-transform duration-500" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold mb-2 text-slate-900">TicTacToe Game®</h3>
                  <p className="text-slate-500 mb-6">Interactive Web Game • JavaScript Development</p>
                  <a
                    href="https://tictactoe-game.gamer.gd/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-blue-500/50 transition-all duration-300 transform hover:-translate-y-1"
                  >
                    Visit Website
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            <div className="mt-16 text-center">
              <a
                href="https://github.com/RamiTN"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block group"
              >
                <div className="bg-gradient-to-r from-slate-900 to-indigo-900 rounded-2xl px-12 py-10 text-white hover:shadow-2xl hover:shadow-indigo-500/20 transition-all duration-300 transform hover:-translate-y-2 border border-slate-700">
                  <h3 className="text-3xl font-bold mb-3">Explore More Projects</h3>
                  <p className="text-lg text-slate-300 mb-4">Check out my other work on GitHub</p>
                  <span className="inline-flex items-center gap-2 text-blue-400 font-semibold group-hover:gap-4 transition-all">
                    View GitHub Profile
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </span>
                </div>
              </a>
            </div>
          </div>
        </section>

        {/* Services */}
        <section ref={offersRef} id="offers" className="section-animate py-24 px-6 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4 text-slate-900">What I Offer</h2>
              <p className="text-slate-600 text-lg">Comprehensive web solutions tailored to your needs</p></div>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { 
                  emoji: "🎨", 
                  title: "Web Design", 
                  desc: "Clean, user-centered UI/UX design that puts your visitors first and creates memorable experiences.",
                  color: "from-blue-500 to-indigo-600"
                },
                { 
                  emoji: "💻", 
                  title: "Web Development", 
                  desc: "Fast, responsive websites built with modern technologies and best practices for optimal performance.",
                  color: "from-indigo-500 to-purple-600"
                },
                { 
                  emoji: "🚀", 
                  title: "Full Solution", 
                  desc: "Complete end-to-end service from initial concept to launch and ongoing support.",
                  color: "from-purple-500 to-pink-600"
                },
              ].map((service) => (
                <div
                  key={service.title}
                  className="group relative bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-slate-200 overflow-hidden"
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
                  <div className="relative">
                    <div className="text-5xl mb-6 transform group-hover:scale-110 transition-transform duration-300">{service.emoji}</div>
                    <h3 className="text-2xl font-bold mb-4 text-slate-900">{service.title}</h3>
                    <p className="text-slate-600 leading-relaxed">{service.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact */}
        <section ref={contactRef} id="contact" className="section-animate py-24 px-6 bg-gradient-to-br from-slate-900 via-indigo-900 to-slate-900 text-white">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">Let's Work Together</h2>
              <p className="text-slate-300 text-lg">Have a project in mind? I'd love to hear about it</p>
            </div>
            
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-3xl p-10 shadow-2xl border border-slate-700/50">
              <div className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold mb-2 text-slate-200">Your Name</label>
                    <input
                      type="text"
                      id="name"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      required
                      className="w-full px-4 py-3 bg-slate-900/50 border border-slate-600 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition text-white placeholder-slate-400"
                      placeholder="John Doe"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold mb-2 text-slate-200">Your Email</label>
                    <input
                      type="email"
                      id="email"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      required
                      className="w-full px-4 py-3 bg-slate-900/50 border border-slate-600 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition text-white placeholder-slate-400"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-semibold mb-2 text-slate-200">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    value={formData.subject}
                    onChange={(e) => setFormData({...formData, subject: e.target.value})}
                    required
                    className="w-full px-4 py-3 bg-slate-900/50 border border-slate-600 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition text-white placeholder-slate-400"
                    placeholder="Project inquiry"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold mb-2 text-slate-200">Message</label>
                  <textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    required
                    rows="6"
                    className="w-full px-4 py-3 bg-slate-900/50 border border-slate-600 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition resize-none text-white placeholder-slate-400"
                    placeholder="Tell me about your project..."
                  ></textarea>
                </div>

                <button
                  onClick={() => {
                    const mailtoLink = `mailto:your-email@example.com?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`)}`;
                    window.location.href = mailtoLink;
                  }}
                  className="w-full px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-xl font-bold hover:shadow-lg hover:shadow-blue-500/50 transition-all duration-300 transform hover:-translate-y-1"
                >
                  Send Message
                </button>
              </div>

              <div className="mt-10 pt-10 border-t border-slate-700">
                <p className="text-slate-400 text-sm text-center mb-6">Or download my resume</p>
                <div className="flex justify-center">
                  <a
                    href="mycv.pdf"
                    download
                    className="inline-flex items-center gap-3 px-8 py-4 bg-slate-700/50 border border-slate-600 text-white rounded-xl font-semibold hover:bg-slate-700 transition-all duration-300 transform hover:-translate-y-1"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    Download CV
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Back to Top Button */}
        {showButton && (
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="fixed bottom-8 right-8 bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-4 rounded-full shadow-2xl hover:shadow-blue-500/50 hover:scale-110 transition-all duration-300 z-50 border border-blue-400/20"
            aria-label="Back to top"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="20" height="20" fill="currentColor">
              <path d="M352.062 496h-192V295.993L16.047 296l.037-38.688L256.318 17.364L496 257.7v38.278l-143.938.006Zm-160-32h128V263.984l137.007-.006L256.274 62.636L54.672 264l137.39-.008Z" />
            </svg>
          </button>
        )}
      </div>
    </>
  );
}