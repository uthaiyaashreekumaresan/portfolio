import { createTheme } from '@mui/material/styles';

export const palette = {
  mainBg: '#FAF8FF',
  secondaryBg: '#F0EAFE',
  primaryPurple: '#7952B3',
  lavender: '#C4B5FD',
  darkPurple: '#4C327A',
  headingColor: '#30234A',
  bodyText: '#625B71',
  cardBg: '#FFFFFF',
  borderColor: '#E8DFF5',
};

const muiTheme = createTheme({
  palette: {
    primary: {
      main: palette.primaryPurple,
      dark: palette.darkPurple,
      light: palette.lavender,
      contrastText: '#FFFFFF',
    },
    secondary: {
      main: palette.lavender,
      dark: palette.primaryPurple,
      light: palette.secondaryBg,
      contrastText: palette.darkPurple,
    },
    background: {
      default: palette.mainBg,
      paper: palette.cardBg,
    },
    text: {
      primary: palette.headingColor,
      secondary: palette.bodyText,
    },
    divider: palette.borderColor,
  },
  typography: {
    fontFamily: "'Plus Jakarta Sans', 'Poppins', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
    h1: { color: palette.headingColor, fontWeight: 800, letterSpacing: '-0.02em' },
    h2: { color: palette.headingColor, fontWeight: 700, letterSpacing: '-0.01em' },
    h3: { color: palette.headingColor, fontWeight: 700 },
    h4: { color: palette.headingColor, fontWeight: 700 },
    h5: { color: palette.headingColor, fontWeight: 600 },
    h6: { color: palette.headingColor, fontWeight: 600 },
    body1: { color: '#3E354D', fontSize: '1.05rem', lineHeight: 1.8 },
    body2: { color: '#4E455E', fontSize: '0.95rem', lineHeight: 1.7 },
    button: { textTransform: 'none', fontWeight: 700 },
  },
  shape: {
    borderRadius: 12,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          padding: '10px 24px',
          transition: 'all 0.35s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 16,
          border: `1px solid ${palette.borderColor}`,
          backgroundColor: palette.cardBg,
          boxShadow: '0 2px 8px rgba(76, 50, 122, 0.06)',
          transition: 'all 0.35s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
        },
      },
    },
  },
});

export default muiTheme;

