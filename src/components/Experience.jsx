import React from 'react';
import { Card, Typography } from '@mui/material';
import BusinessCenterRoundedIcon from '@mui/icons-material/BusinessCenterRounded';
import CalendarMonthRoundedIcon from '@mui/icons-material/CalendarMonthRounded';
import CheckCircleOutlineRoundedIcon from '@mui/icons-material/CheckCircleOutlineRounded';
import StarRateRoundedIcon from '@mui/icons-material/StarRateRounded';
import { SkillIcon } from './SkillIcons';

const experienceData = [
  {
    id: 1,
    heading: 'FULL STACK WEB DEVELOPMENT – MERN WITH AI',
    role: 'Full Stack Web Development Intern',
    organization: 'UK Info Tech',
    period: '6 Months',
    type: 'Internship',
    featured: true,
    desc: 'Completed a 6-month internship at UK Info Tech, gaining practical experience in Full Stack Web Development. Worked on frontend and backend technologies, developed practical web applications, and improved my programming, problem-solving, and development skills.',
    highlights: [
      'Developed dynamic, interactive, and responsive web applications with React.js, Tailwind CSS, Bootstrap, and Material UI',
      'Architected backend services and REST APIs with Node.js to power seamless data communication and CRUD workflows',
      'Designed database schemas and managed persistent data operations using PostgreSQL and MongoDB',
      'Collaborated on practical full-stack projects, adhering to modern UI/UX principles and component architecture',
      'Enhanced problem-solving abilities, code debugging skills, and professional development practices',
    ],
    tech: [
      'HTML5',
      'CSS3',
      'JavaScript',
      'Bootstrap',
      'React.js',
      'Tailwind CSS',
      'Material UI',
      'Node.js',
      'PostgreSQL',
      'MongoDB',
      'REST APIs',
    ],
  },
];

const Experience = () => {
  return (
    <section id="experience" className="section-padding bg-[#F0EAFE] relative">
      <div className="container mx-auto px-4 md:px-8">
        {/* Section Header */}
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#30234A]">
            Experience &amp; Internship
          </h2>
          <p className="text-[#382F45] max-w-xl mx-auto mt-2 text-base font-medium">
            Professional internship experience in Full Stack Web Development at UK Info Tech.
          </p>
          <div className="w-16 h-1 bg-[#7952B3] mx-auto mt-3 rounded-full"></div>
        </div>

        {/* Experience Showcase Card */}
        <div className="max-w-4xl mx-auto">
          {experienceData.map((item) => (
            <Card
              key={item.id}
              sx={{
                p: { xs: 2.2, sm: 3.5, md: 4.5 },
                backgroundColor: '#FFFFFF',
                borderRadius: { xs: '18px', sm: '24px' },
                border: '1px solid #E8DFF5',
                boxShadow: '0 8px 30px rgba(76, 50, 122, 0.08)',
                transition: 'all 0.35s ease',
                position: 'relative',
                overflow: 'hidden',
                '&::before': {
                  content: '""',
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '6px',
                  height: '100%',
                  backgroundColor: '#7952B3',
                },
                '&:hover': {
                  transform: 'translateY(-4px)',
                  boxShadow: '0 16px 40px rgba(121, 82, 179, 0.18)',
                  borderColor: '#C4B5FD',
                },
              }}
            >
              {/* Program / Specialization Heading Badge */}
              <div className="mb-4">
                <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl text-[11px] sm:text-xs md:text-sm font-extrabold bg-gradient-to-r from-[#F0EAFE] to-[#FAF8FF] text-[#7952B3] border border-[#C4B5FD] tracking-wider uppercase shadow-xs break-words whitespace-normal text-left max-w-full">
                  <i className="bi bi-stars text-sm flex-shrink-0"></i>
                  <span>{item.heading}</span>
                </span>
              </div>

              {/* Card Header: Role, Company & Badges */}
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-4 pb-4 border-b border-[#E8DFF5]">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-[#F0EAFE] text-[#7952B3] flex items-center justify-center border border-[#E8DFF5] flex-shrink-0 mt-0.5 shadow-xs">
                    <BusinessCenterRoundedIcon sx={{ fontSize: { xs: 20, sm: 24 } }} />
                  </div>
                  <div>
                    <Typography
                      variant="h5"
                      sx={{
                        fontSize: { xs: '1.15rem', sm: '1.3rem', md: '1.5rem' },
                        fontWeight: 800,
                        color: '#30234A',
                        lineHeight: 1.25,
                      }}
                    >
                      {item.role}
                    </Typography>
                    <Typography
                      variant="subtitle1"
                      sx={{
                        color: '#7952B3',
                        fontWeight: 700,
                        fontSize: { xs: '0.98rem', sm: '1.08rem' },
                        mt: 0.3,
                      }}
                    >
                      {item.organization}
                    </Typography>
                  </div>
                </div>

                {/* Meta Badges */}
                <div className="flex items-center gap-1.5 sm:gap-2 flex-wrap">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] sm:text-xs font-extrabold bg-[#7952B3] text-white shadow-xs border border-[#9A75D2]">
                    <StarRateRoundedIcon sx={{ fontSize: 15 }} />
                    {item.type}
                  </span>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] sm:text-xs font-bold bg-[#FAF8FF] text-[#4C327A] border border-[#C4B5FD]">
                    <CalendarMonthRoundedIcon sx={{ fontSize: 14, color: '#7952B3' }} />
                    {item.period}
                  </span>
                </div>
              </div>

              {/* Description Paragraph */}
              <Typography
                variant="body1"
                sx={{
                  color: '#382F45',
                  lineHeight: { xs: 1.7, sm: 1.8 },
                  fontSize: { xs: '0.9rem', sm: '0.98rem', md: '1rem' },
                  mb: 3,
                }}
              >
                {item.desc}
              </Typography>

              {/* Key Contributions & Highlights */}
              <div className="mb-5">
                <Typography
                  variant="subtitle2"
                  sx={{
                    color: '#30234A',
                    fontWeight: 800,
                    mb: 1.5,
                    fontSize: { xs: '0.85rem', sm: '0.92rem' },
                    textTransform: 'uppercase',
                    letterSpacing: '0.5px',
                  }}
                >
                  Key Practical Milestones &amp; Responsibilities:
                </Typography>
                <ul className="space-y-2 sm:space-y-2.5">
                  {item.highlights.map((h, hIdx) => (
                    <li
                      key={hIdx}
                      className="flex items-start gap-2 sm:gap-2.5 text-[#382F45] text-xs sm:text-sm md:text-[14.5px] leading-relaxed"
                    >
                      <CheckCircleOutlineRoundedIcon
                        sx={{
                          fontSize: 17,
                          color: '#7952B3',
                          mt: 0.3,
                          flexShrink: 0,
                        }}
                      />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Technologies Used with Official SVG Logos */}
              <div>
                <span className="text-[10.5px] sm:text-[11px] font-extrabold text-[#4C327A] uppercase tracking-wider block mb-2">
                  Technologies &amp; Skills Applied:
                </span>
                <div className="flex flex-wrap items-center gap-1.5 sm:gap-2 pt-2 border-t border-[#E8DFF5]">
                  {item.tech.map((tName) => (
                    <div
                      key={tName}
                      className="flex items-center gap-1.5 px-2.5 py-1.5 sm:px-3 rounded-xl bg-[#FAF8FF] border border-[#E8DFF5] hover:border-[#C4B5FD] hover:bg-white hover:shadow-xs transition-all duration-200"
                    >
                      <SkillIcon name={tName} className="w-3.5 h-3.5 sm:w-4 sm:h-4 object-contain" />
                      <span className="text-[11px] sm:text-xs font-bold text-[#30234A]">{tName}</span>
                    </div>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
