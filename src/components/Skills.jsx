import { Typography, Box, Stack } from '@mui/material';
import {
  FaReact, FaNodeJs, FaPython, FaGitAlt, FaJsSquare, FaGithub,
} from 'react-icons/fa';
import {
  SiCplusplus, SiExpress, SiMongodb, SiMysql, SiRedis,
  SiGooglebigquery, SiPostman, SiRender, SiSubversion, SiTemporal,
} from 'react-icons/si';
import { VscVscode } from 'react-icons/vsc';
import { BORDER, TEXT_SEC } from '../theme';

const skillGroups = [
  {
    label: 'Languages',
    skills: [
      { name: 'C++', icon: SiCplusplus, color: '#00599C' },
      { name: 'Python', icon: FaPython, color: '#3776AB' },
      { name: 'JavaScript', icon: FaJsSquare, color: '#F7DF1E' },
    ],
  },
  {
    label: 'Development',
    skills: [
      { name: 'React.js', icon: FaReact, color: '#61DAFB' },
      { name: 'Node.js', icon: FaNodeJs, color: '#339933' },
      { name: 'Express.js', icon: SiExpress, color: '#ffffff' },
    ],
  },
  {
    label: 'Databases',
    skills: [
      { name: 'MySQL', icon: SiMysql, color: '#4479A1' },
      { name: 'MongoDB', icon: SiMongodb, color: '#47A248' },
      { name: 'Redis', icon: SiRedis, color: '#FF4438' },
      { name: 'BigQuery', icon: SiGooglebigquery, color: '#669DF6' },
    ],
  },
  {
    label: 'Tools',
    skills: [
      { name: 'Git', icon: FaGitAlt, color: '#F05032' },
      { name: 'GitHub', icon: FaGithub, color: '#ffffff' },
      { name: 'SVN', icon: SiSubversion, color: '#809CC9' },
      { name: 'Postman', icon: SiPostman, color: '#FF6C37' },
      { name: 'Render', icon: SiRender, color: '#46E3B7' },
      { name: 'VS Code', icon: VscVscode, color: '#007ACC' },
      { name: 'Temporal', icon: SiTemporal, color: '#6B7FD7' },
    ],
  },
];

const Skills = () => {
  return (
    <Stack spacing={{ xs: 2.5, sm: 3 }}>
      {skillGroups.map((group) => (
        <Box
          key={group.label}
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', sm: 'row' },
            alignItems: { xs: 'flex-start', sm: 'center' },
            gap: { xs: 1, sm: 3 },
          }}
        >
          <Typography
            variant="overline"
            sx={{
              color: TEXT_SEC,
              letterSpacing: '0.08em',
              fontSize: '0.75rem',
              minWidth: { sm: 130 }, // aligns the chip columns across rows
              flexShrink: 0,
            }}
          >
            {group.label}
          </Typography>
          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
            {group.skills.map((skill) => (
              <Box
                key={skill.name}
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 0.75,
                  px: 1.25,
                  py: 0.5,
                  borderRadius: 999,
                  border: `1px solid ${BORDER}`,
                  background: 'rgba(255, 255, 255, 0.04)',
                  transition: 'all 0.25s ease',
                  '&:hover': {
                    borderColor: `${skill.color}55`,
                    background: 'rgba(255, 255, 255, 0.07)',
                    transform: 'translateY(-2px)',
                  },
                }}
              >
                <skill.icon size={14} style={{ color: skill.color }} />
                <Typography sx={{ fontSize: '0.85rem', color: '#d0d0d0' }}>
                  {skill.name}
                </Typography>
              </Box>
            ))}
          </Box>
        </Box>
      ))}
    </Stack>
  );
};

export default Skills;
