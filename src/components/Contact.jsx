import React from "react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gray-50 text-gray-900">
      <div className="max-w-3xl mx-auto text-center px-6">
        <h2 className="text-4xl font-black mb-4 tracking-tight">
          Let's Build Something
        </h2>

        <p className="text-lg text-gray-700 mb-10 font-medium">
          Available for freelance projects and full-time opportunities.
        </p>

        <div className="flex flex-col md:flex-row justify-center gap-3">
          <a
            href="mailto:surendramadduri665@gmail.com"
            className="px-6 py-3 bg-gray-900 text-white font-bold hover:bg-gray-800 transition text-sm"
          >
            Email
          </a>

          <a
            href="https://linkedin.com/in/madduri-surendra-nath"
            target="_blank"
            rel="noreferrer"
            className="px-6 py-3 border-2 border-gray-900 text-gray-900 font-bold hover:bg-gray-900 hover:text-white transition text-sm"
          >
            LinkedIn
          </a>

          <a
            href="https://github.com/Surendra029"
            target="_blank"
            rel="noreferrer"
            className="px-6 py-3 border-2 border-gray-900 text-gray-900 font-bold hover:bg-gray-900 hover:text-white transition text-sm"
          >
            GitHub
          </a>

          <a
            href="tel:+918096224590"
            className="px-6 py-3 border-2 border-gray-900 text-gray-900 font-bold hover:bg-gray-900 hover:text-white transition text-sm"
          >
            +91 8096224590
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
