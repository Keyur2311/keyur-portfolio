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
  {
    degree: "",
    institution: "Tech Institute",
    location: "New York, NY",
    date: "2013 - 2017",
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
          Education
        </Typography>

        <Stack spacing={3}>
          {education.map((edu, index) => (
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
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
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
                    <Box>
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