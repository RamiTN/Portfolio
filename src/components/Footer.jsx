export default function Navbar() {
  return (
    <footer className="py-12 px-6 border-t bg-gray-900 text-center text-white">
  <div className="text-2xl font-bold mb-2">Mohamed Rami Abbassi</div>
  <p className="text-gray-300">Web Designer & Web Developer</p>
  <p className="text-sm text-gray-400 mt-4">© 2025 All rights reserved.</p>

  {/* Social icons */}
  <div className="flex justify-center gap-6 mt-6">
    {/* LinkedIn */}
    <a href="https://www.linkedin.com/in/mohamed-rami-abbassi-786253340/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500 transition">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="2em" height="2em" fill="currentColor">
        <path d="M4.98 3.5C4.98 4.6 4.1 5.5 3 5.5s-1.98-.9-1.98-2S1.9 1.5 3 1.5s1.98.9 1.98 2zM.5 8.5h5V24h-5V8.5zm7.5 0h4.8v2.2h.1c.7-1.3 2.5-2.2 5.1-2.2 5.4 0 6.4 3.5 6.4 8V24h-5v-7.5c0-1.8 0-4.1-2.5-4.1-2.5 0-2.9 2-2.9 4V24h-5V8.5z"/>
      </svg>
    </a>

    {/* Facebook */}
    <a href="https://www.facebook.com/rami.abbassi.477961" target="_blank" rel="noopener noreferrer" className="hover:text-blue-700 transition">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="2em" height="2em" fill="currentColor">
        <path d="M22 0H2C.9 0 0 .9 0 2v20c0 1.1.9 2 2 2h10V14h-3v-4h3V7.5c0-3 1.8-4.5 4.4-4.5 1.3 0 2.4.1 2.7.1v3H17c-1.3 0-1.6.6-1.6 1.5V10h3.2l-.4 4H15v10h7c1.1 0 2-.9 2-2V2c0-1.1-.9-2-2-2z"/>
      </svg>
    </a>

    {/* GitHub */}
    <a href="https://github.com/RamiTN" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300 transition">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="2em" height="2em" fill="currentColor">
        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.44 9.8 8.2 11.39.6.11.82-.26.82-.58v-2.16c-3.34.73-4.04-1.61-4.04-1.61-.55-1.38-1.34-1.75-1.34-1.75-1.09-.75.08-.73.08-.73 1.2.08 1.83 1.23 1.83 1.23 1.07 1.84 2.8 1.31 3.48 1 .11-.78.42-1.31.76-1.61-2.66-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.23-3.22-.12-.3-.53-1.52.12-3.17 0 0 1-.32 3.3 1.23a11.5 11.5 0 0 1 6 0c2.3-1.55 3.3-1.23 3.3-1.23.65 1.65.24 2.87.12 3.17.77.84 1.23 1.91 1.23 3.22 0 4.61-2.81 5.62-5.49 5.92.43.37.81 1.1.81 2.22v3.29c0 .32.21.7.82.58C20.56 21.8 24 17.3 24 12c0-6.63-5.37-12-12-12z"/>
      </svg>
    </a>
  </div>
</footer>

      );
}