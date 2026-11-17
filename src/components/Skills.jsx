import React, { useState } from 'react';
import { Chip } from '@mui/material';
import { SkillIcon } from './SkillIcons';

export const skillsByCategory = [
  {
    id: 'frontend',
    number: '1',
    category: 'Frontend Development',
    shortCategory: 'Frontend',
    badge: '8 Technologies',
    icon: 'bi bi-laptop',
    description: 'Modern component-driven web interfaces & responsive styling',
    skills: [
      { name: 'HTML5' },
      { name: 'CSS3' },
      { name: 'JavaScript' },
      { name: 'Tailwind CSS' },
      { name: 'React.js' },
      { name: 'Material UI' },
      { name: 'TypeScript' },
      { name: 'Bootstrap 5' },
    ],
  },
  {
    id: 'backend',
    number: '2',
    category: 'Backend Development & API Tools',
    shortCategory: 'Backend & APIs',
    badge: '4 Tools',
    icon: 'bi bi-terminal',
    description: 'Server-side runtimes, frameworks & API design',
    skills: [
      { name: 'Node.js' },
      { name: 'Express.js' },
      { name: 'Postman API' },
      { name: 'API Integration' },
    ],
  },
  {
    id: 'database',
    number: '3',
    category: 'Database Management',
    shortCategory: 'Databases',
    badge: '3 Databases',
    icon: 'bi bi-database',
    description: 'Relational & NoSQL database architecture, querying & data persistence',
    skills: [
      { name: 'MySQL' },
      { name: 'PostgreSQL' },
      { name: 'MongoDB' },
    ],
  },
  {
    id: 'tools',
    number: '4',
    category: 'Deployment & Productivity Tools',
    shortCategory: 'Deployment & Tools',
    badge: '5 Tools',
    icon: 'bi bi-cloud-arrow-up',
    description: 'CI/CD, version control, IDEs & workspace documentation',
    skills: [
      { name: 'Netlify' },
      { name: 'Notion' },
      { name: 'Git' },
      { name: 'GitHub' },
      { name: 'VS Code' },
    ],
  },
  {
    id: 'ai-assistants',
    number: '5',
    category: 'AI Coding Assistants',
    shortCategory: 'AI Assistants',
    badge: '6 Assistants',
    icon: 'bi bi-robot',
    description: 'Next-generation AI agents and code completion tools powering productivity',
    skills: [
      { name: 'GitHub Copilot' },
      { name: 'OpenAI Codex' },
      { name: 'Codeium' },
      { name: 'Tabnine' },
      { name: 'Google Antigravity' },
      { name: 'Claude' },
    ],
  },
  {
    id: 'ai-integrations',
    number: '6',
    category: 'AI Tools & Integrations',
    shortCategory: 'AI Integrations',
    badge: '4 Tools',
    icon: 'bi bi-cpu',
    description: 'Cutting-edge LLM platforms, foundation models & AI orchestration',
    skills: [
      { name: 'ChatGPT' },
      { name: 'Google Gemini' },
      { name: 'Hugging Face' },
      { name: 'LangChain' },
    ],
  },
  {
    id: 'ui-design',
    number: '7',
    category: 'Frontend & UI Design',
    shortCategory: 'UI Design',
    badge: '2 Tools',
    icon: 'bi bi-palette',
    description: 'Generative AI UI prototyping, vector layouts & modern design systems',
    skills: [
      { name: 'v0' },
      { name: 'Figma AI' },
    ],
  },
  {
    id: 'testing',
    number: '8',
    category: 'Testing & Debugging',
    shortCategory: 'Testing & QA',
    badge: '1 Tool',
    icon: 'bi bi-shield-check',
    description: 'Cross-browser compatibility testing, responsive simulation & QA',
    skills: [
      { name: 'BrowserStack' },
    ],
  },
];

const categoryTabs = [
  'All',
  'Frontend Development',
  'Backend Development & API Tools',
  'Database Management',
  'Deployment & Productivity Tools',
  'AI Coding Assistants',
  'AI Tools & Integrations',
  'Frontend & UI Design',
  'Testing & Debugging',
];

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredCategories =
    activeCategory === 'All'
      ? skillsByCategory
      : skillsByCategory.filter((cat) => cat.category === activeCategory);

  const totalSkillsCount = skillsByCategory.reduce(
    (total, cat) => total + cat.skills.length,
    0
  );

  return (
    <section id="skills" className="py-14 md:py-18 bg-[#FAF8FF] relative">
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-6">
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#30234A]">
            Technical Skills &amp; Tools
          </h2>
          <p className="text-[#382F45] max-w-2xl mx-auto mt-1.5 text-sm md:text-base font-medium">
            Full Stack Web Development (MERN with AI) syllabus technologies and tools mastered at UK Infotech.
          </p>
          <div className="w-14 h-1 bg-[#7952B3] mx-auto mt-2.5 rounded-full"></div>
        </div>

        {/* Category Filter Chips */}
        <div className="flex flex-wrap items-center justify-center gap-1.5 sm:gap-2 mb-6 sm:mb-8">
          {categoryTabs.map((cat) => (
            <Chip
              key={cat}
              label={cat === 'All' ? `All (${totalSkillsCount})` : cat}
              onClick={() => setActiveCategory(cat)}
              sx={{
                fontWeight: 600,
                fontSize: '0.78rem',
                py: 1.2,
                px: 0.8,
                cursor: 'pointer',
                backgroundColor: activeCategory === cat ? '#7952B3' : '#FFFFFF',
                color: activeCategory === cat ? '#FFFFFF' : '#4C327A',
                border: '1px solid',
                borderColor: activeCategory === cat ? '#7952B3' : '#E8DFF5',
                boxShadow:
                  activeCategory === cat
                    ? '0 2px 10px rgba(121, 82, 179, 0.25)'
                    : 'none',
                transition: 'all 0.25s ease',
                '&:hover': {
                  backgroundColor: activeCategory === cat ? '#4C327A' : '#F0EAFE',
                  color: activeCategory === cat ? '#FFFFFF' : '#7952B3',
                  borderColor: '#C4B5FD',
                },
              }}
            />
          ))}
        </div>

        {/* 2-Column Responsive Category Cards Grid (Tight, Compact, Zero Dead Space) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-3.5 md:gap-5 max-w-6xl mx-auto items-start">
          {filteredCategories.map((catGroup) => (
            <div
              key={catGroup.category}
              className="bg-white rounded-2xl border border-[#E8DFF5] p-3.5 sm:p-5 shadow-[0_2px_12px_rgba(76,50,122,0.04)] hover:shadow-[0_8px_24px_rgba(121,82,179,0.12)] hover:border-[#C4B5FD] transition-all duration-300"
            >
              {/* Header: Icon, Numbered Title, Subtitle, & Badge */}
              <div className="flex items-start justify-between gap-2 mb-1.5">
                <div className="flex items-start gap-2.5 min-w-0">
                  {/* Icon Box */}
                  <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-[#F0EAFE] border border-[#E8DFF5] flex items-center justify-center text-[#7952B3] text-sm sm:text-base flex-shrink-0 mt-0.5">
                    <i className={catGroup.icon}></i>
                  </div>
                  <div className="min-w-0">
                    <h3 className="text-xs xs:text-sm sm:text-base font-extrabold text-[#30234A] leading-tight truncate">
                      {catGroup.number}. {catGroup.category}
                    </h3>
                    <p className="text-[11px] sm:text-xs text-[#625B71] mt-0.5 leading-snug line-clamp-2">
                      {catGroup.description}
                    </p>
                  </div>
                </div>

                {/* Count Pill Badge */}
                <span className="px-2 py-0.5 rounded-full text-[10px] sm:text-[11px] font-bold bg-[#F0EAFE] text-[#7952B3] border border-[#E8DFF5] whitespace-nowrap flex-shrink-0">
                  {catGroup.badge}
                </span>
              </div>

              {/* Skills Mini-Cards Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-1.5 sm:gap-2.5 mt-3">
                {catGroup.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="flex items-center gap-1.5 sm:gap-2 px-2 py-1.5 sm:px-2.5 sm:py-2 rounded-xl bg-[#FAF8FF] border border-[#E8DFF5] hover:border-[#C4B5FD] hover:bg-white hover:shadow-xs transition-all duration-200 group cursor-default min-w-0"
                    title={skill.name}
                  >
                    <div className="w-4 h-4 sm:w-5 sm:h-5 flex items-center justify-center flex-shrink-0 transition-transform duration-200 group-hover:scale-110">
                      <SkillIcon
                        name={skill.name}
                        className="w-4 h-4 sm:w-5 sm:h-5 object-contain"
                      />
                    </div>
                    <span className="text-[11px] sm:text-[12.5px] font-bold text-[#30234A] truncate">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
