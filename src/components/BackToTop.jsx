import React, { useState, useEffect } from 'react';
import { Fab, Zoom } from '@mui/material';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

const BackToTop = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const checkScroll = () => {
      setVisible(window.scrollY > 350);
    };

    window.addEventListener('scroll', checkScroll);
    return () => window.removeEventListener('scroll', checkScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <Zoom in={visible}>
      <Fab
        size="small"
        onClick={scrollToTop}
        aria-label="scroll back to top"
        sx={{
          position: 'fixed',
          bottom: { xs: 20, sm: 28 },
          right: { xs: 20, sm: 28 },
          backgroundColor: '#7952B3',
          color: '#FFFFFF',
          width: { xs: 44, sm: 48 },
          height: { xs: 44, sm: 48 },
          boxShadow: '0 4px 16px rgba(121, 82, 179, 0.4)',
          zIndex: 1000,
          '&:hover': {
            backgroundColor: '#4C327A',
            transform: 'translateY(-3px)',
            boxShadow: '0 8px 24px rgba(76, 50, 122, 0.5)',
          },
          transition: 'all 0.3s ease',
        }}
      >
        <KeyboardArrowUpIcon />
      </Fab>
    </Zoom>
  );
};

export default BackToTop;

