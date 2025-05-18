import { Box, Typography, Paper } from '@mui/material';
import { motion } from 'framer-motion';
import { FaCode, FaCloud, FaLightbulb } from 'react-icons/fa';

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
          About Me
        </Typography>

        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
          <Box sx={{ display: 'flex', gap: 2, alignItems: 'flex-start' }}>
            <Box
              sx={{
                background: 'linear-gradient(135deg, #FF4B2B 0%, #FF416C 100%)',
                p: 1.5,
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 4px 20px rgba(255, 75, 43, 0.2)',
              }}
            >
              <FaCode size={20} color="#ffffff" />
            </Box>
            <Typography variant="body1" sx={{ color: '#bdbdbd', flex: 1 }} paragraph>
              I am a passionate Software Engineer with a strong foundation in modern web technologies
              and a keen interest in building scalable applications. My journey in software development
              has equipped me with a diverse skill set and a problem-solving mindset.
            </Typography>
          </Box>

          <Box sx={{ display: 'flex', gap: 2, alignItems: 'flex-start' }}>
            <Box
              sx={{
                background: 'linear-gradient(135deg, #4776E6 0%, #8E54E9 100%)',
                p: 1.5,
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 4px 20px rgba(71, 118, 230, 0.2)',
              }}
            >
              <FaCloud size={20} color="#ffffff" />
            </Box>
            <Typography variant="body1" sx={{ color: '#bdbdbd', flex: 1 }} paragraph>
              With experience in both frontend and backend development, I enjoy creating efficient,
              user-friendly applications that solve real-world problems. I'm particularly interested
              in cloud technologies, distributed systems, and modern architectural patterns.
            </Typography>
          </Box>

          <Box sx={{ display: 'flex', gap: 2, alignItems: 'flex-start' }}>
            <Box
              sx={{
                background: 'linear-gradient(135deg, #FFD700 0%, #FFA500 100%)',
                p: 1.5,
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 4px 20px rgba(255, 215, 0, 0.2)',
              }}
            >
              <FaLightbulb size={20} color="#ffffff" />
            </Box>
            <Typography variant="body1" sx={{ color: '#bdbdbd', flex: 1 }}>
              When I'm not coding, you can find me contributing to open-source projects, writing
              technical blog posts, or exploring new technologies. I believe in continuous learning
              and staying updated with the latest industry trends.
            </Typography>
          </Box>
        </Box>
      </Paper>
    </motion.div>
  );
};

export default AboutMe; 