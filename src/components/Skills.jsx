import { Paper, Typography, Box, Grid, Stack } from '@mui/material';
import {
  FaReact, FaNodeJs, FaPython,
  FaAws, FaDatabase, FaGitAlt, FaJsSquare,
} from 'react-icons/fa';
import { SiMongodb, SiCplusplus, SiExpress, SiSubversion, SiCloudinary } from 'react-icons/si';
import { CARD, BG, BORDER, TEXT_SEC } from '../theme';

const skillGroups = [
  {
    label: 'Frontend',
    skills: [
      { name: 'React', icon: FaReact, color: '#61DAFB' },
      { name: 'JavaScript', icon: FaJsSquare, color: '#F7DF1E' },
    ],
  },
  {
    label: 'Backend',
    skills: [
      { name: 'Node.js', icon: FaNodeJs, color: '#339933' },
      { name: 'Express.js', icon: SiExpress, color: '#ffffff' },
      { name: 'Python', icon: FaPython, color: '#3776AB' },
      { name: 'MongoDB', icon: SiMongodb, color: '#47A248' },
      { name: 'SQL', icon: FaDatabase, color: '#00758F' },
    ],
  },
  {
    label: 'Languages & Tools',
    skills: [
      { name: 'C++', icon: SiCplusplus, color: '#00599C' },
      { name: 'AWS', icon: FaAws, color: '#FF9900' },
      { name: 'Cloudinary', icon: SiCloudinary, color: '#3448C5' },
      { name: 'Git', icon: FaGitAlt, color: '#F05032' },
      { name: 'SVN', icon: SiSubversion, color: '#809CC9' },
    ],
  },
];

const Skills = () => {
  return (
    <Stack spacing={3}>
      {skillGroups.map((group) => (
        <Box key={group.label}>
          <Typography
            variant="overline"
            sx={{
              color: TEXT_SEC,
              letterSpacing: '0.08em',
              fontSize: '0.75rem',
              display: 'block',
              mb: 1.5,
            }}
          >
            {group.label}
          </Typography>
          <Grid container spacing={2}>
            {group.skills.map((skill) => (
              <Grid item xs={6} sm={4} md={4} key={skill.name}>
                <Paper
                  elevation={0}
                  sx={{
                    p: 1.5,
                    height: '100%',
                    background: `linear-gradient(145deg, ${CARD} 0%, ${BG} 100%)`,
                    borderRadius: 2,
                    border: `1px solid ${BORDER}`,
                    transition: 'all 0.3s ease-in-out',
                    '&:hover': {
                      transform: 'translateY(-5px)',
                      boxShadow: '0 8px 32px rgba(0, 0, 0, 0.4)',
                      borderColor: skill.color + '40',
                    },
                  }}
                >
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    <skill.icon size={18} style={{ color: skill.color }} />
                    <Typography
                      variant="body1"
                      sx={{ color: '#ffffff', fontSize: '0.9rem' }}
                    >
                      {skill.name}
                    </Typography>
                  </Box>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Box>
      ))}
    </Stack>
  );
};

export default Skills;
