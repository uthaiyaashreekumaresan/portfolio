import React from 'react';

/**
 * Authentic SVG icons with official brand colors for all skills and tools.
 */
export const SkillIcon = ({ name, className = 'w-10 h-10' }) => {
  switch (name) {
    // 1. Programming Languages
    case 'HTML5':
      return (
        <svg className={className} viewBox="0 0 128 128" fill="none">
          <path d="M19.2 115.2L8 0h112l-11.2 115.2L64 128l-44.8-12.8z" fill="#E44D26" />
          <path d="M64 117.3l35.8-9.9 9.3-95.4H64v105.3z" fill="#F16529" />
          <path d="M64 52.2H47.1l-1.2-13.4H64V25.5H31.8l3.4 40.1H64V52.2zm0 37.1l-.2.1-15.6-4.2-1-11.2H33.8l1.9 22.3 28.3 7.8V89.3z" fill="#EBEBEB" />
          <path d="M64 52.2h16.9l-1.6 17.9-15.3 4.1v13.8l28.3-7.8 3.5-39.2H64V52.2zm0-26.7v13.3h33.3l1.1-13.3H64z" fill="#FFFFFF" />
        </svg>
      );

    case 'CSS3':
      return (
        <svg className={className} viewBox="0 0 128 128" fill="none">
          <path d="M19.2 115.2L8 0h112l-11.2 115.2L64 128l-44.8-12.8z" fill="#1572B6" />
          <path d="M64 117.3l35.8-9.9 9.3-95.4H64v105.3z" fill="#33A9DC" />
          <path d="M64 52.2H47.1l-1.2-13.4H64V25.5H31.8l3.4 40.1H64V52.2zm0 37.1l-.2.1-15.6-4.2-1-11.2H33.8l1.9 22.3 28.3 7.8V89.3z" fill="#EBEBEB" />
          <path d="M64 52.2h32.2l-3 33.7-29.2 8.1V80.2l15.3-4.1 1.6-17.9H64V52.2zm0-26.7v13.3h33.3l1.1-13.3H64z" fill="#FFFFFF" />
        </svg>
      );

    case 'JavaScript':
      return (
        <svg className={className} viewBox="0 0 128 128">
          <rect width="128" height="128" rx="16" fill="#F7DF1E" />
          <path d="M72.5 98.7c2.3 3.8 5.6 6.3 11.2 6.3 5.8 0 9.5-2.9 9.5-7 0-4.9-3.9-6.7-10.7-9.6l-3.7-1.6c-10.5-4.5-17.5-10.2-17.5-22.3 0-11.1 8.7-19.6 22.3-19.6 9.7 0 16.7 3.5 21.6 12.1l-9.9 6.3c-2.3-4.1-4.9-5.9-9.5-5.9-4.5 0-7.7 2.9-7.7 6.6 0 4.5 3.1 6.3 9.4 9l3.7 1.6c12.3 5.3 19.1 10.7 19.1 23.3 0 13.3-10.4 20.7-24.7 20.7-13.9 0-22.8-6.6-26.7-16.1l13.6-8.2zM27 97.4l11.7-7.1c2.5 4.3 4.7 7.9 9.9 7.9 5.2 0 8.5-2.1 8.5-10.3V46.1h15.2v42.2c0 16.6-9.7 24.3-23.7 24.3-12.7 0-19.6-6.4-23.6-15.2z" fill="#000000" />
        </svg>
      );

    case 'TypeScript':
      return (
        <svg className={className} viewBox="0 0 128 128">
          <rect width="128" height="128" rx="16" fill="#3178C6" />
          <path d="M71.2 98.7c2.3 3.8 5.6 6.3 11.2 6.3 5.8 0 9.5-2.9 9.5-7 0-4.9-3.9-6.7-10.7-9.6l-3.7-1.6c-10.5-4.5-17.5-10.2-17.5-22.3 0-11.1 8.7-19.6 22.3-19.6 9.7 0 16.7 3.5 21.6 12.1l-9.9 6.3c-2.3-4.1-4.9-5.9-9.5-5.9-4.5 0-7.7 2.9-7.7 6.6 0 4.5 3.1 6.3 9.4 9l3.7 1.6c12.3 5.3 19.1 10.7 19.1 23.3 0 13.3-10.4 20.7-24.7 20.7-13.9 0-22.8-6.6-26.7-16.1l13.6-8.2zM21.5 46.1H60v12.5H48.1v48.8H33.4V58.6H21.5V46.1z" fill="#FFFFFF" />
        </svg>
      );

    // 2. Frontend Technologies
    case 'React.js':
      return (
        <svg className={className} viewBox="0 0 128 128" fill="none">
          <ellipse cx="64" cy="64" rx="48" ry="18" stroke="#61DAFB" strokeWidth="5" />
          <ellipse cx="64" cy="64" rx="48" ry="18" stroke="#61DAFB" strokeWidth="5" transform="rotate(60 64 64)" />
          <ellipse cx="64" cy="64" rx="48" ry="18" stroke="#61DAFB" strokeWidth="5" transform="rotate(120 64 64)" />
          <circle cx="64" cy="64" r="9" fill="#61DAFB" />
        </svg>
      );

    case 'Bootstrap':
      return (
        <svg className={className} viewBox="0 0 128 128">
          <rect width="128" height="128" rx="28" fill="#7952B3" />
          <path d="M41 33.5h27.3c14.6 0 23.4 7.2 23.4 18.5 0 8.2-5.4 14.5-13.3 16.5v.5c9.7 1.7 16.2 8.5 16.2 18.3 0 12.8-10.4 20.7-26.3 20.7H41V33.5zm15.8 23.8h10.4c6.3 0 10.1-3.2 10.1-8.2s-3.8-8.1-10.1-8.1H56.8v16.3zm0 33.7h11.9c7.2 0 11.6-3.4 11.6-8.9s-4.4-8.9-11.6-8.9H56.8V91z" fill="#FFFFFF" />
        </svg>
      );

    case 'Tailwind CSS':
      return (
        <svg className={className} viewBox="0 0 128 128" fill="none">
          <path d="M64 36c-16 0-26 8-30 24 6-8 13.3-11 22-9 5 1.1 8.5 4.7 12.5 8.7C75 66.2 83.5 75 102 75c16 0 26-8 30-24-6 8-13.3 11-22 9-5-1.1-8.5-4.7-12.5-8.7C91 44.8 82.5 36 64 36zM26 67c-16 0-26 8-30 24 6-8 13.3-11 22-9 5 1.1 8.5 4.7 12.5 8.7C37 97.2 45.5 106 64 106c16 0 26-8 30-24-6 8-13.3 11-22 9-5-1.1-8.5-4.7-12.5-8.7C53 75.8 44.5 67 26 67z" fill="#06B6D4" />
        </svg>
      );

    case 'Material UI':
      return (
        <svg className={className} viewBox="0 0 128 128" fill="none">
          <path d="M0 32l32-18.5 32 18.5v37l-32-18.5V32L0 50.5V32z" fill="#007FFF" />
          <path d="M64 32l32-18.5 32 18.5v37l-32 18.5-32-18.5v-37z" fill="#00B0FF" />
          <path d="M32 50.5l32 18.5v37L32 124.5v-37l32-18.5v-18.5L32 50.5z" fill="#007FFF" />
          <path d="M64 69l32 18.5v37L64 106V69z" fill="#0059B2" />
        </svg>
      );

    case 'Redux':
      return (
        <svg className={className} viewBox="0 0 128 128" fill="none">
          <ellipse cx="64" cy="64" rx="46" ry="17" stroke="#764ABC" strokeWidth="5.5" transform="rotate(-30 64 64)" />
          <ellipse cx="64" cy="64" rx="46" ry="17" stroke="#764ABC" strokeWidth="5.5" transform="rotate(30 64 64)" />
          <ellipse cx="64" cy="64" rx="46" ry="17" stroke="#764ABC" strokeWidth="5.5" transform="rotate(90 64 64)" />
          <circle cx="64" cy="64" r="8" fill="#764ABC" />
        </svg>
      );

    // 3. Backend & Database
    case 'Node.js':
      return (
        <svg className={className} viewBox="0 0 128 128">
          <path d="M64 12l50 29v58L64 128 14 99V41l50-29z" fill="#5FA04E" />
          <path d="M64 22L24 45v46l40 23 40-23V45L64 22z" fill="#333333" />
          <path d="M50 49v30h7v-17l16 17h7V49h-7v17L57 49h-7z" fill="#5FA04E" />
        </svg>
      );

    case 'MongoDB':
      return (
        <svg className={className} viewBox="0 0 128 128">
          <path d="M64 6s-28 26-28 58c0 24 16 43 28 58 12-15 28-34 28-58 0-32-28-58-28-58z" fill="#47A248" />
          <path d="M64 6v116c12-15 28-34 28-58 0-32-28-58-28-58z" fill="#499D4A" />
          <path d="M64 6v116c-1.5-1.9-3-3.8-4.5-5.8V11.8C61 9.8 62.5 7.9 64 6z" fill="#FFFFFF" opacity="0.3" />
        </svg>
      );

    case 'PostgreSQL':
      return (
        <svg className={className} viewBox="0 0 128 128" fill="none">
          <circle cx="64" cy="64" r="58" fill="#336791" />
          <path d="M64 24c-20 0-35 15-35 35 0 12 6 22 15 28v17l16-9c1.3.2 2.6.3 4 .3 20 0 35-15 35-35S84 24 64 24z" fill="#FFFFFF" />
          <path d="M62 38c-12 0-21 9-21 21 0 7 4 13 9 17v10l10-5c.7.1 1.4.2 2 .2 12 0 21-9 21-21s-9-22-21-22z" fill="#336791" />
        </svg>
      );

    case 'SQL':
      return (
        <svg className={className} viewBox="0 0 128 128" fill="none">
          <ellipse cx="64" cy="34" rx="42" ry="16" fill="#00758F" />
          <path d="M22 34v28c0 8.8 18.8 16 42 16s42-7.2 42-16V34c0 8.8-18.8 16-42 16s-42-7.2-42-16z" fill="#005B6F" />
          <path d="M22 62v28c0 8.8 18.8 16 42 16s42-7.2 42-16V62c0 8.8-18.8 16-42 16s-42-7.2-42-16z" fill="#F29111" />
        </svg>
      );

    // 4. Development Tools
    case 'Postman API':
      return (
        <svg className={className} viewBox="0 0 128 128">
          <circle cx="64" cy="64" r="56" fill="#FF6C37" />
          <path d="M96 52c-4-4-10-6-16-6-2 0-5 .3-7 .9L62 36l-4 4 10 12.3c-2 2-4 4.5-5 7.4L37 57l-1 5.4 26 4.6c1 3 3 5.7 5.7 7.7L62 92l5 2 8-15.5c2.7.6 5.5.8 8.4.5 13-1.4 22.4-12.7 21-25.7-.4-4-2-7.7-4.4-10.7zM80 76c-6.6 0-12-5.4-12-12s5.4-12 12-12 12 5.4 12 12-5.4 12-12 12z" fill="#FFFFFF" />
        </svg>
      );

    case 'Netlify':
      return (
        <svg className={className} viewBox="0 0 128 128" fill="none">
          <path d="M64 18l36 36-36 36-36-36 36-36z" fill="#00C7B7" />
          <path d="M100 54l14 14-36 36-14-14 36-36z" fill="#05988E" />
          <path d="M28 54L14 68l36 36 14-14-36-36z" fill="#20E5D4" />
          <path d="M64 90l18 18-18 18-18-18 18-18z" fill="#00C7B7" />
        </svg>
      );

    case 'Notion':
      return (
        <svg className={className} viewBox="0 0 128 128">
          <rect width="128" height="128" rx="20" fill="#000000" />
          <path d="M26 31.4l49.5-6.6c6.1-.8 7.6 1.4 7.6 6.5v58c0 4.8-2.3 6.9-7.3 7.3L27.6 103c-4.9.4-6.6-2.1-6.6-6.5V37.5c0-4.4 2-5.7 5-6.1zm44.3 9.4L40.2 44.8v49.1l30.1-4V40.8zm-16 11.2l12.4 27.6v-25l8.7-.9v33.7l-9.8.9-12.4-27.4v25.2l-8.9.9V52.8l10-.8z" fill="#FFFFFF" />
        </svg>
      );

    case 'Git & GitHub':
    case 'Git':
      return (
        <svg className={className} viewBox="0 0 128 128">
          <path d="M124 57L71 4a10 10 0 00-14 0L4 57a10 10 0 000 14l53 53a10 10 0 0014 0l53-53a10 10 0 000-14z" fill="#F05032" />
          <path d="M88 64a8 8 0 10-10-8l-12 12V43a8 8 0 10-6 0v26a8 8 0 004 7l12-12a8 8 0 0012 0z" fill="#FFFFFF" />
        </svg>
      );

    case 'GitHub':
      return (
        <svg className={className} viewBox="0 0 128 128">
          <circle cx="64" cy="64" r="56" fill="#181717" />
          <path fillRule="evenodd" clipRule="evenodd" d="M64 26C42.9 26 26 42.9 26 64c0 16.9 11 31.2 26.2 36.2 1.9.3 2.6-.8 2.6-1.8v-7c-10.6 2.3-12.8-4.5-12.8-4.5-1.7-4.4-4.2-5.6-4.2-5.6-3.4-2.4.3-2.3.3-2.3 3.8.3 5.8 3.9 5.8 3.9 3.4 5.8 8.9 4.1 11.1 3.2.3-2.5 1.3-4.1 2.4-5.1-8.5-1-17.4-4.2-17.4-18.8 0-4.2 1.5-7.6 3.9-10.2-.4-1-.1.7-4.3.4-10.1 0 0 3.2-1 10.5 3.9 3.1-.9 6.3-1.3 9.6-1.3s6.5.4 9.6 1.3c7.3-4.9 10.5-3.9 10.5-3.9 1.7 5.8.7 9.1.4 10.1 2.4 2.6 3.9 6 3.9 10.2 0 14.6-8.9 17.8-17.5 18.7 1.4 1.2 2.6 3.5 2.6 7v10.4c0 1 .7 2.2 2.6 1.8C91 95.2 102 80.9 102 64c0-21.1-16.9-38-38-38z" fill="#FFFFFF" />
        </svg>
      );

    case 'Express.js':
    case 'Express':
      return (
        <svg className={className} viewBox="0 0 128 128">
          <rect width="128" height="128" rx="20" fill="#000000" />
          <text x="64" y="78" fill="#FFFFFF" fontSize="48" fontFamily="Arial, sans-serif" fontWeight="bold" textAnchor="middle">ex</text>
        </svg>
      );

    case 'VS Code':
    case 'Visual Studio Code':
      return (
        <svg className={className} viewBox="0 0 128 128" fill="none">
          <path d="M96 16l-48 42-26-20-14 8v66l14 8 26-20 48 42 24-11V27L96 16z" fill="#007ACC" />
          <path d="M96 16L48 58l22 20 26-20V16z" fill="#1F9CF0" />
          <path d="M8 46l14-8 26 20-26 20-14-8V46z" fill="#0065A9" />
          <path d="M96 112L48 70l22-20 26 20v42z" fill="#1F9CF0" />
        </svg>
      );

    case 'MySQL':
      return (
        <svg className={className} viewBox="0 0 128 128" fill="none">
          <circle cx="64" cy="64" r="56" fill="#00758F" />
          <path d="M64 30c-18 0-32 12-32 28 0 10 6 18 15 23v17l17-10c0 0 0 0 0 0 18 0 32-12 32-28S82 30 64 30z" fill="#F29111" />
          <circle cx="54" cy="50" r="4" fill="#FFFFFF" />
        </svg>
      );

    case 'API Integration':
    case 'API Integrati...':
      return (
        <svg className={className} viewBox="0 0 128 128" fill="none">
          <rect width="128" height="128" rx="20" fill="#7952B3" />
          <rect x="24" y="32" width="80" height="52" rx="8" stroke="#FFFFFF" strokeWidth="8" />
          <path d="M44 96h40M64 84v12" stroke="#FFFFFF" strokeWidth="8" strokeLinecap="round" />
          <circle cx="48" cy="58" r="6" fill="#61DAFB" />
          <circle cx="64" cy="58" r="6" fill="#F7DF1E" />
          <circle cx="80" cy="58" r="6" fill="#47A248" />
        </svg>
      );

    case 'REST APIs':
    case 'REST API':
      return (
        <svg className={className} viewBox="0 0 128 128" fill="none">
          <rect width="128" height="128" rx="24" fill="#008080" />
          <path d="M30 64h68M72 40l26 24-26 24M56 88L30 64l26-24" stroke="#FFFFFF" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round" />
          <circle cx="64" cy="64" r="9" fill="#FFFFFF" />
        </svg>
      );

    // 5. AI Coding Assistants
    case 'GitHub Copilot':
      return (
        <svg className={className} viewBox="0 0 128 128" fill="none">
          <circle cx="64" cy="64" r="56" fill="#181717" />
          <path d="M42 48c0-12 10-22 22-22s22 10 22 22v16c0 14-10 26-22 26S42 78 42 64V48z" fill="#6E40C9" />
          <circle cx="53" cy="56" r="6" fill="#FFFFFF" />
          <circle cx="75" cy="56" r="6" fill="#FFFFFF" />
          <path d="M52 74c3.5 3.5 8 5 12 5s8.5-1.5 12-5" stroke="#FFFFFF" strokeWidth="4" strokeLinecap="round" />
        </svg>
      );

    case 'OpenAI Codex':
      return (
        <svg className={className} viewBox="0 0 128 128" fill="none">
          <circle cx="64" cy="64" r="56" fill="#00A67E" />
          <path d="M64 36c-15.5 0-28 12.5-28 28s12.5 28 28 28 28-12.5 28-28-12.5-28-28-28zm0 10c9.9 0 18 8.1 18 18s-8.1 18-18 18-18-8.1-18-18 8.1-18 18-18z" fill="#FFFFFF" />
          <circle cx="64" cy="64" r="8" fill="#FFFFFF" />
        </svg>
      );

    case 'Codeium':
      return (
        <svg className={className} viewBox="0 0 128 128">
          <circle cx="64" cy="64" r="56" fill="#09B6A2" />
          <path d="M84 46a25 25 0 00-40 0 25 25 0 000 36 25 25 0 0040 0" stroke="#FFFFFF" strokeWidth="9" strokeLinecap="round" fill="none" />
          <circle cx="64" cy="64" r="7" fill="#FFFFFF" />
        </svg>
      );

    case 'Tabnine':
      return (
        <svg className={className} viewBox="0 0 128 128" fill="none">
          <circle cx="64" cy="64" r="56" fill="#2468F2" />
          <path d="M40 44c0-6.6 5.4-12 12-12h24c6.6 0 12 5.4 12 12v18c0 13.3-10.7 24-24 24H52c-6.6 0-12-5.4-12-12V44z" fill="#FFFFFF" />
          <path d="M52 56h24v12c0 6.6-5.4 12-12 12s-12-5.4-12-12V56z" fill="#2468F2" />
        </svg>
      );

    case 'Google Antigravity':
      return (
        <svg className={className} viewBox="0 0 128 128" fill="none">
          <defs>
            <linearGradient id="agyGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#7952B3" />
              <stop offset="50%" stopColor="#4285F4" />
              <stop offset="100%" stopColor="#C4B5FD" />
            </linearGradient>
          </defs>
          <path d="M64 12l45 26v52L64 116 19 90V38L64 12z" fill="url(#agyGrad)" />
          <path d="M64 34l26 15v30L64 94 38 79V49l26-15z" fill="#FFFFFF" />
          <circle cx="64" cy="64" r="9" fill="#7952B3" />
        </svg>
      );

    case 'Claude':
      return (
        <svg className={className} viewBox="0 0 128 128" fill="none">
          <circle cx="64" cy="64" r="56" fill="#D97706" />
          <path d="M64 30v68M30 64h68M40 40l48 48M88 40L40 88" stroke="#FFFFFF" strokeWidth="10" strokeLinecap="round" />
        </svg>
      );

    // 6. AI Tools & Integrations
    case 'ChatGPT':
      return (
        <svg className={className} viewBox="0 0 128 128" fill="none">
          <circle cx="64" cy="64" r="56" fill="#10A37F" />
          <g stroke="#FFFFFF" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" fill="none">
            <path d="M64 42v44M46 52l36 24M46 76l36-24" />
            <circle cx="64" cy="64" r="26" strokeWidth="5" />
          </g>
        </svg>
      );

    case 'Google Gemini':
      return (
        <svg className={className} viewBox="0 0 128 128" fill="none">
          <defs>
            <linearGradient id="geminiGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#4E80EE" />
              <stop offset="50%" stopColor="#8E75B2" />
              <stop offset="100%" stopColor="#E26D8B" />
            </linearGradient>
          </defs>
          <rect width="128" height="128" rx="28" fill="url(#geminiGrad)" />
          <path d="M64 18c0 25.4-20.6 46-46 46 25.4 0 46 20.6 46 46 0-25.4 20.6-46 46-46-25.4 0-46-20.6-46-46z" fill="#FFFFFF" />
        </svg>
      );

    case 'Hugging Face':
      return (
        <svg className={className} viewBox="0 0 128 128">
          <circle cx="64" cy="64" r="56" fill="#FFD21E" />
          <circle cx="48" cy="56" r="6" fill="#000000" />
          <circle cx="80" cy="56" r="6" fill="#000000" />
          <path d="M46 76c4 8 10 12 18 12s14-4 18-12" stroke="#000000" strokeWidth="5" strokeLinecap="round" fill="none" />
          <path d="M26 62c0-8 6-14 14-14M102 62c0-8-6-14-14-14" stroke="#D97706" strokeWidth="5" strokeLinecap="round" fill="none" />
        </svg>
      );

    case 'LangChain':
      return (
        <svg className={className} viewBox="0 0 128 128">
          <circle cx="64" cy="64" r="56" fill="#1C3C3C" />
          <path d="M44 64a14 14 0 0114-14h12a14 14 0 0114 14 14 14 0 01-14 14H58a14 14 0 01-14-14z" stroke="#2D9A74" strokeWidth="7" fill="none" />
          <circle cx="44" cy="64" r="5" fill="#FFFFFF" />
          <circle cx="84" cy="64" r="5" fill="#FFFFFF" />
        </svg>
      );

    // 7. Frontend & UI Design
    case 'v0':
      return (
        <svg className={className} viewBox="0 0 128 128">
          <rect width="128" height="128" rx="24" fill="#000000" />
          <path d="M34 50l18 36 18-36M78 50a18 18 0 100 36 18 18 0 000-36z" stroke="#FFFFFF" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round" fill="none" />
        </svg>
      );

    case 'Figma AI':
      return (
        <svg className={className} viewBox="0 0 128 128" fill="none">
          <path d="M46 22h18v21H46a10.5 10.5 0 010-21z" fill="#F24E1E" />
          <path d="M64 22h18a10.5 10.5 0 010 21H64V22z" fill="#FF7262" />
          <path d="M46 43h18v21H46a10.5 10.5 0 010-21z" fill="#A259FF" />
          <circle cx="74.5" cy="53.5" r="10.5" fill="#1ABCFE" />
          <path d="M46 64h18v10.5a10.5 10.5 0 01-10.5 10.5A10.5 10.5 0 0146 74.5V64z" fill="#0ACF83" />
        </svg>
      );

    // 8. Testing & Debugging
    case 'BrowserStack':
      return (
        <svg className={className} viewBox="0 0 128 128" fill="none">
          <circle cx="50" cy="50" r="30" fill="#029BE5" opacity="0.9" />
          <circle cx="78" cy="78" r="30" fill="#FF7F00" opacity="0.9" />
          <circle cx="78" cy="50" r="18" fill="#FFFFFF" opacity="0.6" />
        </svg>
      );

    default:
      return (
        <svg className={className} viewBox="0 0 128 128" fill="none">
          <circle cx="64" cy="64" r="50" fill="#7952B3" />
          <path d="M44 64h40M64 44v40" stroke="#FFFFFF" strokeWidth="8" strokeLinecap="round" />
        </svg>
      );
  }
};

export default SkillIcon;

