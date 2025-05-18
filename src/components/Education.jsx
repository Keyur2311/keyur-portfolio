import { Paper, Typography, Box, Stack, Divider } from '@mui/material';
import { motion } from 'framer-motion';
import { FaGraduationCap } from 'react-icons/fa';
import nirmaLogo from '../assets/nirma_logo.jpeg';

const education = [
  {
    degree: "Computer Sceience and Engineering",
    institution: "Nirma University",
    location: "Ahmedabad, India",
    date: "2021 - 2025",
    logo: nirmaLogo
  },
  // Add more education entries as needed
];

const Education = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.3 }}
    >
      <Paper
        sx={{
          p: 4,
          background: '#000000',
          borderRadius: 4,
          // border: '1px solid #333333',
          boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)',
        }}
      >
          <Typography
            variant="h4"
            sx={{
              fontSize: { xs: '1.75rem', md: '2rem' },
              fontWeight: 700,
              color: '#fff',
              mb: 3,
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
          Education
        </Typography>

        <Stack spacing={3} sx={{ width: '100%' }}>
          {education.map((edu, index) => (
            <Box key={index} sx={{ width: '100%' }}>
              {index > 0 && (
                <Divider 
                  sx={{ 
                    my: 3, 
                    borderColor: '#333333',
                    opacity: 0.5,
                    width: '100%'
                  }} 
                />
              )}
              <Box sx={{ 
                display: 'flex', 
                flexDirection: { xs: 'column', sm: 'row' },
                alignItems: { xs: 'flex-start', sm: 'center' },
                justifyContent: 'space-between',
                width: '100%',
                mb: 2
              }}>
                <Box sx={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  gap: 2, 
                  mb: { xs: 2, sm: 0 },
                  flex: '1 1 auto'
                }}>
                  <Box
                    sx={{
                      background: edu.logo ? 'white' : 'linear-gradient(135deg, #4776E6 0%, #8E54E9 100%)',
                      p: edu.logo ? 0.5 : 1.5,
                      borderRadius: '50%',
                      border: '2px solid rgba(255, 255, 255, 0.1)',
                      boxShadow: '0 4px 20px rgba(71, 118, 230, 0.2)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      width: edu.logo ? '40px' : 'auto',
                      height: edu.logo ? '40px' : 'auto',
                      flexShrink: 0
                    }}
                  >
                    {edu.logo ? (
                      <img 
                        src={edu.logo} 
                        alt={`${edu.institution} logo`}
                        style={{
                          width: '100%',
                          height: '100%',
                          objectFit: 'contain',
                          borderRadius: '50%',
                        }}
                      />
                    ) : (
                      <FaGraduationCap size={20} color="#ffffff" />
                    )}
                  </Box>
                  <Box sx={{ flex: '1 1 auto' }}>
                    <Typography variant="h6" sx={{ color: '#ffffff', mb: 0.5 }}>
                      {edu.degree}
                    </Typography>
                    <Typography variant="subtitle1" sx={{ color: '#bdbdbd' }}>
                      {edu.institution}
                    </Typography>
                    <Typography variant="subtitle2" sx={{ color: '#808080' }}>
                      {edu.location}
                    </Typography>
                  </Box>
                </Box>
                <Typography 
                  variant="h6" 
                  sx={{ 
                    color: '#ffffff',
                    minWidth: { xs: 'auto', sm: '140px' },
                    textAlign: { xs: 'left', sm: 'right' },
                    fontSize: '1rem',
                    opacity: 0.8,
                    flexShrink: 0
                  }}
                >
                  {edu.date}
                </Typography>
              </Box>
            </Box>
          ))}
        </Stack>
      </Paper>
    </motion.div>
  );
};

export default Education; 