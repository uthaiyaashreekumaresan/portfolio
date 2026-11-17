import React, { useState } from 'react';
import { Typography, Button, IconButton } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LaunchIcon from '@mui/icons-material/Launch';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import StarRateRoundedIcon from '@mui/icons-material/StarRateRounded';
import ProjectModal from './ProjectModal';
import { SkillIcon } from './SkillIcons';

const projectsData = [
  {
    id: 1,
    number: '01',
    featured: true,
    badgeText: 'FEATURED • FULL STACK',
    category: 'FULL STACK E-COMMERCE APPLICATION',
    title: 'Élixir Parfums – Premium Perfume E-commerce Website',
    shortTitle: 'Élixir Parfums',
    image: 'images/elixir-parfums.jpg',
    desc: 'Developed a modern and premium perfume e-commerce website featuring an elegant product catalog, category-based shopping, product details, shopping cart, user authentication, order management, and a dedicated admin dashboard for managing products and orders.',
    techList: ['React.js', 'Node.js', 'PostgreSQL', 'Tailwind CSS', 'Material UI', 'JavaScript'],
    liveUrl: '', // Ready for user's deployed URL
    githubUrl: 'https://github.com/uthaiyaashreekumaresan', // User's GitHub profile/repo
    screens: [
      {
        url: 'images/elixir-parfums.jpg',
        title: 'Boutique Storefront & Fragrance Showcase',
      },
      {
        url: 'images/elixir-parfums-2.jpg',
        title: 'Product Details, Fragrance Notes & Shopping Bag Drawer',
      },
    ],
    coreFeatures: [
      {
        icon: 'bi bi-gem',
        title: 'Artisanal Collections',
        desc: 'Curated luxury perfumes with scent notes, olfactive pyramid & imagery',
      },
      {
        icon: 'bi bi-grid-3x3-gap-fill',
        title: 'Category Browsing',
        desc: 'Seamless filtering for Men, Women, Unisex & bespoke Gift Sets',
      },
      {
        icon: 'bi bi-cart-check-fill',
        title: 'Interactive Cart & Orders',
        desc: 'Live subtotal recalculation, item quantity controls & checkout',
      },
      {
        icon: 'bi bi-shield-lock-fill',
        title: 'Auth & User Profiles',
        desc: 'Secure registration, encrypted login & personalized order tracking',
      },
      {
        icon: 'bi bi-speedometer2',
        title: 'Admin Management',
        desc: 'Dedicated portal for product CRUD, pricing & order fulfillment',
      },
      {
        icon: 'bi bi-phone-fill',
        title: 'Responsive Design',
        desc: 'Optimized touch navigation and layout across mobile, tablet & desktop',
      },
    ],
    modalAbout:
      'Élixir Parfums is an artisan, full-stack luxury perfume e-commerce web application designed to deliver a high-end online boutique shopping experience. The platform features a curated fragrance catalog, dynamic filtering by olfactory notes and gender categories, persistent shopping cart, customer accounts with order tracking, and a comprehensive administrative portal for real-time inventory and sales management.',
    features: [
      'Premium perfume product collections with high-resolution imagery and fragrance notes',
      'Category-wise product browsing (For Her, For Him, Unisex, Artisanal Blends, Gift Sets)',
      'Product details view with multi-image presentation and detailed scent descriptions',
      'Instant product search and real-time category filtering',
      'Interactive shopping cart functionality with live subtotal calculation and quantity controls',
      'User registration, secure authentication, and account profile management',
      'Wishlist feature to curate and save favorite fragrance selections',
      'Order management and order tracking from confirmation to delivery',
      'Secure checkout experience with payment integration workflow',
      'Comprehensive Admin Dashboard for managing products, prices, categories, and orders',
      'Fully responsive, mobile-first design crafted for smartphone, tablet, and desktop screens',
    ],
    learned:
      'This project brought together my complete full-stack web development training at UK Infotech: creating modular React components, managing complex UI state, architecting scalable backend endpoints, integrating database models, implementing security and authentication, and designing an elegant high-conversion user experience.',
    techStack: [
      'React.js',
      'JavaScript (ES6+)',
      'Node.js',
      'PostgreSQL',
      'Tailwind CSS',
      'Material UI',
      'REST APIs',
      'HTML5 & CSS3',
    ],
    gallery: [
      'images/elixir-parfums.jpg',
      'images/elixir-parfums-2.jpg',
    ],
  },
  {
    id: 2,
    number: '02',
    featured: false,
    badgeText: 'CSS3 PROJECT • RESPONSIVE',
    category: 'MODERN RESPONSIVE RESTAURANT WEBSITE',
    title: 'Spice Garden Restaurant – Modern Dining & Cuisine',
    shortTitle: 'Spice Garden Restaurant',
    image: 'images/spice-garden.png',
    desc: 'A modern responsive restaurant website created as my CSS project. The website focuses on responsive layouts, premium visual design, CSS animations, menu presentation, special offers, gallery and contact sections.',
    techList: ['HTML5', 'CSS3', 'Bootstrap', 'JavaScript'],
    liveUrl: '',
    githubUrl: 'https://github.com/uthaiyaashreekumaresan/spice-garden-website-',
    screens: [
      {
        url: 'images/spice-garden.png',
        title: 'Restaurant Home, Header & Dining Menu',
      },
      {
        url: 'images/projects/spice-dish.jpg',
        title: 'Signature Culinary Dishes & Specials',
      },
      {
        url: 'images/projects/spice-ambiance.jpg',
        title: 'Fine Dining Interior & Ambiance Gallery',
      },
    ],
    coreFeatures: [
      {
        icon: 'bi bi-aspect-ratio',
        title: 'Adaptive CSS Grid',
        desc: 'Advanced CSS Grid & Flexbox layouts adapting fluidly to all displays',
      },
      {
        icon: 'bi bi-stars',
        title: 'Smooth Animations',
        desc: 'Fluid keyframes, hover depth effects & animated section reveals',
      },
      {
        icon: 'bi bi-book-half',
        title: 'Interactive Food Menu',
        desc: 'Categorized menu presentation with pricing & gourmet ingredients',
      },
      {
        icon: 'bi bi-images',
        title: 'Visual Photo Gallery',
        desc: 'High-quality food presentation and dining ambiance gallery',
      },
      {
        icon: 'bi bi-tags-fill',
        title: 'Special Deals & Offers',
        desc: 'Promotional discount banners, chef specials & dining events',
      },
      {
        icon: 'bi bi-calendar2-check-fill',
        title: 'Table Reservations',
        desc: 'Interactive table booking section with location map & inquiry',
      },
    ],
    modalAbout:
      'Spice Garden Restaurant is a modern, fully responsive restaurant website that I developed as my CSS project. The website presents a premium dining experience with elegant visual design, smooth animations, and an intuitive user interface. This project demonstrates my ability to combine HTML5 with advanced CSS3 techniques to create visually appealing and responsive web layouts.',
    features: [
      'Fully responsive design that adapts to all screen sizes',
      'Premium visual design with custom color schemes and typography',
      'Smooth CSS animations and hover effects throughout',
      'Interactive food menu presentation with categories',
      'Special offers section with attractive card layouts',
      'Image gallery showcasing restaurant ambiance and dishes',
      'Contact section with location details and inquiry form',
    ],
    learned:
      'This project helped me master CSS3 features including Flexbox, Grid layout, media queries for responsiveness, CSS transitions and animations, gradient backgrounds, box shadows, and modern UI styling techniques.',
    techStack: ['HTML5', 'CSS3', 'Flexbox', 'CSS Grid', 'Animations', 'Media Queries'],
    gallery: [
      'images/spice-garden.png',
      'images/projects/spice-dish.jpg',
      'images/projects/spice-ambiance.jpg',
    ],
  },
  {
    id: 3,
    number: '03',
    featured: false,
    badgeText: 'HTML5 PROJECT • SEMANTIC WEB',
    category: 'EDUCATIONAL ACADEMY WEB PORTAL',
    title: 'Alpha Tech Training Institute – Educational Academy',
    shortTitle: 'Alpha Tech Training Institute',
    image: 'images/alpha-tech.png',
    desc: 'An educational institute website created as my HTML project. The project focuses on semantic HTML structure, navigation, content organization and clean webpage development.',
    techList: ['HTML5', 'CSS3'],
    liveUrl: '',
    githubUrl: 'https://github.com/uthaiyaashreekumaresan/html',
    screens: [
      {
        url: 'images/alpha-tech.png',
        title: 'Academy Home & Course Directory',
      },
      {
        url: 'images/projects/alpha-class.jpg',
        title: 'Interactive Classrooms & Faculty',
      },
      {
        url: 'images/projects/alpha-lab.jpg',
        title: 'Technical Computer Labs & Infrastructure',
      },
    ],
    coreFeatures: [
      {
        icon: 'bi bi-code-slash',
        title: 'Semantic HTML5 Markup',
        desc: 'Strict semantic hierarchy with accessible tags and layout structure',
      },
      {
        icon: 'bi bi-mortarboard-fill',
        title: 'Course Catalog Pages',
        desc: 'Comprehensive syllabus details, faculty listings & module topics',
      },
      {
        icon: 'bi bi-ui-checks',
        title: 'Student Enrollment Form',
        desc: 'Structured student registration forms with native field validation',
      },
      {
        icon: 'bi bi-geo-alt-fill',
        title: 'Campus & Contact Details',
        desc: 'Organized contact info, campus directions & inquiry channels',
      },
      {
        icon: 'bi bi-person-badge-fill',
        title: 'Expert Instructor Profiles',
        desc: 'Detailed mentor bios, specializations & student testimonials',
      },
      {
        icon: 'bi bi-laptop-fill',
        title: 'Interactive Tech Labs',
        desc: 'Hands-on practice labs, technical tools and infrastructure overview',
      },
    ],
    modalAbout:
      'Alpha Tech Training Institute is an educational institute website that I created as my first HTML project. The website showcases a complete training institute with course information, faculty details, and student enrollment features. This project was built purely with HTML5 to practice and demonstrate semantic HTML structure, proper content organization, and accessible web development practices.',
    features: [
      'Clean and semantic HTML5 structure with proper heading hierarchy',
      'Multi-page navigation with organized content sections',
      'Course listing pages with detailed descriptions',
      'Student enrollment form with proper input validation structure',
      'Contact section with address and communication details',
      'Responsive foundation using proper HTML structure',
    ],
    learned:
      'Through this project, I gained a strong understanding of HTML5 elements, semantic markup, page structure, navigation, forms, tables, and how to organize content effectively for the web.',
    techStack: ['HTML5', 'Semantic Markup', 'Forms', 'Tables', 'Navigation'],
    gallery: [
      'images/alpha-tech.png',
      'images/projects/alpha-class.jpg',
      'images/projects/alpha-lab.jpg',
    ],
  },
];

/**
 * Single Horizontal Project Showcase Card with Left Image Slider and Right Information.
 */
const ProjectShowcaseCard = ({ project, onOpenDetails }) => {
  const [currentScreen, setCurrentScreen] = useState(0);

  const screens = project.screens || [{ url: project.image, title: project.title }];
  const totalScreens = screens.length;

  const nextScreen = () => {
    setCurrentScreen((prev) => (prev + 1) % totalScreens);
  };

  const prevScreen = () => {
    setCurrentScreen((prev) => (prev - 1 + totalScreens) % totalScreens);
  };

  const handleLiveDemo = (e) => {
    if (!project.liveUrl) {
      e.preventDefault();
      onOpenDetails(project);
    }
  };

  return (
    <div className="bg-white rounded-2xl border border-[#E8DFF5] shadow-[0_8px_24px_rgba(76,50,122,0.06)] hover:shadow-[0_16px_36px_rgba(121,82,179,0.15)] hover:border-[#C4B5FD] transition-all duration-300 overflow-hidden mb-8 last:mb-0">
      {/* 1. Dark Header Bar */}
      <div className="bg-gradient-to-r from-[#241838] via-[#2F1F4A] to-[#201533] px-3.5 py-3 sm:px-5 md:px-6 md:py-3.5 border-b border-[#3D2C59] flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
        {/* Left Side: Title & Category */}
        <div className="min-w-0">
          <span className="text-[10px] font-bold tracking-[1.5px] text-[#C4B5FD] uppercase block mb-0.5">
            {project.category}
          </span>
          <h3 className="text-sm sm:text-base md:text-lg font-extrabold text-white tracking-tight break-words">
            {project.title}
          </h3>
        </div>

        {/* Right Side: Badges */}
        <div className="flex items-center gap-1.5 sm:gap-2 flex-wrap flex-shrink-0">
          {project.featured && (
            <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] sm:text-[11px] font-extrabold bg-[#7952B3] text-white shadow-xs border border-[#9A75D2]">
              <StarRateRoundedIcon sx={{ fontSize: 13 }} />
              FEATURED
            </span>
          )}
          <span className="px-2.5 py-0.5 rounded-full text-[10px] sm:text-[11px] font-bold bg-[#FAF8FF]/15 text-[#E8DFF5] border border-white/20">
            PROJECT {project.number}
          </span>
        </div>
      </div>

      {/* 2. Main Card Body (Left: Preview Slider, Right: Project Info) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 p-3.5 sm:p-5 md:p-6 bg-white items-start">
        {/* LEFT COLUMN: Large Project Preview & Interactive Gallery */}
        <div className="lg:col-span-6 xl:col-span-7 flex flex-col">
          {/* Main Large Image Preview Area */}
          <div className="relative w-full h-48 xs:h-56 sm:h-72 md:h-[310px] lg:h-[320px] rounded-xl overflow-hidden bg-[#F0EAFE] border border-[#E8DFF5] shadow-inner group">
            <img
              src={screens[currentScreen].url}
              alt={screens[currentScreen].title || project.title}
              className="w-full h-full object-cover object-top transition-all duration-500"
              onError={(e) => {
                const target = e.currentTarget;
                if (!target.dataset.retried) {
                  target.dataset.retried = '1';
                  const current = screens[currentScreen].url;
                  target.src = current.startsWith('/') ? current.slice(1) : '/' + current;
                  return;
                }
                target.style.display = 'none';
                if (target.nextElementSibling) {
                  target.nextElementSibling.style.display = 'flex';
                }
              }}
            />

            {/* Fallback Icon Box */}
            <div className="w-full h-full hidden flex-col items-center justify-center bg-gradient-to-br from-[#F0EAFE] to-[#E8DFF5] gap-2">
              <i className="bi bi-window-fullscreen text-4xl text-[#7952B3]"></i>
              <span className="font-bold text-[#30234A] text-xs">{project.shortTitle}</span>
            </div>

            {/* Floating Navigation Arrows */}
            {totalScreens > 1 && (
              <>
                <IconButton
                  onClick={prevScreen}
                  size="small"
                  aria-label="previous image"
                  sx={{
                    position: 'absolute',
                    left: 8,
                    top: '50%',
                    transform: 'translateY(-50%)',
                    backgroundColor: 'rgba(255, 255, 255, 0.92)',
                    color: '#4C327A',
                    boxShadow: '0 3px 10px rgba(0,0,0,0.15)',
                    '&:hover': {
                      backgroundColor: '#7952B3',
                      color: '#FFFFFF',
                    },
                  }}
                >
                  <ChevronLeftIcon fontSize="small" />
                </IconButton>
                <IconButton
                  onClick={nextScreen}
                  size="small"
                  aria-label="next image"
                  sx={{
                    position: 'absolute',
                    right: 8,
                    top: '50%',
                    transform: 'translateY(-50%)',
                    backgroundColor: 'rgba(255, 255, 255, 0.92)',
                    color: '#4C327A',
                    boxShadow: '0 3px 10px rgba(0,0,0,0.15)',
                    '&:hover': {
                      backgroundColor: '#7952B3',
                      color: '#FFFFFF',
                    },
                  }}
                >
                  <ChevronRightIcon fontSize="small" />
                </IconButton>
              </>
            )}

            {/* Screen Title Caption Bar */}
            <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-[#201533]/90 via-[#201533]/50 to-transparent p-2.5 pt-6 text-white flex items-center justify-between">
              <p className="text-xs font-semibold truncate text-[#FAF8FF]">
                {screens[currentScreen].title}
              </p>
              <span className="text-[10px] font-bold uppercase tracking-wider text-[#C4B5FD] flex-shrink-0 ml-2">
                Screen {currentScreen + 1}/{totalScreens}
              </span>
            </div>
          </div>

          {/* Screenshot Navigation Controls Below Preview */}
          <div className="flex items-center justify-between mt-2.5 px-0.5">
            {/* Numbered Navigation Buttons */}
            <div className="flex items-center gap-1.5">
              <span className="text-[11px] font-bold text-[#625B71] uppercase tracking-wider mr-1 hidden sm:inline-block">
                Screens:
              </span>
              {screens.map((_, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => setCurrentScreen(idx)}
                  className={`w-7 h-7 rounded-lg text-xs font-extrabold transition-all duration-200 border flex items-center justify-center ${
                    currentScreen === idx
                      ? 'bg-[#7952B3] text-white border-[#7952B3] shadow-xs scale-105'
                      : 'bg-[#FAF8FF] text-[#4C327A] border-[#E8DFF5] hover:bg-[#F0EAFE] hover:border-[#C4B5FD]'
                  }`}
                  aria-label={`View screen ${idx + 1}`}
                >
                  {idx + 1}
                </button>
              ))}
            </div>

            {/* Screen Indicator Badge */}
            <div className="px-2.5 py-0.5 rounded-full bg-[#F0EAFE] border border-[#E8DFF5] text-[#4C327A] font-extrabold text-[11px]">
              Screen {currentScreen + 1} of {totalScreens}
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN: Project Information & Highlights */}
        <div className="lg:col-span-6 xl:col-span-5 flex flex-col">
          {/* Project Description */}
          <p className="text-[#382F45] leading-relaxed text-xs sm:text-[13.5px] font-normal mb-3">
            {project.desc}
          </p>

          {/* Section: Core Features & Highlights */}
          <div className="mb-3">
            <div className="flex items-center gap-1.5 mb-2">
              <div className="w-5 h-5 rounded-md bg-[#F0EAFE] text-[#7952B3] flex items-center justify-center text-xs font-bold">
                <i className="bi bi-stars text-[11px]"></i>
              </div>
              <h4 className="text-[11px] font-extrabold text-[#30234A] uppercase tracking-wider">
                Core Features &amp; Highlights
              </h4>
            </div>

            {/* Small Information Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {project.coreFeatures.map((feat, idx) => (
                <div
                  key={idx}
                  className="p-2 rounded-lg bg-[#FAF8FF] border border-[#E8DFF5] hover:border-[#C4B5FD] hover:bg-white hover:shadow-xs transition-all duration-200 flex items-start gap-2"
                >
                  <div className="w-5 h-5 rounded bg-[#F0EAFE] text-[#7952B3] flex items-center justify-center text-xs flex-shrink-0 mt-0.5">
                    <i className={feat.icon}></i>
                  </div>
                  <div className="min-w-0">
                    <h5 className="text-[11.5px] font-bold text-[#30234A] leading-tight truncate">
                      {feat.title}
                    </h5>
                    <p className="text-[10.5px] text-[#625B71] leading-snug mt-0.5 line-clamp-2">
                      {feat.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Technology Stack with Official Logos */}
          <div className="mb-3.5">
            <span className="text-[10.5px] font-extrabold text-[#4C327A] uppercase tracking-wider block mb-1.5">
              Technologies Used
            </span>
            <div className="flex flex-wrap items-center gap-1.5">
              {project.techList.map((tName) => (
                <div
                  key={tName}
                  className="flex items-center gap-1 px-2 py-0.5 rounded-md bg-[#FAF8FF] border border-[#E8DFF5] hover:border-[#C4B5FD] transition-all duration-200"
                >
                  <SkillIcon name={tName} className="w-3.5 h-3.5 object-contain" />
                  <span className="text-[10.5px] font-bold text-[#30234A]">{tName}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Action Buttons: Live Demo, View Source, Case Study */}
          <div className="flex flex-wrap items-center gap-2 pt-3 border-t border-[#E8DFF5]">
            {/* Live Demo Button */}
            <Button
              variant="contained"
              href={project.liveUrl || undefined}
              target={project.liveUrl ? '_blank' : undefined}
              rel={project.liveUrl ? 'noopener noreferrer' : undefined}
              onClick={handleLiveDemo}
              startIcon={<LaunchIcon sx={{ fontSize: 15 }} />}
              sx={{
                backgroundColor: '#7952B3',
                color: '#FFFFFF',
                fontSize: { xs: '0.78rem', sm: '0.8rem' },
                fontWeight: 700,
                px: { xs: 1.8, sm: 2.2 },
                py: 0.8,
                flexGrow: { xs: 1, sm: 0 },
                borderRadius: '8px',
                boxShadow: '0 2px 8px rgba(121, 82, 179, 0.25)',
                '&:hover': {
                  backgroundColor: '#4C327A',
                  transform: 'translateY(-1px)',
                },
              }}
            >
              Live Demo
            </Button>

            {/* View Source (GitHub) Button */}
            <Button
              variant="outlined"
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              startIcon={<GitHubIcon sx={{ fontSize: 15 }} />}
              sx={{
                color: '#4C327A',
                borderColor: '#7952B3',
                borderWidth: '1.5px',
                fontSize: { xs: '0.78rem', sm: '0.8rem' },
                fontWeight: 700,
                backgroundColor: '#FFFFFF',
                px: { xs: 1.8, sm: 2.2 },
                py: 0.8,
                flexGrow: { xs: 1, sm: 0 },
                borderRadius: '8px',
                '&:hover': {
                  borderWidth: '1.5px',
                  backgroundColor: '#7952B3',
                  color: '#FFFFFF',
                  borderColor: '#7952B3',
                  transform: 'translateY(-1px)',
                },
              }}
            >
              View Source
            </Button>

            {/* Case Study Details Button */}
            <Button
              variant="text"
              onClick={() => onOpenDetails(project)}
              startIcon={<InfoOutlinedIcon sx={{ fontSize: 15 }} />}
              sx={{
                color: '#7952B3',
                fontSize: { xs: '0.78rem', sm: '0.8rem' },
                fontWeight: 700,
                px: { xs: 1.5, sm: 1.8 },
                py: 0.8,
                flexGrow: { xs: 1, sm: 0 },
                borderRadius: '8px',
                '&:hover': {
                  backgroundColor: '#F0EAFE',
                },
              }}
            >
              Project Details
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);

  const handleOpenModal = (project) => {
    setSelectedProject(project);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  return (
    <section id="projects" className="section-padding bg-[#FAF8FF] relative">
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#30234A]">
            Portfolio Projects
          </h2>
          <p className="text-[#382F45] max-w-xl mx-auto mt-2 text-base font-medium">
            Explore my actual web development and full-stack projects featuring interactive galleries, core highlights, and official tech stacks.
          </p>
          <div className="w-16 h-1 bg-[#7952B3] mx-auto mt-3 rounded-full"></div>
        </div>

        {/* Large Horizontal Showcase Cards Container */}
        <div className="max-w-6xl mx-auto">
          {projectsData.map((project) => (
            <ProjectShowcaseCard
              key={project.id}
              project={project}
              onOpenDetails={handleOpenModal}
            />
          ))}
        </div>
      </div>

      {/* In-Depth Project Detail Dialog */}
      <ProjectModal
        project={selectedProject}
        open={modalOpen}
        onClose={handleCloseModal}
      />
    </section>
  );
};

export default Projects;
