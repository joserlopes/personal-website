import { Github, Mail, Linkedin } from "lucide-react";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="bg-white shadow-sm">
        <div className="max-w-5xl mx-auto px-4 py-3">
          <div className="flex justify-between items-center">
            <span className="text-xl font-semibold text-gray-800">
              José Lopes
            </span>
            <div className="space-x-6">
              <a href="#about" className="text-gray-600 hover:text-gray-900">
                About
              </a>
              <a href="#projects" className="text-gray-600 hover:text-gray-900">
                Projects
              </a>
              <a href="#contact" className="text-gray-600 hover:text-gray-900">
                Contact
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="bg-white">
        <div className="max-w-5xl mx-auto px-4 py-20">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Hello, I'm José Lopes
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Software Developer | Tech Enthusiast | Problem Solver
            </p>
            <div className="flex justify-center space-x-4">
              <a
                href="https://github.com/joserlopes"
                target="_blank"
                className="text-gray-600 hover:text-gray-900"
              >
                <Github size={24} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                className="text-gray-600 hover:text-gray-900"
              >
                <Linkedin size={24} />
              </a>
              <a
                href="mailto:your@email.com"
                target="_blank"
                className="text-gray-600 hover:text-gray-900"
              >
                <Mail size={24} />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* About Section */}
      <section id="about" className="bg-gray-50 py-20">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            About Me
          </h2>
          <p className="text-gray-600 leading-relaxed">
            I'm a passionate software developer with experience in building
            modern web applications. I love working with technologies like
            React, Next.js, and Node.js to create elegant solutions to complex
            problems.
          </p>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="bg-white py-20">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Project Card */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                College Projects
              </h3>
              <p className="text-gray-600 mb-4">
                In my GitHub, you can find a collection of the projects I have
                developed while studying in College.
              </p>
              <a
                href="https://github.com/joserlopes/joserlopes/blob/main/ist.md"
                target="_blank"
                className="text-blue-600 hover:text-blue-800"
              >
                View Projects →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="bg-gray-50 py-20">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Get in Touch
          </h2>
          <p className="text-gray-600 mb-8">
            I'm always open to discussing new projects and opportunities.
          </p>
          <a
            href="mailto:your@email.com"
            className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700"
          >
            Send me an email
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white py-8">
        <div className="max-w-5xl mx-auto px-4 text-center text-gray-600">
          <p>© {new Date().getFullYear()} José Lopes. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
