import { Box, Typography, Chip, IconButton } from '@mui/material';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { CARD, BORDER, BORDER_STRONG, TEXT_PRI, accentGradient } from '../theme';

const ProjectCard = ({ project }) => {
  return (
    <Box
      sx={{
        background: CARD,
        borderRadius: '12px',
        border: `1px solid ${BORDER}`,
        overflow: 'hidden',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        position: 'relative',
        transition: 'all 0.3s ease',
        '&:hover': {
          transform: 'translateY(-8px)',
          boxShadow: '0 16px 40px rgba(0, 0, 0, 0.5)',
          borderColor: BORDER_STRONG,
          '& .accent-bar': { opacity: 1 },
        },
      }}
    >
      {/* Accent bar — sits on top, intensifies on hover */}
      <Box
        className="accent-bar"
        sx={{
          height: 3,
          width: '100%',
          background: accentGradient(),
          opacity: 0.35,
          transition: 'opacity 0.3s ease',
        }}
      />

      <Box sx={{ p: 2.5, display: 'flex', flexDirection: 'column', flex: 1 }}>
        {/* Project Title */}
        <Typography
          variant="h6"
          sx={{
            fontSize: '1.125rem',
            fontWeight: 600,
            color: '#fff',
            mb: 1.5,
            letterSpacing: '-0.02em',
          }}
        >
          {project.title}
        </Typography>

        {/* Description */}
        <Typography
          sx={{
            fontSize: '0.875rem',
            color: '#a0a0a0',
            mb: 2,
            lineHeight: 1.6,
            flex: 1,
          }}
        >
          {project.description}
        </Typography>

        {/* Tech Stack */}
        <Box
          sx={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: 1,
            mb: 2.5,
          }}
        >
          {project.technologies.map((tech, index) => (
            <Chip
              key={index}
              label={tech}
              size="small"
              sx={{
                height: '22px',
                fontSize: '0.75rem',
                backgroundColor: 'rgba(255, 255, 255, 0.05)',
                color: '#d0d0d0',
                border: `1px solid ${BORDER}`,
                '&:hover': {
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
                },
              }}
            />
          ))}
        </Box>

        {/* Links */}
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'flex-end',
            gap: 1.5,
            mt: 'auto',
            pt: 1,
            borderTop: `1px solid ${BORDER}`,
          }}
        >
          <IconButton
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            size="small"
            aria-label={`${project.title} GitHub repository`}
            sx={{
              backgroundColor: 'rgba(255, 255, 255, 0.06)',
              color: '#fff',
              padding: '6px',
              '&:hover': {
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
              },
            }}
          >
            <FaGithub size={15} />
          </IconButton>
          <IconButton
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            size="small"
            aria-label={`${project.title} live demo`}
            sx={{
              background: accentGradient(),
              color: '#fff',
              padding: '6px',
              '&:hover': {
                background: 'linear-gradient(45deg, #1976D2 30%, #1CB5E0 90%)',
              },
            }}
          >
            <FaExternalLinkAlt size={13} />
          </IconButton>
        </Box>
      </Box>
    </Box>
  );
};

export default ProjectCard;
