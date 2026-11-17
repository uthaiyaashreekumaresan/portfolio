import React from 'react';
import { Card, CardContent, Typography, Box } from '@mui/material';
import SchoolIcon from '@mui/icons-material/School';
import CodeIcon from '@mui/icons-material/Code';
import WorkIcon from '@mui/icons-material/Work';
import LightbulbIcon from '@mui/icons-material/Lightbulb';

const highlightItems = [
  {
    icon: <SchoolIcon sx={{ fontSize: 28, color: '#7952B3' }} />,
    title: 'Education',
    main: 'BCA',
    sub: 'Bharathidasan University',
  },
  {
    icon: <CodeIcon sx={{ fontSize: 28, color: '#7952B3' }} />,
    title: 'Current Learning',
    main: 'Full Stack Development',
    sub: 'UK Infotech',
  },
  {
    icon: <WorkIcon sx={{ fontSize: 28, color: '#7952B3' }} />,
    title: 'Career Goal',
    main: 'Full Stack Developer',
    sub: 'Building practical skills',
  },
  {
    icon: <LightbulbIcon sx={{ fontSize: 28, color: '#7952B3' }} />,
    title: 'Passion',
    main: 'Web Development',
    sub: 'Creating modern websites',
  },
];

const About = () => {
  return (
    <section id="about" className="section-padding bg-[#F0EAFE] relative">
      <div className="container mx-auto px-4 md:px-8">
        {/* Section Header */}
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#30234A]">
            About Me
          </h2>
          <div className="w-16 h-1 bg-[#7952B3] mx-auto mt-3 rounded-full"></div>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-8 items-stretch">
          {/* Left Narrative Text Card */}
          <div className="lg:col-span-6 flex">
            <Card
              sx={{
                width: '100%',
                p: { xs: 2.2, sm: 3, md: 4 },
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                backgroundColor: '#FFFFFF',
                borderRadius: '20px',
                border: '1px solid #E8DFF5',
                boxShadow: '0 4px 20px rgba(76, 50, 122, 0.05)',
              }}
            >
              <Typography
                variant="body1"
                sx={{
                  color: '#382F45',
                  lineHeight: { xs: 1.7, sm: 1.85 },
                  fontSize: { xs: '0.94rem', sm: '1.02rem', md: '1.08rem' },
                  fontWeight: 450,
                  textAlign: { xs: 'left', sm: 'justify' },
                }}
              >
                I am Uthaiyaa Shree K, a BCA graduate from Mother Terasa College Of Arts &amp; Science, currently learning Full Stack Web Development at UK Infotech. My journey started during college when I explored HTML and CSS and developed a strong interest in building responsive, modern websites.
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  color: '#382F45',
                  lineHeight: { xs: 1.7, sm: 1.85 },
                  fontSize: { xs: '0.94rem', sm: '1.02rem', md: '1.08rem' },
                  fontWeight: 450,
                  mt: 2,
                  textAlign: { xs: 'left', sm: 'justify' },
                }}
              >
                I have completed projects like the Alpha Tech Training Institute website (HTML) and the Spice Garden Restaurant website (CSS), which helped me gain practical experience in website structure, responsive design, animations and UI development.
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  color: '#382F45',
                  lineHeight: { xs: 1.7, sm: 1.85 },
                  fontSize: { xs: '0.94rem', sm: '1.02rem', md: '1.08rem' },
                  fontWeight: 450,
                  mt: 2,
                  textAlign: { xs: 'left', sm: 'justify' },
                }}
              >
                Currently, I am expanding into modern frontend and full stack development with JavaScript, React.js, Material UI, Tailwind CSS, and Bootstrap, focusing on building real-world projects to strengthen my skills and grow as a developer.
              </Typography>
            </Card>
          </div>

          {/* Right Highlight Cards Grid */}
          <div className="lg:col-span-6 flex">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 w-full">
              {highlightItems.map((item, idx) => (
                <Card
                  key={idx}
                  sx={{
                    p: { xs: 2.2, sm: 2.5, md: 3 },
                    textAlign: 'center',
                    backgroundColor: '#FFFFFF',
                    borderRadius: '16px',
                    border: '1px solid #E8DFF5',
                    boxShadow: '0 2px 10px rgba(76, 50, 122, 0.05)',
                    transition: 'all 0.35s ease',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    '&:hover': {
                      transform: 'translateY(-6px)',
                      boxShadow: '0 8px 24px rgba(121, 82, 179, 0.15)',
                      borderColor: '#C4B5FD',
                    },
                  }}
                >
                  <Box
                    sx={{
                      width: { xs: 48, sm: 58 },
                      height: { xs: 48, sm: 58 },
                      borderRadius: '14px',
                      backgroundColor: '#F0EAFE',
                      border: '1px solid #E8DFF5',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      mb: 1.5,
                    }}
                  >
                    {item.icon}
                  </Box>
                  <Typography
                    variant="caption"
                    sx={{
                      fontSize: '0.78rem',
                      fontWeight: 700,
                      letterSpacing: '1px',
                      textTransform: 'uppercase',
                      color: '#7952B3',
                      mb: 0.5,
                    }}
                  >
                    {item.title}
                  </Typography>
                  <Typography
                    variant="h6"
                    sx={{
                      fontSize: { xs: '1.05rem', sm: '1.15rem' },
                      fontWeight: 700,
                      color: '#30234A',
                      mb: 0.5,
                    }}
                  >
                    {item.main}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      fontSize: { xs: '0.82rem', sm: '0.88rem' },
                      color: '#625B71',
                    }}
                  >
                    {item.sub}
                  </Typography>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

