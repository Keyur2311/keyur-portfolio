import { Paper, Typography, Box, Stack, Divider } from '@mui/material';
import { motion } from 'framer-motion';
import { FaBriefcase } from 'react-icons/fa';
import onlinesalesLogo from '../assets/onlinesales_logo.jpeg';
import hexarLogo from '../assets/hexar_logo.jpeg';

const experiences = [
  {
    title: "Software Development Intern",
    company: "Onlinesales.ai",
    location: "Pune, India",
    date: "Jan 2025 - Present",
    description: [
      "Automated Facebook Ads workflows with Python, Ruby, and MongoDB/MySQL, streamlining campaign creation and targeting.",
      "Optimized ad template and audience reach systems, scaling backend for thousands of concurrent ad operations.",
    ],
    logo: onlinesalesLogo,
  },
  {
    title: "Software Development Intern",
    company: "Hexar Games",
    location: "Ahmedabad, India",
    date: "May 2024 - July 2024",
    description: [
      "Worked with frontend team on a video game store, managing 400+ games with a dynamic, real-time interface.",
      "Added sorting and filtering with database techniques to enhance data retrieval speed.",
      "Created secure APIs for authentication, data access, and user management.",
    ],
    logo: hexarLogo,
  },
  // Add more experiences as needed
];

const Experience = () => {
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
          Experience
        </Typography>

        <Stack spacing={3} sx={{ width: '100%' }}>
          {experiences.map((experience, index) => (
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
                      background: experience.logo ? 'white' : 'linear-gradient(135deg, #FF4B2B 0%, #FF416C 100%)',
                      p: experience.logo ? 0.5 : 1.5,
                      borderRadius: '50%',
                      border: '2px solid rgba(255, 255, 255, 0.1)',
                      boxShadow: '0 4px 20px rgba(255, 75, 43, 0.2)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      width: experience.logo ? '40px' : 'auto',
                      height: experience.logo ? '40px' : 'auto',
                      flexShrink: 0
                    }}
                  >
                    {experience.logo ? (
                      <img 
                        src={experience.logo} 
                        alt={`${experience.company} logo`}
                        style={{
                          width: '100%',
                          height: '100%',
                          objectFit: 'contain',
                          borderRadius: '50%',
                        }}
                      />
                    ) : (
                      <FaBriefcase size={20} color="#ffffff" />
                    )}
                  </Box>
                  <Box sx={{ flex: '1 1 auto' }}>
                    <Typography variant="h6" sx={{ color: '#ffffff', mb: 0.5 }}>
                      {experience.title}
                    </Typography>
                    <Typography variant="subtitle1" sx={{ color: '#bdbdbd' }}>
                      {experience.company}
                    </Typography>
                    <Typography variant="subtitle2" sx={{ color: '#808080' }}>
                      {experience.location}
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
                  {experience.date}
                </Typography>
              </Box>
              <Box sx={{ width: '100%' }}>
                <ul style={{ 
                  listStyle: 'disc',
                  paddingLeft: '20px', 
                  margin: '0',
                  color: '#bdbdbd',
                  width: '100%'
                }}>
                  {experience.description.map((item, idx) => (
                    <li key={idx} style={{ width: '100%' }}>
                      <Typography 
                        variant="body2" 
                        paragraph 
                        sx={{ 
                          color: '#bdbdbd',
                          width: '100%',
                          pr: { xs: 0, sm: '140px' }  // Add right padding on desktop to align with the date
                        }}
                      >
                        {item}
                      </Typography>
                    </li>
                  ))}
                </ul>
              </Box>
            </Box>
          ))}
        </Stack>
      </Paper>
    </motion.div>
  );
};

export default Experience; 