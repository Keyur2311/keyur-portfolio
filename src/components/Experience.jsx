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
      "Led development of microservices architecture using Node.js and Docker",
      "Implemented CI/CD pipelines reducing deployment time by 40%",
      "Mentored junior developers and conducted code reviews",
    ],
    logo: onlinesalesLogo,
  },
  {
    title: "Software Development Intern",
    company: "Hexar Games",
    location: "Ahmedabad, India",
    date: "May 2024 - July 2024",
    description: [
      "Worked with frontend team on a video game store, managing 400+ games with a dynamic, real-time interface",
      "Added sorting and filtering with database techniques to enhance data retrieval speed",
      "Created secure APIs for authentication, data access, and user management",
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
            mb: 4,
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
          Experience
        </Typography>

        <Stack spacing={3}>
          {experiences.map((experience, index) => (
            <Box key={index}>
              {index > 0 && (
                <Divider 
                  sx={{ 
                    my: 3, 
                    borderColor: '#333333',
                    opacity: 0.5 
                  }} 
                />
              )}
              <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                <Box sx={{ flex: 1, pr: 3 }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2 }}>
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
                    <Box>
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
                  <Box sx={{ pl: 6 }}>
                    <ul style={{ 
                      paddingLeft: '20px', 
                      margin: '0',
                      color: '#bdbdbd'
                    }}>
                      {experience.description.map((item, idx) => (
                        <li key={idx}>
                          <Typography variant="body2" paragraph sx={{ color: '#bdbdbd' }}>
                            {item}
                          </Typography>
                        </li>
                      ))}
                    </ul>
                  </Box>
                </Box>
                <Typography 
                  variant="h6" 
                  sx={{ 
                    color: '#ffffff',
                    minWidth: '140px',
                    textAlign: 'right',
                    fontSize: '1rem',
                    opacity: 0.8
                  }}
                >
                  {experience.date}
                </Typography>
              </Box>
            </Box>
          ))}
        </Stack>
      </Paper>
    </motion.div>
  );
};

export default Experience; 