import React, { useState, useEffect } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Box,
  Container,
  Button
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Education', href: '#education' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      // Section tracking
      const sections = ['home', 'about', 'skills', 'projects', 'education', 'experience', 'contact'];
      const scrollPos = window.scrollY + 140;

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && scrollPos >= el.offsetTop) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleDrawerToggle = () => {
    setMobileOpen((prev) => !prev);
  };

  const scrollTo = (e, href) => {
    e.preventDefault();
    setMobileOpen(false);
    const target = document.querySelector(href);
    if (target) {
      const navHeight = 70;
      const targetPos = target.getBoundingClientRect().top + window.pageYOffset - navHeight;
      window.scrollTo({
        top: targetPos,
        behavior: 'smooth',
      });
    }
  };

  return (
    <AppBar
      position="fixed"
      elevation={scrolled ? 2 : 0}
      sx={{
        backgroundColor: scrolled ? 'rgba(255, 255, 255, 0.96)' : 'rgba(250, 248, 255, 0.92)',
        backdropFilter: 'blur(12px)',
        borderBottom: '1px solid',
        borderColor: scrolled ? '#E8DFF5' : 'transparent',
        transition: 'all 0.3s ease',
        py: scrolled ? 0.5 : 1,
      }}
    >
      <Container maxWidth="lg">
        <Toolbar disableGutters sx={{ justifyContent: 'space-between' }}>
          {/* Brand Logo */}
          <Typography
            variant="h6"
            component="a"
            href="#home"
            onClick={(e) => scrollTo(e, '#home')}
            sx={{
              fontWeight: 800,
              fontSize: { xs: '1.2rem', md: '1.35rem' },
              color: '#30234A !important',
              letterSpacing: '-0.5px',
              textDecoration: 'none',
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <span className="text-[#7952B3]">U</span>thaiyaa&nbsp;
            <span className="text-[#7952B3]">S</span>hree
          </Typography>

          {/* Desktop Navigation Links */}
          <Box sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center', gap: 1 }}>
            {navItems.map((item) => {
              const isActive = activeSection === item.href.substring(1);
              return (
                <Button
                  key={item.label}
                  href={item.href}
                  onClick={(e) => scrollTo(e, item.href)}
                  sx={{
                    color: isActive ? '#7952B3' : '#4C327A',
                    fontWeight: isActive ? 700 : 600,
                    fontSize: '0.98rem',
                    position: 'relative',
                    px: 1.5,
                    py: 1,
                    '&:hover': {
                      color: '#7952B3',
                      backgroundColor: 'rgba(121, 82, 179, 0.06)',
                    },
                    '&::after': {
                      content: '""',
                      position: 'absolute',
                      bottom: 4,
                      left: '20%',
                      right: '20%',
                      height: '2px',
                      backgroundColor: '#7952B3',
                      borderRadius: '2px',
                      transform: isActive ? 'scaleX(1)' : 'scaleX(0)',
                      transition: 'transform 0.3s ease',
                    },
                  }}
                >
                  {item.label}
                </Button>
              );
            })}
          </Box>

          {/* Mobile Hamburger Button */}
          <IconButton
            color="inherit"
            aria-label="open navigation menu"
            edge="end"
            onClick={handleDrawerToggle}
            sx={{
              display: { md: 'none' },
              color: '#30234A',
              border: '1px solid #E8DFF5',
              borderRadius: '8px',
              p: 1,
            }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </Container>

      {/* Mobile Drawer */}
      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{ keepMounted: true }}
        PaperProps={{
          sx: {
            width: { xs: '80vw', sm: 280 },
            maxWidth: 320,
            backgroundColor: '#FFFFFF',
            borderLeft: '1px solid #E8DFF5',
            p: 2.5,
          },
        }}
      >
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2.5, pb: 1.5, borderBottom: '1px solid #E8DFF5' }}>
          <Typography variant="h6" sx={{ fontWeight: 800, color: '#30234A', fontSize: '1.15rem' }}>
            <span className="text-[#7952B3]">U</span>S Portfolio
          </Typography>
          <IconButton
            onClick={handleDrawerToggle}
            aria-label="Close navigation menu"
            sx={{
              color: '#30234A',
              p: 1,
              '&:hover': { backgroundColor: '#F0EAFE' },
            }}
          >
            <CloseIcon />
          </IconButton>
        </Box>
        <List sx={{ pt: 0 }}>
          {navItems.map((item) => {
            const isActive = activeSection === item.href.substring(1);
            return (
              <ListItem key={item.label} disablePadding sx={{ mb: 1 }}>
                <ListItemButton
                  href={item.href}
                  onClick={(e) => scrollTo(e, item.href)}
                  sx={{
                    borderRadius: '10px',
                    backgroundColor: isActive ? '#F0EAFE' : 'transparent',
                    color: isActive ? '#7952B3' : '#382F45',
                    fontWeight: isActive ? 700 : 600,
                    minHeight: 48,
                    py: 1.2,
                    px: 2,
                    '&:hover': {
                      backgroundColor: '#F0EAFE',
                      color: '#7952B3',
                    },
                  }}
                >
                  <ListItemText
                    primary={item.label}
                    primaryTypographyProps={{
                      fontSize: '0.98rem',
                      fontWeight: isActive ? 700 : 600,
                    }}
                  />
                </ListItemButton>
              </ListItem>
            );
          })}
        </List>
      </Drawer>
    </AppBar>
  );
};

export default Navbar;

