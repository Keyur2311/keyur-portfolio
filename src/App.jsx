import { ThemeProvider, createTheme, CssBaseline, Container, Box } from '@mui/material';
import { motion } from 'framer-motion';
import ProfileCard from './components/ProfileCard';
import AboutMe from './components/AboutMe';
import Experience from './components/Experience';
import Education from './components/Education';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Footer from './components/Footer';
import StickyLinks from './components/StickyLinks';

// Create black theme
const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#000000', // Pure black
      light: '#212121',
      dark: '#000000',
    },
    secondary: {
      main: '#424242', // Dark grey
    },
    background: {
      default: '#000000', // Pure black
      paper: '#121212', // Very dark grey
    },
    text: {
      primary: '#ffffff',
      secondary: '#bdbdbd',
    },
  },
  typography: {
    fontFamily: '"Inter", "SF Pro Display", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
    h1: {
      fontSize: '2.5rem',
      fontWeight: 600,
      letterSpacing: '-0.02em',
    },
    h2: {
      fontSize: '2rem',
      fontWeight: 600,
      letterSpacing: '-0.01em',
    },
    h3: {
      fontSize: '1.75rem',
      fontWeight: 600,
      letterSpacing: '-0.01em',
    },
    h4: {
      fontSize: '1.5rem',
      fontWeight: 600,
      letterSpacing: '-0.01em',
    },
    h5: {
      fontSize: '1.25rem',
      fontWeight: 600,
      letterSpacing: '-0.01em',
    },
    h6: {
      fontSize: '1.1rem',
      fontWeight: 600,
      letterSpacing: '-0.01em',
    },
    subtitle1: {
      fontSize: '1rem',
      lineHeight: 1.5,
      letterSpacing: '-0.01em',
    },
    subtitle2: {
      fontSize: '0.9375rem',
      lineHeight: 1.5,
      letterSpacing: '-0.01em',
    },
    body1: {
      fontSize: '1rem',
      lineHeight: 1.6,
      letterSpacing: '-0.01em',
    },
    body2: {
      fontSize: '0.9375rem',
      lineHeight: 1.6,
      letterSpacing: '-0.01em',
    },
    caption: {
      fontSize: '0.875rem',
      letterSpacing: '-0.01em',
    },
    button: {
      fontSize: '0.9375rem',
      textTransform: 'none',
      letterSpacing: '-0.01em',
      fontWeight: 500,
    },
  },
  components: {
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundImage: 'linear-gradient(145deg, #121212 0%, #000000 100%)',
          borderColor: '#333333',
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderColor: '#333333',
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

const fadeInUp = {
  hidden: {
    y: 60,
    opacity: 0.3
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
};

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        style={{
          background: '#000000',
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          width: '100%',
        }}
      >
        <Container 
          maxWidth={false} 
          disableGutters
          sx={{
            py: 2,
            width: '100%',
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Box
            sx={{
              width: '65%',
              minWidth: { xs: '95%', sm: '85%', md: '65%' },
              display: 'flex',
              flexDirection: 'column',
              gap: 2,
              mx: 'auto',
            }}
          >
            <ProfileCard />
            
            <motion.div
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              <AboutMe />
            </motion.div>

            <motion.div
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              <Experience />
            </motion.div>

            <motion.div
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              <Education />
            </motion.div>

            <motion.div
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              <Projects />
            </motion.div>

            <motion.div
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              <Skills />
            </motion.div>

            <motion.div
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              <Footer />
            </motion.div>
          </Box>
        </Container>
        <StickyLinks />
      </motion.div>
    </ThemeProvider>
  );
}

export default App;
