import { createTheme } from '@mui/material';

// ---- Shared design tokens -----------------------------------------------
// Single source of truth so components never hardcode hex values.
export const BG = '#0a0a0a'; // page background (near-black, softer than pure #000)
export const CARD = '#121212'; // surfaces / cards that lift off the background
export const BORDER = 'rgba(255, 255, 255, 0.08)';
export const BORDER_STRONG = 'rgba(255, 255, 255, 0.14)';
export const TEXT_PRI = '#ffffff';
export const TEXT_SEC = '#bdbdbd';
export const TEXT_MUTE = '#808080';
export const ACCENT_MAIN = '#2196F3';
export const ACCENT_LIGHT = '#21CBF3';

// The blue accent gradient, reused for section underlines, active nav, and CTAs.
export const accentGradient = (deg = 45) =>
  `linear-gradient(${deg}deg, ${ACCENT_MAIN} 30%, ${ACCENT_LIGHT} 90%)`;

export const NAV_HEIGHT = 64; // px, used for scroll offset + content padding

// ---- Theme ---------------------------------------------------------------
export const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: ACCENT_MAIN,
      light: ACCENT_LIGHT,
      dark: '#1976D2',
    },
    secondary: {
      main: '#424242',
    },
    background: {
      default: BG,
      paper: CARD,
    },
    text: {
      primary: TEXT_PRI,
      secondary: TEXT_SEC,
    },
    // Custom accent token (plain JS — MUI preserves extra palette keys).
    accent: {
      main: ACCENT_MAIN,
      light: ACCENT_LIGHT,
    },
    divider: BORDER,
  },
  shape: {
    borderRadius: 12,
  },
  typography: {
    fontFamily:
      '"Inter", "SF Pro Display", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
    h1: { fontSize: '2.5rem', fontWeight: 600, letterSpacing: '-0.02em' },
    h2: { fontSize: '2rem', fontWeight: 600, letterSpacing: '-0.01em' },
    h3: { fontSize: '1.75rem', fontWeight: 600, letterSpacing: '-0.01em' },
    h4: { fontSize: '1.5rem', fontWeight: 600, letterSpacing: '-0.01em' },
    h5: { fontSize: '1.25rem', fontWeight: 600, letterSpacing: '-0.01em' },
    h6: { fontSize: '1.1rem', fontWeight: 600, letterSpacing: '-0.01em' },
    subtitle1: { fontSize: '1rem', lineHeight: 1.5, letterSpacing: '-0.01em' },
    subtitle2: { fontSize: '0.9375rem', lineHeight: 1.5, letterSpacing: '-0.01em' },
    body1: { fontSize: '1rem', lineHeight: 1.6, letterSpacing: '-0.01em' },
    body2: { fontSize: '0.9375rem', lineHeight: 1.6, letterSpacing: '-0.01em' },
    caption: { fontSize: '0.875rem', letterSpacing: '-0.01em' },
    button: { fontSize: '0.9375rem', textTransform: 'none', letterSpacing: '-0.01em', fontWeight: 500 },
  },
  components: {
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundImage: `linear-gradient(145deg, ${CARD} 0%, ${BG} 100%)`,
          borderColor: BORDER,
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderColor: BORDER,
        },
      },
    },
    MuiTypography: {
      styleOverrides: {
        root: {
          textRendering: 'optimizeLegibility',
          WebkitFontSmoothing: 'antialiased',
          MozOsxFontSmoothing: 'grayscale',
        },
      },
    },
  },
});
