import React from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  IconButton,
  Typography,
  Button,
  Chip,
  Box
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import GitHubIcon from '@mui/icons-material/GitHub';
import LaunchIcon from '@mui/icons-material/Launch';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import StarOutlineIcon from '@mui/icons-material/StarOutline';
import LightbulbOutlinedIcon from '@mui/icons-material/LightbulbOutlined';
import BuildOutlinedIcon from '@mui/icons-material/BuildOutlined';
import CollectionsOutlinedIcon from '@mui/icons-material/CollectionsOutlined';

const ProjectModal = ({ project, open, onClose }) => {
  if (!project) return null;

  return (
    <Dialog
      open={open}
      onClose={onClose}
      maxWidth="md"
      fullWidth
      scroll="paper"
      PaperProps={{
        sx: {
          borderRadius: { xs: '16px', sm: '20px' },
          border: '1px solid #E8DFF5',
          backgroundColor: '#FFFFFF',
          overflow: 'hidden',
          m: { xs: 1.5, sm: 3 },
          boxShadow: '0 20px 50px rgba(76, 50, 122, 0.25)',
        },
      }}
    >
      {/* Modal Header */}
      <DialogTitle
        sx={{
          p: { xs: 2, sm: 2.5, md: 3 },
          borderBottom: '1px solid #E8DFF5',
          backgroundColor: '#FFFFFF',
          display: 'flex',
          alignItems: 'flex-start',
          justifyContent: 'space-between',
          gap: 1.5,
        }}
      >
        <div className="min-w-0 pr-2">
          <span className="text-xs font-bold tracking-widest text-[#7952B3] uppercase block mb-1">
            {project.category}
          </span>
          <Typography
            variant="h5"
            sx={{
              fontWeight: 800,
              color: '#30234A',
              fontSize: { xs: '1.15rem', sm: '1.35rem', md: '1.5rem' },
              lineHeight: 1.25,
            }}
          >
            {project.title}
          </Typography>
        </div>
        <IconButton
          onClick={onClose}
          aria-label="close modal"
          sx={{
            color: '#625B71',
            p: 1,
            flexShrink: 0,
            '&:hover': {
              color: '#30234A',
              backgroundColor: '#F0EAFE',
              transform: 'rotate(90deg)',
            },
            transition: 'all 0.3s ease',
          }}
        >
          <CloseIcon />
        </IconButton>
      </DialogTitle>

      {/* Modal Body */}
      <DialogContent sx={{ p: 0 }}>
        {/* Project Image Banner */}
        <div className="w-full max-h-80 overflow-hidden bg-gradient-to-br from-[#F0EAFE] to-[#E8DFF5] flex items-center justify-center relative">
          <img
            src={project.image || (project.screens && project.screens[0]?.url)}
            alt={project.title}
            className="w-full h-auto object-cover max-h-80"
            onError={(e) => {
              const target = e.currentTarget;
              if (!target.dataset.retried) {
                target.dataset.retried = '1';
                const current = project.image || (project.screens && project.screens[0]?.url);
                if (current) {
                  target.src = current.startsWith('/') ? current.slice(1) : '/' + current;
                  return;
                }
              }
              target.style.display = 'none';
            }}
          />
        </div>

        {/* Project Content Details */}
        <div className="p-4 sm:p-6 md:p-8 space-y-5 sm:space-y-6">
          {/* About Section */}
          <div>
            <div className="flex items-center gap-2 mb-2 text-[#30234A]">
              <InfoOutlinedIcon sx={{ color: '#7952B3', fontSize: 20 }} />
              <Typography variant="h6" sx={{ fontWeight: 700, fontSize: { xs: '1rem', sm: '1.1rem' } }}>
                About This Project
              </Typography>
            </div>
            <Typography variant="body1" sx={{ color: '#382F45', lineHeight: 1.75, fontSize: { xs: '0.92rem', sm: '1rem' } }}>
              {project.modalAbout}
            </Typography>
          </div>

          {/* Key Features */}
          {project.features && (
            <div>
              <div className="flex items-center gap-2 mb-3 text-[#30234A]">
                <StarOutlineIcon sx={{ color: '#7952B3', fontSize: 20 }} />
                <Typography variant="h6" sx={{ fontWeight: 700, fontSize: { xs: '1rem', sm: '1.1rem' } }}>
                  Key Features
                </Typography>
              </div>
              <ul className="space-y-2 pl-1">
                {project.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-[#382F45] text-xs sm:text-sm md:text-base leading-relaxed">
                    <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-[#7952B3] mt-2 flex-shrink-0"></span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Project Preview Gallery */}
          {project.gallery && project.gallery.length > 0 && (
            <div>
              <div className="flex items-center gap-2 mb-3 text-[#30234A]">
                <CollectionsOutlinedIcon sx={{ color: '#7952B3', fontSize: 20 }} />
                <Typography variant="h6" sx={{ fontWeight: 700, fontSize: { xs: '1rem', sm: '1.1rem' } }}>
                  Project Preview Gallery
                </Typography>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {project.gallery.map((imgSrc, idx) => (
                  <div key={idx} className="rounded-xl overflow-hidden border border-[#E8DFF5] shadow-xs bg-[#FAF8FF]">
                    <img
                      src={imgSrc}
                      alt={`${project.title} screenshot ${idx + 1}`}
                      className="w-full h-auto object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* What I Learned */}
          {project.learned && (
            <div>
              <div className="flex items-center gap-2 mb-2 text-[#30234A]">
                <LightbulbOutlinedIcon sx={{ color: '#7952B3', fontSize: 20 }} />
                <Typography variant="h6" sx={{ fontWeight: 700, fontSize: { xs: '1rem', sm: '1.1rem' } }}>
                  What I Learned
                </Typography>
              </div>
              <Typography variant="body1" sx={{ color: '#382F45', lineHeight: 1.75, fontSize: { xs: '0.92rem', sm: '1rem' } }}>
                {project.learned}
              </Typography>
            </div>
          )}

          {/* Technologies Used */}
          <div>
            <div className="flex items-center gap-2 mb-3 text-[#30234A]">
              <BuildOutlinedIcon sx={{ color: '#7952B3', fontSize: 20 }} />
              <Typography variant="h6" sx={{ fontWeight: 700, fontSize: { xs: '1rem', sm: '1.1rem' } }}>
                Technologies Used
              </Typography>
            </div>
            <div className="flex flex-wrap gap-1.5 sm:gap-2">
              {project.techStack.map((tech, idx) => (
                <Chip
                  key={idx}
                  label={tech}
                  size="small"
                  sx={{
                    backgroundColor: '#F0EAFE',
                    color: '#4C327A',
                    fontWeight: 700,
                    border: '1px solid #E8DFF5',
                    fontSize: '0.78rem',
                    py: 1.6,
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      </DialogContent>

      {/* Modal Actions */}
      <DialogActions
        sx={{
          p: { xs: 2, sm: 2.5 },
          borderTop: '1px solid #E8DFF5',
          backgroundColor: '#F0EAFE',
          display: 'flex',
          flexWrap: 'wrap',
          gap: 1.5,
          justifyContent: 'space-between',
        }}
      >
        <div className="flex items-center gap-2 flex-wrap w-full sm:w-auto">
          {project.liveUrl && (
            <Button
              variant="contained"
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              startIcon={<LaunchIcon />}
              sx={{
                backgroundColor: '#7952B3',
                color: '#FFFFFF',
                fontWeight: 700,
                fontSize: '0.85rem',
                px: 2.2,
                py: 0.8,
                flexGrow: { xs: 1, sm: 0 },
                '&:hover': {
                  backgroundColor: '#4C327A',
                },
              }}
            >
              Live Demo
            </Button>
          )}

          {project.githubUrl && (
            <Button
              variant="outlined"
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              startIcon={<GitHubIcon />}
              sx={{
                color: '#4C327A',
                borderColor: '#7952B3',
                fontWeight: 700,
                fontSize: '0.85rem',
                backgroundColor: '#FFFFFF',
                px: 2.2,
                py: 0.8,
                flexGrow: { xs: 1, sm: 0 },
                '&:hover': {
                  backgroundColor: '#7952B3',
                  color: '#FFFFFF',
                  borderColor: '#7952B3',
                },
              }}
            >
              View Source
            </Button>
          )}
        </div>

        <Button
          variant="contained"
          onClick={onClose}
          sx={{
            backgroundColor: '#4C327A',
            color: '#FFFFFF',
            fontWeight: 700,
            fontSize: '0.85rem',
            px: 2.8,
            py: 0.8,
            width: { xs: '100%', sm: 'auto' },
            '&:hover': {
              backgroundColor: '#30234A',
            },
          }}
        >
          Close
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default ProjectModal;
