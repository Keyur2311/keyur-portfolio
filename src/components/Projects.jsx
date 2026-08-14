import { Box } from '@mui/material';
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
];

const Projects = () => {
  return (
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
  );
};

export default Projects;
