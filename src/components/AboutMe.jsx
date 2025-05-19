import { Box, Typography, Paper } from '@mui/material';
import { motion } from 'framer-motion';

const AboutMe = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <Paper
        sx={{
          p: 4,
          background: '#000000',
          borderRadius: 4,
          boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)',
        }}
      >
        <Typography
          variant="h4"
          sx={{
            fontSize: { xs: '1.75rem', md: '2rem' },
            fontWeight: 700,
            color: '#fff',
            mb: 4,
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
          About Me
        </Typography>

        <Typography variant="body1" sx={{ color: '#bdbdbd' }}>
          I am a passionate Software Engineer with expertise in modern web technologies and cloud computing. I enjoy building scalable applications and contributing to open-source projects in my free time.
        </Typography>
      </Paper>
    </motion.div>
  );
};

export default AboutMe; 