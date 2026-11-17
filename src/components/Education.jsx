import React from 'react';
import { Card, Typography, Chip, Box } from '@mui/material';
import SchoolIcon from '@mui/icons-material/School';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';

const educationData = [
  {
    degree: 'BCA – Bachelor of Computer Applications',
    institution: 'Mother Terasa College Of Arts & Science',
    university: 'Bharathidasan University',
    status: 'Completed',
    desc: 'Graduated with strong foundations in computer science, computer applications, database management, and web programming.',
    highlights: ['Web Programming Fundamentals', 'Database Management (SQL)', 'Software Engineering Principles'],
  },
];

const Education = () => {
  return (
    <section id="education" className="section-padding bg-[#FAF8FF] relative">
      <div className="container mx-auto px-4 md:px-8">
        {/* Section Header */}
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#30234A]">
            Education
          </h2>
          <div className="w-16 h-1 bg-[#7952B3] mx-auto mt-3 rounded-full"></div>
        </div>

        {/* Timeline Layout */}
        <div className="max-w-3xl mx-auto">
          {educationData.map((item, idx) => (
            <div key={idx} className="relative flex items-start gap-3 sm:gap-6 group">
              {/* Timeline Marker */}
              <div className="flex-shrink-0 w-10 h-10 sm:w-14 sm:h-14 rounded-full bg-white border-2 border-[#7952B3] flex items-center justify-center text-[#7952B3] shadow-md z-10 transition-transform duration-300 group-hover:scale-110 mt-1">
                <SchoolIcon sx={{ fontSize: { xs: 20, sm: 26 } }} />
              </div>

              {/* Education Card */}
              <Card
                sx={{
                  flexGrow: 1,
                  minWidth: 0,
                  p: { xs: 2.2, sm: 2.8, md: 3.5 },
                  backgroundColor: '#FFFFFF',
                  borderRadius: '18px',
                  border: '1px solid #E8DFF5',
                  boxShadow: '0 4px 16px rgba(76, 50, 122, 0.05)',
                  transition: 'all 0.35s ease',
                  '&:hover': {
                    transform: 'translateY(-4px)',
                    boxShadow: '0 10px 24px rgba(121, 82, 179, 0.12)',
                    borderColor: '#C4B5FD',
                  },
                }}
              >
                <div className="flex items-center justify-between flex-wrap gap-2 mb-2">
                  <Chip
                    icon={<CheckCircleOutlineIcon sx={{ fontSize: 15, color: '#2e7d32 !important' }} />}
                    label={item.status}
                    size="small"
                    sx={{
                      backgroundColor: 'rgba(75, 160, 100, 0.12)',
                      color: '#2e7d32',
                      fontWeight: 700,
                      fontSize: '0.75rem',
                      border: '1px solid rgba(75, 160, 100, 0.25)',
                    }}
                  />
                  <span className="text-xs font-semibold text-[#7952B3]">
                    {item.university}
                  </span>
                </div>

                <Typography
                  variant="h5"
                  sx={{
                    fontSize: { xs: '1.1rem', sm: '1.25rem', md: '1.35rem' },
                    fontWeight: 700,
                    color: '#30234A',
                    lineHeight: 1.3,
                    mb: 0.8,
                  }}
                >
                  {item.degree}
                </Typography>

                <Typography
                  variant="subtitle1"
                  sx={{
                    color: '#7952B3',
                    fontWeight: 600,
                    fontSize: { xs: '0.92rem', sm: '1rem' },
                    mb: 1.5,
                  }}
                >
                  {item.institution}
                </Typography>

                <Typography
                  variant="body2"
                  sx={{
                    color: '#625B71',
                    lineHeight: 1.7,
                    fontSize: { xs: '0.88rem', sm: '0.94rem' },
                    mb: 2,
                  }}
                >
                  {item.desc}
                </Typography>

                <div className="flex flex-wrap gap-1.5 sm:gap-2 pt-2 border-t border-[#E8DFF5]">
                  {item.highlights.map((h, i) => (
                    <span
                      key={i}
                      className="text-[11px] sm:text-xs font-semibold px-2.5 py-1 rounded-full bg-[#F0EAFE] text-[#4C327A] border border-[#E8DFF5]"
                    >
                      {h}
                    </span>
                  ))}
                </div>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;

