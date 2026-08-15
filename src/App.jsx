import { ThemeProvider, CssBaseline, Container, Box } from '@mui/material';
import { motion } from 'framer-motion';
import { darkTheme, BG, NAV_HEIGHT } from './theme';
import Navbar from './components/Navbar';
import ProfileCard from './components/ProfileCard';
import Section from './components/Section';
import AboutMe from './components/AboutMe';
import Experience from './components/Experience';
import Education from './components/Education';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Footer from './components/Footer';
import StickyLinks from './components/StickyLinks';

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Navbar />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        style={{
          background: BG,
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
              minWidth: { xs: '92%', sm: '85%', md: '65%' },
              display: 'flex',
              flexDirection: 'column',
              gap: 3,
              mx: 'auto',
              // clear the floating navbar at the top and the sticky social bar at the bottom
              pt: { xs: 2, sm: `${NAV_HEIGHT + 8}px` },
              pb: { xs: 8, sm: 10 },
            }}
          >
            <ProfileCard />

            <Section id="about" title="About Me">
              <AboutMe />
            </Section>

            <Section id="experience" title="Experience">
              <Experience />
            </Section>

            <Section id="education" title="Education">
              <Education />
            </Section>

            <Section id="projects" title="Projects">
              <Projects />
            </Section>

            <Section id="skills" title="Skills">
              <Skills />
            </Section>

            <Footer />
          </Box>
        </Container>
        <StickyLinks />
      </motion.div>
    </ThemeProvider>
  );
}

export default App;
