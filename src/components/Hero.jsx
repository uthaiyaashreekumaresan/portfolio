import React from 'react';
import { Button, Box, Typography, Chip } from '@mui/material';
import DownloadIcon from '@mui/icons-material/Download';
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
import MailOutlineIcon from '@mui/icons-material/MailOutline';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen pt-24 pb-12 sm:pt-28 sm:pb-16 flex items-center bg-[#FAF8FF] relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Text Content Column: Bottom on Mobile (order-2), Left on Desktop (md:order-1) */}
          <div className="order-2 md:order-1 md:col-span-7 lg:col-span-7 flex flex-col items-center text-center md:items-start md:text-left">
            <Typography
              variant="body1"
              sx={{
                fontSize: { xs: '1.05rem', sm: '1.2rem', md: '1.35rem' },
                color: '#4C327A',
                fontWeight: 600,
                mb: 0.5,
                textAlign: { xs: 'center', md: 'left' },
                width: '100%',
                textShadow: 'none',
              }}
            >
              Hi, I'm
            </Typography>

            <Typography
              variant="h1"
              sx={{
                fontSize: { xs: '2.1rem', sm: '2.8rem', md: '3.4rem', lg: '3.85rem' },
                fontWeight: 800,
                color: '#30234A',
                lineHeight: { xs: 1.18, sm: 1.15 },
                mb: 1.5,
                textAlign: { xs: 'center', md: 'left' },
                width: '100%',
                letterSpacing: '-0.02em',
                wordBreak: 'break-word',
                textShadow: 'none',
              }}
            >
              <span className="text-[#7952B3]">Uthaiyaa Shree K.</span>
            </Typography>

            <Typography
              variant="h2"
              sx={{
                fontSize: { xs: '1.15rem', sm: '1.35rem', md: '1.65rem' },
                fontWeight: 700,
                color: '#000000',
                mb: 2,
                textAlign: { xs: 'center', md: 'left' },
                width: '100%',
                letterSpacing: '-0.01em',
                textShadow: 'none',
              }}
            >
              Aspiring Full Stack Web Developer
            </Typography>

            <Typography
              variant="body1"
              sx={{
                fontSize: { xs: '0.94rem', sm: '1.02rem', md: '1.08rem' },
                color: '#382F45',
                fontWeight: 450,
                lineHeight: { xs: 1.7, sm: 1.8 },
                maxWidth: '600px',
                mx: { xs: 'auto', md: 0 },
                mb: 3.5,
                textAlign: { xs: 'center', md: 'left' },
                width: '100%',
                textShadow: 'none',
              }}
            >
              I am a BCA graduate from Mother Terasa College Of Arts &amp; Science, currently learning Full Stack Web Development at UK Infotech. I enjoy creating responsive, modern and user-friendly websites while continuously improving my development skills.
            </Typography>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center md:justify-start gap-3 sm:gap-4 w-full">
              <Button
                variant="contained"
                href="#projects"
                startIcon={<WorkOutlineIcon />}
                sx={{
                  backgroundColor: '#7952B3',
                  color: '#FFFFFF',
                  width: { xs: '100%', sm: 'auto' },
                  minHeight: 48,
                  px: { xs: 2.5, sm: 3.5 },
                  py: { xs: 1.2, sm: 1.4 },
                  fontSize: { xs: '0.95rem', sm: '1rem' },
                  fontWeight: 700,
                  boxShadow: '0 4px 14px rgba(121, 82, 179, 0.35)',
                  '&:hover': {
                    backgroundColor: '#4C327A',
                    transform: 'translateY(-2px)',
                    boxShadow: '0 6px 20px rgba(76, 50, 122, 0.45)',
                  },
                }}
              >
                View My Work
              </Button>

              <Button
                variant="outlined"
                href="#contact"
                startIcon={<MailOutlineIcon />}
                sx={{
                  color: '#4C327A',
                  borderColor: '#7952B3',
                  borderWidth: '2px',
                  backgroundColor: '#FFFFFF',
                  width: { xs: '100%', sm: 'auto' },
                  minHeight: 48,
                  px: { xs: 2.5, sm: 3.5 },
                  py: { xs: 1.2, sm: 1.4 },
                  fontSize: { xs: '0.95rem', sm: '1rem' },
                  fontWeight: 700,
                  '&:hover': {
                    borderWidth: '2px',
                    borderColor: '#7952B3',
                    backgroundColor: '#7952B3',
                    color: '#FFFFFF',
                    transform: 'translateY(-2px)',
                    boxShadow: '0 4px 14px rgba(121, 82, 179, 0.25)',
                  },
                }}
              >
                Contact Me
              </Button>

              <Button
                variant="outlined"
                href="resume/resume.html"
                download
                startIcon={<DownloadIcon />}
                sx={{
                  color: '#4C327A',
                  borderColor: '#C4B5FD',
                  backgroundColor: '#F0EAFE',
                  width: { xs: '100%', sm: 'auto' },
                  minHeight: 48,
                  px: { xs: 2.5, sm: 3.5 },
                  py: { xs: 1.2, sm: 1.4 },
                  fontSize: { xs: '0.95rem', sm: '1rem' },
                  fontWeight: 700,
                  '&:hover': {
                    borderColor: '#7952B3',
                    backgroundColor: '#7952B3',
                    color: '#FFFFFF',
                    transform: 'translateY(-2px)',
                    boxShadow: '0 4px 14px rgba(121, 82, 179, 0.25)',
                  },
                }}
              >
                Resume
              </Button>
            </div>
          </div>

          {/* Profile Photo Column: Top on Mobile (order-1), Right on Desktop (md:order-2) */}
          <div className="order-1 md:order-2 md:col-span-5 lg:col-span-5 flex justify-center mb-6 md:mb-0">
            <div className="relative flex items-center justify-center">
              {/* Outer Glow Ring */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-[#C4B5FD] to-[#7952B3] opacity-20 blur-md transform scale-100 sm:scale-105 animate-pulse"></div>

              {/* Profile Photo Circle */}
              <div className="relative w-[210px] h-[210px] xs:w-[250px] xs:h-[250px] sm:w-[290px] sm:h-[290px] md:w-[350px] md:h-[350px] lg:w-[380px] lg:h-[380px] max-w-[76vw] max-h-[76vw] rounded-full overflow-hidden border-4 sm:border-[5px] border-white shadow-[0_16px_40px_rgba(76,50,122,0.16)] bg-[#F0EAFE] transition-transform duration-500 hover:scale-[1.03]">
                <img
                  src="images/WhatsApp Image 2026-09-22 at 17.50.15.jpeg"
                  alt="Uthaiyaa Shree K – BCA Graduate and Aspiring Full Stack Web Developer"
                  className="w-full h-full object-cover object-top block"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                    if (e.currentTarget.nextElementSibling) {
                      e.currentTarget.nextElementSibling.style.display = 'flex';
                    }
                  }}
                />
                {/* Fallback Placeholder */}
                <div
                  className="w-full h-full hidden flex-col items-center justify-center bg-gradient-to-br from-[#F0EAFE] to-[#E8DFF5] text-[#625B71] gap-2"
                >
                  <i className="bi bi-person-circle text-6xl text-[#7952B3]"></i>
                  <span className="font-semibold text-sm">Uthaiyaa Shree K</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

