import React from "react";

const Contact = () => {
  const contactOptions = [
    { icon: "✉️", label: "Send Email", href: "mailto:surendramadduri665@gmail.com", color: "from-blue-500 to-cyan-500" },
    { icon: "💼", label: "LinkedIn", href: "https://linkedin.com/in/madduri-surendra-nath", color: "from-blue-600 to-blue-700" },
    { icon: "💻", label: "GitHub", href: "https://github.com/Surendra029", color: "from-gray-700 to-gray-900" },
    { icon: "📱", label: "+91 8096224590", href: "tel:+918096224590", color: "from-purple-500 to-pink-500" }
  ];

  return (
    <section id="contact" className="w-full py-24 bg-gradient-to-b from-gray-900 via-blue-900 to-gray-900 text-white relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500 rounded-full opacity-20 blur-3xl animate-pulse"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500 rounded-full opacity-20 blur-3xl animate-pulse" style={{ animationDelay: "1s" }}></div>

      <div className="w-full px-4 sm:px-6 md:px-12 lg:px-20 xl:px-32 2xl:px-48 text-center relative z-10">
        <h2 className="text-5xl font-black mb-4 tracking-tight bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-pulse">
          Let's Build Something Epic 🚀
        </h2>

        <p className="text-xl text-gray-300 mb-8">
          Available for freelance projects, consulting, and full-time opportunities.
        </p>
        
        <p className="text-gray-400 mb-12 text-lg">
          Let's create something extraordinary together.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {contactOptions.map((option, index) => (
            <a
              key={index}
              href={option.href}
              target={option.href.startsWith("http") ? "_blank" : undefined}
              rel={option.href.startsWith("http") ? "noreferrer" : undefined}
              className={`group relative overflow-hidden px-6 py-6 font-black text-lg transition-all duration-300 transform hover:scale-110`}
              style={{ animation: `scaleIn 0.6s ease-out ${index * 0.1}s both` }}
            >
              {/* Gradient background */}
              <div className={`absolute inset-0 bg-gradient-to-r ${option.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
              
              {/* Content */}
              <div className="relative z-10 flex flex-col items-center gap-2">
                <span className="text-3xl group-hover:scale-125 transition-transform duration-300">{option.icon}</span>
                <span className="text-xs md:text-sm">{option.label}</span>
              </div>
              
              {/* Border */}
              <div className="absolute inset-0 border-2 border-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </a>
          ))}
        </div>

        <div className="border-t-2 border-gray-700 pt-8">
          <p className="text-gray-400 text-sm mb-4 animate-bounce">📧 Or reach out directly</p>
          <a
            href="mailto:surendramadduri665@gmail.com"
            className="text-2xl font-black text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text hover:from-pink-400 hover:via-purple-400 hover:to-blue-400 transition-all duration-300 inline-block transform hover:scale-110"
          >
            surendramadduri665@gmail.com
          </a>
        </div>
      </div>

      <style>{`
        @keyframes scaleIn {
          from { opacity: 0; transform: scale(0.3); }
          50% { transform: scale(1.05); }
          to { opacity: 1; transform: scale(1); }
        }
      `}</style>
    </section>
  );
};

export default Contact;
