import { Box, Typography, Container } from '@mui/material';
import ProjectCard from './ProjectCard';

const projects = [
  {
    title: "BrickSplit",
    description: "A platform enabling users to invest in fractional real estate ownership, diversify their portfolio, and earn passive income through property shares.",
    technologies: ["Node.js", "React.js", "MongoDB", "Cloudinary", "Bootstrap"],
    github: "https://github.com/Keyur2311/BrickSplit",
    live: "https://bricksplit.vercel.app/",
  },
  {
    title: "Samvaad",
    description: "A platform for users to engage in instant, seamless conversations and connect with others in real time.",
    technologies: ["Node.js", "React.js", "MongoDB", "Socket.io", "Express.js"],
    github: "https://github.com/Keyur2311/Samvaad",
    live: "https://samvaad-9me6.onrender.com/",
  },
  {
    title: "QuickTask",
    description: "A tool for planning daily tasks, focusing on what's important, and improving productivity with easy to-do list management.",
    technologies: ["React.js", "Node.js", "MongoDB"],
    github: "https://github.com/Keyur2311/QuickTask",
    live: "https://quicktask-app.vercel.app/",
  },
  {
    title: "Weather Dashboard",
    description: "Interactive weather application with real-time forecasts, radar maps, and location-based weather alerts.",
    technologies: ["React", "OpenWeather", "Mapbox"],
    github: "https://github.com/yourusername/weather-app",
    live: "https://your-weather-app.com",
  },
];

const Projects = () => {
  return (
    <Box
      sx={{
        background: '#000000',
        borderRadius: '16px',
        // border: '1px solid #333333',
        overflow: 'hidden',
        boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)',
      }}
    >
      <Container
        sx={{
          py: { xs: 4, md: 5 },
          px: { xs: 2, sm: 3, md: 4 },
        }}
      >
        {/* Section Header */}
        <Box
          sx={{
            mb: { xs: 4, md: 5 },
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
          }}
        >
          <Typography
            variant="h4"
            sx={{
              fontSize: { xs: '1.75rem', md: '2rem' },
              fontWeight: 700,
              color: '#fff',
              mb: 1,
              position: 'relative',
              '&::after': {
                content: '""',
                position: 'absolute',
                bottom: -8,
                left: 0,
                width: 48,
                height: 4,
                borderRadius: '2px',
                background: 'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)',
              },
            }}
          >
            Projects
          </Typography>
        </Box>

        {/* Projects Grid */}
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: {
              xs: '1fr',
              md: 'repeat(2, 1fr)',
            },
            gap: 3,
          }}
        >
          {projects.map((project, index) => (
            <Box key={index} sx={{ height: '100%' }}>
              <ProjectCard project={project} />
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default Projects; 