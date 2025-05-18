import { Paper, Typography, Box, Grid } from '@mui/material';
import { motion } from 'framer-motion';
import {
  FaReact, FaNodeJs, FaPython,
  FaAws, FaDatabase, FaGitAlt, FaJsSquare, FaNode
} from 'react-icons/fa';
import { SiMongodb, SiCplusplus, SiExpress, SiSubversion, SiCloudinary } from 'react-icons/si';

const skills = [
  { name: "React", icon: FaReact, color: '#61DAFB' },
  { name: "JavaScript", icon: FaJsSquare, color: '#F7DF1E' },
  { name: "C++", icon: SiCplusplus, color: '#00599C' },
  { name: "Node.js", icon: FaNodeJs, color: '#339933' },
  { name: "Express.js", icon: FaNode, color: '#ffffff' },
  { name: "Python", icon: FaPython, color: '#3776AB' },
  { name: "MongoDB", icon: SiMongodb, color: '#47A248' },
  { name: "SQL", icon: FaDatabase, color: '#00758F' },
  { name: "AWS", icon: FaAws, color: '#FF9900' },
  { name: "Cloudinary", icon: SiCloudinary, color: '#3448C5' },
  { name: "Git", icon: FaGitAlt, color: '#F05032' },
  { name: "SVN", icon: SiSubversion, color: '#809CC9' },
];

const Skills = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.3 }}
    >
      <Paper
        sx={{
          p: 4,
          mb: 4,
          background: 'linear-gradient(145deg, #121212 0%, #000000 100%)',
          borderRadius: 4,
          border: '1px solid #333333',
          boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)',
        }}
      >
        <Typography
          variant="h4"
          component="h2"
          gutterBottom
          sx={{
            fontWeight: 'bold',
            color: '#ffffff',
            mb: 3,
            position: 'relative',
            '&::after': {
              content: '""',
              position: 'absolute',
              bottom: -8,
              left: 0,
              width: '60px',
              height: '4px',
              background: '#333333',
              borderRadius: '2px',
            },
          }}
        >
          Skills
        </Typography>

        <Grid container spacing={2}>
          {skills.map((skill, index) => (
            <Grid item xs={6} sm={4} md={3} key={index}>
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <Paper
                  sx={{
                    p: 1.5,
                    height: '100%',
                    background: 'linear-gradient(145deg, #121212 0%, #000000 100%)',
                    borderRadius: 2,
                    border: '1px solid #333333',
                    transition: 'all 0.3s ease-in-out',
                    '&:hover': {
                      transform: 'translateY(-5px)',
                      boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)',
                      borderColor: (theme) => skill.color + '40',
                    },
                  }}
                >
                  <Box
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: 1,
                    }}
                  >
                    <skill.icon
                      size={18}
                      style={{
                        color: skill.color,
                      }}
                    />
                    <Typography
                      variant="body1"
                      sx={{
                        color: '#ffffff',
                        fontSize: '0.9rem',
                      }}
                    >
                      {skill.name}
                    </Typography>
                  </Box>
                </Paper>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Paper>
    </motion.div>
  );
};

export default Skills; 