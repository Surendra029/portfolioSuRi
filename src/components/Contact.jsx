import React from "react";


const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-black text-white">
  <div className="max-w-4xl mx-auto text-center px-6">

    <h2 className="text-3xl md:text-4xl font-bold mb-6">
      Get In Touch
    </h2>

    <p className="text-gray-400 mb-10 text-lg">
      I'm currently looking for new opportunities. Whether you have a question
      or just want to say hi, my inbox is always open!
    </p>

    {/* Buttons */}
    <div className="flex flex-col md:flex-row justify-center gap-6">

      <a
        href="mailto:surendramadduri665@gmail.com"
        className="px-6 py-3 border border-blue-500 text-blue-500 rounded-lg hover:bg-blue-500 hover:text-black transition duration-300"
      >
        Say Hello
      </a>

      <a
        href="https://www.linkedin.com/in/surendra-nath-m-4b86192b1"
        target="_blank"
        rel="noreferrer"
        className="px-6 py-3 border border-blue-500 text-blue-500 rounded-lg hover:bg-blue-500 hover:text-black transition duration-300"
      >
        LinkedIn
      </a>

      <a
        href="tel:+918096224590"
        className="px-6 py-3 border border-blue-500 text-blue-500 rounded-lg hover:bg-blue-500 hover:text-black transition duration-300"
      >
        Call Me
      </a>

    </div>

  </div>
</section>
  );
};  
export default Contact;
