import React, { useState } from 'react';
import { 
  Facebook, 
  Linkedin, 
  Mail, 
  Phone, 
  MapPin, 
  ExternalLink, 
  ChevronRight,
  Code2,
  Cpu,
  Palette,
  Layout,
  Users,
  Lightbulb,
  MessageSquare,
  Award,
  GraduationCap,
  Briefcase,
  BookOpen,
  FileText,
  Eye,
  X,
  Menu
} from 'lucide-react';
import { motion } from 'motion/react';

// --- Components ---

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Activities', href: '#activities' },
    { name: 'Certifications', href: '#certifications' },
    { name: 'Projects', href: '#projects' },
    { name: 'Achievements', href: '#achievements' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex-shrink-0">
            <span className="text-xl font-bold text-primary">Arnab Acharjee</span>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4 lg:space-x-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-charcoal hover:text-accent px-2 py-2 rounded-md text-sm font-medium transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-primary hover:text-accent hover:bg-gray-100 transition-all"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? <X className="block h-6 w-6" /> : <Menu className="block h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-white border-b border-gray-200"
        >
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-charcoal hover:text-accent block px-3 py-2 rounded-md text-base font-medium"
              >
                {link.name}
              </a>
            ))}
          </div>
        </motion.div>
      )}
    </nav>
  );
};

const Hero = () => {
  return (
    <section id="home" className="py-12 md:py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-20">
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="w-full md:w-1/2 flex justify-center"
          >
            <div className="relative w-72 h-72 sm:w-80 sm:h-80 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-3xl overflow-hidden shadow-2xl border-4 border-accent/20 bg-secondary/50">
              <img 
                src="https://lh3.googleusercontent.com/d/15m-XLcktTGMnDhXA9OSj0HUr2C_ZOCj4" 
                alt="Arnab Acharjee" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="w-full md:w-1/2 text-center md:text-left"
          >
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold text-primary mb-4 tracking-tight">
              Arnab Acharjee
            </h1>
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-accent mb-6">
              Industrial and Production Engineering Student
            </h2>
            <p className="text-base sm:text-lg text-gray-600 mb-8 leading-relaxed max-w-2xl mx-auto md:mx-0">
              "I aspire to pursue a fulfilling career where I can apply my learning, experiences, and knowledge effectively to contribute to the growth of an organization while continuously enhancing my professional skills."
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4">
              <a 
                href="#projects" 
                className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-bold rounded-full text-white bg-accent hover:bg-accent-hover transition-all shadow-lg hover:shadow-accent/30"
              >
                View My Work
                <ChevronRight className="ml-2 w-5 h-5" />
              </a>
              <a 
                href="#contact" 
                className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3 border-2 border-primary text-base font-bold rounded-full text-primary hover:bg-primary hover:text-white transition-all"
              >
                Contact Me
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const About = () => {
  const technicalSkills = [
    { name: 'Python', icon: <Code2 className="w-5 h-5" /> },
    { name: 'C', icon: <Code2 className="w-5 h-5" /> },
    { name: 'Microsoft Office', icon: <Layout className="w-5 h-5" /> },
    { name: 'Adobe Suite', icon: <Palette className="w-5 h-5" /> },
    { name: 'SolidWorks', icon: <Cpu className="w-5 h-5" /> },
    { name: 'AutoCAD', icon: <Cpu className="w-5 h-5" /> },
    { name: 'Google Workspace', icon: <Layout className="w-5 h-5" /> },
  ];

  const softSkills = [
    { name: 'Communication', icon: <MessageSquare className="w-5 h-5" /> },
    { name: 'Teamwork', icon: <Users className="w-5 h-5" /> },
    { name: 'Problem-Solving', icon: <Lightbulb className="w-5 h-5" /> },
    { name: 'Innovation', icon: <Lightbulb className="w-5 h-5" /> },
  ];

  return (
    <section id="about" className="py-20 bg-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">About Me</h2>
          <div className="w-20 h-1 bg-accent mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white p-8 rounded-2xl shadow-sm"
          >
            <div className="mb-8 overflow-hidden rounded-2xl shadow-md border border-gray-100 group bg-gray-50 flex justify-center items-center">
              <img 
                src="https://lh3.googleusercontent.com/d/1hxV0yEy8IU9T3oDBFP_EUhLchUBSa8ZX" 
                alt="Professional Profile" 
                className="w-full h-auto max-h-[300px] md:max-h-[450px] object-contain group-hover:scale-105 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
            </div>
            <p className="text-gray-600 leading-relaxed mb-6">
              I am a dedicated Industrial and Production Engineering student at Rajshahi University of Engineering and Technology (RUET). My journey is driven by a passion for optimizing systems, leveraging technology for social impact, and continuous learning. I combine technical engineering principles with a creative mindset to solve complex problems.
            </p>
            <p className="text-gray-600 leading-relaxed">
              With experience in brand representation and affiliate marketing, I've developed a strong foundation in professional communication and strategic thinking. My goal is to bridge the gap between engineering efficiency and real-world needs.
            </p>
          </motion.div>

          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-bold text-primary mb-6 flex items-center">
                <Cpu className="mr-2 text-accent" /> Technical Skills
              </h3>
              <div className="flex flex-wrap gap-3">
                {technicalSkills.map((skill) => (
                  <span key={skill.name} className="flex items-center px-4 py-2 bg-white rounded-full text-sm font-medium text-charcoal shadow-sm border border-gray-100">
                    <span className="mr-2 text-accent">{skill.icon}</span>
                    {skill.name}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold text-primary mb-6 flex items-center">
                <Users className="mr-2 text-accent" /> Soft Skills
              </h3>
              <div className="flex flex-wrap gap-3">
                {softSkills.map((skill) => (
                  <span key={skill.name} className="flex items-center px-4 py-2 bg-white rounded-full text-sm font-medium text-charcoal shadow-sm border border-gray-100">
                    <span className="mr-2 text-accent">{skill.icon}</span>
                    {skill.name}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const TimelineItem: React.FC<{ item: any, onCertClick?: (cert: any) => void }> = ({ item, onCertClick }) => (
  <motion.div
    initial={{ opacity: 0, x: -20 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    className="relative pl-6 md:pl-8"
  >
    <div className="absolute -left-[9px] md:-left-[11px] top-0 w-4 h-4 md:w-5 md:h-5 rounded-full bg-accent border-4 border-white shadow-sm"></div>
    <div className="bg-secondary p-5 md:p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow h-full">
      {item.roles ? (
        <div className="space-y-6">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-10 h-10 md:w-12 md:h-12 bg-white rounded-lg flex items-center justify-center shadow-sm p-2 overflow-hidden shrink-0">
               {item.logo ? (
                 <img 
                   src={item.logo} 
                   alt={`${item.organization} Logo`} 
                   className="w-full h-full object-contain"
                   referrerPolicy="no-referrer"
                 />
               ) : (
                 <div className="text-accent">{item.icon || <Briefcase className="w-5 h-5" />}</div>
               )}
            </div>
            <div>
              <h4 className="text-base md:text-lg font-bold text-primary leading-tight">{item.organization}</h4>
              <p className="text-xs md:text-sm text-charcoal/70 font-medium">{item.type} · {item.totalPeriod}</p>
            </div>
          </div>
          <div className="space-y-8 ml-4 md:ml-6 border-l border-gray-300 pl-6 md:pl-8 relative">
            {item.roles.map((role: any, rIndex: number) => (
              <div key={rIndex} className="relative">
                <div className="absolute -left-[29px] md:-left-[37px] top-2 w-2.5 h-2.5 rounded-full bg-gray-400 border-2 border-white"></div>
                <h5 className="text-sm md:text-base font-bold text-primary leading-tight">{role.title}</h5>
                <p className="text-[10px] md:text-sm text-charcoal/70 font-medium">{role.period} · {role.duration}</p>
                {role.description && <p className="text-gray-600 text-xs md:text-sm mt-2 leading-relaxed">{role.description}</p>}
                {role.responsibilities && (
                  <ul className="mt-3 space-y-1">
                    {role.responsibilities.map((resp: string, idx: number) => (
                      <li key={idx} className="flex items-start gap-2 text-[10px] md:text-xs text-gray-600">
                        <ChevronRight className="w-3 h-3 text-accent mt-0.5 shrink-0" />
                        <span>{resp}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </div>
      ) : (
        <>
          <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-2 gap-2">
            <h4 className="text-base md:text-lg font-bold text-primary leading-tight">{item.title}</h4>
            <div className="flex items-center gap-3">
              {item.certificate && onCertClick && (
                <button 
                  onClick={() => onCertClick({ title: `${item.title} - ${item.organization}`, image: item.certificate })}
                  className="text-accent hover:text-accent/80 transition-colors flex items-center gap-1 text-[10px] md:text-xs font-bold bg-accent/5 px-2 py-1 rounded-md"
                >
                  <Eye className="w-3 h-3" /> View Certificate
                </button>
              )}
              <span className="text-[10px] md:text-xs font-semibold text-accent bg-accent/10 px-3 py-1 rounded-full w-fit">
                {item.period}
              </span>
            </div>
          </div>
          <div className="flex items-center text-charcoal/70 mb-3 font-medium text-xs md:text-sm">
            {item.organization}
          </div>
          <p className="text-gray-600 text-xs md:text-sm leading-relaxed">
            {item.description}
          </p>
          {item.responsibilities && (
            <ul className="mt-4 space-y-2">
              {item.responsibilities.map((resp: string, idx: number) => {
                const isSubItem = resp.startsWith('•');
                return (
                  <li key={idx} className={`flex items-start gap-2 text-xs md:text-sm text-gray-600 ${isSubItem ? 'ml-4' : ''}`}>
                    {!isSubItem && <ChevronRight className="w-3 h-3 md:w-4 md:h-4 text-accent mt-0.5 shrink-0" />}
                    <span className={isSubItem ? 'text-gray-500 italic' : ''}>{resp}</span>
                  </li>
                );
              })}
            </ul>
          )}
        </>
      )}
    </div>
  </motion.div>
);

const TimelineSection = ({ title, items, onCertClick }: { title: string, items: any[], onCertClick?: (cert: any) => void }) => (
  <div className="space-y-8">
    <h3 className="text-2xl font-bold text-primary flex items-center gap-3 mb-8">
      {title === "Education" ? <GraduationCap className="w-6 h-6 text-accent" /> : <Briefcase className="w-6 h-6 text-accent" />}
      {title}
    </h3>
    <div className="space-y-8 border-l-2 border-accent/20 ml-3 md:ml-4">
      {items.map((item, index) => (
        <TimelineItem key={index} item={item} onCertClick={onCertClick} />
      ))}
    </div>
  </div>
);

const Experience = () => {
  const [selectedCert, setSelectedCert] = useState<null | { title: string; image: string }>(null);
  const education = [
    {
      title: "B.Sc. in Engineering",
      organization: "Rajshahi University of Engineering and Technology (RUET)",
      period: "2023 - Present",
      description: "Industrial and Production Engineering. CGPA: 3.88 (1st year).",
      icon: <GraduationCap className="w-5 h-5" />
    },
    {
      title: "Higher Secondary Certificate (HSC)",
      organization: "Chowmuhani Govt. S.A. College",
      period: "2020 - 2022",
      description: "Science. GPA: 5.00",
      icon: <GraduationCap className="w-5 h-5" />
    },
    {
      title: "Secondary School Certificate (SSC)",
      organization: "Chowmuhani Madan Mohan High School",
      period: "2018 - 2020",
      description: "Science. GPA: 5.00",
      icon: <GraduationCap className="w-5 h-5" />
    }
  ];

  const experience = [
    {
      title: "Brand Representative",
      organization: "Interactive Cares",
      period: "June 2024 - Jan 2025",
      description: "Arranged meetings with university clubs, created meeting minutes, and promoted courses through social media.",
      certificate: "https://lh3.googleusercontent.com/d/1jughj1tZ_rqeb11veKT3_O0ZSTPeCd5I",
      icon: <Briefcase className="w-5 h-5" />
    },
    {
      title: "Affiliates",
      organization: "10 Minute School",
      period: "Jan 2022 - Nov 2025",
      description: "Selling courses through Facebook marketing. Achievements: Bronze Seller, recognized as 'Seller of the Day' on two occasions.",
      icon: <Briefcase className="w-5 h-5" />
    },
    {
      title: "Former QNA Teacher",
      organization: "UDVASH",
      period: "Nov 2023 - Jan 2025",
      description: "Solving students' problems in Physics, Chemistry, and Math.",
      icon: <Briefcase className="w-5 h-5" />
    },
    {
      title: "Organizing Committee Member",
      organization: "CRACKERJACK 2.0 - National Business Case Competition",
      period: "Ongoing",
      description: "Organized by RUET IPE CLUB.",
      icon: <Briefcase className="w-5 h-5" />
    },
    {
      title: "Organizing Committee Member",
      organization: "EXTRUDE 1.0 - National CAD Competition",
      period: "Ongoing",
      description: "Organized by SCADR.",
      icon: <Briefcase className="w-5 h-5" />
    },
    {
      title: "Organizing Committee Member",
      organization: "BRAINWAVE 2.0 - Intra-dept Business Case Competition",
      period: "Ongoing",
      description: "Organized by RUET IPE CLUB.",
      icon: <Briefcase className="w-5 h-5" />
    }
  ];

  return (
    <section id="experience" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">My Journey</h2>
          <div className="w-20 h-1 bg-accent mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <TimelineSection title="Education" items={education} />
          <TimelineSection title="Experience" items={experience} onCertClick={setSelectedCert} />
        </div>
      </div>

      {/* Certificate Modal */}
      {selectedCert && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-primary/95 backdrop-blur-sm">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white rounded-3xl overflow-hidden max-w-4xl w-full relative shadow-2xl max-h-[90vh] flex flex-col"
          >
            <button 
              onClick={() => setSelectedCert(null)}
              className="absolute top-4 right-4 z-10 p-2 bg-black/5 hover:bg-black/10 rounded-full transition-colors"
            >
              <X className="w-6 h-6 text-primary" />
            </button>
            
            <div className="p-6 md:p-8 overflow-y-auto">
              <h3 className="text-xl md:text-2xl font-bold text-primary mb-6 pr-12">{selectedCert.title}</h3>
              <div className="aspect-[4/3] bg-gray-100 rounded-2xl overflow-hidden border border-gray-200 relative group">
                <img 
                  src={selectedCert.image} 
                  alt={selectedCert.title}
                  className="w-full h-full object-contain md:object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="mt-6 flex justify-end">
                <button 
                  onClick={() => setSelectedCert(null)}
                  className="w-full sm:w-auto px-8 py-3 bg-primary text-white rounded-2xl font-bold hover:bg-primary/90 transition-colors"
                >
                  Close
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </section>
  );
};

const ExtraCurricular = () => {
  const activities = [
    {
      organization: "Society of Computer Aided Designers RUET - SCADR",
      type: "Part-time",
      totalPeriod: "1 yr 7 mos",
      logo: "https://lh3.googleusercontent.com/d/15m-XLcktTGMnDhXA9OSj0HUr2C_ZOCj4",
      roles: [
        {
          title: "Assist. Class Coordination Secretary",
          period: "Jul 2025 - Present",
          duration: "9 mos",
          responsibilities: [
            "Conducting classes on AutoCAD and SolidWorks",
            "Working as a Graphic Designer"
          ]
        },
        {
          title: "Junior Executive",
          period: "Sep 2024 - Jul 2025",
          duration: "11 mos"
        }
      ],
      icon: <BookOpen className="w-5 h-5" />
    },
    {
      title: "Executive",
      organization: "RUET IPE Club",
      period: "December 2023 - Present",
      responsibilities: [
        "Working as a Graphic Designer",
        "Conducted three sessions for the Junior Series:",
        "• Cracking Business Case Competitions: Discussed case competition mechanics, structured approaches, and strategies for 37 juniors.",
        "• Basics of Design & Presentation: Covered fundamental design concepts and professional slide creation.",
        "• How to Read & Solve Case Files (Pre-Brainwave 2.0): Taught case analysis, problem structuring, and insight organization into slide decks."
      ],
      icon: <Users className="w-5 h-5" />
    },
    {
      title: "Deputy Head of Business (Sponsor)",
      organization: "SAER",
      period: "20 July 2025 - Present",
      responsibilities: [],
      icon: <Briefcase className="w-5 h-5" />
    },
    {
      title: "Deputy Head of Business (Sponsor)",
      organization: "Team EXERTION",
      period: "20 July 2025 - Present",
      responsibilities: [],
      icon: <Briefcase className="w-5 h-5" />
    }
  ];

  return (
    <section id="activities" className="py-20 bg-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Extra-curricular Activities</h2>
          <div className="w-20 h-1 bg-accent mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {activities.map((activity, index) => (
            <div key={index} className="bg-white p-6 md:p-8 rounded-3xl shadow-sm hover:shadow-md transition-all border border-gray-100 flex flex-col">
              <TimelineItem item={activity} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Projects = () => {
  const projects = [
    {
      title: "MEDIRIDE",
      subtitle: "Fast and Reliable Ambulance Booking Service",
      description: "Developed under the Pocket Doctor initiative, MEDIRIDE aims to revolutionize emergency medical response in Bangladesh. The project won pre-seed funding from the University Innovation Hub (UIHP).",
      features: [
        "Live GPS Tracking",
        "Instant Booking",
        "Emergency Contact Buttons",
        "Medical History Integration",
        "Multilingual Support"
      ],
      image: "https://lh3.googleusercontent.com/d/1RZZ3ZsGl7hDEfPWZcSF1v-vStyb19lop",
      accent: "bg-teal-600",
      link: "https://mediride.app"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Projects</h2>
          <div className="w-20 h-1 bg-accent mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 gap-8 md:gap-12">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="bg-white rounded-3xl overflow-hidden shadow-xl flex flex-col lg:flex-row border border-gray-100"
            >
              <div className="lg:w-1/2 relative h-64 sm:h-80 lg:h-auto">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex items-end p-6 md:p-10">
                  <h3 className="text-2xl md:text-4xl font-bold text-white tracking-tight">{project.title}</h3>
                </div>
              </div>
              <div className="lg:w-1/2 p-6 md:p-10 lg:p-12 flex flex-col justify-center">
                <h4 className="text-lg md:text-xl font-bold text-accent mb-4">{project.subtitle}</h4>
                <p className="text-gray-600 mb-8 leading-relaxed text-sm md:text-base">
                  {project.description}
                </p>
                <div className="space-y-4">
                  <h5 className="font-bold text-primary uppercase tracking-wider text-[10px] md:text-xs">Key Features</h5>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {project.features.map((feature) => (
                      <li key={feature} className="flex items-center text-gray-600 text-xs md:text-sm">
                        <div className="w-1.5 h-1.5 rounded-full bg-accent mr-3 shrink-0"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mt-10">
                  <a 
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto px-8 py-3 bg-primary text-white rounded-full text-sm font-bold hover:bg-primary/90 transition-all inline-flex items-center justify-center shadow-lg hover:shadow-primary/20"
                  >
                    Learn More <ExternalLink className="ml-2 w-4 h-4" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Achievements = () => {
  const achievements = [
    {
      title: "Pre-seed Funding for Mediride",
      description: "Awarded by University Innovation Hub Program (UIHP) for the Pocket Doctor initiative.",
      image: "https://lh3.googleusercontent.com/d/12c-Pv2wLjOvlpuP1PEOBcNBYx0FhfXmF",
      category: "Startup"
    },
    {
      title: "Pre-seed Funding for Team Exertion",
      description: "Awarded by University Innovation Hub Program (UIHP) for innovative startup concepts.",
      image: "https://lh3.googleusercontent.com/d/1qJIJArT7oqDg8eLGOJ1mOvOCUpjZDwp7",
      category: "Startup"
    },
    {
      title: "Champion - Presentio 2.0",
      description: "Awarded by RUET IPE CLUB for excellence in presentation and communication.",
      image: "https://lh3.googleusercontent.com/d/1LzablHFCLEmT8VLUfqS18qu3l4Vqmuqu",
      category: "Competition"
    },
    {
      title: "Finalist - CaseSprint",
      description: "National Business Case Competition by JKKNIU Career Club. One of the 6 finalists from 300+ teams.",
      image: "https://lh3.googleusercontent.com/d/1xeghCqnZ5VoT0lou3pqyf5soriHadLjt",
      category: "Case Competition"
    },
    {
      title: "Semi-finalist - Hult Prize RUET",
      description: "Recognized for social entrepreneurship and innovative business models at RUET.",
      image: "https://lh3.googleusercontent.com/d/1MKOcNHq2OeceWmdWLrph_YoVAt094iH1",
      category: "Innovation"
    },
    {
      title: "Finalist - BrainWave",
      description: "Intra-Dept Case Competition organized by RUET IPE CLUB.",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbWmiDuyP19IZ-6DZIhzKFog43M5rxeYVlnA&s",
      category: "Case Competition"
    },
    /*
    {
      title: "Finalist - BrainWave",
      description: "Intra-Dept Case Competition organized by RUET IPE CLUB.",
      image: "data:image/jpeg;base64,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",
      category: "Case Competition"
    },
    */
    {
      title: "Semi-finalist - ENGIBIZ",
      description: "National Business Case Competition by MIST Career Club. One of the 24 semi-finalists from 270+ teams.",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTy9X_CC9-9HUl0fbHSbgNQ25Cfu4dZdWRjw&s",
      category: "Case Competition"
    },
    {
      title: "2nd Runner-up - OmniStart",
      description: "National Startup Competition. One of the winning teams from total 96 teams.",
      image: "https://lh3.googleusercontent.com/d/1dO0-g6gabkhAUC-mYaFbaLSNg1auuLLU",
      category: "Startup"
    },
    {
      title: "1st Runner-up at Startup Summit",
      description: "Recognized at the Startup Summit organized by RCF.",
      image: "https://lh3.googleusercontent.com/d/1syVMiVzjTlQc1Mx5YbTMYgVsYeZW7DgJ",
      category: "Summit"
    }
  ];

  return (
    <section id="achievements" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Achievements & Recognition</h2>
          <div className="w-20 h-1 bg-accent mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group bg-secondary rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col"
            >
              <div className="relative h-44 md:h-48 overflow-hidden">
                <img 
                  src={achievement.image} 
                  alt={achievement.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-white/90 backdrop-blur-sm text-accent text-[10px] md:text-xs font-bold px-3 py-1 rounded-full shadow-sm">
                    {achievement.category}
                  </span>
                </div>
              </div>
              <div className="p-5 md:p-6">
                <h3 className="text-base md:text-lg font-bold text-primary mb-2 group-hover:text-accent transition-colors leading-tight">
                  {achievement.title}
                </h3>
                <p className="text-gray-600 text-xs md:text-sm leading-relaxed">
                  {achievement.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Certifications = () => {
  const [selectedCert, setSelectedCert] = useState<null | { title: string; image: string }>(null);

  const certifications = [
    {
      title: "Innovation Cohort Certificate",
      issuer: "University Innovation Hub Program (UIHP)",
      date: "Issued Mar 2025",
      credentialId: "0901041936",
      image: "https://lh3.googleusercontent.com/d/1Jrxdw9bKmkjxbnX7gOEOcTVrrqJ2uwyo",
      skills: ["Innovation", "Entrepreneurship", "Business Transformation"]
    },
    {
      title: "Excel Fundamentals",
      issuer: "DataCamp",
      date: "Completed Oct 2025",
      credentialId: "#718,306",
      image: "https://lh3.googleusercontent.com/d/1MlSppo2pTocKcc9FEfasr1fK2sPIdCxV",
      skills: ["Excel", "Data Analysis", "Spreadsheets"]
    },
    {
      title: "Certified SOLIDWORKS Additive Manufacturing Associate",
      issuer: "VirtualTester Online, Tangix Design & Development AB",
      date: "Issued Jan 2025",
      credentialId: "C-DLC6REXVYB",
      image: "https://picsum.photos/seed/cswa-am/800/600", // Placeholder for CSWA AM
      skills: ["Additive Manufacturing", "SOLIDWORKS"]
    },
    {
      title: "Certified SOLIDWORKS CAD Design Associate",
      issuer: "VirtualTester Online, Tangix Design & Development AB",
      date: "Issued Dec 2024",
      credentialId: "C-QAKE6V3TJF",
      image: "https://picsum.photos/seed/cswa-cad/800/600", // Placeholder for CSWA
      skills: ["SOLIDWORKS", "CAD Design"]
    },
    {
      title: "The Fundamentals of Digital Marketing",
      issuer: "Google Digital Garage",
      date: "Issued Jul 2020",
      credentialId: "MQ9 N9P 9KL",
      image: "https://picsum.photos/seed/google-dm/800/600",
      skills: ["Digital Marketing", "SEO", "Content Marketing"]
    },
    {
      title: "Facebook Advertising for Beginners",
      issuer: "Alison",
      date: "Issued Jun 2020",
      credentialId: "1928-17028869",
      image: "https://picsum.photos/seed/alison-fb/800/600",
      skills: ["Facebook Ads", "Social Media Marketing"]
    },
    {
      title: "PowerPoint Masterclass",
      issuer: "Bohubrihi",
      date: "Issued Jun 2020",
      credentialId: "23305-159-203-6029",
      image: "https://picsum.photos/seed/powerpoint/800/600", // Placeholder for PowerPoint
      skills: ["Microsoft PowerPoint", "Presentation Design"]
    }
  ];

  return (
    <section id="certifications" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Licenses & Certifications</h2>
          <div className="w-20 h-1 bg-accent mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-secondary p-6 md:p-8 rounded-3xl border border-gray-100 flex flex-col h-full hover:shadow-lg transition-shadow"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-accent/10 rounded-2xl flex items-center justify-center text-accent shrink-0">
                  <Award className="w-5 h-5 md:w-6 md:h-6" />
                </div>
                <button 
                  onClick={() => setSelectedCert({ title: cert.title, image: cert.image })}
                  className="text-accent hover:text-accent/80 transition-colors flex items-center gap-1 text-xs md:text-sm font-bold"
                >
                  <Eye className="w-4 h-4" /> View
                </button>
              </div>

              <h3 className="text-base md:text-lg font-bold text-primary mb-2 leading-tight">{cert.title}</h3>
              <p className="text-xs md:text-sm text-charcoal/80 mb-1 font-medium">{cert.issuer}</p>
              <p className="text-[10px] md:text-xs text-gray-500 mb-4">{cert.date}</p>
              
              <div className="mt-auto">
                <div className="bg-white/50 p-3 rounded-xl border border-gray-200 mb-4">
                  <p className="text-[9px] md:text-[10px] uppercase tracking-wider text-gray-400 font-bold mb-1">Credential ID</p>
                  <p className="text-[10px] md:text-xs font-mono text-charcoal truncate">{cert.credentialId}</p>
                </div>

                <div className="flex flex-wrap gap-1.5 md:gap-2">
                  {cert.skills.map((skill, idx) => (
                    <span key={idx} className="text-[9px] md:text-[10px] font-bold bg-accent/5 text-accent px-2 py-1 rounded-md">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Certificate Modal */}
      {selectedCert && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-primary/95 backdrop-blur-sm">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white rounded-3xl overflow-hidden max-w-4xl w-full relative shadow-2xl max-h-[90vh] flex flex-col"
          >
            <button 
              onClick={() => setSelectedCert(null)}
              className="absolute top-4 right-4 z-10 p-2 bg-black/5 hover:bg-black/10 rounded-full transition-colors"
            >
              <X className="w-6 h-6 text-primary" />
            </button>
            
            <div className="p-6 md:p-8 overflow-y-auto">
              <h3 className="text-xl md:text-2xl font-bold text-primary mb-6 pr-12">{selectedCert.title}</h3>
              <div className="aspect-[4/3] bg-gray-100 rounded-2xl overflow-hidden border border-gray-200 relative group">
                <img 
                  src={selectedCert.image} 
                  alt={selectedCert.title}
                  className="w-full h-full object-contain md:object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="mt-6 flex justify-end">
                <button 
                  onClick={() => setSelectedCert(null)}
                  className="w-full sm:w-auto px-8 py-3 bg-primary text-white rounded-2xl font-bold hover:bg-primary/90 transition-colors"
                >
                  Close
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </section>
  );
};

const Contact = () => {
  return (
    <section id="contact" className="py-16 md:py-24 bg-primary text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight">Get In Touch</h2>
            <p className="text-white/70 text-base md:text-lg mb-10 max-w-lg">
              I'm currently seeking new opportunities. Feel free to reach out via email or connect with me on social media.
            </p>
            
            <div className="space-y-6 md:space-y-8">
              <a href="mailto:acharjeearnab359@gmail.com" className="flex items-center group">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-white/10 rounded-full flex items-center justify-center mr-4 group-hover:bg-accent transition-colors shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div className="min-w-0">
                  <p className="text-[10px] md:text-xs text-white/50 uppercase tracking-widest font-bold">Email</p>
                  <p className="text-base md:text-lg font-medium truncate">acharjeearnab359@gmail.com</p>
                </div>
              </a>
              
              <div className="flex items-center">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-white/10 rounded-full flex items-center justify-center mr-4 shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-[10px] md:text-xs text-white/50 uppercase tracking-widest font-bold">Phone</p>
                  <p className="text-base md:text-lg font-medium">+880 1838903855</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-white/10 rounded-full flex items-center justify-center mr-4 shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-[10px] md:text-xs text-white/50 uppercase tracking-widest font-bold">Location</p>
                  <p className="text-base md:text-lg font-medium">Rajshahi, Bangladesh</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white/5 p-6 md:p-10 rounded-3xl border border-white/10 shadow-2xl"
          >
            <h3 className="text-xl md:text-2xl font-bold mb-8">Connect with me</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <a 
                href="https://www.linkedin.com/in/arnabacharjee42" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center justify-center p-4 bg-white/10 rounded-2xl hover:bg-accent transition-all group"
              >
                <Linkedin className="mr-3 w-5 h-5 group-hover:scale-110 transition-transform" /> 
                <span className="font-bold">LinkedIn</span>
              </a>
              <a 
                href="https://www.facebook.com/arnab.acharjee.7739" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center justify-center p-4 bg-white/10 rounded-2xl hover:bg-accent transition-all group"
              >
                <Facebook className="mr-3 w-5 h-5 group-hover:scale-110 transition-transform" /> 
                <span className="font-bold">Facebook</span>
              </a>
            </div>
            
            <div className="mt-12 text-center">
              <p className="text-white/50 text-sm mb-4 italic">"Engineering the future, one project at a time."</p>
              <div className="flex justify-center space-x-2">
                <div className="w-2 h-2 rounded-full bg-accent animate-pulse"></div>
                <div className="w-2 h-2 rounded-full bg-accent/50 animate-pulse delay-75"></div>
                <div className="w-2 h-2 rounded-full bg-accent/20 animate-pulse delay-150"></div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="py-8 bg-primary border-t border-white/10 text-center text-white/50 text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p>© 2024 Arnab Acharjee. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

// --- Main App ---

export default function Portfolio() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience />
        <ExtraCurricular />
        <Certifications />
        <Projects />
        <Achievements />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
