import { useState, useEffect } from 'react';
import { Menu, X, Github, Linkedin, Mail, ExternalLink, Code, Briefcase, User, FileText } from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      const sections = ['home', 'about', 'skills', 'experience', 'projects', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  const skills = [
    { category: "Frontend", items: ["React", "TypeScript", "Tailwind CSS", "Next.js"] },
    { category: "Backend", items: ["Node.js", "Python", "PostgreSQL", "REST APIs"] },
    { category: "Tools", items: ["Git", "Docker", "AWS", "CI/CD"] },
    { category: "Soft Skills", items: ["Problem Solving", "Team Leadership", "Agile", "Communication"] }
  ];

  const experiences = [
    {
      title: "[Your Job Title]",
      company: "[Company Name]",
      period: "[Start Date] - [End Date / Present]",
      description: "[Describe your key responsibilities and achievements in this role. Highlight specific projects, technologies used, and impact on the organization.]",
      achievements: [
        "[Achievement or responsibility #1]",
        "[Achievement or responsibility #2]",
        "[Achievement or responsibility #3]"
      ]
    },
    {
      title: "[Previous Job Title]",
      company: "[Previous Company]",
      period: "[Start Date] - [End Date]",
      description: "[Describe your role and contributions here.]",
      achievements: [
        "[Achievement or responsibility #1]",
        "[Achievement or responsibility #2]"
      ]
    }
  ];

  const projects = [
    {
      title: "[Project Name 1]",
      description: "[Brief description of the project, its purpose, and the problem it solves. Explain the technical challenges and your approach.]",
      tech: ["React", "Node.js", "PostgreSQL", "AWS"],
      link: "#",
      github: "#"
    },
    {
      title: "[Project Name 2]",
      description: "[Another project description highlighting your technical skills and problem-solving abilities.]",
      tech: ["TypeScript", "Next.js", "Supabase", "Tailwind"],
      link: "#",
      github: "#"
    },
    {
      title: "[Project Name 3]",
      description: "[Third project showcasing different skills or domain expertise.]",
      tech: ["Python", "FastAPI", "Docker", "Redis"],
      link: "#",
      github: "#"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-slate-900/95 backdrop-blur-sm shadow-lg' : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="text-2xl font-bold text-white cursor-pointer" onClick={() => scrollToSection('home')}>
              <span className="text-cyan-400">&lt;</span>
              [Your Name]
              <span className="text-cyan-400">/&gt;</span>
            </div>

            <div className="hidden md:flex space-x-8">
              {['home', 'about', 'skills', 'experience', 'projects', 'contact'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`capitalize transition-colors ${
                    activeSection === section ? 'text-cyan-400' : 'text-gray-300 hover:text-cyan-400'
                  }`}
                >
                  {section}
                </button>
              ))}
            </div>

            <button
              className="md:hidden text-white"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden bg-slate-900 border-t border-slate-700">
            <div className="px-4 py-4 space-y-3">
              {['home', 'about', 'skills', 'experience', 'projects', 'contact'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className="block w-full text-left capitalize text-gray-300 hover:text-cyan-400 py-2"
                >
                  {section}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      <section id="home" className="min-h-screen flex items-center justify-center px-4 pt-16">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-6 animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-4">
              Hi, I'm <span className="text-cyan-400">[Your Name]</span>
            </h1>
            <div className="text-2xl md:text-3xl text-gray-300 mb-6">
              <span className="text-cyan-400">[Your Professional Title]</span>
            </div>
            <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-8">
              [Brief tagline about yourself - e.g., "Full-stack developer passionate about creating elegant solutions to complex problems"]
            </p>
          </div>

          <div className="flex justify-center gap-4 mb-12">
            <a href="#" className="p-3 bg-slate-800 hover:bg-cyan-400 text-white rounded-lg transition-all hover:scale-110">
              <Github size={24} />
            </a>
            <a href="#" className="p-3 bg-slate-800 hover:bg-cyan-400 text-white rounded-lg transition-all hover:scale-110">
              <Linkedin size={24} />
            </a>
            <a href="#" className="p-3 bg-slate-800 hover:bg-cyan-400 text-white rounded-lg transition-all hover:scale-110">
              <Mail size={24} />
            </a>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => scrollToSection('projects')}
              className="px-8 py-3 bg-cyan-400 hover:bg-cyan-500 text-slate-900 font-semibold rounded-lg transition-all hover:scale-105 shadow-lg shadow-cyan-500/50"
            >
              View My Work
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="px-8 py-3 bg-transparent border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900 font-semibold rounded-lg transition-all hover:scale-105"
            >
              Get In Touch
            </button>
          </div>
        </div>
      </section>

      <section id="about" className="min-h-screen flex items-center justify-center px-4 py-20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 flex items-center gap-3">
            <User className="text-cyan-400" />
            About Me
          </h2>
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-slate-700">
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              [Write a compelling introduction about yourself. Include your background, what drives you, and what makes you unique. This should be 2-3 paragraphs that give both technical and non-technical readers insight into who you are.]
            </p>
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              [Second paragraph: Discuss your professional journey, key experiences, or your approach to problem-solving and technology.]
            </p>
            <p className="text-gray-300 text-lg leading-relaxed">
              [Third paragraph: Share your current focus, what you're learning, or what you're looking for in your next opportunity.]
            </p>

            <div className="mt-8 pt-8 border-t border-slate-700">
              <h3 className="text-2xl font-semibold text-white mb-4">Quick Facts</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2"></div>
                  <div>
                    <p className="text-gray-400">Location</p>
                    <p className="text-white font-semibold">[Your City, Country]</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2"></div>
                  <div>
                    <p className="text-gray-400">Experience</p>
                    <p className="text-white font-semibold">[X] Years</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2"></div>
                  <div>
                    <p className="text-gray-400">Education</p>
                    <p className="text-white font-semibold">[Your Degree/Certification]</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2"></div>
                  <div>
                    <p className="text-gray-400">Availability</p>
                    <p className="text-white font-semibold">[Open to opportunities / Currently employed]</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="skills" className="min-h-screen flex items-center justify-center px-4 py-20">
        <div className="max-w-6xl mx-auto w-full">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-12 flex items-center gap-3">
            <Code className="text-cyan-400" />
            Skills & Expertise
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skills.map((skillGroup, index) => (
              <div
                key={index}
                className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700 hover:border-cyan-400 transition-all hover:scale-105"
              >
                <h3 className="text-xl font-semibold text-cyan-400 mb-4">{skillGroup.category}</h3>
                <ul className="space-y-2">
                  {skillGroup.items.map((skill, idx) => (
                    <li key={idx} className="text-gray-300 flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full"></div>
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="mt-12 bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-slate-700">
            <p className="text-gray-400 text-center">
              [Add additional skills, certifications, or technical competencies here. You can also mention your learning goals or technologies you're currently exploring.]
            </p>
          </div>
        </div>
      </section>

      <section id="experience" className="min-h-screen flex items-center justify-center px-4 py-20">
        <div className="max-w-4xl mx-auto w-full">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-12 flex items-center gap-3">
            <Briefcase className="text-cyan-400" />
            Work Experience
          </h2>
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-slate-700 hover:border-cyan-400 transition-all"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-white">{exp.title}</h3>
                    <p className="text-cyan-400 font-semibold">{exp.company}</p>
                  </div>
                  <p className="text-gray-400 mt-2 md:mt-0">{exp.period}</p>
                </div>
                <p className="text-gray-300 mb-4">{exp.description}</p>
                <ul className="space-y-2">
                  {exp.achievements.map((achievement, idx) => (
                    <li key={idx} className="text-gray-400 flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full mt-2"></div>
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="projects" className="min-h-screen flex items-center justify-center px-4 py-20">
        <div className="max-w-6xl mx-auto w-full">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-12 flex items-center gap-3">
            <FileText className="text-cyan-400" />
            Featured Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700 hover:border-cyan-400 transition-all hover:scale-105 flex flex-col"
              >
                <h3 className="text-xl font-bold text-white mb-3">{project.title}</h3>
                <p className="text-gray-400 mb-4 flex-grow">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-slate-700 text-cyan-400 text-sm rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <a
                    href={project.link}
                    className="flex items-center gap-2 text-gray-300 hover:text-cyan-400 transition-colors"
                  >
                    <ExternalLink size={18} />
                    Demo
                  </a>
                  <a
                    href={project.github}
                    className="flex items-center gap-2 text-gray-300 hover:text-cyan-400 transition-colors"
                  >
                    <Github size={18} />
                    Code
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="min-h-screen flex items-center justify-center px-4 py-20">
        <div className="max-w-4xl mx-auto w-full">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 text-center">
            Let's Work Together
          </h2>
          <p className="text-gray-400 text-center mb-12 text-lg">
            [Add a call-to-action message here. Whether you're open to new opportunities, freelance work, or just want to connect.]
          </p>

          <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-slate-700">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-cyan-400/10 rounded-lg">
                  <Mail className="text-cyan-400" size={24} />
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-1">Email</h3>
                  <a href="mailto:[your.email@example.com]" className="text-gray-400 hover:text-cyan-400 transition-colors">
                    [your.email@example.com]
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-cyan-400/10 rounded-lg">
                  <Linkedin className="text-cyan-400" size={24} />
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-1">LinkedIn</h3>
                  <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">
                    [linkedin.com/in/yourprofile]
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-cyan-400/10 rounded-lg">
                  <Github className="text-cyan-400" size={24} />
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-1">GitHub</h3>
                  <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">
                    [github.com/yourusername]
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-cyan-400/10 rounded-lg">
                  <User className="text-cyan-400" size={24} />
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-1">Location</h3>
                  <p className="text-gray-400">[Your City, Country]</p>
                </div>
              </div>
            </div>

            <div className="text-center pt-8 border-t border-slate-700">
              <a
                href="[link-to-your-resume.pdf]"
                className="inline-flex items-center gap-2 px-6 py-3 bg-cyan-400 hover:bg-cyan-500 text-slate-900 font-semibold rounded-lg transition-all hover:scale-105"
              >
                <FileText size={20} />
                Download Resume
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-slate-900 border-t border-slate-800 py-8">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <p className="text-gray-400">
            © {new Date().getFullYear()} [Your Name]. Built with React & Tailwind CSS.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
