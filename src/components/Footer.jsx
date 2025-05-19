import { Box, Container, Typography, Divider, IconButton } from '@mui/material';
import { motion } from 'framer-motion';
import { FaEnvelope, FaHeart, FaReact } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <motion.footer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Container maxWidth="lg">
        <Divider sx={{ mb: 4, bgcolor: '#333333' }} />
        
        <Box
          sx={{
            py: 4,
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: 2,
          }}
        >
          <Box sx={{ textAlign: { xs: 'center', md: 'left' } }}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1, justifyContent: { xs: 'center', md: 'flex-start' } }}>
              <Typography variant="h6" color="#ffffff" gutterBottom>
                Let's Connect
              </Typography>
              <FaHeart size={16} color="#FF4081" />
            </Box>
            <Typography variant="body2" color="#bdbdbd">
              Open for opportunities and collaborations
            </Typography>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mt: 1, justifyContent: { xs: 'center', md: 'flex-start' } }}>
              <FaEnvelope size={16} color="#42A5F5" />
              <Typography 
                component="a"
                href="mailto:patelkk2311@gmail.com"
                variant="body2" 
                color="#bdbdbd"
                sx={{ 
                  textDecoration: 'none',
                  '&:hover': {
                    color: '#ffffff',
                    textDecoration: 'underline'
                  }
                }}
              >
                patelkk2311@gmail.com
              </Typography>
            </Box>
          </Box>

          <Box sx={{ textAlign: { xs: 'center', md: 'right' } }}>
            <Typography variant="body2" color="#bdbdbd">
              © {currentYear} Keyur Patel
            </Typography>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mt: 1, justifyContent: { xs: 'center', md: 'flex-end' } }}>
              <Typography variant="body2" color="#bdbdbd">
                Built with
              </Typography>
              <FaReact size={16} color="#61DAFB" style={{ animation: 'spin 4s linear infinite' }} />
              <Typography variant="body2" color="#bdbdbd">
                React
              </Typography>
            </Box>
          </Box>
        </Box>
      </Container>
      <style>
        {`
          @keyframes spin {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
          }
        `}
      </style>
    </motion.footer>
  );
};

export default Footer; 