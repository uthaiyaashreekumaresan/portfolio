import React from 'react';
import { Typography, IconButton } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import MailOutlineIcon from '@mui/icons-material/MailOutline';

const footerNavLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Education', href: '#education' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
];

const Footer = () => {
  return (
    <footer className="bg-[#4C327A] text-[#FAF8FF] py-8 sm:py-12 border-t border-[#30234A]">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 sm:gap-8 items-center text-center md:text-left">
          {/* Brand Info */}
          <div className="md:col-span-4">
            <a href="#home" className="text-xl md:text-2xl font-bold text-white tracking-tight inline-block mb-1">
              <span className="text-[#C4B5FD]">U</span>thaiyaa{' '}
              <span className="text-[#C4B5FD]">S</span>hree
            </a>
            <p className="text-xs sm:text-sm text-[#E8DFF5]/90">
              Aspiring Full Stack Web Developer
            </p>
          </div>

          {/* Nav Links */}
          <div className="md:col-span-5">
            <ul className="flex flex-wrap justify-center gap-x-4 sm:gap-x-6 gap-y-2 text-xs sm:text-sm">
              {footerNavLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-[#E8DFF5]/80 hover:text-[#C4B5FD] transition-colors py-1 inline-block"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div className="md:col-span-3 flex justify-center md:justify-end gap-2.5 sm:gap-3">
            <IconButton
              component="a"
              href="https://github.com/uthaiyaashreekumaresan"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              sx={{
                color: '#FAF8FF',
                border: '1px solid rgba(232, 223, 245, 0.35)',
                width: 42,
                height: 42,
                '&:hover': {
                  backgroundColor: '#7952B3',
                  borderColor: '#7952B3',
                  transform: 'translateY(-3px)',
                },
                transition: 'all 0.3s ease',
              }}
            >
              <GitHubIcon fontSize="small" />
            </IconButton>

            <IconButton
              component="a"
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              sx={{
                color: '#FAF8FF',
                border: '1px solid rgba(232, 223, 245, 0.35)',
                width: 42,
                height: 42,
                '&:hover': {
                  backgroundColor: '#7952B3',
                  borderColor: '#7952B3',
                  transform: 'translateY(-3px)',
                },
                transition: 'all 0.3s ease',
              }}
            >
              <LinkedInIcon fontSize="small" />
            </IconButton>

            <IconButton
              component="a"
              href="mailto:uthaiyashreekumaresan@gmail.com"
              aria-label="Send Email"
              sx={{
                color: '#FAF8FF',
                border: '1px solid rgba(232, 223, 245, 0.35)',
                width: 42,
                height: 42,
                '&:hover': {
                  backgroundColor: '#7952B3',
                  borderColor: '#7952B3',
                  transform: 'translateY(-3px)',
                },
                transition: 'all 0.3s ease',
              }}
            >
              <MailOutlineIcon fontSize="small" />
            </IconButton>
          </div>
        </div>

        <hr className="border-t border-[#E8DFF5]/20 my-6 sm:my-8" />

        <div className="text-center">
          <p className="text-[11px] sm:text-xs text-[#E8DFF5]/75 leading-relaxed">
            &copy; {new Date().getFullYear()} Uthaiyaa Shree K. All Rights Reserved. Built with React.js, Material UI, Tailwind CSS &amp; Bootstrap.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

