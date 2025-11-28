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
          className="section-animate bg-gradient-to-b from-gray-800 to-purple-600 text-white min-h-screen flex items-center justify-center px-6"
        >
          <div className="max-w-7xl mx-auto w-full flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="md:w-1/2 text-center md:text-left">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">Hello !</h2>
              <h3 className="text-3xl md:text-4xl font-extrabold mb-6">
                I'm Abbassi Mohamed Rami
              </h3>
              <p className="text-lg leading-relaxed max-w-lg mx-auto md:mx-0 opacity-90 mb-8">
                I'm a passionate web developer focused on creating modern and intuitive websites. I enjoy turning ideas into
                functional, visually appealing projects while writing clean, organized code. Always learning new tools,
                I aim to deliver experiences that are user-friendly and professional. Feel free to{" "}
                <a href="#contact" className="font-bold underline hover:text-yellow-300 transition">
                  contact me
                </a>
                .
              </p>
            </div>
            <div className="md:w-1/2 flex justify-center">
              <img
                src="/computer-removebg-preview.png"
                alt="Abbassi Mohamed Rami working on computer"
                className="w-full max-w-md drop-shadow-2xl"
              />
            </div>
          </div>
        </section>

        {/* Statistics with Animated Counters */}
        <section ref={statsRef} id="stats" className="section-animate py-20 px-6">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">Statistics</h2>
            <div className="bg-gray-50 rounded-3xl p-12 shadow-xl">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                <CounterCard end={3} suffix="+" label="Years of learning" color="text-purple-600" />
                <CounterCard end={5} suffix="+" label="Projects created" color="text-pink-600" />
                <CounterCard end={100} suffix="%" label="Commitment to improve" color="text-red-600" />
                <CounterCard end={24} label="Learning mindset" color="text-purple-600" />
              </div>
            </div>
          </div>
        </section>

        {/* Projects */}
        <section ref={projectsRef} id="projects" className="section-animate py-20 px-6 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">Personal Projects</h2>
            <div className="grid md:grid-cols-2 gap-12">
              <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                <img src="/image.png" alt="MovieNight Project" className="w-full h-64 object-cover" />
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-2">MovieNight®</h3>
                  <p className="text-gray-500 mb-4">Web Development</p>
                  <a
                    href="https://movienight.42web.io/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition"
                  >
                    Visit Website
                  </a>
                </div>
              </div>

              <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                <img src="/tictactoe.png" alt="TicTacToe Project" className="w-full h-64 object-cover" />
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-2">TicTacToe Game®</h3>
                  <p className="text-gray-500 mb-4">Web Development</p>
                  <a
                    href="https://tictactoe-game.gamer.gd/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition"
                  >
                    Visit Website
                  </a>
                </div>
              </div>
            </div>

            <div className="mt-12 text-center">
              <a
                href="https://github.com/RamiTN"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl px-10 py-8 text-white hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
              >
                <h3 className="text-3xl font-bold mb-2">Want to see more?</h3>
                <p className="text-lg">Check out my other projects on GitHub →</p>
              </a>
            </div>
          </div>
        </section>

        {/* Services */}
        <section ref={offersRef} id="offers" className="section-animate py-20 px-6">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">What I Offer</h2>
            <div className="grid md:grid-cols-3 gap-10">
              {[
                { emoji: "🎨", title: "Web Design", desc: "Clean, user-centered UI design that puts your visitors first." },
                { emoji: "💻", title: "Web Development", desc: "Fast, responsive websites built with modern technologies." },
                { emoji: "🚀", title: "Full Solution", desc: "Complete service from design concept to launch and beyond." },
              ].map((service) => (
                <div
                  key={service.title}
                  className="bg-white p-10 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 hover:bg-gray-50"
                >
                  <div className="text-5xl mb-6">{service.emoji}</div>
                  <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
                  <p className="text-gray-600">{service.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact */}
        <section ref={contactRef} id="contact" className="section-animate py-20 px-6 bg-gray-900 text-white">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-12 gap-12">
              <div className="md:col-span-5">
                <div className="flex items-center gap-3 mb-8">
                  <span className="w-3 h-3 rounded-full bg-green-500 animate-pulse"></span>
                  <span className="font-medium">Available for projects</span>
                </div>
                <h2 className="text-4xl md:text-5xl font-bold mb-10">
                  Let's discuss your project and take it to the next level
                </h2>
                <div className="space-y-8 border-b border-gray-700 pb-10">
                  <div>
                    <p className="text-gray-400 text-sm mb-1">Phone</p>
                    <a href="tel:+21694477211" className="text-xl hover:text-purple-400 transition">+216 94 47 72 11</a>
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm mb-1">Email</p>
                    <a href="mailto:ramiabbassi53@gmail.com" className="text-xl hover:text-purple-400 transition break-all">
                      ramiabbassi53@gmail.com
                    </a>
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm mb-1">Location</p>
                    <p className="text-xl">Tunis, Tunisia</p>
                  </div>
                </div>
              </div>

              <div className="md:col-span-7">
                <div className="bg-gradient-to-br from-purple-600 to-pink-600 rounded-2xl p-10 shadow-2xl text-center text-white flex flex-col justify-center h-full">
                  <div className="text-7xl mb-6">📄</div>
                  <h3 className="text-3xl md:text-4xl font-bold mb-4">Check My CV</h3>
                  <p className="text-lg mb-8 opacity-90">
                    Download my curriculum vitae to learn more about my experience and skills
                  </p>
                  <a
                    href="mycv.pdf"
                    download
                    className="inline-flex items-center gap-3 px-8 py-4 bg-gray-800 text-white rounded-lg font-bold hover:bg-gray-100 hover:text-gray-800 transition transform hover:scale-105 shadow-lg"
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    Download CV here
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
            className="fixed bottom-8 right-8 bg-purple-600 text-white p-4 rounded-full shadow-2xl hover:bg-purple-700 transition z-50"
            aria-label="Back to top"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="24" height="24" fill="currentColor">
              <path d="M352.062 496h-192V295.993L16.047 296l.037-38.688L256.318 17.364L496 257.7v38.278l-143.938.006Zm-160-32h128V263.984l137.007-.006L256.274 62.636L54.672 264l137.39-.008Z" />
            </svg>
          </button>
        )}
      </div>
    </>
  );
}