import { useState, useEffect } from "react";


export default function Home() {
    const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 1) setShowButton(true);
      else setShowButton(false);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Introduction */}
      <section className="bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-white py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8">Introduction</h2>
          <p className="text-lg leading-relaxed opacity-90">
            I am a dedicated and ambitious web developer with a deep passion for creating digital experiences that feel modern, intuitive,
            and meaningful. What motivates me the most is the idea of turning simple concepts into fully functional, visually compelling
            websites that people enjoy using. Every project I work on is an opportunity to learn something new, experiment with different
            ideas, and improve both my technical and creative skills. I focus on writing clean, organized code and designing layouts that
            are not only aesthetically pleasing but also practical and easy to navigate. I strongly believe that good design is not just
            about appearance, but about clarity, accessibility, and the ability to guide users naturally through the content. Outside of
            coding, I constantly explore new tools, frameworks, and industry trends to stay updated with the fast-evolving digital landscape.
            This mindset helps me approach challenges with confidence, adapt quickly, and deliver results that reflect quality, intention,
            and professionalism. Ultimately, my goal is to build experiences that leave a positive impression, support the objectives of
            clients or users, and contribute to a web that feels more human, efficient, and enjoyable for everyone. If you want my services feel free to{' '}
            <a href="#contact" className="font-bold underline hover:text-yellow-300 transition">contact me</a>.
          </p>
        </div>
      </section>

      {/* Statistics */}
      <section id="stats" className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-8 text-center">Statistics</h2>
          <div className="bg-gray-50 rounded-3xl p-12">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              <div>
                <div className="text-4xl font-bold text-purple-600">3+</div>
                <div className="text-gray-600 text-sm mt-2">Years of learning</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-pink-600">5+</div>
                <div className="text-gray-600 text-sm mt-2">Projects created</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-red-600">100%</div>
                <div className="text-gray-600 text-sm mt-2">Commitment to improve</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-purple-600">24/7</div>
                <div className="text-gray-600 text-sm mt-2">Learning mindset</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="py-16 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-8 text-center">Personal Projects</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl p-4 shadow hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="w-full h-64 md:h-80 overflow-hidden rounded-2xl mb-4 bg-gray-200">
                <img
                  src="/image.png"
                  className="w-full h-full object-cover object-top"
                  alt="MovieNight Project"
                />
              </div>
              <h3 className="text-2xl font-bold mb-2">MovieNight®</h3>
              <p className="text-gray-500 mb-4">Web Development</p>
              <a
                href="https://movienight.42web.io/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-6 py-2 bg-purple-500 text-white rounded-lg hover:bg-purple-600 transition"
              >
                Visit Website
              </a>
            </div>

            <div className="bg-white rounded-2xl p-4 shadow hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="w-full h-64 md:h-80 overflow-hidden rounded-2xl mb-4 bg-gray-200">
                <img
                  src="/tictactoe.png"
                  className="w-full h-full object-cover"
                  alt="TicTacToe Project"
                />
              </div>
              <h3 className="text-2xl font-bold mb-2">TicTacToe Game®</h3>
              <p className="text-gray-500 mb-4">Web Development</p>
              <a 
                href="https://tictactoe-game.gamer.gd/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-6 py-2 bg-purple-500 text-white rounded-lg hover:bg-purple-600 transition"
              >
                Visit Website
              </a>
            </div>
          </div>

          <div className="mt-8">
            <a
              href="https://github.com/RamiTN"
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl p-8 text-center text-white hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              <h3 className="text-2xl font-bold mb-2">Want to see more?</h3>
              <p className="opacity-90">Check out my other projects on GitHub →</p>
            </a>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="offers" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">What I Offer</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100">
              <div className="text-4xl mb-4">🎨</div>
              <h3 className="text-2xl font-bold mb-2">Web Design</h3>
              <p className="text-gray-600">Clean, user-centered UI design that puts your visitors first.</p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100">
              <div className="text-4xl mb-4">💻</div>
              <h3 className="text-2xl font-bold mb-2">Web Development</h3>
              <p className="text-gray-600">Fast, responsive websites built with modern technologies.</p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100">
              <div className="text-4xl mb-4">🚀</div>
              <h3 className="text-2xl font-bold mb-2">Full Solution</h3>
              <p className="text-gray-600">Complete service from design concept to launch and beyond.</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 bg-gray-900">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-12 grid-cols-1 gap-12">
            {/* Left info */}
            <div className="md:col-span-5">
              <div className="flex gap-2 items-center justify-start mb-6">
                <span className="w-3 h-3 rounded-full bg-green-500 animate-pulse"></span>
                <span className="font-medium text-sm text-white">Available for projects</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
                Let's discuss your project and take it to the next level
              </h2>

              {/* Contact info */}
              <div className="space-y-6 pb-8 border-b border-gray-700">
                <div>
                  <span className="text-gray-400 text-sm block mb-2">Phone</span>
                  <a href="tel:+21694477211" className="text-white text-lg hover:text-purple-400 transition">
                    +216 94 47 72 11
                  </a>
                </div>
                <div>
                  <span className="text-gray-400 text-sm block mb-2">Email</span>
                  <a href="mailto:ramiabbassi53@gmail.com" className="text-white text-lg hover:text-purple-400 transition break-all">
                    ramiabbassi53@gmail.com
                  </a>
                </div>
                <div>
                  <span className="text-gray-400 text-sm block mb-2">Location</span>
                  <p className="text-white text-lg">Tunis, Tunisia</p>
                </div>
              </div>
            </div>

            {/* Right CV section */}
            <div className="md:col-span-7">
              <div className="bg-white-600 rounded-2xl p-8 shadow-xl h-full flex flex-col items-center justify-center text-center">
                <div className="mb-8">
                  <div className="text-6xl mb-4">📄</div>
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">Check My CV</h3>
                  <p className="text-gray-600">Download my curriculum vitae to learn more about my experience and skills</p>
                </div>
                <a
                  href="/cv.pdf"
                  download
                  className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  Download CV here
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
{showButton && (
  <button
    onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
    className="fixed bottom-6 right-6 bg-purple-600 text-white p-4 rounded-full shadow-lg hover:bg-purple-700 transition z-50"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
      width="20"
      height="20"
      fill="currentColor"
    >
      <path d="M352.062 496h-192V295.993L16.047 296l.037-38.688L256.318 17.364L496 257.7v38.278l-143.938.006Zm-160-32h128V263.984l137.007-.006L256.274 62.636L54.672 264l137.39-.008Z"></path>
    </svg>
  </button>
)}
    </div>
  );
}